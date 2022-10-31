import React, { FC, useState } from 'react';

import { rgba } from 'polished';

import { OptionContent, OptionContentProps } from './OptionItem/OptionContent';
import styled from '@emotion/styled';

export interface OptionItemProps {
  label: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  icon?: OptionContentProps['icon'];
  hoverColor?: OptionContentProps['hoverColor'];
}

export const OptionItem: FC<OptionItemProps> = ({ icon, href, label, onClick, hoverColor }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setHovered(true);
  };

  const handleMouseOut: React.MouseEventHandler<HTMLAnchorElement> = () => {
    setHovered(false);
  };

  return (
    <ItemRow
      href={href}
      onClick={onClick}
      onMouseOut={handleMouseOut}
      onMouseEnter={handleMouseEnter}
      $backgroundHover={hoverColor?.background}
    >
      <OptionContent label={label} hovered={hovered} icon={icon} hoverColor={hoverColor} />
    </ItemRow>
  );
};

interface ItemRowProps {
  $backgroundHover?: string;
}

const ItemRow = styled.a<ItemRowProps>`
  margin: 6px;
  padding: 6px;
  display: flex;
  cursor: pointer;
  border-radius: 4px;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  box-sizing: border-box;
  &:hover {
    background-color: ${({ $backgroundHover, theme }) =>
      rgba($backgroundHover ?? theme.palette.primary.light, 0.1)};
  }
  & > svg {
    width: 18px;
    height: 18px;
    path,
    use {
      fill: ${({ theme }) => theme.palette.grey[200]};
    }
  }
`;
