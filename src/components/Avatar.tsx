import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Avatar(props: HTMLAttributes<HTMLDivElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={twMerge(
        "size-10 rounded-full overflow-hidden border-[#ffffff] p-1 bg-gray-900",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
