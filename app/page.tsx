'use client';
import { generateResponsiveSXProps, primaryButtonStyles } from '@/styles/utils';
import { Flex, FlexProps, Heading, LinkProps } from '@chakra-ui/layout';
import { useSize } from '@chakra-ui/react-use-size';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment, useLayoutEffect, useRef, useState } from 'react';
import { Container } from './components/container';
import { PaymentSuccessfulBanner } from './components/feature-banner/payment-successful-banner';
import { ScanQRBanner } from './components/feature-banner/scan-qr-banner';
import { SplitPaymentBanner } from './components/feature-banner/split-payment-banner';
import { Footer } from './components/footer';
import { WaitListForm } from './components/input/waitlist-input';
import { LandingHeader } from './components/landing-header';
import { LandingImage } from './components/landing-image';
import { Link } from './components/link';
import { Navbar } from './components/navbar';
import { VerticalStack } from './components/vertical-stack';
import { WaitListUsers } from './components/wait-list-users';
import { View, waitlistFormId } from './constants';
import { generateContent } from './content';

const Home = () => {
  const [view, setView] = useState<View>(View.Personal);
  const content = generateContent[view];
  const router = useRouter();
  const pathname = usePathname();

  const navbarRef = useRef<HTMLElement>(null);
  const navbarSize = useSize(navbarRef);

  const landingHeadingContainerRef = useRef<HTMLElement>(null);
  const landingHeaderRef = useRef<HTMLElement>(null);
  const landingHeaderSize = useSize(landingHeaderRef);
  const { scrollYProgress } = useScroll({
    target: landingHeadingContainerRef,
    offset: ['0.5px start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.3, 0.6], [1, 0.5, 0.25, 0.15]) as any;

  const handleOnToggleView = (view: View) => {
    setView(view);
  };

  useLayoutEffect(() => {
    if (document.location.hash === `#${waitlistFormId}`) {
      router.replace(pathname);
    }
  }, [pathname, router]);

  return (
    <Fragment>
      <Navbar ref={navbarRef} onClick={handleOnToggleView} view={view} />
      <VerticalStack as='main' mt={{ base: '12', md: '20' }}>
        <Container
          as={motion.section}
          mb={{ base: '12', md: '20' }}
          h={landingHeaderSize?.height}
          style={{ opacity }}
          justify='flex-start'
          ref={landingHeadingContainerRef}
        >
          <VerticalStack
            pos='fixed'
            ref={landingHeaderRef}
            top={{
              base: `calc(var(--chakra-space-12) + ${navbarSize?.height}px)`,
              md: `calc(var(--chakra-space-20) + ${navbarSize?.height}px)`,
            }}
          >
            <LandingHeader
              content={content.landingHeading}
              subheading={content.landingSubheading}
            />
            <Link mt='7' url={`#${waitlistFormId}`} {...(primaryButtonStyles as LinkProps)}>
              {content.ctaText}
            </Link>
          </VerticalStack>
        </Container>
        <Container
          justify={{ base: 'flex-start', md: 'center' }}
          pos='sticky'
          h={{ base: '60vh', md: '40vh' }}
          mt={`${navbarSize?.height}`}
          top={{
            base: `calc(var(--chakra-space-2) + ${navbarSize?.height}px)`,
            md: `calc(var(--chakra-space-10) + ${navbarSize?.height}px)`,
          }}
        >
          <LandingImage src={content.landingImage} alt={content.landingImageAlt} />
        </Container>
        <Container mt='6' pb={{ base: '7', md: '10' }} zIndex='100' bg='white'>
          <Flex
            as='section'
            w='full'
            flexDir={{ base: 'column', lg: 'row' }}
            justify='space-between'
            sx={bannerWrapperProps}
            bg='white'
            pt={{ base: '10', md: '14' }}
          >
            <ScanQRBanner
              mb={{ base: '5', md: '8', lg: 'unset' }}
              heading={content.scanQRBannerHeading}
              {...bannerItemProps}
            />
            <SplitPaymentBanner {...bannerItemProps} />
          </Flex>
        </Container>
        <Container pb='24' bg='white' zIndex='100'>
          <PaymentSuccessfulBanner heading={content.paymentSuccessfulHeading} />
        </Container>
        <VerticalStack
          as='section'
          w='full'
          bg='grey.100'
          py={{ base: '28', md: '36' }}
          zIndex='100'
        >
          <Container>
            <VerticalStack w={{ sm: '55%', md: '65%', lg: '60%' }} maxW='576px'>
              <WaitListUsers text={content.waitlistText(160)} mb='8' />
              <Heading
                textAlign='center'
                as='h3'
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                fontWeight='500'
              >
                Experience bill managements like never before
              </Heading>
              <WaitListForm label={content.ctaText} />
            </VerticalStack>
          </Container>
        </VerticalStack>
      </VerticalStack>
      <Footer />
    </Fragment>
  );
};

const mediaQuery = '(min-width: 992px) and (max-width: 1434px)';

const bannerWrapperProps = generateResponsiveSXProps(mediaQuery, {
  flexDir: 'column',
});

const bannerItemProps: FlexProps = {
  w: { lg: '90%' },
  maxW: { lg: '500px' },
  sx: generateResponsiveSXProps(mediaQuery, {
    w: 'full',
    maxW: 'unset',
    mb: '8',
  }),
};

export default Home;
