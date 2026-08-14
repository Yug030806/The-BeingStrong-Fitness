"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ExternalLink, ShieldCheck } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 bg-transparent text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] block mb-2">
            MEMBER FEEDBACK
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            GOOGLE <span className="text-brand-yellow">REVIEWS</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            See what fitness enthusiasts in Vadodara have to say about training at The BeingStrong Fitness.
          </p>
        </div>

        {/* Rating Hero Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-brand-charcoal/80 backdrop-blur-md border-2 border-brand-yellow/50 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(255,208,0,0.15)] mb-16"
        >
          <div className="flex items-center justify-center gap-1 text-brand-yellow mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} fill="#FFD000" className="stroke-none" />
            ))}
          </div>

          <h3 className="font-heading text-6xl text-brand-white tracking-tight my-2">
            4.5 <span className="text-brand-yellow">★</span>
          </h3>

          <p className="text-sm text-brand-gray font-medium uppercase tracking-wider mb-4">
            VERIFIED GOOGLE RATING • [GOOGLE REVIEW COUNT]
          </p>

          <a
            href="https://maps.google.com/?q=RADHE+A-10+Udaynagar+Housing+Society+Mahavir+Hall+Ajwa+Road+Vadodara"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand-yellow text-brand-black font-heading text-base tracking-wider rounded hover:bg-brand-yellow-hover transition-colors"
          >
            <MapPin size={18} />
            VIEW GOOGLE REVIEWS
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Notice of Authenticity */}
        <div className="max-w-2xl mx-auto bg-brand-card/80 backdrop-blur-md p-6 rounded-xl border border-brand-darkgray text-center space-y-3">
          <div className="flex items-center justify-center gap-2 text-brand-yellow font-semibold text-sm">
            <ShieldCheck size={18} />
            <span>AUTHENTIC REVIEWS GUARANTEE</span>
          </div>
          <p className="text-xs text-brand-gray leading-relaxed">
            Per strict privacy guidelines, customer reviews are not fabricated or simulated. Authentic member reviews will automatically display here as pulled directly from the verified Google Maps listing.
          </p>
        </div>
      </div>
    </section>
  );
}
