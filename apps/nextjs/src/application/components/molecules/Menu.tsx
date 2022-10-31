import React, { useState } from 'react';
import { isEmpty, isNil } from 'lodash';
import { Text } from './Menu/Text';
import { EmptyText } from './Menu/EmptyText';
import Check from '$application/assets/Check.svg';
import { Item, MenuProps, MenuSize } from './Menu/menuTypes';
import styled from '@emotion/styled';
import CheckBox from '../atoms/CheckBox';

export const Menu = <T extends string | Item = string | Item>(props: MenuProps<T>) => {
  const [hovered, setHovered] = useState(-1);
  const { multiSelectable = false, size = 'Small' } = props;

  return (
    <Container
      $size={size}
      ref={props.menuRef}
      className={props.className}
      $fullWidth={props.fullWidth}
    >
      {!isEmpty(props.items) ? (
        // TODO: refactor this part of code
        props.items.map((i, key) => {
          const item: Item = typeof i === 'string' ? { label: i, id: 0 } : i;
          const existedItems = (props.selectedItems ?? []).find((_selectedItem) =>
            typeof _selectedItem === 'string'
              ? item.label === _selectedItem
              : _selectedItem.id === item.id,
          );
          const isSelected = !!existedItems;
          const text = typeof item === 'string' ? item : item.label;
          return (
            <MenuItem
              key={typeof item === 'string' ? item : item.id}
              ref={(element) => {
                if (props.menuItemsRef) {
                  props.menuItemsRef.current[i.toString()] = element;
                }
              }}
              $selected={isSelected}
              $size={props.size ?? 'Small'}
              onClick={() => props.onSelect?.(i)}
              onMouseOut={() => setHovered(-1)}
              onMouseOver={() => setHovered(key)}
            >
              {!multiSelectable ? (
                <>
                  <Text text={text} />
                  {isSelected && <Check />}
                </>
              ) : (
                <>
                  <StyledCheckBox
                    id={`item-${key}`}
                    isHovered={hovered === key}
                    isChecked={isSelected}
                    onChange={() => props.onSelect?.(i)}
                  />
                  {isNil(item.details) ? (
                    <Text text={text} />
                  ) : (
                    <Block>
                      <Text text={item.label} />
                      <SubText>{item.details}</SubText>
                    </Block>
                  )}
                </>
              )}
            </MenuItem>
          );
        })
      ) : (
        <EmptyText text={props.emptyTitle ?? 'No items!'} />
      )}
    </Container>
  );
};

interface ContainerProps {
  $size?: MenuSize;
  $selected?: boolean;
  $fullWidth?: boolean;
}

const Container = styled.div<ContainerProps>`
  z-index: 999;
  cursor: default;
  overflow: hidden;
  overflow-y: auto;
  position: inherit;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.grey[900]};
  background: ${({ theme }) => theme.palette.grey[900]};
  padding: ${({ $size }) => ($size === 'Small' ? 6 : 12)}px;
  margin-top: ${({ $size }) => ($size === 'Small' ? 6 : 12)}px;
  font-size: ${({ $size }) => ($size === 'Small' ? 14 : 16)}px;
  min-width: ${({ $size }) => ($size === 'Small' ? 140 : 285)}px;
  max-height: ${({ $size }) => ($size === 'Small' ? 162 : 252)}px;
  box-shadow: 0 6px 20px 0 ${({ theme }) => theme.palette.grey[600]};
  scrollbar-color: ${({ theme }) => theme.palette.grey[600]} transparent;
  width: ${({ $fullWidth }) => ($fullWidth ? 'inherit' : 'max-content')};
`;

const MenuItem = styled.div<ContainerProps>`
  display: flex;
  border-radius: 4px;
  color: ${({ theme }) => theme.palette.grey[200]};
  padding: ${({ $size }) => ($size === 'Small' ? 6 : 12)}px;
  min-height: ${({ $size }) => ($size === 'Small' ? 36 : 44)}px;
  min-width: ${({ $size }) => ($size === 'Small' ? 120 : 261)}px;
  font-weight: ${({ $selected }) => ($selected ? 600 : 'initial')};
  &:not(:last-child) {
    margin-bottom: 6px;
  }
  &:hover {
    font-weight: 600;
    background-color: ${({ theme }) => theme.palette.grey[800]};
  }
  > svg {
    width: 20px;
    height: 20px;
    margin: auto 0;
    margin-left: 12px;
    path,
    use {
      fill: ${({ theme }) => theme.palette.secondary.main};
    }
  }
`;

const SubText = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.grey[300]};
`;

const Block = styled.div`
  display: block;
`;

const StyledCheckBox = styled(CheckBox)`
  margin: auto 0;
  margin-right: 12px;
`;
