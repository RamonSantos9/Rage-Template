import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("relative rounded-[14px] font-bold", {
  variants: {
    variant: {
      primary:
        "bg-custom-secondary px-4 border border-[#6C6C5D] border-b-[4px] border-tl-[2px] border-tr-[2px] hover:bg-custom-secondary/50 hover:text-black/60 transition-all duration-300",
      secondary:
        "bg-transparent px-4 border border-[#6C6C5D] hover:bg-custom-secondary/50 border-b-[4px] border-tl-[2px] border-tr-[2px]",
      tertiary: "bg-[#000080] text-white text-neutral-950 px-3",
    },
    size: {
      sm: "h-8 px-4",
      md: "h-10 px-4",
      lg: "h-12 px-6",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary" | "tertiary";
    size?: "sm" | "md" | "lg";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...otherProps } = props;

  return (
    <div
      className={
        variant === "tertiary"
          ? "relative rounded-[12px] p-1.5"
          : "relative border border-white/10 rounded-[12px] p-1.5"
      }
    >
      <button
        className={classes({
          variant,
          size,
          className,
        })}
        {...otherProps}
      />
    </div>
  );
}
