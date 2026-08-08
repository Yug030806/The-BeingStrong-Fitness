"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "FACILITIES", href: "#facilities" },
  { name: "TRAINERS", href: "#trainers" },
  { name: "MEMBERSHIP", href: "#membership" },
  { name: "GALLERY", href: "#gallery" },
  { name: "REVIEWS", href: "#reviews" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-brand-yellow group-hover:scale-105 transition-transform">
            <Image
              src="/images/logo.jpg"
              alt="The BeingStrong Fitness Logo"
              fill
              className="object-cover"
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
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-brand-white hover:text-brand-yellow transition-colors"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-brand-black/98 border-b border-brand-darkgray p-6 flex flex-col gap-4 shadow-2xl backdrop-blur-xl animate-fadeIn">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold tracking-widest text-brand-white hover:text-brand-yellow py-2 border-b border-brand-darkgray/50"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+919724073707"
              className="flex items-center justify-center gap-2 py-2.5 border border-brand-darkgray text-brand-white text-sm font-semibold rounded"
            >
              <Phone size={16} className="text-brand-yellow" />
              CALL +91 97240 73707
            </a>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-3 bg-brand-yellow text-brand-black font-heading text-lg tracking-wider rounded"
            >
              JOIN NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
