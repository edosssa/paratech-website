import {
  AvatarGroup,
  AvatarProps,
  Avatar as ChakraAvatar,
  Flex,
  FlexProps,
  Text,
} from '@chakra-ui/react';

export const WaitListUsers = ({ text, ...props }: FlexProps & { text: string }) => {
  return (
    <Flex h='12' align='center' bg='grey.300' px='3.5' borderRadius='3xl' {...props}>
      <AvatarGroup size='sm' mr='4'>
        <Avatar name='David Azeez ' />
        <Avatar name='Lizzy Essien' />
        <Avatar name='Esther Obi' />
      </AvatarGroup>
      <Text>{text}</Text>
    </Flex>
  );
};

const Avatar = (props: AvatarProps) => {
  return <ChakraAvatar sx={{ '& .chakra-avatar__initials': { mt: '2.5px' } }} {...props} />;
};
