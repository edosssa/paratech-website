import { Box } from '@chakra-ui/react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FeatureBanner } from '.';
import { SquigglyArrow } from '../icons/squiggly-arrow';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';
import { BannerHeading } from './banner-heading';

export const PaymentSuccessfulBanner = ({
  heading,
  ...props
}: VerticalStackProps & { heading: string }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const isInview = useInView(iconRef, { amount: 1, margin: '0px 0px -100px 0px' });

  const imageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['end end', 'start 0.75'] });
  const top = useTransform(scrollYProgress, (pos) => (pos === 1 ? 50 : 0)) as any;
  const opacity = useTransform(scrollYProgress, (pos) => (pos === 1 ? 0.5 : 1)) as any;

  return (
    <FeatureBanner
      as='section'
      w='full'
      bg='green.primary'
      color='green.forest'
      pos='relative'
      flexDir={{ base: 'column', lg: 'row' }}
      overflow='hidden'
      {...props}
    >
      <BannerHeading w={{ sm: '80%', lg: '49%' }} mt={{ lg: '-20' }} maxW={{ lg: '397px' }}>
        {heading}
      </BannerHeading>
      <Box
        mr={{ base: 'auto', lg: 'unset' }}
        pos={{ lg: 'absolute' }}
        top={{ lg: '55%' }}
        left={{ lg: '40%' }}
        className={isInview ? 'squiggly-arrow active' : 'squiggly-arrow'}
        ref={iconRef}
      >
        <SquigglyArrow />
      </Box>
      <VerticalStack
        as={motion.section}
        w={{ base: '280px', md: '338px' }}
        h={{ base: '311px', md: '375px' }}
        pos='relative'
        borderRadius='2xl'
        overflow='hidden'
        style={{ top, opacity, transition: 'top 0.35s ease-in, opacity 0.5s ease-in' }}
        ref={imageRef}
      >
        <Image
          fill
          style={{ objectFit: 'contain' }}
          src='/images/payment-successful.webp'
          alt='Sub-section of the payment successful page on Para Technologies checkout'
        />
      </VerticalStack>
    </FeatureBanner>
  );
};
