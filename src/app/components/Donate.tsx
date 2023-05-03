import { Button } from "./Buttom";
import { DonateCard } from "./DonateCard";
import { Text } from "./Text";

export function Donate() {
  return (
    <section className="py-16 flex flex-col  justify-center mx-auto w-full px-4 container lg:flex-row lg:items-center lg:gap-32">
      <div className="flex flex-col gap-8 w-full order-2 mt-9 lg:order-1 lg:w-1/3">
        <Button size="large" className="h-16" variant="default">
          <Text children="Doar R$ 20,00" size="h6-bold" variant="neutral" />
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text children="Doar R$ 50,00" size="h6-bold" variant="neutral" />
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text children="Doar R$ 100,00" size="h6-bold" variant="neutral" />
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text
            children="Doar qualquer valor"
            size="h6-bold"
            variant="neutral"
          />
        </Button>
      </div>
      <div className="flex flex-col   lg:w-1/3 order-1 lg:order-2">
        <div className="flex flex-col  justify-center gap-7">
          <Text size="subTitle" children={"Faça parte desse projeto"} />
          <Text
            size="paragraph"
            children={
              "Doar é um ato benéfico tanto para quem doa, quanto para quem recebe.  Ajude a construir um futuro melhor doando para este projeto.   "
            }
          />
        </div>
        <div className="flex flex-col  justify-start gap-8 mt-12">
          <Text children="Benfícios para a sua empresa" size="h5-bold" />

          <DonateCard description="Obter a admiração e confiança da comunidade, e por consequência, dos seus clientes;" />
          <DonateCard description="Publicidade e marketing para a sua empresa;" />
          <DonateCard description="Dedução de impostos" />
        </div>
      </div>
    </section>
  );
}
