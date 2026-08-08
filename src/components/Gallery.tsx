"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Eye, Dumbbell } from "lucide-react";

const galleryImages = [
  { id: 1, src: "/images/about-gym.jpg", alt: "Multi-Floor Power Racks", category: "EQUIPMENT" },
  { id: 2, src: "/images/facility-dumbbells.jpg", alt: "Precision Dumbbell Rack", category: "FREE WEIGHTS" },
  { id: 3, src: "/images/facility-cardio.jpg", alt: "Cardio Studio Suite", category: "CARDIO" },
  { id: 4, src: "/images/hero-bg.jpg", alt: "Gym Interior Neon Atmosphere", category: "ATMOSPHERE" },
  { id: 5, src: "/images/about-gym.jpg", alt: "Strength Training Area", category: "TRAINING" },
  { id: 6, src: "/images/facility-dumbbells.jpg", alt: "Heavy Lifting Zone", category: "EQUIPMENT" },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 bg-brand-charcoal text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-md mb-3">
            <Dumbbell size={14} className="text-brand-yellow" />
            <span className="text-xs font-bold text-brand-yellow tracking-widest uppercase">
              VISUAL TOUR
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            INSIDE <span className="text-brand-yellow">BEINGSTRONG</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Take a look inside Vadodara&apos;s premier multi-floor strength center. Click any image to view in lightbox mode.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id + idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => openLightbox(idx)}
              className="relative h-72 rounded-xl overflow-hidden cursor-pointer group border border-brand-darkgray hover:border-brand-yellow transition-all shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                <div className="w-12 h-12 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center mb-2 shadow-[0_0_15px_#FFD000]">
                  <Eye size={24} />
                </div>
                <span className="font-heading text-xl text-brand-white uppercase tracking-wider text-center">
                  {img.alt}
                </span>
                <span className="text-[10px] text-brand-yellow uppercase tracking-widest mt-1">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-brand-charcoal border border-brand-yellow text-brand-yellow hover:bg-brand-yellow hover:text-brand-black transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Prev button */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-brand-charcoal border border-brand-darkgray text-brand-white hover:text-brand-yellow transition-colors z-10"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Image Preview Container */}
            <div className="relative max-w-5xl max-h-[80vh] w-full h-[60vh] rounded-2xl overflow-hidden border-2 border-brand-yellow/50">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-brand-black/80 backdrop-blur-md text-center">
                <h4 className="font-heading text-2xl text-brand-yellow tracking-wider">
                  {galleryImages[lightboxIndex].alt}
                </h4>
                <p className="text-xs text-brand-gray tracking-widest uppercase">
                  THE BEINGSTRONG FITNESS — VADODARA
                </p>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-brand-charcoal border border-brand-darkgray text-brand-white hover:text-brand-yellow transition-colors z-10"
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
