import { View, waitlistFormId } from '@/app/constants';
import { generateContent } from '@/app/content';
import { primaryButtonStyles } from '@/styles/utils';
import { ButtonProps } from '@chakra-ui/button';
import { Flex, LinkProps } from '@chakra-ui/layout';
import { forwardRef } from '@chakra-ui/react';
import { Button } from '../button';
import { Container } from '../container';
import { Link } from '../link';

type NavbarProps = {
  onClick: (view: View) => void;
  view: View;
};

const minWidth = 64; // In pixels

export const Navbar = forwardRef(({ onClick, view }: NavbarProps, ref) => {
  const content = generateContent[view];

  return (
    <Flex
      as='header'
      w='full'
      justify='center'
      bg='white'
      top='0'
      zIndex='1000'
      ref={ref}
      pos='fixed'
    >
      <Container flexDir='row' justify='space-between' py={{ base: '7', md: '9' }} align='center'>
        <Flex align='center' pos='relative'>
          <Button
            {...tabItemStyles}
            {...generateActiveStyles(view === View.Personal)}
            onClick={() => onClick(View.Personal)}
            mr={{ base: '2', md: '4' }}
          >
            Personal
          </Button>
          <Button
            {...tabItemStyles}
            {...generateActiveStyles(view === View.Business)}
            onClick={() => onClick(View.Business)}
          >
            Business
          </Button>
          <Flex
            justify='center'
            align='center'
            minW={`${minWidth}px`}
            pos='absolute'
            color='green.text'
            top={{ base: '3', md: '4' }}
            ml={{ ...(view === View.Business ? { base: '2', md: '4' } : { base: '0' }) }}
            left={view === View.Personal ? '0' : `${minWidth}px`}
            fontSize={{ base: 'xs', md: 'initial' }}
            transition='left 0.3s ease-in-out, color 0.3s ease-in-out'
          >
            ●
          </Flex>
        </Flex>
        <Link
          url={`#${waitlistFormId}`}
          {...(primaryButtonStyles as LinkProps)}
          h='12'
          minH='12'
          minW='44'
          bg='grey.100'
          display={{ base: 'none', sm: 'flex' }}
        >
          {content.ctaText}
        </Link>
      </Container>
    </Flex>
  );
});

const tabItemStyles: ButtonProps = {
  border: 'none',
  bg: 'transparent',
  boxShadow: 'none',
  fontSize: 'md',
  minW: `${minWidth}px`,
  h: { base: '20px', md: 'initial' },
  px: '0',
};

const generateActiveStyles = (isActive: boolean): ButtonProps => {
  if (isActive) {
    return {
      color: 'green.text',
      fontWeight: '500',
    };
  }

  return {
    color: 'dark.primary',
    fontWeight: '400',
  };
};
