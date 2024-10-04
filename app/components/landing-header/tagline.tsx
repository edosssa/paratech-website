import { Heading } from '@chakra-ui/layout';
import { SpaceProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const TagLine = ({ content, ...props }: SpaceProps & { content: ReactNode }) => {
  return (
    <Heading
      as='h1'
      color='dark.100'
      fontWeight='500'
      fontSize={{ base: '3xl', md: '5xl' }}
      textAlign='center'
      {...props}
    >
      {content}
    </Heading>
  );
};
