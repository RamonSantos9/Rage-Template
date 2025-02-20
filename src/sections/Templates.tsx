"use client";

import React from "react";
import { Badge } from "@/components/Badge";
import Card2 from "@/components/Cards2";

export const Template = () => {
  return (
    <section id="Template" className="relative">
      <div className="flex w-full flex-col items-center">
        {/* Badge principal */}
        <Badge text="TEMPLATES" />

        {/* Cabeçalho e descrição */}
        <div className="mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mx-auto">
            <strong>Templates Mais Recentes</strong>
          </h1>
          <p className="text-[16px] text-black/70 max-w-[600px] mx-auto mt-6">
            Confira os templates mais recentes da Rage. Adquira-os separadamente
            ou tenha acesso completo com nosso Plano de Acesso Total.
          </p>
        </div>

        {/* Card de destaque */}
        <div className="mx-auto text-center mb-10">
          <div className="relative">
            <Card2 />
          </div>
        </div>

        {/* Botão animado para explorar templates */}
        <div
          className="rounded-md p-2 border border-black/20 transition-all duration-300 hover:border-0 hover:shadow-lg slide-hover"
          style={{
            background:
              "radial-gradient(100% 258% at 0% 48.9%, rgb(114,124,247) 0%, rgb(114,124,247) 51.3%, rgb(72,87,250) 100%)",
          }}
        >
          <div className="relative overflow-hidden">
            <p className="badge-text font-semibold text-[16px] leading-[150%] text-white">
              Explorar Todos os Templates
            </p>
          </div>
          <style jsx>{`
            .slide-hover:hover .badge-text {
              animation: slideOutIn 0.5s ease-in-out forwards;
            }
            @keyframes slideOutIn {
              0% {
                transform: translateY(0);
                opacity: 1;
              }
              45% {
                transform: translateY(-100%);
                opacity: 0;
              }
              55% {
                transform: translateY(100%);
                opacity: 0;
              }
              100% {
                transform: translateY(0);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default Template;
