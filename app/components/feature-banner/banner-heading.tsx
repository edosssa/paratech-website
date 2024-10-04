import { Heading, HeadingProps } from '@chakra-ui/react';

export const BannerHeading = (props: HeadingProps) => {
  return (
    <Heading as='h3' fontSize={{ base: 'lg', md: '3xl' }} fontWeight='500' {...props}>
      {props.children}
    </Heading>
  );
};
