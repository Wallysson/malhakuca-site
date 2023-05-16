import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

dotenv.config();

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório."),
  message: z.string().nonempty("A mensagem é obrigatória."),
});

type ContactFormData = z.infer<typeof schema>;

export async function POST (request: Request) {
  const body = await request.json()
  const { name, message } = body as ContactFormData;

  try {
    schema.parse({ name, message });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: "Contato pelo site",
      html: `<p>Nome: ${name}</p> <p>Mensagem: ${message}</p>`,
    });
    return NextResponse.json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    return NextResponse
      .json({ error: "Ocorreu um erro ao enviar o e-mail" });
  }
};