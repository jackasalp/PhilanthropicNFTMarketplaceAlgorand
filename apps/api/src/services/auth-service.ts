import { Config } from '@/config';
import { UserService } from '@/services';

import jwt from 'jsonwebtoken';
import algosdk from 'algosdk';
import { TextEncoder, TextDecoder } from 'util';

import nacl from 'tweetnacl';
import { WalletService } from './wallet-service';

const AUTH_V1_JSON_PREFIX = 'auth/v1:j';

interface IAuthService {
  initiateAuth(address: string): Promise<string>;

  connectWallet(address: string, encodedSignedTxn: string, encodedTxn: string): Promise<string>;
}

export class AuthService implements IAuthService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly userService: UserService;
  private readonly walletService: WalletService;

  constructor(stdlib: any, config: Config, userService: UserService, walletService: WalletService) {
    this.stdlib = stdlib;
    this.userService = userService;
    this.walletService = walletService;
    this.config = config;
  }

  async initiateAuth(address: string): Promise<string> {
    const toHex = (buffer: Uint8Array) => {
      return Array.prototype.map.call(buffer, (x) => x.toString(16).padStart(2, '0')).join('');
    };

    const realm: string = '';
    const notice: string = '';

    const provider = await this.stdlib.getProvider();

    if (!provider.algodClient) {
      throw new Error('expecting algo provider');
    }

    const client = provider.algodClient;

    await client.status().do();
    const suggestedParams = await client.getTransactionParams().do();
    const nonce = toHex(nacl.randomBytes(16));
    const note = AUTH_V1_JSON_PREFIX + '***' + JSON.stringify({ realm, notice, nonce });
    const enc = new TextEncoder();

    const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from: address,
      to: address,
      amount: 0,
      note: enc.encode(note),
      suggestedParams: { ...suggestedParams },
    });

    // Make the txn invalid so that it cannot be executed by the network
    txn.lastRound = 1;
    txn.firstRound = 2;

    const txnBytes = algosdk.encodeObj(txn.get_obj_for_encoding());
    const encodedTxn = Buffer.from(txnBytes).toString('base64');

    await this.walletService.setAuthNonce(address, nonce);

    return encodedTxn;
  }

  // async signAuthTxn(encodedTxn: string, accountSvc: AccountService) {
  //   const abEqual = (a: Uint8Array, b: Uint8Array) => {
  //     if (a.length !== b.length) return false;
  //     for (let i = 0; i < a.length; i++) {
  //       if (a[i] !== b[i]) return false;
  //     }
  //     return true;
  //   };

  //   const txn = algosdk.decodeUnsignedTransaction(
  //     Buffer.from(encodedTxn, 'base64')
  //   );

  //   const accountMnemonic = accountSvc.generateAccountMnemonic(
  //     this.config.masterMnemonic,
  //     1
  //   );

  //   const account = await algosdk.mnemonicToSecretKey(accountMnemonic);

  //   /*
  //   //ARC-0014 sanity checks
  //   if (!abEqual(txn.from.publicKey, txn.to.publicKey)) {
  //     throw new Error("Transaction TO and FROM addresses are not equal");
  //   }
  //   if (algosdk.encodeAddress(txn.to.publicKey) !== account.addr) {
  //     throw new Error(
  //       "Transaction TO address does not mach the supplied account"
  //     );
  //   }
  //   if (txn.lastRound > txn.firstRound) {
  //     throw new Error("Auth TXN last-round should be less than first-round");
  //   }
  //   const dec = new TextDecoder();
  //   const note = dec.decode(txn.note);

  //   //ARC-0014 V1 auth metadata check
  //   if (!note.startsWith(AUTH_V1_JSON_PREFIX)) {
  //     throw new Error("Required note prefix is missing");
  //   }
  //   const authInfo = JSON.parse(note.substr(AUTH_V1_JSON_PREFIX.length));

  //   if (!(authInfo.realm?.length > 0)) {
  //     throw new Error("Auth realm is missing");
  //   }
  //
  //   console.dir(authInfo);

  //   */
  //   const stxn = txn.signTxn(account.sk);

  //
  //
  //   return btoa(String.fromCharCode.apply(null, stxn));
  // }

  private async verify(
    txn: algosdk.Transaction,
    signedTxn: algosdk.SignedTransaction,
    nonce: string,
  ) {
    const dec = new TextDecoder();

    const sections = dec.decode(txn.note).split('***');

    if (sections.length != 2) throw new Error('invalid txn');

    const noteObj = JSON.parse(sections[1]);

    if (noteObj.nonce !== nonce) throw new Error('invalid or expired txn. please try again');

    //
    const verifyAlgoSig = (message: Uint8Array, signature: Uint8Array, verifyKey: Uint8Array) => {
      return nacl.sign.detached.verify(message, signature, verifyKey);
    };

    // Check if signed TXN is the original one (with optional nonce)
    if (!signedTxn.txn.bytesToSign().equals(txn.bytesToSign())) {
      throw new Error('unauthorized');
    }

    const verified = verifyAlgoSig(signedTxn.txn.bytesToSign(), signedTxn.sig!, txn.to.publicKey);

    if (!verified) {
      throw new Error('unauthorized');
    }
  }

  async connectWallet(
    address: string,
    encodedTxn: string,
    encodedSignedTxn: string,
  ): Promise<string> {
    const txn = algosdk.decodeUnsignedTransaction(Buffer.from(encodedTxn, 'base64'));

    const storedAuthNonce = await this.walletService.getAuthNonce(address);

    if (!storedAuthNonce) throw new Error('please initialize auth again');

    const signedTxn = algosdk.decodeSignedTransaction(Buffer.from(encodedSignedTxn, 'base64'));

    await this.verify(txn, signedTxn, storedAuthNonce);

    await this.walletService.setAuthNonce(address, null);

    let user = await this.userService.getUserByWalletAddress(address);
    if (!user) {
      user = await this.userService.createUser(address);
    }
    return jwt.sign({ userId: user.id, address }, this.config.jwtToken, {
      expiresIn: '2h',
    });
  }
}
