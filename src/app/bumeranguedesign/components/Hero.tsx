import { Text } from "@/app/components/Text";
import Image from "next/image";

export function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover bg-black, opacity-90"
      style={{
        backgroundImage: `url('/logo-limpo-inam1.png')`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 px-4 lg:text-left">
        <div className="flex flex-col w-full lg:flex-row justify-center items-center lg:order-2 lg:w-80">
          <img
            src="/boolmerang.png"
            alt="Figura"
            className="max-w-[9rem] max-h-44 md:max-w-[12.5rem] md:max-h-72 lg:max-w-[18.5rem] lg:max-h-[23.5rem] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:order-1 lg:max-w-lg lg:items-start gap-4">
          <Text
            size="title"
            children={"O bumeranguedesign como instrumento de emancipação"}
            variant="default"
          />
          <Text
            size="paragraph"
            variant="default"
            children={
              "Incentivando à prática de esporte e lazer em conjunto com a educação ecológica de reutilização de material cartonado nas oficinas de confecção e prática de Bumerangue  Sustentável ( lei n. 12.305/10 PNRS). O aluno aprende a fazer o bumerangue ecológico, podendo brincar, ensinar a fazer e brincar e até vender para auferir renda própria."
            }
          />
        </div>
      </div>

      <Image
        src="/figures3.svg"
        alt="Figura"
        width={120}
        height={100}
        className="absolute top-0 right-0"
      />
    </section>
  );
}