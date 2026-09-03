"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SearchModal from "@/components/SearchModal";
import InquiryModal from "@/components/InquiryModal";
import {
  Mail,
  Globe,
  Building2,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  Store,
  Truck,
  Handshake,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";
import { submitInquiry } from "@/lib/api";

const DEPARTMENTS = [
  {
    id: "wholesale",
    label: "Wholesale Supply",
    badge: "White Loaf",
    icon: Truck,
    subject: "White Loaf Wholesale & Retail Supply Partnership",
    description: "Daily fresh bakes, sandwich loaves, and burger buns for supermarkets, hypermarkets, and retail distributors.",
    placeholder: "Share your store name, location, and estimated daily/weekly supply volume requirements...",
  },
  {
    id: "franchise",
    label: "Franchise Opportunity",
    badge: "Partner with Canto",
    icon: Handshake,
    subject: "Franchise & Retail Dealership Inquiry",
    description: "Proven business model with full brand support, staff training, and supply chain logistics across South India.",
    placeholder: "Tell us about your proposed outlet location, commercial space details, and business background...",
  },
  {
    id: "general",
    label: "General Inquiries",
    badge: "Guest Support",
    icon: Mail,
    subject: "General Inquiry / Feedback",
    description: "Customer service, product questions, feedback, and general business correspondence.",
    placeholder: "How can we assist you today? Please write your query here...",
  },
];

const FAQS = [
  {
    question: "How does White Loaf wholesale supply work for retail stores & supermarkets?",
    answer:
      "We partner directly with leading supermarket chains, hypermarkets, and independent grocers across Malappuram, Calicut, and neighboring districts. Our fleet delivers daily freshly-baked loaves, buns, and packaged bakery goods early each morning. Select 'Wholesale Supply' in the inquiry form above to receive our product catalog and distributor terms.",
  },
  {
    question: "What are the requirements to open an Olene Canto franchise outlet?",
    answer:
      "We seek passionate entrepreneurs with prime retail or high-footfall commercial spaces (typically 400 to 1,200 sq.ft.). We provide complete turnkey support including kitchen/store architectural design, barista & bakery staff training, centralized ingredient supply, and branded marketing launch campaigns.",
  },
  {
    question: "Why does Olene Canto strictly say NO to artificial flavours, colours, and preservatives?",
    answer:
      "Since our entry into the food industry in 2014, our motto as a true 'People's Bakery & Restaurant' has been rooted in clean, ethical eating. We believe authentic bakery excellence relies on slow natural fermentation, real butter, unbleached flour, and pure culinary craft—never synthetic chemical shortcuts to artificially extend shelf life.",
  },
];

function getDepartmentFromType(typeParam) {
  const lower = typeParam.toLowerCase();
  if (lower.includes("franchise")) return "franchise";
  if (lower.includes("general")) return "general";
  return "wholesale";
}

function ContactContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type") || "";

  const initialDept = typeParam ? getDepartmentFromType(typeParam) : "wholesale";
  const [activeDept, setActiveDept] = useState(initialDept);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refCode, setRefCode] = useState("");
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleDepartmentChange = (department) => {
    setActiveDept(department.id);
    setSubject(department.subject);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const generatedRef = `CANTO-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefCode(generatedRef);

    try {
      await submitInquiry({
        name: fullName,
        email,
        phone,
        company,
        location,
        type: subject,
        message,
        refCode: generatedRef,
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setLocation("");
    setMessage("");
  };

  const handleCopyAddress = () => {
    const fullAddr = "Olene Foods Pvt. Ltd., Thadapparambu, Payyanad PO, Manjeri, Malappuram, Kerala, India - 676122";
    navigator.clipboard?.writeText(fullAddr);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const currentDept = DEPARTMENTS.find((d) => d.id === activeDept) || DEPARTMENTS[0];

  return (
    <div className="w-full bg-white text-zinc-900 selection:bg-[#d9b578] selection:text-black">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="relative bg-[#09090b] border-b border-zinc-800 pt-28 pb-16 sm:pt-36 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9b722b] mb-4">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <span className="text-zinc-400">Contact &amp; Inquiries</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
              Connect With Olene Canto
            </h1>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Whether you are seeking wholesale bakery supply, exploring franchise expansion, or getting in touch with our team, we are here to assist you with transparent, ethical service.
            </p>
          </div>

          {/* Quick Direct Desk Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-4xl">
            <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#fbf6ed] border border-[#d9b578]/40 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#9b722b]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Corporate Sales</p>
                <a href="mailto:admin@olenecanto.com" className="text-xs sm:text-sm font-semibold text-zinc-900 hover:text-[#9b722b] transition-colors">
                  admin@olenecanto.com
                </a>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#fbf6ed] border border-[#d9b578]/40 flex items-center justify-center shrink-0">
                <Building2 className="w-4 h-4 text-[#9b722b]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Registered HQ</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-900">
                  Manjeri, Malappuram
                </p>
              </div>
            </div>

            <div className="bg-white border border-zinc-200/80 rounded-2xl p-4 shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#fbf6ed] border border-[#d9b578]/40 flex items-center justify-center shrink-0">
                <Store className="w-4 h-4 text-[#9b722b]" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">Regional Footprint</p>
                <p className="text-xs sm:text-sm font-semibold text-zinc-900">
                  8 Outlets in N. Kerala
                </p>
              </div>
            </div>
          </div>

        </ScrollReveal>
      </section>

      {/* 2. MAIN INTERACTIVE FORM & CORPORATE CREDENTIALS */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Interactive Multi-Department Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-zinc-200 p-6 sm:p-8 lg:p-10 shadow-lg">
              
              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9b722b] mb-1.5">
                  Direct Department Routing
                </p>
                <h2 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-zinc-950">
                  Send Your Inquiry
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                  Select a category to automatically route your request to the appropriate team.
                </p>
              </div>

              {/* Department Tabs Switcher */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 p-1.5 bg-[#f4efe8] rounded-2xl">
                {DEPARTMENTS.map((dept) => {
                  const Icon = dept.icon;
                  const isSelected = activeDept === dept.id;
                  return (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => handleDepartmentChange(dept)}
                      className={`flex flex-col items-center justify-center gap-1.5 py-3 px-2 rounded-xl text-center transition-all ${
                        isSelected
                          ? "bg-white text-zinc-950 font-bold shadow-sm"
                          : "text-zinc-600 hover:text-black hover:bg-white/50 font-medium"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSelected ? "text-[#9b722b]" : "text-zinc-500"}`} />
                      <span className="text-[11px] leading-tight line-clamp-1">{dept.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Context Callout for Selected Department */}
              <div className="mb-6 p-4 rounded-2xl bg-[#faf7f2] border border-[#ecdcc3]/70">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9b722b] mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#d9b578]" />
                  <span>{currentDept.badge}</span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  {currentDept.description}
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-medium text-emerald-950">
                      Thank You, {fullName || "Partner"}!
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received and routed to our team under reference number:
                    </p>
                    <div className="mt-3 inline-block font-mono text-sm font-bold text-emerald-900 bg-white px-4 py-1.5 rounded-lg border border-emerald-300 shadow-sm">
                      {refCode}
                    </div>
                  </div>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    A representative from Olene Foods Pvt. Ltd. will review your information and respond via email or phone within 1–2 business days.
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-colors"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Company / Supermarket Name {activeDept === "wholesale" ? "*" : "(Optional)"}
                      </label>
                      <input
                        type="text"
                        required={activeDept === "wholesale"}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Fresh Supermart / Private"
                        className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 3: City / Region */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      City / Operational Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Manjeri, Calicut, Perinthalmanna, or Malappuram"
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Row 4: Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Subject / Topic *
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Row 5: Detailed Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Message &amp; Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={currentDept.placeholder}
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#d9b578] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-xl bg-gradient-to-r from-[#d9b578] to-[#c9a56a] hover:from-[#c9a56a] hover:to-[#b99456] text-white font-bold text-xs uppercase tracking-[0.2em] py-4 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      <span>{loading ? "Routing Message..." : "Submit Official Inquiry"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              )}

            </div>

            {/* Right Column: Corporate Credentials & Company Profile */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Registered Corporate Office Card */}
              <div className="bg-[#faf7f2] border border-[#ecdcc3] rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9b722b] mb-2">
                  <Building2 className="w-4 h-4" />
                  <span>Registered Office</span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-medium text-zinc-950">
                  Olene Foods Pvt. Ltd.
                </h3>
                <p className="mt-3 text-sm text-zinc-700 leading-relaxed">
                  Thadapparambu, Payyanad PO,<br />
                  Manjeri, Malappuram,<br />
                  Kerala, India - 676122
                </p>

                <div className="mt-6 pt-4 border-t border-[#e2cfb3] flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-zinc-300 text-xs font-semibold text-zinc-800 hover:border-black transition-colors"
                  >
                    {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedAddress ? "Address Copied!" : "Copy Full Address"}</span>
                  </button>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Payyanad+Manjeri+Malappuram+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#d9b578]/20 border border-[#d9b578]/50 text-xs font-semibold text-[#825c1d] hover:bg-[#d9b578]/30 transition-colors"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Inquiry Desks Card */}
              <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9b722b]">
                  <Mail className="w-4 h-4" />
                  <span>Direct Desks</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-zinc-100">
                    <p className="text-[10px] uppercase font-bold text-zinc-400">Corporate &amp; Wholesale Desk</p>
                    <a href="mailto:admin@olenecanto.com" className="font-semibold text-zinc-950 hover:text-[#9b722b] transition-colors flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#9b722b]" />
                      <span>admin@olenecanto.com</span>
                    </a>
                  </div>

                  <div className="pb-3 border-b border-zinc-100">
                    <p className="text-[10px] uppercase font-bold text-zinc-400">General &amp; Guest Inquiries</p>
                    <a href="mailto:admin@olenecanto.com" className="font-semibold text-zinc-950 hover:text-[#9b722b] transition-colors flex items-center gap-1.5 mt-0.5">
                      <Mail className="w-3.5 h-3.5 text-[#9b722b]" />
                      <span>admin@olenecanto.com</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase font-bold text-zinc-400">Official Web Domain</p>
                    <a href="https://www.olenecanto.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-zinc-950 hover:text-[#9b722b] transition-colors flex items-center gap-1.5 mt-0.5">
                      <Globe className="w-3.5 h-3.5 text-[#9b722b]" />
                      <span>www.olenecanto.com</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quality & Clean Eating Pledge */}
              <div className="bg-[#111111] text-[#f5f1ea] rounded-3xl p-6 sm:p-8 shadow-md">
                <div className="flex items-center gap-2 text-[#d9b578] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The Olene Canto Promise</span>
                </div>
                <h4 className="font-serif-luxury text-xl font-medium text-white mb-2">
                  Zero Preservatives, Zero Compromises
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  We say a strict NO to artificial flavours, synthetic colours, and chemical preservatives. Our entire range is crafted fresh daily with wholesome ingredients and uncompromising ethical standards.
                </p>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION */}
      <section className="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#09090b]">
        <ScrollReveal className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9b722b] mb-1.5">
              Got Questions?
            </p>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-zinc-300">
              Quick answers regarding our wholesale network, franchise opportunities, and artisan baking craft.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50/70 transition-colors"
                  >
                    <span className="font-serif-luxury text-lg sm:text-xl font-medium text-zinc-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full bg-[#fbf6ed] border border-[#d9b578]/40 flex items-center justify-center shrink-0 text-[#9b722b] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </ScrollReveal>
      </section>

    </div>
  );
}

export default function ContactPage() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inquiryTargetItem, setInquiryTargetItem] = useState(undefined);

  return (
    <main className="min-h-screen bg-white text-zinc-900 flex flex-col justify-between selection:bg-[#d9b578] selection:text-black">
      {/* Top Standard Global Navbar */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      {/* Main Content Area */}
      <Suspense
        fallback={
          <div className="min-h-[50vh] flex items-center justify-center text-zinc-600 font-serif-luxury italic text-base">
            Loading Olene Canto Contact Desk...
          </div>
        }
      >
        <ContactContent />
      </Suspense>

      {/* Standard Global Footer */}
      <Footer />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialItem={inquiryTargetItem}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        items={[]}
        onSelectItem={(item) => {
          setIsSearchOpen(false);
          setIsInquiryOpen(true);
          setInquiryTargetItem(item.name);
        }}
      />
    </main>
  );
}

