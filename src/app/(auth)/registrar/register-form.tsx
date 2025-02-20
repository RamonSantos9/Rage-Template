"use client";

import React, { useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { registerAction } from "@/app/actions/register";

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

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0000FF] text-primary-foreground hover:bg-[#0000FF]/70 h-10 px-4 py-2 w-full"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? "Criando conta..." : "Criar conta"}
    </button>
  );
};

const initialState: FormState = {
  message: null,
  errors: {},
};

const RegisterForm = () => {
  const [state, formAction] = React.useActionState<FormState, FormData>(
    registerAction,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);

  const isSuccess = state?.message === "Conta criada com sucesso!";
  const messageClass = isSuccess ? "text-green-500" : "text-red-500";

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Criar conta</h1>
        <p className="text-sm text-black/70">Insira seus dados para começar</p>
      </div>

      <form ref={formRef} action={formAction} className="space-y-4">
        <div className="space-y-2">
          <label
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              state?.errors?.name ? "text-red-500" : ""
            }`}
            htmlFor="name"
          >
            Nome completo
          </label>
          <input
            className={`flex h-10 w-full rounded-md border ${
              state?.errors?.name ? "border-red-500" : "border-input"
            } bg-background px-3 py-2 text-sm ring-offset-background border-black/50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foregound focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome completo"
          />
          {state?.errors?.name && (
            <p className="text-sm font-medium text-red-500">
              {state.errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              state?.errors?.email ? "text-red-500" : ""
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`flex h-10 w-full rounded-md border ${
              state?.errors?.email ? "border-red-500" : "border-input"
            } bg-background px-3 py-2 text-sm ring-offset-background file:border-0  border-black/50 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
            id="email"
            name="email"
            type="email"
            placeholder="Seu email"
          />
          {state?.errors?.email && (
            <p className="text-sm font-medium text-red-500">
              {state.errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
              state?.errors?.password ? "text-red-500" : ""
            }`}
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className={`flex h-10 w-full rounded-md border ${
              state?.errors?.password ? "border-red-500" : "border-input"
            } bg-background px-3 py-2 text-sm ring-offset-background border-black/50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
            id="password"
            name="password"
            type="password"
            placeholder="Sua senha"
          />
          {state?.errors?.password && (
            <p className="text-sm font-medium text-red-500">
              {state.errors.password}
            </p>
          )}
        </div>

        <div className="flex gap-4">
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="discord"
            >
              Discord (opcional)
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-black/50 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="discord"
              name="discord"
              type="text"
              placeholder="Seu Discord"
            />
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="phone"
            >
              Telefone (opcional)
            </label>
            <div className="flex gap-2">
              <button
                className="inline-flex items-center justify-center border-black/50 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg"
                type="button"
              >
                🇧🇷
              </button>
              <input
                className="flex h-10 w-full rounded-md border border-input border-black/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Seu telefone"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="document"
          >
            CPF (opcional)
          </label>
          <input
            className="flex h-10 w-full rounded-md border border-black/50 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="document"
            name="document"
            type="text"
            placeholder="Seu CPF"
          />
        </div>

        <SubmitButton />
      </form>

      {state?.message && (
        <p className={`text-sm text-center ${messageClass}`}>{state.message}</p>
      )}

      <p className="px-8 text-center text-sm text-black">
        Ao clicar em continuar, você confirma que aceita os nossos{" "}
        <a
          target="_blank"
          className="underline underline-offset-4 hover:text-[#0000FF]"
          href=""
        >
          Termos de Serviço
        </a>
        .
      </p>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t"></span>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Já tem uma conta?
          </span>
        </div>
      </div>

      <a
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black underline-offset-4 hover:underline h-10 px-4 py-2"
        href="/login"
      >
        Fazer Login
      </a>
    </div>
  );
};

export default RegisterForm;
