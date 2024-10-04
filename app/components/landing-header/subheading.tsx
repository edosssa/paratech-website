import { Heading, HeadingProps } from '@chakra-ui/layout';

export const SubHeading = ({ text, ...props }: HeadingProps & { text: string }) => {
  return (
    <Heading
      as='h2'
      color='dark.primary'
      fontSize='md'
      fontWeight='400'
      textAlign='center'
      maxW='95%'
      lineHeight='6'
      {...props}
    >
      {text}
    </Heading>
  );
};
