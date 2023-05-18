"use client";

import { Button } from "@/app/components/Buttom";
import { Text } from "@/app/components/Text";
import Image from "next/image";
import { BumerangueList } from "./BumerangueList";

export function ModelsBumerangue() {
  const handleDownload = () => {
    const fileNames = [
      "boomerang_e_a4.pdf",
      "boomerang_i_e_a42.pdf",
      "boomerang_by-MM2 (1).pdf",
    ];

    fileNames.forEach((fileName) => {
      const filePath = `/pdfs/${fileName}`;
      fetch(filePath)
        .then((response) => {
          if (response.ok) {
            return response.blob();
          }
          throw new Error("Download failed");
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement("a");
          downloadLink.href = url;
          downloadLink.download = fileName;
          downloadLink.click();
          URL.revokeObjectURL(url);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <section className="flex flex-col items-center" id="modelos-bumerangue">
      <div className="flex flex-col items-center justify-center w-full py-16 px-4 container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 lg:max-w-2xl text-center ">
          <Text size="subTitle">Modelos de bumerang</Text>

          <div>
            <BumerangueList />
          </div>
          <Button
            variant="default"
            className="flex items-center justify-center gap-2 md:px-[3.5rem] md:text-h4-bold md:py-2"
            onClick={handleDownload}
          >
            baixe modelos
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
