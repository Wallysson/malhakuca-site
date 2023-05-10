import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Image from "next/image";

export function Guiness() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full py-16 px-4 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 lg:max-w-2xl text-center ">
          <Image
            src="/guinness-logo.png"
            alt="Figura"
            width={180}
            height={140}
            className="md:w-[16.5rem] md:h-[13.125rem] "
          />
          <Text size="subTitle">Campanha para o Guinnes World Records</Text>
          <Text size="paragraph">
            Convidamos todas as escolas, empresas e pessoas de Jacarei e do Vale
            do Paraiba a participarem dos cursos, campeonatos e eventos de
            bumerangue de cartonados para colaborar em nossa campanha de
            angariar fundos na modalidade maior bumeranguedesigner de cartonado
            do mundo.
          </Text>
          <Button
            variant="default"
            className="md:px-[3.5rem] md:text-h4-bold md:py-2"
          >
            contato
          </Button>
        </div>
      </div>
    </section>
  );
}
