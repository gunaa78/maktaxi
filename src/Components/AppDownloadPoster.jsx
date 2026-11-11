import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Download,
  Play,
  MapPin,
  ShieldCheck,
  Zap,
  Star,
  Sparkles,
  Smartphone,
  CheckCircle2,
} from "lucide-react";
import { FaApple } from "react-icons/fa6";

const MAK_YELLOW = "#FACC15";

// Hardware-accelerated Apple iOS silky curve (Zero lag, compositor-thread native)
const smoothEase = [0.16, 1, 0.3, 1];

export default function AppDownloadPoster() {
  const containerRef = useRef(null);
  const playStoreLink = "https://play.google.com/store/apps";
  const appStoreLink = "https://www.apple.com/app-store/";

  /* ──────────────────────────────────────────────────────────
     LIGHTWEIGHT 60-120 FPS SCROLL ENGINE (ZERO LAG)
  ────────────────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Smooth GPU-friendly transforms
  const scrollRotate = useTransform(smoothProgress, [0, 1], [-15, 15]);
  const scrollPhoneY = useTransform(smoothProgress, [0, 1], [30, -30]);
  const scrollContentY = useTransform(smoothProgress, [0, 1], [-15, 15]);

  return (
    <section
      id="download"
      ref={containerRef}
      className="py-20 md:py-28 px-5 bg-white overflow-hidden border-b border-gray-100 relative transform-gpu font-jakarta"
    >
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* ── MAIN LUXURY POSTER CHASSIS ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 45 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="relative bg-gradient-to-b from-[#14141a] via-[#0d0d12] to-[#070709] text-white rounded-[38px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.35)] border border-gray-800/80 transform-gpu"
        >
          {/* ── AMBIENT FAST RADIAL GLOWS (ZERO BLUR LAG) ── */}
          <motion.div
            style={{ rotate: scrollRotate }}
            className="pointer-events-none absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full opacity-25 bg-[radial-gradient(circle,#FACC15_0%,transparent_68%)] transform-gpu"
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full opacity-20 bg-[radial-gradient(circle,#FACC15_0%,transparent_68%)]"
          />

          {/* Background Grid Pattern */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03]" />

          <div className="relative z-10 grid lg:grid-cols-12 items-center gap-10 px-6 py-14 md:px-14 md:py-20">

            {/* ── LEFT CONTENT (SWIRLS IN FROM RADIAL ORBIT ON SCROLL) ── */}
            <motion.div
              style={{ y: scrollContentY }}
              className="lg:col-span-7 transform-gpu"
            >
              {/* TOP PILL BADGE (Swirls in from top-left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, rotate: -35, x: -60, y: -30 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.65, ease: smoothEase }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border shadow-lg transform-gpu"
                style={{
                  backgroundColor: `${MAK_YELLOW}1A`,
                  borderColor: `${MAK_YELLOW}66`,
                  color: MAK_YELLOW,
                }}
              >
                <Smartphone size={14} />
                <span>OFFICIAL MOBILE BOOKING APP</span>
                <Sparkles size={13} />
              </motion.div>

              {/* MAIN HEADING (Swirls in from orbital curve) */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.85, rotate: -12, x: -70, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.1, ease: smoothEase }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-[-0.03em] mt-6 transform-gpu font-outfit"
              >
                Your Journey.
                <br />
                Your Way.
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
                  Just One Tap Away.
                </span>
              </motion.h2>

              {/* PARAGRAPH */}
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
                className="text-gray-300 text-sm md:text-base leading-relaxed mt-5 max-w-lg font-normal"
              >
                Book city cabs, schedule holiday outstation road trips, and track your chauffeur
                in real time with zero surge pricing across Madurai and Tamil Nadu.
              </motion.p>

              {/* ── 4 FEATURE PILLS (SWIRL IN FROM 4 QUADRANTS AND ASSEMBLE TOGETHER) ── */}
              <div className="grid grid-cols-2 gap-3.5 mt-8 max-w-md">
                {[
                  {
                    icon: MapPin,
                    title: "GPS Live Tracking",
                    sub: "Real-time Arrival",
                    start: { opacity: 0, scale: 0.6, rotate: -25, x: -50, y: -30 },
                  },
                  {
                    icon: ShieldCheck,
                    title: "Verified Chauffeurs",
                    sub: "Licensed & Sanitized",
                    start: { opacity: 0, scale: 0.6, rotate: 25, x: 50, y: -30 },
                  },
                  {
                    icon: Zap,
                    title: "Instant Dispatch",
                    sub: "10-Min Cab Pickup",
                    start: { opacity: 0, scale: 0.6, rotate: -25, x: -50, y: 30 },
                  },
                  {
                    icon: Star,
                    title: "Zero Surge Meter",
                    sub: "Fair Transparent Rates",
                    start: { opacity: 0, scale: 0.6, rotate: 25, x: 50, y: 30 },
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={item.start}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2 + index * 0.06,
                        ease: smoothEase,
                      }}
                      whileHover={{
                        scale: 1.04,
                        borderColor: "rgba(250, 204, 21, 0.6)",
                      }}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md transition-all duration-300 transform-gpu"
                    >
                      <div
                        className="p-2.5 rounded-xl text-black shrink-0 shadow-md"
                        style={{ backgroundColor: MAK_YELLOW }}
                      >
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block">
                          {item.title}
                        </span>
                        <span className="text-[10px] text-gray-400 font-normal block">
                          {item.sub}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* ── STORE BUTTONS (SWIRL IN FROM LEFT & RIGHT AND UNITE) ── */}
              <div className="flex flex-wrap gap-4 mt-9">
                {/* GOOGLE PLAY (Swirls from Left) */}
                <motion.a
                  href={playStoreLink}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.7, rotate: -20, x: -60, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.45, ease: smoothEase }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-3.5 bg-white text-black px-6 py-3.5 rounded-2xl transition-all shadow-xl transform-gpu"
                >
                  <Play size={24} fill="currentColor" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-600 leading-none">
                      Get it on
                    </p>
                    <p className="text-base font-bold leading-tight mt-0.5">
                      Google Play
                    </p>
                  </div>
                </motion.a>

                {/* APP STORE (Swirls from Right) */}
                <motion.a
                  href={appStoreLink}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.7, rotate: 20, x: 60, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.5, ease: smoothEase }}
                  whileHover={{ scale: 1.05, y: -2, borderColor: "rgba(250, 204, 21, 0.6)" }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-2xl transition-all backdrop-blur-md shadow-xl transform-gpu"
                >
                  <FaApple size={26} />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 leading-none">
                      Download on
                    </p>
                    <p className="text-base font-bold leading-tight mt-0.5">
                      App Store
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN: 3D PHONE WITH OPTIMIZED SWIRLING ORBIT ── */}
            <div className="lg:col-span-5 relative flex justify-center py-6">

              {/* ── OPTIMIZED 3D ORBITAL RINGS AROUND THE PHONE ── */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
                {/* Outer Golden Orbit Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[420px] h-[420px] rounded-full border border-yellow-400/25 [transform:rotateX(68deg)] transform-gpu"
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />
                </motion.div>

                {/* Inner Dashed Orbit Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-yellow-400/30 [transform:rotateX(60deg)_rotateY(15deg)] transform-gpu"
                >
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_10px_#facc15]" />
                </motion.div>
              </div>

              {/* Fast Radial Glow Behind Phone (No heavy Gaussian blur) */}
              <div
                className="absolute inset-0 rounded-full opacity-25 scale-95 pointer-events-none bg-[radial-gradient(circle,#FACC15_0%,transparent_65%)]"
              />

              {/* ── 3D PHONE MOCKUP (SWIRLS IN FROM 3D ORBIT AND ASSEMBLES) ── */}
              <motion.div
                style={{ y: scrollPhoneY }}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -30,
                  x: 90,
                  y: 70,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: smoothEase,
                }}
                className="relative z-10 w-full max-w-[285px] bg-black p-3.5 rounded-[46px] shadow-2xl border-[5px] border-gray-800 transform-gpu"
              >
                {/* PHONE INNER SCREEN */}
                <div className="bg-[#111] rounded-[38px] overflow-hidden text-white border border-gray-800/80">
                  {/* APP TOP BAR */}
                  <div className="bg-black px-4 pt-6 pb-4 border-b border-gray-800">
                    <div className="flex justify-between items-center">
                      <div>
                        <span
                          className="text-[9px] font-black tracking-widest uppercase"
                          style={{ color: MAK_YELLOW }}
                        >
                          WELCOME TO
                        </span>
                        <h3 className="text-xl font-black text-white leading-none mt-0.5">
                          MAK<span style={{ color: MAK_YELLOW }}>.</span>
                        </h3>
                      </div>
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-black shadow-md"
                        style={{ backgroundColor: MAK_YELLOW }}
                      >
                        <MapPin size={16} />
                      </div>
                    </div>
                  </div>

                  {/* APP CAR DISPATCH BANNER (bghome.png) */}
                  <div className="p-3">
                    <div className="relative h-32 rounded-2xl overflow-hidden bg-gradient-to-b from-[#1c1c24] to-[#101015] flex items-center justify-center p-2 border border-white/10">
                      <img
                        src="/bghome.png"
                        alt="MAK Taxi Car"
                        className="w-full h-full object-contain filter drop-shadow-lg"
                      />
                      <div className="absolute top-2 left-2.5">
                        <span className="text-[9px] font-black uppercase text-yellow-400 bg-black/80 px-2 py-0.5 rounded-full border border-yellow-400/30">
                          Live Active Fleet
                        </span>
                      </div>
                      <div className="absolute bottom-1.5 left-2.5 right-2.5 flex items-center justify-between text-[10px] font-black text-white">
                        <span>Prime AC Sedan</span>
                        <span className="text-yellow-400 font-extrabold">₹13/km</span>
                      </div>
                    </div>

                    {/* QUICK APP SERVICES */}
                    <div className="grid grid-cols-2 gap-2 mt-3 text-center">
                      {["City Taxi", "Outstation", "Airport Drop", "Rentals"].map((s) => (
                        <div
                          key={s}
                          className="bg-white/5 border border-white/5 py-2 px-1 rounded-xl text-[10px] font-bold text-gray-300"
                        >
                          {s}
                        </div>
                      ))}
                    </div>

                    {/* LIVE VERIFICATION HUD */}
                    <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[9px] font-bold text-emerald-400">
                      <CheckCircle2 size={11} />
                      <span>GPS Nearest Driver Connected</span>
                    </div>

                    {/* CTA BUTTON */}
                    <div
                      className="mt-2.5 py-2.5 rounded-xl text-center text-black font-black text-xs uppercase tracking-wider shadow-md"
                      style={{ backgroundColor: MAK_YELLOW }}
                    >
                      Book Your Ride
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* ── 3D HERO CAR (bghome.png) PARKED IN FRONT OF PHONE ── */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: 20,
                  x: 70,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease: smoothEase,
                }}
                className="absolute -bottom-8 -left-10 sm:-left-20 z-20 w-[230px] sm:w-[280px] pointer-events-none transform-gpu drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)]"
              >
                <img
                  src="/bghome.png"
                  alt="MAK Taxi Car"
                  className="w-full h-auto object-contain"
                />
                {/* Dynamic ground shadow */}
                <div className="w-3/4 h-3 mx-auto bg-black/80 rounded-full blur-md -mt-3" />
              </motion.div>

              {/* ── FLOATING DOWNLOAD SATELLITE BADGE (SWIRLS IN AND SNAPS INTO PLACE) ── */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  rotate: 45,
                  x: 80,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                  x: 0,
                  y: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                  ease: smoothEase,
                }}
                whileHover={{ scale: 1.08 }}
                className="absolute -bottom-2 right-4 md:right-8 z-20 text-black px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-yellow-200 transform-gpu"
                style={{ backgroundColor: MAK_YELLOW }}
              >
                <Download size={20} className="animate-bounce" />
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider leading-none">Instant App</p>
                  <p className="text-xs font-black leading-tight mt-0.5">Download Free</p>
                </div>
              </motion.div>

            </div>

          </div>

          {/* ── BOTTOM BRANDING STRIP ── */}
          <div className="relative z-10 border-t border-white/10 px-6 md:px-14 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 bg-black/50 backdrop-blur-md">
            <p className="text-gray-400 text-xs font-medium">
              © MAK TAXI • All Rights Reserved.
            </p>
            <p
              className="text-xs font-black tracking-widest"
              style={{ color: MAK_YELLOW }}
            >
              TRAVEL SMART • TRAVEL WITH MAK
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
