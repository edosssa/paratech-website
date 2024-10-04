import { ReactNode } from 'react';
import { VerticalStack } from '../vertical-stack';
import { SubHeading } from './subheading';
import { TagLine } from './tagline';
import { forwardRef } from '@chakra-ui/react';

type LandingHeaderProps = {
  content: ReactNode;
  subheading: string;
};

export const LandingHeader = forwardRef(({ content, subheading, ...props }: LandingHeaderProps, ref) => {
  return (
    <VerticalStack ref={ref} as='section' maxW={{ base: '293px', sm: '400px', md: '580px' }} {...props}>
      <TagLine mb='5' content={content} />
      <SubHeading text={subheading} />
    </VerticalStack>
  );
});
