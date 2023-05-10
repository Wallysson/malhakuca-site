import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";

export function FutureSection() {
  return (
    <section className="flex flex-col items-center">
      <div
        className="flex flex-col items-center justify-evenly w-full space-y-16 py-32 px-4 container mx-auto lg:flex-row"
      >
        <img
          src="horse.png"
          alt="Cavalo do xadrez pintado de laranja"
          className="w-28 h-36 md:w-32 lg:w-48 lg:h-48"
        />
        <div className="flex flex-col items-center justify-center gap-8 lg:max-w-2xl text-center ">
          <Text size="subTitle" children={"O Futuro"} />
          <Text
            size="paragraph"
            children={
              "Esperamos progredir cada vez mais no processo educativo e de construção cultural dentro da comunidade. Para isso, é fundamental que a sociade também faça parte desse processo."
            }
          />
          <Button
            children={"doe"}
            variant="default"
            className="md:px-[3.5rem] md:text-h4-bold md:py-2"
          />
        </div>
        <img
          src="boolmerang.png"
          alt="Bumerangue laranja"
          className="w-28 h-36 md:w-32 lg:w-48 lg:h-56"
        />
      </div>
    </section>
  );
}
