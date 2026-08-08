"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, ExternalLink } from "lucide-react";

const instaPosts = [
  { id: 1, img: "/images/hero-bg.jpg", alt: "BeingStrong Fitness Gym Floor" },
  { id: 2, img: "/images/about-gym.jpg", alt: "Heavy Powerlifting Rig" },
  { id: 3, img: "/images/facility-dumbbells.jpg", alt: "Precision Dumbbell Rack" },
  { id: 4, img: "/images/facility-cardio.jpg", alt: "Cardio Workouts Vadodara" },
  { id: 5, img: "/images/about-gym.jpg", alt: "Strength Training Sessions" },
  { id: 6, img: "/images/hero-bg.jpg", alt: "The BeingStrong Community" },
];

export default function InstagramSection() {
  return (
    <section className="relative py-24 bg-brand-charcoal text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Instagram size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              INSTAGRAM COMMUNITY
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-3">
            FOLLOW THE BEINGSTRONG <span className="text-brand-yellow">JOURNEY</span>
          </h2>
          <p className="text-brand-yellow text-lg font-bold tracking-wider mb-6">
            @the_beingstrong_fitness
          </p>

          <a
            href="https://www.instagram.com/the_beingstrong_fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-yellow text-brand-black font-heading text-lg tracking-wider rounded hover:bg-brand-yellow-hover transition-colors shadow-[0_0_15px_rgba(255,208,0,0.3)]"
          >
            <Instagram size={20} />
            FOLLOW US ON INSTAGRAM
            <ExternalLink size={16} />
          </a>
        </div>

        {/* 6 Instagram Post Placeholders Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/the_beingstrong_fitness/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative h-48 rounded-xl overflow-hidden group border border-brand-darkgray hover:border-brand-yellow transition-all"
            >
              <Image
                src={post.img}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-brand-yellow">
                <Instagram size={32} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
