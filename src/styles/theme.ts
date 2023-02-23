import { extendTheme } from '@chakra-ui/react';

export const darkTheme = extendTheme({
  colors: {
    primary: '#1fd1a2',
    secondary: '#f5f5f5',
    buttonBg: '#f5f5f5',
    buttonColor: 'RGBA(0, 0, 0, 0.92)',
    background: 'RGBA(0, 0, 0, 0.92)',
  },
});

export const lightTheme = extendTheme({
  colors: {
    primary: '#f5f5f5',
    secondary: 'RGBA(0, 0, 0, 0.92)',
    buttonBg: 'RGBA(0, 0, 0, 0.92)',
    buttonColor: '#f5f5f5',
    background: '#0ec47e',
  },
});
