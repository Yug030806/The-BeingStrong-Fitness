"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RotatingBackgroundLogos() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center" aria-hidden="true">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative w-[700px] h-[700px] sm:w-[800px] sm:h-[800px] lg:w-[900px] lg:h-[900px] opacity-[0.12]"
      >
        <Image
          src="/images/the_beingstrong_logo.png"
          alt=""
          fill
          quality={80}
          unoptimized
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}
