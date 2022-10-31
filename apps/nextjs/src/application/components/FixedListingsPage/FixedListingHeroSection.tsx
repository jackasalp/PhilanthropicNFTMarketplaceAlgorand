import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { WithBorder } from '../../utils/utils';
import { CPieChart } from '../Common/CPieChart';
import dynamic from 'next/dynamic';

const AuctionTimer = dynamic(() => import('$application/components/atoms/AuctionTimer'), {
  ssr: false,
}) as any;

const socialIcons = [
  {
    id: 1,
    imgSrc: '/icons/shareIcon.png',
    width: 22.84,
    height: 22.84,
    url: '#',
  },
  {
    id: 2,
    imgSrc: '/icons/attachFileIcon.png',
    width: 22.84,
    height: 22.84,
    url: '#',
  },
  {
    id: 3,
    imgSrc: '/icons/twitterIcon.png',
    width: 26.91,
    height: 22.84,
    url: '#',
  },
  {
    id: 4,
    imgSrc: '/icons/instagramIcon.png',
    width: 27.56,
    height: 27.56,
    url: '#',
  },
];

const chartData = [
  { name: 'Campaign Name', value: 33 },
  { name: 'Artist', value: 33 },
  { name: 'Platform', value: 33 },
];

export const FixedListingHeroSection = () => {
  return (
    <Box
      sx={{
        my: { xs: '50px', lg: '100px' },
      }}
    >
      <Grid alignItems={'center'} spacing={{ xs: 8, lg: 16 }} columns={10} container>
        {/*     LEFT SIDE OF THE HERO SECTION    */}
        <Grid xs={12} xl={4} item>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: '482px',
                height: '482px',
                width: '100%',
              }}
            >
              <Image
                layout={'fill'}
                objectFit={'cover'}
                src={'/texture-wallpaper.png'}
                width={482}
                height={422}
              />
            </Box>
          </Box>
          <Typography
            variant={'body1'}
            sx={{
              textAlign: 'center',
              mt: '8px',
            }}
          >
            View on{' '}
            <Box
              href={'#'}
              target={'_blank'}
              component="a"
              sx={{
                color: '#CD2929',
                cursor: 'pointer',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              NFT explorer
            </Box>
          </Typography>

          {/*    SOCIAL ICONS */}
          <Stack
            direction={'row'}
            spacing={2}
            sx={{
              justifyContent: 'center',
              mt: '2rem',
            }}
          >
            {socialIcons.map(({ width, height, imgSrc, url, id }, index) => {
              return (
                <IconButton key={id}>
                  <Image src={imgSrc} width={width} height={height} />
                </IconButton>
              );
            })}
          </Stack>
        </Grid>

        {/*      RIGHT SIDE OF THE HERO SECTION     */}

        {/*      RIGHT SIDE OF THE HERO SECTION     */}
        <Grid xs={12} xl={6} item>
          {/*     TOP HEADING SECTION - OWNED BY - SUPPORTING - CAMPAIGN CATEGORY   */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '14px',
                  md: '16px',
                  lg: '20px',
                },
                fontWeight: '500',
                textDecoration: 'underline',
                'text-underline-offset': '8px',
              }}
              variant={'body1'}
            >
              Owned by Afzaal
            </Typography>

            <Stack alignItems={'center'} direction={{ xs: 'column', lg: 'row' }} spacing={1}>
              <Typography
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                  },
                  fontWeight: '500',
                }}
                variant={'body1'}
              >
                Supporting
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '14px',
                    md: '16px',
                    lg: '18px',
                  },
                  fontWeight: '500',
                  background: (theme) => theme.palette.success.main,
                  color: '#fff',
                  borderRadius: '10px',
                  px: '12px',
                  py: '2px',
                  textDecoration: 'underline',
                }}
                variant={'body1'}
              >
                Campaign Category
              </Typography>
            </Stack>
          </Box>

          {/*    MAIN HEADING     */}
          <Box
            sx={{
              my: '2rem',
            }}
          >
            <Typography
              variant={'h1'}
              sx={{
                lineHeight: '40px',
                fontSize: '44px',
                fontWeight: '600',
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              NFT Name{' '}
              <Box
                component="span"
                sx={{
                  color: (theme) => theme.palette.success.main,
                }}
              >
                #1
              </Box>
            </Typography>

            <Typography
              variant={'body1'}
              color={'primary'}
              sx={{
                fontWeight: 'bold',
                textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Supply:
            </Typography>
          </Box>

          <Typography variant={'body1'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris est, porta sed
            facilisis blandit, eleifend ac dolor. Curabitur vitae ligula at lacus rutrum feugiat
          </Typography>

          <Grid
            sx={{
              mt: '.5rem',
            }}
            container
            spacing={4}
          >
            <Grid xs={12} lg={8} item>
              <Box
                sx={{
                  maxWidth: '369px',
                  margin: 'auto',
                }}
              >
                <WithBorder>
                  <Typography
                    gutterBottom
                    variant={'body1'}
                    color={'primary'}
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    Creator:{' '}
                    <Box component="span" sx={{ textDecoration: 'underline' }}>
                      7H23..453A
                    </Box>
                  </Typography>
                </WithBorder>

                {/*         Chart and stats         */}

                <WithBorder
                  sx={{
                    mt: '2rem',
                  }}
                >
                  <Typography
                    variant={'body1'}
                    color={'primary'}
                    textAlign={'center'}
                    sx={{
                      fontWeight: 'bold',
                    }}
                  >
                    NFT Sales Proceed
                  </Typography>

                  {/*    Chart        */}

                  <Box
                    sx={{
                      // mt: "-3rem",
                      // maxWidth: {xs: '200px', md: '220px', lg: '250px'},
                      // mx: 'auto',
                      height: '12rem',
                      maxWidth: '30rem',
                    }}
                    // container
                  >
                    <CPieChart data={chartData} />
                  </Box>
                </WithBorder>
              </Box>
            </Grid>
            {/*         Right Side*/}
            <Grid xs={12} lg={4} item>
              <Box
                sx={{
                  position: 'relative',
                }}
              >
                {/*    Bid Button   */}

                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: '1.5rem',
                    py: '1rem',
                    background: (theme) => theme.palette.primary.main,
                    borderRadius: '10px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontSize: { xs: '12px', sm: '14px', md: '20px', lg: '1.5rem' },
                          lineHeight: '30px',
                          color: '#fff',
                          fontWeight: 500,
                          textAlign: 'center',
                        }}
                      >
                        45
                        {/*    SVG ICON    */}
                        <svg
                          width="19"
                          height="22"
                          viewBox="0 0 19 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.29569 22L6.05308 16.4905L8.81084 11L11.5514 5.4905L12.0055 4.61717L12.2072 5.4905L13.048 9.11815L12.1062 11L9.34877 16.4905L6.60822 22H9.90354L12.6613 16.4905L14.0905 13.6386L14.7628 16.4905L16.0408 22H19L17.7224 16.4905L16.4444 11L16.1082 9.58375L18.1596 5.4905H15.1664L15.0657 5.08277L14.0231 0.581789L13.8888 0H11.0135L10.9461 0.116185L8.25569 5.4905L5.49831 11L2.75739 16.4905L0 22H3.29569Z"
                            fill="#FBFAF5"
                          />
                        </svg>
                      </Typography>

                      <Typography
                        sx={{
                          color: '#fff',
                          fontSize: '12px',
                          textAlign: 'center',
                        }}
                        variant={'body1'}
                      >
                        Price
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    component="button"
                    sx={{
                      border: '1px solid #fff',
                      borderRadius: '10px',
                      px: '8px',
                      py: '8px',
                      color: '#fff',
                      ml: '1rem',
                      cursor: 'pointer',
                      transition: 'all .3s linear',
                      background: (theme) => theme.palette.primary.main,
                      fontSize: '16px',
                      '&:hover': {
                        background: (theme) => theme.palette.primary.dark,
                      },
                    }}
                  >
                    Buy
                  </Box>
                </Box>

                <AuctionTimer />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
