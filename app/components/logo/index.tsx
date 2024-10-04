import { Box } from '@chakra-ui/react';
import Image from 'next/image';

export const Logo = () => {
  return (
    <Box>
      <Image
        style={{ width: 'auto' }}
        height='14'
        width='77'
        priority
        alt='Para Technologies logo'
        src='/images/zappie-logo.svg'
      />
    </Box>
  );
};
