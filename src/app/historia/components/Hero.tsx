import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Image from "next/image";
import Link from "next/link";

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
            alt="Foto do Sr. José com alunos em uma escola e uma xadrez em sua frente."
            className="w-full lg:max-w-xs md:hidden"
          />
          <img
            src="hero-2Tablet.png"
            alt="Foto do Sr. José com alunos em uma escola e uma xadrez em sua frente."
            className="object-contain hidden md:block px-4"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:max-w-lg lg:items-start gap-4">
          <Text size="title" variant="default">
            Descobrindo o INAM
          </Text>
          <Text size="paragraph" variant="default">
            O Instituo Acadêmico Malhakuca (INAM) é uma organização que vem
            fazendo a diferença ao longo dos anos.
          </Text>
          <Link href="historia#slider">
            <Button
              size="small"
              variant="default"
              className="md:px-[3.5rem] md:text-h4-bold md:py-2"
            >
              saiba mais
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/figures-2.svg"
        alt="Figura reta laranja e azul no topo direito."
        width={200}
        height={200}
        className="absolute -top-14 right-4 md:w-80"
      />
    </section>
  );
}
