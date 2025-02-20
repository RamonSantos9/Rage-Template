"use client";

import React from "react";
import Image from "next/image";
import avatar1 from "@/assets/avatar-user.png";
import Avatar from "@/components/Avatar";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Star } from "lucide-react";
import Logo from "@/assets/logo.svg";

const ProjectCard = () => {
  return (
    <div className="flex justify-center items-center">
      <ShineBorder
        className="flex items-center justify-between bg-gray-900/80 rounded-[13px] p-3"
        color={["#0000ff", "#0000ff", "#0000ff"]}
      >
        {/* Esquerda do card */}
        <div className="flex flex-col items-start space-y-2 pr-4">
          {/* Avatares no topo */}
          <div className="flex items-center">
            <Avatar className="z-40">
              <Image src={avatar1} alt="Avatar 1" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-3 border-[#ffff] z-30">
              <Image src={avatar1} alt="Avatar 2" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-3 border-[#ffff] z-20">
              <Image src={avatar1} alt="Avatar 3" className="rounded-full" />
            </Avatar>
            <Avatar className="-ml-3 border-transparent group-hover:border-green-500 transition">
              <div className="size-full border-[#ffff] rounded-full inline-flex items-center justify-center gap-1 relative">
                <Image
                  src={avatar1}
                  alt="Avatar 4"
                  className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                />
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    className="size-1.5 rounded-full bg-white inline-flex"
                    key={i}
                  ></span>
                ))}
              </div>
            </Avatar>
          </div>
        </div>

        {/* Direita do card */}
        <div className="flex flex-col items-start space-y-1">
          {/* Estrelas no topo */}
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className="text-white fill-current"
                fill="currentColor"
              />
            ))}
          </div>

          {/* Texto na parte inferior */}
          <p className="text-xs text-white font-medium">1000+ templates sold</p>
        </div>
      </ShineBorder>
    </div>
  );
};

export default ProjectCard;
