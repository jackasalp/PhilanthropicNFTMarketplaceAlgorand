import { Box } from '@mui/material';
import { SxProps, alpha, styled, Theme } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import { ReactNode } from 'react';

export const getTraitsArray = (traits) => {
  const validTraitNames = Object.keys(traits).filter(
    (trait) => trait.includes('Name') && traits[trait],
  );

  const obj = {};

  validTraitNames.forEach((traitName) => {
    const traitId = traitName.split('e')[1];

    const name = traits[`traitName${traitId}`];
    const value = traits[`traitValue${traitId}`];

    obj[name] = value;
  });

  return obj;
};

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ height: '100%' }}>{children}</Box>}
    </div>
  );
};

export const a11yPropsForAdminPages = (index) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));

interface WithBorderProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
export const WithBorder = ({ children, sx }: WithBorderProps) => {
  return (
    <Box
      sx={{
        border: '1px solid #004A99',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        px: '1rem',
        py: '10px',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
