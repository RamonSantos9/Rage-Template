import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Badge } from "@/components/Badge";
import Card from "@/components/Cards";

export const Hero = () => {
  return (
    <section id="hero" className="relative">
      {/* Conteúdo principal do Hero */}
      <div className="flex w-full flex-col items-center">
        {/* Badge */}
        <Badge text="RAGE TEMPLATE" />
        {/* Texto de descrição */}
        <div className="mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mx-auto">
            <strong>Ragegg criamos sites exclusivos com</strong>
            <span className="tracking-tight text-[#0000FF] font-bold">
              <SparklesText text="performance extraordinária" />
            </span>
          </h1>

          <p className="text-[16px] text-black/70 max-w-[600px] mx-auto mt-6">
            Desenvolvemos sites personalizados que refletem a identidade do seu
            negócio, criando experiências digitais que encantam e convertem.
          </p>
        </div>
        {/* Card - expandindo um pouco a largura no desktop */}
        <div className="mb-28">
          <ProjectCard />
        </div>
        <div className="mx-auto text-center mb-10">
          <div className="relative md:w-[120%] md:-mx-[10%]">
            <Card />
          </div>
        </div>
      </div>
    </section>
  );
};
