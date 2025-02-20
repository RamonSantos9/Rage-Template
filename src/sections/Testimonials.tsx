import React from "react";
import ProjectCard2 from "@/components/ProjectCard2";
import { Badge } from "@/components/Badge";
import Image from "next/image";
import avatar from "@/assets/avatar-user2.png";
import { twMerge } from "tailwind-merge";
import { Coofooter } from "@/components/Coofooter";

const testimonials = [
  {
    text: "Como designer experiente, sempre em busca de ferramentas inovadoras, a Rage revolucionou minha forma de criar.",
    imageSrc: avatar.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "A produtividade da nossa equipe disparou desde que começamos a usar as soluções da Rage.",
    imageSrc: avatar.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Esta plataforma transformou completamente a maneira como gerencio meus projetos e prazos.",
    imageSrc: avatar.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Fiquei impressionado com a facilidade de integração da Rage ao nosso fluxo de trabalho.",
    imageSrc: avatar.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Organizar e executar eventos nunca foi tão fácil! A Rage me ajuda a manter tudo sob controle.",
    imageSrc: avatar.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "A personalização e integração da Rage são simplesmente incríveis!",
    imageSrc: avatar.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "A adoção deste aplicativo pela nossa equipe otimizou a gestão de projetos e melhorou a comunicação em todos os níveis.",
    imageSrc: avatar.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "Com este aplicativo, podemos facilmente atribuir tarefas, acompanhar o progresso e gerenciar documentos em um só lugar.",
    imageSrc: avatar.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Sua interface intuitiva e recursos avançados atendem perfeitamente às nossas diversas necessidades.",
    imageSrc: avatar.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div key={username || index} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="Testimonials" className="relative pt-24">
      {/* Conteúdo principal do Hero */}
      <div className="flex w-full flex-col items-center">
        {/* Badge */}
        <Badge text="testimonials" />
        {/* Texto de descrição */}
        <div className="mx-auto text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mx-auto">
            <strong>
              See what our
              <br />
              clients have to say…
            </strong>
          </h1>
        </div>
        {/* Card */}
        <div className="mb-12">
          <ProjectCard2 />
        </div>
        {/* colunas */}
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:flex"
          />
        </div>
      </div>
      <Coofooter />
    </section>
  );
};
