import { BenefitCard } from "@/app/components/BenefitCard";
import { Text } from "@/app/components/Text";

export function Revelance() {
  return (
    <section className="bg-secondary-400 flex flex-col items-center relative">
      <div className="flex flex-col items-center justify-center w-full py-32 px-4 container mx-auto lg:items-center">
        <div className="flex flex-col items-center justify-center gap-10 lg:max-w-2xl ">
          <Text
            size="subTitle"
            children={"A relevância desse projeto"}
            variant="neutral"
          />
          <BenefitCard title="Proporciona lazer em ambientes fechados e abertos;" />
          <BenefitCard title="Instrumento que trabalha a coordenação motora, design no formato das asas e socialização;" />
          <BenefitCard title="Conscientização ecológica com a reutilização de materiais que seriam descartados;" />
          <BenefitCard title="Desenvolvimento das habilidades manuais;" />
        </div>
      </div>
      <div className="absolute left-2/3 top-2/3 transform -translate-x-2/3 -translate-y-2/3">
        <img src="bumerangue.svg" alt="Desenho de um bumerangue" />
      </div>
    </section>
  );
}
