import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const MAK_YELLOW = "#FACC15";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section on scroll
      const sections = ["home", "about", "cabs", "trips", "packages", "footer"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Our Cabs", id: "cabs" },
    { name: "Trip Types", id: "trips" },
    { name: "Packages", id: "packages" },
    { name: "Contact", id: "footer" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-jakarta ${
        scrolled
          ? "bg-[#08080c]/90 backdrop-blur-2xl py-3 border-b border-yellow-500/15 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          : "bg-[#08080c]/60 backdrop-blur-xl py-4 border-b border-white/[0.08]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-12 flex justify-between items-center">

        {/* LOGO - LUXURY MAK TAXI BRAND */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          {/* Subtle Ambient Glow behind Logo */}
          <div className="relative">
            <div className="flex items-baseline">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-outfit drop-shadow-[0_2px_10px_rgba(255,255,255,0.15)]">
                MAK
              </span>
              <span
                className="text-2xl sm:text-3xl font-extrabold ml-0.5 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12 inline-block drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                style={{ color: MAK_YELLOW }}
              >
                .
              </span>
            </div>
            <div className="flex items-center gap-1.5 -mt-1">
              <span className="text-[8px] sm:text-[9px] font-extrabold tracking-[3px] uppercase text-amber-400 font-jakarta">
                TAXI
              </span>
              <span className="w-1 h-1 rounded-full bg-yellow-400/80 animate-pulse hidden sm:inline-block" />
            </div>
          </div>
        </motion.a>

        {/* DESKTOP NAVIGATION DOCK */}
        <div className="hidden lg:flex items-center gap-1.5 bg-white/[0.04] p-1.5 rounded-full border border-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)]">
          {links.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-black font-bold shadow-md shadow-yellow-400/20"
                    : "text-neutral-300 hover:text-white hover:bg-white/[0.08]"
                }`}
                style={isActive ? { backgroundColor: MAK_YELLOW } : {}}
              >
                <span className="relative z-10 flex items-center gap-1">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>

        {/* RIGHT ACTION: DOWNLOAD APP */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wider text-neutral-950 overflow-hidden cursor-pointer shadow-[0_0_22px_rgba(250,204,21,0.35)] hover:shadow-[0_0_32px_rgba(250,204,21,0.6)] border border-yellow-300/40 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)",
            }}
          >
            {/* Shimmer Light Flare */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

            <Download size={14} className="stroke-[2.5] transition-transform duration-300 group-hover:translate-y-0.5" />
            <span className="relative z-10">Download App</span>
          </motion.a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="lg:hidden p-2 rounded-xl text-neutral-200 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={22} className="text-yellow-400" /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* MOBILE MENU DRAWER - CONSISTENT LUXURY DARK THEME */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-2xl border-t border-white/10 px-6 pb-6 pt-4 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {links.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    onClick={() => setOpen(false)}
                    className={`py-2.5 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-yellow-400 text-neutral-950 font-bold"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-wider text-neutral-950 shadow-[0_0_20px_rgba(250,204,21,0.35)]"
                style={{
                  background: "linear-gradient(135deg, #FACC15 0%, #F59E0B 100%)",
                }}
              >
                <Download size={15} className="stroke-[2.5]" />
                <span>Download App</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}