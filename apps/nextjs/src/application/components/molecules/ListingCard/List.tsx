import { Listing } from '$service/listings/types';
import { Stack, Typography } from '@mui/material';
import { isValidElement, ReactElement } from 'react';
import { getAuctionListItems, getBuyNowListItems } from './config';

export interface ListProps {
  title: string;
  value: string | ReactElement;
}
export const ListItem = ({ title, value }: ListProps) => (
  <Stack direction="row" justifyContent="space-between">
    <Typography>{title}</Typography>
    {isValidElement(value) ? value : <Typography>{value}</Typography>}
  </Stack>
);

export const ListItems = ({ listing }: { listing: Listing }) => {
  const items =
    listing.type === 'auction' ? getAuctionListItems(listing) : getBuyNowListItems(listing);

  return (
    <Stack spacing={2}>
      {items.map((item) => (
        <ListItem key={item.title} title={item.title} value={item.value} />
      ))}
    </Stack>
  );
};
