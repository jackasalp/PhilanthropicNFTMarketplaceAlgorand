import { WithBorder } from '../../utils/utils';
import { useTimer } from 'react-timer-hook';
import { Box, Typography } from '@mui/material';

export interface AuctionTimerProps {
  expiryTimestamp: Date;
  auctionIsExpired: boolean;
  onAuctionExpired: () => void;
}
export const AuctionTimer = ({
  expiryTimestamp,
  onAuctionExpired,
  auctionIsExpired,
}: AuctionTimerProps) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp: new Date(expiryTimestamp),
    onExpire: () => {
      onAuctionExpired();
    },
  });

  return (
    <WithBorder
      sx={{
        my: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!auctionIsExpired && (
          <Typography
            sx={{
              fontSize: { xs: '12px', sm: '14px', md: '20px', lg: '20px' },
              color: (theme) => theme.palette.primary.main,
              fontWeight: 500,
              textAlign: 'center',
            }}
          >
            {days} : {hours} : {minutes} : {seconds}
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: {
              xs: '12px',
              sm: '14px',
              md: '16px',
              lg: '18px',
            },
          }}
          color={auctionIsExpired ? 'error' : 'success'}
          textAlign={'center'}
          variant={'body1'}
        >
          {auctionIsExpired ? 'Auction is Ended' : 'Auction Ends'}
        </Typography>
      </Box>
    </WithBorder>
  );
};

export default AuctionTimer;
