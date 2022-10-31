/* eslint-disable no-console */
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import { getStdlib } from '$application/lib/getStdlib';
import { syncAuction } from '$service/auction/syncAuction';
import { syncBuyNow } from '$service/buyNow/syncBuyNow';
import * as auctionContract from '$service/contracts/auction-contract';
import * as buyNowContract from '$service/contracts/buynow-contract';
import { Listing } from '$service/listings/types';
import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { shouldLockActionAtom } from '../store';

export interface CloseListingProps {
  appId: number;
  type: Listing['type'];
}

enum CloseProgressSteps {
  CONNECT_WALLET = 'Connecting wallet...',
  CLOSE_CONTRACT = 'Closing contract...',
  CLOSE_CONFIRM = 'Waiting for close auction to be confirmed on the blockchain...',
  CLOSE_BUYNOW = 'Waiting for close Fixed Sale to be confirmed on the blockchain...',
}
export const CloseButton = (props: CloseListingProps) => {
  const [progress, setProgress] = useState<null | CloseProgressSteps>(null);
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();
  const [shouldLockActions, setShouldLockActions] = useAtom(shouldLockActionAtom);

  const { mutateAsync: syncAuctionMutate } = useMutation(syncAuction);

  const { mutateAsync: syncBuyNowMutate } = useMutation(syncBuyNow);

  const onCloseBuyNow = async () => {
    setShouldLockActions(true);
    const stdlib = await getStdlib();

    try {
      setProgress(CloseProgressSteps.CONNECT_WALLET);
      const account = await stdlib?.getDefaultAccount();
      const ctc = account.contract(buyNowContract, Number(props.appId));
      setProgress(CloseProgressSteps.CLOSE_CONTRACT);

      try {
        await ctc.a.BuyerApi.close(1);
      } catch (err: any) {
        enqueueSnackbar(err.message, { variant: 'error' });
        setProgress(null);
        setShouldLockActions(false);
      }

      await syncBuyNowMutate(props.appId);
      await queryClient.invalidateQueries(`getBuyNowDetails_${props.appId}`);

      setProgress(CloseProgressSteps.CLOSE_BUYNOW);
      enqueueSnackbar('Close Process Is Done Successfully.', { variant: 'success' });
    } catch (err: any) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setProgress(null);
      setShouldLockActions(false);
    }
  };

  const onCloseAuction = async () => {
    const stdlib = await getStdlib();
    setShouldLockActions(true);
    try {
      setProgress(CloseProgressSteps.CONNECT_WALLET);
      const account = await stdlib?.getDefaultAccount();

      const ctc = account.contract(auctionContract, Number(props.appId));
      setProgress(CloseProgressSteps.CLOSE_CONTRACT);

      await syncAuctionMutate(props.appId);

      try {
        await ctc.a.Bidder.close(null);
      } catch (error: any) {
        if (!error.message.includes('Expected the DApp to be in state')) throw error; // ignore state issue

        enqueueSnackbar(error.message, { variant: 'error' });
        setProgress(null);
        setShouldLockActions(false);
      }

      await auctionContract.Closer(ctc, {});

      await queryClient.invalidateQueries(`getAuctionDetails_${props.appId}`);

      enqueueSnackbar('Close Process Is Done Successfully.', { variant: 'success' });
      setProgress(CloseProgressSteps.CLOSE_CONFIRM);
    } catch (err: any) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setProgress(null);
      setShouldLockActions(false);
    }
  };

  const totalSteps = Object.keys(CloseProgressSteps).length;

  const progressValue =
    ((Object.values(CloseProgressSteps).findIndex((state) => state === progress) + 1) /
      totalSteps) *
    100;

  if (progress) {
    return <LinearProgressbar progressText={progress} progressNumber={progressValue} />;
  }

  return (
    <Button
      variant="contained"
      color="error"
      disabled={shouldLockActions}
      sx={{
        width: '100%',
        textTransform: 'capitalize',
        fontSize: '1.5rem',
        color: (theme) => theme.palette.error.contrastText,
      }}
      onClick={props.type === 'auction' ? onCloseAuction : onCloseBuyNow}
    >
      Close
    </Button>
  );
};

export default CloseButton;
