"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Instagram, ArrowRight } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-brand-black">
      {/* Background Image with Dark Overlay and Yellow Lighting */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="The BeingStrong Fitness Gym Interior"
          fill
          priority
          quality={IMAGE_QUALITY}
          sizes={imageSizes.fullWidth}
          className="object-cover object-center opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black/40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-yellow/10 blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto pt-12">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-black/80 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-yellow animate-ping" />
            <span className="text-xs font-semibold text-brand-yellow tracking-widest uppercase">
              STAY STRONG AND FIT
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-white uppercase leading-none tracking-tight mb-4"
          >
            STAY <span className="text-brand-yellow">STRONG.</span>
            <br />
            STAY <span className="text-brand-yellow">FIT.</span>
          </motion.h1>

          {/* Secondary Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-heading text-xl sm:text-2xl text-brand-gray tracking-widest uppercase mb-4"
          >
            THE BEINGSTRONG FITNESS — VADODARA
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-brand-gray/90 font-normal max-w-xl mb-8 leading-relaxed"
          >
            &quot;Train with purpose. Build strength. Stay consistent.&quot;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-brand-yellow text-brand-black font-heading text-xl tracking-wider hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,208,0,0.4)] flex items-center gap-2 rounded-sm"
            >
              JOIN NOW
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+919724073707"
              className="px-8 py-4 border border-brand-yellow text-brand-yellow font-heading text-xl tracking-wider hover:bg-brand-yellow hover:text-brand-black transition-all flex items-center gap-2 rounded-sm"
            >
              <Phone size={20} />
              CALL NOW
            </a>

            <Link
              href="#facilities"
              className="px-6 py-4 text-brand-gray font-semibold text-sm hover:text-brand-white transition-colors"
            >
              EXPLORE THE GYM →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Hero Contact Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-brand-charcoal/90 border border-brand-darkgray rounded-xl p-4 sm:p-6 backdrop-blur-md grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-brand-darkgray"
        >
          {/* Location Strip Item */}
          <a
            href="https://maps.google.com/?q=RADHE+A-10+Udaynagar+Housing+Society+Mahavir+Hall+Ajwa+Road+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 hover:bg-brand-black/40 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[10px] text-brand-gray uppercase tracking-widest block font-bold">
                LOCATION
              </span>
              <span className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors">
                VADODARA, GUJARAT
              </span>
            </div>
          </a>

          {/* Phone Strip Item */}
          <a
            href="tel:+919724073707"
            className="flex items-center gap-3 p-2 md:pl-6 hover:bg-brand-black/40 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-[10px] text-brand-gray uppercase tracking-widest block font-bold">
                CALL GYM DIRECTLY
              </span>
              <span className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors">
                +91 97240 73707
              </span>
            </div>
          </a>

          {/* Instagram Strip Item */}
          <a
            href="https://www.instagram.com/the_beingstrong_fitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-2 md:pl-6 hover:bg-brand-black/40 rounded transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform">
              <Instagram size={20} />
            </div>
            <div>
              <span className="text-[10px] text-brand-gray uppercase tracking-widest block font-bold">
                INSTAGRAM PROFILE
              </span>
              <span className="text-sm font-bold text-brand-white group-hover:text-brand-yellow transition-colors">
                @the_beingstrong_fitness
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
