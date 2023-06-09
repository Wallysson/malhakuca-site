"use client";

import { useState } from "react";
import { Button } from "./Buttom";
import { DonateCard } from "./DonateCard";
import { Text } from "./Text";
import DonateModal from "./DonateModal";

export function Donate() {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState<number>(0);
  const [codePix, setCodepix] = useState<string>("");
  const [qrPix, setQrPix] = useState<string>("");

  const handleOpenModal = async (
    value: number,
    codePix: string,
    qrPix: string
  ) => {
    setValue(value);
    setCodepix(codePix);
    setShowModal(true);
    setQrPix(qrPix);
  };

  return (
    <section
      className="py-16 flex flex-col justify-center mx-auto w-full px-4 container lg:flex-row lg:items-center lg:gap-32"
      id="donate"
    >
      <div className="flex flex-col gap-8 w-full order-2 mt-9 lg:order-1 lg:w-1/3">
        <Button
          size="large"
          className="h-16"
          variant="default"
          onClick={() =>
            handleOpenModal(
              20,
              "00020101021126660014br.gov.bcb.pix0114+55129962286460226Obrigado por ajudar o INAM520400005303986540520.005802BR5916JOSE C G PEREIRA6007JACAREI62070503***630478A9",
              "QR-20.svg"
            )
          }
        >
          <Text size="h6-bold" variant="neutral">
            Doar R$ 20,00
          </Text>
        </Button>
        <Button
          size="large"
          className="h-16"
          variant="default"
          onClick={() =>
            handleOpenModal(
              50,
              "00020101021126660014br.gov.bcb.pix0114+55129962286460226Obrigado por ajudar o INAM520400005303986540550.005802BR5916JOSE C G PEREIRA6007JACAREI62070503***63049771",
              "QR-50.svg"
            )
          }
        >
          <Text size="h6-bold" variant="neutral">
            Doar R$ 50,00
          </Text>
        </Button>
        <Button
          size="large"
          className="h-16"
          variant="default"
          onClick={() =>
            handleOpenModal(
              100,
              "00020101021126710014br.gov.bcb.pix0114+55129962286460231Obrigado por contribuir ao INAM5204000053039865406100.005802BR5916JOSE C G PEREIRA6007JACAREI62070503***6304796E",
              "QR-100.svg"
            )
          }
        >
          <Text size="h6-bold" variant="neutral">
            Doar R$ 100,00
          </Text>
        </Button>
        <Button
          size="large"
          className="h-16"
          variant="default"
          onClick={() =>
            handleOpenModal(
              0,
              "00020101021126660014br.gov.bcb.pix0114+55129962286460226Obrigado por ajudar o INAM5204000053039865802BR5916JOSE C G PEREIRA6007JACAREI62070503***6304429F",
              "QR-QQR.svg"
            )
          }
        >
          <Text size="h6-bold" variant="neutral">
            Doar qualquer valor
          </Text>
        </Button>
      </div>
      <div className="flex flex-col  lg:w-1/3 order-1 lg:order-2">
        <div className="flex flex-col  justify-center gap-7">
          <Text size="subTitle">Faça parte desse projeto</Text>
          <Text size="paragraph">
            Doar é um ato benéfico tanto para quem doa, quanto para quem recebe.
            Ajude a construir um futuro melhor doando para este projeto.
          </Text>
        </div>
        <div className="flex flex-col  justify-start gap-8 mt-12">
          <Text size="h5-bold">Benefícios para a sua empresa</Text>

          <DonateCard description="Obter a admiração e confiança da comunidade, e por consequência, dos seus clientes;" />
          <DonateCard description="Publicidade e marketing para a sua empresa;" />
          <DonateCard description="Dedução de impostos" />
        </div>
      </div>

      {showModal && (
        <DonateModal
          showModal={showModal}
          setShowModal={setShowModal}
          value={value}
          codePix={codePix}
          qrPix={qrPix}
        />
      )}
    </section>
  );
}
