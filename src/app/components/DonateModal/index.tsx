"use client";

import {
  Dialog,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@radix-ui/react-dialog";
import { Button } from "../Buttom";
import { X } from "react-feather";
import { Text } from "../Text";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type DonateModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  value: number;
};

export default function DonateModal({
  showModal,
  setShowModal,
  value,
}: DonateModalProps) {
  const [isCopping, setIsCopping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal, setShowModal]);

  function handleCopyToClipboardQrCode() {
    setIsCopping(true);
    navigator.clipboard.writeText("Copiei e Colei");
    toast.success("Código copiado para transferência.", {
      icon: "✍️",
      position: "top-right",
      theme: "light",
      autoClose: 2000,
      progressStyle: {
        background: "#FE3B00",
      },
    });
    setIsCopping(false);
  }

  return (
    <Dialog open={showModal}>
      <ToastContainer transition={Flip} />

      <DialogOverlay className="fixed inset-0 bg-black opacity-80 z-10" />
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-100 rounded-md shadow-lg z-20 p-8 ">
        <div className="flex flex-col items-center justify-center gap-4 text-center ">
          <DialogTitle>
            <Text size="h4-bold">
              Transfira{" "}
              {value === 0
                ? ""
                : value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}{" "}
              para Instituto Malhakua
            </Text>
          </DialogTitle>
          <DialogClose
            asChild
            className="absolute top-2 right-2 cursor-pointer"
            onClick={() => setShowModal(false)}
          >
            <X size={32} />
          </DialogClose>
          <div className="flex flex-col items-center gap-4">
            <Text size="h5-bold">Use o QR Code do Pix para pagar</Text>

            <Text size="base">
              Abra o app em que vai fazer a transferência, escaneia a imagem ou
              cole o código de QR Code.
            </Text>
            <img src="/qr-code.svg" alt="QR Code" className="w-48 h-48" />
            <Button
              size="medium"
              onClick={handleCopyToClipboardQrCode}
              disabled={isCopping}
            >
              Copiar código do QR Code
            </Button>
            <div className="flex flex-col gap-2 text-start">
              <div>
                <span className="font-medium">Chave Pix: </span>
                <span>chavepix@exemplo.com.br</span>
              </div>
              <div>
                <span className="font-medium">Nome: </span>
                <span>Instituto Malhakua</span>
              </div>
              <div>
                <span className="font-medium">CPF: </span>
                <span>123.456.789-00</span>
              </div>
              <div>
                <span className="font-medium">Banco: </span>
                <span>Banco do Brasil</span>
              </div>
              <div>
                <span className="font-medium">Identificador: </span>
                <span>1234567890</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
