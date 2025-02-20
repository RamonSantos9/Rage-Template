"use server";

import { z } from "zod";
import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

const RegisterSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Email inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  discord: z.string().optional(),
  phone: z.string().optional(),
  document: z.string().optional(),
});

type FormState = {
  message: string | null;
  errors: {
    name?: string[];
    email?: string[];
    password?: string[];
    discord?: string[];
    phone?: string[];
    document?: string[];
  };
};

export async function registerAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = RegisterSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    discord: formData.get("discord"),
    phone: formData.get("phone"),
    document: formData.get("document"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Campos inválidos. Corrija os erros acima.",
    };
  }

  const data = validatedFields.data;

  try {
    const user = await db.user.findUnique({
      where: { email: data.email },
    });

    if (user) {
      return {
        message: null,
        errors: { email: ["O e-mail informado já está em uso."] },
      };
    }

    await db.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashSync(data.password),
      },
    });

    return {
      message: "Conta criada com sucesso!",
      errors: {},
    };
  } catch (error) {
    return {
      message: "Erro inesperado. Por favor, tente novamente.",
      errors: {},
    };
  }
}
