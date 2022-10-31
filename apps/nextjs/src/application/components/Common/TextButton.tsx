import { Box, BoxProps } from '@mui/material';

export const TextButton = ({ children, sx, ...props }: BoxProps) => {
  return (
    <Box
      sx={{
        fontSize: '14px',
        fontWeight: 'bold',
        cursor: 'pointer',
        '&>a': {
          textDecoration: 'none',
          color: (theme) => theme.palette.success.main,
        },
        color: (theme) => theme.palette.success.main,
        transition: 'all .3s linear',
        '&:hover': {
          color: (theme) => theme.palette.success.dark,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
