import Link from "next/link";
import { Button } from "./Buttom";
import { Text } from "./Text";

export function About() {
  return (
    <section className="flex flex-col  items-center justify-center w-full py-32 px-4 lg:flex-row lg:gap-20 container mx-auto">
      <div className="grid grid-cols-2 grid-rows-2 max-w-screen-lg gap-4 max-h-[227px] md:max-h-[280px] lg:max-h-[438px]  lg:max-w-6xl mb-6">
        <div className="col-span-1 row-span-2 bg-red-50 w-full">
          <img
            src="about-1.png"
            alt="José reunido com os participantes do INAM."
            className="w-full h-full object-fit lg:max-w-xs"
          />
        </div>
        <div>
          <img
            src="about-2.png"
            alt="Crianças reunidas no alpendre da casa do Sr. José que reuniam para aprender xadrez."
            className="w-full h-full object-fit lg:max-w-xs"
          />
        </div>
        <div>
          <img
            src="about-3.png"
            alt="Torneio de xadrez feito por José."
            className="w-full h-full object-fit lg:max-w-xs"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:order-1 max-w-lg lg:items-start gap-4 mt-6 lg:mt-0 text-center lg:text-left w-full lg:w-auto">
        <Text size="subTitle" variant="default">
          Sobre o INAM
        </Text>

        <Text size="paragraph" variant="default">
          O Instituto Acadêmico Malhakuca tem como missão educar a comunidade,
          especialmente as crianças, através do fomento ao ensino de xadrez,
          bumerangue de cartonado e atividades culturais.
        </Text>
        <Link href="historia">
          <Button
            variant="default"
            size="small"
            className="md:px-[3.5rem] md:text-h4-bold md:py-2"
          >
            conheça a história
          </Button>
        </Link>
      </div>
    </section>
  );
}
