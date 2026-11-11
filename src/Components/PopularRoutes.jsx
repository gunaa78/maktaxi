import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Clock,
  X,
  CheckCircle2,
  MessageCircle,
  Sparkles,
  Star,
  ShieldCheck,
  Car,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

const packages = [
  {
    id: 1,
    number: "01",
    name: "Taj Mahal",
    state: "Agra, Uttar Pradesh",
    duration: "4D / 3N",
    rating: "4.9",
    image: "/tajmahal.jpg",
    badge: "WORLD WONDER",
    cabHint: "Sedan / Innova AC",
    description:
      "Witness India's iconic Mughal wonder of eternal love, architectural beauty, and historic heritage monuments.",
    places: ["Taj Mahal", "Agra Fort", "Mehtab Bagh", "Fatehpur Sikri"],
    inclusions: [
      "AC Prime Cab & Chauffeur",
      "All Interstate Taxes & Tolls",
      "Sightseeing Stopovers",
      "Doorstep Pickup & Drop",
    ],
    exclusions: [
      "Monument Entry Passes",
      "Meals & Personal Expenses",
      "Hotel Room Stay",
    ],
  },
  {
    id: 2,
    number: "02",
    name: "Goa Coastal",
    state: "Goa Beaches",
    duration: "4D / 3N",
    rating: "4.9",
    image: "/goa.jpg",
    badge: "TOP BEACH GETAWAY",
    cabHint: "AC Sedan & SUV",
    description:
      "Sun-kissed beaches, Portuguese coastal architecture, ocean sunsets, vibrant shacks, and seaside cafes.",
    places: ["Baga Beach", "Calangute", "Fort Aguada", "Anjuna Market"],
    inclusions: [
      "Sanitized AC Cab & Fuel",
      "Highway Tolls & Permits",
      "Flexible Sightseeing Timing",
      "Complete Pickup & Drop",
    ],
    exclusions: [
      "Water Sports Charges",
      "Food & Personal Beverages",
      "Resort Accommodation",
    ],
  },
  {
    id: 3,
    number: "03",
    name: "Kashmir Valley",
    state: "Jammu & Kashmir",
    duration: "6D / 5N",
    rating: "5.0",
    image: "/kashmir.webp",
    badge: "SNOW PARADISE",
    cabHint: "Climate Heated Cab",
    description:
      "Snow-clad peaks, romantic Shikara rides on Dal Lake, and alpine gondola rides across Gulmarg valleys.",
    places: ["Dal Lake", "Gulmarg Gondola", "Pahalgam", "Mughal Gardens"],
    inclusions: [
      "Dedicated Chauffeur & Cab",
      "Complete Route Guidance",
      "Scenic Mountain Navigation",
      "24/7 Dispatch Support",
    ],
    exclusions: [
      "Gondola & Activity Passes",
      "Meals & Personal Shopping",
      "Hotel / Houseboat Stay",
    ],
  },
  {
    id: 4,
    number: "04",
    name: "Jaipur Heritage",
    state: "Rajasthan",
    duration: "4D / 3N",
    rating: "4.9",
    image: "/jaipur.jpg",
    badge: "ROYAL HERITAGE",
    cabHint: "Prime Executive Cab",
    description:
      "Grand royal palaces, hill fortresses, colorful desert bazaars, and legendary Rajasthani heritage.",
    places: ["Hawa Mahal", "Amber Fort", "City Palace", "Jantar Mantar"],
    inclusions: [
      "AC Prime Cab & Chauffeur",
      "Interstate Tax & Tolls",
      "Sightseeing Navigation",
      "Dedicated Round Trip Cab",
    ],
    exclusions: [
      "Palace Entry Passes",
      "Meals & Personal Expenses",
      "Hotel Room Stay",
    ],
  },
];

export default function PopularRoutes() {
  const containerRef = useRef(null);
  const phoneNumber = "919876543210";
  const [selectedPackage, setSelectedPackage] = useState(null);

  /* ──────────────────────────────────────────────────────────
     SCROLL ENGINE: LEFT-TO-RIGHT PARALLAX DRIFT
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

  // Ambient lighting transforms reacting to scroll
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.85, 1.25, 0.9]);
  const bgRotate = useTransform(smoothProgress, [0, 1], [-25, 25]);

  // Left-to-Right physical drift as user scrolls down the page
  const gridScrollX = useTransform(smoothProgress, [0, 1], [-35, 35]);

  const bookPackage = (pkg) => {
    const message = `Hi MAK TAXI!
I am interested in the ${pkg.name} Tour Package.
Duration: ${pkg.duration}
Location: ${pkg.state}
Please share package pricing and cab availability.`;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      ref={containerRef}
      id="packages"
      className="py-20 md:py-28 bg-[#09090b] text-white relative overflow-hidden border-b border-white/10 font-jakarta"
      style={{ perspective: "1500px" }}
    >
      {/* ── AMBIENT SCROLL SPOTLIGHTS ── */}
      <motion.div
        style={{
          scale: bgScale,
          rotate: bgRotate,
          backgroundColor: MAK_YELLOW,
        }}
        className="pointer-events-none absolute -top-40 -left-20 w-[550px] h-[550px] rounded-full blur-[170px] opacity-15"
      />
      <motion.div
        style={{
          scale: bgScale,
          backgroundColor: MAK_YELLOW,
        }}
        className="pointer-events-none absolute -bottom-40 -right-20 w-[550px] h-[550px] rounded-full blur-[170px] opacity-15"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.02]" />

      <div className="max-w-[1450px] mx-auto px-5 sm:px-6 relative z-10">

        {/* ── SECTION HEADER: LEFT-TO-RIGHT SWEEP ENTRANCE ── */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-9 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span
              className="w-6 h-[2px] rounded-full"
              style={{ backgroundColor: MAK_YELLOW }}
            />
            <span
              className="text-[11px] font-bold uppercase tracking-[3px]"
              style={{ color: MAK_YELLOW }}
            >
              MAK Holiday & Outstation Packages
            </span>
            <span
              className="w-6 h-[2px] rounded-full"
              style={{ backgroundColor: MAK_YELLOW }}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-[-0.03em] font-outfit">
            Popular Tour{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-200 to-yellow-500 bg-clip-text text-transparent">
              Destinations.
            </span>
          </h2>

          <p className="text-gray-400 mt-2.5 max-w-xl mx-auto text-xs sm:text-sm leading-relaxed font-normal">
            Curated all-inclusive holiday, coastal, and heritage tour packages.
            All interstate permits, highway tolls, and sanitized AC cabs included.
          </p>
        </motion.div>

        {/* ── 4 TOUR CARDS: LEFT-TO-RIGHT SCROLL CONVOY ARRIVAL ── */}
        <motion.div
          style={{ x: gridScrollX }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {packages.map((pkg, index) => {
            // Progressive Left-to-Right offset:
            // Card 1 arrives from x: -160
            // Card 2 arrives from x: -220
            // Card 3 arrives from x: -280
            // Card 4 arrives from x: -340
            const leftOffset = -(160 + index * 60);

            return (
              <motion.div
                key={pkg.id}
                // LEFT-TO-RIGHT SCROLL ENTRANCE ANIMATION
                initial={{
                  opacity: 0,
                  x: leftOffset,
                  rotate: -(2 + index),
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  type: "spring",
                  stiffness: 170,
                  damping: 19,
                  mass: 0.55,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -9,
                  scale: 1.03,
                  boxShadow: "0 25px 50px -10px rgba(250, 204, 21, 0.35)",
                  borderColor: "rgba(250, 204, 21, 0.7)",
                  transition: { duration: 0.25 },
                }}
                className="group bg-[#111116] rounded-[26px] overflow-hidden border border-white/10 hover:border-yellow-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between h-full select-none relative transform-gpu"
              >
                {/* ── SLEEK COMPACT IMAGE HEADER (h-44) ── */}
                <div className="relative h-44 overflow-hidden bg-gray-950">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    loading="lazy"
                    onError={(e) => {
                      if (pkg.id === 1) {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=80";
                      }
                    }}
                    className="w-full h-full object-cover object-center group-hover:scale-115 transition-transform duration-700"
                  />

                  {/* Sweeping Metallic Light Reflection from Left to Right on Hover */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -skew-x-12" />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-black/35 to-transparent" />

                  {/* TOP BADGES ROW */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-[9px] font-bold text-white">
                        {pkg.number}
                      </span>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full text-black shadow-md flex items-center gap-1"
                        style={{ backgroundColor: MAK_YELLOW }}
                      >
                        <Sparkles size={9} className="text-black" />
                        {pkg.badge}
                      </span>
                    </div>

                    {/* Duration Pill */}
                    <span className="bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1">
                      <Clock size={10} style={{ color: MAK_YELLOW }} />
                      {pkg.duration}
                    </span>
                  </div>

                  {/* RATING BADGE */}
                  <div className="absolute bottom-2.5 right-3 z-10 bg-black/85 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1 text-[10px] font-bold text-white">
                    <Star size={10} className="fill-yellow-400 text-yellow-400" />
                    <span>{pkg.rating}</span>
                  </div>

                  {/* DESTINATION TITLE OVERLAY */}
                  <div className="absolute bottom-2.5 left-3.5 right-16 z-10">
                    <div className="flex items-center gap-1 text-[11px] font-medium text-gray-300">
                      <MapPin size={11} style={{ color: MAK_YELLOW }} />
                      <span className="truncate">{pkg.state}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight mt-0.5 group-hover:text-yellow-400 transition-colors font-outfit">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* ── SLEEK COMPACT BODY (p-4) ── */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* ANIMATED GPS HIGHWAY ROUTE TRACKER (LEFT TO RIGHT BEACON) */}
                    <div className="py-1.5 px-2.5 rounded-xl bg-white/[0.04] border border-white/5 mb-3">
                      <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-wider mb-1">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          Tour Route
                        </span>
                        {/* Middle place left empty - KM removed */}
                        <span className="text-gray-300">{pkg.name}</span>
                      </div>

                      {/* Traveling taxi beacon from Left to Right */}
                      <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ x: ["-100%", "260%"] }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.35,
                          }}
                          className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-yellow-400 to-transparent shadow-[0_0_8px_#facc15]"
                        />
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed mb-3 font-normal">
                      {pkg.description}
                    </p>

                    {/* SIGHTSEEING ITINERARY CHIPS */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {pkg.places.slice(0, 3).map((pl) => (
                        <span
                          key={pl}
                          className="text-[9px] font-bold px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-gray-300 group-hover:border-yellow-400/40 transition-colors"
                        >
                          {pl}
                        </span>
                      ))}
                      {pkg.places.length > 3 && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-white/[0.03] text-gray-500">
                          +{pkg.places.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* ── ACTION BUTTONS ── */}
                  <div className="pt-2.5 border-t border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold text-emerald-400 px-0.5">
                      <span className="flex items-center gap-1">
                        <Car size={11} />
                        {pkg.cabHint}
                      </span>
                      <span className="text-gray-400 text-[9px] flex items-center gap-0.5">
                        <ShieldCheck size={10} />
                        Zero Surge
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-1.5">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedPackage(pkg)}
                        className="col-span-4 py-2.5 px-3 rounded-lg font-bold text-[11px] uppercase tracking-wider text-black flex items-center justify-center gap-1.5 shadow-md transition-all relative overflow-hidden group/btn"
                        style={{ backgroundColor: MAK_YELLOW }}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 pointer-events-none" />
                        <span className="relative z-10">Explore Plan</span>
                        <ArrowUpRight size={13} className="relative z-10" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => bookPackage(pkg)}
                        aria-label={`WhatsApp Enquiry for ${pkg.name}`}
                        className="col-span-1 flex items-center justify-center rounded-lg bg-emerald-500/15 hover:bg-emerald-500 text-emerald-400 hover:text-black border border-emerald-500/30 transition-all duration-300"
                      >
                        <MessageCircle size={15} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── FOOTER HELPER PILL ── */}
        <div className="flex items-center justify-center gap-2 text-[11px] font-semibold text-gray-500 mt-10">
          <Sparkles size={12} style={{ color: MAK_YELLOW }} />
          <span>Customized outstation tour itineraries with one-way & round-trip options</span>
        </div>

      </div>

      {/* ── POPUP TOUR DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPackage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 text-gray-900"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: -80 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: 80 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              {/* MODAL HERO IMAGE */}
              <div className="relative h-60">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.name}
                  onError={(e) => {
                    if (selectedPackage.id === 1) {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1200&auto=format&fit=crop&q=80";
                    }
                  }}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* CLOSE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedPackage(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition"
                >
                  <X size={19} />
                </motion.button>

                <div className="absolute bottom-5 left-6 right-6 text-white">
                  <span
                    className="text-[11px] font-black uppercase tracking-widest px-3 py-1 rounded-md text-black"
                    style={{ backgroundColor: MAK_YELLOW }}
                  >
                    {selectedPackage.duration}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 text-white font-outfit">
                    {selectedPackage.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium mt-0.5">
                    {selectedPackage.state}
                  </p>
                </div>
              </div>

              {/* MODAL BODY */}
              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {selectedPackage.description}
                </p>

                {/* PLACES TO VISIT */}
                <div className="mt-6">
                  <h4 className="font-bold text-sm text-gray-950 uppercase tracking-wider mb-3 flex items-center gap-2 font-outfit">
                    <Sparkles size={16} style={{ color: "#ca8a04" }} />
                    Key Highlights
                  </h4>
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedPackage.places.map((place, idx) => (
                      <div
                        key={place}
                        className="flex items-center gap-2 text-xs font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-black shrink-0"
                          style={{ backgroundColor: MAK_YELLOW }}
                        >
                          {idx + 1}
                        </span>
                        <span>{place}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INCLUSIONS & EXCLUSIONS */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                  <div>
                    <h5 className="font-black text-xs uppercase tracking-wider text-emerald-700 mb-2.5">
                      Included:
                    </h5>
                    <div className="space-y-1.5">
                      {selectedPackage.inclusions.map((inc) => (
                        <div key={inc} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-black text-xs uppercase tracking-wider text-rose-700 mb-2.5">
                      Excluded:
                    </h5>
                    <div className="space-y-1.5">
                      {selectedPackage.exclusions.map((exc) => (
                        <div key={exc} className="flex items-center gap-2 text-xs text-gray-600">
                          <X size={14} className="text-rose-500 shrink-0" />
                          <span>{exc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WHATSAPP ACTION BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => bookPackage(selectedPackage)}
                  className="w-full mt-7 flex items-center justify-center gap-2.5 text-black py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg transition-all"
                  style={{ backgroundColor: MAK_YELLOW }}
                >
                  <MessageCircle size={18} />
                  <span>Enquire Tour on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
