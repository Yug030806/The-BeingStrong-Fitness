"use client";

import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

export default function AnimatedEquipment() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {/* Slow Floating Dumbbell 1 */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-5 opacity-10 text-brand-yellow hidden lg:block"
      >
        <Dumbbell size={120} />
      </motion.div>

      {/* Slow Floating Dumbbell 2 */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-8 opacity-10 text-brand-yellow hidden lg:block"
      >
        <Dumbbell size={140} />
      </motion.div>

      {/* Rotating Weight Plate Graphic 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-20 -right-20 w-96 h-96 border-[12px] border-dashed border-brand-yellow/10 rounded-full flex items-center justify-center pointer-events-none"
      >
        <div className="w-64 h-64 border-4 border-brand-gray/10 rounded-full" />
      </motion.div>

      {/* Rotating Weight Plate Graphic 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-32 -left-20 w-[500px] h-[500px] border-[16px] border-dashed border-brand-yellow/5 rounded-full pointer-events-none"
      />
    </div>
  );
}
