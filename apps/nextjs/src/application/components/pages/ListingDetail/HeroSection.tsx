import { Box, Grid } from '@mui/material';

import { LoadingData } from '$application/components/atoms/LoadingData';
import LeftSide from './HeroSection/LeftSide';
import RightSide from './HeroSection/RightSide';
import { Listing } from '$service/listings/types';
import { useListingDetails } from './useListingDetails';
import { BuyTypes } from '$service/auction/types';
import styled from '@emotion/styled';
import { useState } from 'react';

const getHeaderTitle = (applicationBuyType?: BuyTypes): string | null => {
  if (applicationBuyType === BuyTypes.CLOSED_AUCTION) {
    return 'Listing Is Closed';
  }

  if (applicationBuyType === BuyTypes.SOLD) {
    return 'Listing Is Sold';
  }

  return null;
};

interface HeroSectionProps {
  type: Listing['type'];
  appId: string;
}
export const HeroSection = (props: HeroSectionProps) => {
  const [auctionIsExpired, setAuctionIsExpired] = useState(false);
  const { applicationDetails, isFetching, error } = useListingDetails({
    ...props,
    auctionIsExpired,
  });
  const headerTitle = getHeaderTitle(applicationDetails?.buyType);
  return (
    <LoadingData loading={isFetching} error={error}>
      {() => {
        return (
          <Box
            sx={{
              my: { xs: '50px', lg: '100px' },
            }}
          >
            {headerTitle && <Header>{headerTitle}</Header>}
            <Grid alignItems={'center'} justifyContent="space-between" spacing={5} container>
              <Grid xs={12} xl={4} item>
                <LeftSide nft={applicationDetails?.nft!} />
              </Grid>
              <Grid xs={12} xl={8} item>
                <RightSide
                  type={props.type}
                  applicationDetails={applicationDetails}
                  auctionIsExpired={auctionIsExpired}
                  setAuctionIsExpired={setAuctionIsExpired}
                />
              </Grid>
            </Grid>
          </Box>
        );
      }}
    </LoadingData>
  );
};

const Header = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.palette.grey[900]};
  font-size: 2rem;
  border-radius: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.error.dark};
`;
export default HeroSection;
