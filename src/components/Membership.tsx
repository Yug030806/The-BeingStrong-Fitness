"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Flame } from "lucide-react";

const plans = [
  {
    name: "1 MONTH",
    tagline: "Begin your fitness journey",
    price: "₹2,499",
    period: "1 MONTH",
    isRecommended: false,
    hasBorder: false,
    badge: null,
    features: [
      "Access to All 4 Gym Floors",
      "Full Equipment & Free Weights Zone",
      "Locker & Shower Access",
      "General Floor Guidance",
    ],
  },
  {
    name: "3 MONTHS",
    tagline: "Great for medium-term fitness consistency",
    price: "₹4,499",
    period: "3 MONTHS",
    isRecommended: false,
    hasBorder: false,
    badge: null,
    features: [
      "Full Multi-Floor Gym Access",
      "Comprehensive Equipment & Cardio Zone",
      "Custom Workout Plan Guidance",
      "Progress Assessment",
      "Locker & Shower Access",
    ],
  },
  {
    name: "6 MONTHS",
    tagline: "Most popular for dedicated transformation",
    price: "₹5,499",
    period: "6 MONTHS",
    isRecommended: true,
    hasBorder: true,
    badge: "MOST POPULAR",
    features: [
      "Unlimited Multi-Floor Access",
      "Priority Floor Support",
      "Personalized Routine Design",
      "Diet & Nutrition Consultation",
      "Locker & Shower Facilities",
      "Guest Pass Allowance",
    ],
  },
  {
    name: "12 MONTHS",
    tagline: "Best value for full year transformation",
    price: "₹8,499",
    period: "12 MONTHS",
    isRecommended: false,
    hasBorder: true,
    badge: "VALUE FOR MONEY",
    features: [
      "Unlimited Multi-Floor Access All Year",
      "Priority Floor Support & Guidance",
      "Customized Routine & Goal Tracking",
      "Diet & Nutrition Consultation",
      "Locker & Shower Access",
      "Guest Pass Allowance",
    ],
  },
];

export default function Membership() {
  return (
    <section id="membership" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Flame size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              JOIN THE BEINGSTRONG FAMILY
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            GENERAL FITNESS <span className="text-brand-yellow">PLANS</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Choose the membership plan that aligns with your fitness goals and schedule.
          </p>

          {/* GST Notice */}
          <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-brand-yellow bg-brand-black px-4 py-1.5 rounded-full border border-brand-darkgray tracking-wider uppercase">
            <span>* 18% Extra GST Applicable</span>
          </div>
        </div>

        {/* 4 Membership Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-md ${
                plan.hasBorder || plan.isRecommended
                  ? "bg-brand-card/85 border-2 border-brand-yellow shadow-[0_0_30px_rgba(255,208,0,0.2)]"
                  : "bg-brand-black/75 border border-brand-darkgray hover:border-brand-yellow/50"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-heading text-xs uppercase px-4 py-1 rounded-full tracking-widest font-bold shadow-md whitespace-nowrap ${
                    plan.isRecommended
                      ? "bg-brand-yellow text-brand-black"
                      : "bg-brand-yellow text-brand-black border border-brand-yellow/60"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-brand-gray text-xs mb-6">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mb-6 p-4 rounded-lg bg-brand-charcoal border border-brand-darkgray text-center">
                  <span className="font-heading text-3xl text-brand-yellow block tracking-wider">
                    {plan.price}/-
                  </span>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest block mt-1">
                    DURATION: {plan.period}
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
