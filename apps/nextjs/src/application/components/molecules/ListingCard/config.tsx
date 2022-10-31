import { Listing } from '$service/listings/types';
import { Chip, Typography } from '@mui/material';
import dayjs from 'dayjs';
import Countdown from 'react-countdown';
import { ListProps } from './List';

type GetListItem = (listing: Listing) => ListProps[];
export const getAuctionListItems: GetListItem = (listing) => {
  const auctionTimeLeft = dayjs(listing.auction?.endTime).diff(dayjs(), 'ms');
  const expirationTime = dayjs().valueOf() + auctionTimeLeft;
  const auctionExpired = auctionTimeLeft < 0;

  return [
    {
      title: 'Sell Type:',
      value: <Chip size="small" label="Auction" color="primary" sx={{ fontWeight: 'bold' }} />,
    },
    {
      title: 'Timer:',
      value: auctionExpired ? (
        <Typography>Expired</Typography>
      ) : (
        // @ts-ignore
        <Countdown date={expirationTime} />
      ),
    },
    {
      title: 'Current Price:',
      value: `${listing.auction?.currentPrice ?? 0}A`,
    },
  ];
};

export const getBuyNowListItems: GetListItem = (listing) => [
  {
    title: 'Sell Type:',
    value: <Chip size="small" label="Fixed Price" color="primary" sx={{ fontWeight: 'bold' }} />,
  },
  {
    title: 'Price',
    value: `${listing.buynow?.salesPrice ?? 0}A`,
  },
];
