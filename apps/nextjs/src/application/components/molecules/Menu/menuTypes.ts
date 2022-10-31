import { RefObject } from 'react';

export type MenuSize = 'Small' | 'Big';

export interface Item {
  id: number;
  label: string;
  details?: string;
}

export interface MenuProps<T extends string | Item = string | Item> {
  items: T[];
  size?: MenuSize;
  selectedItems?: T[];
  className?: string;
  emptyTitle?: string;
  fullWidth?: boolean;
  multiSelectable?: boolean;
  onSelect?: (itemLabel: T) => void;
  menuRef?: RefObject<HTMLInputElement>;
  menuItemsRef?: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
}
