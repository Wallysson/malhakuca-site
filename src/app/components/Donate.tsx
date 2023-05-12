import { Button } from "./Buttom";
import { DonateCard } from "./DonateCard";
import { Text } from "./Text";

export function Donate() {
  return (
    <section className="py-16 flex flex-col  justify-center mx-auto w-full px-4 container lg:flex-row lg:items-center lg:gap-32" id="donate">
      <div className="flex flex-col gap-8 w-full order-2 mt-9 lg:order-1 lg:w-1/3">
        <Button size="large" className="h-16" variant="default">
          <Text size="h6-bold" variant="neutral">
            Doar R$ 20,00
          </Text>
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text size="h6-bold" variant="neutral">
            Doar R$ 50,00
          </Text>
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text size="h6-bold" variant="neutral">
            Doar R$ 100,00
          </Text>
        </Button>
        <Button size="large" className="h-16" variant="default">
          <Text size="h6-bold" variant="neutral">
            Doar qualquer valor
          </Text>
        </Button>
      </div>
      <div className="flex flex-col  lg:w-1/3 order-1 lg:order-2">
        <div className="flex flex-col  justify-center gap-7">
          <Text size="subTitle">Faça parte desse projeto</Text>
          <Text size="paragraph">
            Doar é um ato benéfico tanto para quem doa, quanto para quem recebe.
            Ajude a construir um futuro melhor doando para este projeto.
          </Text>
        </div>
        <div className="flex flex-col  justify-start gap-8 mt-12">
          <Text size="h5-bold">Benfícios para a sua empresa</Text>

          <DonateCard description="Obter a admiração e confiança da comunidade, e por consequência, dos seus clientes;" />
          <DonateCard description="Publicidade e marketing para a sua empresa;" />
          <DonateCard description="Dedução de impostos" />
        </div>
      </div>
    </section>
  );
}
