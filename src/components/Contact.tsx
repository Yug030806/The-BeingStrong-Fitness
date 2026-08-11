"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "Strength & Muscle Gain",
    time: "Morning (6 AM - 10 AM)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        goal: "Strength & Muscle Gain",
        time: "Morning (6 AM - 10 AM)",
        message: "",
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 bg-brand-black text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] block mb-2">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            READY TO <span className="text-brand-yellow">GET STRONGER?</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Call us directly, message on WhatsApp, or send an enquiry form to get started immediately.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official Gym Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-brand-charcoal border border-brand-darkgray rounded-2xl p-8 space-y-8 shadow-xl"
          >
            <div>
              <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-1">
                OFFICIAL FITNESS CENTER
              </span>
              <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white">
                THE BEINGSTRONG FITNESS
              </h3>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+919724073707"
                className="py-3 px-4 bg-brand-yellow text-brand-black font-heading text-base tracking-wider rounded hover:bg-brand-yellow-hover transition-colors flex items-center justify-center gap-2"
              >
                <Phone size={18} />
                CALL NOW
              </a>

              <a
                href="https://wa.me/919724073707?text=Hi%20The%20BeingStrong%20Fitness,%20I%20want%20to%20enquire%20about%20membership."
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 bg-[#25D366] text-white font-heading text-base tracking-wider rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                WHATSAPP
              </a>
            </div>

            <div className="space-y-6 pt-4 border-t border-brand-darkgray">
              {/* Phone Detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest font-bold block">
                    PHONE NUMBER
                  </span>
                  <a href="tel:+919724073707" className="text-lg font-bold text-brand-white hover:text-brand-yellow transition-colors">
                    +91 97240 73707
                  </a>
                </div>
              </div>

              {/* Instagram Detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0">
                  <Instagram size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest font-bold block">
                    INSTAGRAM HANDLE
                  </span>
                  <a
                    href="https://www.instagram.com/the_beingstrong_fitness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-brand-white hover:text-brand-yellow transition-colors"
                  >
                    @the_beingstrong_fitness
                  </a>
                </div>
              </div>

              {/* Address Detail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center text-brand-yellow shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest font-bold block">
                    LOCATION ADDRESS
                  </span>
                  <address className="not-italic text-sm text-brand-gray leading-relaxed">
                    3rd, 4th, 5th, & 6th Floor,<br />
                    RADHE A-10 Udaynagar Housing Society,<br />
                    Mahavir Hall, Ajwa Road,<br />
                    Vadodara, Gujarat, India 390019
                  </address>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-brand-darkgray text-center">
              <a
                href="https://maps.google.com/?q=RADHE+A-10+Udaynagar+Housing+Society+Mahavir+Hall+Ajwa+Road+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-brand-yellow uppercase tracking-widest hover:underline"
              >
                OPEN IN GOOGLE MAPS →
              </a>
            </div>
          </motion.div>

          {/* Right Column: Official Gym Showcase replacing the callback request option */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-gradient-to-br from-brand-card via-brand-charcoal to-brand-black border-2 border-brand-yellow/40 rounded-2xl p-8 sm:p-12 shadow-[0_0_50px_rgba(255,208,0,0.12)] relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-brand-yellow text-brand-black font-extrabold text-xs tracking-widest uppercase rounded-sm shadow-md">
                OFFICIAL FITNESS CENTER
              </div>

              <h3 className="font-heading text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-brand-white leading-none">
                THE <span className="text-brand-yellow">BEINGSTRONG</span> FITNESS
              </h3>

              <p className="text-brand-gray text-base sm:text-lg leading-relaxed">
                Vadodara’s ultimate high-performance workout center engineered for serious lifters, functional training, and transformative results.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-brand-black/60 border border-brand-darkgray rounded-xl">
                  <span className="text-brand-yellow font-heading text-xl block mb-1">4 FLOOR FACILITY</span>
                  <p className="text-xs text-brand-gray">Spacious workout areas covering 3rd, 4th, 5th, & 6th floors.</p>
                </div>
                <div className="p-4 bg-brand-black/60 border border-brand-darkgray rounded-xl">
                  <span className="text-brand-yellow font-heading text-xl block mb-1">PREMIUM EQUIPMENT</span>
                  <p className="text-xs text-brand-gray">Heavy duty strength machinery and modern cardio setup.</p>
                </div>
                <div className="p-4 bg-brand-black/60 border border-brand-darkgray rounded-xl">
                  <span className="text-brand-yellow font-heading text-xl block mb-1">EXPERT COACHING</span>
                  <p className="text-xs text-brand-gray">Certified trainers for custom goals & guidance.</p>
                </div>
                <div className="p-4 bg-brand-black/60 border border-brand-darkgray rounded-xl">
                  <span className="text-brand-yellow font-heading text-xl block mb-1">PRIME LOCATION</span>
                  <p className="text-xs text-brand-gray">Conveniently located at Mahavir Hall, Ajwa Road.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-brand-darkgray flex flex-wrap items-center justify-between gap-4 relative z-10">
              <span className="text-xs text-brand-gray font-bold tracking-widest uppercase">
                STAY STRONG & FIT WITH US
              </span>
              <a
                href="tel:+919724073707"
                className="px-6 py-3 bg-brand-yellow text-brand-black font-heading text-lg tracking-wider rounded hover:bg-brand-yellow-hover transition-colors shadow-lg"
              >
                CONNECT WITH US
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
