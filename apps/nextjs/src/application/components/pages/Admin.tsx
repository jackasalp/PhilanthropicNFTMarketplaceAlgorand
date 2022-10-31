import { ForSellPage } from '$application/components/pages/Admin/ForSellPage';
import { MintNftPage } from '$application/components/pages/Admin/MintNftPage';
import { SellPage } from '$application/components/pages/Admin/SellPage';
import { a11yPropsForAdminPages, TabPanel } from '$application/utils/utils';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, useMediaQuery } from '@mui/material';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface ITab {
  label: string;
  name: string;
}
const tabs: ITab[] = [
  { label: 'Mint NFT', name: 'mint' },
  { label: 'Sell', name: 'sell' },
  { label: 'For Sale', name: 'forSale' },
];
const Admin = () => {
  const theme = useTheme();

  const router = useRouter();
  const isGreaterThanLarge = useMediaQuery(theme.breakpoints.up('xl'));

  const isGreaterThanMedium = useMediaQuery(theme.breakpoints.up('md'));

  const [adminActivePage, setAdminActivePage] = useState(0);

  useEffect(() => {
    const routerHash = window.location.hash.replace('#', '');
    const tabIndex = tabs.findIndex((t) => t.name === routerHash);
    if (tabIndex > -1) {
      setAdminActivePage(tabIndex);
    }
  }, []);

  const handleAdminPageChange = (_event, newValue) => {
    router.push(`#${tabs[newValue].name}`);
    setAdminActivePage(newValue);
  };

  return (
    <StyledContainer>
      <Box
        sx={{
          my: { xs: '50px', lg: '100px' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', xl: '250px 1fr' },
          gridGap: '2rem',
        }}
      >
        {/*     Side Bar    */}

        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <Tabs
            aria-label="visible arrows tabs example"
            variant={isGreaterThanMedium ? undefined : 'scrollable'}
            scrollButtons
            centered={!isGreaterThanLarge}
            orientation={isGreaterThanLarge ? 'vertical' : 'horizontal'}
            sx={{
              '& .css-heg063-MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
              },
              '@media only screen and (max-width: 475px)': {
                '& .css-heg063-MuiTabs-flexContainer': {
                  justifyContent: 'flex-start',
                },
              },
            }}
            value={adminActivePage}
            onChange={handleAdminPageChange}
          >
            {tabs.map((tab, idx) => (
              <Tab
                key={tab.name}
                sx={{ fontWeight: 'bold' }}
                label={tab.label}
                {...a11yPropsForAdminPages(idx)}
              />
            ))}
          </Tabs>
        </Box>

        {/*     Admin Page   */}
        <Box>
          <TabPanel style={{ height: '100%' }} value={adminActivePage} index={0}>
            <MintNftPage />
          </TabPanel>
          <TabPanel style={{ height: '100%' }} value={adminActivePage} index={1}>
            <SellPage />
          </TabPanel>
          <TabPanel style={{ height: '100%' }} value={adminActivePage} index={2}>
            <ForSellPage />
          </TabPanel>
        </Box>
      </Box>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  max-width: ${({ theme }) => (theme.breakpoints.values as any).xxl}px !important;
`;

export default Admin;
