import { FC } from 'react';

import Link from 'next/link';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

export interface ErrorPageProps {
  errorCode: string;
  description: string;
  buttonText?: string;
  redirectPath?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({
  errorCode,
  description,
  redirectPath,
  buttonText = 'Try Again',
}) => (
  <Container>
    <ErrorCode>{errorCode}</ErrorCode>
    <Description>{description}</Description>
    <Link href={redirectPath || '/'}>
      <Button color="primary" variant="outlined">
        {buttonText}
      </Button>
    </Link>
  </Container>
);

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ErrorCode = styled.div`
  font-size: 120px;
  font-weight: bold;
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[500]};
`;

const Description = styled.div`
  font-size: 16px;
  max-width: 500px;
  line-height: 1.5;
  text-align: center;
  margin: 0 auto 24px auto;
  color: ${({ theme }) => theme.palette.grey[800]};
`;
