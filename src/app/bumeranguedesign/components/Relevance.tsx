import { BenefitCard } from "@/app/components/BenefitCard";
import { Text } from "@/app/components/Text";

export function Relevance() {
  return (
    <section className="bg-secondary-400">
      <div className="flex flex-col items-center justify-center w-full pt-32 lg:pt-8 pb-16 px-4 container mx-auto lg:flex-row relative">
        <div className="flex flex-col items-center justify-center gap-10 lg:max-w-2xl ">
          <Text size="subTitleCenter" variant="neutral">
            A relevância desse projeto
          </Text>
          <BenefitCard title="Proporciona lazer em ambientes fechados e abertos;" />
          <BenefitCard title="Instrumento que trabalha a coordenação motora, design no formato das asas e socialização;" />
          <BenefitCard title="Conscientização ecológica com a reutilização de materiais que seriam descartados;" />
          <BenefitCard title={"Desenvolvimento das habilidades manuais;"} />
        </div>
        <div className="self-end">
          <img
            src="bumerangue.svg"
            alt="Desenho de um bumerangue"
            className="w-full h-full hidden lg:block lg:-ml-28"
          />
        </div>
        <img
          src="bumerangue.svg"
          alt="Desenho de um bumerangue"
          className="w-2/4 h-2/4 right-0 bottom-0 block lg:hidden"
        />
      </div>
    </section>
  );
}
