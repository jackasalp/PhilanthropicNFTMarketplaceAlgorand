import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Container, IconButton, Stack, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';

import { useAuth } from '$application/lib/auth/useAuth';
import styled from '@emotion/styled';
import { list, NftMarketplaceBtn } from './HeaderSmallComponents';
import UserAvatar from './UserAvatar';

export const Header = () => {
  const { logOut, user } = useAuth();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen(!isMobileDrawerOpen);
  };

  return (
    <Box>
      <Box
        sx={{
          height: '92px',
          py: '20px',
        }}
      >
        <StyledContainer
          sx={{
            height: '100%',
            display: 'flex',
            cursor: 'pointer',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/*    Right Buttons   */}
          <Stack alignItems={'center'} direction={'row'} spacing={4}>
            <Stack
              sx={{
                display: {
                  xs: 'none',
                  xl: 'flex',
                },
              }}
              direction={'row'}
              spacing={2}
            >
              <NftMarketplaceBtn />
            </Stack>

            <Stack direction={'row'} spacing={2} alignItems="center">
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                <UserAvatar />
              </Box>
              {user && (
                <Button
                  onClick={logOut}
                  sx={{
                    display: {
                      xs: 'none',
                      xl: 'block',
                    },
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                    height: '80%',
                  }}
                  color="error"
                  variant="contained"
                  size="small"
                >
                  Log Out
                </Button>
              )}

              <Box
                sx={{
                  display: {
                    xs: 'block',
                    xl: 'none',
                  },
                }}
              >
                <IconButton onClick={toggleMobileDrawer} color={'primary'}>
                  <MenuIcon />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </StyledContainer>
        {/*    Mobile Drawer    */}
        {() => (
          // @ts-ignore
          <SwipeableDrawer
            anchor={'left'}
            open={isMobileDrawerOpen}
            onClose={toggleMobileDrawer}
            onOpen={toggleMobileDrawer}
          >
            {list(toggleMobileDrawer)}
          </SwipeableDrawer>
        )}
      </Box>
    </Box>
  );
};

const StyledContainer = styled(Container)`
  max-width: ${({ theme }) => (theme.breakpoints.values as any).xxl}px !important;
`;
