"use client";

import { cn } from "../../lib/utils";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

/**
 * @property {React.ReactNode} children - The child elements to be wrapped
 */
interface PointerWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/**
 * A component that wraps content and adds a custom pointer animation when hovering
 * over the wrapped area. The pointer follows the mouse movement within the wrapped area.
 *
 * @component
 * @param {PointerWrapperProps} props - The component props
 */
export function PointerWrapper({
  children,
  className,
  ...props
}: PointerWrapperProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    function updateRect() {
      if (ref.current) {
        setRect(ref.current.getBoundingClientRect());
      }
    }

    // Initial rect calculation
    updateRect();

    // Update rect on window resize
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (rect) {
      x.set(e.clientX - rect.left);
      y.set(e.clientY - rect.top);
    }
  }

  function handleMouseLeave() {
    setIsInside(false);
  }

  function handleMouseEnter() {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
      setIsInside(true);
    }
  }

  return (
    <div
      ref={ref}
      className={cn("relative cursor-none", className)}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <AnimatePresence>{isInside && <Pointer x={x} y={y} />}</AnimatePresence>
      {children}
    </div>
  );
}

/**
 * @property {MotionValue<number>} x - The x-coordinate position of the pointer
 * @property {MotionValue<number>} y - The y-coordinate position of the pointer
 */
interface PointerProps {
  x: any;
  y: any;
}

/**
 * A custom pointer component that displays a rectangular "glass" effect with text.
 *
 * @description Used internally by PointerWrapper to show the custom cursor
 *
 * @component
 * @param {PointerProps} props - The component props
 */
function Pointer({ x, y }: PointerProps): JSX.Element {
  return (
    <motion.div
      className="pointer-events-none absolute z-50"
      style={{
        top: y,
        left: x,
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      <div className="flex items-center justify-center px-4 py-2 bg-black/20 border border-black/10 backdrop-blur-md rounded-md">
        <span className="text-white font-semibold text-base whitespace-nowrap">
          Explorar 👀
        </span>
      </div>
    </motion.div>
  );
}
