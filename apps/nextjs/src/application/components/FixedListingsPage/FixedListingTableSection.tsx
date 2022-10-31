import { Box, Grid, Typography } from '@mui/material';
import { Table } from '../Common/table/Table';

const firstTableData = {
  headings: {
    firstHeading: 'Name',
    secondHeading: 'Date',
    thirdHeading: 'Price',
  },
  rows: [
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
  ],
};

const secondTableData = {
  headings: {
    firstHeading: 'Listed for',
    secondHeading: 'Date',
    thirdHeading: 'Price',
  },
  rows: [
    {
      imgSrc: '',
      name: 'name',
      date: '01/05/2022',
      price: '0.03',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.05',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
    {
      imgSrc: '',
      name: 'Name',
      date: '01/04/2022',
      price: '0.03',
    },
  ],
};

export const FixedListingTableSection = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: { xs: '50px', lg: '100px' },
          gridGap: '1rem',
        }}
      >
        <Box>
          <Typography
            variant={'body1'}
            sx={{
              textDecoration: 'underline',
              color: (theme) => theme.palette.primary.main,
              fontWeight: 500,
              fontSize: {
                xs: '18px',
                lg: '20px',
              },
              textAlign: 'center',
            }}
          >
            More by Afzaal
          </Typography>
        </Box>

        <Box>
          <Typography
            variant={'body1'}
            sx={{
              textDecoration: 'underline',
              color: (theme) => theme.palette.primary.main,
              fontWeight: 500,
              fontSize: {
                xs: '18px',
                lg: '20px',
              },
              textAlign: 'center',
            }}
          >
            NFT’s Supporting Cause
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: { xs: '50px', lg: '100px' },
          gridGap: '1rem',
        }}
      >
        <Grid alignItems={'center'} spacing={{ xs: 8, lg: 16 }} container>
          <Grid xs={12} lg={6} item>
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
          </Grid>
          <Grid xs={12} lg={6} item>
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
                Txn History
              </Typography>
            </Box>

            <Table data={secondTableData} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// export default FixedListingTableSection;
