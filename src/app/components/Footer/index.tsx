import Image from "next/image";
import { Text } from "../Text";
import { SocialMedialinks } from "../SocialMediaLinks";

export function Footer() {
  return (
    <footer className="bg-neutral-900 py-14">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image src="/logo-inam1.png" alt="Logo" width={114} height={88} />
          <Text
            children="Instituto Acadêmico Malhakuca"
            size="h6-bold"
            variant="neutral"
          />
        </div>
        <div>
        </div>
      </div>
    </footer>
  );
}
