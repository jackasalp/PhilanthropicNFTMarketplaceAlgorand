import React from 'react';
import { ButtonProps, Button } from '@mui/material';

export const GradientButton = ({ children, sx, ...props }: ButtonProps) => {
  return (
    <Button
      variant={'contained'}
      sx={{
        background: 'linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)',
        borderRadius: '1rem',
        '&:hover': {
          background: 'linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
