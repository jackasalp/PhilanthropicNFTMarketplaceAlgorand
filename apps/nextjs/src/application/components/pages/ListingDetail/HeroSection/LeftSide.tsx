import { NFT } from '$service/nft/type';
import { formatURL } from '$service/utils/formatURL';
import styled from '@emotion/styled';
import {
  Box,
  // IconButton,
  Skeleton,
  // Stack,
  Typography,
} from '@mui/material';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
// import { socialIcons } from './HeroSection.config';

export interface LeftSideProps {
  nft: NFT;
}

export const LeftSide = ({ nft }: LeftSideProps) => {
  const [nftImage, setNftImage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const imageUrl = await formatURL(nft?.metadata.image);
      setNftImage(imageUrl);
    })();
  }, [nft]);

  if (!nft) {
    return <Skeleton variant="rectangular" height={590} />;
  }
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '100%',
            height: '482px',
            '& img': {
              borderRadius: '12px',
            },
          }}
        >
          {nftImage ? (
            <img src={nftImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Div>No Image</Div>
          )}
        </Box>
      </Box>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '8px',
          gap: '.4rem',
        }}
      >
        <Typography
          variant={'body1'}
          sx={{
            textAlign: 'center',
          }}
        >
          View on
        </Typography>
        <Box>
          <a
            href={`${process.env.API_ALGO_EXPLORER}/asset/${nft.id}`}
            style={{
              // color: '#CD2929',
              color: '#004A99',
              cursor: 'pointer',
              fontWeight: 600,
              textDecoration: 'underline',
            }}
            target={'_blank'}
            rel="noreferrer"
          >
            NFT Explorer
          </a>
        </Box>
      </div>
      {/*    SOCIAL ICONS */}
      {/* <Stack*/}
      {/*  direction={'row'}*/}
      {/*  spacing={2}*/}
      {/*  sx={{*/}
      {/*    justifyContent: 'center',*/}
      {/*    mt: '2rem',*/}
      {/*  }}*/}
      {/* >*/}
      {/*  {socialIcons.map(({ width, height, imgSrc, url, id }, index) => (*/}
      {/*    <IconButton key={id}>*/}
      {/*      <Image src={imgSrc} width={width} height={height} />*/}
      {/*    </IconButton>*/}
      {/*  ))}*/}
      {/* </Stack>*/}
    </>
  );
};

const Div = styled.div`
  background: ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  height: 16rem;
  color: #fff;
  font-size: 2.5rem;
  width: 403px;
  height: 482px;
`;
export default LeftSide;
