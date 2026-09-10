import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';
import useOverlayHistory from '../hooks/useOverlayHistory';

// 17 Authentic Placed Student Poster Images from assets/placestudents
import imgHanna from '../assets/placestudents/Hanna.png';
import imgHijas from '../assets/placestudents/Hijas.png';
import imgJasmin from '../assets/placestudents/Jasmin.png';
import imgJithin from '../assets/placestudents/Jithin.png';
import imgPeter from '../assets/placestudents/Peter.png';
import imgVipin from '../assets/placestudents/Vipin.png';
import imgShahla from '../assets/placestudents/Shahla.png';
import imgSalman from '../assets/placestudents/Salman.png';

import imgDilshad from '../assets/placestudents/IMG_0058.PNG';
import imgAnsar from '../assets/placestudents/IMG_0059.PNG';
import imgAnshad from '../assets/placestudents/IMG_0060.PNG';
import imgZiyad from '../assets/placestudents/IMG_0061.PNG';
import imgSreni from '../assets/placestudents/IMG_0063.JPEG';
import imgVignesh from '../assets/placestudents/IMG_0065.JPEG';
import imgSuhail from '../assets/placestudents/IMG_0069.JPEG';
import imgAshique from '../assets/placestudents/IMG_0070.PNG';
import imgShehin from '../assets/placestudents/IMG_0071.PNG';

export const placedStudentsList = [
  {
    id: 'placed-hanna',
    name: 'Hanna',
    role: 'Designer',
    category: 'interior',
    company: 'Design & Architecture',
    img: imgHanna,
  },
  {
    id: 'placed-hijas',
    name: 'Hijas',
    role: 'BIM Modeler',
    category: 'bim',
    company: 'BIM Consultancy',
    img: imgHijas,
  },
  {
    id: 'placed-jasmin',
    name: 'Jasmin',
    role: 'CAD Draftman',
    category: 'bim',
    company: 'Engineering Consultancy',
    img: imgJasmin,
  },
  {
    id: 'placed-jithin',
    name: 'Jithin',
    role: 'Site Engineer',
    category: 'civil',
    company: 'Infrastructure & Construction',
    img: imgJithin,
  },
  {
    id: 'placed-peter',
    name: 'Peter',
    role: 'Site Engineer',
    category: 'civil',
    company: 'Construction & Civil',
    img: imgPeter,
  },
  {
    id: 'placed-vipin',
    name: 'Vipin',
    role: 'Designer',
    category: 'mechanical',
    company: 'Design Studio',
    img: imgVipin,
  },
  {
    id: 'placed-shahla',
    name: 'Shahla',
    role: 'CAD Designer',
    category: 'bim',
    company: 'Architectural Consultancy',
    img: imgShahla,
  },
  {
    id: 'placed-salman',
    name: 'Salman',
    role: 'Designer',
    category: 'mechanical',
    company: 'Engineering Studio',
    img: imgSalman,
  },
  {
    id: 'placed-dilshad',
    name: 'Dilshad',
    role: 'MEP Designer',
    category: 'interior',
    company: 'Focus MEP Solutions',
    img: imgDilshad,
  },
  {
    id: 'placed-ansar',
    name: 'Ansar',
    role: 'Draughtsman',
    category: 'civil',
    company: 'Civil & Architectural Engineering',
    img: imgAnsar,
  },
  {
    id: 'placed-anshad',
    name: 'Anshad',
    role: 'Product Designer',
    category: 'mechanical',
    company: 'Creative Studio Solutions',
    img: imgAnshad,
  },
  {
    id: 'placed-ziyad',
    name: 'Ziyad',
    role: 'Civil Engineer',
    category: 'civil',
    company: 'Smart Design & Build',
    img: imgZiyad,
  },
  {
    id: 'placed-sreni',
    name: 'Sreni',
    role: 'Architectural Designer',
    category: 'bim',
    company: 'Modern Architecture Studio',
    img: imgSreni,
  },
  {
    id: 'placed-vignesh',
    name: 'Vignesh',
    role: 'Mechanical Draughtsman',
    category: 'mechanical',
    company: 'Engineering Services Group',
    img: imgVignesh,
  },
  {
    id: 'placed-suhail',
    name: 'Suhail',
    role: 'Designer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    img: imgSuhail,
  },
  {
    id: 'placed-ashique',
    name: 'Ashique',
    role: 'Designer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    img: imgAshique,
  },
  {
    id: 'placed-shehin',
    name: 'Shehin',
    role: 'Interior Designer',
    category: 'interior',
    company: 'Ajiro Solutions',
    img: imgShehin,
  },
];

export default function PlacementSection({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [allModalOpen, setAllModalOpen] = useState(false);
  const carouselRef = useRef(null);

  // Overlay history for lightbox modal
  useOverlayHistory(!!selectedStudent, () => setSelectedStudent(null));
  useOverlayHistory(allModalOpen, () => setAllModalOpen(false));

  const categories = [
    { id: 'all', label: 'ALL PLACEMENTS (17)' },
    { id: 'bim', label: 'BIM ARCHITECTURE' },
    { id: 'civil', label: 'CIVIL & STRUCTURAL' },
    { id: 'mechanical', label: 'MECHANICAL CAD' },
    { id: 'interior', label: 'MEP & INTERIOR' },
  ];

  const filteredStudents = useMemo(() => {
    if (selectedCategory === 'all') return placedStudentsList;
    return placedStudentsList.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedStudent(null);
        setAllModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section
      id="placement"
      className="relative py-16 sm:py-24 lg:py-28 bg-[#0D62FE] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden select-none"
    >
      {/* Subtle CAD / Engineering dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Ambient soft glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-white/10 blur-[150px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* NUMBERED TECHNICAL HEADER 03                              */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 border-b border-white/20 pb-8">
          <div className="max-w-3xl space-y-2 text-left">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0D62FE] bg-white px-2.5 py-1 rounded-md shadow-sm">
                03 PLACEMENT TELEMETRY
              </span>
              <span className="text-[11px] font-mono text-white/75 uppercase tracking-widest hidden sm:inline-block">
                [ VERIFIED CAREER TRAJECTORY ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] uppercase text-white">
              ANALYZING CAREER PLACEMENT TRAJECTORY.
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-white/90 font-normal leading-relaxed max-w-2xl">
              Real-time career telemetry of certified CADD Centre Manjeri alumni placed across architectural consultants, BIM firms, and EPC contractors in India &amp; the GCC.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>LIVE ALUMNI TELEMETRY</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HIGH-TECH TELEMETRY SCORECARD CARD                        */}
        {/* ========================================================= */}
        <div className="mb-12">
          <div className="rounded-[24px] bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-white/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="space-y-2 text-left">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#0D62FE] tracking-tight">98%</span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">10/10 RATED</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                PLACEMENT ASSISTANCE
              </div>
              {/* Segmented meter */}
              <div className="flex gap-1 pt-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-sm bg-[#0D62FE]" />
                ))}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Over 98% of active diploma students secure interviews within 60 days of graduation.</p>
            </div>

            {/* Metric 2 */}
            <div className="space-y-2 text-left">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">25,000+</span>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded font-bold">GLOBAL</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                CERTIFIED ALUMNI
              </div>
              <div className="flex gap-1 pt-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-sm bg-[#0D62FE]" />
                ))}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Largest network of CAD &amp; BIM certified professionals in Malappuram district.</p>
            </div>

            {/* Metric 3 */}
            <div className="space-y-2 text-left">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">150+</span>
                <span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded font-bold">HIRING</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                CORPORATE PARTNERS
              </div>
              <div className="flex gap-1 pt-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-sm bg-[#0D62FE]" />
                ))}
                <div className="h-1.5 flex-1 rounded-sm bg-slate-200" />
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Direct campus recruitment with architectural firms and MEP consultancies.</p>
            </div>

            {/* Metric 4 */}
            <div className="space-y-2 text-left">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#0D62FE] tracking-tight">3.5x</span>
                <span className="text-[10px] font-mono text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-bold">GROWTH</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                SALARY ACCELERATION
              </div>
              <div className="flex gap-1 pt-1">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-sm bg-[#0D62FE]" />
                ))}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 rounded-sm bg-slate-200" />
                ))}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">Average compensation uplift reported after completing Master BIM &amp; MEP Diplomas.</p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FILTER BAR & VERIFIED GRADUATES CAROUSEL                  */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#0D62FE] shadow-lg scale-[1.02]'
                      : 'bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/20'
                  }`}
                >
                  [ {cat.label} ]
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setAllModalOpen(true)}
            className="px-4.5 py-2 rounded-full font-mono text-xs font-bold bg-white text-[#0D62FE] hover:bg-blue-50 transition-all inline-flex items-center gap-1.5 cursor-pointer shrink-0 shadow-md"
          >
            <span>[ VIEW ALL ({placedStudentsList.length}) ]</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#0D62FE]" />
          </button>
        </div>

        {/* Carousel Slider */}
        <div className="relative group/slider">
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-[#0D62FE] border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous placed students"
          >
            <ChevronLeft className="w-5 h-5 text-[#0D62FE]" />
          </button>

          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white hover:bg-slate-100 text-[#0D62FE] border border-slate-200 flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next placed students"
          >
            <ChevronRight className="w-5 h-5 text-[#0D62FE]" />
          </button>

          {/* Edge Fade Vignettes */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#0D62FE] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#0D62FE] to-transparent z-20 pointer-events-none" />

          {/* Horizontal Scrolling Track */}
          <div
            ref={carouselRef}
            className="flex items-center gap-5 sm:gap-6 overflow-x-auto scroll-smooth py-3 px-2 no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {filteredStudents.map((student) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="w-[260px] sm:w-[290px] lg:w-[310px] shrink-0 rounded-[22px] overflow-hidden border border-white/30 bg-white shadow-2xl relative group cursor-pointer transition-all duration-300 hover:scale-[1.03] text-left"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Poster Graphic Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-100">
                  <img
                    src={student.img}
                    alt={`${student.name} - ${student.role} Placed`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Student Bar */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors">
                      {student.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-500 font-semibold uppercase">
                      {student.role}
                    </p>
                  </div>

                  {/* Verified Badge */}
                  <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 text-[#0D62FE] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#0D62FE]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* LIGHTBOX MODAL: Full Size Student Poster                   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Plus_Jakarta_Sans',sans-serif]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close poster"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Poster Image */}
              <div className="w-full aspect-[4/5] bg-slate-900 overflow-hidden">
                <img
                  src={selectedStudent.img}
                  alt={selectedStudent.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Student Meta Details */}
              <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-extrabold text-slate-900">{selectedStudent.name}</h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <p className="text-xs text-[#0D62FE] font-mono font-semibold mt-0.5 uppercase">
                    {selectedStudent.role} &bull; {selectedStudent.company}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => { setSelectedStudent(null); onOpenDemo(); }}
                  className="bg-[#0D62FE] hover:bg-[#0045D8] text-white text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  Join Course
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* VIEW ALL MODAL: Grid of all 17 Placed Students             */}
      {/* ========================================================= */}
      <AnimatePresence>
        {allModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 font-['Plus_Jakarta_Sans',sans-serif]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAllModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#0D62FE] uppercase bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      TELEMETRY DATABASE
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-1">Verified Placed Alumni (17)</h3>
                  <p className="text-xs text-slate-500">CADD Centre Manjeri Verified Placement Hall of Fame</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAllModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid Body */}
              <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {placedStudentsList.map((st) => (
                  <div
                    key={st.id}
                    onClick={() => { setAllModalOpen(false); setSelectedStudent(st); }}
                    className="rounded-[18px] overflow-hidden border border-slate-200 bg-white group cursor-pointer hover:border-[#0D62FE] hover:shadow-lg transition-all text-left"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden bg-slate-100">
                      <img src={st.img} alt={st.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-3">
                      <div className="text-xs font-bold text-slate-900 truncate">{st.name}</div>
                      <div className="text-[10.5px] font-mono text-[#0D62FE] truncate uppercase font-semibold">{st.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
