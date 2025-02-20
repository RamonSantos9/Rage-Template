"use client";

import React from "react";
import { Badge } from "@/components/Badge";
import { SparklesText } from "@/components/magicui/sparkles-text";

export const Acesso = () => {
  return (
    <section id="acesso" className="relative">
      <div className="relative container mx-auto px-4 py-16 max-w-7xl">
        <div className="text-center space-y-4 pb-6 mx-auto">
          <Badge text="ACESSO TOTAL" />
          <div className="max-w-[1000px] mx-auto text-center mb-10 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mx-auto">
              <strong>Obtenha Tudo da Rage</strong>
              <span className="tracking-tight text-[#0000FF] font-bold">
                <SparklesText text="Recursos Exclusivos com o Plano de Acesso Total" />
              </span>
            </h1>
            <p className="text-[16px] text-black/70 max-w-[600px] mx-auto mt-6">
              Economize milhares de reais e tenha acesso completo a todos os
              recursos exclusivos da Rage com um plano anual super acessível.
              Cancele quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 mb-6">
            {/* Primeiro item grande */}
            <div className="bg-gray-900 p-6 rounded-xl space-y-32 relative">
              <div className="relative pb-[240px]">
                <img
                  className="w-[120px] object-cover rounded-lg"
                  src="https://framerusercontent.com/images/rYii68QFEjXessdASuEuYfSiIdc.png"
                  alt="Cloud Image"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-2">
                <h3 className="text-lg font-semibold">
                  Ganhe Tempo em Cada Projeto
                </h3>
                <p className="text-sm">
                  Componentes e templates pré-definidos eliminam tarefas
                  repetitivas, permitindo que você se concentre no que realmente
                  importa: sua criatividade.
                </p>
              </div>
            </div>

            {/* Segundo item grande */}
            <div className="bg-gray-900 p-6 pb-10 rounded-xl relative">
              <div className="relative pb-[240px] ">
                <img
                  className="w-[120px] object-cover rounded-lg"
                  src="https://framerusercontent.com/images/CIeZjEw92Avpl5JDE48oYk12VI.png"
                  alt="Star Image"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-left text-white space-y-2">
                <h3 className="text-lg font-semibold">
                  Acesso a Todos os Templates da Rage
                </h3>
                <p className="text-sm">
                  O Plano de Acesso Total oferece acesso GRATUITO a todos os
                  Templates da Rage. Basta remixar, personalizar e lançar seu
                  projeto.
                </p>
              </div>
            </div>
          </div>
          {/* Grid Pequeno */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
            {/* Grid 1 */}
            <div className="relative h-[401px] bg-gray-900 p-6 rounded-xl flex items-center justify-center overflow-hidden">
              {/* Imagem de fundo */}
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                src="https://framerusercontent.com/images/ZP4yZ3Wp7aoEcZtG2zgjG0Xm9Q.png"
                alt="Background Icon"
              />
              <div className="flex flex-col items-center justify-center">
                {/* Conteúdo */}
                <div className="relative bg-white p-4 rounded-xl shadow-lg w-[199px] h-[130px] overflow-hidden flex flex-col justify-between">
                  {/* Texto de avaliação */}
                  <p className="text-[8px] text-gray-900">
                    &quot;Observamos resultados consistentes desde o início, e
                    foi um alívio finalmente contar com um suporte
                    confiável.&quot;
                  </p>
                  {/* Usuário */}
                  <div className="flex items-center space-x-2">
                    <img
                      className="w-8 h-8 rounded-full object-cover"
                      src="https://framerusercontent.com/images/zEiuNi2YOenMw00RjsXadQPBAA.png"
                      alt="User Image"
                    />
                    <div className="text-left">
                      <p className="text-gray-900 font-semibold text-sm">
                        Sarah T.
                      </p>
                      <p className="text-[8px] text-gray-600">Parle Coffe</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Texto fixo na parte inferior */}
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-2">
                <h4 className="text-md font-semibold text-white">
                  Acesso ao Rage UI
                </h4>
                <p className="text-sm text-white">
                  Tenha acesso completo à coleção de seções e componentes do
                  Rage UI.
                </p>
              </div>
            </div>

            {/* Grid 2 */}
            <div
              className="relative h-[401px] bg-gray-900 p-6 rounded-xl flex items-center justify-center overflow-hidden"
              style={{
                background:
                  "radial-gradient(80% 80% at 50% 41.7%, #bbc1fa 5.7%, rgb(150, 159, 255) 24.7%, rgb(114, 124, 247) 36.5%, rgb(25, 34, 138) 82.9%)",
              }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://framerusercontent.com/images/ZVZ6PNHBM2QvNr3cJnkBwNZwl8.png?scale-down-to=512"
                alt="Background Icon"
              />
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-2">
                <h4 className="text-md font-semibold text-white">
                  Mantenha-se Atualizado com Novas Atualizações
                </h4>
                <p className="text-sm text-white">
                  Novos templates e componentes são adicionados regularmente
                  para manter seu toolkit sempre renovado.
                </p>
              </div>
            </div>

            {/* Grid 3 */}
            <div className="relative h-[401px] bg-gray-900 p-6 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://framerusercontent.com/images/eX1RgRdmeCpvZrIUJTq6Q9CYisU.png"
                alt="Background Icon"
              />
              <div className="absolute bottom-4 left-4 right-4 text-left space-y-2">
                <h4 className="text-md font-semibold text-white">
                  Design Responsivo
                </h4>
                <p className="text-sm text-white">
                  Cada elemento é projetado para ter uma aparência impecável em
                  todos os dispositivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
