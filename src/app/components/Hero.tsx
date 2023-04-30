import Image from "next/image";
import { Text } from "./Text";
import { Button } from "./Buttom";

export function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover bg-black, opacity-90"
      style={{
        backgroundImage: `url('/logo-limpo-inam1.png')`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center text-center gap-4 px-4 lg:text-left">
        <div className="flex flex-col w-full lg:flex-row justify-center items-center lg:order-2 lg:w-80" >
          <img
            src="/mk1.png"
            alt="Figura"
            className="max-w-[9rem] max-h-44 md:max-w-[12.5rem] md:max-h-72 lg:max-w-[18.5rem] lg:max-h-[23.5rem] object-cover"
            // sizes="(min-width: 768px) 204px, 270px, (min-width: 1024px) 303px 405px"
            />
        </div>
        <div className="flex flex-col justify-center items-center lg:order-1 lg:max-w-lg lg:items-start gap-4">
          <Text
            size="title"
            children={"Instituto Acadêmico Malhakuca"}
            variant="default"
          />
          <Text
            size="paragraph"
            variant="default"
            children={
              "Há mais de 30 anos trabalhando para o desenvolvimento intelectual e manual da comunidade, especialmente do público infantil."
            }
          />
          <Button variant="default" size="small" children={"descubra"}/>
        </div>
      </div>

      <Image
        src="/figures.svg"
        alt="Figura"
        width={200}
        height={200}
        className="absolute top-0 right-0"
      />
      {/* Faça um triangulo aqui */}
    </section>
  );
}
