import { Config } from "@/config";

import { Repository, UpdateResult } from "typeorm";
import { Wallet } from "@/models";

interface IWalletService {
  getAuthNonce(walletAddress: string): Promise<string>;
  setAuthNonce(walletAddress: string, authNonce: string): Promise<UpdateResult>;
}

export class WalletService implements IWalletService {
  private readonly config: Config;
  private readonly stdlib: any;

  private readonly walletRepository: Repository<Wallet>;

  constructor(
    stdlib: any,
    config: Config,
    walletRepository: Repository<Wallet>
  ) {
    this.stdlib = stdlib;
    this.walletRepository = walletRepository;
    this.config = config;
  }

  
  async getAuthNonce(walletAddress: string) {
    return (
      await this.walletRepository.findOne(
        { where:{ address: walletAddress} },
      )
    )?.authNonce;
  }

  async setAuthNonce(walletAddress: string, authNonce: string) {
    try {
      await this.walletRepository.findOneOrFail({ where:{address:walletAddress} })
    } catch (error) {
      await this.walletRepository.insert({ address: walletAddress })
    }

    return this.walletRepository.update(
      { address: walletAddress },
      { authNonce }
    );
  }


  async getWalletByAddress(walletAddress:string){
    return this.walletRepository.find({where:{address:walletAddress}})
  }
}
