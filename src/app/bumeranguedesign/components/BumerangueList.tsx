import { MODEL_BUMERANGUE } from "@/app/helpers/model-bumerangue";

export function BumerangueList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {MODEL_BUMERANGUE.map((model, index) => (
        <div key={index} className="col-span-1">
          <img src={model.src} alt={model.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
