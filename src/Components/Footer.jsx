import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

export default function Footer() {
  const links = [
    ["Home", "#home"],
    ["About Us", "#about"],
    ["Our Cabs", "#cabs"],
    ["Trip Types", "#trips"],
    ["Packages", "#packages"],
  ];

  const services = [
    "One Way Trip",
    "Outstation",
    "Hourly Rental",
  ];

  return (
    <footer
      id="footer"
      className="bg-white pt-16 border-t border-gray-100 relative overflow-hidden font-jakarta"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14">

          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col group">
              <div className="text-3xl font-bold text-gray-950 tracking-tight flex items-center font-outfit">
                MAK
                <span
                  className="inline-block transition-transform duration-300 group-hover:scale-125 ml-0.5"
                  style={{ color: MAK_YELLOW }}
                >
                  .
                </span>
              </div>
              <span className="text-[9px] font-bold tracking-[2.5px] text-gray-500 uppercase -mt-1 font-jakarta">
                TAXI
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mt-5 font-normal">
              Madurai's premier taxi and travel booking service. Punctual, transparent,
              sanitized fleet with zero surge pricing guarantee.
            </p>

            <div className="flex items-center gap-2 mt-6 text-xs font-semibold text-gray-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>24/7 Booking & Support Desk</span>
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bold text-base uppercase tracking-wider text-gray-950 mb-5 font-outfit">
              Quick Links
            </h3>

            <div className="space-y-3">
              {links.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black font-medium transition-all"
                >
                  <ArrowUpRight
                    size={14}
                    className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                  <span>{name}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* OUR SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-base uppercase tracking-wider text-gray-950 mb-5 font-outfit">
              Our Services
            </h3>

            <div className="space-y-3">
              {services.map((service) => (
                <a
                  key={service}
                  href="#trips"
                  className="group flex items-center gap-2 text-sm text-gray-600 hover:text-black font-medium transition-all"
                >
                  <ArrowUpRight
                    size={14}
                    className="text-gray-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                  <span>{service}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-base uppercase tracking-wider text-gray-950 mb-5 font-outfit">
              Contact Desk
            </h3>

            <div className="space-y-4">
              {/* LOCATION */}
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-600 shrink-0 mt-0.5" />
                <p className="text-sm font-semibold text-gray-600">
                  Madurai, Tamil Nadu, India
                </p>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-600 shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-sm font-bold text-gray-800 hover:text-black transition"
                >
                  +91 98765 43210
                </a>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-600 shrink-0" />
                <a
                  href="mailto:info@makjourney.com"
                  className="text-sm font-semibold text-gray-600 hover:text-black transition"
                >
                  info@makjourney.com
                </a>
              </div>
            </div>

            {/* WHATSAPP ACTION BUTTON */}
            <motion.a
              href="https://wa.me/919876543210?text=Hi%20MAK%20TAXI"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-black shadow-md transition-all"
              style={{ backgroundColor: MAK_YELLOW }}
            >
              <MessageCircle size={16} />
              <span>WhatsApp Us</span>
              <ArrowUpRight size={15} />
            </motion.a>
          </motion.div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500 font-medium">
          <p>
            © {new Date().getFullYear()} MAK TAXI • All Rights Reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed for Better Journeys in Madurai
          </p>
        </div>

      </div>
    </footer>
  );
}
