import { Flex, LinkProps, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Container } from '../container';
import { Facebook } from '../icons/facebook';
import { Instagram } from '../icons/instagram';
import { Twitter } from '../icons/twitter';
import { Link } from '../link';
import { VerticalStack } from '../vertical-stack';

export const Footer = () => {
  return (
    <Flex as='footer' w='full' justify='center'>
      <Container
        align={{ base: 'flex-start' }}
        flexDir={{ base: 'column', sm: 'row' }}
        justify='space-between'
        py={{ base: '10', md: '14' }}
      >
        <VerticalStack
          w='full'
          align='flex-start'
          fontSize={{ base: 'md', md: 'lg' }}
          order={{ base: '1', md: '0' }}
        >
          <Text mb={{ base: '2', md: '4' }}>m@paratechnologies.xyz</Text>
          <Flex align='center'>
            <Text mr='2'>{new Date().getFullYear()} &copy; Para Technologies. </Text>
            {/* <Text as='em' fontStyle='normal' mr='2'>
              |
            </Text>
            <Link url='#'>
              <Text>Privacy Policy</Text>
            </Link> */}
          </Flex>
        </VerticalStack>
      </Container>
    </Flex>
  );
};

const FooterIcon = ({ icon, url, ...props }: LinkProps & { url: string; icon: ReactNode }) => {
  return (
    <Link rel='noopener norferrer' target='_blank' url={url} {...props}>
      {icon}
    </Link>
  );
};
