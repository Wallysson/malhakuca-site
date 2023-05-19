import Link from "next/link";
import { Button } from "./Buttom";
import { Card } from "./Card";
import { Text } from "./Text";

export function Goals() {
  return (
    <section className="bg-primary-600 ">
      <div className="flex flex-col items-center justify-center w-full py-16 my-16 px-4 container mx-auto ">
        <div className="flex flex-col items-center justify-center gap-12 text-center lg:max-w-4xl lg:order-1">
          <Text size="subTitle" variant="neutral">
            Nossa meta
          </Text>
          <Text size="paragraph" variant="neutral">
            Oferecer espaços culturais, de esporte e lazer para crainças e
            adolescentes, buscando minimizar as carências da periferia e
            contribuir para o desenvolvimento pleno e harmônico de suas
            potencialidades e aptidões
          </Text>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:max-w-6xl lg:order-3">
          <Card
            title="Xadrez"
            descriptionOne="Coordenação do raciocínio heurístico com holístico."
            descriptionTwo="Aprimoramento da memória e concentração."
          />
          <Card
            title="Bumerangue de cartonado"
            descriptionOne="Planificação e moldagem de peças."
            descriptionTwo="Percepção estética,  bumeranguedesign."
          />
          <Card
            title="Atividades culturais"
            descriptionOne="Aprimoramento do da capacidade comunicativa e de socialização."
            descriptionTwo="Fortalecimento das relações interpessoais."
          />
        </div>
        <div className="mt-6 lg:order-2">
          <Link href="#contato">
            <Button
              variant="active"
              size="small"
              className="md:px-[3.5rem] md:text-h4-bold md:py-2"
            >
              seja voluntário
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
