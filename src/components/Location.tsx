"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Instagram } from "lucide-react";

export default function Location() {
  const mapSearchUrl = "https://maps.google.com/?q=3rd+4th+5th+6th+Floor+RADHE+A-10+Udaynagar+Housing+Society+Mahavir+Hall+Ajwa+Road+Vadodara+Gujarat+390019";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.077651034444!2d73.2285!3d22.3135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5a468d66007%3A0x28f99e3a6a12345!2sAjwa%20Rd%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <section className="relative py-24 bg-brand-charcoal text-brand-white border-t border-brand-darkgray/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-brand-yellow uppercase tracking-[0.3em] block mb-2">
            LOCATION & MAP
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-none mb-4">
            FIND <span className="text-brand-yellow">US</span>
          </h2>
          <p className="text-brand-gray text-base sm:text-lg">
            Visit our multi-floor gym located centrally in Vadodara, Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Exact Address Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-brand-black border-2 border-brand-darkgray hover:border-brand-yellow/50 rounded-2xl p-8 flex flex-col justify-between shadow-2xl transition-colors"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-brand-yellow/10 border border-brand-yellow flex items-center justify-center text-brand-yellow mb-6">
                <MapPin size={24} />
              </div>

              <span className="text-xs font-bold text-brand-yellow uppercase tracking-widest block mb-1">
                HEADQUARTERS ADDRESS
              </span>

              <h3 className="font-heading text-3xl uppercase tracking-wider text-brand-white mb-4">
                THE BEINGSTRONG FITNESS
              </h3>

              <address className="not-italic text-brand-gray text-base leading-relaxed space-y-1 mb-6 border-l-2 border-brand-yellow pl-4">
                <p className="text-brand-white font-semibold">3rd, 4th, 5th, & 6th Floor,</p>
                <p>RADHE A-10 Udaynagar Housing Society,</p>
                <p>Mahavir Hall, Ajwa Road,</p>
                <p className="text-brand-white font-medium">Vadodara, Gujarat, India 390019</p>
              </address>

              <div className="space-y-3 border-t border-brand-darkgray pt-6 mb-8">
                <div className="flex items-center gap-3 text-sm text-brand-white">
                  <Phone size={18} className="text-brand-yellow shrink-0" />
                  <span>+91 97240 73707</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-white">
                  <Instagram size={18} className="text-brand-yellow shrink-0" />
                  <span>@the_beingstrong_fitness</span>
                </div>
              </div>
            </div>

            <a
              href={mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 bg-brand-yellow text-brand-black font-heading text-xl tracking-wider hover:bg-brand-yellow-hover transition-colors flex items-center justify-center gap-2 rounded-sm shadow-[0_0_15px_rgba(255,208,0,0.3)]"
            >
              <Navigation size={20} />
              GET DIRECTIONS
            </a>
          </motion.div>

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 h-[420px] lg:h-auto rounded-2xl overflow-hidden border-2 border-brand-darkgray relative shadow-2xl"
          >
            <iframe
              title="The BeingStrong Fitness Map Location"
              src={embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(125%)" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
