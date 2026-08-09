"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-brand-black"
        >
          {/* Logo Pulse */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-28 h-28 mb-6 rounded-full overflow-hidden border-2 border-brand-yellow shadow-[0_0_25px_rgba(255,208,0,0.5)]"
          >
            <Image
              src="/images/the_beingstrong_logo.png"
              alt="The BeingStrong Fitness"
              fill
              priority
              quality={100}
              unoptimized
              sizes={imageSizes.logo}
              className="object-cover"
            />
          </motion.div>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-heading text-2xl md:text-3xl tracking-widest text-brand-white uppercase mb-2"
          >
            THE <span className="text-brand-yellow">BEINGSTRONG</span> FITNESS
          </motion.h2>

          <p className="text-xs text-brand-gray tracking-widest uppercase mb-6">
            STAY STRONG AND FIT
          </p>

          {/* Barbell & Weight Plate Loading Indicator */}
          <div className="w-64 relative flex items-center justify-center">
            <div className="w-full h-1.5 bg-brand-charcoal rounded-full overflow-hidden border border-brand-darkgray">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-brand-yellow shadow-[0_0_10px_#FFD000]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
