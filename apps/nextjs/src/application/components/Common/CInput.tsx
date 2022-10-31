import React, { forwardRef } from 'react';
import { Box, BoxProps } from '@mui/material';

export const CInput = forwardRef<BoxProps, BoxProps>(
  ({ sx, component, children, ...props }, ref) => {
    const customSx = {
      width: '100%',
      padding: '10px',
      fontFamily: "'Poppins',sans-serif",
      fontSize: '1rem',
      border: (theme) => `2px solid ${theme.palette.primary.main}`,
      borderRadius: '12px',
      ...sx,
    };
    return (
      <Box sx={customSx} {...props} component={component} ref={ref}>
        {children}
      </Box>
    );
  },
);

CInput.displayName = 'CInput';
