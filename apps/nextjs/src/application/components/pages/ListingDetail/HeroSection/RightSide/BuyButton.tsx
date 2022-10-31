/* eslint-disable no-console */
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import { getStdlib } from '$application/lib/getStdlib';
import { syncBuyNow } from '$service/buyNow/syncBuyNow';
import * as buyNowContract from '$service/contracts/buynow-contract';
// import Launch from '@mui/icons-material/Launch';
import { Button } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
// import truncateMiddle from 'truncate-middle';
import { shouldLockActionAtom } from '../store';

export interface BuyButtonProps {
  appId: number;
  assetId: number;
  salesPrice: number;
  contractAddress: string;
}

enum BuyProgressSteps {
  CONNECT_WALLET = 'Connecting wallet...',
  OPTIN_APPLICATION = 'Opt-in Application...',
  BUYING = 'Buying...',
  BALANCE_CHECK = 'Checking balance...',
}
export const BuyButton = (props: BuyButtonProps) => {
  const [progress, setProgress] = useState<null | BuyProgressSteps>(null);
  // const [isSuccessful, setIsSuccessful] = useState(false);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [shouldLockActions, setShouldLockActions] = useAtom(shouldLockActionAtom);
  const queryClient = useQueryClient();

  const { mutateAsync: syncBuyNowMutate } = useMutation(syncBuyNow, {
    onSuccess: () =>
      queryClient.invalidateQueries(['getApplications', ['getBuyNowDetails', props.appId]]),
  });

  const onBuyNow = async () => {
    setShouldLockActions(true);
    const stdlib = await getStdlib();
    try {
      setProgress(BuyProgressSteps.CONNECT_WALLET);
      const account = await stdlib?.getDefaultAccount();

      setProgress(BuyProgressSteps.OPTIN_APPLICATION);
      await account.tokenAccept(props.assetId);

      setProgress(BuyProgressSteps.BALANCE_CHECK);
      // TODO: check balance before buy

      setProgress(BuyProgressSteps.BUYING);
      const ctc = account.contract(buyNowContract, Number(props.appId));
      await ctc.a.Buyer.buyNFT(stdlib?.parseCurrency(Number(props.salesPrice)));

      await syncBuyNowMutate(props.appId);
      // setIsSuccessful(true);
      enqueueSnackbar('Buy Application Process Is Done Successfully.', { variant: 'success' });
      router.push('/admin');
    } catch (err: any) {
      enqueueSnackbar(err.message, { variant: 'error' });
    } finally {
      setProgress(null);
      setShouldLockActions(false);
    }
  };

  const totalSteps = Object.keys(BuyProgressSteps).length;

  const progressValue =
    ((Object.values(BuyProgressSteps).findIndex((state) => state === progress) + 1) / totalSteps) *
    100;

  if (progress) {
    return <LinearProgressbar progressText={progress} progressNumber={progressValue} />;
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        disabled={shouldLockActions}
        sx={{
          width: '100%',
          textTransform: 'capitalize',
          mb: '1rem',
          fontSize: '1.5rem',
          color: (theme) => theme.palette.error.contrastText,
        }}
        onClick={onBuyNow}
      >
        Buy
      </Button>
      {/* {isSuccessful && (
        <Stack direction="row" justifyContent="center" spacing={1}>
          <div>{truncateMiddle(props.contractAddress ?? '', 5, 5, '...')}</div>
          <a
            href={`${process.env.API_ALGO_EXPLORER}/address/${props.contractAddress}`}
            target="_blank"
            rel="noreferrer"
          >
            <Launch style={{ cursor: 'pointer' }} />
          </a>
        </Stack>
      )} */}
    </>
  );
};

export default BuyButton;
