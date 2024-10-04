import { Text } from '@chakra-ui/react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FeatureBanner } from '.';
import { CurvedBorder } from '../icons/curved-border';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';
import { BannerHeading } from './banner-heading';

export const SplitPaymentBanner = (props: VerticalStackProps) => {
  const imageRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLElement>(null);
  const isInview = useInView(textRef, { amount: 1, margin: '0px 0px -100px 0px' });

  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['end end', 'start 0.95'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]) as any;
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]) as any;

  return (
    <FeatureBanner {...props}>
      <VerticalStack
        as={motion.section}
        w={{ base: '280px', md: '390px' }}
        h={{ base: '203px', md: '282px' }}
        pos='relative'
        borderRadius='2xl'
        overflow='hidden'
        mb={{ base: '10', md: '16' }}
        mt={{ base: '4', md: '16' }}
        style={{ scale, opacity, transition: 'scale 0.15s ease-in' }}
        ref={imageRef}
      >
        <Image
          fill
          style={{ objectFit: 'contain' }}
          src='/images/split-payment.webp'
          alt='Sub-section of the split payment menu on Para Technologies checkout'
        />
      </VerticalStack>
      <VerticalStack mb={{ base: '14', md: '20' }} maxW={{ sm: '70%', md: '90%' }}>
        <BannerHeading display='inline'>
          Split bills however you please
          <Text display='inline-block' pos='relative' w='auto'>
            &nbsp;seamlessly
            <Text
              as={motion.span}
              w='full'
              overflow='hidden'
              pos='absolute'
              bottom={{ base: '-3.5', md: '-5' }}
              left='0'
              ref={textRef}
              className={isInview ? 'curved-border active' : 'curved-border'}
            >
              <CurvedBorder h={{ base: '7px', md: '18px' }} w={{ base: '108px', md: '164px' }} />
            </Text>
          </Text>{' '}
          and swiftly.
        </BannerHeading>
      </VerticalStack>
    </FeatureBanner>
  );
};
