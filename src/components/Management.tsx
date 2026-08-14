"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UserCheck, Instagram } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const placeholderManagement = [
  {
    id: 1,
    name: "[MANAGER NAME]",
    role: "General Manager",
    insta: "@the_beingstrong_fitness",
    instaLink: "https://www.instagram.com/the_beingstrong_fitness/",
    image: "/images/facility-dumbbells.jpg",
    description: "Oversees daily operations and ensures a seamless experience for all members.",
  },
];

export default function Management() {
  return (
    <section id="management" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60 overflow-hidden">
      {/* Background Subtle Accent Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <UserCheck size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              OPERATIONS & EXCELLENCE
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            GYM <span className="text-brand-yellow">MANAGEMENT</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Dedicated team members managing smooth facility operations, member services, and daily excellence.
          </p>
        </div>

        {/* Single Tab Management Card */}
        <div className="max-w-md mx-auto">
          {placeholderManagement.map((manager, index) => (
            <motion.div
              key={manager.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-b from-brand-charcoal/80 to-brand-card/80 backdrop-blur-md border-2 border-brand-yellow/40 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,208,0,0.08)] hover:border-brand-yellow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-80 sm:h-96 w-full bg-brand-darkgray overflow-hidden">
                <Image
                  src={manager.image}
                  alt={manager.name}
                  fill
                  quality={IMAGE_QUALITY}
                  sizes={imageSizes.thirdWidth}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
              </div>

              {/* Details with Name, Role, Instagram ID & Description */}
              <div className="p-6 bg-brand-black border-t border-brand-darkgray flex flex-col gap-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors">
                      {manager.name}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-yellow block mt-0.5">
                      {manager.role}
                    </span>
                    <a
                      href={manager.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-brand-gray hover:text-brand-yellow transition-colors inline-block mt-1"
                    >
                      {manager.insta}
                    </a>
                  </div>

                  <a
                    href={manager.instaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-brand-charcoal text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors shrink-0"
                    aria-label="Instagram profile"
                  >
                    <Instagram size={20} />
                  </a>
                </div>

                <p className="text-sm text-brand-gray border-t border-brand-darkgray/60 pt-3 leading-relaxed">
                  {manager.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
