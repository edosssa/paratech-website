import { customDeviceWidth, generateResponsiveSXProps } from '@/styles/utils';
import { Button as ChakraUIButton, ButtonProps as ChakraUIButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

type ButtonProps = ChakraUIButtonProps & {
  children: ReactNode;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  const bg = props.bg || props.background || props.backgroundColor || 'green.primary';

  return (
    <ChakraUIButton
      w='inherit'
      size='lg'
      bg='green.primary'
      color='green.forest'
      fontSize='md'
      colorScheme='green'
      _active={{ bg: props.disabled ? 'button.disabled' : bg }}
      _hover={{ bg: props.disabled ? 'button.disabled' : bg }}
      border='1px solid'
      borderColor={props.disabled ? 'button.disabled' : bg}
      borderRadius='4px'
      boxShadow='0px 1px 2px rgba(16, 24, 40, 0.05);'
      fontWeight='500'
      h='54px'
      _disabled={{
        color: 'white',
        bg: 'button.disabled',
        borderColor: '#D0D5DD',
      }}
      {...props}
      sx={generateResponsiveSXProps(customDeviceWidth.maxSm, { height: '40px' })}
    >
      {children}
    </ChakraUIButton>
  );
};
