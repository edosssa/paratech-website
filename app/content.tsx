import { Text } from '@chakra-ui/react';
import { CurvedBorder } from './components/icons/curved-border';
import { View } from './constants';

export type ContentKey = keyof typeof View;

const BusinessLandingHeading = () => (
  <Text>
    Elevate your Business efficiency with
    <Text as='em' fontStyle='normal' display='inline-block' pos='relative' w='auto'>
      &nbsp;Para
      <Text
        as='span'
        w='full'
        overflow='hidden'
        pos='absolute'
        bottom={{ base: '-3.5', md: '-7' }}
        left='0'
      >
        <CurvedBorder h={{ base: '7px', md: '18px' }} w={{ base: '108px', md: '164px' }} />
      </Text>
    </Text>
  </Text>
);

export const generateContent = {
  [View.Personal]: {
    landingImage: '/images/customer-scan-qr.webp',
    landingImageAlt: 'A customer scanning QR code in shop',
    landingHeading: 'Effortlessly scan, split and pay the bill',
    landingSubheading:
      'Be the first to use the best receipt management system with easy scan, pay, and manage functions by getting on our waiting list right away.',
    ctaText: 'Join the waitlist',
    scanQRBannerHeading: 'Scan the QR code on your table for immediate access to the menu.',
    paymentSuccessfulHeading: 'Pay seamlessly and get the payment confirmed at the speed of light.',
    waitlistText: (count: number) => `Join ${count} people`,
    waitlistHeader: 'Experience bill managements like never before',
  },
  [View.Business]: {
    landingImage: '/images/customer-scan-qr.webp',
    landingImageAlt: 'A customer scanning QR code in shop',
    landingHeading: <BusinessLandingHeading />,
    landingSubheading:
      'Be the first to use the best property management system and manage functions by getting on our waiting list right away.',
    ctaText: 'Book Demo',
    scanQRBannerHeading:
      'Your customers scan the QR code on their table for immediate access to your menu.',
    paymentSuccessfulHeading: 'Secure and immediate payments 24/7',
    waitlistText: (count: number) => `Join ${count} businesses`,
    waitlistHeader: 'Experience bill managements like never before',
  },
};
