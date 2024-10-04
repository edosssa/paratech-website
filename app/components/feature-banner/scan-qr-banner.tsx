import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FeatureBanner } from '.';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';
import { BannerHeading } from './banner-heading';

export const ScanQRBanner = ({ heading, ...props }: VerticalStackProps & { heading: string }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start 0.75'] });
  const top = useTransform(scrollYProgress, (pos) => (pos === 1 ? 50 : 0)) as any;
  const opacity = useTransform(scrollYProgress, (pos) => (pos === 1 ? 0.35 : 1)) as any;

  return (
    <FeatureBanner {...props} overflow='hidden'>
      <BannerHeading fontWeight='500' maxW={{ sm: '70%', md: '90%' }} mb={{ base: '10', md: '16' }}>
        {heading}
      </BannerHeading>
      <VerticalStack
        w={{ base: '280px', md: '338px' }}
        h={{ base: '310px', md: '375px' }}
        pos='relative'
        borderRadius='2xl'
        overflow='hidden'
        as={motion.section}
        style={{ top, opacity, transition: 'top 0.35s ease-in, opacity 0.5s ease-in' }}
        ref={ref}
      >
        <Image
          fill
          style={{ objectFit: 'contain' }}
          src='/images/menu-cross-section.webp'
          alt='Sub-section of the menu page on Para Technologies checkout'
        />
      </VerticalStack>
    </FeatureBanner>
  );
};
