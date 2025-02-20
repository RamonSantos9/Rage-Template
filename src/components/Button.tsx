import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("relative rounded-[8px] font-medium", {
  variants: {
    variant: {
      primary:
        "bg-[#000080] text-md text-white h-10 px-4 border border-[#000080]",
      secondary: "text-white text-md bg-transparent h-10 px-4 bg-black",
      tertiary: "bg-[#000080] text-white text-md text-neutral-950 h-10 px-3",
    },
    size: {
      sm: "h-8 px-4",
    },
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary" | "tertiary";
    size?: "sm";
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
