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
    { id: 'all', label: 'All Placements' },
    { id: 'bim', label: 'BIM & Architectural' },
    { id: 'civil', label: 'Civil & Site' },
    { id: 'mechanical', label: 'Mechanical & Product' },
    { id: 'interior', label: 'MEP & Interior' },
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
      className="relative py-16 sm:py-24 lg:py-28 bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-white/5 select-none"
    >
      {/* Subtle CAD / Engineering dot grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Ambient Red Glow in Background */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#E94B3C]/10 blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* MAIN PLACEMENT HERO HEADLINE & METRICS                    */}
        {/* ========================================================= */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-10">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#E94B3C] shadow-[0_0_8px_#E94B3C] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#E94B3C]">
              PLACEMENT CELL 2026
            </span>
          </div>

          {/* Bold 2-Line Headline matching Screenshot 1 */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[1.08] uppercase text-white">
            ENGINEERING<br />
            <span className="text-[#E94B3C] drop-shadow-[0_0_35px_rgba(233,75,60,0.45)]">
              100+ SUCCESS STORIES.
            </span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm lg:text-[15px] text-white/70 font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Practical training is only the beginning. Our dedicated placement cell helps students prepare for technical interviews, portfolio presentations, and professional engineering opportunities across India &amp; the Middle East.
          </p>

          {/* 4-Metric Floating Glass Scorecard Card */}
          <div className="pt-6">
            <div className="rounded-[22px] bg-[#0E1624]/85 border border-white/12 backdrop-blur-xl p-5 sm:p-7 shadow-2xl grid grid-cols-2 sm:grid-cols-4 gap-6 text-center max-w-3xl mx-auto">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#38BDF8] tracking-tight">
                  100+
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-white/60 font-semibold tracking-wider uppercase mt-1">
                  CAREERS LAUNCHED
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#FF5722] tracking-tight">
                  100+
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-white/60 font-semibold tracking-wider uppercase mt-1">
                  PARTNER NETWORK
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#10B981] tracking-tight">
                  100%
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-white/60 font-semibold tracking-wider uppercase mt-1">
                  PLACEMENT ASSISTANCE
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#00D8FF] tracking-tight">
                  TOP
                </div>
                <div className="text-[10.5px] sm:text-[11px] text-white/60 font-semibold tracking-wider uppercase mt-1">
                  INDUSTRY PACKAGES
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* VERIFIED GRADUATES HEADER & FILTER TABS (Screenshot 2)    */}
        {/* ========================================================= */}
        <div className="pt-12 sm:pt-16 pb-6">
          <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
            <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              VERIFIED GRADUATES
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto">
              Meet our engineering &amp; design training graduates placed directly into CAD drafting, BIM modeling, MEP engineering, and interior design zones.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#E94B3C] text-white shadow-md shadow-red-500/30 scale-[1.02]'
                        : 'bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* View All (17) Button */}
            <button
              type="button"
              onClick={() => setAllModalOpen(true)}
              className="px-4.5 py-2 rounded-full text-xs font-semibold bg-white/[0.05] border border-white/15 text-white/90 hover:text-white hover:bg-white/10 hover:border-[#E94B3C]/50 transition-all inline-flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>View All ({placedStudentsList.length})</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E94B3C]" />
            </button>

          </div>
        </div>

        {/* ========================================================= */}
        {/* CAROUSEL SLIDER OF PLACED STUDENT POSTERS                 */}
        {/* ========================================================= */}
        <div className="relative group/slider">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-[#E94B3C] border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous placed students"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/75 hover:bg-[#E94B3C] border border-white/20 text-white flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next placed students"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Edge Fade Vignettes */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#080D14] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#080D14] to-transparent z-20 pointer-events-none" />

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
                className="w-[260px] sm:w-[290px] lg:w-[310px] shrink-0 rounded-[22px] overflow-hidden border border-white/12 bg-[#0E1624] shadow-2xl relative group cursor-pointer transition-all duration-300 hover:border-[#E94B3C]/75 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(233,75,60,0.22)] text-left"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Poster Graphic Image */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/5">
                  <img
                    src={student.img}
                    alt={`${student.name} - ${student.role} Placed`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom Student Bar */}
                <div className="p-3.5 sm:p-4 bg-[#0B111D] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-[#FF7A5C] transition-colors">
                      {student.name}
                    </h4>
                    <p className="text-[11px] text-white/60 font-medium">
                      {student.role}
                    </p>
                  </div>

                  {/* LinkedIn / Verified Badge */}
                  <div className="w-6 h-6 rounded-md bg-[#0077B5]/20 border border-[#0077B5]/40 text-[#38BDF8] flex items-center justify-center shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                    </svg>
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
              className="relative w-full max-w-md bg-[#0E1624] border border-white/15 rounded-[24px] overflow-hidden shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close poster"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Poster Image */}
              <div className="w-full aspect-[4/5] bg-black/40 overflow-hidden">
                <img
                  src={selectedStudent.img}
                  alt={selectedStudent.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Student Meta Details */}
              <div className="p-5 bg-[#0B111D] border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-lg font-bold text-white">{selectedStudent.name}</h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-xs text-[#FF7A5C] font-semibold mt-0.5">
                    {selectedStudent.role} &bull; {selectedStudent.company}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => { setSelectedStudent(null); onOpenDemo(); }}
                  className="bg-[#E94B3C] hover:bg-[#D4382A] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md"
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
              className="relative w-full max-w-5xl max-h-[90vh] bg-[#0E1624] border border-white/15 rounded-[28px] overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">All Placed Students (17)</h3>
                  <p className="text-xs text-white/60">CADD Centre Manjeri Verified Placement Hall of Fame</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAllModalOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                    className="rounded-[18px] overflow-hidden border border-white/10 bg-[#0B111D] group cursor-pointer hover:border-[#E94B3C]/70 transition-all text-left"
                  >
                    <div className="aspect-[4/5] w-full overflow-hidden">
                      <img src={st.img} alt={st.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="p-3">
                      <div className="text-xs font-bold text-white truncate">{st.name}</div>
                      <div className="text-[10.5px] text-[#FF7A5C] truncate">{st.role}</div>
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
