import React from 'react';
import { ArrowUpRight, Compass, Layers, Wrench, MonitorCheck, ArrowRight, Laptop, CheckCircle2 } from 'lucide-react';

export default function StatsBanner({ onOpenDemo }) {
  const stats = [
    { num: '25+', label: 'Years of Excellence', sub: 'Pioneering CAD in Manjeri' },
    { num: '25,000+', label: 'Students Certified', sub: 'Alumni Worldwide & GCC' },
    { num: '150+', label: 'Corporate Hiring Partners', sub: 'Top AEC & MEP Recruiters' },
    { num: '98%', label: 'Placement Assistance', sub: 'Direct Interview Drives' },
  ];

  return (
    <div id="disciplines" className="relative font-['Plus_Jakarta_Sans',sans-serif] select-none">

      {/* ========================================================= */}
      {/* STATS COUNTER STRIP (Clean Ice White on Top)              */}
      {/* ========================================================= */}
      <div className="bg-[#F0F6FE] border-y border-blue-100/90 py-8 sm:py-10">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D62FE] tracking-tight">
                  {s.num}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* SECTION 01: FULL-BLEED ELECTRIC BLUE SECTION (Reference)  */}
      {/* ========================================================= */}
      <section className="bg-[#0D62FE] text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle geometric grid background overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }}
        />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* 01 Technical Header & Paragraph (Matching Reference) */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-white/20 mb-10 sm:mb-14">
            <div className="flex items-start sm:items-center gap-4">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono text-white/95 leading-none">
                01
              </span>
              <div>
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-200 mb-1">
                  [ CORE DISCIPLINES ]
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Master Disciplines
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-blue-100 font-normal leading-relaxed max-w-xl text-left lg:text-right">
              Comprehensive career-track technical training in Civil CAD, BIM Architecture, MEP Systems, Product Design, and Project Planning designed for global industry standards.
            </p>
          </div>

          {/* Grid of Stark Pure White Cards (Matching Reference Section 01) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* LEFT COLUMN: 2 Stacked White Cards */}
            <div className="lg:col-span-6 flex flex-col gap-6">

              {/* Card 1: Civil CADD & BIM Architecture */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 text-slate-900 shadow-2xl flex flex-col justify-between text-left hover:shadow-3xl transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      [ CIVIL &amp; ARCHITECTURE ]
                    </span>
                    <span className="text-[11px] font-semibold text-[#0D62FE] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                      High Demand
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors mb-2">
                    Civil CADD &amp; BIM Architecture
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mb-6">
                    Master intelligent 3D BIM modeling, parametric family creation, construction documentation, clash detection, and high-rise structural design.
                  </p>
                </div>

                <div>
                  {/* Micro Blue Button + Tag Pills */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 flex-wrap">
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="w-8 h-8 rounded-lg bg-[#0D62FE] text-white flex items-center justify-center shrink-0 hover:bg-[#0045D8] transition-colors cursor-pointer shadow-xs"
                      aria-label="Enquire Civil BIM"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ REVIT ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ AUTOCAD ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ NAVISWORKS ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ STAAD.PRO ]
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Mechanical & MEP Systems */}
              <div className="bg-white rounded-[24px] p-6 sm:p-8 text-slate-900 shadow-2xl flex flex-col justify-between text-left hover:shadow-3xl transition-all group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      [ MEP &amp; MECHANICAL ]
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      GCC Placement
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors mb-2">
                    Mechanical &amp; MEP Engineering
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mb-6">
                    Commercial HVAC design, plumbing schematics, electrical power distribution, parametric SolidWorks part modeling, and industrial manufacturing drawings.
                  </p>
                </div>

                <div>
                  {/* Micro Blue Button + Tag Pills */}
                  <div className="flex items-center gap-2 pt-4 border-t border-slate-100 flex-wrap">
                    <button
                      type="button"
                      onClick={onOpenDemo}
                      className="w-8 h-8 rounded-lg bg-[#0D62FE] text-white flex items-center justify-center shrink-0 hover:bg-[#0045D8] transition-colors cursor-pointer shadow-xs"
                      aria-label="Enquire MEP"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ SOLIDWORKS ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ REVIT MEP ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ HVAC ]
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      [ CATIA ]
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Large Workstation & Practical Lab Card (Matching Monitor on Desk) */}
            <div className="lg:col-span-6 bg-white rounded-[24px] p-6 sm:p-8 text-slate-900 shadow-2xl flex flex-col justify-between text-left hover:shadow-3xl transition-all group">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    [ LIVE WORKSTATION LAB ]
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    100% Practical
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-[#0D62FE] transition-colors mb-2">
                  Interactive CAD Lab &amp; Live Projects
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed mb-5">
                  Learn on professional dual-monitor workstations with certified CAD/BIM licenses. Work on live construction plans, 3D structural analysis, clash reports, and visualization portfolios.
                </p>

                {/* High-Tech Computer Monitor & Desk Screen Mockup (Matching Reference Image) */}
                <div className="relative rounded-2xl bg-slate-950 p-3 sm:p-4 border border-slate-800 shadow-xl overflow-hidden my-4">
                  {/* Top Bar of Screen */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="ml-2 text-slate-300">Autodesk Revit 2026 · [Project_Manjeri_Mall.rvt]</span>
                    </div>
                    <span className="text-emerald-400 font-bold">LOD 400 Active</span>
                  </div>

                  {/* Screen Content Graphic */}
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 flex items-center justify-center">
                    <img
                      src="/interior_render.jpg"
                      alt="CAD Project Simulation"
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* HUD Overlay telemetry on screen */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-3 flex flex-col justify-between pointer-events-none">
                      <div className="flex justify-end">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-600/90 text-white backdrop-blur-sm">
                          COORDINATION: 100%
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="text-xs font-bold text-white leading-tight">
                          Parametric BIM &amp; MEP Clash Resolution
                        </p>
                        <p className="text-[10px] text-slate-300 font-mono">
                          X: 428.14 · Y: 890.32 · Z: 32.50 [Manjeri Commercial Project]
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Monitor Stand Base */}
                  <div className="w-20 h-2 bg-slate-800 rounded-b-md mx-auto mt-2" />
                </div>
              </div>

              <div>
                {/* Micro Blue Button + Tag Pills */}
                <div className="flex items-center gap-2 pt-4 border-t border-slate-100 flex-wrap">
                  <button
                    type="button"
                    onClick={onOpenDemo}
                    className="w-8 h-8 rounded-lg bg-[#0D62FE] text-white flex items-center justify-center shrink-0 hover:bg-[#0045D8] transition-colors cursor-pointer shadow-xs"
                    aria-label="Enquire Lab"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    [ 1-ON-1 MENTORSHIP ]
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    [ LIVE PROJECTS ]
                  </span>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                    [ GCC STANDARDS ]
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
