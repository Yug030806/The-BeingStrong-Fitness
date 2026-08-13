"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { IMAGE_QUALITY, imageSizes } from "@/lib/images";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "FACILITIES", href: "#facilities" },
  { name: "TRAINERS", href: "#trainers" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "PT PLANS", href: "#personal-training" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const scrollY = window.scrollY;
    const { overflow, position, top, width, touchAction } =
      document.body.style;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      document.body.style.touchAction = touchAction;
      window.scrollTo(0, scrollY);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-brand-darkgray py-3 shadow-xl"
          : "bg-gradient-to-b from-brand-black/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105 transition-transform">
            <Image
              src="/images/the_beingstrong_logo.png"
              alt="The BeingStrong Fitness Logo"
              fill
              priority
              quality={100}
              unoptimized
              sizes={imageSizes.logo}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-xl sm:text-2xl text-brand-white tracking-wider leading-none">
              THE <span className="text-brand-yellow">BEINGSTRONG</span>
            </span>
            <span className="text-[10px] text-brand-gray tracking-[0.25em] font-semibold leading-tight">
              FITNESS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold tracking-widest text-brand-white hover:text-brand-yellow transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+919724073707"
            className="flex items-center gap-2 text-xs font-semibold text-brand-gray hover:text-brand-yellow transition-colors"
          >
            <Phone size={14} className="text-brand-yellow" />
            +91 97240 73707
          </a>
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-brand-yellow text-brand-black font-heading tracking-wider text-base hover:bg-brand-yellow-hover hover:scale-105 active:scale-95 transition-all shadow-[0_0_15px_rgba(255,208,0,0.3)] rounded-sm"
          >
            JOIN NOW
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="lg:hidden relative z-[60] p-2 text-brand-white hover:text-brand-yellow transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ease-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label="Close menu"
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ease-out ${
            mobileMenuOpen ? "animate-menu-fade-in" : ""
          }`}
        />

        {/* Drawer */}
        <div
          className={`absolute inset-x-0 top-[65px] max-h-[calc(100dvh-65px)] overflow-y-auto overscroll-contain bg-brand-black/98 border-b border-brand-darkgray p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={closeMobileMenu}
              className={`text-sm font-bold tracking-widest text-brand-white hover:text-brand-yellow py-2 border-b border-brand-darkgray/50 transition-all duration-300 ease-out ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
              style={{
                transitionDelay: mobileMenuOpen ? `${80 + index * 40}ms` : "0ms",
              }}
            >
              {link.name}
            </Link>
          ))}
          <div
            className={`pt-4 flex flex-col gap-3 transition-all duration-300 ease-out ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "400ms" : "0ms" }}
          >
            <a
              href="tel:+919724073707"
              className="flex items-center justify-center gap-2 py-2.5 border border-brand-darkgray text-brand-white text-sm font-semibold rounded"
            >
              <Phone size={16} className="text-brand-yellow" />
              CALL +91 97240 73707
            </a>
            <Link
              href="#contact"
              onClick={closeMobileMenu}
              className="text-center py-3 bg-brand-yellow text-brand-black font-heading text-lg tracking-wider rounded"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
