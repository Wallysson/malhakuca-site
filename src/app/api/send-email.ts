import type { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório."),
  message: z.string().nonempty("A mensagem é obrigatória."),
});

type ContactFormData = z.infer<typeof schema>;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { name, message } = req.body as ContactFormData;

  console.log(name, message);

  try {
    schema.parse({ name, message });
  } catch (error) {
    return res.status(400).json({ error: (error as Error).message });
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
    return res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Ocorreu um erro ao enviar o e-mail" });
  }
};
