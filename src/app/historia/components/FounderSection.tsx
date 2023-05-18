import { Text } from "@/app/components/Text";

export default function FounderSection() {
  return (
    <section className="bg-primary-600">
      <div className="flex flex-col  items-center justify-center w-full h-full md:px-4 lg:flex-row lg:gap-20 md:container md:mx-auto pt-32 ">
        <div className="flex lg:order-2 ">
          <img
            src="founder-1.png"
            alt="José Carlos ensinando a fazer bumerangue no INAM."
            className="w-full object-fit lg:max-w-xs md:hidden"
          />
          <img
            src="founder-1Tablet.png"
            alt="José Carlos ensinando a fazer bumerangue no INAM."
            className="w-full object-fit lg:max-w-xs hidden md:block "
          />
        </div>

        <div className="flex flex-col justify-center items-center max-w-lg lg:items-start gap-8 mt-14 lg:mt-0 text-center lg:text-left w-full lg:w-auto container px-4 md:px-0">
          <Text size="subTitle" variant="neutral">
            Um pouco da história do fundador
          </Text>
          <Text size="paragraph" variant="neutral">
            José Carlos, mais conhecido como Zé da tocha, iniciou sua trajetória
            como enxadrista em 1979 aprendendo com jogadores mais experientes.
          </Text>
          <Text size="paragraph" variant="neutral">
            Entre 1981 a 1991 venceu alguns campeonatos e deu início à carreira
            de professor de xadrez no Jales Clube. Além disso capacitou-se pela
            CBX e FIDE como instrutor e técnico em regras e arbitragem.
          </Text>
        </div>
      </div>
      <div className="flex flex-col  items-center justify-center w-full h-full md:px-4 lg:flex-row lg:gap-20 md:container md:mx-auto py-16 ">
        <div className="flex lg:order-2 ">
          <img
            src="founder-2.png"
            alt="José Carlos ensinando a fazer bumerangue no INAM."
            className="w-full object-fit lg:max-w-xs md:hidden"
          />
          <img
            src="founder-2Tablet.png"
            alt="José Carlos ensinando a fazer bumerangue no INAM."
            className="w-full object-fit lg:max-w-xs hidden md:block "
          />
        </div>

        <div className="flex flex-col justify-center items-center max-w-lg lg:items-start gap-8 mt-14 lg:mt-0 text-center lg:text-left w-full lg:w-auto container px-4 md:px-0">
          <Text size="subTitle" variant="neutral">
            José e as olimpíadas
          </Text>
          <Text size="paragraph" variant="neutral">
            Conduziu a tocha olímpica na passagem da chama por Jacareí SP, na
            ocasião dos jogos olímpicos de 2016, aqui no Brasil.
          </Text>
        </div>
      </div>
    </section>
  );
}
