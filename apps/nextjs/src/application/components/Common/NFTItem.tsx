import { Box, Stack, Typography } from '@mui/material';
import truncateMiddle from 'truncate-middle';
import { PrimaryButton } from './PrimaryButton';

export const NftItem = (props) => {
  return (
    <Box
      sx={{
        // padding: '1rem',
        border: (theme) => `2px solid ${theme.palette.primary.main}`,
        width: { xs: '100%', sm: '250px' },
        maxWidth: { xs: '250px', md: '100%' },
        minWidth: '250px',
        // borderRadius: '11px',
        ...props.sx,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: props.withImgStripe ? '268.33px' : '309px',
          '& img': {
            // objectFit: 'cover',
          },
        }}
      >
        <img src={props.imgSrc} style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Image bottom stripe  */}
      {props.withImgStripe && (
        <Stack
          direction={'row'}
          spacing={3}
          justifyContent="space-between"
          sx={{
            background: (theme) => theme.palette.primary.main,
            p: '10px 1rem',
            color: '#fff',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            variant={'body1'}
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '14px',
              textTransform: 'capitalize',
            }}
          >
            {props.imgStripeLeftValue}
          </Typography>
          <Typography
            variant={'body1'}
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              fontSize: '14px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {props.imgStripeRightValue}
          </Typography>
        </Stack>
      )}

      {/*    NFT Name and Pieces    */}
      <Stack
        direction={'row'}
        spacing={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          // mt: '1rem',
          // border: (theme) => `2px solid ${theme.palette.primary.main}`,
          px: '8px',
          py: '1rem',
        }}
      >
        <Stack
          spacing={0.5}
          sx={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {props.nftName && (
            <Typography
              variant="body1"
              color="primary"
              sx={{
                fontSize: '1.2rem',
                // mt: '.6rem',
                // width: '13rem',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontWeight: 600,
                textTransform: 'capitalize',
              }}
            >
              {props.nftName}
            </Typography>
          )}
          {!props.creatorAddress && props.description && (
            <Typography
              variant={'body1'}
              sx={{
                fontSize: '.9rem',
                textAlign: 'left',
              }}
            >
              {props.description}
            </Typography>
          )}
          {props.creatorAddress && (
            <Typography
              variant={'body1'}
              sx={{
                fontSize: '.9rem',
                textAlign: 'left',
              }}
            >
              {props.username ? props.username : truncateMiddle(props.creatorAddress, 5, 5, '...')}
            </Typography>
          )}
        </Stack>
        {(props.endTime || (props.onButtonClick && props.type)) && (
          <Stack
            spacing={0.5}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {props.endTime && (
              <Typography
                sx={{
                  fontSize: '.9rem',
                  textAlign: 'center',
                  textTransform: 'capitalize',
                }}
              >
                {props.endTime}
              </Typography>
            )}
            {props.onButtonClick && props.type && (
              <PrimaryButton
                onClick={props.onButtonClick}
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  padding: '4px 16px',
                  borderRadius: '6px',
                }}
              >
                {props.type}
                {props.buttonStartIcon && (
                  <Box sx={{ ml: 1, display: 'flex' }}>{props.buttonStartIcon}</Box>
                )}
              </PrimaryButton>
            )}
          </Stack>
        )}
      </Stack>
    </Box>
  );
};
