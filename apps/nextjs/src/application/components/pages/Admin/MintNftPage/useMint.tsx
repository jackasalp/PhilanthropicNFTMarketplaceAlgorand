import { useState } from 'react';
import algosdk from 'algosdk';
import { useAuth } from '$application/lib/auth/useAuth';
import { getAlgodClient } from '$service/utils/getAlgodClient';
import { uploadFile } from '../../../../utils/uploadFile';
import { getMyAlgo } from '$service/utils/getMyAlgoWallet';
import { getTraitsArray } from '$application/utils/utils';
import { useQueryClient } from 'react-query';

enum STATES {
  START = 'starting mint process',
  UPLOAD_FILE = 'uploading Asset',
  ENCRYPT_NOTE = 'encrypting note',
  CREATE_TXN = 'creating transaction',
  SIGN_TRANSACTION = 'signing transaction',
  SENDING_TRANSACTION = 'sending transaction',
  WAIT_TRANSACTION_CONFIRMATION = 'confirming transaction',
  DONE = 'mint process has been finished successfully',
}
interface Response {
  assetId: number;
}
interface IMintHook {
  onComplete?: (data: Response) => void;
  onError?: (err: any) => void;
}
export const useMint = ({ onComplete, onError }: IMintHook) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState<STATES | undefined>();
  const queryClient = useQueryClient();

  const mintHandler = async (data) => {
    setCurrentStep(STATES.START);
    const algodClient = await getAlgodClient(process.env.API_ALGO_EXPLORER_NODE);
    const params = await algodClient.getTransactionParams().do();
    const addr = user?.accountAddress!;
    const defaultFrozen = false;
    const decimals = 0;
    const totalIssuance = 1;
    const unitName = data.unitName;
    const assetName = data.assetName;
    setCurrentStep(STATES.UPLOAD_FILE);
    const assetURL = `ipfs://${await uploadFile(data.assetImage[0])}`;
    setCurrentStep(STATES.ENCRYPT_NOTE);
    const note = Uint8Array.from(
      Array.from(JSON.stringify(getARC69(data, data.assetImage[0].type, assetURL))).map((letter) =>
        letter.charCodeAt(0),
      ),
    );
    const assetMetadataHash = undefined;
    const manager = user?.accountAddress;
    const reserve = user?.accountAddress;
    const freeze = undefined;
    const clawback = undefined;

    setCurrentStep(STATES.CREATE_TXN);
    const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
      addr,
      note,
      totalIssuance,
      decimals,
      defaultFrozen,
      manager,
      reserve,
      freeze,
      clawback,
      unitName,
      assetName,
      assetURL,
      assetMetadataHash,
      params,
    );
    const myAlgoWallet = await getMyAlgo();

    setCurrentStep(STATES.SIGN_TRANSACTION);
    const rawSignedTxn = await myAlgoWallet.signTransaction(txn.toByte());

    setCurrentStep(STATES.SENDING_TRANSACTION);
    const tx = await algodClient.sendRawTransaction(rawSignedTxn.blob).do();

    setCurrentStep(STATES.WAIT_TRANSACTION_CONFIRMATION);
    // wait for transaction to be confirmed
    await algosdk.waitForConfirmation(algodClient, rawSignedTxn.txID, 4);

    // Get the new asset's information from the creator account
    const ptx = await algodClient.pendingTransactionInformation(tx.txId).do();

    const assetId = ptx['asset-index'];

    await queryClient.invalidateQueries('getAccountAssets');

    setCurrentStep(STATES.DONE);

    return assetId;
  };

  const onMint = async (data) => {
    try {
      const assetId = await mintHandler(data);
      onComplete?.({ assetId });
    } catch (err) {
      onError?.(err);
    }
  };
  const totalSteps = Object.keys(STATES).length;

  const progressValue =
    ((Object.values(STATES).findIndex((state) => state === currentStep) + 1) / totalSteps) * 100;

  return {
    onMint,
    isMinting: currentStep && currentStep !== STATES.DONE,
    currentStep,
    onComplete,
    progressedValue: progressValue,
  };
};

function getARC69(data, mimeType, assetUrl) {
  const traitsArray = getTraitsArray(data.traits);

  return {
    standard: 'arc69',
    description: data.description,
    mime_type: mimeType,
    media_url: assetUrl,
    external_url: assetUrl,
    properties: traitsArray,
  };
}
