import { PrimaryButton } from '$application/components/Common/PrimaryButton';

import { useAuth } from '$application/lib/auth/useAuth';
import { Avatar, Box, Button, Chip, IconButton, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router';
import truncate from 'truncate-middle';
import { Tooltip } from '$application/components/atoms/Tooltip';
import { useCallback, useState } from 'react';
import Modal from '@mui/material/Modal';
// import CwLogo from '$application/../../public/cwLogo.svg';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: { xs: 0, lg: '50%' },
  left: { xs: 0, lg: '50%' },
  transform: { lg: 'translate(-50%, -50%)' },
  maxWidth: '780px',
  width: '100%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
  borderRadius: { xs: 0, lg: '45px' },
  p: 4,
};

export const UserAvatar = () => {
  const { user, signIn, isLoading } = useAuth();
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const connectToWalletHandler = useCallback(async () => {
    await signIn();
    handleClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return (
      <>
        <PrimaryButton loading={isLoading} onClick={handleOpen}>
          Connect Wallet
        </PrimaryButton>
        <Modal
          open={isModalOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{ overflowY: 'scroll' }}
        >
          <Box sx={style}>
            <Box
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: '25px',
                right: '30px',
                cursor: 'pointer',
              }}
            >
              <CloseIcon />
            </Box>

            <Typography
              variant={'h1'}
              sx={{
                fontSize: { xs: '30px', lg: '40px' },
                fontWeight: 500,
                lineHeight: 'unset',
                color: '#000',
              }}
            >
              Connect a wallet
            </Typography>

            <Box
              sx={{
                mt: '2rem',
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', lg: '1fr auto 1fr' },
                gridGap: '3rem',
              }}
            >
              <Box>
                <Box
                  sx={{
                    fontSize: '20px',
                    fontWeight: '500',
                  }}
                >
                  Select wallet provider
                </Box>
                <Box
                  sx={{
                    textDecoration: 'underline',
                    color: '#000',
                    mt: '1rem',
                  }}
                >
                  ALGO
                </Box>

                <Box
                  component={Button}
                  fullWidth
                  onClick={connectToWalletHandler}
                  sx={{
                    border: '1px solid #000000',
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 1rem',
                    alignItems: 'center',
                    borderRadius: '12px',
                    mt: '1.5rem',
                    color: '#000',
                    textTransform: 'unset',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gridGap: '1rem',
                    }}
                  >
                    <Image src={'/myalgo.png'} width={20} height={20} alt={'cw logo'} />
                    <Box>MyAlgo</Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gridGap: '1rem',
                    }}
                  >
                    <Image src={'/desktop.svg'} width={9.5} height={12} alt={'cw logo'} />
                    <Box
                      sx={{
                        padding: '4px 8px',
                        background: '#A70DF0',
                        color: '#fff',
                        borderRadius: '11px',
                        fontSize: '10px',
                        opacity: 0,
                      }}
                    >
                      popular
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Modal>
      </>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gridGap: '1rem',
        ml: '1rem',
      }}
    >
      <PrimaryButton onClick={() => router.push('/admin')} style={{ textTransform: 'capitalize' }}>
        Mint/List NFTs
      </PrimaryButton>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gridGap: '1rem',
          ml: '1rem',
        }}
      >
        Logged in with wallet
        <Tooltip title={user.accountAddress!} color="primary">
          <Chip
            label={truncate(user?.accountAddress!, 5, 5, '...')}
            sx={{ background: (theme) => theme.palette.grey[600] }}
            variant="outlined"
          />
        </Tooltip>
      </Box>
    </Box>
  );
};

export default UserAvatar;
