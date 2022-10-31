import { getAuctionDetail } from '$service/auction/getAuctionDetails';
import { syncAuction } from '$service/auction/syncAuction';
import { BuyTypes } from '$service/auction/types';
import { getBuyNowDetail } from '$service/buyNow/getBuyNowDetail';
import { useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export const useListingDetails = ({ appId, type, auctionIsExpired }) => {
  const {
    data: buyNowDetails,
    isFetching: getBuyNowIsFetching,
    error: getBuyNowError,
    isRefetching: getBuyNowIsRefetching,
  } = useQuery(`getBuyNowDetails_${appId}`, () => getBuyNowDetail(appId), {
    enabled: type === 'buynow',
  });

  const {
    data: auctionDetails,
    isFetching: getAuctionDetailIsFetching,
    error: getAuctionDetailsError,
    isRefetching: getAuctionDetailIsRefetching,
  } = useQuery(`getAuctionDetails_${appId}`, () => getAuctionDetail(appId), {
    enabled: type === 'auction',
  });

  const queryClient = useQueryClient();
  const { mutateAsync: syncAuctionMutate } = useMutation(syncAuction, {
    onSuccess: () => queryClient.invalidateQueries(`getAuctionDetails_${appId}`),
  });

  const applicationDetails = type === 'auction' ? auctionDetails : buyNowDetails;
  const isFetching =
    getAuctionDetailIsFetching ||
    getBuyNowIsFetching ||
    getBuyNowIsRefetching ||
    getAuctionDetailIsRefetching;

  const error = getAuctionDetailsError ?? getBuyNowError;

  useEffect(() => {
    (async () => {
      if (applicationDetails?.buyType === BuyTypes.LIVE_AUCTION && auctionIsExpired) {
        await syncAuctionMutate(appId);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appId, applicationDetails?.buyType, auctionIsExpired]);

  return {
    applicationDetails: applicationDetails ?? undefined,
    isFetching,
    error,
  };
};
