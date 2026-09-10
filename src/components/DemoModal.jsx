import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  User,
  Phone,
  BookOpen,
  ShieldCheck,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  MonitorCheck,
  Sparkles,
  ArrowRight,
  Building2,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Official CADD Centre Manjeri Contact Info
const WHATSAPP_NUMBER = '918891550060';

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: 'Diploma / B.Tech / BE',
    location: '',
    discipline: 'Interior Design',
    mode: 'Classroom (Manjeri)'
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi CADD Centre Manjeri! I just submitted an enquiry for ${formData.discipline} (${formData.mode}). Name: ${formData.name}, Location: ${formData.location || 'Manjeri'}. Please share the syllabus & fee structure.`
  )}`;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 font-['Plus_Jakarta_Sans',sans-serif]"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        />

        {/* Modal Dialog — 2-Column Split Academy Model */}
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-[24px] shadow-2xl border border-slate-200 z-10 overflow-hidden max-h-[92vh] flex flex-col md:flex-row overscroll-contain"
        >
          {/* Subtle Ambient Light Gradients */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button (Universal) */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 z-30 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <>
              {/* =========================================
                  LEFT PANEL: Trust, Credentials & Highlights
                 ========================================= */}
              <div className="md:w-5/12 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-slate-200">
                <div className="relative z-10">
                  {/* Verified Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-[11px] font-bold tracking-wider uppercase mb-3.5 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span>CADD Centre Manjeri</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
                    Start Your Engineering Journey
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Kerala’s top training hub for professional CAD, BIM, MEP, and Project Management certifications.
                  </p>

                  {/* 4 Value Pillars */}
                  <div className="my-6 space-y-3.5">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Global Certification</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Internationally recognized in 30+ countries & Gulf
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Briefcase className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">100% Placement Support</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Direct job referrals across Kerala & GCC firms
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <MonitorCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Live Industry Projects</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          Hands-on training with real construction & CAD plans
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">Free Demo &amp; Counseling</h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          1-on-1 guidance with certified senior faculty
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Status Indicator */}
                <div className="relative z-10 pt-3 border-t border-slate-200 flex items-center gap-3 bg-white -mx-2 px-3 py-2 rounded-xl shadow-xs border">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold text-slate-900 leading-none">Admission Desk Active</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">Expect counselor callback within 15 mins</p>
                  </div>
                </div>
              </div>

              {/* =========================================
                  RIGHT PANEL: Interactive Course Enquiry Form
                 ========================================= */}
              <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[90vh] bg-white">
                <div>
                  {/* Form Header */}
                  <div className="mb-5 text-left pr-8">
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Admissions &amp; Course Enquiry</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      Enquire at CADD Centre
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Enter your details below to receive syllabus breakdown, fee structure, and batch timings.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                    {/* 1. Full Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name <span className="text-blue-600">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all shadow-xs"
                        />
                      </div>
                    </div>

                    {/* 2. Phone & Qualification Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number <span className="text-blue-600">*</span>
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Qualification
                        </label>
                        <div className="relative">
                          <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            value={formData.qualification}
                            onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer shadow-xs"
                          >
                            <option value="Diploma / B.Tech / BE">Diploma / B.Tech / BE</option>
                            <option value="Plus Two / Higher Secondary">Plus Two / Higher Secondary</option>
                            <option value="Degree / Graduate">Degree / Graduate</option>
                            <option value="ITI / Technical Diploma">ITI / Technical Diploma</option>
                            <option value="Working Professional">Working Professional</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* 3. Location & Preferred Course Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Location <span className="text-blue-600">*</span>
                        </label>
                        <div className="relative">
                          <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Manjeri, Malappuram"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:bg-white transition-all shadow-xs"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Course
                        </label>
                        <div className="relative">
                          <BookOpen className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                          <select
                            value={formData.discipline}
                            onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer shadow-xs"
                          >
                            <option value="Interior Design">Interior Design</option>
                            <option value="BIM [Building Information Modelling]">BIM [Building Information Modelling]</option>
                            <option value="MEP with BIM">MEP with BIM</option>
                            <option value="Structural Design">Structural Design</option>
                            <option value="Project Planning &amp; Management">Project Planning &amp; Management</option>
                            <option value="Surveying &amp; Transportation">Surveying &amp; Transportation</option>
                            <option value="Product Design">Product Design</option>
                            <option value="AutoCAD">AutoCAD (Civil / Mech / Elec)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* 4. Training Mode Choice */}
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Preferred Training Mode
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: 'Classroom (Manjeri)' })}
                          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.mode === 'Classroom (Manjeri)'
                              ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Building2 className="w-3.5 h-3.5 shrink-0" />
                          <span>Classroom (Manjeri)</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData({ ...formData, mode: 'Live Online' })}
                          className={`flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                            formData.mode === 'Live Online'
                              ? 'bg-blue-50 border-blue-600 text-blue-700 shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Laptop className="w-3.5 h-3.5 shrink-0" />
                          <span>Live Online</span>
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="group w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                      >
                        <span>Submit Course Enquiry &amp; Get Syllabus</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                    {/* Trust Footnote */}
                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>100% Confidential • Official CADD Centre Support • Zero Spam</span>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            /* =========================================
                SUCCESS STATE: Confirmation + WhatsApp Action
               ========================================= */
            <div className="w-full p-8 sm:p-12 text-center space-y-4 max-w-xl mx-auto bg-white">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-black text-slate-900">Enquiry Received!</h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-1.5 max-w-md mx-auto">
                <p className="text-xs text-slate-700">
                  <span className="text-slate-500">Student:</span> <strong className="text-slate-900">{formData.name}</strong>
                </p>
                <p className="text-xs text-slate-700">
                  <span className="text-slate-500">Course:</span> <strong className="text-blue-700">{formData.discipline}</strong> ({formData.mode})
                </p>
                <p className="text-xs text-slate-700">
                  <span className="text-slate-500">Contact:</span> <strong className="text-slate-900">{formData.phone}</strong>
                </p>
                <p className="text-[11px] text-emerald-600 pt-1 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Our senior counselor will call you within 15 minutes.
                </p>
              </div>

              {/* Instant WhatsApp Connect CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
                >
                  <WhatsAppGlyph className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp Now</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
