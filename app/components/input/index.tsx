import { Input, InputProps, forwardRef } from '@chakra-ui/react';
import { ChangeEvent } from 'react';

type InputBoxProps = InputProps & {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const InputBox = forwardRef(
  ({ children, onChange, value, ...props }: InputBoxProps, ref) => {
    return (
      <Input
        bg='grey.300'
        h={{ base: '54px', lg: '20' }}
        onChange={onChange}
        value={value}
        placeholder='Your email address'
        ref={ref}
        _focusVisible={activeStyles}
        _hover={activeStyles}
        {...props}
      />
    );
  }
);

const activeStyles = {
  borderColor: '#cecfcc',
  boxShadow: '0 0 0 1px #cecfcc',
};
