import { ReactNode } from 'react';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';

export const FeatureBanner = ({
  children,
  ...props
}: VerticalStackProps & {
  children: ReactNode;
}) => {
  return (
    <VerticalStack
      fontWeight='500'
      fontSize='2xl'
      px={{ base: '7', sm: '14' }}
      pt={{ base: '7', sm: '14',  md: '20' }}
      bg='grey.200'
      borderRadius='2xl'
      justify='space-between'
      {...props}
    >
      {children}
    </VerticalStack>
  );
};
