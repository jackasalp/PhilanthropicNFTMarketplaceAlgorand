import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import { useAtom } from 'jotai';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { shouldLockActionAtom } from '../store';
import algosdk from 'algosdk';
import { getAlgodClient } from '$service/utils/getAlgodClient';
import { useAuth } from '$application/lib/auth/useAuth';
import { getMyAlgo } from '$service/utils/getMyAlgoWallet';
import { LoadingButton } from '@mui/lab';
import { Stack } from '@mui/material';
import truncateMiddle from 'truncate-middle';
import Launch from '@mui/icons-material/Launch';

export interface TipButtonProps {
  creatorWalletAddress: string;
}

enum ProgressSteps {
  GETTING_TRANSACTION_PARAMS = 'Getting Transaction Params',
  SIGN_TRANSACTION = 'Sign Opt-in Transaction',
  SEND_TRANSACTION = 'Sending Transaction',
  WAIT_FOR_CONFIRMATION = 'Waiting To Transaction Confirmed',
}
export const TipButton = (props: TipButtonProps) => {
  const [progress, setProgress] = useState<null | ProgressSteps>(null);
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [shouldLockActions, setShouldLockActions] = useAtom(shouldLockActionAtom);
  const [txnID, setTxnID] = useState<string | null>(null);
  const onTip = async () => {
    setShouldLockActions(true);
    try {
      if (!user) {
        enqueueSnackbar('You should sign first', { variant: 'error' });
        return;
      }

      const algodClient = getAlgodClient(process.env.API_ALGO_EXPLORER_NODE);

      setProgress(ProgressSteps.GETTING_TRANSACTION_PARAMS);
      const parameters = await algodClient.getTransactionParams().do();
      const sender = user?.accountAddress;
      const recipient = props.creatorWalletAddress;
      const assetId = 31566704;
      const revocationTarget = undefined;
      const closeRemainderTo = undefined;

      const amount = 1 * 10 ** 6;
      const note = Uint8Array.from([''].map((letter) => letter.charCodeAt(0)));

      const optTxn = algosdk.makeAssetTransferTxnWithSuggestedParams(
        sender,
        recipient,
        closeRemainderTo,
        revocationTarget,
        amount,
        note,
        assetId,
        parameters,
      );

      const myAlgoWallet = await getMyAlgo();

      setProgress(ProgressSteps.SIGN_TRANSACTION);
      const signedOptTxn = await myAlgoWallet.signTransaction(optTxn.toByte());

      setProgress(ProgressSteps.SEND_TRANSACTION);
      await algodClient.sendRawTransaction(signedOptTxn.blob).do();

      setProgress(ProgressSteps.WAIT_FOR_CONFIRMATION);
      await algosdk.waitForConfirmation(algodClient, signedOptTxn.txID, 4);
      setTxnID(signedOptTxn.txID);
      enqueueSnackbar('Buy Application Process Is Done Successfully.', { variant: 'success' });
    } catch (err: any) {
      // eslint-disable-next-line no-console
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setProgress(null);
      setShouldLockActions(false);
    }
  };

  const totalSteps = Object.keys(ProgressSteps).length;

  const progressValue =
    ((Object.values(ProgressSteps).findIndex((state) => state === progress) + 1) / totalSteps) *
    100;

  if (progress) {
    return <LinearProgressbar progressText={progress} progressNumber={progressValue} />;
  }

  return (
    <>
      <LoadingButton
        loading={progress ?? false}
        variant="contained"
        color="success"
        disabled={shouldLockActions}
        sx={{
          width: '100%',
          textTransform: 'capitalize',
          mb: '2rem',
          fontSize: '1.5rem',
          color: (theme) => theme.palette.error.contrastText,
        }}
        onClick={onTip}
      >
        Tip 1 USDC
      </LoadingButton>
      {txnID && (
        <Stack direction="row" justifyContent="center" spacing={1}>
          <div>{truncateMiddle(txnID ?? '', 5, 5, '...')}</div>
          <a href={`${process.env.API_ALGO_EXPLORER}/tx/${txnID}`} target="_blank" rel="noreferrer">
            <Launch style={{ cursor: 'pointer' }} />
          </a>
        </Stack>
      )}
    </>
  );
};

export default TipButton;
