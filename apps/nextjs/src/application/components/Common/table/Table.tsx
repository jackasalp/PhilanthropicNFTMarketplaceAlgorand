import { Box, Typography } from '@mui/material';
import { TableRowItem } from './TableRowItem';

export const Table = ({ data }) => {
  const { rows, headings } = data;

  return (
    <Box
      sx={{
        border: '2px solid #65656580',
        borderRadius: '12px',
      }}
    >
      <Box
        sx={{
          padding: '1rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
        }}
      >
        <Typography
          variant={'body1'}
          sx={{
            textAlign: 'left',
            color: 'rgba(101,101,101,0.35)',
          }}
        >
          {headings.firstHeading}
        </Typography>

        <Typography
          variant={'body1'}
          sx={{
            textAlign: 'center',
            color: 'rgba(101,101,101,0.35)',
          }}
        >
          {headings.secondHeading}
        </Typography>

        <Typography
          variant={'body1'}
          sx={{
            textAlign: 'center',
            color: 'rgba(101,101,101,0.35)',
          }}
        >
          {headings.thirdHeading}
        </Typography>

        <Typography
          variant={'body1'}
          sx={{
            textAlign: 'right',
            color: 'rgba(101,101,101,0.35)',
          }}
        >
          {headings.fourthHeading}
        </Typography>
      </Box>

      <Box>
        {rows.map((row, index) => {
          return <TableRowItem key={index} {...row} />;
        })}
      </Box>
    </Box>
  );
};
