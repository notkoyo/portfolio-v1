"use client";

import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue<number>(-100);
  const cursorY = useMotionValue<number>(-100);

  const springConfig = { damping: 80, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]); 

  return (
    <motion.div
    className="fixed left-0 top-0 w-[1rem] h-[1rem] rounded-full mix-blend-difference z-[999] pointer-events-none bg-gray-50"
    style={{
      translateX: cursorXSpring,
      translateY: cursorYSpring,
    }}
  />
  );
}