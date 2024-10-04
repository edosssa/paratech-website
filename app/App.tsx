'use client';

import theme from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/provider';
import { ReactNode } from 'react';

export const App = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
