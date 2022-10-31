import { LoadingData } from '$application/components/atoms/LoadingData';
import { BuyTypes } from '$service/auction/types';
import { getLatestListings } from '$service/listings/getListings';
import styled from '@emotion/styled';

import { Box, Grid, Stack } from '@mui/material';
import { isEmpty } from 'lodash-es';
import { useQuery } from 'react-query';

import AlgorandSVGIcon from '$application/assets/AlgorandLogo.svg';
import { NftItem } from '$application/components/Common/NFTItem';
import { getCharities } from '$service/getCharities';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Sell = () => {
  const router = useRouter();
  const { data: charityList } = useQuery('getCharities', getCharities);

  const {
    data: listings,
    isLoading,
    error,
  } = useQuery('getLatestApplications', () => getLatestListings(), {
    select: (data) =>
      data?.filter((d) =>
        d.type === 'auction'
          ? d.auction?.buyType === BuyTypes.LIVE_AUCTION
          : d.buynow?.buyType === BuyTypes.BUY_NOW,
      ),
  });
  if (isEmpty(listings) && !isLoading) {
    return (
      <Stack justifyContent="center" alignItems="center" spacing={3} sx={{ height: '100%' }}>
        <div>No listings found for sale.</div>
      </Stack>
    );
  }

  return (
    <Wrapper container spacing={2} justifyContent="center">
      <LoadingData loading={isLoading} error={error}>
        {() => (
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'row wrap',
              }}
            >
              {listings?.map((listing, id) => {
                let buttonText;
                let buttonAboveText;
                if (listing.buynow) {
                  buttonText = listing.buynow.salesPrice;
                  buttonAboveText = 'Buy Now';
                }
                if (listing.auction) {
                  buttonText = listing.auction.currentPrice;
                  buttonAboveText = 'Auction';
                }

                return (
                  <Link key={id} href={`/listing/${listing.type}/${listing.id}`}>
                    <Box
                      sx={{
                        m: '1rem',
                      }}
                    >
                      <NftItem
                        imgSrc={listing.image}
                        imgStripeLeftValue={`${listing[listing.type]?.charityPercentage ?? 0}%`}
                        imgStripeRightValue={
                          (charityList ?? [])?.find(
                            (charity) =>
                              charity.charity_wallet === listing[listing.type]?.charityAddress,
                          )?.charity_name ?? ''
                        }
                        nftName={listing.name}
                        creatorAddress={listing[listing.type]?.creator}
                        type={buttonText}
                        endTime={buttonAboveText}
                        buttonStartIcon={
                          <AlgorandSVGIcon style={{ width: '12px', height: '12px' }} />
                        }
                        onButtonClick={() => {
                          router.push(`listing/${listing.type}/${listing.id}`);
                        }}
                        username={listing.user.username}
                        walletAddress
                        withImgStripe
                      />
                    </Box>
                  </Link>
                );
              })}
            </Box>
          </>
        )}
      </LoadingData>
    </Wrapper>
  );
};
const Wrapper = styled(Grid)`
  margin: 0 auto;
  padding-top: 3rem;
  max-width: ${({ theme }) => (theme.breakpoints.values as any).xxl}px !important;
`;
export default Sell;
