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
      className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] select-none bg-[#080D14]"
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
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}
      </div>

      {/* ========================================================= */}
      {/* 2. CINEMATIC GRADIENT OVERLAYS                            */}
      {/* ========================================================= */}
      {/* Top navbar protection */}
      <div 
        className="absolute top-0 inset-x-0 h-32 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(180deg, rgba(8, 13, 20, 0.75) 0%, rgba(8, 13, 20, 0.2) 60%, transparent 100%)'
        }}
      />

      {/* Full-bleed left & bottom gradient for text contrast */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at 20% 70%, rgba(8, 13, 20, 0.95) 0%, rgba(8, 13, 20, 0.75) 45%, rgba(8, 13, 20, 0.35) 85%, transparent 100%)'
        }}
      />

      {/* Horizontal subtle dark sweep from left */}
      <div 
        className="absolute inset-y-0 left-0 w-full md:w-[75%] lg:w-[65%] pointer-events-none z-10"
        style={{
          background: 'linear-gradient(90deg, rgba(8, 13, 20, 0.92) 0%, rgba(8, 13, 20, 0.70) 55%, transparent 100%)'
        }}
      />

      {/* Ambient glowing accent based on current slide */}
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 pointer-events-none z-10"
        style={{ backgroundColor: currentSlide.accent }}
      />

      {/* ========================================================= */}
      {/* 3. HERO CONTENT & HEADLINE (LOWER-LEFT)                   */}
      {/* ========================================================= */}
      <div className="absolute bottom-24 sm:bottom-28 lg:bottom-32 left-5 sm:left-10 lg:left-14 xl:left-20 z-20 max-w-2xl text-left pointer-events-auto">

        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <span className="w-2 h-2 rounded-full bg-[#E94B3C] animate-pulse" />
          <span className="text-[11px] sm:text-[12px] font-bold text-[#FF6B5A] uppercase tracking-[0.18em]">
            PROUDLY SERVING MANJERI FOR 25 YEARS
          </span>
        </div>

        {/* Dynamic Course Discipline Badge with Icon */}
        <div className="flex items-center gap-2 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-white shadow-sm">
            <CurrentIcon className="w-3.5 h-3.5 text-[#FF6B5A]" />
            <span className="text-[11px] font-extrabold tracking-wider uppercase text-white">
              {currentSlide.category}
            </span>
          </div>

          <span className="text-[11px] font-medium text-slate-300 hidden sm:inline-block">
            {currentSlide.batchInfo}
          </span>
        </div>

        {/* Dominant Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.1]">
          Learn the Skills.<br />
          Build Your Future.
        </h1>

        {/* Dynamic Slide Tagline & Description */}
        <div className="mt-3.5 sm:mt-4 max-w-[540px]">
          <p className="text-sm sm:text-[15px] font-semibold text-white/95 leading-snug">
            {currentSlide.tagline}
          </p>
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-300 font-normal leading-relaxed line-clamp-2">
            {currentSlide.description}
          </p>
        </div>

        {/* Software Stack Pills */}
        <div className="mt-4 flex items-center gap-1.5 flex-wrap">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
            Software:
          </span>
          {currentSlide.software.map((tool) => (
            <span 
              key={tool}
              className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-white/[0.07] backdrop-blur-sm border border-white/10 text-slate-200"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-6 sm:mt-7 flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Primary CTA */}
          <a
            href="#disciplines"
            className="bg-[#E94B3C] hover:bg-[#D4382A] text-white px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-[10px] text-xs sm:text-[13.5px] font-bold inline-flex items-center gap-1.5 shadow-[0_4px_18px_rgba(233,75,60,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Explore All Courses</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#0E1624]/90 hover:bg-[#131E30] border border-white/20 hover:border-white/40 text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-[10px] text-xs sm:text-[13.5px] font-semibold inline-flex items-center gap-1.5 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Enquire This Course</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. LOWER-RIGHT COURSE SPOTLIGHT CARD                      */}
      {/* ========================================================= */}
      <div className="hidden lg:block absolute bottom-24 lg:bottom-32 right-6 sm:right-10 lg:right-14 xl:right-20 z-20 pointer-events-auto">
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
      {/* 5. BOTTOM COURSE SLIDER TABS & CONTROLS                   */}
      {/* ========================================================= */}
      <div className="absolute bottom-4 sm:bottom-6 inset-x-0 z-20 px-4 sm:px-10 lg:px-14 xl:px-20 pointer-events-auto">
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
