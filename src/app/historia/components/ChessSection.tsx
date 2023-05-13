import { AchievementsCard } from "@/app/components/AchievementsCard";
import { Button } from "@/app/components/Buttom";
import { DonateCard } from "@/app/components/DonateCard";
import { Text } from "@/app/components/Text";
import Link from "next/link";

export default function ChessSection() {
  return (
    <section>
      <div className="flex flex-col lg:items-center justify-center lg:flex-row ">
        <div className="bg-primary-600 lg:flex-grow lg:py-[60px] lg:px-[70px] lg:rounded-tr-[72px] lg:rounded-bl-[72px]">
          <div className="flex flex-col items-center justify-center w-full py-16  px-4 container mx-auto">
            <div className="flex flex-col items-center justify-center gap-10 lg:max-w-2xl ">
              <Text size="subTitleCenter" variant="neutral">
                O xadrez e o projeto
              </Text>

              <Text size="paragraph" variant="neutral">
                O Xadrez é um ótimo instrumento de educação. As principais
                influências, que defendem essa abordagem, são o professor
                Antônio Villar Marques de Sá, que defendeu a tese “O Xadrez e a
                educação”, em seu doutoramento na Universidade de París, na
                França, e o grande mestre internacional Henrique Mecking o
                “Mequinho”, conhecido nacional e internacionalmente, já que
                chegou a ser o terceiro colocado no ranking mundial.
              </Text>

              <Text size="paragraph" variant="neutral">
                O primeiro clube de xadrez do INAM nasceu em 1995 no alpendre da
                casa de José Carlos, o fundador. Essa ideia se espalhou pela
                cidade, tomando vários espaços públicos.
              </Text>

              <Link href="#contato">
                <Button
                  variant="active"
                  size="small"
                  className="md:px-[3.5rem] md:text-h4-bold md:py-2"
                >
                  seja voluntário
                </Button>
              </Link>

              <Text size="subTitleCenter" variant="neutral">
                Prêmios e conquistas
              </Text>

              <AchievementsCard title="Campeões brasileiros escolares em Batatis - SP, 1999;" />
              <AchievementsCard title="APAENJ, Associação de Pais e Amigos do Enxadrismo de Jales – SP;" />
              <AchievementsCard title="Projeto Kucalegal – 2001;" />
              <AchievementsCard title={"Projeto Xadrez escolar – 2005."} />
            </div>
          </div>
        </div>
        <div className="lg:bg-neutral-50 lg:p-16 lg:-ml-16 lg:py-[40px] lg:px-[72px] lg:rounded-3xl lg:border-b-8 lg:border-t-8 lg:border-l-8 lg:border-primary-600">
          <div className="flex flex-col items-center justify-center w-full py-16  px-4 container mx-auto lg:flex-row ">
            <div className="flex flex-col items-center justify-center gap-10 lg:max-w-2xl ">
              <Text size="subTitleCenter" variant="default">
                Benefícios de xadrez como instrumento de educação
              </Text>

              <DonateCard description="Campeões brasileiros escolares em Batatis - SP, 1999;" />
              <DonateCard description="APAENJ, Associação de Pais e Amigos do Enxadrismo de Jales – SP;" />
              <DonateCard description="Projeto Kucalegal – 2001;" />
              <DonateCard description={"Projeto Xadrez escolar – 2005."} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
