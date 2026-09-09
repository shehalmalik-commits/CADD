import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Mail, User, Phone, BookOpen, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    qualification: 'Diploma / B.Tech / BE',
    location: '',
    discipline: 'Interior Design'
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

  return (
    <AnimatePresence>
      <div 
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Plus_Jakarta_Sans',sans-serif]"
      >
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Dialog */}
        <motion.div 
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-[20px] p-6 sm:p-8 shadow-2xl border border-[rgba(28,37,51,0.12)] z-10 overflow-y-auto max-h-[92vh] overscroll-contain"
        >
          {/* Close Button */}
          <button 
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-1.5 rounded-[8px] text-[#687282] hover:text-[#1C2533] hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-5 text-left">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#E94B3C]/10 text-[#E94B3C] text-[11px] font-bold uppercase tracking-wider mb-2">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Admissions &amp; Course Enquiry</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C2533]">Enquire at CADD Centre</h3>
                <p className="text-xs text-[#687282] mt-1">
                  Connect with our counselors in Manjeri for syllabus details, batch timings, and fee structure.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                {/* 1. Name */}
                <div>
                  <label className="block text-[11px] font-bold text-[#1C2533] uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9299A3] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-medium text-[#1C2533] placeholder-[#9299A3] focus:outline-none focus:border-[#E94B3C] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* 2. Phone & Qualification Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1C2533] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#9299A3] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-medium text-[#1C2533] placeholder-[#9299A3] focus:outline-none focus:border-[#E94B3C] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1C2533] uppercase tracking-wider mb-1">
                      Qualification
                    </label>
                    <div className="relative">
                      <select 
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-medium text-[#1C2533] focus:outline-none focus:border-[#E94B3C] focus:bg-white transition-all"
                      >
                        <option>Diploma / B.Tech / BE</option>
                        <option>Plus Two / Higher Secondary</option>
                        <option>Degree / Graduate</option>
                        <option>ITI / Technical Diploma</option>
                        <option>Working Professional</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Location & Preferred Course Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-[#1C2533] uppercase tracking-wider mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#9299A3] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Manjeri, Malappuram"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-medium text-[#1C2533] placeholder-[#9299A3] focus:outline-none focus:border-[#E94B3C] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1C2533] uppercase tracking-wider mb-1">
                      Preferred Course
                    </label>
                    <select 
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-xs font-medium text-[#1C2533] focus:outline-none focus:border-[#E94B3C] focus:bg-white transition-all"
                    >
                      <option value="Interior Design">Interior Design</option>
                      <option value="BIM [Building Information Modelling]">BIM [Building Information Modelling]</option>
                      <option value="MEP with BIM">MEP with BIM</option>
                      <option value="Structural Design">Structural Design</option>
                      <option value="Project Planning & Management">Project Planning & Management</option>
                      <option value="Surveying & Transportation">Surveying & Transportation</option>
                      <option value="Product Design">Product Design</option>
                      <option value="Mechanical CADD">Mechanical CADD</option>
                      <option value="Electrical CADD">Electrical CADD</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="md" className="w-full">
                    Submit Course Enquiry
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#9299A3] pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Authorized CADD Centre certification • Free demo session</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1C2533]">Enquiry Received!</h3>
              <p className="text-xs text-[#687282] max-w-xs mx-auto leading-relaxed">
                Thank you <span className="font-bold text-[#1C2533]">{formData.name}</span> from <span className="font-bold text-[#1C2533]">{formData.location || 'Manjeri'}</span>. Our admission counselors will contact you on <span className="font-bold text-[#E94B3C]">{formData.phone}</span> regarding <span className="font-bold text-[#1C2533]">{formData.discipline}</span> shortly.
              </p>
              <div className="pt-2">
                <Button onClick={handleResetAndClose} variant="secondary" size="sm">
                  Close Window
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
