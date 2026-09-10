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
      className="relative w-full min-h-[100svh] sm:h-[100dvh] min-h-[620px] max-h-[1080px] flex flex-col justify-center sm:block overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] select-none bg-[#080D14]"
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
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
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
      {/* 2. CINEMATIC GRADIENT OVERLAYS                            */}
      {/* ========================================================= */}
      {/* Top navbar protection (shared subtle gradient) */}
      <div 
        className="absolute top-0 inset-x-0 h-28 sm:h-36 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(8, 13, 20, 0.70) 0%, rgba(8, 13, 20, 0.20) 65%, transparent 100%)'
        }}
      />

      {/* Desktop-only: Full-bleed left & bottom gradient for text contrast */}
      <div 
        className="hidden sm:block absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 20% 70%, rgba(8, 13, 20, 0.95) 0%, rgba(8, 13, 20, 0.75) 45%, rgba(8, 13, 20, 0.35) 85%, transparent 100%)'
        }}
      />

      {/* Desktop-only: Horizontal subtle dark sweep from left */}
      <div 
        className="hidden sm:block absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(8, 13, 20, 0.92) 0%, rgba(8, 13, 20, 0.70) 55%, transparent 100%)'
        }}
      />

      {/* Ambient glowing accent based on current slide */}
      <div 
        className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 sm:translate-x-0 sm:left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-25 sm:opacity-20 transition-all duration-1000 pointer-events-none z-10"
        style={{ backgroundColor: currentSlide.accent }}
      />

      {/* Mobile-only: Crystal clear cinematic overlay - keeps background image vivid & recognizable */}
      <div 
        className="sm:hidden absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(8, 13, 20, 0.40) 0%, rgba(8, 13, 20, 0.25) 28%, rgba(8, 13, 20, 0.55) 68%, rgba(8, 13, 20, 0.92) 100%)'
        }}
      />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT: CENTERED ON MOBILE, LEFT ON DESKTOP      */}
      {/* ========================================================= */}
      <div className="relative z-20 flex flex-col items-center text-center px-5 pt-28 pb-8 sm:pt-0 sm:pb-0 sm:absolute sm:inset-auto sm:bottom-24 lg:bottom-32 sm:left-10 lg:left-14 xl:left-20 sm:right-auto sm:justify-start sm:items-start sm:text-left sm:p-0 max-w-md sm:max-w-2xl mx-auto sm:mx-0 pointer-events-auto">

        {/* Mobile Unified Pill Badge (< 640px) */}
        <div className="sm:hidden inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#080D14]/75 backdrop-blur-md border border-white/20 text-white shadow-lg mb-3.5">
          <CurrentIcon className="w-3.5 h-3.5 text-[#FF6B5A]" />
          <span className="text-[11px] font-extrabold tracking-wider uppercase text-white">
            {currentSlide.category}
          </span>
          <span className="w-1 h-1 rounded-full bg-white/40" />
          <span className="text-[10.5px] font-semibold text-[#FF8F80]">
            25 Yrs in Manjeri
          </span>
        </div>

        {/* Desktop Top Eyebrow Tag (>= 640px) */}
        <div className="hidden sm:inline-flex items-center justify-start gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E94B3C] animate-pulse" />
          <span className="text-[12px] font-bold text-[#FF6B5A] uppercase tracking-[0.18em]">
            PROUDLY SERVING MANJERI FOR 25 YEARS
          </span>
        </div>

        {/* Desktop Course Discipline Badge with Icon (>= 640px) */}
        <div className="hidden sm:flex items-center justify-start gap-2 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white shadow-sm">
            <CurrentIcon className="w-3.5 h-3.5 text-[#FF6B5A]" />
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-white">
              {currentSlide.category}
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-300">
            {currentSlide.batchInfo}
          </span>
        </div>

        {/* Dominant Main Headline */}
        <h1 className="text-[32px] xs:text-[36px] sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-white tracking-[-0.02em] leading-[1.12] sm:leading-[1.1] text-center sm:text-left drop-shadow-[0_4px_18px_rgba(0,0,0,0.92)]">
          Learn the Skills.<br />
          Build Your Future.
        </h1>

        {/* Dynamic Slide Tagline (Desktop also gets description) */}
        <div className="mt-2.5 sm:mt-4 max-w-[520px] mx-auto sm:mx-0 text-center sm:text-left">
          <p className="text-[13.5px] sm:text-[15px] font-medium text-slate-100 sm:text-slate-200/95 leading-snug drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {currentSlide.tagline}
          </p>
          <p className="hidden sm:block mt-1.5 text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed line-clamp-2">
            {currentSlide.description}
          </p>
        </div>

        {/* Software Stack Pills */}
        <div className="mt-3.5 sm:mt-4 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
          <span className="hidden sm:inline-block text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Software:
          </span>
          {/* Mobile view: top 3 tools with soft pills */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap sm:hidden">
            {currentSlide.software.slice(0, 3).map((tool) => (
              <span 
                key={tool}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#080D14]/70 backdrop-blur-sm border border-white/20 text-slate-100 shadow-sm"
              >
                {tool}
              </span>
            ))}
            {currentSlide.software.length > 3 && (
              <span className="text-[10px] font-bold text-slate-300 px-1 drop-shadow-sm">
                +{currentSlide.software.length - 3}
              </span>
            )}
          </div>
          {/* Tablet & Desktop: all tools */}
          <div className="hidden sm:flex items-center gap-1.5 flex-wrap">
            {currentSlide.software.map((tool) => (
              <span 
                key={tool}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.07] backdrop-blur-sm border border-white/10 text-slate-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row items-center sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
          {/* Primary CTA */}
          <a
            href="#features"
            className="w-full sm:w-auto bg-[#E94B3C] hover:bg-[#D4382A] text-white px-7 py-3 rounded-full sm:rounded-[10px] text-[13.5px] font-bold inline-flex items-center justify-center gap-2 shadow-[0_6px_22px_rgba(233,75,60,0.5)] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Explore All Courses</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full sm:w-auto bg-[#080D14]/65 hover:bg-[#080D14]/85 border border-white/25 hover:border-white/45 text-white px-6 py-2.5 sm:py-3 rounded-full sm:rounded-[10px] text-[13px] sm:text-[13.5px] font-semibold inline-flex items-center justify-center gap-2 backdrop-blur-md active:scale-[0.98] transition-all cursor-pointer group shadow-md"
          >
            <span>Enquire Admissions</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
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
                  ? 'w-7 bg-[#E94B3C] shadow-[0_0_10px_rgba(233,75,60,0.85)]' 
                  : 'w-2 bg-white/40 hover:bg-white/60'
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
          className="w-[280px] bg-[#0E1624]/90 backdrop-blur-md border border-white/20 hover:border-[#E94B3C]/50 rounded-[16px] p-4.5 shadow-2xl text-left transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#FF6B5A]" />
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-300">
                Course Spotlight
              </span>
            </div>
            <span className="text-[10px] font-mono font-bold text-slate-400">
              0{currentIndex + 1} / 0{COURSE_SLIDES.length}
            </span>
          </div>

          {/* Active Course Title */}
          <h4 className="text-[13px] font-bold text-white group-hover:text-[#FF6B5A] transition-colors leading-snug line-clamp-1">
            {currentSlide.title}
          </h4>

          <p className="mt-1 text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
            {currentSlide.tagline}
          </p>

          {/* Bottom Action */}
          <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#FF6B5A]">
            <span>Book Free Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 6. DESKTOP BOTTOM COURSE SLIDER TABS & CONTROLS (>= 640px) */}
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
                      ? 'bg-white/10 border-white/25 text-white shadow-lg'
                      : 'bg-black/30 hover:bg-white/[0.06] border-white/10 text-slate-400 hover:text-slate-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#FF6B5A]' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-bold tracking-tight whitespace-nowrap">
                      {slide.title.split(' ')[0]} {slide.title.split(' ')[1] || ''}
                    </span>
                  </div>

                  {/* Animated Progress Bar on Active Tab */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/10 rounded-b-xl overflow-hidden">
                      <div 
                        className="h-full bg-[#E94B3C] transition-all duration-75 ease-linear"
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
              className="w-8 h-8 rounded-lg bg-black/40 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsPaused(!isPaused)}
              aria-label={isPaused ? 'Play slide rotation' : 'Pause slide rotation'}
              className="w-8 h-8 rounded-lg bg-black/40 hover:bg-white/15 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              title={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
            </button>

            <button
              type="button"
              onClick={goToNextSlide}
              aria-label="Next Course"
              className="w-8 h-8 rounded-lg bg-black/40 hover:bg-white/15 border border-white/15 text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
