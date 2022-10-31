import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { OptionItem, OptionItemProps } from './Options/OptionItem';

export interface OptionsProps {
  header?: string;
  className?: string;
  hasChevron?: boolean;
  actions: OptionItemProps[];
}

export const Options: FC<OptionsProps> = ({ header, actions, hasChevron, className }) => {
  return (
    <Container className={className} $hasChevron={hasChevron}>
      {header && <HeaderText>{header}</HeaderText>}
      {actions.map((act, key) => (
        <OptionItem key={key} {...act} />
      ))}
    </Container>
  );
};

interface ContainerProps {
  $hasChevron?: boolean;
}

const Container = styled.div<ContainerProps>`
  z-index: 2;
  min-width: 140px;
  position: inherit;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.grey[900]};
  box-shadow: 0 6px 20px 0 ${({ theme }) => theme.palette.grey[500]};
  ${({ theme, $hasChevron }) =>
    $hasChevron &&
    css`
      &:before {
        width: 0;
        left: 50%;
        height: 0;
        clear: both;
        content: '';
        bottom: 100%;
        position: absolute;
        transform: translateX(-50%);
        border-left: 9px solid transparent;
        border-right: 9px solid transparent;
        border-bottom: 9px solid ${theme.palette.grey[900]};
      }
    `}
`;

const HeaderText = styled.div`
  margin: 6px;
  padding: 6px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.palette.grey[300]};
`;
