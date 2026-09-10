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
      className="relative w-full min-h-[92vh] lg:min-h-[100vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white text-slate-950 font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden select-none"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND GRID & 3D CHROME-BLUE SCULPTURE             */}
      {/* ========================================================= */}
      {/* High-tech blueprint dot/grid pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0D62FE 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Decorative Technical Crosshairs */}
      <div className="hidden lg:block absolute top-24 left-10 text-[10px] font-mono text-slate-300 pointer-events-none">
        + 11.1219° N, 76.1215° E
      </div>
      <div className="hidden lg:block absolute top-24 right-10 text-[10px] font-mono text-slate-300 pointer-events-none text-right">
        [ SYSTEM: ONLINE · VERIFIED ] +
      </div>

      {/* Hero 3D Futuristic Chrome & Electric Blue Sculpture */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full max-w-[1200px] h-[550px] sm:h-[700px] flex items-center justify-center">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-gradient-to-tr from-[#0D62FE]/20 via-[#0052FF]/10 to-transparent blur-3xl" />
          
          <img
            src="/images/hero-3d-nodes.jpg"
            alt="Futuristic Engineering Nodes"
            className="w-full h-full object-contain object-center opacity-90 scale-100 sm:scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />

          {/* Seamless gradient mask to blend into the pure white background */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. TOP HERO HEADLINE & META                               */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 sm:pt-8 text-center sm:text-left">
        {/* Monospace Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 shadow-2xs mb-5 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#0D62FE] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-mono font-bold text-[#0D62FE] uppercase tracking-[0.2em]">
            [ 01/10 CADD CENTRE MANJERI · EST. 2000 ]
          </span>
        </div>

        {/* Main Title & Aside Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
          <div className="text-center sm:text-left">
            <h1 className="text-[44px] xs:text-[54px] sm:text-[76px] lg:text-[92px] font-black text-slate-950 tracking-[-0.04em] leading-[0.92]">
              ENGINEERING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D62FE] via-[#0052FF] to-blue-500">
                INNOVATION.
              </span>
            </h1>
          </div>

          <div className="lg:max-w-xs text-center sm:text-left lg:pb-3 space-y-2.5">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Kerala's benchmark engineering training hub. Master BIM, MEP, Structural Analysis, Architectural CAD, and Project Management with global credentials.
            </p>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#0D62FE]" />
              <span>INDUSTRY 4.0 · GCC ACCREDITED</span>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. FLOATING TWIN-CARD BENTO WIDGET (Reference Model)       */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-3xl mx-auto w-full my-8 sm:my-10">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[28px] p-2.5 sm:p-3.5 shadow-[0_20px_50px_rgba(13,98,254,0.14)] grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Card 1: Redefining Potential */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-[20px] bg-gradient-to-br from-blue-50/70 to-slate-50/90 border border-blue-100/80">
            <div className="w-11 h-11 rounded-2xl bg-[#0D62FE] text-white flex items-center justify-center shadow-md shadow-blue-600/30 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="text-left min-w-0">
              <span className="text-[10px] font-mono font-bold text-[#0D62FE] uppercase tracking-wider block">
                [ HANDS-ON MASTERY ]
              </span>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug truncate">
                Redefining Engineering Potential
              </h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate">
                Real-world civil, mechanical &amp; architectural designs
              </p>
            </div>
          </div>

          {/* Card 2: Industry Accreditation */}
          <div className="flex items-center gap-3.5 p-3.5 rounded-[20px] bg-white border border-slate-200/90">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shadow-xs shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-wider block">
                  [ 100% PLACEMENT SUPPORT ]
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug truncate">
                Global Accreditation
              </h3>
              <p className="text-[11px] text-slate-500 leading-tight truncate">
                Recognized across 30+ countries &amp; GCC
              </p>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <a
            href="#features"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0D62FE] hover:bg-[#0052FF] text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Explore Technical Curriculum</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-bold border border-slate-200 shadow-sm hover:border-slate-300 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
          >
            <span>Enquire Admissions</span>
            <ArrowUpRight className="w-4 h-4 text-[#0D62FE]" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM TELEMETRY TICKER BAR                            */}
      {/* ========================================================= */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mr-1">
            CORE DISCIPLINES:
          </span>
          {['BIM ARCHITECTURE', 'STRUCTURAL DETAILING', 'MEP SYSTEMS', 'INTERIOR CAD', 'PROJECT MANAGEMENT'].map((item) => (
            <span
              key={item}
              className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-slate-100/80 border border-slate-200 text-slate-700"
            >
              [ {item} ]
            </span>
          ))}
        </div>

        <div className="text-[11px] font-mono font-bold text-[#0D62FE] flex items-center gap-1.5 shrink-0">
          <Award className="w-3.5 h-3.5 text-[#0D62FE]" />
          <span>25+ YEARS OF ENGINEERING EXCELLENCE</span>
        </div>
      </div>
    </section>
  );
}
