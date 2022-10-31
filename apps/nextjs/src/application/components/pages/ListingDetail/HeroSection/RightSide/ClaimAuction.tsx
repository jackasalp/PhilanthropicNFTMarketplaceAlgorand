/* eslint-disable no-console */
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import { getStdlib } from '$application/lib/getStdlib';
import { syncAuction } from '$service/auction/syncAuction';
import * as auctionContract from '$service/contracts/auction-contract';
import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { shouldLockActionAtom } from '../store';

export interface BuyButtonProps {
  appId: number;
}

enum ProgressSteps {
  CONNECT_WALLET = 'Connecting wallet...',
  OPTIN_APPLICATION = 'Opt-in Application...',
  BUYING = 'Buying...',
  BALANCE_CHECK = 'Checking balance...',
  CLOSE_CONTRACT = 'Closing contract...',
  CLOSE_CONFIRM = 'Waiting for close auction to be confirmed on the blockchain...',
}

export const ClaimAuctionButton = (props: BuyButtonProps) => {
  const [progress, setProgress] = useState<null | ProgressSteps>(null);
  const router = useRouter();
  const [shouldLockActions, setShouldLockActions] = useAtom(shouldLockActionAtom);
  const queryClient = useQueryClient();

  const { enqueueSnackbar } = useSnackbar();
  const { mutateAsync: syncAuctionMutate } = useMutation(syncAuction);

  const onClaimAuction = async () => {
    setShouldLockActions(true);
    const stdlib = await getStdlib();

    try {
      setProgress(ProgressSteps.CONNECT_WALLET);
      const account = await stdlib?.getDefaultAccount();

      setProgress(ProgressSteps.CLOSE_CONTRACT);
      const ctc = account.contract(auctionContract, Number(props.appId));

      await syncAuctionMutate(props.appId);

      try {
        await ctc.a.Bidder.close(null);
      } catch (error: any) {
        enqueueSnackbar(error.message, { variant: 'error' });
        setShouldLockActions(false);
        if (!error.message.includes('Expected the DApp to be in state')) throw error; // ignore state issue
      }

      await auctionContract.Closer(ctc, {});

      await queryClient.invalidateQueries(`getAuctionDetails_${props.appId}`);

      setProgress(ProgressSteps.CLOSE_CONFIRM);
      enqueueSnackbar('Claim Process Is Done Successfully.', { variant: 'success' });

      router.push('/admin');
    } catch (err: any) {
      let errorMessage = 'Failed to claim the auction.';

      if (err.message.includes("hasn't closed the auction yet")) {
        errorMessage = "System hasn't closed the auction yet.";
      }
      enqueueSnackbar(errorMessage, { variant: 'error' });
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
    <Button
      variant="contained"
      color="primary"
      disabled={shouldLockActions}
      sx={{
        width: '100%',
        textTransform: 'capitalize',
        mb: '2rem',
        fontSize: '1.5rem',
        color: (theme) => theme.palette.error.contrastText,
      }}
      onClick={onClaimAuction}
    >
      Claim
    </Button>
  );
};

export default ClaimAuctionButton;
