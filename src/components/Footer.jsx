import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Globe, Send, CheckCircle2, MessageSquare, Clock, Sparkles } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const [formData, setFormData] = useState({ name: '', phone: '', discipline: 'Master Certificate in BIM' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi CADD Centre Manjeri, my name is ${formData.name}. Phone: ${formData.phone}. I am interested in: ${formData.discipline}. Please share course details and batch timings.`);
    window.open(`https://wa.me/918891550060?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const quickLinks = [
    { label: 'DISCIPLINES', href: '#features' },
    { label: 'CURRICULUM', href: '#features' },
    { label: 'PLACEMENT TELEMETRY', href: '#placement' },
    { label: 'FACULTY & EXPERTS', href: '#about' },
    { label: 'STUDENT REVIEWS', href: '#testimonials' },
    { label: 'FAQS', href: '#faq' },
  ];

  return (
    <footer className="relative bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] pt-12 sm:pt-16 select-none border-t border-slate-200">

      {/* ========================================================= */}
      {/* 06 GET IN TOUCH / BENTO CONTACT CARDS                     */}
      {/* ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Left Bento: 06 Campus Information & Coordinates */}
          <div className="lg:col-span-5 rounded-[28px] bg-slate-50 border border-slate-200 p-7 sm:p-9 flex flex-col justify-between text-left relative overflow-hidden shadow-xl">
            <div className="space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0D62FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-3">
                  06 INFORMATION
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                  MANJERI CAMPUS.
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Asia&apos;s largest network for CAD, BIM &amp; Project Management. Authorized Autodesk, Bentley &amp; PTC training centre.
                </p>
              </div>

              {/* Coordinates List */}
              <div className="space-y-4 font-mono text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-[#0D62FE] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">CAMPUS LOCATION</div>
                    <div className="font-sans text-xs sm:text-[13px] text-slate-800 font-semibold mt-0.5">
                      2nd Floor, Korambayil Corporate Mall, Calicut Road, Above Dhanlaxmi Bank, Manjeri, Kerala 676121
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-[#0D62FE] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">DIRECT ADMISSION DESK</div>
                    <div className="font-sans text-xs sm:text-[13px] text-slate-800 font-semibold mt-0.5 space-x-2">
                      <a href="tel:+918891550060" className="hover:text-[#0D62FE] transition-colors">+91 88915 50060</a>
                      <span>·</span>
                      <a href="tel:+917025569638" className="hover:text-[#0D62FE] transition-colors">+91 70255 69638</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-[#0D62FE] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">OFFICIAL EMAIL</div>
                    <div className="font-sans text-xs sm:text-[13px] text-slate-800 font-semibold mt-0.5">
                      <a href="mailto:manjeri@caddcentre.com" className="hover:text-[#0D62FE] transition-colors">
                        manjeri@caddcentre.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 text-[#0D62FE] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold">BATCH &amp; LAB TIMINGS</div>
                    <div className="font-sans text-xs sm:text-[13px] text-slate-800 font-semibold mt-0.5">
                      Mon – Sat: 08:30 AM – 07:30 PM (Sun: Special Batches)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                ADMISSIONS OPEN 2026
              </span>
              <span className="text-slate-400">[ CODE: CC-MNJ ]</span>
            </div>
          </div>

          {/* Right Bento: Fast Technical Admission Form */}
          <div className="lg:col-span-7 rounded-[28px] bg-white border border-slate-200 p-7 sm:p-9 flex flex-col justify-between text-left shadow-xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0D62FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                  LET&apos;S BUILD TOGETHER
                </span>
                <span className="font-mono text-[11px] text-slate-400 uppercase">
                  [ FAST ENQUIRY ]
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                START YOUR CAD &amp; BIM ROADMAP.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Receive free syllabus brochures, live project walkthrough, and fees schedule on WhatsApp.
              </p>

              {submitted ? (
                <div className="my-8 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Enquiry Transmitted</h4>
                  <p className="text-xs text-emerald-700">Thank you! Connecting you directly to our admissions officer on WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                        [ YOUR FULL NAME ]
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Er. Suhaib K."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0D62FE] focus:ring-2 focus:ring-blue-500/20 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                        [ PHONE / WHATSAPP ]
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0D62FE] focus:ring-2 focus:ring-blue-500/20 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[11px] font-bold text-slate-600 uppercase mb-1.5">
                      [ PROGRAM OF INTEREST ]
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-[#0D62FE] focus:ring-2 focus:ring-blue-500/20 font-medium cursor-pointer"
                    >
                      <option value="Master Certificate in BIM">Master Certificate in BIM (Revit Arch / Struct / MEP)</option>
                      <option value="Executive Diploma in Interior Design">Executive Diploma in Interior Design (AutoCAD, 3ds Max, Lumion)</option>
                      <option value="Civil CADD & STAAD.Pro">Civil CADD &amp; Structural Detailing (AutoCAD + STAAD.Pro)</option>
                      <option value="Mechanical CAD & SolidWorks">Mechanical CAD &amp; Product Design (SolidWorks + CATIA)</option>
                      <option value="MEP Systems & Revit MEP">MEP Systems Engineering (HVAC, Electrical, Plumbing)</option>
                      <option value="General AutoCAD 2D & 3D">General AutoCAD 2D &amp; 3D Drafting</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-[#0D62FE] hover:bg-[#0045D8] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-[0.98] cursor-pointer"
                    >
                      <span>TRANSMIT ENQUIRY</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>ZERO SPAM POLICY · DIRECT COUNSELOR REACH</span>
              <button
                type="button"
                onClick={onOpenDemo}
                className="text-[#0D62FE] hover:underline font-bold"
              >
                [ BOOK DEMO INSTEAD ]
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN FOOTER BODY WITH AUTHENTIC RED LOGO & WATERMARK      */}
      {/* ========================================================= */}
      <div className="relative overflow-hidden border-t border-slate-200 bg-white pt-12 pb-10">
        {/* Subtle Watermark Typography */}
        <div className="absolute inset-x-0 bottom-0 overflow-hidden pointer-events-none opacity-[0.035] text-center select-none">
          <span className="font-mono text-6xl sm:text-8xl lg:text-[130px] font-black tracking-tighter uppercase whitespace-nowrap text-slate-900">
            CADD CENTRE MANJERI
          </span>
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Brand Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <a href="#" className="shrink-0 flex items-center">
              {/* AUTHENTIC RED CADD LOGO */}
              <img
                src="/CADD.png"
                alt="CADD Centre Manjeri Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-end font-mono text-xs text-slate-600">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#0D62FE] transition-colors"
                >
                  [ {link.label} ]
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Copyright & Authorization Strip */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} CADD CENTRE MANJERI. ALL RIGHTS RESERVED.</p>
            <p className="text-center sm:text-right">
              AUTHORIZED CAD, BIM, MEP &amp; INTERIOR TRAINING NETWORK · ISO 9001:2015 CERTIFIED
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
