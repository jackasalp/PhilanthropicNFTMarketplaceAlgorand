import { Box } from '@mui/material';
import Image from 'next/image';
import { PrimaryButton } from '../../Common/PrimaryButton';

const activeBids = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ActiveBids = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        alignItems: 'center',
        my: '2rem',
      }}
    >
      {activeBids.map((nft) => (
        <Box
          key={nft}
          sx={{
            maxWidth: '314px',
            width: '100%',
            height: '423px',
            position: 'relative',
            m: '1rem',
          }}
        >
          <Image layout={'fill'} objectFit={'cover'} src={'/owl.png'} />

          {/*    List Btn     */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
            }}
          >
            <PrimaryButton
              sx={{
                px: '1.5rem',
              }}
            >
              435 A
            </PrimaryButton>
          </Box>

          {/*    Timer     */}
          <Box
            sx={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
            }}
          >
            <PrimaryButton
              sx={{
                px: '1.5rem',
              }}
            >
              09:04:43
            </PrimaryButton>
          </Box>
        </Box>
      ))}
    </Box>
  );
};
