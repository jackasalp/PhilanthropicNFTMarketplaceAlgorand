import { Item } from '$application/components/molecules/Menu/menuTypes';
import { SelectProps } from '$application/components/molecules/Select';
import { animateMenuItem } from '$application/components/molecules/Select/animateMenuItem';
import { isEmpty, isString } from 'lodash-es';
import { useCallback, useEffect, useState } from 'react';

interface UseAutoCompleteArgs<T> extends Pick<SelectProps, 'items' | 'multiSelectable'> {
  defaultSelectedItems: T[];
}

type UseAutoCompleteProps<T extends string | Item = string | Item> = (
  args: UseAutoCompleteArgs<T>,
) => {
  onLocalSelectedItem: (
    item: T,
    itemRef?: HTMLDivElement,
    cb?: (selectedItems: (string | Item)[]) => void,
  ) => void;
  onLocalFilterChange: (value: string) => void;
  selectedItems: T[];
  itemList: T[];
};
export const useAutocomplete: UseAutoCompleteProps = ({
  items,
  multiSelectable,
  defaultSelectedItems,
}) => {
  const [itemList, setItemList] = useState<any[]>([]);

  const [localSelectedItems, setLocalSelectedItem] =
    useState<(string | Item)[]>(defaultSelectedItems);

  useEffect(() => {
    if (items && isEmpty(itemList)) setItemList(items);
  }, [items]);

  const onLocalFilterChange = useCallback(
    (value: string) => {
      const filteredItems = items.filter((element) => {
        const item = isString(element) ? element : element.label;
        return !!item.toLocaleLowerCase().match(value.toLocaleLowerCase());
      });
      setItemList(filteredItems);
    },
    [items],
  );
  const onLocalSelectedItem = (
    item: string | Item,
    itemRef?: HTMLDivElement,
    cb?: (selectedItems: (string | Item)[]) => void,
  ): void => {
    if (itemRef && multiSelectable) {
      animateMenuItem(itemRef, () => {
        const updatedList = localSelectedItems.includes(item)
          ? localSelectedItems.filter((element) =>
              isString(item) ? element !== item : !isString(element) && element.id !== item.id,
            )
          : [...localSelectedItems, item];
        setLocalSelectedItem(updatedList);
        cb?.(updatedList);
      });
      return;
    }
    setLocalSelectedItem([item]);
    cb?.([item]);
  };

  return {
    onLocalFilterChange,
    onLocalSelectedItem,
    itemList,
    selectedItems: localSelectedItems,
  };
};
