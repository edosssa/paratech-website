import Image from 'next/image';
import { VerticalStack, VerticalStackProps } from '../vertical-stack';

export const LandingImage = ({
  src,
  alignItems,
  alt,
  ...props
}: VerticalStackProps & { src: string; alt: string }) => {
  return (
    <VerticalStack
      as='section'
      w='full'
      h='580px'
      pos='relative'
      borderRadius='2xl'
      overflow='hidden'
      {...props}
    >
      <Image fill style={{ objectFit: 'cover' }} src={src} alt={alt} priority />
    </VerticalStack>
  );
};
