import { CPieChart } from '$application/components/Common/CPieChart';
import { WithBorder } from '$application/utils/utils';
import { Box, Grid, Skeleton, Stack, Typography } from '@mui/material';
import { chartData } from './HeroSection.config';
import Link from '@mui/material/Link';
import { useAuth } from '$application/lib/auth/useAuth';
import { useQuery } from 'react-query';
import { getCharities } from '$service/getCharities';
import { BuyNow } from '$service/buyNow/types';
import { first, isEmpty, truncate } from 'lodash-es';
import { Auction, BuyTypes } from '$service/auction/types';
import { Tooltip } from '$application/components/atoms/Tooltip';
import truncateMiddle from 'truncate-middle';
import { getUserByWalletAddress } from '$service/user/getUserByWalletAddress';
import Bid from './RightSide/Bid';
import dynamic from 'next/dynamic';
import { Loader } from '$application/components/atoms/LoadingData';
import { Dispatch, FC, SetStateAction } from 'react';
import { AuctionTimerProps } from '$application/components/atoms/AuctionTimer';
import { Listing } from '$service/listings/types';
import CloseButton from './RightSide/CloseButton';
import BuyButton from './RightSide/BuyButton';
import ClaimAuctionButton from './RightSide/ClaimAuction';
// import AlgorandIcon from '$application/assets/algorand_logo_mark_black.svg';
// import TipButton from './RightSide/TipButton';
import { HiOutlineExternalLink } from 'react-icons/hi';
// import { NFT } from '$service/nft/type';
// import { formatURL } from '$service/utils/formatURL';
import AlgorandBlackIcon from '$application/assets/AlgorandBlackIcon';
import AlgorandSm from '$application/assets/AlgorandSm';

const AuctionTimer: FC<AuctionTimerProps> = dynamic(
  () => import('$application/components/atoms/AuctionTimer'),
  {
    ssr: false,
    loading: () => <Loader />,
  },
) as any;

interface RightSideProps {
  type: Listing['type'];
  applicationDetails?: Auction | BuyNow;
  auctionIsExpired: boolean;
  setAuctionIsExpired: Dispatch<SetStateAction<boolean>>;
}

export const RightSide = ({
  type,
  applicationDetails,
  auctionIsExpired,
  setAuctionIsExpired,
}: RightSideProps) => {
  const { user } = useAuth();
  const lastBid = first((applicationDetails as Auction)?.bids ?? []);

  const isWinner =
    applicationDetails &&
    type === 'auction' &&
    user?.accountAddress === (applicationDetails as Auction).highestBidder;

  const ownerAddress =
    type === 'auction'
      ? (applicationDetails as Auction)?.owner
      : (applicationDetails as BuyNow)?.seller;

  const isOwner = applicationDetails && user && user.accountAddress === ownerAddress;

  const isClaimNFT =
    applicationDetails &&
    isWinner &&
    auctionIsExpired &&
    lastBid &&
    applicationDetails.buyType === BuyTypes.LIVE_AUCTION &&
    Number((applicationDetails as Auction).reservedPrice) <= Number(lastBid.amount);

  /**
   * Close Auction Button Checker should check the below criteria:
   * 1. Signed user should be owner
   * 2. Auction duration has ended
   * 3. Application buy type should be LIVE_AUCTION
   * 4. Last bid amount is less than application reserved price or there is no bid for the application
   */
  const isCloseAuction =
    applicationDetails &&
    isOwner &&
    applicationDetails.buyType === BuyTypes.LIVE_AUCTION &&
    auctionIsExpired &&
    ((lastBid && Number((applicationDetails as Auction).reservedPrice) > Number(lastBid.amount)) ||
      !lastBid);

  /**
   * Close BuyNow Button Checker should check the below criteria:
   * 1. Signed user should be owner
   * 2. application type is buyNow
   * 3. Application buy type should be not SOLD
   */

  const isCloseBuyNow =
    applicationDetails &&
    isOwner &&
    type === 'buynow' &&
    applicationDetails.buyType !== BuyTypes.SOLD;

  const creatorAddress = applicationDetails?.creator || '';
  const { data: ownerData } = useQuery(['getUserByWalletAddress', ownerAddress], () =>
    getUserByWalletAddress(ownerAddress),
  );
  const { data: creatorData } = useQuery(['getUserByWalletAddress', creatorAddress], () =>
    getUserByWalletAddress(creatorAddres),
  );

  const { data: charity, isLoading: getCharitiesLoading } = useQuery('getCharities', getCharities, {
    select: (charities) =>
      charities?.find((_charity) =>
        !applicationDetails?.charityAddress
          ? false
          : _charity.charity_wallet === applicationDetails.charityAddress,
      ),
  });

  const sellerPercentage =
    100 -
    applicationDetails?.charityPercentage -
    applicationDetails?.royaltyPercentage -
    applicationDetails?.platformPercentage;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gridGap: '1rem',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
        }}
      >
        <Link
          href={'#'}
          sx={{
            fontSize: {
              xs: '12px',
              sm: '14px',
              md: '16px',
              lg: '20px',
            },
            fontWeight: '500',
            textDecoration: 'underline',
            textTransform: 'capitalize',
            'text-underline-offset': '8px',
          }}
        >{`Owned by: ${
          ownerData?.username ? ownerData.username : truncateMiddle(ownerAddress ?? '', 5, 5, '...')
        }`}</Link>

        <Stack alignItems={'center'} direction={{ xs: 'column' }} spacing={1}>
          <Typography
            sx={{
              fontSize: {
                xs: '10px',
              },
              fontWeight: '500',
            }}
            variant={'body1'}
          >
            Supporting - click to see what your donation is going towards
          </Typography>

          {getCharitiesLoading ? (
            <Skeleton variant="text" width={300} height={40} />
          ) : (
            <Tooltip
              sx={{
                '& a': {
                  textDecoration: 'none !important',
                },
              }}
              title={charity?.campaign_name!}
            >
              <a
                href={`https://giftchain.charity/campaign/${charity?.slug}`}
                target="_blank"
                rel="noreferrer"
              >
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  sx={{
                    border: '1px solid #656565',
                    px: '8px',
                    py: '8px',
                  }}
                >
                  <Stack direction={'row'} spacing={0} alignItems={'center'}>
                    {!charity ? (
                      <Skeleton variant={'rectangular'} width={25} height={27} />
                    ) : (
                      <img alt={charity.charity_name} src={charity.img} width={25} height={27} />
                    )}
                    <Typography
                      sx={{
                        fontSize: '15px',
                        fontWeight: '500',
                        // background: (theme) => theme.palette.success.main,
                        // color: '#fff',
                        borderRadius: '10px',
                        px: '12px',
                        py: '2px',
                        textDecoration: 'unset',
                      }}
                    >
                      <Box component={'span'} sx={{ textDecoration: 'none !important' }}>
                        {Number(
                          applicationDetails?.buyType === BuyTypes.BUY_NOW ||
                            applicationDetails?.buyType === BuyTypes.SOLD
                            ? (applicationDetails as BuyNow)?.salesPrice
                            : (applicationDetails as Auction)?.currentPrice,
                        ) *
                          (chartData(
                            applicationDetails?.charityPercentage ?? '0',
                            applicationDetails?.royaltyPercentage ?? '0',
                            applicationDetails?.platformPercentage ?? '0',
                          )[0].value /
                            100)}
                      </Box>
                      <AlgorandSm />
                      {'  '}
                      <Box
                        component={'span'}
                        sx={{
                          textDecoration: 'underline',
                          display: 'inline-block',
                        }}
                      >
                        {truncate(charity?.campaign_name, { length: 40 })}
                      </Box>
                    </Typography>
                  </Stack>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <HiOutlineExternalLink />
                  </Box>
                </Stack>
              </a>
            </Tooltip>
          )}
        </Stack>
      </Box>

      {/*    MAIN HEADING     */}
      <Box
        sx={{
          my: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            marginTop: '8px',
            gap: '.4rem',
          }}
        >
          <Typography
            variant={'h1'}
            sx={{
              lineHeight: '40px',
              fontSize: '44px',
              textTransform: 'capitalize',
              fontWeight: '600',
              // color: (theme) => theme.palette.secondary.main,
              color: '#000',
            }}
          >
            {applicationDetails?.nft?.metadata.name}
          </Typography>
          <Typography
            variant={'h1'}
            sx={{
              pl: '.2rem',
              lineHeight: '25px',
              fontSize: '25px',
              fontWeight: '600',
              // color: (theme) => theme.palette.success.dark,
              color: '#92A737',
            }}
          >
            #{applicationDetails?.nft?.id}
          </Typography>
        </div>
      </Box>

      <Typography sx={{ mb: '.5rem' }}>Description:</Typography>
      <Typography variant={'body1'}>
        {!isEmpty(applicationDetails?.nft?.metadata.description)
          ? applicationDetails?.nft?.metadata.description
          : "This NFT doesn't have a description "}
      </Typography>

      <Grid
        sx={{
          mt: '.5rem',
        }}
        container
        spacing={4}
      >
        <Grid xs={12} lg={8} item sx={type === 'buynow' ? { mx: 'auto' } : {}}>
          <Box
            sx={{
              // maxWidth: '369px',
              margin: 'auto',
            }}
          >
            <WithBorder>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Typography
                  gutterBottom
                  variant={'body1'}
                  color={'primary'}
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Creator:
                </Typography>
                <Link
                  href={'#'}
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  {creatorData?.username
                    ? creatorData.username
                    : truncateMiddle(applicationDetails?.creator ?? '', 5, 5, '...')}
                </Link>
              </div>
            </WithBorder>

            {/*         Chart and stats         */}

            <WithBorder
              sx={{
                mt: '2rem',
              }}
            >
              <Typography
                variant={'body1'}
                color={'primary'}
                textAlign={'center'}
                sx={{
                  fontWeight: 'bold',
                }}
              >
                NFT Sales Proceed
              </Typography>

              {/*    Chart        */}

              <Box
                sx={{
                  // mt: "-3rem",
                  // maxWidth: {xs: '200px', md: '220px', lg: '250px'},
                  // mx: 'auto',
                  height: '12rem',
                  // maxWidth: '30rem',
                }}
              >
                <CPieChart
                  data={chartData(
                    applicationDetails?.charityPercentage ?? '0',
                    applicationDetails?.royaltyPercentage ?? '0',
                    applicationDetails?.platformPercentage ?? '0',
                    sellerPercentage ?? '0',
                  )}
                />
              </Box>
            </WithBorder>
          </Box>
        </Grid>
        <Grid xs={12} lg={4} item>
          <Box
            sx={{
              background: '#F3F0F0',
              padding: '8px 1.3rem',
              fontSize: '15px',
            }}
          >
            <Typography
              component={'div'}
              textAlign={'center'}
              variant={'body1'}
              sx={{
                mb: '1rem',
                display: 'flex',
                fontSize: '13px',
                alignItems: 'center',
                gridGap: '1px',
              }}
            >
              <Box
                component={'span'}
                sx={{
                  mr: '8px',
                }}
              >
                {' '}
                Price Bucket Breakdown{' '}
              </Box>
              <Tooltip
                title={`Giftchain’s NFT Marketplace ethos is that every NFT sold on
 our platform includes a donation to charity.`}
              >
                <Box
                  sx={{
                    background: '#D9D9D9',
                    borderRadius: '50%',
                    width: '10px',
                    height: '10px',
                    fontSize: '5px',
                    padding: '6px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  i
                </Box>
              </Tooltip>
            </Typography>
            <Stack
              direction="row"
              sx={{
                p: '0.875rem',
                border: (theme) => `1px solid ${theme.palette.grey[300]}`,
                mb: '1rem',
                borderRadius: '12px',
                background: '#FFFFFF',
                justifyContent: 'space-between',
              }}
              alignItems="center"
              spacing={1}
            >
              <Typography variant="subtitle2" sx={{ flex: 1, fontSize: '13px', textAlign: 'left' }}>
                {applicationDetails?.buyType === BuyTypes.BUY_NOW ||
                applicationDetails?.buyType === BuyTypes.SOLD ? (
                  <>
                    Sale Price <br /> inc donation:
                  </>
                ) : (
                  <>
                    Current Price <br /> inc donation:
                  </>
                )}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {applicationDetails ? (
                  <Typography sx={{ color: 'black', fontSize: '1.8rem' }} variant="body2">
                    {applicationDetails.buyType === BuyTypes.BUY_NOW ||
                    applicationDetails.buyType === BuyTypes.SOLD
                      ? (applicationDetails as BuyNow).salesPrice
                      : (applicationDetails as Auction).currentPrice}
                  </Typography>
                ) : (
                  <Skeleton variant="text" width={50} />
                )}
                {/* <AlgorandIcon style={{ stroke: '#000', marginLeft: '.4rem' }} />*/}
                <Box
                  sx={{
                    mb: '-8px',
                  }}
                >
                  <AlgorandBlackIcon />
                </Box>
              </Box>
            </Stack>

            {/* buy now button part*/}
            {type === 'auction' ? (
              <>
                <Bid
                  auctionIsExpired={auctionIsExpired}
                  currentBid={Number(lastBid?.amount ?? 0)}
                  appId={applicationDetails?.id ?? 0}
                  assetId={applicationDetails?.nft?.id ?? 0}
                  buyType={applicationDetails?.buyType}
                />
                <AuctionTimer
                  auctionIsExpired={auctionIsExpired}
                  onAuctionExpired={() => {
                    setAuctionIsExpired(true);
                  }}
                  expiryTimestamp={(applicationDetails as Auction).endTime ?? new Date()}
                />
              </>
            ) : (
              !isOwner && (
                <>
                  <BuyButton
                    assetId={applicationDetails?.nft?.id ?? 0}
                    appId={applicationDetails?.id ?? 0}
                    contractAddress={applicationDetails?.contractAddress ?? ''}
                    salesPrice={Number((applicationDetails as BuyNow)?.salesPrice)}
                  />
                </>
              )
            )}
          </Box>

          {isClaimNFT && <ClaimAuctionButton appId={applicationDetails?.id ?? 0} />}
          {(isCloseAuction || isCloseBuyNow) && (
            <CloseButton appId={applicationDetails?.id ?? 0} type={type} />
          )}
          {/* {!isOwner && <TipButton creatorWalletAddress={ownerAddress} />} */}
        </Grid>
      </Grid>
    </>
  );
};

export default RightSide;
