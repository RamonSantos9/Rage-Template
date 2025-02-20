import React from "react";
import LoginForm from "@/app/(auth)/login/login-form";
import LogoIcon from "@/assets/logo-b.svg";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <div className="container relative grid min-h-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <a
        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8"
        href="/registrar"
      >
        Registrar
      </a>

      <div className="relative hidden h-full flex-col bg-[#11116b] p-24 text-white dark:border-r lg:flex items-center">
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-900 to-gray-950"></div>
        <div className="relative z-20 mt-auto flex items-center text-lg font-medium">
          <a
            title="Logotipo da marca"
            className="relative flex items-center space-x-4"
            href="/"
          >
            <LogoIcon className="h-[80px] w-auto" />
            <span className="font-bold text-6xl text-white">Rage</span>
          </a>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg text-center">
              &quot;Desenvolvemos sites personalizados que refletem a identidade
              do seu negócio, criando experiências digitais que encantam e
              conectam com seus clientes.&quot;
            </p>
          </blockquote>
        </div>
      </div>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Entrar</h1>
            <p className="text-sm text-black/80">
              Informe seus dados de acesso
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
