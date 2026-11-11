
import React from "react";
import { motion } from "framer-motion";
import {
  Handshake,
  CarFront,
  ShieldCheck,
  User,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Headphones,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

const benefits = [
  { icon: CalendarDays, text: "More booking opportunities" },
  { icon: Clock, text: "Flexible working hours" },
  { icon: Headphones, text: "Reliable customer support" },
  { icon: TrendingUp, text: "Grow your travel business" },
];

export default function BecomePartner() {
  return (
    <section
      id="partner"
      className="relative scroll-mt-[112px] overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 lg:px-12"
    >
      {/* BACKGROUND LIGHTS */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#D6A84B]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D6A84B]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A84B]/30 bg-[#D6A84B]/10 px-5 py-2 text-[10px] font-extrabold uppercase tracking-[2px] text-[#D6A84B]">
            <Handshake size={16} />
            Partnership Opportunities
          </span>

          <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            BECOME A{" "}
            <span className="text-[#D6A84B]">MAK PARTNER.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a vehicle? Join our growing partner network and
            turn every journey into a new opportunity.
          </p>
        </motion.div>

        {/* MAIN PARTNER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid overflow-hidden rounded-[28px] border border-[#D6A84B]/20 bg-[#111111] shadow-[0_30px_100px_rgba(0,0,0,0.55)] lg:grid-cols-2"
        >

          {/* LEFT IMAGE SECTION */}
          <div className="group relative min-h-[620px] overflow-hidden">
            <img
              src="/mak-partner-handshake.png"
              alt="MAK TAXI Partnership"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#5A4219]/40 via-transparent to-transparent" />

            {/* GOLD LIGHT */}
            <div className="absolute right-0 top-1/3 h-28 w-[2px] bg-[#D6A84B] shadow-[0_0_30px_#D6A84B]" />

            <div className="relative z-10 flex min-h-[620px] flex-col justify-between p-7 sm:p-10 lg:p-12">

              {/* TOP LABEL */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#D6A84B]/40 bg-black/30 px-5 py-3 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#D6A84B] shadow-[0_0_15px_#D6A84B]" />

                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
                    MAK Partner Network
                  </span>
                </span>
              </div>

              {/* MAIN TEXT */}
              <div className="mt-20">
                <h3 className="text-4xl font-black leading-tight text-white sm:text-5xl">
                  DRIVE WITH US.
                  <br />
                  <span className="text-[#D6A84B]">
                    GROW TOGETHER.
                  </span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
                  Join the MAK TAXI partner network.
                  Bring your vehicle, connect with customers and
                  grow your travel business with us.
                </p>

                {/* BENEFITS */}
                <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7">
                  {benefits.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.text}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        className="flex flex-col items-start"
                      >
                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-[#D6A84B]/30 bg-[#D6A84B]/10 text-[#D6A84B] transition-all hover:bg-[#D6A84B] hover:text-black">
                          <Icon size={22} />
                        </div>

                        <p className="max-w-[150px] text-xs font-bold leading-5 text-white sm:text-sm">
                          {item.text}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM TRUST SECTION */}
              <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/20 pt-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D6A84B] text-black">
                  <ShieldCheck size={25} />
                </div>

                <div>
                  <h4 className="text-sm font-black text-white">
                    A Partnership You Can Trust.
                  </h4>
                  <p className="mt-1 text-xs text-gray-400">
                    Safe. Reliable. Profitable.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="relative p-6 sm:p-10 lg:p-12">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D6A84B]/10 blur-[100px]" />

            <div className="relative">

              {/* FORM HEADER */}
              <div className="mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-[#D6A84B]">
                  Partner Registration
                </p>

                <h3 className="mt-2 text-3xl font-black text-white sm:text-4xl">
                  LET'S GET STARTED.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Share your details with us. Our team will contact
                  you to discuss the partnership.
                </p>
              </div>

              {/* REGISTRATION FORM */}
              <form
                action="/api/partner-enquiry"
                method="POST"
                className="space-y-4"
              >

                {/* FULL NAME */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white">
                    Full Name <span className="text-[#D6A84B]">*</span>
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="text"
                      name="full_name"
                      placeholder="Enter your full name"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.045] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#D6A84B] focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                {/* MOBILE NUMBER */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white">
                    Mobile Number <span className="text-[#D6A84B]">*</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      pattern="[0-9+\-\s]{10,15}"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.045] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#D6A84B] focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                {/* VEHICLE TYPE */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white">
                    Vehicle Type <span className="text-[#D6A84B]">*</span>
                  </label>

                  <div className="relative">
                    <CarFront
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <select
                      name="vehicle_type"
                      defaultValue=""
                      required
                      className="w-full appearance-none rounded-xl border border-white/15 bg-[#191919] py-4 pl-12 pr-4 text-sm text-gray-300 outline-none transition focus:border-[#D6A84B]"
                    >
                      <option value="" disabled>
                        Select your vehicle
                      </option>
                      <option value="Car">Car</option>
                      <option value="Bike">Bike</option>
                      <option value="Auto">Auto</option>
                      <option value="SUV">SUV</option>
                      <option value="Tempo Traveller">
                        Tempo Traveller
                      </option>
                      <option value="Van">Van</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* LOCATION */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white">
                    Your Location <span className="text-[#D6A84B]">*</span>
                  </label>

                  <div className="relative">
                    <MapPin
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                    <input
                      type="text"
                      name="location"
                      placeholder="Enter your district / area"
                      required
                      className="w-full rounded-xl border border-white/15 bg-white/[0.045] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#D6A84B] focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                {/* ADDITIONAL DETAILS */}
                <div>
                  <label className="mb-2 block text-xs font-bold text-white">
                    Additional Details
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={19}
                      className="absolute left-4 top-5 text-gray-500"
                    />

                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Tell us about your vehicle or partnership..."
                      className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.045] py-4 pl-12 pr-4 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-[#D6A84B] focus:bg-white/[0.08]"
                    />
                  </div>
                </div>

                {/* SUBMIT BUTTON */}
                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-between rounded-full bg-[#D6A84B] px-6 py-3 text-sm font-extrabold text-black shadow-xl shadow-[#D6A84B]/10 transition-all duration-300 hover:bg-[#E8C36E]"
                >
                  Submit Partnership Request

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-[#D6A84B] transition-transform duration-300 group-hover:rotate-45">
                    <Send size={19} />
                  </span>
                </motion.button>

                <p className="pt-2 text-center text-[11px] leading-6 text-gray-500">
                  By submitting, you agree to be contacted by
                  MAK TAXI regarding your enquiry.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}






