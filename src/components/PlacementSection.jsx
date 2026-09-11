import React, { useState, useRef, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  X,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  Layers,
  MapPin,
  TrendingUp,
  Cpu,
  ExternalLink,
} from 'lucide-react';
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
    company: 'Design & Architecture Studio',
    location: 'Dubai, UAE',
    course: 'Master Diploma in Interior BIM',
    tools: ['AutoCAD', '3ds Max', 'V-Ray', 'Revit'],
    uplift: '+3.4x Uplift',
    img: imgHanna,
  },
  {
    id: 'placed-hijas',
    name: 'Hijas',
    role: 'BIM Modeler',
    category: 'bim',
    company: 'BIM Global Engineering Consultancy',
    location: 'Abu Dhabi, UAE',
    course: 'Master Diploma in BIM Architecture',
    tools: ['Revit Architecture', 'Navisworks', 'AutoCAD'],
    uplift: '+3.6x Uplift',
    img: imgHijas,
  },
  {
    id: 'placed-jasmin',
    name: 'Jasmin',
    role: 'CAD Draftman',
    category: 'bim',
    company: 'Apex Engineering Consultancy',
    location: 'Kochi & GCC',
    course: 'Professional in Architectural CAD',
    tools: ['AutoCAD', 'Revit', 'Lumion'],
    uplift: '+2.8x Uplift',
    img: imgJasmin,
  },
  {
    id: 'placed-jithin',
    name: 'Jithin',
    role: 'Site Engineer',
    category: 'civil',
    company: 'Al-Bayan Infrastructure & Construction',
    location: 'Doha, Qatar',
    course: 'Master Diploma in Civil & Structural Design',
    tools: ['AutoCAD Civil', 'Staad.Pro', 'ETABS'],
    uplift: '+3.5x Uplift',
    img: imgJithin,
  },
  {
    id: 'placed-peter',
    name: 'Peter',
    role: 'Site Engineer',
    category: 'civil',
    company: 'Sterling Construction Group',
    location: 'Bangalore, India',
    course: 'Advanced Diploma in Structural Design',
    tools: ['AutoCAD', 'Staad.Pro', 'MS Project'],
    uplift: '+2.9x Uplift',
    img: imgPeter,
  },
  {
    id: 'placed-vipin',
    name: 'Vipin',
    role: 'Mechanical Designer',
    category: 'mechanical',
    company: 'Vector Precision Design Studio',
    location: 'Chennai, India',
    course: 'Master Diploma in Mechanical CADD',
    tools: ['SolidWorks', 'Creo', 'CATIA'],
    uplift: '+3.1x Uplift',
    img: imgVipin,
  },
  {
    id: 'placed-shahla',
    name: 'Shahla',
    role: 'CAD Designer',
    category: 'bim',
    company: 'Horizon Architectural Consultants',
    location: 'Sharjah, UAE',
    course: 'Master Diploma in BIM & Architecture',
    tools: ['Revit Architecture', 'AutoCAD', 'Navisworks'],
    uplift: '+3.3x Uplift',
    img: imgShahla,
  },
  {
    id: 'placed-salman',
    name: 'Salman',
    role: 'CAD Designer',
    category: 'mechanical',
    company: 'Gulf Industrial Engineering Studio',
    location: 'Riyadh, Saudi Arabia',
    course: 'Professional in Mechanical CAD',
    tools: ['SolidWorks', 'AutoCAD Mechanical', 'ANSYS'],
    uplift: '+3.2x Uplift',
    img: imgSalman,
  },
  {
    id: 'placed-dilshad',
    name: 'Dilshad',
    role: 'MEP Designer',
    category: 'interior',
    company: 'Focus MEP Solutions',
    location: 'Calicut & GCC',
    course: 'Master Diploma in MEP BIM',
    tools: ['Revit MEP', 'AutoCAD', 'HAP'],
    uplift: '+3.5x Uplift',
    img: imgDilshad,
  },
  {
    id: 'placed-ansar',
    name: 'Ansar',
    role: 'Draughtsman',
    category: 'civil',
    company: 'Civil & Architectural Engineering Co',
    location: 'Malappuram, India',
    course: 'Diploma in Civil Draughtsmanship',
    tools: ['AutoCAD', '3ds Max', 'SketchUp'],
    uplift: '+2.6x Uplift',
    img: imgAnsar,
  },
  {
    id: 'placed-anshad',
    name: 'Anshad',
    role: 'Product Designer',
    category: 'mechanical',
    company: 'Creative Studio Solutions',
    location: 'Coimbatore, India',
    course: 'Master Diploma in Product Design',
    tools: ['SolidWorks', 'KeyShot', 'Creo'],
    uplift: '+3.0x Uplift',
    img: imgAnshad,
  },
  {
    id: 'placed-ziyad',
    name: 'Ziyad',
    role: 'Civil Engineer',
    category: 'civil',
    company: 'Smart Design & Build Contracting',
    location: 'Dubai, UAE',
    course: 'Master Diploma in Structural Analysis',
    tools: ['AutoCAD', 'ETABS', 'SAFE'],
    uplift: '+3.7x Uplift',
    img: imgZiyad,
  },
  {
    id: 'placed-sreni',
    name: 'Sreni',
    role: 'Architectural Designer',
    category: 'bim',
    company: 'Modern Architecture & Interiors',
    location: 'Kerala, India',
    course: 'Master Diploma in Architectural BIM',
    tools: ['Revit', 'SketchUp', 'Lumion', 'AutoCAD'],
    uplift: '+2.9x Uplift',
    img: imgSreni,
  },
  {
    id: 'placed-vignesh',
    name: 'Vignesh',
    role: 'Mechanical Draughtsman',
    category: 'mechanical',
    company: 'Engineering Services Group',
    location: 'Pune, India',
    course: 'Diploma in Mechanical CADD',
    tools: ['AutoCAD Mechanical', 'SolidWorks'],
    uplift: '+2.7x Uplift',
    img: imgVignesh,
  },
  {
    id: 'placed-suhail',
    name: 'Suhail',
    role: 'CAD Designer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    location: 'Hyderabad, India',
    course: 'Master Diploma in Product Design',
    tools: ['SolidWorks', 'CATIA', 'AutoCAD'],
    uplift: '+3.0x Uplift',
    img: imgSuhail,
  },
  {
    id: 'placed-ashique',
    name: 'Ashique',
    role: 'CAD Designer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    location: 'Hyderabad, India',
    course: 'Professional in Mechanical CAD',
    tools: ['Creo Parametric', 'AutoCAD', 'ANSYS'],
    uplift: '+2.8x Uplift',
    img: imgAshique,
  },
  {
    id: 'placed-shehin',
    name: 'Shehin',
    role: 'Interior Designer',
    category: 'interior',
    company: 'Ajiro Design Solutions',
    location: 'Calicut, India',
    course: 'Master Diploma in Interior BIM',
    tools: ['3ds Max', 'Revit', 'SketchUp', 'V-Ray'],
    uplift: '+3.1x Uplift',
    img: imgShehin,
  },
];

export default function PlacementSection({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [allModalOpen, setAllModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('carousel'); // 'carousel' | 'grid'
  const carouselRef = useRef(null);

  // Overlay history for lightbox modal
  useOverlayHistory(!!selectedStudent, () => setSelectedStudent(null));
  useOverlayHistory(allModalOpen, () => setAllModalOpen(false));

  const categories = [
    { id: 'all', label: 'ALL TALENT (17)' },
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
      carouselRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: 'smooth' });
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
      {/* Precision CAD / Engineering dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)',
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
                03 TELEMETRY // ALUMNI ARCHIVE
              </span>
              <span className="text-[11px] font-mono text-white/80 uppercase tracking-widest hidden sm:inline-block">
                [ VERIFIED INDUSTRY PLACEMENT DOSSIER ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.08] uppercase text-white">
              ANALYZING CAREER PLACEMENT TRAJECTORY.
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-white/90 font-normal leading-relaxed max-w-2xl">
              Real-time career telemetry of certified CADD Centre alumni placed across architectural consultants, BIM firms, and EPC contractors in India &amp; the GCC.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-mono text-xs shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>LIVE ALUMNI DISPATCH · GCC &amp; INDIA</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HIGH-TECH TELEMETRY SCORECARD DECK                        */}
        {/* ========================================================= */}
        <div className="mb-12">
          <div className="rounded-[24px] bg-white text-slate-900 p-6 sm:p-8 shadow-2xl border border-white/30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric 1 */}
            <div className="space-y-2 text-left">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-3xl sm:text-4xl font-black text-[#0D62FE] tracking-tight">98%</span>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">10/10 RATED</span>
              </div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                PLACEMENT ASSISTANCE
              </div>
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
                <span className="text-[10px] font-mono text-[#0D62FE] bg-blue-50 border border-blue-200 px-1.5 py-0.5 rounded font-bold">GLOBAL</span>
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
                <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 border border-indigo-200 px-1.5 py-0.5 rounded font-bold">HIRING</span>
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
                <span className="text-[10px] font-mono text-amber-700 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded font-bold">GROWTH</span>
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
        {/* PRECISION COMMAND DOCK: CATEGORIES & VIEW SWITCHER        */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-8 bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/20">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0 no-scrollbar w-full lg:w-auto">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${isActive
                    ? 'bg-white text-[#0D62FE] shadow-md scale-[1.02]'
                    : 'bg-white/10 text-white/80 hover:text-white hover:bg-white/20'
                    }`}
                >
                  [ {cat.label} ]
                </button>
              );
            })}
          </div>

          {/* Right Action Controls: View Switcher + Inline Nav + View All */}
          <div className="flex items-center gap-2 self-end lg:self-auto shrink-0">
            {/* View Mode Toggle: Deck vs Grid */}
            <div className="hidden sm:inline-flex items-center p-1 bg-black/20 rounded-xl border border-white/15">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${viewMode === 'carousel'
                  ? 'bg-white text-[#0D62FE] shadow'
                  : 'text-white/70 hover:text-white'
                  }`}
              >
                [ 🗂 TALENT DECK ]
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${viewMode === 'grid'
                  ? 'bg-white text-[#0D62FE] shadow'
                  : 'text-white/70 hover:text-white'
                  }`}
              >
                [ ⊞ SPEC MATRIX ]
              </button>
            </div>

            {/* Inline Carousel Controls (Eliminating obstructive floating overlay buttons!) */}
            {viewMode === 'carousel' && (
              <div className="flex items-center gap-1 bg-white/15 p-1 rounded-xl border border-white/20">
                <button
                  type="button"
                  onClick={scrollLeft}
                  className="w-8 h-8 rounded-lg bg-white text-[#0D62FE] hover:bg-blue-50 flex items-center justify-center transition-all shadow cursor-pointer active:scale-90"
                  aria-label="Previous student"
                  title="Previous alumni"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollRight}
                  className="w-8 h-8 rounded-lg bg-white text-[#0D62FE] hover:bg-blue-50 flex items-center justify-center transition-all shadow cursor-pointer active:scale-90"
                  aria-label="Next student"
                  title="Next alumni"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* View All Modal Trigger */}
            <button
              type="button"
              onClick={() => setAllModalOpen(true)}
              className="px-4 py-2 rounded-xl font-mono text-xs font-bold bg-white text-[#0D62FE] hover:bg-blue-50 transition-all inline-flex items-center gap-1.5 cursor-pointer shrink-0 shadow-md active:scale-95"
            >
              <span>[ VIEW ALL ({placedStudentsList.length}) ]</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0D62FE]" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW MODE 1: TALENT DECK (HORIZONTAL HIGH-TECH CAROUSEL)  */}
        {/* ========================================================= */}
        {viewMode === 'carousel' ? (
          <div className="relative">
            {/* Edge Fade Vignettes */}
            <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#0D62FE] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#0D62FE] to-transparent z-20 pointer-events-none" />

            {/* Horizontal Scrolling Track */}
            <div
              ref={carouselRef}
              className="flex items-stretch gap-6 overflow-x-auto scroll-smooth py-3 px-2 no-scrollbar"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {filteredStudents.map((student, idx) => (
                <div
                  key={student.id}
                  onClick={() => setSelectedStudent(student)}
                  className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 rounded-[28px] bg-white text-slate-900 border border-white/60 shadow-[0_20px_45px_rgba(0,0,0,0.18)] p-4 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)] text-left"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  {/* Top Dossier Telemetry Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      [ REC // {String(idx + 1).padStart(2, '0')} ]
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-50 text-[#C4161C] border border-red-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4161C] animate-pulse" />
                      PLACED
                    </span>
                  </div>

                  {/* Framed Precision Viewport with corner crosshairs */}
                  <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-slate-950 my-3 group-hover:ring-2 group-hover:ring-[#0D62FE] transition-all shadow-inner">
                    <img
                      src={student.img}
                      alt={`${student.name} - ${student.role} Placed`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    {/* Architectural crosshair corner brackets */}
                    <div className="absolute top-2.5 left-2.5 font-mono text-[10px] font-bold text-white/50 select-none pointer-events-none">+</div>
                    <div className="absolute top-2.5 right-2.5 font-mono text-[10px] font-bold text-white/50 select-none pointer-events-none">+</div>
                    <div className="absolute bottom-2.5 left-2.5 font-mono text-[10px] font-bold text-white/50 select-none pointer-events-none">+</div>
                    <div className="absolute bottom-2.5 right-2.5 font-mono text-[10px] font-bold text-white/50 select-none pointer-events-none">+</div>

                    {/* Bottom Status Scrim */}
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                      <div className="flex items-center gap-1 text-[10px] font-mono font-semibold text-white/90">
                        <MapPin className="w-3 h-3 text-[#0D62FE]" />
                        <span>{student.location}</span>
                      </div>
                      <span className="text-[9.5px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                        {student.uplift}
                      </span>
                    </div>
                  </div>

                  {/* Student Dossier Information Deck */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors truncate">
                        {student.name}
                      </h4>
                      <span className="font-mono text-[11px] font-bold text-[#0D62FE] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                        {student.role}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium truncate">
                      <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{student.company}</span>
                    </div>

                    {/* Software Tools Mastered Chips */}
                    <div className="flex items-center gap-1 pt-1 overflow-hidden">
                      {student.tools.slice(0, 3).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded truncate"
                        >
                          {tool}
                        </span>
                      ))}
                      {student.tools.length > 3 && (
                        <span className="font-mono text-[10px] font-semibold text-slate-400 bg-slate-100 px-1 py-0.5 rounded shrink-0">
                          +{student.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Footer Action Bar */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-bold">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      <span>VERIFIED HIRE</span>
                    </div>

                    <span className="font-mono text-xs font-bold text-[#0D62FE] group-hover:underline inline-flex items-center gap-1">
                      <span>INSPECT</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#0D62FE]" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ========================================================= */
          /* VIEW MODE 2: SPEC MATRIX (RESPONSIVE ARCHITECTURAL GRID)  */
          /* ========================================================= */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredStudents.map((student, idx) => (
              <div
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className="rounded-[28px] bg-white text-slate-900 border border-white/60 shadow-[0_20px_45px_rgba(0,0,0,0.18)] p-4 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)] text-left"
              >
                {/* Top Dossier Telemetry Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    [ REC // {String(idx + 1).padStart(2, '0')} ]
                  </span>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-red-50 text-[#C4161C] border border-red-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C4161C] animate-pulse" />
                    PLACED
                  </span>
                </div>

                {/* Framed Viewport */}
                <div className="relative aspect-[4/5] w-full rounded-[20px] overflow-hidden bg-slate-950 my-3 group-hover:ring-2 group-hover:ring-[#0D62FE] transition-all shadow-inner">
                  <img
                    src={student.img}
                    alt={`${student.name} - ${student.role}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
                    <div className="flex items-center gap-1 text-[10px] font-mono font-semibold text-white/90">
                      <MapPin className="w-3 h-3 text-[#0D62FE]" />
                      <span>{student.location}</span>
                    </div>
                    <span className="text-[9.5px] font-mono font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                      {student.uplift}
                    </span>
                  </div>
                </div>

                {/* Dossier Information */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-lg font-black text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors truncate">
                      {student.name}
                    </h4>
                    <span className="font-mono text-[11px] font-bold text-[#0D62FE] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                      {student.role}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium truncate">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{student.company}</span>
                  </div>

                  <div className="flex items-center gap-1 pt-1 overflow-hidden">
                    {student.tools.slice(0, 3).map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded truncate"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>VERIFIED HIRE</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0D62FE] group-hover:underline inline-flex items-center gap-1">
                    <span>INSPECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#0D62FE]" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* HIGH-RES ARCHITECTURAL DOSSIER MODAL (SPLIT SPEC SHEET)   */}
      {/* ========================================================= */}
      <AnimatePresence>
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 font-['Plus_Jakarta_Sans',sans-serif]">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Split Dossier Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="relative w-full max-w-4xl bg-white text-slate-900 border border-slate-200 rounded-[28px] overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-12 max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: High-Res Poster Viewport */}
              <div className="md:col-span-6 bg-slate-950 p-4 sm:p-6 flex items-center justify-center relative">
                <div className="relative aspect-[4/5] w-full max-w-[340px] rounded-[20px] overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={selectedStudent.img}
                    alt={selectedStudent.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded font-mono text-[9px] font-bold bg-black/60 text-white/90 uppercase backdrop-blur-sm">
                    AUTHENTIC CADD POSTER
                  </div>
                </div>
              </div>

              {/* Right Column: Verified Alumni Telemetry Profile */}
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between text-left bg-white">
                <div className="space-y-5">
                  {/* Top Accreditation */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] font-bold text-[#0D62FE] bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full uppercase">
                      ● VERIFIED ALUMNI RECORD
                    </span>
                    <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full uppercase">
                      ✓ INDUSTRY PLACED
                    </span>
                  </div>

                  {/* Candidate Name & Role */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      {selectedStudent.name}
                    </h3>
                    <p className="text-sm font-mono font-bold text-[#0D62FE] uppercase tracking-wider mt-1">
                      {selectedStudent.role}
                    </p>
                  </div>

                  {/* Career Parameters Bento */}
                  <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="flex items-start gap-2.5">
                      <Building2 className="w-4 h-4 text-[#0D62FE] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10.5px] font-mono text-slate-500 uppercase font-semibold">HIRING ORGANIZATION</div>
                        <div className="text-sm font-bold text-slate-900">{selectedStudent.company}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10.5px] font-mono text-slate-500 uppercase font-semibold">PLACEMENT LOCATION</div>
                        <div className="text-sm font-bold text-slate-900">{selectedStudent.location}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <GraduationCap className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10.5px] font-mono text-slate-500 uppercase font-semibold">CADD CENTRE PROGRAM</div>
                        <div className="text-sm font-bold text-slate-900">{selectedStudent.course}</div>
                      </div>
                    </div>
                  </div>

                  {/* Software Toolkit Mastered */}
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-500 uppercase mb-2">
                      SOFTWARE STACK MASTERED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedStudent.tools.map((t, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs font-semibold bg-blue-50 text-[#0D62FE] border border-blue-100 px-2.5 py-1 rounded-lg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Accreditation Seal */}
                  <div className="flex items-center gap-2 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-900 text-xs font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ISO 9001:2015 &amp; NSDC Accredited Professional Certificate Holder.</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedStudent(null);
                      if (onOpenDemo) onOpenDemo();
                    }}
                    className="w-full sm:flex-1 bg-[#0D62FE] hover:bg-[#0045D8] text-white text-xs font-mono font-bold uppercase tracking-wider px-5 py-3 rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer text-center inline-flex items-center justify-center gap-2"
                  >
                    <span>ENROLL IN THIS TRACK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedStudent(null)}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-mono text-xs font-bold transition-colors cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* VIEW ALL MODAL: COMPLETE TALENT MATRIX (17 STUDENTS)       */}
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
              className="relative w-full max-w-5xl max-h-[90vh] bg-white text-slate-900 border border-slate-200 rounded-[28px] overflow-hidden shadow-2xl z-10 flex flex-col text-left"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-[#0D62FE] uppercase bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      TELEMETRY ARCHIVE // VERIFIED HIRE
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">Verified Placed Alumni (17)</h3>
                  <p className="text-xs text-slate-500 font-medium">CADD Centre Verified Career Hall of Fame · GCC &amp; India Network</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAllModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Grid Body */}
              <div className="p-5 sm:p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {placedStudentsList.map((st, idx) => (
                  <div
                    key={st.id}
                    onClick={() => {
                      setAllModalOpen(false);
                      setSelectedStudent(st);
                    }}
                    className="rounded-[22px] overflow-hidden border border-slate-200 bg-white group cursor-pointer hover:border-[#0D62FE] hover:shadow-xl transition-all text-left flex flex-col justify-between p-3"
                  >
                    <div className="aspect-[4/5] w-full rounded-[16px] overflow-hidden bg-slate-950 mb-2.5 relative">
                      <img
                        src={st.img}
                        alt={st.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded font-mono text-[9px] font-bold bg-black/60 text-white backdrop-blur-xs">
                        #{String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-baseline justify-between gap-1">
                        <div className="text-sm font-black text-slate-900 truncate">{st.name}</div>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      </div>
                      <div className="text-[10.5px] font-mono text-[#0D62FE] truncate uppercase font-bold mt-0.5">
                        {st.role}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate mt-1">
                        {st.company}
                      </div>
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
