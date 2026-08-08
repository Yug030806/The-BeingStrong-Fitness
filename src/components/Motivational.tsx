"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";

export default function Motivational() {
  return (
    <section className="relative py-28 bg-brand-black text-brand-white border-t border-brand-darkgray/60 overflow-hidden">
      {/* Background Image overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Motivational Gym Atmosphere"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-yellow/10 blur-[180px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/40 mb-6">
            <Flame size={16} className="text-brand-yellow animate-pulse" />
            <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.25em]">
              NO EXCUSES. JUST RESULTS.
            </span>
          </div>

          <h2 className="font-heading text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight leading-none mb-6">
            YOUR STRONGER VERSION
            <br />
            <span className="text-brand-yellow">STARTS HERE.</span>
          </h2>

          <div className="w-32 h-1 bg-brand-yellow mx-auto my-6 shadow-[0_0_15px_#FFD000]" />

          <p className="font-heading text-2xl sm:text-3xl text-brand-gray tracking-widest uppercase mb-10">
            STAY STRONG AND FIT
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-brand-yellow text-brand-black font-heading text-2xl tracking-wider hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all shadow-[0_0_25px_rgba(255,208,0,0.4)] rounded-sm"
          >
            START YOUR JOURNEY
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
