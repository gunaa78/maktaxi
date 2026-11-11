import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MAK_YELLOW = "#FACC15";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }

    const startTime = performance.now();
    const DURATION = 3200; // 3.2 seconds smooth luxury pace
    let animationFrameId;

    const update = (now) => {
      const elapsed = now - startTime;
      const ratio = Math.min(elapsed / DURATION, 1);
      const currentProgress = Math.round(ratio * 100);

      setProgress(currentProgress);

      if (ratio < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    };

    animationFrameId = requestAnimationFrame(update);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleSkip = () => {
    setProgress(100);
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="mak-minimal-cinema-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(18px)",
            transition: {
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between overflow-hidden bg-black text-white select-none font-jakarta p-6 sm:p-10"
        >
          {/* ── 1. CINEMATIC FULLSCREEN BACKGROUND VIDEO ── */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/bghome.png"
              className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.15]"
            >
              <source src="/car.mp4" type="video/mp4" />
              <source src="/car-driving.mp4" type="video/mp4" />
            </video>

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.85)_100%)]" />

            {/* Golden Floor Glow */}
            <div
              className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px] opacity-25 pointer-events-none"
              style={{ backgroundColor: MAK_YELLOW }}
            />
          </div>

          {/* ── 2. TOP BAR: MINIMAL SKIP LINK ONLY ── */}
          <div className="relative z-20 w-full flex justify-end">
            <button
              onClick={handleSkip}
              className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors py-1 px-3 rounded-full hover:bg-white/5"
            >
              Skip →
            </button>
          </div>

          {/* ── 3. CENTERPIECE: HERO MOVING CAR & ATTRACTIVE BRANDING ── */}
          <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center my-auto text-center">

            {/* Moving Car Container */}
            <div className="relative w-full max-w-[480px] h-44 sm:h-56 flex items-center justify-center">

              {/* Headlight beam shining on road */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.7, 0.35],
                  scaleX: [1, 1.15, 1],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[-15%] top-[28%] w-[55%] h-[40%] bg-gradient-to-l from-yellow-300/40 via-yellow-100/10 to-transparent blur-2xl -rotate-12 pointer-events-none z-10"
              />

              {/* Dynamic Cruise Motion Car */}
              <motion.div
                initial={{ x: 100, opacity: 0, scale: 0.92 }}
                animate={{
                  x: [0, -14, 0],
                  y: [0, -4, 1.5, -3, 0],
                }}
                exit={{
                  x: -180,
                  opacity: 0,
                  transition: { duration: 0.8, ease: [0.32, 0, 0.67, 0] },
                }}
                transition={{
                  x: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="relative z-20 w-full flex items-center justify-center"
              >
                <img
                  src="/bghome.png"
                  alt="MAK Luxury Car"
                  className="w-full object-contain max-h-52 filter drop-shadow-[0_25px_45px_rgba(0,0,0,0.95)]"
                />

                {/* Sweeping Metallic Luxury Sheen */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{
                    x: "220%",
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-25deg] pointer-events-none rounded-3xl"
                />
              </motion.div>

              {/* Ground Shadow */}
              <motion.div
                animate={{
                  scaleX: [1, 0.94, 1],
                  opacity: [0.65, 0.45, 0.65],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-2 h-5 w-3/4 bg-black/90 blur-xl rounded-full pointer-events-none"
              />
            </div>

            {/* Clean Brand Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-outfit mt-4"
            >
              MAK <span style={{ color: MAK_YELLOW }}>TAXI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[11px] font-semibold uppercase tracking-[4px] text-gray-400 mt-1"
            >
              Madurai • Outstation & City
            </motion.p>

            {/* ── 4. ULTRA-CLEAN PROGRESS BAR & PERCENTAGE ── */}
            <div className="w-full max-w-xs mt-7">
              <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    backgroundColor: MAK_YELLOW,
                    boxShadow: `0 0 16px ${MAK_YELLOW}`,
                  }}
                />
              </div>

              {/* Digital Percentage Counter */}
              <div className="mt-3 font-mono text-xs font-semibold tracking-wider text-gray-400">
                <span className="text-yellow-400 font-bold">{progress}</span>
                <span className="text-[10px] text-gray-500 ml-0.5">%</span>
              </div>
            </div>

          </div>

          {/* ── 5. BOTTOM MINIMAL CLEAN SPACER ── */}
          <div className="relative z-20 text-center">
            <span className="text-[10px] font-semibold uppercase tracking-[3px] text-gray-500">
              Luxury Transit Experience
            </span>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
