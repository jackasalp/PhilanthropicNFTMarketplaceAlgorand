import React, { useEffect, useMemo, useRef, useState } from 'react';
import debounce from 'lodash/debounce';
import SearchInput from './Autocomplete/SearchInput';
import { useAutocomplete } from './Autocomplete/useAutocomplete';
import { Item } from '../molecules/Menu/menuTypes';
import { Select, SelectProps } from '../molecules/Select';

export type AutocompleteProps<T extends string | Item = string | Item> = Omit<
  SelectProps<T>,
  'onSelect' | 'selectedItems'
> & {
  defaultSelectedItems?: T[];
  className?: string;
  searchPlaceholder?: string;
  dropDownIcon?: JSX.Element;
  onDropDownIconClick?: (val: string) => void;
  onSelect?: (item: T[]) => void;
  onFilterChange?: (value: string) => void;
};

export const Autocomplete = (props: AutocompleteProps) => {
  const {
    searchPlaceholder,
    items,
    multiSelectable,
    onSelect,
    onFilterChange,
    defaultSelectedItems = [],
  } = props;
  const rendererRef = useRef<HTMLInputElement>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const { onLocalFilterChange, onLocalSelectedItem, itemList, selectedItems } = useAutocomplete({
    items,
    multiSelectable,
    defaultSelectedItems,
  });

  const onChangeDebounced = useMemo(
    () => debounce(onFilterChange ?? onLocalFilterChange, 300),
    [onLocalFilterChange, onFilterChange],
  );

  useEffect(() => () => onChangeDebounced.cancel(), [onChangeDebounced]);

  const handleChangeSearch = (value: string) => {
    setSearchTerm(value);
    onChangeDebounced(value);
  };

  return (
    <Select
      {...props}
      items={onFilterChange ? items : itemList}
      selectedItems={selectedItems}
      controllerIcon={props.dropDownIcon}
      onControllerClick={() => {
        if (props.onDropDownIconClick) {
          props.onDropDownIconClick(searchTerm);
          setSearchTerm('');
        }
      }}
      onSelect={(item, itemRef) => onLocalSelectedItem(item, itemRef, onSelect)}
      rendererRef={rendererRef}
      renderInput={() => (
        <SearchInput
          searchTerm={searchTerm}
          searchPlaceholder={searchPlaceholder}
          rendererRef={rendererRef}
          onChangeSearchTerm={(e) => handleChangeSearch(e.target.value)}
        />
      )}
    />
  );
};

export default Autocomplete;
