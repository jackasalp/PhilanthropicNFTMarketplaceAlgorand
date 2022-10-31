import styled from '@emotion/styled';
import { FC } from 'react';

export interface TextProps {
  text: string;
}

export const Text: FC<TextProps> = ({ text }) => {
  return <Container $text={text}>{text}</Container>;
};

interface IText {
  $text: string;
}

const Container = styled.div<IText>`
  flex: 1;
  margin: auto 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.palette.grey[200]};
  /* This is to fix bold re-layout */
  &:after {
    height: 0;
    display: block;
    font-weight: 600;
    user-select: none;
    visibility: hidden;
    content: '${({ $text }) => $text}';
  }
`;
