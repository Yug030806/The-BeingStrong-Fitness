"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Dumbbell, ShieldAlert } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const facilityCards = [
  {
    title: "FREE WEIGHTS ZONE",
    desc: "Comprehensive rack systems, Olympic barbells, powerlifting benches, and heavy iron plates.",
    image: "/images/about-gym.jpg",
    tag: "STRENGTH AREA",
  },
  {
    title: "DUMBBELLS SECTION",
    desc: "Full range of high-grade hex and round dumbbells for isolation, hypertrophy, and conditioning.",
    image: "/images/facility-dumbbells.jpg",
    tag: "PRECISION TRAINING",
  },
  {
    title: "CARDIO SUITE",
    desc: "Treadmills, spin bikes, elliptical machines designed for endurance, fat loss, and stamina.",
    image: "/images/facility-cardio.jpg",
    tag: "ENDURANCE",
  },
  {
    title: "STRENGTH EQUIPMENT",
    desc: "Bio-mechanically optimized resistance cable towers, leg press, lat pulldowns, and chest presses.",
    image: "/images/hero-bg.jpg",
    tag: "MACHINERY",
  },
  {
    title: "FUNCTIONAL TRAINING AREA",
    desc: "Open turf and mat spaces for kettlebells, battle ropes, bodyweight exercises, and mobility work.",
    image: "/images/about-gym.jpg",
    tag: "FUNCTIONAL",
  },
  {
    title: "MULTI-FLOOR GYM AREA",
    desc: "Spacious multi-level workout floors offering zero bottlenecking even during peak evening hours.",
    image: "/images/facility-dumbbells.jpg",
    tag: "4 FLOORS SPACE",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Dumbbell size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              WORLD-CLASS SETUP
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            BUILT FOR <span className="text-brand-yellow">STRENGTH</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Explore our state-of-the-art multi-floor strength training facility in Vadodara.
          </p>

          {/* Transparent Notice Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-brand-charcoal border border-brand-darkgray rounded-full text-xs text-brand-gray">
            <ShieldAlert size={14} className="text-brand-yellow" />
            <span>Facility cards are fully editable placeholders ready for official equipment photo updates.</span>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilityCards.map((card, idx) => (
            <motion.div
              key={card.title + idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-brand-charcoal/80 backdrop-blur-md border border-brand-darkgray hover:border-brand-yellow rounded-xl overflow-hidden group transition-all duration-300 shadow-xl flex flex-col"
            >
              {/* Image Container with Zoom & Glow */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={imageSizes.thirdWidth}
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/30 to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest bg-brand-yellow text-brand-black px-2.5 py-1 rounded uppercase">
                  {card.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-darkgray/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-yellow uppercase tracking-widest">
                    THE BEINGSTRONG FITNESS
                  </span>
                  <Dumbbell size={16} className="text-brand-gray group-hover:text-brand-yellow transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
