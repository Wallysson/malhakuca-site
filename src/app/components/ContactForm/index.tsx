"use client";

import { useState } from "react";
import { Button } from "../Buttom";
import { Text } from "../Text";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório."),
  message: z.string().nonempty("A mensagem é obrigatória."),
});

type ContactFormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data)
    setSubmitting(true);
    try {
      await axios.post("api", data);
      reset();
      toast.success("Mensagem enviada com sucesso!", {
        icon: "📨",
        position: "top-right",
        theme: "light",
        autoClose: 2000,
        progressStyle: {
          background: "#FE3B00",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro ao enviar a mensagem.", {
        position: "top-right",
        theme: "light",
        autoClose: 2000,
        progressStyle: {
          background: "#FE3B00",
        },
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col flex-1 mt-20 w-full justify-center text-center gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Text size="titleContact" variant="default">
        Entre em contato
      </Text>
      <input
        type="text"
        placeholder="nome / empresa"
        className="bg-neutral-50 border border-primary-800 py-4 px-6 placeholder-neutral-600"
        {...register("name")}
      />
      {errors.name?.message && (
        <span style={{ color: "red" }}>{errors.name.message}</span>
      )}

      <textarea
        placeholder="mensagem"
        className="bg-neutral-50 min-h-[206px] border border-primary-800 py-4 px-6 placeholder-neutral-600"
        {...register("message")}
      />
      {errors.message?.message && (
        <span style={{ color: "red" }}>{errors.message.message}</span>
      )}

      <Button size="large" className="h-12" type="submit" disabled={submitting}>
        enviar
      </Button>
    </form>
  );
}
