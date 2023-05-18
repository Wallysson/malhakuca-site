import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Link from "next/link";

export default function BumerangueSection() {
  return (
    <section className="flex flex-col items-center py-16 ">
      <div className="flex flex-col  items-center justify-center w-full h-full md:px-4 lg:flex-row lg:gap-20 md:container md:mx-auto pt-32 ">
        <div className="flex lg:order-1 md:border-b-8 md:border-r-4 md:border-t-2 md:border-l border-secondary-500 md:bg-secondary-500 md:rounded-3xl md:overflow-hidden">
          <img
            src="BumerangueDesign.png"
            alt="Sr. José com os alunos no INAM."
            className="w-full object-fill  "
          />
        </div>

        <div className="flex flex-col justify-center items-center max-w-lg lg:items-start gap-8 mt-14 lg:mt-0 text-center lg:text-left w-full lg:w-auto container px-4 md:px-0 lg:order-2">
          <Text size="subTitle" variant="default">
            O bumeranguedesign
          </Text>
          <Text size="paragraph" variant="default">
            Além do xadrez, o INAM também possui um projeto especial de prática
            esportiva com o bumerangue de papel cartão.
          </Text>
          <Link href="bumeranguedesign#modelos-bumerangue">
            <Button
              variant="default"
              className="md:px-[3.5rem] md:text-h4-bold md:py-2"
            >
              veja os detalhes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
