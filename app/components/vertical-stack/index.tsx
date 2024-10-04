'use client';
import { Flex, FlexProps, forwardRef } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type VerticalStackProps = FlexProps & {
  children?: ReactNode;
};

export const VerticalStack = forwardRef(({ children, ...props }: VerticalStackProps, ref) => {
  return (
    <Flex w='full' align='center' flexDir='column' justify='center' {...props} ref={ref}>
      {children}
    </Flex>
  );
});
