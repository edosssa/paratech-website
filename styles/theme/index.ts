import { extendTheme } from '@chakra-ui/react';
import { Color } from '../colors';
import { customDeviceWidth } from '../utils';

const theme = extendTheme({
  styles: {
    global: {
      ':host, :root, [data-theme]': {
        [`@media screen and (${customDeviceWidth.maxSm})`]: {
          '--chakra-fontSizes-2xl': '1.125rem',
          '--chakra-fontSizes-xl': '1.125rem',
          '--chakra-fontSizes-lg': '1rem',
          '--chakra-fontSizes-md': '0.875rem',
          '--chakra-fontSizes-sm': '0.75rem',
          '--chakra-space-1': '0.125rem',
          '--chakra-space-2': '0.25rem',
          '--chakra-space-3': '0.5rem',
          '--chakra-space-4': '0.75rem',
          '--chakra-space-5': '1rem',
          '--chakra-space-6': '1rem',
          '--chakra-space-7': '1.5rem',
          '--chakra-space-8': '1.75rem',
          '--chakra-space-9': '2rem',
          '--chakra-space-10': '2.25rem',
          '--chakra-space-12': '2.5rem',
          '--chakra-space-14': '3rem',
          '--chakra-space-16': '3.5rem',
          '--chakra-space-20': '4rem',
          '--chakra-space-24': '5rem',
        },
      },
      'html, body': {
        color: Color.DarkPrimary,
        margin: '0 auto',
        fontVariant: 'none',
      },
    },
  },
  fonts: {
    heading: `Euclid Circular B, sans-serif`,
    body: `Euclid Circular B, sans-serif`,
    color: Color.DarkPrimary,
  },
  colors: {
    dark: {
      primary: Color.DarkPrimary,
      100: Color.Dark100,
    },
    green: {
      500: Color.Green500,
      501: Color.Green501,
      text: Color.GreenText,
      primary: Color.ZappieGreen,
      forest: Color.ForestGreen,
    },
    grey: {
      100: Color.Grey100,
      200: Color.Grey200,
      300: Color.Grey300,
    },
  },
});

export default theme;
