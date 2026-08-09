"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Dumbbell, ShieldCheck } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const placeholderTrainers = [
  {
    id: 1,
    name: "[TRAINER NAME]",
    role: "HEAD STRENGTH COACH",
    bio: "[TRAINER INFORMATION] — Expert in heavy compound lifts, powerlifting technique, and muscle hypertrophy coaching.",
    image: "/images/about-gym.jpg",
  },
  {
    id: 2,
    name: "[TRAINER NAME]",
    role: "FITNESS & CONDITIONING COACH",
    bio: "[TRAINER INFORMATION] — Specializing in fat loss, athletic conditioning, mobility, and functional movement.",
    image: "/images/facility-dumbbells.jpg",
  },
  {
    id: 3,
    name: "[TRAINER NAME]",
    role: "PERSONAL COACH",
    bio: "[TRAINER INFORMATION] — Dedicated 1-on-1 personal guidance for custom fitness transformations and nutrition oversight.",
    image: "/images/facility-cardio.jpg",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 bg-brand-charcoal text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] block mb-2">
            EXPERT GUIDANCE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            MEET YOUR <span className="text-brand-yellow">TRAINERS</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Train alongside experienced fitness coaches committed to your progress and safety.
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-brand-gray bg-brand-black px-3 py-1 rounded border border-brand-darkgray">
            <ShieldCheck size={14} className="text-brand-yellow" />
            <span>Trainer details are easy-to-edit placeholders ready for your team profiles.</span>
          </div>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-brand-black border border-brand-darkgray hover:border-brand-yellow rounded-xl overflow-hidden group transition-all duration-300 shadow-xl flex flex-col"
            >
              <div className="relative h-72 w-full bg-brand-darkgray overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={imageSizes.thirdWidth}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4 p-2 rounded-full bg-brand-yellow text-brand-black">
                  <Dumbbell size={16} />
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-1">
                    {trainer.role}
                  </span>
                  <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-3">
                    {trainer.name}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6">
                    {trainer.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-brand-darkgray flex items-center justify-between">
                  <span className="text-xs text-brand-gray font-semibold">COACHING STAFF</span>
                  <a
                    href="https://www.instagram.com/the_beingstrong_fitness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
