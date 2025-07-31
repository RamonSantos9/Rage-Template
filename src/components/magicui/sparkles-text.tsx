"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface SparklesTextProps {
  text: string;
  className?: string;
  sparkleCount?: number;
  sparkleSize?: number;
  sparkleColor?: string;
  sparkleDuration?: number;
}

export function SparklesText({
  text,
  className,
  sparkleCount = 20,
  sparkleSize = 4,
  sparkleColor = "#FFD700",
  sparkleDuration = 2,
}: SparklesTextProps) {
  const [sparkles, setSparkles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const newSparkles = Array.from({ length: sparkleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * sparkleDuration,
    }));
    setSparkles(newSparkles);
  }, [sparkleCount, sparkleDuration]);

  return (
    <div className={cn("relative inline-block", className)}>
      <span className="relative z-10">{text}</span>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute pointer-events-none"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkleSize,
            height: sparkleSize,
            backgroundColor: sparkleColor,
            borderRadius: "50%",
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: sparkleDuration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
