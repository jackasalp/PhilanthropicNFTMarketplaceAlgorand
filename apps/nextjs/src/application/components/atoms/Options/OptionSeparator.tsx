import styled from '@emotion/styled';
import React, { FC } from 'react';

export interface OptionSeparatorProps {
  label: string;
}

export const OptionSeparator: FC<OptionSeparatorProps> = ({ label }) => (
  <ActionRow>{label}</ActionRow>
);

const ActionRow = styled.div`
  margin: 0 8px;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.grey[300]};
`;

export default OptionSeparator;
