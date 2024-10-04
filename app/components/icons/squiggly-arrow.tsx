import { Icon, IconProps } from '@chakra-ui/react';

export const SquigglyArrow = (props: IconProps) => {
  return (
    <Icon width='98px' height='105px' viewBox='0 0 98 105' fill='none' {...props}>
      <path
        d='M5.05249 26.2095C11.4552 40.3922 24.6062 59.7673 45.8715 55.6447C67.138 51.5238 59.6935 26.3553 48.9582 29.6581C31.0672 35.165 58.9095 62.1322 86.4507 69.0013'
        stroke='#FFEB69'
        strokeWidth='3.5'
        strokeLinecap='round'
        className='path-1'
      />
      <path
        d='M77.6867 75.4658L88.1033 71.3323L85.0921 57.947'
        stroke='#FFEB69'
        strokeWidth='3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        className='path-2'
      />
    </Icon>
  );
};
