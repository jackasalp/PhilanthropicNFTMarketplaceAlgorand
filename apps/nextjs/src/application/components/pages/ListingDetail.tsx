import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import HeroSection from '$application/components/pages/ListingDetail/HeroSection';
import { TableSection as TableSection } from '$application/components/pages/ListingDetail/TableSection';
import { useRouter } from 'next/router';
import { Listing } from '$service/listings/types';

const ListingDetail = () => {
  const { query } = useRouter();
  const { type, appId } = query as { type: Listing['type']; appId: string };

  return (
    <StyledContainer>
      <HeroSection type={type} appId={appId} />
      {type === 'auction' && <TableSection appId={appId} />}
    </StyledContainer>
    //  TODO: We can handle alert modal here and get alert data from infoDialog Atom
  );
};

const StyledContainer = styled(Container)`
  max-width: ${({ theme }) => (theme.breakpoints.values as any).xxl}px !important;
`;

export default ListingDetail;
