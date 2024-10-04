import { FlexProps } from '@chakra-ui/layout';
import { ButtonProps } from '@chakra-ui/react';
import { LayoutProps } from '@chakra-ui/styled-system';

type GenerateResponsiveSXPropsReturn = Record<string, LayoutProps>;

export const generateResponsiveSXProps = (
  breakPoint: string,
  props: FlexProps
): GenerateResponsiveSXPropsReturn => {
  return {
    [`@media screen and ${breakPoint}`]: props,
  };
};

export const customDeviceWidth = {
  maxSm: 'max-width: 379px',
};

export const primaryButtonStyles: ButtonProps = {
  color: 'green.forest',
  bg: 'green.primary',
  border: '1px solid',
  borderColor: 'transparent',
  minH: '54px',
  fontWeight: '500',
  borderRadius: '4px',
  px: '6',
  textDecor: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
