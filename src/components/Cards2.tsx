import React from "react";
import Image from "next/image";
import { PointerWrapper } from "@/components/magicui/pointer";

interface CardProps {
  href: string;
  imageSrc: string;
  logoSrc: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ href, imageSrc, logoSrc, title }) => {
  return (
    // Envolvendo o card com o PointerWrapper para ativar o ponteiro customizado
    <PointerWrapper className="flex-1">
      <a href={href} className="group">
        <div
          className="relative border-zinc-400/90 border-[2px] rounded-[25px] overflow-hidden shadow-none
                     w-[360px] h-[500px] flex flex-col transition-all duration-300 ease-in-out hover:border-black/50"
        >
          {/* Área da imagem que ocupa a maior parte do card */}
          <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              layout="fill"
              objectFit="cover"
              priority
              className="transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            {/* Gradiente para suavizar a transição para a área de informações */}
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-gray-900" />
          </div>
          {/* Área de informações (fixa na parte inferior do card) */}
          <div className="h-[10%] bg-gray-900 flex flex-col items-center justify-center p-4">
            <h2 className="text-white text-xl font-bold text-center">
              {title}
            </h2>
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
      <div className="flex flex-col md:flex-row gap-1 justify-center items-center">
        <Card
          href="./templates"
          imageSrc="https://framerusercontent.com/images/zFXwCoIOx1NZJ1FmgMvyqUdVuk.jpg?scale-down-to=1024"
          logoSrc="/assets/ramon-logo.svg"
          title="Para Negócios Digitais"
        />
        <Card
          href="./templates"
          imageSrc="https://framerusercontent.com/images/0S9w4hCQlwbs5oZqv8cwZDJaUo.jpg?scale-down-to=1024"
          logoSrc="/assets/ramon-logo.svg"
          title="Template para Agência de Email Marketing"
        />
        <Card
          href="./pricing"
          imageSrc="https://framerusercontent.com/images/p2qra1AOQlGgZ5FwHfq0ypRT7g.jpg"
          logoSrc="/assets/ramon-logo.svg"
          title="Template para SaaS"
        />
      </div>
    </div>
  );
};

export default FramerCards;
