"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ToastProvider";
import { useFormState, useFormStatus } from "react-dom";
import loginAction from "@/app/(auth)/login/loginAction";
import { Loader2 } from "lucide-react"; 

type State = {
  success: boolean;
  message?: string;
};

type FormErrors = {
  email: string;
  password: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="inline-flex items-center gap-2 justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#0000FF] text-white hover:bg-[#0000FF]/80 h-10 px-4 py-2 w-full"
      type="submit"
      disabled={pending}
    >
      {pending && <Loader2 className="animate-spin h-5 w-5 mr-2" />}{" "}
      {/* Show spinner icon when pending */}
      {pending ? "Entrando..." : "Iniciar sessão"}
    </button>
  );
}

const LoginForm = () => {
  const router = useRouter();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });

  const [state, formAction] = useFormState<State, FormData>(loginAction, {
    success: false,
  });

  React.useEffect(() => {
    if (state?.success) {
      router.push("/dashboard");
    } else if (state?.message) {
      showToast("Falha no login. Verifique os dados e tente novamente.");
    }
  }, [state, router, showToast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const newErrors = {
      email: !formData.email ? "Informe o seu email." : "",
      password: !formData.password ? "Informe sua senha." : "",
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) {
      e.preventDefault();
    }
  };

  return (
    <form action={formAction} onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            errors.email ? "text-red-500" : ""
          }`}
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`flex h-10 w-full rounded-md border ${
            errors.email ? "border-red-500" : "border-input"
          } bg-background px-3 py-2 text-sm ring-offset-background border-black/50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          id="email"
          name="email"
          type="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-sm font-medium text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            errors.password ? "text-red-500" : ""
          }`}
          htmlFor="password"
        >
          Senha
        </label>
        <input
          className={`flex h-10 w-full rounded-md border ${
            errors.password ? "border-red-500" : "border-input"
          } bg-background px-3 py-2 border-black/50 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
          id="password"
          name="password"
          type="password"
          placeholder="Sua senha"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-sm font-medium text-red-500">{errors.password}</p>
        )}
      </div>

      <div className="flex justify-end">
        <a
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2"
          href="/auth/password_reset"
        >
          Esqueceu a senha?
        </a>
      </div>

      <SubmitButton />
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

      <div className="items-center">
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

        <div className="flex justify-center mt-4">
          <a
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-black underline-offset-4 hover:underline h-10 px-4 py-2"
            href="/registrar"
          >
            Registrar
          </a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
