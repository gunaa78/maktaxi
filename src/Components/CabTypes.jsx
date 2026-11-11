import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  Users,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Car,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

const cabs = [
  {
    id: 1,
    name: "Prime Sedan",
    shortName: "Sedan",
    tag: "MOST POPULAR",
    rate: "₹13/km",
    seats: "4 Seats",
    acType: "Chilled AC",
    image: "/premiumsedan.png",
    models: "Swift Dzire, Toyota Etios, Amaze",
    desc: "Everyday city commute, corporate meetings & airport drops with spacious boot space.",
    highlights: ["4 Passenger Seats", "Chilled AC Cabin", "Zero Surge Pricing", "Spacious 350L Boot"],
  },
  {
    id: 2,
    name: "Family SUV",
    shortName: "SUV",
    tag: "FAMILY CHOICE",
    rate: "₹17/km",
    seats: "6-7 Seats",
    acType: "Dual Zone AC",
    image: "/suv.png",
    models: "Maruti Ertiga, Renault Triber",
    desc: "Spacious legroom and luggage carrier for family temple visits & outstation getaways.",
    highlights: ["6-7 Passenger Capacity", "Dual Zone AC Vents", "Temple & Hill Certified", "Roof Carrier Ready"],
  },
  {
    id: 3,
    name: "Innova Crysta",
    shortName: "Crysta",
    tag: "ROYAL LUXURY",
    rate: "₹21/km",
    seats: "7 Seats",
    acType: "Climate Louvers",
    image: "/InnovaCrysta.png",
    models: "Toyota Innova Crysta Automatic",
    desc: "Executive captain recliner seats with whisper-quiet ride for VIP guests & highway tours.",
    highlights: ["Captain Recliner Seats", "Whisper-Quiet Cabin", "All-India Tourist Permit", "Executive Luxury"],
  },
  {
    id: 4,
    name: "Luxury SUV",
    shortName: "Fortuner",
    tag: "VIP EXECUTIVE",
    rate: "₹24/km",
    seats: "7 Seats",
    acType: "Tri-Zone Climate",
    image: "/LuxurySUV.png",
    models: "Toyota Fortuner, XUV700",
    desc: "High-stance commanding road presence with plush leather cabin for VIP delegations.",
    highlights: ["VIP Road Presence", "Plush Leather Interior", "Priority Dispatch", "High-Stance Power"],
  },
  {
    id: 5,
    name: "Tempo Traveller",
    shortName: "Traveller",
    tag: "GROUP TOURS",
    rate: "₹28/km",
    seats: "12 Seats",
    acType: "Roof AC Vents",
    image: "/Traveller12Seater.png",
    models: "Force Urbania 12 Seater",
    desc: "Individual pushback comfort with large luggage carrier for pilgrimage groups & family tours.",
    highlights: ["12 Pushback Seats", "Large Luggage Carrier", "Dedicated Chauffeur", "High-Roof AC Cabin"],
  },
  {
    id: 6,
    name: "Economy Hatchback",
    shortName: "Hatchback",
    tag: "BUDGET CHOICE",
    rate: "₹11/km",
    seats: "4 Seats",
    acType: "Chilled AC",
    image: "/hatchback.png",
    models: "Maruti Swift, WagonR, Tiago",
    desc: "Affordable and nimble for quick city errands, market shopping, and daily office commute.",
    highlights: ["Budget Friendly Rate", "Quick City Navigation", "Chilled AC Comfort", "Instant 10-Min Arrival"],
  },
];

export default function CabTypes() {
  const containerRef = useRef(null);
  const phoneNumber = "919876543210";
  const [selectedId, setSelectedId] = useState(1);
  const activeCab = cabs.find((c) => c.id === selectedId) || cabs[0];

  /* ──────────────────────────────────────────────────────────
     KINETIC SCROLL ENGINE: BUTTERY PARALLAX PERSPECTIVE
  ────────────────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    mass: 0.45,
  });

  // 1. Stage 3D Perspective Tilt on Scroll
  const stageY = useTransform(smoothProgress, [0, 0.5, 1], [22, 0, -18]);
  const stageRotateX = useTransform(smoothProgress, [0, 0.5, 1], [3, 0, -2.5]);

  // 2. Turntable Ring physically spins with scroll wheel
  const turntableScrollRotate = useTransform(smoothProgress, [0, 1], [-45, 55]);

  // 3. Car physically cruises horizontally with scroll speed
  const carScrollGlide = useTransform(smoothProgress, [0, 1], [25, -25]);

  // 4. Spotlight breath
  const spotlightScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.2, 0.9]);

  const handleWhatsApp = (cab) => {
    const message = `Hi MAK TAXI! I want to book ${cab.name} (${cab.rate}). Please share cab availability.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      ref={containerRef}
      id="cabs"
      className="relative overflow-hidden bg-[#07070a] text-white py-14 md:py-20 border-b border-white/10 font-jakarta"
      style={{ perspective: "1500px" }}
    >
      {/* ── AMBIENT SHOWROOM SPOTLIGHTS REACTING TO SCROLL ── */}
      <motion.div
        style={{ scale: spotlightScale, backgroundColor: MAK_YELLOW }}
        className="pointer-events-none absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] rounded-full blur-[170px] opacity-15"
      />
      <div className="pointer-events-none absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black to-transparent" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.02]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 z-10">

        {/* ── SECTION HEADER (COMPACT & SLEEK) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] rounded-full" style={{ backgroundColor: MAK_YELLOW }} />
            <span className="text-[10px] font-bold tracking-[3px] uppercase text-yellow-400">
              MAK SHOWROOM FLEET
            </span>
            <span className="w-5 h-[2px] rounded-full" style={{ backgroundColor: MAK_YELLOW }} />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-[-0.03em] font-outfit">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Luxury Fleet.
            </span>
          </h2>

          <p className="text-gray-400 text-xs sm:text-[13px] max-w-md mx-auto mt-1 font-normal leading-relaxed">
            Select any vehicle below to inspect instant tariffs and book with zero surge pricing.
          </p>
        </motion.div>

        {/* ── ONE-LINE BUTTONS DOCK (ULTRA-LUXURY GLASS SEGMENTED TRACK) ── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#121218]/95 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-x-auto max-w-full no-scrollbar">
            {cabs.map((cab) => {
              const isSelected = cab.id === selectedId;

              return (
                <motion.button
                  key={cab.id}
                  onClick={() => setSelectedId(cab.id)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 shrink-0 flex items-center gap-1.5 select-none ${
                    isSelected
                      ? "text-black shadow-[0_0_20px_rgba(250,204,21,0.4)]"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {/* Active Sliding Gold Pill */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeCabTabPill"
                      className="absolute inset-0 rounded-full"
                      style={{ backgroundColor: MAK_YELLOW }}
                      transition={{ type: "spring", stiffness: 420, damping: 30 }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-1 font-outfit">
                    <Car size={12} className={isSelected ? "text-black" : "text-yellow-400"} />
                    <span>{cab.shortName}</span>
                  </span>

                  <span
                    className={`relative z-10 text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                      isSelected ? "bg-black/15 text-black" : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {cab.rate}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ── COMPACT HIGH-END SHOWROOM STAGE WITH REFLECTIVE PODIUM ── */}
        <motion.div
          style={{ y: stageY, rotateX: stageRotateX }}
          initial={{ opacity: 0, scale: 0.96, y: 25 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-br from-[#14141a] via-[#0f0f14] to-[#08080b] rounded-[32px] p-5 sm:p-7 border border-white/15 hover:border-yellow-400/40 shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] overflow-hidden transform-gpu transition-colors duration-500"
        >
          {/* Subtle Ambient Laser Glow Behind Vehicle */}
          <div className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 rounded-full bg-yellow-400/10 blur-3xl" />

          {/* Glowing Top Perimeter Line */}
          <div className="absolute top-0 inset-x-12 h-[1px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">

            {/* ── LEFT: COMPACT CAR TURNTABLE STAGE WITH REALISTIC FLOOR REFLECTION ── */}
            <div className="md:col-span-6 relative flex flex-col items-center justify-center min-h-[210px] sm:min-h-[240px] overflow-hidden">
              
              {/* 1. Reflective Floor Podium Radial Base */}
              <div className="absolute bottom-6 w-[280px] h-20 rounded-full bg-gradient-to-t from-yellow-400/10 via-yellow-400/5 to-transparent blur-md pointer-events-none" />

              {/* 2. Showroom Circular Turntable Ring (Physically rotates with user scroll wheel) */}
              <motion.div
                style={{ rotate: turntableScrollRotate }}
                className="absolute w-[250px] sm:w-[280px] h-[250px] sm:h-[280px] rounded-full border border-yellow-400/20 pointer-events-none"
              >
                {/* Turntable Gold Notch Markers */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#facc15]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-yellow-400/40" />
              </motion.div>

              {/* 3. Inner Dashed Turntable Ring */}
              <div className="absolute w-[210px] sm:w-[230px] h-[210px] sm:h-[230px] rounded-full border border-dashed border-white/10 pointer-events-none" />

              {/* 4. Subtle Model Watermark in Background */}
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeCab.shortName + "-watermark"}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 0.05, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center text-[75px] sm:text-[90px] font-bold text-white pointer-events-none uppercase tracking-tighter font-outfit select-none"
                >
                  {activeCab.shortName}
                </motion.span>
              </AnimatePresence>

              {/* 5. Car Cruising with Horizontal Scroll Parallax & Click Drive-In */}
              <motion.div
                style={{ x: carScrollGlide }}
                className="relative z-10 w-full flex flex-col items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCab.id}
                    initial={{ opacity: 0, x: 60, scale: 0.92 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -60, scale: 0.92 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-[290px] sm:max-w-[330px]"
                  >
                    {/* Headlight illumination beam */}
                    <motion.div
                      animate={{ opacity: [0.2, 0.55, 0.2] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-[-12%] top-[25%] w-[45%] h-[35%] bg-gradient-to-l from-yellow-300/35 via-yellow-100/10 to-transparent blur-xl -rotate-12 pointer-events-none z-20"
                    />

                    {/* Car Image with subtle idle float */}
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative"
                    >
                      <img
                        src={activeCab.image}
                        alt={activeCab.name}
                        className="w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.85)] select-none"
                      />

                      {/* Sweeping Metallic Light Reflection */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 3.5, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 pointer-events-none"
                      />
                    </motion.div>

                    {/* Realistic Ground Shadow */}
                    <div className="h-3 w-3/4 mx-auto rounded-full bg-black/85 blur-sm -mt-1.5 pointer-events-none" />

                    {/* ── SHOWROOM FLOOR MIRROR REFLECTION UNDER VEHICLE ── */}
                    <div className="relative h-7 overflow-hidden -mt-2 opacity-25 pointer-events-none select-none">
                      <img
                        src={activeCab.image}
                        alt=""
                        className="w-full object-contain -scale-y-100 blur-[1px] transform origin-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090c]/70 to-[#09090c]" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Status pill under car */}
              <div className="relative z-10 mt-1 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[9px] text-gray-300 font-semibold shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>GPS Live Fleet: 5–10 Min Dispatch</span>
              </div>
            </div>

            {/* ── RIGHT: COMPACT SPECS & TARIFF DETAILS ── */}
            <div className="md:col-span-6 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Category Pill & Seats Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-black shadow-sm flex items-center gap-1"
                      style={{ backgroundColor: MAK_YELLOW }}
                    >
                      <Sparkles size={9} />
                      {activeCab.tag}
                    </span>

                    <span className="text-[10px] font-semibold text-emerald-400 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
                      {activeCab.acType}
                    </span>
                  </div>

                  {/* Cab Name */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-outfit">
                    {activeCab.name}
                  </h3>

                  {/* Models subtext */}
                  <p className="text-[11px] text-gray-400 font-normal mt-0.5">
                    Models: {activeCab.models}
                  </p>

                  <p className="text-[12px] text-gray-300 font-normal leading-relaxed mt-2 mb-3.5 line-clamp-2">
                    {activeCab.desc}
                  </p>

                  {/* 4 Feature Badges (Compact 2x2 grid) */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {activeCab.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-gray-300 bg-white/[0.04] p-1.5 rounded-lg border border-white/5"
                      >
                        <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tariff & Action Row */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400 block leading-none">
                        Meter Tariff
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl font-bold text-yellow-400 font-outfit">
                          {activeCab.rate}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">Standard Meter</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsApp(activeCab)}
                        className="py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-1.5 shadow-lg relative overflow-hidden group/btn"
                        style={{ backgroundColor: MAK_YELLOW }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <MessageCircle size={14} className="relative z-10" />
                        <span className="relative z-10 truncate">Book {activeCab.shortName}</span>
                        <ArrowUpRight size={14} className="relative z-10" />
                      </motion.button>

                      <motion.a
                        href={`tel:+${phoneNumber}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={`Call to book ${activeCab.name}`}
                        className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors"
                      >
                        <Phone size={14} />
                      </motion.a>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </motion.div>

        {/* ── BOTTOM COMPACT TRUST STRIP ── */}
        <div className="mt-5 flex flex-wrap items-center justify-around gap-2 text-center text-[11px] font-semibold text-gray-400">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={12} className="text-emerald-400" />
            <span>100% Sanitized AC Fleet</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={12} className="text-yellow-400" />
            <span>Standard Meter Rates Always</span>
          </div>
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-1.5">
            <Users size={12} className="text-emerald-400" />
            <span>Verified 24/7 Chauffeurs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
