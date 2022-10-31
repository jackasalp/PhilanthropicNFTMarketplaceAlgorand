import { LoadingData } from '$application/components/atoms/LoadingData';
import { getAuctionDetail } from '$service/auction/getAuctionDetails';
import { Box, Grid, Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { Table } from '../../Common/table/Table';
import { secondTableData } from './TableSection.config';

export const TableSection = ({ appId }: { appId: string }) => {
  const {
    data: auctionDetails,
    isLoading: getAuctionDetailIsLoading,
    error: getAuctionDetailsError,
  } = useQuery(['getAuctionDetail', appId], () => getAuctionDetail(appId));

  return (
    <Box>
      {/* <Box*/}
      {/*    sx={{*/}
      {/*        display: 'flex',*/}
      {/*        justifyContent: 'space-between',*/}
      {/*        my: {xs: '50px', lg: '100px'},*/}
      {/*        gridGap: '1rem',*/}
      {/*    }}*/}
      {/* >*/}

      {/*    <Box>*/}
      {/*        <Typography*/}
      {/*            variant={'body1'}*/}
      {/*            sx={{*/}
      {/*                textDecoration: 'underline',*/}
      {/*                color: theme => theme.palette.primary.main,*/}
      {/*                fontWeight: 500,*/}
      {/*                fontSize: {*/}
      {/*                    xs: '18px',*/}
      {/*                    lg: '20px',*/}
      {/*                },*/}
      {/*                textAlign: 'center',*/}
      {/*            }}*/}
      {/*        >*/}
      {/*            More by Afzaal*/}
      {/*        </Typography>*/}
      {/*    </Box>*/}

      {/*    <Box>*/}
      {/*        <Typography*/}
      {/*            variant={'body1'}*/}
      {/*            sx={{*/}
      {/*                textDecoration: 'underline',*/}
      {/*                color: theme => theme.palette.primary.main,*/}
      {/*                fontWeight: 500,*/}
      {/*                fontSize: {*/}
      {/*                    xs: '18px',*/}
      {/*                    lg: '20px',*/}
      {/*                },*/}
      {/*                textAlign: 'center',*/}
      {/*            }}*/}
      {/*        >*/}
      {/*            NFT’s Supporting Cause*/}
      {/*        </Typography>*/}
      {/*    </Box>*/}
      {/* </Box>*/}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: { xs: '50px', lg: '100px' },
          gridGap: '1rem',
        }}
      >
        <Grid alignItems={'center'} spacing={{ xs: 8, lg: 16 }} container>
          {/* <Grid xs={12} lg={6} item>
            <Box
              sx={{
                mb: '2rem',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  color: (theme) => theme.palette.primary.main,
                  fontSize: {
                    xs: '18px',
                    lg: '25px',
                  },
                }}
                variant={'body1'}
              >
                Owners
              </Typography>
            </Box>
            <Table data={firstTableData} />
          </Grid> */}
          <Grid xs={12} lg={12} item>
            <Box
              sx={{
                mb: '2rem',
              }}
            >
              <Typography
                sx={{
                  textAlign: 'center',
                  fontWeight: '600',
                  color: (theme) => theme.palette.primary.main,
                  fontSize: {
                    xs: '18px',
                    lg: '25px',
                  },
                }}
                variant={'body1'}
              >
                Current Bids
              </Typography>
            </Box>

            <LoadingData loading={getAuctionDetailIsLoading} error={getAuctionDetailsError}>
              {() => <Table data={secondTableData(auctionDetails?.bids ?? [])} />}
            </LoadingData>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
