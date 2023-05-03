import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";

export function Crowdfunding() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center w-full py-32 px-4 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 lg:max-w-2xl text-center ">
          <Text size="subTitle" children={"Livro e crowdfunding"} />
          <Text
            size="paragraph"
            children={
              "Estamos levantando fundos para o lançamento do primeiro livro sobre bumerangudesign sustentável do país, com coautoria internacional entre Brasil, Alemanha e França."
            }
          />
          <Button
            children={"ajude"}
            variant="default"
            className="md:px-[3.5rem] md:text-h4-bold md:py-2"
          />
        </div>
      </div>
    </section>
  );
}
