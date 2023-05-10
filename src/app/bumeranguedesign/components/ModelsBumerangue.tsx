import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Image from "next/image";
import { BumerangueList } from "./BumerangueList";

export function ModelsBumerangue() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full py-16 px-4 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 lg:max-w-2xl text-center ">
          <Text size="subTitle" children={"Modelos de bumerang"} />

          <div>
            <BumerangueList />
          </div>
          <Button
            variant="default"
            className="flex items-center justify-center gap-2 md:px-[3.5rem] md:text-h4-bold md:py-2"
          >
            Baixe modelos
            <Image
              src="/baixar.svg"
              width={24}
              height={24}
              alt="Baixar modelos de bumerangue"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
