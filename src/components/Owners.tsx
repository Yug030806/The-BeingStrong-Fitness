"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trophy, Crown, ShieldAlert } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const placeholderOwners = [
  {
    id: 1,
    name: "[OWNER NAME]",
    role: "FOUNDER & GYM MANAGEMENT",
    quote: "Dedicated to providing Vadodara with an uncompromising fitness venue where discipline, proper equipment, and motivation meet.",
    vision: "To establish The BeingStrong Fitness as Vadodara’s premier destination for strength development.",
    image: "/images/hero-bg.jpg",
  },
  {
    id: 2,
    name: "[OWNER NAME]",
    role: "CO-FOUNDER & MANAGING DIRECTOR",
    quote: "Fostering a supportive community where fitness targets are transformed into lasting achievements.",
    vision: "Creating world-class workout standards with top-tier equipment and environment.",
    image: "/images/about-gym.jpg",
  },
  {
    id: 3,
    name: "[OWNER NAME]",
    role: "OPERATIONS & STRATEGY DIRECTOR",
    quote: "Ensuring seamless gym facilities, member care, and relentless commitment to quality fitness services.",
    vision: "Expanding modern athletic training culture across Vadodara and beyond.",
    image: "/images/facility-dumbbells.jpg",
  },
];

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

        {/* 3 Owners Cards in a Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderOwners.map((owner, index) => (
            <motion.div
              key={owner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-brand-charcoal to-brand-card border-2 border-brand-yellow/40 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,208,0,0.08)] hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-64 w-full bg-brand-darkgray overflow-hidden">
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    fill
                    quality={IMAGE_QUALITY}
                    sizes={imageSizes.thirdWidth}
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 p-2 rounded-full bg-brand-yellow text-brand-black">
                    <Trophy size={16} />
                  </div>
                  
                  <div className="absolute bottom-3 left-4 right-4 p-2 bg-brand-black/80 backdrop-blur-md rounded border border-brand-darkgray text-center">
                    <span className="font-heading text-sm text-brand-yellow tracking-wider block">
                      {owner.role}
                    </span>
                  </div>
                </div>

                {/* Details Body */}
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white">
                    {owner.name}
                  </h3>

                  <p className="border-l-2 border-brand-yellow pl-3 italic text-brand-white text-sm leading-relaxed">
                    &quot;{owner.quote}&quot;
                  </p>

                  <p className="text-brand-gray text-xs sm:text-sm leading-relaxed">
                    <strong className="text-brand-yellow">VISION:</strong> {owner.vision}
                  </p>
                </div>
              </div>

              {/* Card Footer Notice */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-brand-darkgray flex items-center gap-2 text-[11px] text-brand-gray">
                  <ShieldAlert size={14} className="text-brand-yellow shrink-0" />
                  <span>Leadership profile details can be customized.</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
