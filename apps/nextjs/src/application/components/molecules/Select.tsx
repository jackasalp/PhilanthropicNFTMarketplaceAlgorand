import React, { createRef, RefObject, useEffect, useRef, useState } from 'react';
import { isString, uniq } from 'lodash';
import Selector from './Select/Selector';
import InputLabel from './Select/InputLabel';
import { useScroll } from '$application/lib/hooks/useScroll';
import { useClickAway } from 'react-use';
import { Item } from './Menu/menuTypes';
import { Menu } from './Menu';
import styled from '@emotion/styled';

export interface SelectProps<T extends any | Item = any | Item> {
  items: T[];
  label?: string;
  loading?: boolean;
  icon?: JSX.Element;
  selectedItems: T[];
  disabled?: boolean;
  errorText?: string;
  isOptional?: boolean;
  isRequired?: boolean;
  placeHolder?: string;
  multiSelectable?: boolean;
  onLoadMoreItems?: () => void;
  onClick?: () => void;
  controllerIcon?: JSX.Element;
  onControllerClick?: () => void;
  renderInput?: () => JSX.Element;
  displayEmpty?: boolean;
  className?: string;
  rendererRef?: RefObject<HTMLInputElement>;
  onSelect?: (item: T, itemRef?: HTMLDivElement) => void;
}

export const Select = <T extends string | Item = string | Item>(props: SelectProps<T>) => {
  const isDisabled = props.disabled || false;
  const menuRef = useRef<HTMLInputElement>(null);
  const containerRef = createRef<HTMLDivElement>();
  const [showMenu, setShowMenu] = useState(false);
  const selectedItems = [...props.selectedItems];
  const menuItemEls = useRef<Record<string, HTMLDivElement | null>>({});
  const isOpen = !isDisabled && showMenu;
  const hasFilterRenderer = !!props.renderInput;
  const isFilled = selectedItems.length > 0;
  const selectorText = selectedItems.map((item) => (isString(item) ? item : item.label)).join(', ');

  const returnUnique = (selectedItemsList, items) => {
    const allItems = [...items];
    selectedItemsList.map((val, ind) => {
      let exists = false;
      items.map((val2, ind2) => {
        if (val.id === val2.id) {
          exists = true;
        }
      });
      if (!exists) {
        allItems.push(val);
      }
    });
    return allItems;
  };

  const sortedItems =
    props.multiSelectable && hasFilterRenderer
      ? // ? concat(selectedItems, xor(props.items, selectedItems))
        returnUnique(selectedItems, props.items)
      : props.items;

  const { hitThreshold } = useScroll(menuRef ?? null, '80%');

  useClickAway(containerRef, () => setShowMenu(false));

  const onToggle = () => {
    props.onClick?.();
    if (
      !isDisabled &&
      (!props.multiSelectable || !showMenu) &&
      (!hasFilterRenderer || !props.multiSelectable || !showMenu)
    ) {
      setShowMenu(!showMenu);
    }
  };

  const onSelectHandler = (item: any) => {
    props.onSelect?.(item, menuItemEls.current[item] ?? undefined);
  };

  useEffect(() => {
    setTimeout(() => showMenu && props.rendererRef?.current?.focus(), 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMenu]);

  useEffect(() => {
    if (isDisabled) {
      setShowMenu(false);
    }
  }, [isDisabled]);

  useEffect(() => {
    if (hitThreshold) {
      props.onLoadMoreItems?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hitThreshold]);

  return (
    <Container className={props.className} ref={containerRef} onClick={onToggle}>
      {props.label && <InputLabel {...props} isFilled={isFilled} />}
      <Selector
        {...props}
        isOpen={isOpen}
        isFilled={isFilled}
        isFocused={showMenu}
        hasError={!!props.errorText}
        selectedValue={selectorText}
        onControllerClick={props.onControllerClick}
        controllerIcon={props.controllerIcon}
      />
      {isOpen && (
        <StyledMenu
          size="Big"
          menuRef={menuRef}
          items={uniq(sortedItems)}
          menuItemsRef={menuItemEls}
          onSelect={onSelectHandler}
          selectedItems={selectedItems}
          multiSelectable={props.multiSelectable}
          emptyTitle={props.renderInput && 'No results found!'}
        />
      )}
      {props.errorText && <Error>{props.errorText}</Error>}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const Error = styled.div`
  margin-top: 12px;
  color: ${({ theme }) => theme.palette.error.main};
`;

const StyledMenu = styled(Menu)`
  width: 100%;
  position: absolute;
  box-sizing: border-box;
`;
