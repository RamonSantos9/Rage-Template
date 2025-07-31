import { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "../../lib/utils";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

export function AnimatedGradientText({
  children,
  className,
  ...props
}: AnimatedGradientTextProps) {
  return (
    <div
      className={cn(
        "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-gray-900/80 border px-4 py-1.5 text-sm font-medium backdrop-blur-md transition-shadow duration-500 ease-out",
        className
      )}
      {...props}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#7171ff] via-[#0000ff] to-[#0a0a3a] bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] rounded-[15px] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />

      {children}
    </div>
  );
}
