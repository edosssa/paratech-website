import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { FormEvent, useRef } from 'react';
import { InputBox } from '.';
import { Button } from '../button';
import { VerticalStack } from '../vertical-stack';
import { waitlistFormId } from '@/app/constants';

export const WaitListForm = ({ label }: { label: string }) => {
  const inputRef = useRef<HTMLInputElement>();

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <VerticalStack as='form' mt='8' onSubmit={handleOnSubmit}>
      <InputGroup flexDir={{ base: 'column', lg: 'row' }} size={{ base: 'md', lg: 'lg' }}>
        <InputBox type='email' id={waitlistFormId} autoComplete='email' isRequired ref={inputRef} />
        <InputRightElement
          pos={{ base: 'relative', lg: 'absolute' }}
          w={{ base: 'full', lg: 'auto' }}
          right={{ base: 'inital', lg: '4' }}
          top={{ base: 'inital', lg: '4' }}
          mt={{ base: '6', lg: 'initial' }}
        >
          <Button type='submit'>{label}</Button>
        </InputRightElement>
      </InputGroup>
    </VerticalStack>
  );
};
