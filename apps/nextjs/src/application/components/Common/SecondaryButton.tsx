import { Button, ButtonProps, SxProps, Theme } from '@mui/material';

interface Props extends ButtonProps {
  sx?: SxProps<Theme>;
  active?: boolean;
  children: string;
}
export const SecondaryButton = ({ children, sx, active = false, ...props }: Props) => {
  return (
    <Button
      variant={'outlined'}
      color={'success'}
      sx={{
        fontSize: '14px',
        borderRadius: '4px',
        boxShadow: 'none',
        textTransform: 'unset',
        px: '2rem',
        py: '8px',
        color: active ? '#fff' : (theme) => theme.palette.success.main,
        background: active ? (theme) => theme.palette.success.main : 'transparent',
        '&:hover': {
          background: (theme) => theme.palette.success.main,
          color: '#fff',
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
