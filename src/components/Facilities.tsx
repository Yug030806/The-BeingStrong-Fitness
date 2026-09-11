"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Target,
  Sparkles,
  Zap,
  Users,
  Timer,
  Swords,
  Music,
  HeartPulse,
  GlassWater,
  UserCheck,
  Lock,
  CloudFog,
  ShowerHead,
  Snowflake,
  CheckCircle2,
  Flame,
} from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

// Existing 5 facility zones with official imagery
const trainingZones = [
  {
    title: "FREE WEIGHTS ZONE",
    desc: "Comprehensive rack systems, Olympic barbells, powerlifting benches, and heavy iron plates.",
    image: "/images/facility-freeweights.jpg",
    tag: "STRENGTH AREA",
  },
  {
    title: "DUMBBELLS SECTION",
    desc: "Full range of high-grade hex and round dumbbells for isolation, hypertrophy, and conditioning.",
    image: "/images/facility-dumbbells.jpg",
    tag: "PRECISION TRAINING",
  },
  {
    title: "HIGH QUALITY FITNESS & STRENGTH EQUIPMENT",
    desc: "Bio-mechanically optimized resistance cable towers, plate-loaded stations, leg press, lat pulldowns, and chest presses.",
    image: "/images/facility-strength.jpg",
    tag: "HEAVY-DUTY MACHINERY",
  },
  {
    title: "CARDIO SUITE",
    desc: "Commercial treadmills, spin bikes, and elliptical machines designed for endurance, fat loss, and stamina.",
    image: "/images/facility-cardio.jpg",
    tag: "ENDURANCE ZONE",
  },
  {
    title: "FUNCTIONAL TRAINING AREA",
    desc: "Open turf and mat spaces for kettlebells, battle ropes, bodyweight exercises, plyometrics, and mobility work.",
    image: "/images/facility-functional.jpg",
    tag: "TURF & FUNCTIONAL",
  },
];

// Specialized training programs & classes from the facility board
const specializedPrograms = [
  {
    title: "PERSONAL TRAINING",
    desc: "One-on-one personalized coaching, technique refinement, and customized progression plans to accelerate your results safely.",
    tag: "1-ON-1 COACHING",
    icon: UserCheck,
  },
  {
    title: "CROSSFIT TRAINING",
    desc: "Dynamic high-intensity compound workouts, Olympic lifting mechanics, kettlebell complexes, and metabolic conditioning.",
    tag: "FUNCTIONAL ATHLETICISM",
    icon: Zap,
  },
  {
    title: "GROUP TRAINING",
    desc: "High-energy coach-led group sessions that combine team motivation, healthy competition, and intense calorie-burning workouts.",
    tag: "COMMUNITY ENERGY",
    icon: Users,
  },
  {
    title: "HIIT TRAINING",
    desc: "High-Intensity Interval Training engineered for rapid cardiovascular improvement, athletic speed, and maximum afterburn.",
    tag: "METABOLIC BURN",
    icon: Timer,
  },
  {
    title: "ABS CLASSES",
    desc: "Targeted core stability routines, isometric holds, and abdominal muscle sculpting movements to build trunk strength and posture.",
    tag: "CORE & POSTURE",
    icon: Target,
  },
  {
    title: "KICK BOXING",
    desc: "High-octane striking combinations, heavy bag drills, agile footwork, and martial arts conditioning for stamina and stress relief.",
    tag: "COMBAT FITNESS",
    icon: Swords,
  },
  {
    title: "ZUMBA",
    desc: "Energetic rhythmic dance fitness sessions combining upbeat music with high-calorie burning routines that make sweating fun.",
    tag: "CARDIO DANCE",
    icon: Music,
  },
  {
    title: "YOGA",
    desc: "Guided breathwork, joint mobility routines, full-body flexibility postures, and mindfulness to aid muscle recovery.",
    tag: "MIND & MOBILITY",
    icon: HeartPulse,
  },
  {
    title: "HEALTH BAR & JUICE BAR",
    desc: "Fresh post-workout juices, whey protein shakes, electrolyte coolers, and healthy refreshments made right on-site to refuel your body.",
    tag: "REFRESH & REFUEL",
    icon: GlassWater,
  },
];

// Changing room & recovery amenities from the facility board
const recoveryAmenities = [
  {
    title: "LOCKER SERVICES",
    desc: "Spacious and secure personal lockers to safely keep your gym gear, electronic devices, and personal belongings while you train.",
    tag: "SECURE STORAGE",
    icon: Lock,
    extraBadge: null,
  },
  {
    title: "STEAM BATH",
    desc: "Therapeutic heat steam sessions to soothe tight muscles, improve circulation, open pores, and speed up post-lift recovery.",
    tag: "DETOX & RELAX",
    icon: CloudFog,
    extraBadge: null,
  },
  {
    title: "SHOWERS",
    desc: "Spotless, modern hot and cold shower cubicles allowing you to wash off the sweat and leave refreshed and energized.",
    tag: "HYGIENE & REFRESH",
    icon: ShowerHead,
    extraBadge: null,
  },
  {
    title: "ICE BATH",
    desc: "Cold water plunge cryo-therapy designed to reduce muscle inflammation, flush lactic acid, and dramatically accelerate athletic recovery.",
    tag: "CRYO RECOVERY",
    icon: Snowflake,
    extraBadge: "₹500 /- EXTRA",
  },
];

type TabType = "all" | "zones" | "classes" | "recovery";

export default function Facilities() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const tabs: { id: TabType; label: string }[] = [
    { id: "all", label: "ALL FACILITIES" },
    { id: "zones", label: "TRAINING ZONES & EQUIPMENT" },
    { id: "classes", label: "CLASSES & PROGRAMS" },
    { id: "recovery", label: "CHANGING ROOM & RECOVERY" },
  ];

  return (
    <section id="facilities" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Dumbbell size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              WORLD-CLASS SETUP
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            OUR <span className="text-brand-yellow">FACILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mx-auto mb-4 shadow-[0_0_10px_#FFD000]" />
          <p className="text-brand-gray text-base sm:text-lg">
            Explore our state-of-the-art multi-floor strength training facility, diverse workout programs, and premium recovery amenities in Vadodara.
          </p>
        </div>

        {/* Highlighted Banner: Nutrition & Workout Plan */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 relative overflow-hidden rounded-2xl border-2 border-brand-yellow/40 bg-gradient-to-br from-brand-charcoal via-brand-card to-brand-black p-6 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(255,208,0,0.12)] group hover:border-brand-yellow transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none group-hover:bg-brand-yellow/15 transition-all duration-500" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-brand-black font-extrabold text-[11px] tracking-widest uppercase rounded mb-3 shadow-[0_0_12px_rgba(255,208,0,0.4)]">
                <Sparkles size={13} />
                CUSTOMIZED ADVANTAGE
              </div>
              
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-brand-white leading-tight mb-2">
                NUTRITION & WORKOUT PLAN <span className="text-brand-yellow block sm:inline">FULLY CUSTOMISED</span>
              </h3>
              
              <p className="text-brand-yellow/90 text-sm font-semibold tracking-wider uppercase mb-3">
                ACCORDING TO YOUR SPECIFIC GOALS
              </p>
              
              {/* 3 Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5 bg-brand-black/60 border border-brand-darkgray/80 px-3.5 py-2.5 rounded-lg">
                  <CheckCircle2 size={16} className="text-brand-yellow shrink-0" />
                  <span className="text-xs font-medium text-brand-white">Custom Meal Plans</span>
                </div>
                <div className="flex items-center gap-2.5 bg-brand-black/60 border border-brand-darkgray/80 px-3.5 py-2.5 rounded-lg">
                  <Target size={16} className="text-brand-yellow shrink-0" />
                  <span className="text-xs font-medium text-brand-white">Targeted Workout Splits</span>
                </div>
                <div className="flex items-center gap-2.5 bg-brand-black/60 border border-brand-darkgray/80 px-3.5 py-2.5 rounded-lg">
                  <Flame size={16} className="text-brand-yellow shrink-0" />
                  <span className="text-xs font-medium text-brand-white">Progress & Form Guidance</span>
                </div>
              </div>
            </div>

            {/* Graphic Badge */}
            <div className="flex lg:flex-col items-center justify-center gap-3 shrink-0 self-start lg:self-center border-t lg:border-t-0 lg:border-l border-brand-darkgray/80 pt-4 lg:pt-0 lg:pl-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-black border-2 border-brand-yellow/50 flex items-center justify-center text-brand-yellow shadow-[0_0_20px_rgba(255,208,0,0.25)] group-hover:scale-105 transition-transform">
                <Target size={34} />
              </div>
              <div className="text-left lg:text-center">
                <span className="font-heading text-lg text-brand-yellow block leading-none">100% TAILORED</span>
                <span className="text-[10px] text-brand-gray tracking-wider uppercase font-semibold">FOR REAL RESULTS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 border ${
                  isActive
                    ? "bg-brand-yellow text-brand-black border-brand-yellow shadow-[0_0_15px_rgba(255,208,0,0.4)]"
                    : "bg-brand-charcoal/80 text-brand-gray border-brand-darkgray hover:border-brand-yellow/60 hover:text-brand-white"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT: SECTION 1 - TRAINING ZONES & EQUIPMENT (Existing Facilities + Machinery) */}
        {(activeTab === "all" || activeTab === "zones") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-7 bg-brand-yellow rounded-full shadow-[0_0_8px_#FFD000]" />
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-brand-white">
                  TRAINING ZONES & <span className="text-brand-yellow">EQUIPMENT</span>
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray">
                  Heavy-duty power racks, bio-mechanically engineered machines, and functional turf spaces.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {trainingZones.map((card, idx) => (
                <motion.div
                  key={card.title + idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-brand-charcoal/80 backdrop-blur-md border border-brand-darkgray hover:border-brand-yellow rounded-xl overflow-hidden group transition-all duration-300 shadow-xl flex flex-col"
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
                      <h4 className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-2">
                        {card.title}
                      </h4>
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
          </motion.div>
        )}

        {/* TAB CONTENT: SECTION 2 - SPECIALIZED TRAINING & CLASSES */}
        {(activeTab === "all" || activeTab === "classes") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-7 bg-brand-yellow rounded-full shadow-[0_0_8px_#FFD000]" />
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-brand-white">
                  SPECIALIZED <span className="text-brand-yellow">TRAINING & CLASSES</span>
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray">
                  Diverse training disciplines and coach-led group workouts engineered to build strength, agility, and stamina.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specializedPrograms.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-brand-card/75 backdrop-blur-md border border-brand-darkgray hover:border-brand-yellow p-6 rounded-xl relative group transition-all duration-300 shadow-lg flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-brand-yellow/5 rounded-full blur-2xl group-hover:bg-brand-yellow/15 transition-all duration-500" />
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-black border border-brand-yellow/30 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black transition-all shadow-[0_0_12px_rgba(255,208,0,0.15)]">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold tracking-wider text-brand-yellow/90 bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-0.5 rounded uppercase">
                          {item.tag}
                        </span>
                      </div>

                      <h4 className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-2">
                        {item.title}
                      </h4>

                      <p className="text-brand-gray text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-darkgray/40 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wider text-brand-gray/80 group-hover:text-brand-yellow transition-colors uppercase">
                        FACILITY PROGRAM
                      </span>
                      <Sparkles size={13} className="text-brand-yellow/60 group-hover:text-brand-yellow transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* TAB CONTENT: SECTION 3 - CHANGING ROOM & RECOVERY FACILITIES */}
        {(activeTab === "all" || activeTab === "recovery") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1.5 h-7 bg-brand-yellow rounded-full shadow-[0_0_8px_#FFD000]" />
              <div>
                <div className="inline-block text-[10px] font-bold text-brand-yellow tracking-widest uppercase mb-1">
                  PREMIUM HYGIENE & WELLNESS
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-brand-white">
                  WE ARE ALSO PROVIDING <span className="text-brand-yellow">CHANGING ROOM FACILITIES</span>
                </h3>
                <p className="text-xs sm:text-sm text-brand-gray">
                  Complete locker room comforts and post-workout recovery therapies designed for your hygiene and restoration.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recoveryAmenities.map((item, idx) => {
                const Icon = item.icon;
                const isIceBath = Boolean(item.extraBadge);
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -6 }}
                    className={`backdrop-blur-md p-6 rounded-xl relative group transition-all duration-300 shadow-xl flex flex-col justify-between overflow-hidden border ${
                      isIceBath
                        ? "bg-gradient-to-b from-brand-card to-brand-black border-brand-yellow/50 hover:border-brand-yellow shadow-[0_0_20px_rgba(255,208,0,0.15)]"
                        : "bg-brand-card/75 border-brand-darkgray hover:border-brand-yellow"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/5 rounded-full blur-xl group-hover:bg-brand-yellow/15 transition-all" />

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                          isIceBath
                            ? "bg-brand-yellow text-brand-black shadow-[0_0_15px_rgba(255,208,0,0.3)]"
                            : "bg-brand-black border border-brand-yellow/30 text-brand-yellow group-hover:bg-brand-yellow group-hover:text-brand-black"
                        }`}>
                          <Icon size={22} />
                        </div>
                        {item.extraBadge ? (
                          <span className="text-[11px] font-black tracking-wider bg-brand-yellow text-brand-black px-2.5 py-1 rounded shadow-[0_0_10px_rgba(255,208,0,0.4)] uppercase">
                            {item.extraBadge}
                          </span>
                        ) : (
                          <span className="text-[10px] font-bold tracking-wider text-brand-yellow/90 bg-brand-yellow/10 border border-brand-yellow/20 px-2.5 py-0.5 rounded uppercase">
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <h4 className="font-heading text-2xl uppercase tracking-wider text-brand-white group-hover:text-brand-yellow transition-colors mb-2">
                        {item.title}
                      </h4>

                      <p className="text-brand-gray text-sm leading-relaxed mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-brand-darkgray/40 flex items-center justify-between">
                      <span className="text-[11px] font-semibold tracking-wider text-brand-yellow uppercase">
                        {isIceBath ? "CRYOTHERAPY" : "COMPLIMENTARY"}
                      </span>
                      <Icon size={14} className="text-brand-gray group-hover:text-brand-yellow transition-colors" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
