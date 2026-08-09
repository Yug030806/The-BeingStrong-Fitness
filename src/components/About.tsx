"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Dumbbell, ShieldCheck, Flame } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-brand-black text-brand-white border-t border-brand-darkgray/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Placeholder / Gym Facility Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[400px] sm:h-[500px] w-full rounded-2xl overflow-hidden border-2 border-brand-darkgray shadow-[0_0_30px_rgba(0,0,0,0.8)] group">
              <Image
                src="/images/about-gym.jpg"
                alt="The BeingStrong Fitness Gym Floor"
                fill
                quality={IMAGE_QUALITY}
                sizes={imageSizes.halfWidth}
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-brand-charcoal/90 border border-brand-yellow/30 backdrop-blur-md rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="font-heading text-lg text-brand-yellow tracking-wider">VADODARA STRENGTH HUB</h4>
                  <p className="text-xs text-brand-gray">Radhe A-10 Udaynagar, Ajwa Road</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black font-bold">
                  <Dumbbell size={22} />
                </div>
              </div>
            </div>

            {/* Decorative Barbell Weight Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-4 border-brand-yellow/30 bg-brand-black/90 flex items-center justify-center hidden sm:flex pointer-events-none shadow-xl">
              <span className="font-heading text-xl text-brand-yellow text-center leading-tight">
                STAY<br />STRONG
              </span>
            </div>
          </motion.div>

          {/* Right Column: Text Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Section Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-4">
              <Flame size={14} className="text-brand-yellow" />
              <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-6">
              ABOUT <span className="text-brand-yellow">THE BEINGSTRONG</span> FITNESS
            </h2>

            {/* Official Introduction Concept */}
            <div className="space-y-4 text-brand-gray text-base sm:text-lg leading-relaxed mb-8">
              <p className="border-l-4 border-brand-yellow pl-4 italic text-brand-white font-medium">
                &quot;At The BeingStrong Fitness, we believe strength is built through consistency, discipline and the right training environment. Our goal is to create a place where people can train with purpose, stay motivated and become stronger every day.&quot;
              </p>
              <p>
                Located across four floors (3rd, 4th, 5th & 6th Floor) at RADHE A-10, Ajwa Road, Vadodara, our facility is engineered specifically for serious fitness enthusiasts, beginners, and athletes aiming for real physical progress.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-brand-charcoal rounded-lg border border-brand-darkgray">
                <ShieldCheck className="text-brand-yellow shrink-0" size={20} />
                <span className="text-xs font-bold text-brand-white uppercase tracking-wider">
                  Purposeful Training Environment
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-brand-charcoal rounded-lg border border-brand-darkgray">
                <ShieldCheck className="text-brand-yellow shrink-0" size={20} />
                <span className="text-xs font-bold text-brand-white uppercase tracking-wider">
                  Discipline & Community Motivation
                </span>
              </div>
            </div>

            <Link
              href="#facilities"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-black font-heading text-xl tracking-wider hover:bg-brand-yellow-hover transition-all rounded-sm shadow-[0_0_15px_rgba(255,208,0,0.3)]"
            >
              DISCOVER MORE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
