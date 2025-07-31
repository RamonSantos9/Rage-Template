"use client";

import Link from "next/link";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-700">
          Página não encontrada
        </h2>
        <p className="mt-2 text-gray-500">
          A página que você está procurando não existe.
        </p>
        <Link href="/" className="mt-6 inline-block">
          <Button>Voltar para o início</Button>
        </Link>
      </div>
    </div>
  );
}
