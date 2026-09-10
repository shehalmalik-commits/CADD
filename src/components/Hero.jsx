import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Layers, 
  PenTool, 
  Zap, 
  Wrench, 
  BarChart3,
  Sparkles,
  Pause,
  Play
} from 'lucide-react';

const COURSE_SLIDES = [
  {
    id: 'civil-structural',
    title: 'Civil & Structural Engineering',
    category: 'CIVIL & STRUCTURAL',
    icon: Building2,
    tagline: 'Master high-rise structural analysis, reinforced concrete detailing & site engineering.',
    description: 'Hands-on training with industry-standard analysis & BIM modeling suites for civil infrastructure and building projects.',
    software: ['STAAD.Pro', 'ETABS', 'AutoCAD Civil 3D', 'Tekla', 'SAFE'],
    image: '/images/hero/hero-civil-structural.jpg',
    accent: '#E94B3C',
    batchInfo: 'Weekend & Regular Batches'
  },
  {
    id: 'bim-architecture',
    title: 'Architecture & BIM Modeling',
    category: 'ARCHITECTURE & BIM',
    icon: Layers,
    tagline: 'Design parametric 3D building models and lead multi-disciplinary clash detection.',
    description: 'Transform architectural drafting into intelligent BIM coordination, parametric families, and global construction standards.',
    software: ['Autodesk Revit', 'Navisworks', 'BIM 360', 'Dynamo', 'AutoCAD'],
    image: '/images/hero/hero-bim-architecture.jpg',
    accent: '#38BDF8',
    batchInfo: 'International BIM Certification'
  },
  {
    id: 'interior-design',
    title: 'Interior Design & 3D Visualization',
    category: 'INTERIOR & DESIGN',
    icon: PenTool,
    tagline: 'Turn design concepts into photorealistic renders and cinematic client walkthroughs.',
    description: 'Master spatial layout planning, mood lighting simulations, PBR textures, and luxury architectural interior rendering.',
    software: ['3ds Max', 'V-Ray', 'SketchUp', 'Lumion Pro', 'Photoshop'],
    image: '/images/hero/hero-interior-design.jpg',
    accent: '#F97316',
    batchInfo: 'Portfolio-Ready Studio'
  },
  {
    id: 'mep-engineering',
    title: 'MEP Engineering with BIM',
    category: 'MEP & SYSTEMS',
    icon: Zap,
    tagline: 'Design commercial HVAC systems, electrical schematics and sanitary plumbing networks.',
    description: 'Comprehensive MEP layout drafting, duct sizing, panel board schedules, and seamless 3D Revit MEP coordination.',
    software: ['Revit MEP', 'AutoCAD MEP', 'HVAC Design', 'Electrical CAD', 'Plumbing'],
    image: '/images/hero/hero-mep-engineering.jpg',
    accent: '#10B981',
    batchInfo: 'High Gulf & GCC Demand'
  },
  {
    id: 'mechanical-product',
    title: 'Mechanical & Product Design',
    category: 'MECHANICAL CAD',
    icon: Wrench,
    tagline: 'Design complex 3D parts, assemblies, sheet metal and precision FEA simulations.',
    description: 'Master parametric solid modeling, GD&T, automotive/aerospace components, and industrial manufacturing drawings.',
    software: ['SolidWorks', 'Creo Parametric', 'CATIA', 'ANSYS FEA', 'AutoCAD Mech'],
    image: '/images/hero/hero-mechanical-product.jpg',
    accent: '#6366F1',
    batchInfo: 'Industry Project Oriented'
  },
  {
    id: 'project-management',
    title: 'Project Planning & Management (PPM)',
    category: 'PROJECT MANAGEMENT',
    icon: BarChart3,
    tagline: 'Command large-scale engineering project timelines, CPM scheduling and cost tracking.',
    description: 'Enterprise project management training with Primavera P6 and MS Project for modern infrastructure, EPC, and oil & gas sectors.',
    software: ['Primavera P6', 'Microsoft Project', 'CPM Scheduling', 'Earned Value'],
    image: '/images/hero/hero-project-management.jpg',
    accent: '#EC4899',
    batchInfo: 'Managerial & EPC Fast-Track'
  }
];

const SLIDE_DURATION = 6000; // 6 seconds per slide

export default function Hero({ onOpenDemo }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Touch swipe support for mobile devices
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % COURSE_SLIDES.length);
    setProgress(0);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + COURSE_SLIDES.length) % COURSE_SLIDES.length);
    setProgress(0);
  }, []);

  const selectSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Preload all hero slide images for seamless transitions
  useEffect(() => {
    COURSE_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto-play timer & progress bar
  useEffect(() => {
    if (isPaused) return;

    const intervalStep = 50; // update progress every 50ms
    const stepIncrement = (intervalStep / SLIDE_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPaused, goToNextSlide]);

  // Handle Touch Swipes
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
  };

  const currentSlide = COURSE_SLIDES[currentIndex];
  const CurrentIcon = currentSlide.icon;

  return (
    <section 
      className="relative w-full min-h-[100svh] sm:h-[100dvh] min-h-[620px] max-h-[1080px] flex flex-col justify-center sm:block overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] select-none bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="CADD Centre Manjeri Courses Showcase"
    >

      {/* ========================================================= */}
      {/* 1. BACKGROUND IMAGE SLIDER (Cross-Fade + Ken Burns)       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {COURSE_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              style={{
                opacity: isActive ? 0.35 : 0,
                zIndex: isActive ? 5 : 0,
                transition: 'opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              className="absolute inset-0 w-full h-full will-change-[opacity]"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'auto'}
              />
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 2. CINEMATIC LIGHT GRADIENT OVERLAYS                      */}
      {/* ========================================================= */}
      {/* Top capsule navbar protection */}
      <div 
        className="absolute top-0 inset-x-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.6) 65%, transparent 100%)'
        }}
      />

      {/* Overall light aesthetic wash for pure legibility */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(240, 246, 254, 0.65) 0%, rgba(255, 255, 255, 0.88) 50%, #FFFFFF 100%)'
        }}
      />

      {/* Desktop horizontal contrast sweep from left */}
      <div 
        className="hidden sm:block absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.82) 60%, transparent 100%)'
        }}
      />

      {/* Ambient glowing accent based on current slide */}
      <div 
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-15 transition-all duration-1000 pointer-events-none z-10"
        style={{ backgroundColor: currentSlide.accent }}
      />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT: CENTERED ON MOBILE, LEFT ON DESKTOP      */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-center text-center px-5 pt-24 pb-8 sm:pt-0 sm:pb-0 sm:absolute sm:inset-auto sm:bottom-24 lg:bottom-32 sm:left-10 lg:left-14 xl:left-20 sm:right-auto sm:justify-start sm:items-start sm:text-left sm:p-0 max-w-md sm:max-w-2xl mx-auto sm:mx-0 pointer-events-auto">

        {/* Mobile Unified Pill Badge (< 640px) */}
        <div className="sm:hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 backdrop-blur-md border border-blue-100 text-blue-800 shadow-xs mb-3.5">
          <CurrentIcon className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase text-blue-900">
            {currentSlide.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-blue-300" />
          <span className="text-[10.5px] font-semibold text-blue-600">
            25 Yrs in Manjeri
          </span>
        </div>

        {/* Desktop Top Eyebrow Tag (>= 640px) */}
        <div className="hidden sm:inline-flex items-center justify-start gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-[#0D62FE] animate-pulse" />
          <span className="text-[11.5px] font-mono font-bold text-[#0D62FE] uppercase tracking-[0.2em]">
            [ 01/10 CADD CENTRE MANJERI · EST. 2000 ]
          </span>
        </div>

        {/* Desktop Course Discipline Badge with Icon (>= 640px) */}
        <div className="hidden sm:flex items-center justify-start gap-2 mb-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0D62FE] shadow-xs">
            <CurrentIcon className="w-3.5 h-3.5 text-[#0D62FE]" />
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-blue-900">
              {currentSlide.category}
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-500">
            {currentSlide.batchInfo}
          </span>
        </div>

        {/* Dominant Main Headline (High-Tech Grotesque) */}
        <h1 className="text-[34px] xs:text-[40px] sm:text-5xl lg:text-[54px] xl:text-[62px] font-black text-slate-900 tracking-[-0.03em] leading-[1.04] text-center sm:text-left">
          ENGINEERING<br />
          <span className="text-[#0D62FE]">INNOVATION.</span>
        </h1>

        {/* Interactive Twin-Pill Feature Widget (matching Reference Model) */}
        <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md my-3 sm:my-4 text-left max-w-full">
          <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-blue-50/90 border border-blue-200/70">
            <div className="w-6 h-6 rounded-lg bg-[#0D62FE] text-white flex items-center justify-center shadow-xs shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[11.5px] font-bold text-slate-900 block leading-tight truncate">Empowering Engineers</span>
              <span className="text-[10px] text-slate-500 leading-tight block truncate">Hands-On CAD &amp; BIM Mastery</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-3 py-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] font-semibold text-slate-700">42+ Certified Programs</span>
          </div>
        </div>

        {/* Dynamic Slide Tagline */}
        <div className="max-w-[540px] mx-auto sm:mx-0 text-center sm:text-left">
          <p className="text-[14px] sm:text-[16px] font-semibold text-slate-700 leading-snug">
            {currentSlide.tagline}
          </p>
          <p className="hidden sm:block mt-1.5 text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-2">
            {currentSlide.description}
          </p>
        </div>

        {/* Software Stack Pills */}
        <div className="mt-3 sm:mt-3.5 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
          <span className="hidden sm:inline-block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mr-1">
            SOFTWARE:
          </span>
          {/* Mobile view: top 3 tools with soft pills */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap sm:hidden">
            {currentSlide.software.slice(0, 3).map((tool) => (
              <span 
                key={tool}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 shadow-xs"
              >
                {tool}
              </span>
            ))}
            {currentSlide.software.length > 3 && (
              <span className="text-[10px] font-bold text-slate-500 px-1">
                +{currentSlide.software.length - 3}
              </span>
            )}
          </div>
          {/* Tablet & Desktop: all tools */}
          <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
            {currentSlide.software.map((tool) => (
              <span 
                key={tool}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
          {/* Primary CTA */}
          <a
            href="#features"
            className="w-full sm:w-auto bg-[#0D62FE] hover:bg-[#0045D8] text-white px-7 py-3 rounded-full text-[13.5px] font-bold inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Explore All Courses</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 text-slate-800 px-6 py-2.5 sm:py-3 rounded-full text-[13px] sm:text-[13.5px] font-semibold inline-flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer group shadow-xs"
          >
            <span>Enquire Admissions</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D62FE]" />
          </button>
        </div>

        {/* Minimalist Mobile Slide Indicator Dots (< 640px) */}
        <div className="sm:hidden mt-6 flex items-center justify-center gap-2">
          {COURSE_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => selectSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex 
                  ? 'w-7 bg-blue-600 shadow-sm' 
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* ========================================================= */}
      {/* 4. LOWER-RIGHT COURSE SPOTLIGHT CARD (DESKTOP ONLY)       */}
      {/* ========================================================= */}
      <div className="hidden lg:block absolute bottom-24 lg:bottom-32 right-6 sm:right-10 lg:left-auto lg:right-14 xl:right-20 z-20 pointer-events-auto">
        <div 
          onClick={onOpenDemo}
          className="w-[280px] bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-blue-500/50 rounded-2xl p-4.5 shadow-xl text-left transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                Course Spotlight
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400">
              0{currentIndex + 1} / 0{COURSE_SLIDES.length}
            </span>
          </div>

          {/* Active Course Title */}
          <h4 className="text-[13px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-1">
            {currentSlide.title}
          </h4>

          <p className="mt-1 text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
            {currentSlide.tagline}
          </p>

          {/* Bottom Action */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-blue-600">
            <span>Book Free Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 5. DESKTOP BOTTOM COURSE SLIDER TABS & CONTROLS (>= 640px) */}
      {/* ========================================================= */}
      <div className="hidden sm:block absolute bottom-4 sm:bottom-6 inset-x-0 z-20 px-4 sm:px-10 lg:px-14 xl:px-20 pointer-events-auto">
        <div className="max-w-[1360px] mx-auto flex items-center justify-between gap-4">
          
          {/* Course Tabs (Horizontal Slider Bar) */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-1">
            {COURSE_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => selectSlide(idx)}
                  className={`group relative text-left py-2 px-3 sm:px-3.5 rounded-xl transition-all duration-200 cursor-pointer shrink-0 border ${
                    isActive
                      ? 'bg-white border-blue-500 text-blue-900 shadow-md ring-1 ring-blue-500/20'
                      : 'bg-white/80 hover:bg-white border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-bold tracking-tight whitespace-nowrap">
                      {slide.title.split(' ')[0]} {slide.title.split(' ')[1] || ''}
                    </span>
                  </div>

                  {/* Animated Progress Bar on Active Tab */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-slate-100 rounded-b-xl overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Controls & Pause Indicator */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={goToPrevSlide}
              aria-label="Previous Course"
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Play slide rotation' : 'Pause slide rotation'}
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next Course"
              className="w-8 h-8 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
