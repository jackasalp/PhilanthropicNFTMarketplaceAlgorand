import { useAuth } from '$application/lib/auth/useAuth';
import { getAccountAssets } from '$service/asset/getAccountAssets';
import { useQuery } from 'react-query';
import { Item } from '../molecules/Menu/menuTypes';
import Autocomplete from './Autocomplete';

export interface SelectNFTsProps {
  errorText?: string;
  label?: string;
  defaultSelectedItems?: Item[];
  className?: string;
  onSelect: (asset: any[]) => void;
  multiSelectable?: boolean;
}

export const SelectNFTs = (props: SelectNFTsProps) => {
  const { user } = useAuth();
  const { data: accountAssetsData, isLoading: getAccountAssetsIsLoading } = useQuery(
    'getAccountAssets',
    () => getAccountAssets(user?.accountAddress!),
    {
      enabled: !!user,
    },
  );

  const selectHandler = (selectedAssetsItem: Item[]) => {
    const selectedAssetsId = selectedAssetsItem.map((item) => item.id);

    const selectedAssets =
      accountAssetsData?.filter((assetData) => selectedAssetsId.includes(assetData.index)) ?? [];

    props.onSelect(selectedAssets);
  };

  return (
    <Autocomplete
      className={props.className}
      label={props.label}
      multiSelectable={props.multiSelectable}
      defaultSelectedItems={props.defaultSelectedItems}
      loading={getAccountAssetsIsLoading}
      errorText={props.errorText}
      items={
        accountAssetsData?.map((asset) => ({
          label: asset.params.name,
          id: asset.index,
        }))!
      }
      // @ts-ignore
      onSelect={(assetsItem: Item[]) => selectHandler(assetsItem)}
      searchPlaceholder="Start typing to search in your NFTs"
      placeHolder="Select a NFT"
    />
  );
};
export default SelectNFTs;
