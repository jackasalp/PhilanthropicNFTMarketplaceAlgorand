import { PrimaryButton } from '$application/components/Common/PrimaryButton';
import { TextButton } from '$application/components/Common/TextButton';
import { Box, ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Link from 'next/link';

export const CharitySignInBtn = () => {
  return <PrimaryButton>Charity Sign up/in</PrimaryButton>;
};

export const SearchItem = ({ isForMobile = false }: { isForMobile?: boolean }) => {
  return (
    <Box
      sx={{
        maxWidth: isForMobile ? '100%' : '179px',
        padding: '8px 1rem',
        fontSize: '14px',
        borderRadius: '11px',
        border: '2px solid #004A99',
        background: 'transparent',
      }}
      placeholder={'Search'}
      component={'input'}
      type="text"
    />
  );
};

export const DonateBtn = () => {
  return <TextButton>Donate</TextButton>;
};

export const NftMarketplaceBtn = () => {
  return (
    <TextButton>
      <Link href="/sell">NFT Marketplace</Link>
    </TextButton>
  );
};

export const list = (toggleMobileDrawer) => (
  <Box>
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMobileDrawer}
      onKeyDown={toggleMobileDrawer}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: '1rem',
        }}
      />

      <List>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center !important',
          }}
          button
        >
          <DonateBtn />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center !important',
          }}
          button
        >
          <NftMarketplaceBtn />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center !important',
          }}
          button
        >
          <CharitySignInBtn />
        </ListItem>
        <Divider />
      </List>
    </Box>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <SearchItem isForMobile={true} />
    </Box>
  </Box>
);
