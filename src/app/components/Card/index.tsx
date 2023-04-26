import { Text } from "../Text";

type CardProps = {
  title: string;
  descriptionOne: string;
  descriptionTwo?: string;
};

export function Card({ title, descriptionOne, descriptionTwo }: CardProps) {
  return (
    <div className="flex flex-col justify-center gap-4 bg-neutral-100 w-full mt-12 py-6 px-3 min-h-[16rem] lg:min-h-[20rem] rounded-t-none rounded-r-2xl border-b-[1rem] border-primary-700 shadow-2xl">
      <Text size="h4-normal" children={title} />
      <li>
        <Text size="paragraph" children={descriptionOne} />
      </li>
      <li>
        <Text size="paragraph" children={descriptionTwo} />
      </li>
    </div>
  );
}

{
}
