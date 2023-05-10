import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-36 flex items-center justify-center bg-center bg-no-repeat bg-cover bg-black, opacity-90"
      style={{
        backgroundImage: `url('/logo-limpo-inam1.png')`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 lg:text-left">
        <div className="flex flex-col w-full lg:flex-row justify-center items-center lg:order-2">
        <img
          src="hero-2.png"
          alt="feature image 2"
          className="w-full lg:max-w-xs md:hidden"
        />
        <img
          src="hero-2Tablet.png"
          alt="feature image 2"
          className="object-contain hidden md:block px-4"
        />
        </div>
        <div className="flex flex-col justify-center items-center lg:max-w-lg lg:items-start gap-4">
          <Text
            size="title"
            children={"Descobrindo o INAM"}
            variant="default"
          />
          <Text
            size="paragraph"
            variant="default"
            children={
              "O Instituo Acadêmico Malhakuca (INAM) é uma organização que vêm fazendo a diferença ao lango dos anos."
            }
          />
          <Button size="small" children='Saiba mais' variant="default"/>
        </div>
      </div>

      <Image
        src="/figures-2.svg"
        alt="Figura"
        width={200}
        height={200}
        className="absolute -top-14 right-4 md:w-80"
      />
    </section>
  );
}
