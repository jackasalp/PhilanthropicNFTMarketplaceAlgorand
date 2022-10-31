import { Box, Typography } from '@mui/material';

export const TableRowItem = ({ firstHeading, secondHeading, thirdHeading, fourthHeading }) => {
  return (
    <Box
      sx={{
        padding: '1rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        borderTop: '2px solid #65656580',
      }}
    >
      <Typography
        variant={'body1'}
        sx={{
          textAlign: 'left',
          color: (theme) => theme.palette.secondary.main,
          fontSize: {
            xs: '12px',
            lg: '16px',
          },
        }}
      >
        {firstHeading}
      </Typography>

      <Typography
        variant={'body1'}
        sx={{
          textAlign: 'center',
          fontSize: {
            xs: '12px',
            lg: '16px',
          },
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        {secondHeading}
      </Typography>

      <Typography
        variant={'body1'}
        sx={{
          textAlign: 'center',
          fontSize: {
            xs: '12px',
            lg: '16px',
          },
          color: (theme) => theme.palette.secondary.main,
        }}
      >
        {thirdHeading}
      </Typography>

      <Typography
        variant={'body1'}
        sx={{
          textAlign: 'right',
          color: (theme) => theme.palette.success.main,
          fontWeight: '600',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          fontSize: {
            xs: '12px',
            lg: '16px',
          },
        }}
      >
        {fourthHeading} &nbsp;
        <svg
          width="10"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_134_72)">
            <path
              d="M2.77532 17.0045L5.09733 12.7472L7.41965 8.50452L9.72748 4.24717L10.1099 3.57233L10.2798 4.24717L10.9878 7.05036L10.1947 8.50452L7.87265 12.7472L5.56482 17.0045H8.33982L10.6621 12.7472L11.8657 10.5434L12.4319 12.7472L13.5081 17.0045H16L14.9241 12.7472L13.8479 8.50452L13.5648 7.41014L15.2923 4.24717H12.7717L12.6869 3.93211L11.809 0.454081L11.6958 0.0045166H9.27449L9.21775 0.0942959L6.95216 4.24717L4.63015 8.50452L2.32201 12.7472L0 17.0045H2.77532Z"
              fill="#92A737"
            />
          </g>
          <defs>
            <clipPath id="clip0_134_72">
              <rect width="16" height="17" fill="white" transform="translate(0 0.0045166)" />
            </clipPath>
          </defs>
        </svg>
      </Typography>
    </Box>
  );
};
