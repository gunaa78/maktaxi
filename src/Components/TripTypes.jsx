import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowUpRight,
  X,
  Phone,
  MessageCircle,
  Car,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Compass,
} from "lucide-react";

const MAK_YELLOW = "#FACC15";

const trips = [
  {
    id: "oneway",
    number: "01",
    title: "Oneway Trip",
    badge: "Most Popular",
    desc: "Direct doorstep drop to your destination with zero return fare charges.",
    icon: MapPin,
    image: "/onewaytrip.jpg",
    speedTag: "Direct Highway Drop",
    startingFare: "Starting ₹13/km",
    details:
      "Travel comfortably to your exact destination with MAK TAXI. Pay strictly for one side with zero return fare charges across all Madurai routes and neighboring districts.",
    features: [
      "No return fare charges",
      "Doorstep pickup in 10 mins",
      "Experienced highway chauffeurs",
      "100% AC guaranteed cabs",
    ],
  },
  {
    id: "outstation",
    number: "02",
    title: "Outstation",
    badge: "Pilgrimage & Hills",
    desc: "Comfortable long-distance journeys to Rameshwaram, Kodaikanal, Palani & Munnar.",
    icon: Car,
    image: "/outstation.jpg",
    speedTag: "All-India Tourist Permit",
    startingFare: "Starting ₹17/km",
    details:
      "Explore Tamil Nadu & beyond with MAK TAXI. Experienced ghat road drivers, customized itineraries, and round-the-clock roadside assistance.",
    features: [
      "Ghat road certified chauffeurs",
      "Family-friendly spacious cabs",
      "Flexible stopovers anytime",
      "Transparent per-km meter billing",
    ],
  },
  {
    id: "hourly",
    number: "03",
    title: "Hourly Rental",
    badge: "Unlimited Stops",
    desc: "Flexible cab rentals from 1 to 12 hours for city shopping, temple darshan & meetings.",
    icon: Clock,
    image: "/hourlrental.jpg",
    speedTag: "Driver On Hold",
    startingFare: "Starting ₹499/2hrs",
    details:
      "Book a cab and chauffeur for your designated hours. Unlimited stops around Meenakshi Amman Temple, business parks, or railway station transfers.",
    features: [
      "1 Hr to 12 Hrs flexible packages",
      "Unlimited city stops allowed",
      "Chauffeur waits for you",
      "Transparent hourly slabs",
    ],
  },
];

/* ──────────────────────────────────────────────────────────
   INDIVIDUAL 3D PERSPECTIVE CARD COMPONENT (WHITE THEME)
────────────────────────────────────────────────────────── */
function Trip3DCard({ trip, index, onSelect, onWhatsApp }) {
  const cardRef = useRef(null);
  const Icon = trip.icon;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for 3D tilt rotation
  const springConfig = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [11, -11]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-11, 11]), springConfig);

  // Dynamic light glare that moves opposite to tilt
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Progressive Right-to-Left Entrance offset:
  // Card 1: x: 180px
  // Card 2: x: 260px
  // Card 3: x: 340px
  const rightOffset = 180 + index * 80;

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: rightOffset,
        rotate: 2 + index * 1.5,
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
        stiffness: 160,
        damping: 19,
        mass: 0.6,
        delay: index * 0.12,
      }}
      className="relative [perspective:1400px] h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.025 }}
        className="group relative h-full rounded-[28px] bg-white border border-gray-200/90 hover:border-yellow-400 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-10px_rgba(250,204,21,0.32)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
        onClick={() => onSelect(trip)}
      >
        {/* ── 3D SPECULAR DYNAMIC GLARE LAYER ── */}
        <motion.div
          style={{
            background: `radial-gradient(circle 280px at ${glareX} ${glareY}, rgba(250,204,21,0.15), transparent 70%)`,
            transform: "translateZ(10px)",
          }}
          className="pointer-events-none absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* ── CARD HEADER: 3D IMAGE WITH DEPTH ── */}
        <div className="relative h-56 sm:h-60 overflow-hidden bg-gray-100 [transform-style:preserve-3d]">
          <img
            src={trip.image}
            alt={trip.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          {/* Luxury Gradient Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Sweeping Metallic Light Reflection */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 -skew-x-12" />

          {/* ── 3D LAYER 1: TOP BADGES (translateZ 45px) ── */}
          <div
            style={{ transform: "translateZ(45px)" }}
            className="absolute top-3.5 inset-x-4 flex items-center justify-between z-20 pointer-events-none"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                {trip.number}
              </span>
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-black shadow-md flex items-center gap-1"
                style={{ backgroundColor: MAK_YELLOW }}
              >
                <Sparkles size={10} className="text-black" />
                {trip.badge}
              </span>
            </div>

            <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-sm">
              {trip.speedTag}
            </span>
          </div>

          {/* ── 3D LAYER 2: POP-OUT ICON & TITLE (translateZ 60px) ── */}
          <div
            style={{ transform: "translateZ(60px)" }}
            className="absolute bottom-4 inset-x-5 flex items-end justify-between z-20 text-white pointer-events-none"
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center text-black shadow-[0_8px_20px_rgba(250,204,21,0.4)] shrink-0"
                style={{ backgroundColor: MAK_YELLOW }}
              >
                <Icon size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md font-outfit">
                  {trip.title}
                </h3>
                <span className="inline-block text-[11px] font-bold text-yellow-300 drop-shadow">
                  {trip.startingFare}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── CARD BODY: 3D DEPTH LAYER (translateZ 35px) ── */}
        <div
          style={{ transform: "translateZ(35px)" }}
          className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white"
        >
          <div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
              {trip.desc}
            </p>

            {/* FEATURES CHECKLIST */}
            <div className="space-y-2 mb-5 pt-3 border-t border-gray-100">
              {trip.features.slice(0, 2).map((feat) => (
                <div
                  key={feat}
                  className="flex items-center gap-2 text-xs font-semibold text-gray-700"
                >
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 3D ACTION BUTTON ROW (translateZ 50px) ── */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="pt-3 border-t border-gray-100 flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(trip);
              }}
              className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-black flex items-center justify-center gap-1.5 shadow-md relative overflow-hidden group/btn hover:brightness-105 transition-all"
              style={{ backgroundColor: MAK_YELLOW }}
            >
              <span className="relative z-10">View Plan</span>
              <ArrowUpRight size={14} className="relative z-10 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={(e) => {
                e.stopPropagation();
                onWhatsApp(trip);
              }}
              aria-label={`WhatsApp Booking for ${trip.title}`}
              className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white border border-emerald-500/25 flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm"
            >
              <MessageCircle size={16} />
            </motion.button>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────────
   MAIN TRIP TYPES COMPONENT WITH RIGHT-TO-LEFT SCROLL ENGINE
────────────────────────────────────────────────────────── */
export default function TripTypes() {
  const containerRef = useRef(null);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const phoneNumber = "919876543210";

  /* ──────────────────────────────────────────────────────────
     SCROLL ENGINE: RIGHT-TO-LEFT KINETIC TRANSLATION
  ────────────────────────────────────────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.45,
  });

  // Physical drift from right to left as user scrolls down the page
  const gridScrollX = useTransform(smoothProgress, [0, 1], [60, -60]);

  const handleWhatsApp = (trip) => {
    const targetTrip = trip || selectedTrip;
    if (!targetTrip) return;
    const message = `Hi MAK TAXI, I am interested in booking the ${targetTrip.title} (${targetTrip.startingFare}). Please share cab options and availability.`;
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      ref={containerRef}
      id="trips"
      className="relative overflow-hidden py-20 md:py-28 bg-white text-gray-900 border-b border-gray-100 font-jakarta"
    >
      {/* ── AMBIENT 3D BACKGROUND GLOWS ── */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[550px] h-[550px] rounded-full blur-[160px] opacity-[0.08]"
        style={{ backgroundColor: MAK_YELLOW }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[550px] h-[550px] rounded-full blur-[160px] opacity-[0.08]"
        style={{ backgroundColor: MAK_YELLOW }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 z-10">

        {/* ── SECTION HEADER: RIGHT-TO-LEFT SWEEP ENTRANCE ── */}
        <motion.div
          initial={{ opacity: 0, x: 90 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span
              className="w-6 h-[2.5px] rounded-full"
              style={{ backgroundColor: MAK_YELLOW }}
            />
            <span
              className="text-xs font-bold tracking-[3px] uppercase"
              style={{ color: "#ca8a04" }}
            >
              PREMIUM FLEET FORMATS
            </span>
            <span
              className="w-6 h-[2.5px] rounded-full"
              style={{ backgroundColor: MAK_YELLOW }}
            />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-950 tracking-[-0.03em] font-outfit">
            Curated Travel{" "}
            <span style={{ color: "#ca8a04" }}>
              Services.
            </span>
          </h2>

          <p className="text-gray-600 mt-3 max-w-xl mx-auto text-xs sm:text-sm md:text-base font-normal leading-relaxed">
            Every journey deserves maximum comfort. Choose the 3D interactive service card that matches your schedule.
          </p>
        </motion.div>

        {/* ── 3D INTERACTIVE CARD GRID: CONTINUOUS RIGHT-TO-LEFT PARALLAX DRIFT ── */}
        <motion.div
          style={{ x: gridScrollX }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8"
        >
          {trips.map((trip, index) => (
            <Trip3DCard
              key={trip.id}
              trip={trip}
              index={index}
              onSelect={(t) => setSelectedTrip(t)}
              onWhatsApp={(t) => handleWhatsApp(t)}
            />
          ))}
        </motion.div>

        {/* ── BOTTOM LUXURY TRUST ROW: RIGHT-TO-LEFT ENTRANCE ── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-[11px] font-semibold text-gray-500"
        >
          <span className="flex items-center gap-1.5 text-amber-600">
            <ShieldCheck size={14} />
            Zero Surge Guarantee
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-emerald-600">
            <Compass size={14} />
            All-India Permit Cabs
          </span>
          <span className="text-gray-300">•</span>
          <span className="flex items-center gap-1.5 text-gray-700">
            <Clock size={14} style={{ color: "#ca8a04" }} />
            24/7 Doorstep Dispatch
          </span>
        </motion.div>

      </div>

      {/* ── POPUP SERVICE DETAIL MODAL ── */}
      <AnimatePresence>
        {selectedTrip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedTrip(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 text-gray-900"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-100"
            >
              {/* POPUP HEADER */}
              <div className="relative h-56">
                <img
                  src={selectedTrip.image}
                  alt={selectedTrip.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* CLOSE BUTTON */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedTrip(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg transition"
                >
                  <X size={19} />
                </motion.button>

                <div className="absolute bottom-5 left-6 text-white">
                  <span
                    className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-black"
                    style={{ backgroundColor: MAK_YELLOW }}
                  >
                    {selectedTrip.startingFare}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 text-white font-outfit">
                    {selectedTrip.title}
                  </h3>
                </div>
              </div>

              {/* POPUP CONTENT */}
              <div className="p-6 md:p-8">
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {selectedTrip.details}
                </p>

                <h4 className="font-bold text-base text-gray-950 mt-6 mb-3 flex items-center gap-2 font-outfit">
                  <Sparkles size={17} style={{ color: "#ca8a04" }} />
                  What's Included?
                </h4>

                {/* FEATURES CHECKLIST */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTrip.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-xs font-bold text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-emerald-600 shrink-0"
                      />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* ACTION BUTTONS */}
                <div className="grid grid-cols-2 gap-3 mt-7">
                  <motion.a
                    href={`tel:+${phoneNumber}`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 bg-black text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md hover:bg-gray-900 transition"
                  >
                    <Phone size={15} />
                    <span>Call Now</span>
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleWhatsApp(selectedTrip)}
                    className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-md transition"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
