import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Phone,
  MessageSquare,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Car,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function BookingModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickup: initialData.pickup || "Madurai Junction Railway Station",
    drop: initialData.drop || "Meenakshi Amman Temple",
    date: initialData.date || new Date().toISOString().split("T")[0],
    time: initialData.time || "10:00",
    serviceType: initialData.serviceType || "One Way City / Drop",
    cabType: initialData.cabType || "Prime Sedan (Dzire / Etios)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  React.useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
    setSubmitted(false);
  }, [initialData, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "MAK-MDU-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(id);
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello MAK TAXI Madurai! 🚖\nI would like to book a cab with the following details:\n\n` +
        `• Booking Type: ${formData.serviceType}\n` +
        `• Cab: ${formData.cabType}\n` +
        `• Pickup: ${formData.pickup}\n` +
        `• Drop: ${formData.drop}\n` +
        `• Date: ${formData.date}\n` +
        `• Time: ${formData.time}\n` +
        `• Passenger Name: ${formData.name || "Customer"}\n` +
        `• Contact Phone: ${formData.phone || "Not provided"}\n` +
        `• Additional Notes: ${formData.notes || "None"}\n\n` +
        `Please confirm my Madurai taxi booking. Thank you!`
    );
    window.open(`https://wa.me/919442245678?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-3xl border border-[#D6A84B]/40 bg-[#111111] shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-white"
          >
            {/* Header Glow */}
            <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#D6A84B]/20 blur-3xl pointer-events-none" />

            {/* Modal Header */}
            <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-5 bg-[#161616]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#D6A84B] to-[#FFE08A] text-black font-extrabold shadow-md">
                  <Car size={20} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84B]">
                      Madurai Dispatch
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-white">
                    {submitted ? "Booking Confirmed!" : "Book MAK Taxi Madurai"}
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {submitted ? (
                <div className="py-6 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Ride Requested!</h4>
                  <p className="mt-2 text-sm text-gray-300">
                    Booking Reference ID:{" "}
                    <span className="font-mono font-bold text-[#D6A84B]">{bookingId}</span>
                  </p>

                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left text-xs space-y-2 text-gray-300">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">Pickup:</span>
                      <span className="font-semibold text-white">{formData.pickup}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">Drop:</span>
                      <span className="font-semibold text-white">{formData.drop}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">Vehicle:</span>
                      <span className="font-semibold text-[#D6A84B]">{formData.cabType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Schedule:</span>
                      <span className="font-semibold text-white">
                        {formData.date} at {formData.time}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-gray-400">
                    Our Madurai dispatch driver will call you shortly to confirm the ride.
                  </p>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsAppBooking}
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-bold text-white hover:bg-emerald-500 transition shadow-lg"
                    >
                      <MessageSquare size={16} />
                      WhatsApp Updates
                    </button>
                    <a
                      href="tel:04524567890"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-[#D6A84B] px-4 py-3 text-xs font-bold text-black hover:bg-[#FFE08A] transition shadow-lg"
                    >
                      <Phone size={16} />
                      Call Dispatch (0452 4567890)
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Trip Summary Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#D6A84B]/20 bg-[#D6A84B]/5 px-4 py-3">
                    <div className="flex items-center gap-2 text-xs">
                      <Sparkles size={15} className="text-[#D6A84B]" />
                      <span className="font-semibold text-gray-200">{formData.serviceType}</span>
                      <span className="text-gray-500">•</span>
                      <span className="font-semibold text-[#D6A84B]">{formData.cabType}</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      No Surge Fee
                    </span>
                  </div>

                  {/* Pickup & Drop */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Pickup Location in Madurai
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3.5 top-3.5 text-[#D6A84B]" />
                        <input
                          type="text"
                          name="pickup"
                          required
                          value={formData.pickup}
                          onChange={handleChange}
                          placeholder="e.g. Madurai Airport / Meenakshi Temple / Mattuthavani"
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Drop Destination / Tour
                      </label>
                      <div className="relative">
                        <MapPin size={16} className="absolute left-3.5 top-3.5 text-emerald-400" />
                        <input
                          type="text"
                          name="drop"
                          required
                          value={formData.drop}
                          onChange={handleChange}
                          placeholder="e.g. Rameshwaram / Kodaikanal / Anna Nagar"
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Date
                      </label>
                      <div className="relative">
                        <Calendar size={15} className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 py-2.5 text-xs text-white focus:border-[#D6A84B] focus:outline-none [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Pickup Time
                      </label>
                      <div className="relative">
                        <Clock size={15} className="absolute left-3 top-3 text-gray-400" />
                        <input
                          type="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-white/10 bg-white/5 pl-9 pr-3 py-2.5 text-xs text-white focus:border-[#D6A84B] focus:outline-none [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter full name"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-1">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 digit number"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Trust guarantees */}
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-400">
                    <ShieldCheck size={14} className="text-[#D6A84B]" />
                    <span>Free cancellation before driver dispatch. Verified Madurai drivers.</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D6A84B] to-[#FFE08A] py-3.5 text-xs font-black uppercase tracking-wider text-black hover:opacity-95 transition shadow-[0_8px_25px_rgba(214,168,75,0.3)]"
                    >
                      Instant Confirm
                      <ArrowRight size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-4 py-3.5 text-xs font-bold text-emerald-400 hover:bg-emerald-500/20 transition"
                    >
                      <MessageSquare size={16} />
                      WhatsApp Booking
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
