import Image from "next/image";
import { Text } from "../Text";
import { SocialMedia } from "../SocialMedia";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-14">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/logo-inam1.png" alt="Logo" width={114} height={88} />
          <Text size="h6-bold" variant="neutral">
            Instituto Acadêmico Malhakuca
          </Text>
        </div>
        <div className="flex flex-col mt-9">
          <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:col-start-1 lg:flex lg:flex-row">
            <SocialMedia
              iconSrc="/instagram.svg"
              alt="logo-instagram"
              description="@Malhakuca"
            />
            <SocialMedia
              iconSrc="/twitter.svg"
              alt="logo-twitter"
              description="@Malhakuca"
            />
            <SocialMedia
              iconSrc="/facebook.svg"
              alt="logo-facebook"
              description="Academiamalhakuca"
            />
            <SocialMedia
              iconSrc="/whatsapp.svg"
              alt="logo-whatsapp"
              description="(12) 9 9622-8646"
            />
            <SocialMedia
              iconSrc="/email.svg"
              alt="logo-email"
              description="jcklegal49@yahoo.com.br"
            />
          </div>
          <div className="mt-9">
            <SocialMedia
              iconSrc="/address.svg"
              alt="logo-address"
              description="Rua Dom João V, n° 25 - subsolo - Parque dos Príncipes  CEP 12310-044 - Jacarei SP"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
