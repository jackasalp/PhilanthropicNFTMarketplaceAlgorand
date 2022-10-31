import { LoadingButton, LoadingButtonProps } from '@mui/lab';

export const PrimaryButton = ({ children, sx, ...props }: LoadingButtonProps) => {
  return (
    <LoadingButton
      variant={'contained'}
      color={'primary'}
      sx={{
        fontSize: '14px',
        borderRadius: '11px',
        boxShadow: 'none',
        textTransform: 'unset',
        px: '1rem',
        py: '8px',
        color: '#fff',
        background: (theme) => theme.palette.primary.main,
        ...sx,
      }}
      {...props}
    >
      {children}
    </LoadingButton>
  );
};
