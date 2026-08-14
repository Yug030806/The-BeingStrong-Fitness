"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, Target, Zap, Trophy, Shield } from "lucide-react";

const whyItems = [
  {
    title: "STRENGTH TRAINING",
    desc: "Heavy-duty power racks, barbell setups, and dedicated free-weight zones tailored for strength progression.",
    icon: Dumbbell,
  },
  {
    title: "MODERN FITNESS ENVIRONMENT",
    desc: "Spacious multi-floor layout equipped with modern machinery and optimal dark aesthetic yellow neon lighting.",
    icon: Zap,
  },
  {
    title: "DEDICATED TRAINING",
    desc: "Structured workout spaces engineered so every member can train with intent, hyper-focus, and intensity.",
    icon: Target,
  },
  {
    title: "SUPPORTIVE COMMUNITY",
    desc: "An energetic gym culture built by individuals who encourage discipline, sweat, and collective growth.",
    icon: Flame,
  },
  {
    title: "TRAINER GUIDANCE",
    desc: "Professional trainers on the floor to correct form, assist with heavy lifts, and refine technique.",
    icon: Shield,
  },
  {
    title: "CONSISTENCY & DISCIPLINE",
    desc: "Our core motto: stay consistent day after day to build lasting physical and mental fortitude.",
    icon: Trophy,
  },
];

export default function WhyBeingStrong() {
  return (
    <section className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60 overflow-hidden">
      {/* Decorative Barbell Graphic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] block mb-2">
            THE BEINGSTRONG DIFFERENCE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            WHY <span className="text-brand-yellow">BEINGSTRONG?</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-4 shadow-[0_0_10px_#FFD000]" />
          <p className="text-brand-gray text-base sm:text-lg">
            We provide the exact environment, equipment, and atmosphere required to build authentic strength.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-brand-card/70 backdrop-blur-md border border-brand-darkgray hover:border-brand-yellow p-8 rounded-xl relative group transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Subtle Yellow Glow Overlay on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-500" />
                
                {/* Weight Plate Card Ring Detail */}
                <div className="w-14 h-14 rounded-full bg-brand-black border-2 border-brand-yellow/30 flex items-center justify-center text-brand-yellow mb-6 group-hover:border-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black transition-all shadow-[0_0_15px_rgba(255,208,0,0.15)]">
                  <Icon size={26} />
                </div>

                <h3 className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-brand-gray text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
