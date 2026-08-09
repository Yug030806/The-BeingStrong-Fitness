import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Dumbbell } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black text-brand-white px-4 sm:px-6">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          quality={IMAGE_QUALITY}
          sizes={imageSizes.fullWidth}
          className="object-cover opacity-20"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/95 to-brand-black" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-brand-yellow/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-yellow/30 bg-brand-charcoal/80 backdrop-blur-md mb-8">
          <Dumbbell size={14} className="text-brand-yellow" />
          <span className="text-xs font-semibold text-brand-yellow tracking-widest uppercase">
            Page Not Found
          </span>
        </div>

        <p className="font-heading text-[7rem] sm:text-[9rem] leading-none text-brand-yellow/20 select-none">
          404
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight leading-none -mt-6 sm:-mt-8 mb-4">
          WRONG <span className="text-brand-yellow">ROUTE.</span>
        </h1>

        <p className="text-brand-gray text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10">
          The page you are looking for does not exist or may have been moved.
          Head back to the homepage and keep training strong.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-yellow text-brand-black font-heading text-xl tracking-wider hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,208,0,0.35)] rounded-sm"
          >
            <Home size={20} />
            BACK TO HOME
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-brand-darkgray text-brand-gray font-semibold text-sm tracking-wider hover:border-brand-yellow hover:text-brand-yellow transition-colors rounded-sm"
          >
            CONTACT US
          </Link>
        </div>

        <p className="mt-12 text-[10px] text-brand-gray/60 tracking-[0.25em] uppercase">
          THE BEINGSTRONG FITNESS — VADODARA
        </p>
      </div>
    </main>
  );
}
