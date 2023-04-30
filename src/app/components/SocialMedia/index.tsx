import Image from "next/image";
import { Text } from "../Text";

type SocialMediaProps = {
  iconSrc: string,
  description: string,
  alt: string,
}

export function SocialMedia({iconSrc, description, alt}:SocialMediaProps) {
  return (
    <div className="flex items-center justify-center gap-2 md:justify-start lg:justify-center">
      <Image src={iconSrc} alt={alt} width={24} height={24} />
      <Text size="h6-bold" children={description} variant="neutral"/>
    </div>
  );
}
