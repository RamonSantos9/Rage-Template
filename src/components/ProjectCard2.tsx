"use client";

import React from "react";
import Image from "next/image";
import Heart from "@/assets/heart.png";
import { Star } from "lucide-react";

const ProjectCard2: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center bg-gray-900/80 rounded-[13px] px-4 py-4 gap-2">
        {/* Coluna da esquerda: Imagem do Heart */}
        <div className="flex items-center justify-center">
          <Image
            src={Heart}
            alt="Heart"
            width={48}
            height={41}
            className="object-contain"
          />
        </div>
        {/* Coluna da direita: Estrelas na parte superior e texto na parte inferior */}
        <div className="flex flex-col items-start justify-between h-full flex-1 ml-2 gap-2">
          {/* Estrelas no topo */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={14}
                className="text-[#30006B] fill-current"
                fill="currentColor"
              />
            ))}
          </div>
          {/* Texto na parte inferior */}
          <p className="text-xs text-white font-medium">Rated 5/5 on Senja</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard2;
