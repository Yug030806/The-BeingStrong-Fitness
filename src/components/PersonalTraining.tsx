"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, UserCheck } from "lucide-react";

const ptPlans = [
  {
    name: "1 MONTH",
    tagline: "Kickstart your transformation",
    price: "₹5,999",
    duration: "1 MONTH",
    isRecommended: false,
    features: [
      "Dedicated 1-on-1 Certified Personal Trainer",
      "Full Body Assessment & Composition Analysis",
      "Customized Exercise Protocol for Your Goal",
      "Real-time Form Correction & Injury Prevention",
      "Direct Coach Guidance & Query Support",
    ],
  },
  {
    name: "3 MONTHS",
    tagline: "Most popular for visible body transformation",
    price: "₹14,999",
    duration: "3 MONTHS",
    isRecommended: true,
    features: [
      "Dedicated 1-on-1 Certified Personal Trainer",
      "Personalized Nutrition & Macro Guidance",
      "Bi-Weekly Body Composition & Metric Reviews",
      "Progressive Overload & Strength Tracking",
      "Locker & Priority Equipment Assistance",
      "Direct WhatsApp Coach Support",
    ],
  },
  {
    name: "6 MONTHS",
    tagline: "Complete physique & athletic rebuilding",
    price: "₹27,999",
    duration: "6 MONTHS",
    isRecommended: false,
    features: [
      "Dedicated Senior Personal Fitness Coach",
      "Advanced Nutrition & Supplementation Plan",
      "Periodized Training Cycles (Hypertrophy/Fat Loss)",
      "Monthly Detailed Fitness & Fat Mass Analysis",
      "Priority Slot Reservations with Coach",
      "Continuous Habit & Lifestyle Mentorship",
    ],
  },
  {
    name: "12 MONTHS",
    tagline: "Year-round peak physical condition & elite coaching",
    price: "₹53,999",
    duration: "12 MONTHS",
    isRecommended: false,
    features: [
      "Top-Tier Head Coach Assignment",
      "Comprehensive Custom Meal & Macro Blueprint",
      "Year-Round Periodization & Peak Performance Plan",
      "Priority VIP Booking & Flexible Coach Hours",
      "Free Fitness Consultations for Family Member",
      "Full Supplement Guidance & Body Metrics Audit",
    ],
  },
];

export default function PersonalTraining() {
  return (
    <section id="personal-training" className="relative py-24 bg-brand-black text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <UserCheck size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              1-ON-1 DEDICATED COACHING
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            PERSONAL TRAINING <span className="text-brand-yellow">PLANS</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Accelerate your results with tailored workout protocols, expert form correction, and dedicated coach accountability.
          </p>

          {/* GST Notice */}
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-brand-yellow bg-brand-charcoal px-4 py-1.5 rounded-full border border-brand-darkgray tracking-wider uppercase">
            <span>* 18% Extra GST Applicable</span>
          </div>
        </div>

        {/* 4 Cards Grid - Identical structure & styling as Membership section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ptPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isRecommended
                  ? "bg-brand-card border-2 border-brand-yellow shadow-[0_0_30px_rgba(255,208,0,0.2)]"
                  : "bg-brand-charcoal border border-brand-darkgray hover:border-brand-yellow/50"
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black font-heading text-xs uppercase px-4 py-1 rounded-full tracking-widest font-bold shadow-md">
                  RECOMMENDED PLAN
                </div>
              )}

              <div>
                <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-brand-gray text-xs mb-6">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-lg bg-brand-black border border-brand-darkgray text-center">
                  <span className="font-heading text-3xl text-brand-yellow block tracking-wider">
                    {plan.price}/-
                  </span>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest block mt-1">
                    DURATION: {plan.duration}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-gray">
                      <Check size={14} className="text-brand-yellow shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="#contact"
                className={`w-full py-3.5 text-center font-heading text-lg tracking-wider rounded transition-all ${
                  plan.isRecommended
                    ? "bg-brand-yellow text-brand-black hover:bg-brand-yellow-hover shadow-[0_0_15px_rgba(255,208,0,0.3)]"
                    : "border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black"
                }`}
              >
                ENQUIRE NOW
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
