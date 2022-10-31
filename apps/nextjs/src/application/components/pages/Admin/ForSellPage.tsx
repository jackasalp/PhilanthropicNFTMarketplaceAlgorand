import { LoadingData } from '$application/components/atoms/LoadingData';

import { getMyListings } from '$service/listings/getMyListings';
import { Grid } from '@mui/material';
// import { isEmpty } from 'lodash-es';
import { useQuery } from 'react-query';
import ListingCard from '../../molecules/ListingCard';
// import { BuyTypes } from '$service/auction/types';

export const ForSellPage = () => {
  const { data: myListings, isLoading, error } = useQuery('getMyApplications', getMyListings, {});

  return (
    <Grid container spacing={{ md: 1, lg: 3 }} sx={{ pt: 0 }} justifyContent="center">
      <LoadingData loading={isLoading} error={error}>
        {() => (
          <>
            {myListings?.map((listing) => (
              <Grid md={6} lg={4} item key={listing.id}>
                <ListingCard listing={listing} />
              </Grid>
            ))}
          </>
        )}
      </LoadingData>
    </Grid>
  );
};
