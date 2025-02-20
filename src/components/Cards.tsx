import React from "react";
import Image from "next/image";
import { PointerWrapper } from "@/components/magicui/pointer";

interface CardProps {
  href: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
  description: string;
  cta: string;
}

const Card: React.FC<CardProps> = ({
  href,
  imageSrc,
  logoSrc,
  title,
  description,
  cta,
}) => {
  return (
    // Envolvendo o card com o PointerWrapper para ativar o ponteiro customizado
    <PointerWrapper className="flex-1">
      <a href={href} className=" group">
        {/* Elemento da sombra, posicionado atrás do card */}
        <div
          className="absolute inset-0 rounded-[25px] -z-10 transition-shadow duration-300 ease-in-out
                     group-hover:shadow-[0px_0px_100px_20px_rgba(0,0,255,0.5)]"
        />
        <div
          className="relative border-zinc-400/90 border-[2px] rounded-[25px] overflow-hidden shadow-none 
                     aspect-[3.5/4] flex flex-col transition-all duration-300 ease-in-out hover:border-black/50"
        >
          {/* Área da imagem (70% do card) */}
          <div className="relative h-[70%] w-full flex items-center justify-center overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Container da logo (centralizado no meio) */}
            <div
              className="z-20 absolute w-28 h-12 bg-gray-900 border border-gray-800 flex items-center justify-center rounded-[12px] p-1 
                         shadow-[rgba(0,0,0,0.455)_0px_0.602187px_0.602187px_-1.25px,rgba(0,0,0,0.4)_0px_2.28853px_2.28853px_-2.5px,rgba(0,0,0,0.157)_0px_10px_10px_-3.75px] 
                         ring-2 ring-gray-700/50"
            >
              <Image
                src={logoSrc}
                alt="Logo"
                width={150}
                height={150}
                objectFit="contain"
              />
            </div>
            {/* Sombra para suavizar a transição para a área de informações */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-gray-900" />
          </div>
          {/* Área de informações (30% do card) */}
          <div className="h-[30%] bg-gray-900 flex flex-col items-center justify-center p-4">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-white text-[18px] font-bold text-center">
                {title}
              </h2>
              {title === "Assinatura Completa da Rage" && (
                <div
                  className="rounded-md"
                  style={{
                    border: "1px solid rgba(255,255,255,0.14)",
                    background:
                      "radial-gradient(100% 258% at 0% 48.9%, rgb(114,124,247) 0%, rgb(114,124,247) 51.3%, rgb(72,87,250) 100%)",
                    borderRadius: "8px",
                    opacity: 1,
                    padding: "4px 8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      lineHeight: "150%",
                      color: "rgb(255,255,255)",
                    }}
                  >
                    Save $1,000+
                  </p>
                </div>
              )}
            </div>
            <p className="text-white/70 mt-[2px] text-center text-[14px]">
              {description}
            </p>
            <div className="mt-[2px]">
              <span className="text-white font-semibold">{cta}</span>
            </div>
          </div>
        </div>
      </a>
    </PointerWrapper>
  );
};

const FramerCards: React.FC = () => {
  return (
    <div className="container mx-auto p-2">
      {/* Cards empilhados em mobile e lado a lado em telas maiores */}
      <div className="flex flex-col md:flex-row gap-1">
        <Card
          href="./templates"
          imageSrc="https://framerusercontent.com/images/ZW4r5AXkZkOxGjLczGlKVZPcL58.jpg"
          logoSrc="/assets/rag.svg"
          title="Templates da Rage"
          description="Mais de 20 templates exclusivos para começar."
          cta="Explorar templates"
        />
        <Card
          href="./templates"
          imageSrc="https://framerusercontent.com/images/rXryn6SNh5G3KC047udSbKu8ajY.jpg?scale-down-to=512"
          logoSrc="/assets/rag.svg"
          title="Kit de Design da Rage"
          description="Seções e componentes pré-fabricados."
          cta="Experimente gratuitamente"
        />
        <Card
          href="./pricing"
          imageSrc="https://framerusercontent.com/images/3yHbVUurYbpavUZnFnuiaVgZCE.jpg?scale-down-to=512"
          logoSrc="/assets/rag.svg"
          title="Assinatura Completa da Rage"
          description="Acesse todos os Rage Templates."
          cta="Ver planos"
        />
      </div>
    </div>
  );
};

export default FramerCards;
