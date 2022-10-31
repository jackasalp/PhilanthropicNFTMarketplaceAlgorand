import { createTheme } from '@mui/material/styles';

const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 480,
      lg: 768,
      xl: 1024,
      xxl: 1200,
    },
  },
  palette: {
    primary: {
      main: '#0a4fde',
      dark: '#004A99',
      '100': '#558afa',
      '200': '#8db0fb',
      light: '#c7d8fd',
    },
    secondary: {
      main: '#04bfbf',
      dark: '#06a1a1',
      '100': '#43cfcf',
      '200': '#81dfdf',
      light: '#c0efef',
    },
    success: {
      main: '#1ab297',
      dark: '#0a967d',
      '100': '#53c5b0',
      '200': '#8dd9cb',
      light: '#c6ece5',
    },
    grey: {
      '100': '#000',
      '200': '#738297',
      '300': '#a1b1c7',
      '400': '#c1cddd',
      '500': '#d5dfed',
      '600': '#e3ebf7',
      '700': '#eff6ff',
      '800': '#f7fafe',
      '900': '#fff',
    },
    error: {
      main: '#f36d53',
      dark: '#dc553b',
      '100': '#f6927e',
      '200': '#f8b5a8',
      light: '#fcdad4',
      contrastText: '#f7fafe',
    },
    warning: {
      main: '#f5d650',
      dark: '#ecc622',
      '100': '#f7e07b',
      '200': '#faeaa7',
      light: '#fcf4d4',
    },
    info: {
      main: '#03b9ff',
      dark: '#00a5e5',
      '100': '#42cbff',
      '200': '#81dcff',
      light: '#c0eeff',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      textAlign: 'left',
      fontFamily: "'Poppins', sans-serif",
      fontWeight: '400',
      fontSize: '69px',
      lineHeight: '103.5px',
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: '50px',
      // lineHeight: 52.5,
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      fontWeight: 400,
      color: '#656565',
      textAlign: 'left',
      fontSize: {
        xs: '16px',
        xl: '18px',
      },
      lineHeight: {
        xs: '24px',
        xl: '27px',
      },
    },
    body2: {
      fontFamily: "'Righteous', cursive",
      fontWeight: 400,
      color: '#656565',
      textAlign: 'left',
      fontSize: {
        xs: '16px',
        xl: '18px',
      },
      lineHeight: {
        xs: '24px',
        xl: '27px',
      },
    },
  },
};

export default createTheme(themeOptions as any);
