import { Box, Button, Input, Typography } from '@mui/material';
import { useSnackbar } from 'notistack';
import * as auctionContract from '$service/contracts/auction-contract';
import AlgorandLogo from '$application/assets/AlgorandLogo.svg';
import { useRef, useState } from 'react';
import { useClickAway } from 'react-use';
import { useAtom } from 'jotai';
import { shouldLockActionAtom } from '../store';
import { getStdlib } from '$application/lib/getStdlib';
import { useMutation, useQueryClient } from 'react-query';
import { syncAuction } from '$service/auction/syncAuction';
import { LinearProgressbar } from '$application/components/atoms/LinearProgressbar';
import { BuyTypes } from '$service/auction/types';

export interface BidProps {
  currentBid: number;
  assetId: number;
  buyType?: BuyTypes;
  auctionIsExpired: boolean;
  appId: number;
}

enum BidProgressSteps {
  CONNECT_WALLET = 'Connecting wallet...',
  OPTIN_APPLICATION = 'Opt-in Application...',
  BALANCE_CHECK = 'Checking balance...',
  BIDDING = 'Bidding...',
  BID_CONFIRM = 'Waiting for bid to be confirmed on the blockchain...',
}
export const Bid = (props: BidProps) => {
  const [bidProgress, setBidProgress] = useState<BidProgressSteps | null>(null);
  const [isBidding, setIsBidding] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [newBid, setNewBid] = useState(props.currentBid);
  const [shouldLockActions, setShouldLockActions] = useAtom(shouldLockActionAtom);

  const { mutateAsync: syncAuctionMutate } = useMutation(syncAuction);

  const queryClient = useQueryClient();

  const bidRef = useRef(null);
  useClickAway(bidRef, () => setIsBidding(false));

  const totalSteps = Object.keys(BidProgressSteps).length;
  const progressValue =
    ((Object.values(BidProgressSteps).findIndex((state) => state === bidProgress) + 1) /
      totalSteps) *
    100;

  const onBidAuction = async () => {
    setShouldLockActions(true);
    const stdlib = await getStdlib();
    try {
      setBidProgress(BidProgressSteps.CONNECT_WALLET);
      const account = await stdlib?.getDefaultAccount();

      setBidProgress(BidProgressSteps.OPTIN_APPLICATION);
      await account.tokenAccept(props.assetId);

      setBidProgress(BidProgressSteps.BALANCE_CHECK);
      // TODO: check Balance

      setBidProgress(BidProgressSteps.BIDDING);
      const ctc = account.contract(auctionContract, Number(props.appId));
      await ctc.a.Bidder.bid(stdlib?.parseCurrency(Number(newBid)));

      setBidProgress(BidProgressSteps.BID_CONFIRM);
      await syncAuctionMutate(props.appId);
      await queryClient.invalidateQueries(`getAuctionDetails_${props.appId}`);
      enqueueSnackbar('Bid process is done successfully.', { variant: 'success' });
    } catch (error: any) {
      setShouldLockActions(false);
      enqueueSnackbar(error.message, { variant: 'error' });
    } finally {
      setBidProgress(null);
      setShouldLockActions(false);
    }
  };

  if (props.auctionIsExpired || props.buyType === BuyTypes.CLOSED_AUCTION) {
    return null;
  }

  return (
    <Box
      ref={bidRef}
      sx={{
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
        }}
      >
        {isBidding && (
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '16px' },
              color: (theme) => theme.palette.primary.main,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            Current Bid {props.currentBid}
          </Typography>
        )}
      </Box>

      {isBidding && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '1.5rem',
            py: '1rem',
            background: (theme) => theme.palette.primary.main,
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Box>
              <Input
                type="number"
                value={newBid}
                onChange={(v) => setNewBid(Number(v.currentTarget.value))}
                sx={{
                  border: 'none',
                  borderBottom: '1px solid #fff',
                  background: 'transparent',
                  width: { xs: 'unset', lg: '5rem' },
                  color: '#fff',
                  px: '8px',
                  py: '4px',
                  fontSize: '1rem',
                  '&:focus , &:focus-visible': {
                    outline: 'none',
                  },
                }}
              />
            </Box>
            <svg
              width="19"
              height="22"
              viewBox="0 0 19 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.29569 22L6.05308 16.4905L8.81084 11L11.5514 5.4905L12.0055 4.61717L12.2072 5.4905L13.048 9.11815L12.1062 11L9.34877 16.4905L6.60822 22H9.90354L12.6613 16.4905L14.0905 13.6386L14.7628 16.4905L16.0408 22H19L17.7224 16.4905L16.4444 11L16.1082 9.58375L18.1596 5.4905H15.1664L15.0657 5.08277L14.0231 0.581789L13.8888 0H11.0135L10.9461 0.116185L8.25569 5.4905L5.49831 11L2.75739 16.4905L0 22H3.29569Z"
                fill="#FBFAF5"
              />
            </svg>
          </Box>

          {
            <Box>
              <Button
                disabled={shouldLockActions}
                onClick={onBidAuction}
                sx={{
                  border: '1px solid #fff',
                  borderRadius: '10px',
                  px: '8px',
                  py: '8px',
                  color: '#fff',
                  ml: '1rem',
                  cursor: 'pointer',
                  transition: 'all .3s linear',
                  background: (theme) => theme.palette.primary.main,
                  fontSize: '16px',
                  '&:hover': {
                    background: (theme) => theme.palette.primary.dark,
                  },
                }}
              >
                Bid
              </Button>
            </Box>
          }
        </Box>
      )}

      {!isBidding && (
        <Box
          onClick={() => setIsBidding(!isBidding)}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '1.5rem',
            py: '1rem',
            background: (theme) => theme.palette.primary.main,
            borderRadius: '10px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Box>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Typography
                  sx={{
                    fontSize: { xs: '12px', sm: '14px', md: '20px', lg: '1.5rem' },
                    lineHeight: '30px',
                    color: '#fff',
                    fontWeight: 500,
                    textAlign: 'center',
                  }}
                >
                  {props.currentBid}
                </Typography>
                <AlgorandLogo style={{ width: '19px', height: '22px' }} />
              </div>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '12px',
                }}
                variant={'body1'}
              >
                Current Bid
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              onClick={() => setIsBidding(true)}
              sx={{
                border: '1px solid #fff',
                borderRadius: '10px',
                px: '8px',
                py: '8px',
                color: '#fff',
                ml: '1rem',
                cursor: 'pointer',
                transition: 'all .3s linear',
                background: (theme) => theme.palette.primary.main,
                fontSize: '16px',
                '&:hover': {
                  background: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              Bid
            </Button>
          </Box>
        </Box>
      )}
      {bidProgress && (
        <LinearProgressbar progressText={bidProgress} progressNumber={progressValue} />
      )}
    </Box>
  );
};

export default Bid;
