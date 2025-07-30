"use client";

import Button from "@/components/Button";
import forest from "@/assets/forest.png";
import nuvem from "@/assets/nuvem.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <>
      <section id="home" className="overflow-x-clip relative py-44 lg:py-64">
        <div className="max-w-5xl relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-medium mb-6 font-instrument italic">
              Template para{" "}
              <span className="font-normal font-instrument italic text-custom-secondary">
                Landing Page
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-xl mx-auto font-instrument italic">
              Uma landing page (template), moderna e elegante construída com
              Next.js, Tailwind CSS e Framer Motion
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <a href="#contact">
                <Button
                  variant="primary"
                  className="text-black font-switzer"
                  size="lg"
                >
                  Começar Agora
                </Button>
              </a>
              <a href="#video">
                <Button
                  variant="secondary"
                  className="flex items-center text-black font-switzer text-center "
                  size="lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="12"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      fill="#000"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.333"
                      d="M3.953 2.268a.3.3 0 0 0-.453.259v6.947a.3.3 0 0 0 .453.258l5.862-3.474a.3.3 0 0 0 0-.516L3.953 2.268Z"
                    />
                  </svg>
                  Assistir Vídeo
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
