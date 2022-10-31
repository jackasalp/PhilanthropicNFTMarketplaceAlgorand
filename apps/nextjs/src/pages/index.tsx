import styled from '@emotion/styled';
import Container from '@mui/material/Container';

export const Index = () => <StyledContainer />;

const StyledContainer = styled(Container)`
  max-width: ${({ theme }) => (theme.breakpoints.values as any).xxl}px !important;
`;

export default Index;
