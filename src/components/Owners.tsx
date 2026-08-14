"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Crown, Instagram } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const placeholderOwners = [
  {
    id: 1,
    name: "[OWNER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/hero-bg.jpg",
  },
  {
    id: 2,
    name: "[OWNER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/about-gym.jpg",
  },
  {
    id: 3,
    name: "[OWNER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/facility-dumbbells.jpg",
  },
];

export default function Owners() {
  return (
    <section className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60 overflow-hidden">
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
              className="bg-gradient-to-b from-brand-charcoal/80 to-brand-card/80 backdrop-blur-md border-2 border-brand-yellow/40 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,208,0,0.08)] hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo with extra space */}
              <div className="relative h-80 sm:h-[400px] w-full bg-brand-darkgray overflow-hidden">
                <Image
                  src={owner.image}
                  alt={owner.name}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={imageSizes.thirdWidth}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              </div>

              {/* Name & Instagram ID only */}
              <div className="p-6 flex items-center justify-between gap-3 border-t border-brand-darkgray bg-brand-black">
                <div className="truncate">
                  <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors truncate">
                    {owner.name}
                  </h3>
                  <a
                    href={owner.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-brand-gray hover:text-brand-yellow transition-colors block truncate"
                  >
                    {owner.insta}
                  </a>
                </div>

                <a
                  href={owner.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors shrink-0"
                  aria-label="Instagram profile"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
