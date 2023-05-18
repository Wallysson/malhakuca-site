import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Buttom";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative py-36 flex items-center justify-center bg-center bg-no-repeat bg-cover bg-black, opacity-90"
      style={{
        backgroundImage: `url('/logo-limpo-inam1.png')`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 px-4 lg:text-left">
        <div className="flex flex-col w-full lg:flex-row justify-center items-center lg:order-2 lg:w-80">
          <img
            src="/mk1.png"
            alt="Imagem com estilo de cavalo do xadrez com Sr. José e seus alunos."
            className="max-w-[9rem] max-h-44 md:max-w-[12.5rem] md:max-h-72 lg:max-w-[18.5rem] lg:max-h-[23.5rem] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-center lg:order-1 lg:max-w-lg lg:items-start gap-4">
          <Text size="title" variant="default">
            Instituto Acadêmico Malhakuca
          </Text>
          <Text size="paragraph" variant="default">
            Há mais de 30 anos trabalhando para o desenvolvimento intelectual e
            manual da comunidade, especialmente do público infantil.
          </Text>
          <Link href="bumeranguedesign#about-bumerangue">
            <Button
              variant="default"
              size="small"
              className="md:px-[3.5rem] md:text-h4-bold md:py-2"
            >
              descubra
            </Button>
          </Link>
        </div>
      </div>

      <Image
        src="/figures.svg"
        alt="Fundo laranja e azul no top direito em forma de arco."
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
    </section>
  );
}
