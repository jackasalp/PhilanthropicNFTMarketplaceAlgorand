import { useAuth } from '$application/lib/auth/useAuth';
import { getAccountAssets } from '$service/asset/getAccountAssets';
import { getAssetsTransactionsConfig } from '$service/asset/getAssetsTransactionConfig';
// import { getAssetsTransactionsConfig } from '$service/asset/getAssetsTransactionConfig';
import { Box } from '@mui/material';
import { useQuery } from 'react-query';
import { LoadingData } from '../../atoms/LoadingData';
import { NftItem } from '../../Common/NFTItem';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import { StyledMenu } from '../../utils/utils';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { useState } from 'react';

export const NfTsTab = () => {
  const { user } = useAuth();
  const {
    data: getAccountAssetsData,
    isLoading: getAccountAssetIsLoading,
    error: getAccountAssetError,
  } = useQuery('getAccountAssets', () => getAccountAssets(user?.accountAddress!), {
    enabled: !!user,
    select: (data) => data.map((d) => ({ assetId: d.index, assetName: d.params.name })),
  });

  const {
    data: getAcfgData,
    isLoading: getAcfgIsLoading,
    error: getAcfgError,
  } = useQuery(
    `getTransactions${user?.accountAddress}`,
    () => getAssetsTransactionsConfig(getAccountAssetsData?.map((d) => d.assetId)!),
    { enabled: !!getAccountAssetsData },
  );

  const isLoading = getAccountAssetIsLoading || getAcfgIsLoading;
  const error = getAccountAssetError ?? getAcfgError;

  return (
    <Box>
      <LoadingData loading={isLoading} error={error}>
        {() => {
          return (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row wrap',
                justifyContent: 'center',
                alignItems: 'center',
                my: '2rem',
              }}
            >
              {Object.entries(getAcfgData ?? [getAcfgData]).map(([assetId, conf]) => {
                return (
                  <Box
                    key={assetId}
                    sx={{
                      m: '1rem',
                    }}
                  >
                    <NftItem
                      imgSrc={conf?.media_url}
                      nftName={conf?.params.name}
                      description={conf?.description}
                      sx={{
                        minWidth: {
                          xs: '280px',
                          md: '300px',
                          lg: '330px',
                          xl: '350px',
                        },
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          );
        }}
      </LoadingData>
    </Box>
  );
};
