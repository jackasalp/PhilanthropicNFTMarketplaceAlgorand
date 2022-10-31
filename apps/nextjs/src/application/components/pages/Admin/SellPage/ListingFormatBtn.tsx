import { SecondaryButton } from '$application/components/Common/SecondaryButton';
import { ButtonProps, SxProps, Theme } from '@mui/material';

interface Props extends ButtonProps {
  sx?: SxProps<Theme>;
  active?: boolean;
  children: string;
}
export const ListingFormatBtn = ({ sx, active, children, ...props }: Props) => {
  return (
    <SecondaryButton
      sx={{
        py: '10px',
        px: '1rem',
        width: '100%',
        borderColor: (theme) => theme.palette.primary.main,
        color: active ? '#fff' : (theme) => theme.palette.primary.main,
        background: active ? (theme) => theme.palette.primary.main : '#fff',
        '&:hover': {
          color: '#fff',
          background: (theme) => theme.palette.primary.main,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </SecondaryButton>
  );
};
