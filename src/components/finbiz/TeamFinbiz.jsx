import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Target,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
  Users,
  TrendingUp,
  Award,
  Play,
  Pause,
  Radio,
  Briefcase,
  ArrowRight,
  Phone
} from 'lucide-react';

// Authentic Placed & Certified Alumni Data from CADD Centre Manjeri

const PLACED_ALUMNI = [
  { id: 'athul', name: 'Athul', img: '/images/placements/athul-1.png' },
  { id: 'drisya', name: 'Drisya', img: '/images/placements/drisya.png' },
  { id: 'farhana', name: 'Farhana', img: '/images/placements/farhana.png' },
  { id: 'rahul', name: 'Rahul', img: '/images/placements/rahul.jpg' },
  { id: 'noushida', name: 'Noushida', img: '/images/placements/noushida.jpg' },
  { id: 'aswathi', name: 'Aswathi', img: '/images/placements/aswathi.png' },
  { id: 'jasmin', name: 'Jasmin', img: '/images/placements/jasmin.jpg' },
  { id: 'rinsha', name: 'Rinsha', img: '/images/placements/rinsha.png' },
  { id: 'rini', name: 'Rini', img: '/images/placements/rini.jpg' },
  { id: 'shifana', name: 'Shifana', img: '/images/placements/shifana.jpg' },
  { id: 'aiswarya', name: 'Aiswarya', img: '/images/placements/aiswarya.jpg' },
  { id: 'shareena', name: 'Shareena', img: '/images/placements/shareena.jpg' }
];

export default function TeamFinbiz({ onOpenDemo }) {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  // Seamless continuous loop of all 13 authentic Manjeri alumni
  const marqueeItems = useMemo(() => {
    return [...PLACED_ALUMNI, ...PLACED_ALUMNI];
  }, []);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="placements" className="pt-2 sm:pt-3 pb-8 sm:pb-10 bg-[#F8F9FA] relative select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* COMPACT SECTION HEADER (TIGHT TOP SPACING)                */}
        {/* ========================================================= */}
        <div className="text-center space-y-1.5 mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-50 border border-red-200/70 text-[10.5px] font-extrabold uppercase tracking-wider text-[#C4161C]">
            <Target className="w-3 h-3 text-[#C4161C]" />
            <span>VERIFIED CORPORATE PLACEMENTS • CADD CENTRE MANJERI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#111827] tracking-tight leading-tight">
            Career Trajectory &amp; Placed Alumni
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-xl mx-auto leading-relaxed">
            15,000+ certified engineers, drafters, and BIM modelers across UAE, Qatar, Saudi Arabia &amp; India.
          </p>
        </div>

        {/* ========================================================= */}
        {/* COMPACT 4-STAT METRIC ROW                                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4">
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C4161C]/10 text-[#C4161C] flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">15,000+</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Students Placed</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">100%</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Placement Assistance</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">3.5x</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Avg Salary Uplift</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">450+</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Corporate Recruiters</div>
            </div>
          </div>
        </div>

        {/* Mobile Dedicated Apply for Placement Button */}
        <div className="sm:hidden mb-3">
          <a
            href="tel:+919544169638"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#11161E] hover:bg-[#C4161C] text-white shadow-xs transition-all active:scale-98 cursor-pointer"
            title="Call Placement Cell: +91 95441 69638"
          >
            <Phone className="w-3.5 h-3.5 text-[#C4161C]" />
            <span>Apply for Placement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ========================================================= */}
        {/* LIVE STATUS & QUICK CONTROLS BAR (NO CATEGORY TABS)       */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 mb-3">
          {/* Live Indicator */}
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            </span>
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gray-800 truncate">
              {isPlaying ? 'Live Placement Stream' : 'Stream Paused'}
              <span className="hidden min-[380px]:inline"> • Certified Alumni</span>
            </span>
          </div>

          {/* Right Controls: Play/Pause, Manual Arrows, Apply button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href="tel:+919544169638"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#11161E] hover:bg-[#C4161C] text-white transition-all cursor-pointer shadow-xs active:scale-97"
              title="Call Placement Cell: +91 95441 69638"
            >
              <Phone className="w-3 h-3 text-[#C4161C]" />
              <span>Apply for Placement</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border transition-all cursor-pointer bg-white text-gray-700 hover:text-gray-950 border-gray-200 shadow-2xs"
              title="Click to toggle live motion"
            >
              <span className="font-mono text-[10px]">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              {isPlaying ? <Pause className="w-3 h-3 text-gray-500" /> : <Play className="w-3 h-3 text-[#C4161C]" />}
            </button>

            <button
              type="button"
              onClick={() => scrollSlider('left')}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Previous Placement"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider('right')}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Next Placement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CONTINUOUS LIVE MOVING HORIZONTAL MARQUEE TRACK           */}
        {/* ========================================================= */}
        <div
          className="relative overflow-hidden group/marquee rounded-2xl py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle gradient fades on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10" />

          {/* Live Marquee Track: Butter-Smooth Infinite Motion */}
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div
              className="flex flex-nowrap gap-4 sm:gap-5 shrink-0"
              style={{
                animation: isPlaying ? 'marquee 40s linear infinite' : 'none',
                animationPlayState: isPlaying && !isHovered ? 'running' : 'paused'
              }}
            >
              {marqueeItems.map((member, idx) => (
                <div
                  key={`${member.id}-${idx}`}
                  onClick={() => setSelectedAlumni(member)}
                  className="w-[230px] sm:w-[250px] shrink-0 group bg-white rounded-[20px] border border-gray-200/80 p-3 shadow-sm hover:shadow-xl hover:border-[#C4161C]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer relative hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/4.5] w-full rounded-[14px] overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Live Notice */}
          <div className="flex items-center justify-between pt-3 px-1 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live moving stream • Hover or click any card to inspect</span>
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* ALUMNI DOSSIER & POSTER LIGHTBOX MODAL                    */}
      {/* ========================================================= */}
      {selectedAlumni && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedAlumni(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-[24px] overflow-hidden shadow-2xl p-5 sm:p-6 text-left space-y-4 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAlumni(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="overflow-y-auto pr-1 flex justify-center items-center py-4">
                <img
                  src={selectedAlumni.img}
                  alt={selectedAlumni.name}
                  className="max-h-[75vh] w-auto rounded-xl object-contain shadow-md border border-gray-200"
                />
            </div>

            <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedAlumni(null);
                  if (onOpenDemo) onOpenDemo();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-sm"
              >
                Enquire Similar Course
              </button>
              <button
                type="button"
                onClick={() => setSelectedAlumni(null)}
                className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}


