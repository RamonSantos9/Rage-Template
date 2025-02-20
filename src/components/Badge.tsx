import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import LogoR from "@/assets/logo-b2.svg"; // Caminho correto para o arquivo SVG
import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="z-10 flex items-center justify-center min-h-32 space-x-2">
      <AnimatedGradientText>
        <LogoR />
        <hr className="mx-2 h-4" />
        <span
          className={cn(
            "inline animate-gradient bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] bg-clip-text text-transparent uppercase font-bold"
          )}
        >
          {text}
        </span>
      </AnimatedGradientText>
    </div>
  );
};
