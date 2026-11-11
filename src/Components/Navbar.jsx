import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const MAK_YELLOW = "#FACC15";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["Home", "home"],
    ["About", "about"],
    ["Our Cabs", "cabs"],
    ["Trip Types", "trips"],
    ["Packages", "packages"],
    ["Contact", "footer"],
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-jakarta ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-gray-950 border-b border-gray-100"
          : "bg-black/40 backdrop-blur-md py-4 text-white border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-14 flex justify-between items-center">

        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex flex-col group"
        >
          <div className={`text-2xl sm:text-3xl font-bold tracking-tight flex items-center font-outfit transition-colors ${
            scrolled ? "text-gray-950" : "text-white"
          }`}>
            MAK
            <span
              className="inline-block transition-transform duration-300 group-hover:scale-125 ml-0.5"
              style={{ color: MAK_YELLOW }}
            >
              .
            </span>
          </div>
          <span className={`text-[8px] sm:text-[9px] font-bold tracking-[2.5px] uppercase -mt-1 font-jakarta transition-colors ${
            scrolled ? "text-gray-500" : "text-gray-400"
          }`}>
            TAXI
          </span>
        </motion.a>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map(([name, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative text-sm font-semibold transition-colors py-1 group ${
                scrolled
                  ? "text-gray-700 hover:text-black"
                  : "text-gray-200 hover:text-yellow-400"
              }`}
            >
              <span>{name}</span>
              <span
                className="absolute bottom-0 left-0 w-0 h-[2.5px] rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: MAK_YELLOW }}
              />
            </a>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-5">
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-2.5 rounded-full font-bold text-sm text-black flex items-center gap-2 shadow-md shadow-yellow-400/25 transition-all cursor-pointer"
            style={{ backgroundColor: MAK_YELLOW }}
          >
            <Download size={16} />
            <span>Download App</span>
          </motion.a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`lg:hidden p-2 rounded-xl transition ${
            scrolled
              ? "text-gray-900 hover:bg-gray-100"
              : "text-white hover:bg-white/10"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* MOBILE MENU ACCORDION */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white/98 backdrop-blur-xl border-t border-gray-100 px-6 pb-6 pt-3 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {links.map(([name, id], idx) => (
                <motion.a
                  key={id}
                  href={`#${id}`}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="py-2.5 px-3 rounded-xl font-semibold text-gray-800 hover:bg-yellow-50 hover:text-black transition"
                >
                  {name}
                </motion.a>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-black shadow-md"
                style={{ backgroundColor: MAK_YELLOW }}
              >
                <Download size={17} />
                <span>Download App</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
