import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface LinearProgressbarProps extends LinearProgressProps {
  progressNumber: number;
  progressText: string;
}

export const LinearProgressbar = ({ className, ...props }: LinearProgressbarProps) => (
  <Box
    sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    className={className}
  >
    <Typography sx={{ textTransform: 'capitalize' }}>{props.progressText}</Typography>
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" value={props.progressNumber} {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.progressNumber,
        )}%`}</Typography>
      </Box>
    </Box>
  </Box>
);
