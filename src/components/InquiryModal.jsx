"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, Calendar, Users, Mail, Phone, User, MessageSquare } from "lucide-react";
import { submitInquiry } from "@/lib/api";

export default function InquiryModal({
  isOpen,
  onClose,
  initialItem,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: initialItem ? `Pre-Order: ${initialItem}` : "Atelier Table Reservation",
    guests: "2",
    date: "",
    message: initialItem ? `I would like to pre-order / reserve: ${initialItem}` : "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await submitInquiry(formData);
      setSubmitted(true);
      setResponseMsg(res.message || "Your inquiry has been successfully received.");
    } catch (err) {
      setSubmitted(true);
      setResponseMsg("Your inquiry has been registered with the concierge.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-lg flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-[#121212] border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-scaleUp my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-5">
            <div className="w-16 h-16 bg-white/10 border border-white/20 text-amber-200 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif-luxury text-white">
              Request Received
            </h3>
            <p className="text-zinc-300 text-sm font-light leading-relaxed max-w-xs mx-auto">
              {responseMsg}
            </p>
            <p className="text-xs text-zinc-500">
              Our atelier concierge will contact you within 2 hours to confirm your bakes.
            </p>
            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-white text-black font-semibold text-xs rounded-xl tracking-wider hover:bg-zinc-200 transition-colors"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-amber-200/80 font-medium">
                Olene Canto Concierge
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white mt-1">
                Pre-Orders & Atelier Booking
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light mt-1">
                Reserve your morning bakery flight, bespoke cake, or wholesale inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="eleanor@canto.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 focus:ring-1 focus:ring-white/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      placeholder="+1 (555) 019-2834"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Experience Type */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Experience / Inquiry Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-all"
                >
                  <option value="Atelier Table Reservation">Atelier Table Reservation</option>
                  <option value="Viennoiserie Morning Box Pre-Order">Viennoiserie Morning Box Pre-Order</option>
                  <option value="Bespoke Celebration Gateau Order">Bespoke Celebration Gateau Order</option>
                  <option value="White Loaf Commercial Wholesale Inquiry">White Loaf Commercial Wholesale Inquiry</option>
                  <option value="Du Four Export Distribution Partnership">Du Four Export Distribution Partnership</option>
                  {initialItem && <option value={`Pre-Order: ${initialItem}`}>{initialItem}</option>}
                </select>
              </div>

              {/* Date & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                    Party / Order Size
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#1c1c1e] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/40 transition-all"
                    >
                      <option value="1">1 - 2 Persons (Individual / Couple)</option>
                      <option value="4">3 - 4 Persons (Small Group)</option>
                      <option value="8">5 - 10 Persons (Celebration)</option>
                      <option value="Bulk">Bulk Commercial / Wholesale Order</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-zinc-400 mb-1.5 font-medium">
                  Special Notes / Dietary Preferences
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                  <textarea
                    rows={3}
                    placeholder="Mention any dietary notes, customized messages on cakes, or specific pickup timings..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/40 transition-all"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-white text-black font-semibold text-xs tracking-wider rounded-xl hover:bg-zinc-200 transition-all duration-300 shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>TRANSMITTING TO CONCIERGE...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>CONFIRM & SEND REQUEST</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
