import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Clock,
  ShieldCheck,
  PhoneCall,
  Briefcase,
  Car,
  Star,
  Zap,
  MapPin,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

/* ─── Data ─── */
const PACKAGES = [
  {
    id: "starter",
    name: "Corporate Starter",
    sub: "Small Teams & Startups",
    price: "₹8,999",
    per: "/ month",
    badge: null,
    features: [
      "Up to 10 employee trips/month",
      "Prime Sedan (Dzire / Etios)",
      "GST Invoice every month",
      "24/7 helpline priority",
      "Airport transfers included",
    ],
    cta: "Get Started",
    accent: "border-white/15 bg-white/[0.02]",
    btnClass: "border border-[#D6A84B] text-[#D6A84B] hover:bg-[#D6A84B] hover:text-black",
  },
  {
    id: "business",
    name: "Business Fleet",
    sub: "Mid-size Companies",
    price: "₹18,999",
    per: "/ month",
    badge: "MOST POPULAR",
    features: [
      "Up to 50 employee trips/month",
      "Innova Crysta + Sedans",
      "Dedicated fleet manager",
      "Real-time GPS tracking",
      "Monthly usage analytics",
      "GST tax invoices",
      "Zero wait time SLA",
    ],
    cta: "Book a Demo",
    accent: "border-[#D6A84B]/60 bg-gradient-to-b from-[#D6A84B]/10 to-transparent",
    btnClass: "bg-gradient-to-r from-[#D6A84B] to-[#FFE08A] text-black font-black",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    sub: "Large Organizations",
    price: "Custom",
    per: "pricing",
    badge: null,
    features: [
      "Unlimited monthly trips",
      "Full dedicated fleet",
      "White-label employee app",
      "24/7 operations manager",
      "Event & conference transfers",
      "VIP delegate handling",
      "Monthly billing & reports",
    ],
    cta: "Contact Sales",
    accent: "border-white/15 bg-white/[0.02]",
    btnClass: "border border-[#D6A84B] text-[#D6A84B] hover:bg-[#D6A84B] hover:text-black",
  },
];

const USE_CASES = [
  { icon: Users,     title: "Employee Transport",   desc: "Daily office commutes, shift pickups & drops for your entire workforce." },
  { icon: Briefcase, title: "Client Meetings",       desc: "Impress clients with premium sedans and punctual chauffeurs." },
  { icon: Car,       title: "Event Transfers",       desc: "Conferences, workshops, team outings — full fleet management." },
  { icon: MapPin,    title: "Airport Transfers",     desc: "Zero-wait IXM airport pickups with flight delay buffer for executives." },
  { icon: FileText,  title: "GST Billing",           desc: "Automated monthly GST invoices for seamless expense management." },
  { icon: Zap,       title: "Priority Dispatch",     desc: "Corporate rides get priority over regular bookings, always." },
];

const STATS = [
  { value: "120+", label: "Corporate Clients" },
  { value: "5,000+", label: "Monthly Business Trips" },
  { value: "100%", label: "On-Time Rate" },
  { value: "24/7", label: "Dedicated Support" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Corporate({ onOpenBooking }) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", size: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", company: "", phone: "", email: "", size: "", message: "" });
  };

  return (
    <section id="corporate" className="relative bg-[#070707] text-white overflow-hidden">

      {/* ── Background Glows ── */}
      <div className="pointer-events-none absolute -right-60 top-0 h-[700px] w-[700px] rounded-full bg-[#D6A84B]/8 blur-[180px]" />
      <div className="pointer-events-none absolute -left-60 bottom-0 h-[600px] w-[600px] rounded-full bg-[#FFE08A]/6 blur-[160px]" />

      {/* ════════════════════════════════════
          1. HERO BANNER
      ════════════════════════════════════ */}
      <div className="relative overflow-hidden border-b border-white/5">
        {/* bg stripe */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(214,168,75,0.12),transparent_60%)]" />
        <div className="absolute top-0 inset-x-0 h-1 bg-[repeating-linear-gradient(90deg,#D6A84B_0px,#D6A84B_18px,#000_18px,#000_36px)] opacity-60" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20 lg:py-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#D6A84B]/40 bg-[#D6A84B]/10 px-4 py-1.5 mb-6"
            >
              <Building2 size={13} className="text-[#D6A84B]" />
              <span className="text-[11px] font-black uppercase tracking-[2.5px] text-[#FFE08A]">
                Corporate & Enterprise Solutions
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.07] tracking-tight"
            >
              Madurai's Premier{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84B] to-[#FFE08A]">
                Business Fleet
              </span>{" "}
              Partner
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-5 text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl"
            >
              Trusted by 120+ companies across Madurai for employee transport, executive transfers,
              airport pickups, and corporate event logistics — with zero surge pricing and GST billing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#corp-enquiry"
                className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-[#D6A84B] to-[#FFE08A] px-6 py-3 text-sm font-black text-black shadow-[0_8px_30px_rgba(214,168,75,0.4)] hover:opacity-90 transition"
              >
                <Briefcase size={16} />
                Get Corporate Quote
              </a>
              <a
                href={`https://wa.me/919442245678?text=Hi%2C%20I%20need%20corporate%20taxi%20service%20from%20MAK%20TAXI%20Madurai`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-sm font-bold text-white hover:border-[#D6A84B] transition"
              >
                <FaWhatsapp className="text-green-400 text-base" />
                WhatsApp Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="border-t border-white/5 bg-white/[0.015]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-2xl sm:text-3xl font-black text-[#D6A84B]">{s.value}</div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          2. USE CASES GRID
      ════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-[11px] font-black uppercase tracking-[4px] text-[#D6A84B]">What We Cover</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
            Everything Your Business{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84B] to-[#FFE08A]">
              Needs to Move
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u, i) => {
            const Icon = u.icon;
            return (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group flex gap-4 rounded-[24px] border border-white/8 bg-white/[0.025] p-6 hover:border-[#D6A84B]/50 hover:bg-[#D6A84B]/5 transition-all duration-300"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D6A84B]/12 text-[#D6A84B] group-hover:bg-[#D6A84B]/20 transition">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-black text-white text-sm mb-1 group-hover:text-[#FFE08A] transition">{u.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{u.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════
          3. PRICING PLANS
      ════════════════════════════════════ */}
      <div className="relative z-10 border-t border-white/5 bg-black/20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <span className="text-[11px] font-black uppercase tracking-[4px] text-[#D6A84B]">Fleet Packages</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              Transparent Pricing.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84B] to-[#FFE08A]">
                Zero Hidden Costs.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((pkg, i) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex flex-col rounded-[28px] border p-7 ${pkg.accent}`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-[#D6A84B] to-[#FFE08A] px-4 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-lg font-black text-white">{pkg.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{pkg.sub}</p>
                </div>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black text-[#D6A84B]">{pkg.price}</span>
                  <span className="text-xs text-gray-500">{pkg.per}</span>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-[#D6A84B] shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("corp-enquiry");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full rounded-2xl py-3 text-sm font-bold transition-all duration-300 ${pkg.btnClass}`}
                >
                  {pkg.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          4. WHY MAK TAXI
      ════════════════════════════════════ */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="text-[11px] font-black uppercase tracking-[4px] text-[#D6A84B]">Why MAK TAXI</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Madurai's Most Reliable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84B] to-[#FFE08A]">
                Corporate Fleet
              </span>
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-lg">
              Unlike app-based surge taxis, MAK TAXI operates on transparent meter rates — 24x7, 365 days.
              Your employees never overpay during peak hours, rain, or festivals.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: ShieldCheck, title: "Zero Surge Guarantee",    sub: "Standard meter rates even during peak hours & festivals." },
                { icon: Clock,       title: "On-Time SLA",             sub: "10-minute pickup guarantee for corporate accounts." },
                { icon: FileText,    title: "Monthly GST Invoicing",   sub: "Automated tax-compliant invoices for hassle-free accounting." },
                { icon: Star,        title: "4.8★ Driver Rating",      sub: "Background-verified, courteous, trained corporate chauffeurs." },
              ].map(({ icon: Icon, title, sub }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-3.5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D6A84B]/12 text-[#D6A84B]">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#D6A84B]/20 to-transparent blur-2xl scale-105" />
            <div className="relative rounded-[32px] border border-[#D6A84B]/30 bg-[#111] p-7 sm:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-2 mb-5">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[2.5px] text-emerald-400">Active Corporate Fleet</span>
              </div>

              <h3 className="text-xl font-black text-white mb-1">Fleet Available Now</h3>
              <p className="text-xs text-gray-400 mb-6">Dedicated corporate vehicles in Madurai, ready to dispatch.</p>

              {[
                { type: "Prime Sedans",    count: "18 units", rate: "₹13/km", status: "Available" },
                { type: "Innova Crysta",   count: "6 units",  rate: "₹21/km", status: "Available" },
                { type: "Family SUVs",     count: "9 units",  rate: "₹17/km", status: "Available" },
              ].map((v, i) => (
                <div key={v.type} className={`flex items-center justify-between py-3 ${i < 2 ? "border-b border-white/5" : ""}`}>
                  <div>
                    <div className="text-sm font-bold text-white">{v.type}</div>
                    <div className="text-[11px] text-gray-500">{v.count} • {v.rate}</div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[10px] font-bold text-emerald-400">
                    {v.status}
                  </span>
                </div>
              ))}

              <div className="mt-6 flex gap-3">
                <a
                  href="tel:04524567890"
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-[#D6A84B] py-3 text-xs font-black text-black hover:bg-[#FFE08A] transition"
                >
                  <PhoneCall size={14} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/919442245678?text=Hi%2C%20interested%20in%20MAK%20TAXI%20corporate%20fleet`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 py-3 text-xs font-bold text-white hover:border-[#D6A84B] transition"
                >
                  <FaWhatsapp className="text-green-400 text-sm" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════
          5. ENQUIRY FORM
      ════════════════════════════════════ */}
      <div
        id="corp-enquiry"
        className="relative z-10 border-t border-white/5 bg-[#0a0a0a]"
      >
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[11px] font-black uppercase tracking-[4px] text-[#D6A84B]">Get a Quote</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">
              Corporate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D6A84B] to-[#FFE08A]">
                Enquiry Form
              </span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">Fill in your details — our corporate team will respond within 2 hours.</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[32px] border border-[#D6A84B]/25 bg-[#111]/90 p-7 sm:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl space-y-4"
          >
            {/* Corner accent */}
            <div className="absolute top-0 right-0 h-8 w-20 bg-[repeating-linear-gradient(45deg,#D6A84B_0px,#D6A84B_6px,#111_6px,#111_12px)] opacity-20 pointer-events-none rounded-tr-[32px]" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Arjun Kumar"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Company Name</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Acme Technologies"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none transition"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Phone Number</label>
                <input
                  required
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none transition"
                />
              </div>
              <div>
                <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  placeholder="e.g. hr@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Fleet Size Needed</label>
              <select
                value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-[#161616] px-4 py-3 text-xs text-white focus:border-[#D6A84B] focus:outline-none"
              >
                <option value="">Select team size</option>
                <option>1–10 employees</option>
                <option>11–50 employees</option>
                <option>51–200 employees</option>
                <option>200+ employees</option>
                <option>Event / One-time requirement</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-400 mb-1.5">Additional Requirements</label>
              <textarea
                rows={3}
                placeholder="e.g. Daily office commute for 30 employees, airport transfers twice a week..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white placeholder-gray-500 focus:border-[#D6A84B] focus:outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="group w-full rounded-2xl bg-gradient-to-r from-[#D6A84B] via-[#FFE08A] to-[#C9922C] py-4 text-sm font-black uppercase tracking-wider text-black shadow-[0_12px_40px_rgba(214,168,75,0.35)] hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Enquiry Sent! We'll Call You Soon.
                </>
              ) : (
                <>
                  <Briefcase size={16} />
                  Submit Corporate Enquiry
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-gray-500 mt-2">
              Or call directly: <a href="tel:04524567890" className="text-[#D6A84B] font-bold hover:underline">0452 456 7890</a>
            </p>
          </motion.form>
        </div>
      </div>

    </section>
  );
}
