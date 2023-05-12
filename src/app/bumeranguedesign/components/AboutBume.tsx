import { Text } from "@/app/components/Text";

export function AboutBume() {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full md:px-4 lg:flex-row lg:gap-20 md:container md:mx-auto py-6 md:py-32" id="about-bumerangue">
      <div className="flex lg:order-2 ">
        <img
          src="about-4.png"
          alt="feature image 2"
          className="w-full object-fit lg:max-w-xs md:hidden"
        />
        <img
          src="about-5.png"
          alt="feature image 2"
          className="w-full object-fit lg:max-w-xs hidden md:block "
        />
      </div>

      <div className="flex flex-col justify-center items-center max-w-lg lg:items-start gap-8 mt-14 lg:mt-0 text-center lg:text-left w-full lg:w-auto container px-4 md:px-0">
        <Text size="subTitle" variant="default">
          Sobre a proposta
        </Text>
        <Text size="paragraph" variant="default">
          É um trabalho inovador em pesquisa, ensino e criação de milhares de
          designs de bumerangues de papel cartão provenientes da reutilização de
          embalagens cartonadas de produtos como caixas de leite longa vida,
          caixas de cereal, engradados cartonados de cerveja de lata, caixas de
          panetone, etc...
        </Text>
      </div>
    </section>
  );
}
