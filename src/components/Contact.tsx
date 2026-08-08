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

          {/* Right Column: Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-brand-card border border-brand-darkgray rounded-2xl p-8 shadow-xl relative"
          >
            <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white mb-2">
              GET IN TOUCH
            </h3>
            <p className="text-brand-gray text-xs mb-8">
              Fill out your details below to request a call back from our training desk.
            </p>

            {submitted ? (
              <div className="p-8 bg-brand-charcoal border border-brand-yellow rounded-xl text-center space-y-4 animate-fadeIn">
                <CheckCircle2 size={48} className="text-brand-yellow mx-auto" />
                <h4 className="font-heading text-2xl text-brand-white">CALL BACK REQUESTED!</h4>
                <p className="text-sm text-brand-gray">
                  Thank you, <strong className="text-brand-yellow">{formData.name || "Member"}</strong>. Our team at The BeingStrong Fitness will reach out to you shortly on <strong className="text-brand-white">{formData.phone}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-brand-black border border-brand-darkgray focus:border-brand-yellow text-brand-white rounded outline-none transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-brand-black border border-brand-darkgray focus:border-brand-yellow text-brand-white rounded outline-none transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">
                      FITNESS GOAL
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3.5 bg-brand-black border border-brand-darkgray focus:border-brand-yellow text-brand-white rounded outline-none transition-colors text-sm"
                    >
                      <option>Strength & Muscle Gain</option>
                      <option>Fat Loss & Toning</option>
                      <option>General Fitness & Wellness</option>
                      <option>Personal Training</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">
                      PREFERRED TRAINING TIME
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-4 py-3.5 bg-brand-black border border-brand-darkgray focus:border-brand-yellow text-brand-white rounded outline-none transition-colors text-sm"
                    >
                      <option>Morning (6 AM - 10 AM)</option>
                      <option>Afternoon (11 AM - 4 PM)</option>
                      <option>Evening (5 PM - 10 PM)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gray uppercase tracking-widest mb-2">
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fitness targets..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 bg-brand-black border border-brand-darkgray focus:border-brand-yellow text-brand-white rounded outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-yellow text-brand-black font-heading text-xl tracking-wider hover:bg-brand-yellow-hover transition-all flex items-center justify-center gap-2 rounded-sm shadow-[0_0_20px_rgba(255,208,0,0.3)]"
                >
                  <Send size={20} />
                  REQUEST A CALL BACK
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
