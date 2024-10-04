import { generateResponsiveSXProps } from '@/styles/utils';
import { forwardRef } from '@chakra-ui/react';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';

export const Container = forwardRef(({ children, ...props }: VerticalStackProps, ref) => {
  return (
    <VerticalStack
      maxW='1440px'
      {...props}
      px={{ base: '6', sm: '10', md: '14', lg: '52' }}
      sx={generateResponsiveSXProps('(min-width: 992px) and (max-width: 1434px)', { px: '28' })}
      ref={ref}
    >
      {children}
    </VerticalStack>
  );
});
