"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Crown, ShieldAlert } from "lucide-react";

export default function Owners() {
  return (
    <section className="relative py-24 bg-brand-black text-brand-white border-t border-brand-darkgray/60 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Crown size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              LEADERSHIP & VISION
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            THE PEOPLE BEHIND <span className="text-brand-yellow">BEINGSTRONG</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Driven by a commitment to bring a high-performance fitness culture to Vadodara.
          </p>
        </div>

        {/* Visually Distinct Owner Card Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-brand-charcoal via-brand-card to-brand-charcoal border-2 border-brand-yellow/40 rounded-2xl p-8 sm:p-12 shadow-[0_0_40px_rgba(255,208,0,0.1)] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Owner Photo Placeholder */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[350px] sm:h-[420px] w-full rounded-xl overflow-hidden border-2 border-brand-yellow/50 shadow-2xl group">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="Gym Owner Placeholder"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-brand-black/80 backdrop-blur-md rounded border border-brand-darkgray text-center">
                  <span className="font-heading text-xl text-brand-yellow tracking-wider">
                    FOUNDER & GYM MANAGEMENT
                  </span>
                </div>
              </div>
            </div>

            {/* Owner Details & Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Trophy className="text-brand-yellow" size={28} />
                <span className="text-xs font-bold tracking-[0.2em] text-brand-yellow uppercase">
                  LEADERSHIP PROFILE
                </span>
              </div>

              <h3 className="font-heading text-4xl sm:text-5xl uppercase tracking-wider text-brand-white">
                [OWNER NAME]
              </h3>

              <div className="space-y-4 text-brand-gray text-base sm:text-lg leading-relaxed">
                <p className="border-l-4 border-brand-yellow pl-4 italic text-brand-white">
                  &quot;[OWNER INTRODUCTION] — Dedicated to providing Vadodara with an uncompromising fitness venue where discipline, proper equipment, and motivation meet.&quot;
                </p>
                <p>
                  <strong>VISION:</strong> To establish The BeingStrong Fitness as Vadodara’s premier destination for strength development, body composition transformation, and authentic athletic training.
                </p>
              </div>

              {/* Notice */}
              <div className="pt-4 border-t border-brand-darkgray flex items-center gap-2 text-xs text-brand-gray">
                <ShieldAlert size={14} className="text-brand-yellow" />
                <span>Owner biography and official photographs will be updated upon confirmation.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
