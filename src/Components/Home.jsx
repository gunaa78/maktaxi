import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  MapPin,
  Phone,
  Star,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

export default function Home() {
  const containerRef = useRef(null);
  const phoneNumber = "919876543210";

  /* ──────────────────────────────────────────────────────────
     1. KINETIC SCROLL PARALLAX ENGINE
  ────────────────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  // Parallax shifts on scroll
  // Car drives forward & cruises across highway perspective on scroll
  const carScrollX = useTransform(smoothProgress, [0, 1], [0, -180]);
  const carScrollY = useTransform(smoothProgress, [0, 1], [0, 95]);
  const carScrollScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 0.92]);
  const carHeadlightOpacity = useTransform(smoothProgress, [0, 0.35, 1], [0.45, 0.85, 0.15]);
  const carRoadShadowWidth = useTransform(smoothProgress, [0, 1], ["80%", "72%"]);

  // Hero text gracefully floats up and dissolves on scroll
  const heroContentY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const heroContentOpacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 0.8, 0]);

  // Night road background camera pan & zoom
  const bgParallaxY = useTransform(smoothProgress, [0, 1], [0, 120]);
  const bgParallaxScale = useTransform(smoothProgress, [0, 1], [1.05, 1.18]);

  // Bottom wave divider gentle elevation on scroll
  const waveY = useTransform(smoothProgress, [0, 1], [0, 20]);

  /* ──────────────────────────────────────────────────────────
     2. 3D INTERACTIVE MOUSE PERSPECTIVE TILT
  ────────────────────────────────────────────────────────── */
  const mouseX = useSpring(0, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(0, { stiffness: 120, damping: 25 });

  const handleMouseMove = (e) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 2);
    mouseY.set((clientY / innerHeight - 0.5) * 2);
  };

  const carRotateY = useTransform(mouseX, [-1, 1], [-6, 6]);
  const carRotateX = useTransform(mouseY, [-1, 1], [4, -4]);

  const features = [
    {
      icon: ShieldCheck,
      title: "Zero Surge Meter",
      sub: "Standard meter rates 24x7x365 across Madurai & Tamil Nadu",
      entranceOffset: -80,
      entranceRotate: -3,
    },
    {
      icon: Clock3,
      title: "10-Min GPS Pickup",
      sub: "Automated nearest cab dispatch guarantee with live tracking",
      entranceOffset: 0,
      entranceRotate: 0,
    },
    {
      icon: MapPin,
      title: "IXM Airport & Outstation",
      sub: "One-way drops & temple hill tour specialists at transparent fares",
      entranceOffset: 80,
      entranceRotate: 3,
    },
  ];

  const hotspots = [
    "✈️ Airport Drop (IXM)",
    "🛕 Meenakshi Temple",
    "🌊 Rameshwaram",
    "⛰️ Kodaikanal",
    "🌿 Munnar & Palani",
  ];

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="relative bg-[#08080c] text-white overflow-hidden font-jakarta select-none"
    >
      {/* ══════════════════════════════════════════════════════════════
          1. CINEMATIC HERO CANOPY (NIGHT HIGHWAY ROAD BACKDROP)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 overflow-hidden">

        {/* NIGHT HIGHWAY PHOTO BACKGROUND WITH PARALLAX PAN & ZOOM */}
        <motion.div
          style={{ y: bgParallaxY, scale: bgParallaxScale }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img
            src="/night-road.jpg"
            alt="Night Highway"
            className="w-full h-full object-cover object-center filter brightness-[0.42] contrast-[1.18]"
          />

          {/* Cinematic Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(8,8,12,0.85)_100%)]" />

          {/* Warm Golden Streetlights Ambient Aura */}
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] rounded-full blur-[160px] opacity-25 pointer-events-none"
            style={{ backgroundColor: MAK_YELLOW }}
          />
        </motion.div>

        {/* ── HERO TEXT & CTAS (CENTERED WITH PARALLAX ON SCROLL) ── */}
        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative z-20 max-w-5xl mx-auto px-5 sm:px-6 text-center pt-2 sm:pt-4"
        >
          {/* Top Golden Accent Line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-full mx-auto mb-4 shadow-[0_0_12px_#facc15]"
          />

          {/* Sub-label: MAK TAXI • Madurai */}
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[2.5px] text-gray-200"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>MAK TAXI • MADURAI 24/7</span>
          </motion.div>

          {/* MAIN WELCOME HEADLINE (BOLD ITALIC JUST LIKE SCREENSHOT) */}
          <motion.h1
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic tracking-tight text-white font-outfit drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]"
          >
            Welcome To{" "}
            <span
              className="not-italic bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow"
            >
              MAK TAXI
            </span>
          </motion.h1>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-3.5 text-gray-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto drop-shadow-lg font-normal leading-relaxed"
          >
            <span className="font-semibold text-white">Your Ride. Your Journey. Your Comfort.</span> — Madurai's premier sanitized fleet with transparent meter rates, zero surge pricing, and 24/7 dedicated chauffeurs.
          </motion.p>

          {/* ── THE SIGNATURE PILL CTA BUTTON (WITH SCALE & HOVER PHYSICS) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5"
          >
            {/* BIG GOLDEN PILL BUTTON */}
            <motion.a
              href="#trips"
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 18px 45px rgba(250, 204, 21, 0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex flex-col items-center justify-center bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black px-10 sm:px-12 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_12px_35px_rgba(250,204,21,0.45)] border border-yellow-200/60 hover:brightness-105 transition-all text-center group cursor-pointer"
            >
              <span className="flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider">
                <span>➔ BOOK NOW</span>
              </span>
              <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-widest text-black/85 -mt-0.5">
                TO GET THE BEST OFFER
              </span>
            </motion.a>

            {/* CALL NOW BUTTON */}
            <motion.a
              href={`tel:+${phoneNumber}`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black/60 hover:bg-black/90 text-white font-bold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all shadow-lg hover:border-yellow-400"
            >
              <Phone size={15} className="text-yellow-400" />
              <span>Call: +91 98765 43210</span>
            </motion.a>
          </motion.div>

          {/* RATING ROW */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center justify-center gap-2.5 mt-5 text-xs text-gray-300 font-semibold drop-shadow"
          >
            <div className="flex gap-1 text-yellow-400">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span>4.9★ Rated By 50,000+ Travellers</span>
            <CheckCircle2 size={14} className="text-emerald-400" />
          </motion.div>
        </motion.div>

        {/* ── THE CAR ON THE HIGHWAY (BGHOME.PNG WITH SCROLL CRUISE PARALLAX) ── */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 mt-6 sm:mt-8 flex justify-center items-end">
          <motion.div
            style={{
              x: carScrollX,
              y: carScrollY,
              scale: carScrollScale,
              rotateY: carRotateY,
              rotateX: carRotateX,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[620px] sm:max-w-[760px] lg:max-w-[860px]"
          >
            {/* Headlight beam shining on asphalt lane reacting to scroll */}
            <motion.div
              style={{ opacity: carHeadlightOpacity }}
              animate={{
                scaleX: [1, 1.12, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-14%] top-[30%] w-[55%] h-[40%] bg-gradient-to-l from-yellow-300/40 via-yellow-100/10 to-transparent blur-3xl -rotate-12 pointer-events-none z-10"
            />

            {/* Moving Car with suspension bobbing vibration */}
            <motion.div
              animate={{
                y: [0, -6, 2, -4, 0],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <img
                src="/bghome.png"
                alt="MAK Luxury Car"
                className="w-full object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
              />

              {/* Sweeping metallic luxury sheen */}
              <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{
                  x: "220%",
                  opacity: [0, 0.45, 0],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] pointer-events-none rounded-3xl"
              />
            </motion.div>

            {/* Asphalt Ground Contact Shadow reacting to scroll */}
            <motion.div
              style={{ width: carRoadShadowWidth }}
              animate={{
                scaleX: [1, 0.95, 1],
                opacity: [0.75, 0.55, 0.75],
              }}
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-8 mx-auto rounded-full bg-black/90 blur-xl -mt-6 sm:-mt-8 pointer-events-none"
            />
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            2. DISTINCTIVE BOTTOM CURVED WAVE WITH WHITE OUTLINE & PEAK
               (Reacts dynamically to scroll)
        ══════════════════════════════════════════════════════════════ */}
        <motion.div
          style={{ y: waveY }}
          className="relative z-20 w-full overflow-hidden leading-none -mb-[1px]"
        >
          <svg
            viewBox="0 0 1440 90"
            fill="none"
            preserveAspectRatio="none"
            className="w-full h-16 sm:h-20 lg:h-24 block pointer-events-none select-none"
          >
            {/* Dark solid fill transitioning into the lower section */}
            <path
              d="M 0,55 L 420,55 Q 600,55 720,8 Q 840,55 1020,55 L 1440,55 L 1440,90 L 0,90 Z"
              fill="#08080c"
            />
            {/* The crisp glowing white wave outline on top of the curve */}
            <path
              d="M 0,55 L 420,55 Q 600,55 720,8 Q 840,55 1020,55 L 1440,55"
              stroke="rgba(255, 255, 255, 0.95)"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          3. LOWER SECTION: "TAXI & CAB SERVICE" (MATCHING SCREENSHOT)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-20 bg-[#08080c] pt-4 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADER: "Taxi & Cab Service" (SCROLL ENTRANCE) */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 35, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold italic tracking-tight font-outfit bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent inline-block"
            >
              Taxi & Cab Service
            </motion.h2>

            {/* Golden Horizontal Accent Bar with Scroll Expansion */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="w-16 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full mx-auto mt-2.5 shadow-[0_0_10px_#facc15]"
            />
          </div>

          {/* 3 FEATURE CARDS (STAGGERED MULTI-DIRECTIONAL SCROLL ARRIVAL) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, sub, entranceOffset, entranceRotate }, i) => (
              <motion.div
                key={title}
                initial={{
                  opacity: 0,
                  x: entranceOffset,
                  y: entranceOffset === 0 ? 80 : 20,
                  rotate: entranceRotate,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 20,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "rgba(250, 204, 21, 0.7)",
                  boxShadow: "0 25px 50px -10px rgba(250, 204, 21, 0.25)",
                  transition: { duration: 0.25 },
                }}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#121218] border border-white/10 shadow-xl transition-all group"
              >
                <div>
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-2xl text-black shrink-0 shadow-lg group-hover:scale-110 transition-transform mb-4"
                    style={{ backgroundColor: MAK_YELLOW }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3 className="font-outfit font-bold text-white text-lg tracking-tight group-hover:text-yellow-400 transition-colors">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 font-normal mt-2 leading-relaxed">
                    {sub}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-bold text-yellow-400">
                  <span>Guaranteed Service</span>
                  <Sparkles size={12} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* QUICK HOTSPOTS PILLS (SCROLL WAVE POP-UP) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-2.5"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2">
              Popular Routes:
            </span>
            {hotspots.map((spot, idx) => (
              <motion.a
                key={spot}
                href="#trips"
                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  delay: 0.25 + idx * 0.07,
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="text-xs font-semibold px-4 py-2 rounded-full bg-white/[0.05] hover:bg-yellow-400 hover:text-black border border-white/10 hover:border-yellow-400 text-gray-300 transition-all shadow-sm"
              >
                {spot}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          4. FLOATING WHATSAPP CHAT PILL (MATCHING SCREENSHOT BOTTOM-RIGHT)
      ══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        onClick={() =>
          window.open(
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
              "Hi MAK TAXI! I need cab booking assistance."
            )}`,
            "_blank"
          )
        }
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-white text-gray-950 pl-4 pr-1.5 py-1.5 rounded-full shadow-[0_12px_35px_rgba(0,0,0,0.4)] border border-gray-200/90 backdrop-blur-md group cursor-pointer hover:shadow-emerald-500/30 transition-all select-none"
      >
        <span className="text-xs font-semibold text-gray-700">
          Need Help? <strong className="font-bold text-black">Chat with us</strong>
        </span>
        <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
          <MessageCircle size={20} fill="currentColor" />
        </div>
      </motion.div>

    </section>
  );
}
