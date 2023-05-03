import { ChallengeCard } from "./ChallengeCard";
import { Form } from "./Form";
import { Text } from "./Text";

export function Challenges() {
  return (
    <section className="pb-16 flex flex-col items-center justify-center mx-auto w-full px-4 container lg:flex-row lg:gap-1">
      <div className="flex flex-col items-center justify-center lg:w-1/3 ">
        <div className="flex flex-col items-center justify-start gap-16 mt-12 ">
          <Text
            size="subTitle"
            children={"Nossos principais desafios"}
            variant="default"
          />
          <ChallengeCard
            title="Suporte especializado"
            description="Equipe multidisciplinar com foco nas demandas intelectuais e sociais dos aprendizes."
          />
          <ChallengeCard
            title="Sede"
            description="Ambiente onde serão realizadas as oficinas e aulas, de forma a atender os integrantes da OSC, com  espaço adequado às atividades."
          />
          <ChallengeCard
            title="Suprimentos"
            description="Equipamentos e materiais para a realização das atividades."
          />
        </div>
      </div>
      <div className="w-full lg:w-1/3 ">
        <Form />
      </div>
    </section>
  );
}
