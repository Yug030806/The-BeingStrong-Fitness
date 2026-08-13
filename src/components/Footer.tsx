"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Instagram, ArrowUp } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const quickLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "FACILITIES", href: "#facilities" },
  { name: "TRAINERS", href: "#trainers" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "PT PLANS", href: "#personal-training" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-brand-black text-brand-white border-t-2 border-brand-yellow/30">
      {/* Back to Top */}
      <div className="flex justify-center -mt-6 relative z-10">
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-brand-yellow text-brand-black flex items-center justify-center hover:bg-brand-yellow-hover hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,208,0,0.5)]"
          aria-label="Back to top"
        >
          <ArrowUp size={22} />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-yellow">
                <Image
                  src="/images/the_beingstrong_logo.png"
                  alt="The BeingStrong Fitness Logo"
                  fill
                  quality={100}
                  unoptimized
                  sizes={imageSizes.logo}
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-heading text-xl text-brand-white tracking-wider block leading-none">
                  THE <span className="text-brand-yellow">BEINGSTRONG</span>
                </span>
                <span className="text-[10px] text-brand-gray tracking-[0.25em] font-semibold">
                  FITNESS
                </span>
              </div>
            </div>
            <p className="text-brand-gray text-sm leading-relaxed mb-4">
              STAY STRONG AND FIT
            </p>
            <p className="text-brand-gray text-xs leading-relaxed">
              A dedicated fitness centre in Vadodara focused on strength, discipline, and consistent training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl text-brand-yellow tracking-wider uppercase mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-gray hover:text-brand-yellow transition-colors font-medium tracking-wider"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xl text-brand-yellow tracking-wider uppercase mb-6">
              CONTACT
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+919724073707"
                className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-yellow transition-colors"
              >
                <Phone size={16} className="text-brand-yellow shrink-0" />
                +91 97240 73707
              </a>
              <a
                href="https://www.instagram.com/the_beingstrong_fitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-brand-gray hover:text-brand-yellow transition-colors"
              >
                <Instagram size={16} className="text-brand-yellow shrink-0" />
                @the_beingstrong_fitness
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="font-heading text-xl text-brand-yellow tracking-wider uppercase mb-6">
              ADDRESS
            </h4>
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-yellow shrink-0 mt-1" />
              <address className="not-italic text-sm text-brand-gray leading-relaxed">
                RADHE A-10 Udaynagar Housing Society,<br />
                Mahavir Hall, Ajwa Road,<br />
                Vadodara, Gujarat 390019
              </address>
            </div>
          </div>
        </div>

        {/* Barbell Divider */}
        <div className="flex items-center gap-2 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
          <div className="w-3 h-5 bg-brand-yellow/40 rounded-sm" />
          <div className="w-8 h-2 bg-brand-darkgray border border-brand-yellow/30 rounded-sm" />
          <div className="w-3 h-5 bg-brand-yellow/40 rounded-sm" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-brand-yellow/40 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="text-center space-y-2">
          <p className="text-xs text-brand-gray">
            &copy; 2026 The BeingStrong Fitness. All Rights Reserved.
          </p>
          <p className="text-[10px] text-brand-gray/50 tracking-wider uppercase">
            STAY STRONG AND FIT — VADODARA, GUJARAT, INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
