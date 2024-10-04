import { Link as ChakraLink, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

type LinkProps = ChakraLinkProps & {
  url: string;
  children: ReactNode;
};

export const Link = ({ url, children, ...props }: LinkProps) => {
  return (
    <NextLink href={url} passHref legacyBehavior>
      <ChakraLink
        _hover={{ textDecor: 'none' }}
        textDecor='none'
        fontSize='md'
        color='dark.primary'
        fontStyle='normal'
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};
