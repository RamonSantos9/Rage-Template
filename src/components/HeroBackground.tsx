"use client";

import Image from "next/image";
import heroBanner from "@/assets/hero-banner.png";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const HeroBackground = () => {
  const heroBannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  // Transformação baseada no progresso do scroll
  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  // Suavização da transformação
  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="relative mt-12 max-w-screen-md mx-auto isolate rounded-lg md:mt-16 -z-10">
      <div className="-z-20">
        {/* Começo Ring 1 */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border opacity-20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute h-2 w-2 left-0 bg-white rounded-full top-1/2 transalate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-1/2 bg-white rounded-full top-0 transalate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-5 w-5 left-full border border-white/50 rounded-full top-1/2 transalate-x-1/2 -translate-y-1/2 inline-flex items-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
        {/* Fim Ring 1 */}
        {/* Começo Ring 2 */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "-1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        ></motion.div>
        {/* Fim Ring 2 */}
        {/* Começo Ring 3 */}
        <motion.div
          style={{
            translateY: "-50%",
            translateX: "-50%",
          }}
          animate={{
            rotate: "1turn",
          }}
          transition={{
            repeat: Infinity,
            duration: 90,
            ease: "linear",
          }}
          className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white/50 opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="absolute h-2 w-2 left-0 bg-white/50 rounded-full top-1/2 transalate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute h-2 w-2 left-full bg-white/50 rounded-full top-0 transalate-x-1/2 -translate-y-1/2"></div>
        </motion.div>
        {/* Fim Ring 3 */}
      </div>
      {/* Imagem principal */}
      <motion.figure
        ref={heroBannerRef}
        className="rounded-xl"
        initial={{
          y: 120,
          opacity: 0,
          filter: "blur(5px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0)",
        }}
        transition={{
          duration: 1.5,
          delay: 0.5,
          ease: "backInOut",
        }}
        style={{ scale }}
      >
        <div className="absolute inset-0"></div>
        <div className="bg-gradient-to-l from-[#0d0717] via-[#0e081b] to-[#0b0614] rounded-[15px] shadow border-white/10 ">
          <Image
            src={heroBanner}
            width={1468}
            height={815}
            alt="AnalytiX Dashboard"
          />
        </div>
      </motion.figure>

      {/* Efeitos adicionais */}
      <motion.div
        initial={{
          scale: 0.8,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "backInOut",
        }}
        className="absolute inset-0 -z-10"
      >
        <motion.div
          className="absolute bg-[#d0b084] inset-5 blur-[50px]"
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "backOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 bg-[#d0b084] blur-[100px] scale-y-75 scale-x-125 rounded-full"
          initial={{
            scale: 0.4,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            delay: 1.5,
            ease: "backOut",
          }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};
