import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CarFront,
  Users,
  Headset,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

export default function About() {
  const containerRef = useRef(null);

  /* ── SCROLL PARALLAX ENGINE FOR COLLAGE DEPTH ── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 25,
    mass: 0.5,
  });

  // Multi-plane collage depth movement
  const img1Y = useTransform(smoothProgress, [0, 1], [35, -35]);
  const img2Y = useTransform(smoothProgress, [0, 1], [-25, 25]);
  const img3Y = useTransform(smoothProgress, [0, 1], [40, -30]);
  const yellowShapeRotate = useTransform(smoothProgress, [0, 1], [-8, -3]);
  const yellowShapeScale = useTransform(smoothProgress, [0, 1], [0.95, 1.05]);

  const features = [
    {
      icon: Users,
      title: "Professional",
      sub: "Chauffeurs",
      detail: "Verified & courteous",
    },
    {
      icon: CarFront,
      title: "Well-Maintained",
      sub: "Fleet",
      detail: "100% Sanitized AC",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Secure",
      sub: "Rides",
      detail: "GPS Live Tracking",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      sub: "Desk",
      detail: "Instant Booking Help",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative bg-white py-20 md:py-28 overflow-hidden border-b border-gray-100 font-jakarta"
      style={{ perspective: "1400px" }}
    >
      {/* BACKGROUND AMBIENT GLOW EFFECTS */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full blur-[130px] opacity-60"
        style={{ backgroundColor: `${MAK_YELLOW}33` }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 w-80 h-48 bg-gray-100 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-[1450px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT: MULTI-LAYER 3D PARALLAX COLLAGE WITH CAR */}
          <div className="relative min-h-[440px] md:min-h-[570px] flex items-center select-none">

            {/* Main Center Travel Image - 2 (Moves with Parallax img2Y) */}
            <motion.div
              style={{ y: img2Y }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.03, rotate: -1, zIndex: 30 }}
              className="absolute left-[12%] top-[5%] w-[76%] h-[78%] rounded-[36px] overflow-hidden border-[6px] border-white shadow-2xl -rotate-3 transition-transform cursor-pointer"
            >
              <img
                src="/2.png"
                alt="MAK Travel Destination"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Left Road Image - 1 (Moves with Parallax img1Y in counter-direction) */}
            <motion.div
              style={{ y: img1Y }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, rotate: -4, zIndex: 30 }}
              className="absolute left-0 top-[15%] w-[34%] h-[53%] rounded-[28px] overflow-hidden border-4 border-white shadow-2xl -rotate-[7deg] z-10 transition-transform cursor-pointer"
            >
              <img
                src="/1.png"
                alt="Scenic Travel Road"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Destination Image - 3 (Moves with Parallax img3Y) */}
            <motion.div
              style={{ y: img3Y }}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.05, rotate: 4, zIndex: 30 }}
              className="absolute right-0 top-[28%] w-[24%] h-[38%] rounded-[26px] overflow-hidden border-4 border-white shadow-xl rotate-3 z-10 transition-transform cursor-pointer"
            >
              <img
                src="/3.png"
                alt="Travel Destination"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Yellow Accent Backing Shape */}
            <motion.div
              style={{
                rotate: yellowShapeRotate,
                scale: yellowShapeScale,
                backgroundColor: MAK_YELLOW,
              }}
              className="absolute top-[8%] left-[25%] w-[48%] h-[63%] rounded-[45px] -z-10 shadow-xl opacity-95"
            />

            {/* CAR CUTOUT - bghome (Once mattum blink aagi present aagum on scroll) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 28 }}
              whileInView={{
                opacity: [0, 0.45, 0.15, 1],
                scale: 1,
                y: 0,
              }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.85,
                times: [0, 0.35, 0.55, 1],
                ease: "easeOut",
              }}
              className="absolute z-20 bottom-[2%] left-[2%] w-[96%]"
            >
              <div className="relative">
                <img
                  src="/bghome.png"
                  alt="MAK TAXI Cab"
                  className="w-full object-contain drop-shadow-[0_26px_40px_rgba(0,0,0,0.38)]"
                />

                {/* Subtle sweeping light sheen on arrival */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{
                    x: "200%",
                    opacity: [0, 0.35, 0],
                  }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 1.8,
                    delay: 0.6,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] pointer-events-none rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Floating Luxury Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.35,
              }}
              whileHover={{ scale: 1.06, y: -3 }}
              className="absolute -top-3 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-4 shadow-xl border border-gray-100 flex items-center gap-2.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-[11px] font-bold text-gray-950 uppercase tracking-wider leading-none">
                  All-India Tourist Permit
                </p>
                <p className="text-[9px] font-medium text-gray-400 mt-0.5">
                  100% Verified Chauffeurs
                </p>
              </div>
            </motion.div>

            {/* Bottom Decorative Line */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 120 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-3 left-10 h-2.5 rounded-full"
              style={{ backgroundColor: MAK_YELLOW }}
            />
          </div>

          {/* RIGHT: CONTENT WITH STAGGERED REVEALS & LIQUID GOLD HEADLINE */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            {/* Pill Badge with Pulsing Live Dot */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-6 shadow-sm border border-yellow-300/60"
              style={{ backgroundColor: MAK_YELLOW }}
            >
              <CarFront size={18} className="text-black" />
              <span className="text-xs font-bold text-black tracking-wider uppercase">
                ABOUT MAK TAXI
              </span>
            </motion.div>

            {/* Main Headline with Liquid Gold Shimmer */}
            <h2 className="text-4xl md:text-5xl lg:text-[58px] font-bold text-gray-950 leading-[1.08] tracking-[-0.03em] font-outfit">
              Your Travel Partner
              <br />
              For{" "}
              <span
                className="relative inline-block bg-gradient-to-r from-yellow-600 via-amber-400 to-yellow-600 bg-clip-text text-transparent"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(234,179,8,0.25))",
                }}
              >
                Every Journey.
              </span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-8 mt-6 max-w-2xl font-normal">
              MAK TAXI offers safe, comfortable and reliable
              cab services for local, outstation and airport travel.
              We are committed to providing a smooth, affordable and
              hassle-free travel experience for families, individuals
              and businesses.
            </p>

            {/* 4 INTERACTIVE FEATURE CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-9">
              {features.map(({ icon: Icon, title, sub, detail }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    backgroundColor: "#fefce8",
                    borderColor: "#fde047",
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center text-center p-3 rounded-2xl border border-gray-200/90 bg-white transition-all shadow-sm group cursor-default"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 mb-2.5 shadow-sm"
                    style={{ backgroundColor: `${MAK_YELLOW}44` }}
                  >
                    <Icon size={24} className="text-gray-950" />
                  </div>

                  <h3 className="text-xs font-bold text-gray-950 leading-tight">
                    {title}
                  </h3>
                  <p className="text-[11px] font-semibold text-gray-800 leading-tight mt-0.5">
                    {sub}
                  </p>
                  <span className="text-[9px] font-medium text-gray-400 mt-1">
                    {detail}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* BUTTON WITH METALLIC LIGHT SWEEP */}
            <motion.a
              href="#cabs"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: `0 18px 40px ${MAK_YELLOW}66`,
              }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden inline-flex items-center gap-3.5 mt-9 text-black px-9 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-xl"
              style={{
                backgroundColor: MAK_YELLOW,
                boxShadow: `0 12px 30px ${MAK_YELLOW}44`,
              }}
            >
              {/* Metallic Light Sweep */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />

              <span className="relative z-10">Explore Our Services</span>
              <ArrowRight
                size={19}
                className="relative z-10 group-hover:translate-x-1.5 transition-transform"
              />
            </motion.a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
