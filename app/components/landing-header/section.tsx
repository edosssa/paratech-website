import { View, waitlistFormId } from '@/app/constants';
import { generateContent } from '@/app/content';
import { primaryButtonStyles } from '@/styles/utils';
import { LinkProps } from '@chakra-ui/react';
import { useSize } from '@chakra-ui/react-use-size';
import { useRef } from 'react';
import { LandingHeader } from '.';
import { Container } from '../container';
import { Link } from '../link';

export const LandingHaeaderSection = ({ view }: { view: View }) => {
  const content = generateContent[view];

  const landingHeaderRef = useRef<HTMLElement>(null);
  const size = useSize(landingHeaderRef);

  return (
    <Container
      ref={landingHeaderRef}
      mb={{ base: '12', md: '20' }}
      pos='fixed'
      h={size?.height}
      top={{ base: '79px', md: '120px' }}
    >
      <LandingHeader content={content.landingHeading} subheading={content.landingSubheading} />
      <Link mt='7' url={`#${waitlistFormId}`} {...(primaryButtonStyles as LinkProps)}>
        {content.ctaText}
      </Link>
    </Container>
  );
};
