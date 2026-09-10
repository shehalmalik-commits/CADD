import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  MapPin
} from 'lucide-react';
import useOverlayHistory from '../hooks/useOverlayHistory';

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export default function FacultyModal({ isOpen, onClose, faculty, onOpenDemo }) {
  // Back / swipe-back closes the modal
  useOverlayHistory(isOpen, onClose);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  if (!isOpen || !faculty) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi CADD Centre Manjeri! I would like to consult with ${faculty.name} (${faculty.role}) regarding engineering training & course syllabus.`
  );
  const whatsappUrl = `https://wa.me/918891550060?text=${whatsappMessage}`;

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
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Dialog (2-Column Bento Dossier) */}
        <motion.div
          data-lenis-prevent="true"
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-[28px] shadow-[0_25px_70px_rgba(0,0,0,0.45)] border border-slate-200 z-10 overflow-hidden max-h-[92vh] flex flex-col md:flex-row overscroll-contain"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-30 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-colors cursor-pointer border border-slate-200 shadow-xs"
            aria-label="Close dossier"
          >
            <X className="w-5 h-5" />
          </button>

          {/* ========================================================= */}
          {/* LEFT PANEL: Portrait, Identity & Accreditations           */}
          {/* ========================================================= */}
          <div className="md:w-5/12 bg-gradient-to-br from-slate-50 via-slate-100/60 to-blue-50/40 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-200 relative overflow-hidden">
            <div>
              {/* Technical Monospace Eyebrow */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D62FE]/10 border border-[#0D62FE]/20 text-[#0D62FE] text-[11px] font-mono font-bold tracking-wider uppercase mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0D62FE] animate-pulse" />
                <span>[ 04 / FACULTY DOSSIER ]</span>
              </div>

              {/* Portrait Frame */}
              <div className="relative aspect-[4/4.5] w-full rounded-[22px] overflow-hidden bg-slate-200 shadow-md border border-slate-200/80 mb-4 group">
                <img
                  src={faculty.img}
                  alt={faculty.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = '/images/faculty.png';
                  }}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-md text-[#0D62FE] border border-slate-200 shadow-xs">
                    [ {faculty.tag || 'FACULTY'} ]
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-emerald-200 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {faculty.status || 'ACTIVE MENTOR'}
                  </span>
                </div>
              </div>

              {/* Identity & Department */}
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-tight">
                {faculty.name}
              </h3>
              <p className="text-xs font-bold text-[#0D62FE] mt-0.5">
                {faculty.role}
              </p>
              <p className="text-[11px] font-mono text-slate-500 mt-1">
                Dept: {faculty.department}
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className="mt-5 pt-4 border-t border-slate-200 grid grid-cols-2 gap-2 text-left">
              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                  EXPERIENCE
                </span>
                <span className="text-xs font-black text-slate-900 mt-0.5 block">
                  {faculty.exp}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-mono font-bold text-slate-400 block uppercase">
                  CAMPUS
                </span>
                <span className="text-xs font-black text-slate-900 mt-0.5 block">
                  Manjeri HQ
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT PANEL: Comprehensive Dossier & Skills & Projects     */}
          {/* ========================================================= */}
          <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-[90vh] text-left">
            <div className="space-y-5">
              {/* Header Title */}
              <div>
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                  PROFESSIONAL BIOGRAPHY &amp; EXPERTISE
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight mt-0.5">
                  Engineering Mentor Profile
                </h4>
              </div>

              {/* Bio Story */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 text-xs sm:text-[13px] text-slate-700 leading-relaxed space-y-2">
                <p>
                  {faculty.bio ||
                    `${faculty.name} is a senior engineering instructor at CADD Centre Manjeri with ${faculty.exp}. Having handled multi-disciplinary industrial design workflows, they bridge theoretical coursework with real-world construction site and manufacturing demands.`}
                </p>
                {faculty.education && (
                  <div className="pt-2 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600">
                    <GraduationCap className="w-4 h-4 text-[#0D62FE] shrink-0" />
                    <span>Education: {faculty.education}</span>
                  </div>
                )}
              </div>

              {/* Core Software Stack */}
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-2.5">
                  <Layers className="w-3.5 h-3.5 text-[#0D62FE]" />
                  <span>[ SPECIALIZED SOFTWARE &amp; WORKFLOWS ]</span>
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {(faculty.skills || ['AutoCAD', 'Autodesk Revit', 'BIM Coordination', 'Navisworks', 'Project Scheduling']).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Landmark Industry Projects */}
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-2.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0D62FE]" />
                  <span>[ REPRESENTATIVE PROJECTS HANDLED ]</span>
                </h5>
                <div className="space-y-2">
                  {(faculty.projects || [
                    'Multi-Storey Commercial Complex BIM Coordination & Clash Resolution',
                    'Residential Villa Architectural Modeling & 3D Lighting Simulations',
                    'Infrastructure Setting-Out & Structural Detailing Audits'
                  ]).map((proj, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5 shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-semibold leading-snug">{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentorship Highlights */}
              <div>
                <h5 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-2.5">
                  <Award className="w-3.5 h-3.5 text-[#0D62FE]" />
                  <span>[ MENTORSHIP &amp; PLACEMENT HIGHLIGHTS ]</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(faculty.highlights || [
                    'Trained 3,000+ engineers with direct placement referrals',
                    '100% Practical project portfolio preparation',
                    'Direct Gulf & GCC technical interview training'
                  ]).map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11.5px] font-medium text-slate-700 flex items-center gap-2"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#0D62FE] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions Row */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  if (onOpenDemo) onOpenDemo();
                }}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#0D62FE] hover:bg-[#0052FF] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
              >
                <span>Book Mentorship Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <WhatsAppGlyph className="w-4 h-4" />
                <span>WhatsApp Counselor</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
