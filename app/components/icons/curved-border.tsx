import { Color } from '@/styles/colors';
import { Icon, IconProps } from '@chakra-ui/react';

export const CurvedBorder = (props: IconProps) => {
  return (
    <Icon w='108px' h='7px' viewBox='0 0 108 7' fill='none' {...props}>
      <path
        d='M1 5.50016C41 0.499603 61 -0.999317 107 4.50131'
        stroke={Color.ZappieGreen}
        strokeWidth='2'
      />
    </Icon>
  );
};
