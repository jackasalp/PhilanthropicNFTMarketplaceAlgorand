import styled from '@emotion/styled';
import { FC } from 'react';

export interface EmptyTextProps {
  text: string;
}

export const EmptyText: FC<EmptyTextProps> = ({ text }) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.palette.grey[300]};
`;
