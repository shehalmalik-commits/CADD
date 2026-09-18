import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Compass,
  Cpu,
  Layers,
  Award
} from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] lg:min-h-[100vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-[#fdf0d5] text-black font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND GRID & AUTHENTIC ARCHITECTURAL CAD VISUAL   */}
      {/* ========================================================= */}
      {/* High-tech blueprint square grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      {/* Hero Authentic CAD / BIM Architecture Showcase Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-40">
        <div className="relative w-full max-w-[1240px] h-[580px] sm:h-[720px] flex items-center justify-center">
          {/* Warm Ambient Radial Glow */}
          <div className="absolute w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] rounded-full bg-gradient-to-tr from-amber-200/40 via-orange-100/20 to-transparent blur-3xl" />

          <img
            src="/images/hero-cad-bim.jpg"
            alt="Architectural CAD BIM Engineering Visualization"
            className="w-full h-full object-contain object-center opacity-85 scale-100 sm:scale-105 transition-transform duration-1000 ease-out rounded-3xl"
            loading="eager"
            fetchPriority="high"
          />

          {/* Seamless gradient mask to blend with the #fdf0d5 background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf0d5] via-transparent to-[#fdf0d5]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdf0d5] via-transparent to-[#fdf0d5]" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. TOP HERO HEADLINE & META                               */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 sm:pt-12 text-center sm:text-left flex flex-col items-center sm:items-start">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-red-200/80 bg-red-50/60 mb-6 sm:mb-8 backdrop-blur-sm">
          <span className="text-[12px] sm:text-sm font-bold text-[#dc2626] uppercase tracking-widest">
            [ 3D CAD & BIM DIGITAL TWIN LAB ]
          </span>
        </div>

        {/* Main Title */}
        <div className="text-center sm:text-left w-full">
          <h1 className="text-[42px] xs:text-[50px] sm:text-[70px] lg:text-[84px] font-black tracking-[-0.02em] leading-[1.05]">
            <span className="text-[#151b28]">The World&apos;s Largest</span><br />
            <span className="text-[#da2020]">CAD <span className="text-[#da2020] px-1.5">&bull;</span> Interior Design</span><br />
            <span className="text-[#151b28]">MEP <span className="text-[#151b28] px-1.5">&bull;</span> BIM <span className="text-[#151b28] px-1.5">&bull;</span> PPM</span><br />
            <span className="text-[#151b28]">Training Network</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mt-7 sm:mt-10 flex items-center justify-center sm:justify-start gap-4">
          <span className="text-[#da2020] text-2xl sm:text-3xl leading-none flex items-center mt-0.5">&bull;</span>
          <p className="text-lg sm:text-2xl font-bold text-[#374151]">
            Proudly Serving Manjeri for 25 Years
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FLOATING TWIN-CARD BENTO WIDGET                         */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto w-full my-8 sm:my-10">
        <div className="bg-white/95 backdrop-blur-xl border border-black/10 rounded-[28px] p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Card 1: Redefining Potential */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-[20px] bg-neutral-50 border border-neutral-200/80">
            <div className="w-11 h-11 rounded-2xl bg-black text-[#fdf0d5] flex items-center justify-center shadow-md shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-mono font-bold text-black uppercase tracking-wider block">
                [ HANDS-ON MASTERY ]
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-black leading-snug truncate">
                Redefining Engineering Potential
              </h3>
              <p className="text-[11px] text-neutral-600 leading-tight truncate">
                Real-world civil, mechanical &amp; architectural designs
              </p>
            </div>
          </div>

          {/* Card 2: Industry Accreditation */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-[20px] bg-white border border-neutral-200/80">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shadow-xs shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block">
                  [ 100% PLACEMENT SUPPORT ]
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-black leading-snug truncate">
                Global Accreditation
              </h3>
              <p className="text-[11px] text-neutral-600 leading-tight truncate">
                Recognized across 30+ countries &amp; GCC
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons - Bold Architectural Black & Cream */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black hover:bg-neutral-800 text-[#fdf0d5] text-xs sm:text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Explore Technical Curriculum</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-neutral-50 text-black text-xs sm:text-sm font-bold border border-black/15 shadow-sm hover:border-black/30 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Enquire Admissions</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM TELEMETRY TICKER BAR                            */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="text-[11px] font-mono font-bold text-black/60 uppercase tracking-wider mr-1">
            CORE DISCIPLINES:
          </span>
          {['BIM ARCHITECTURE', 'STRUCTURAL DETAILING', 'MEP SYSTEMS', 'INTERIOR CAD', 'PROJECT MANAGEMENT'].map((item) => (
            <span
              key={item}
              className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-white/90 border border-black/10 text-black"
            >
              [ {item} ]
            </span>
          ))}
        </div>

        <div className="text-[11px] font-mono font-bold text-black flex items-center gap-1.5 shrink-0">
          <Award className="w-3.5 h-3.5 text-black" />
          <span>25+ YEARS OF ENGINEERING EXCELLENCE</span>
        </div>
      </div>
    </section>
  );
}
