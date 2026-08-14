"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const placeholderTrainers = [
  {
    id: 1,
    name: "[TRAINER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/about-gym.jpg",
  },
  {
    id: 2,
    name: "[TRAINER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/facility-dumbbells.jpg",
  },
  {
    id: 3,
    name: "[TRAINER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/facility-cardio.jpg",
  },
  {
    id: 4,
    name: "[TRAINER NAME]",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/hero-bg.jpg",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60">
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
        </div>

        {/* Trainers Grid - 4 tabs in a row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {placeholderTrainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-brand-black/70 backdrop-blur-md border border-brand-darkgray hover:border-brand-yellow rounded-xl overflow-hidden group transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              {/* Image with increased space */}
              <div className="relative h-80 sm:h-96 w-full bg-brand-darkgray overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={imageSizes.fourthWidth}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              </div>

              {/* Name & Instagram ID only */}
              <div className="p-5 flex items-center justify-between gap-3 border-t border-brand-darkgray bg-brand-black">
                <div className="truncate">
                  <h3 className="font-heading text-xl sm:text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors truncate">
                    {trainer.name}
                  </h3>
                  <a
                    href={trainer.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-gray hover:text-brand-yellow transition-colors block truncate"
                  >
                    {trainer.insta}
                  </a>
                </div>

                <a
                  href={trainer.instaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors shrink-0"
                  aria-label="Instagram profile"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
