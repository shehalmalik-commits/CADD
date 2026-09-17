import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, Play, X, ExternalLink, MapPin, Sparkles, Video, MessageCircle } from 'lucide-react';

// Inline Instagram gradient SVG icon
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// 8 Verified Student Speaks Reels from @caddcentremanjeri
const STUDENT_REELS = [
  {
    id: 'DTKvS-2ibvo',
    name: 'Aswathi',
    role: 'Interior Designer',
    location: 'Malappuram',
    course: 'Interior Design & CAD',
    thumbnail: '/images/reels/aswathi.jpg',
    reelUrl: 'https://www.instagram.com/reel/DTKvS-2ibvo/?stkn=MTZ0eHppOTRyanRnNg==',
    badge: 'Latest Story',
    quote: 'From foundation to realistic 3D interior walkthroughs.'
  },
  {
    id: 'DSUs58WiV1M',
    name: 'Shaheera',
    role: 'Architectural Visualizer',
    location: 'Kizhisseri',
    course: 'SketchUp & Lumion',
    thumbnail: '/images/reels/shaheera.jpg',
    reelUrl: 'https://www.instagram.com/reel/DSUs58WiV1M/?stkn=bmd0aDMydmcxdnd3',
    badge: 'Architecture',
    quote: 'Turning 2D plans into hyper-realistic daylight renders.'
  },
  {
    id: 'DR4dDSgif0Q',
    name: 'Karthik',
    role: 'BIM & Interior Specialist',
    location: 'Malappuram',
    course: 'BIM & Interior Design',
    thumbnail: '/images/reels/karthik.jpg',
    reelUrl: 'https://www.instagram.com/reel/DR4dDSgif0Q/?stkn=a3FuYW5yam93MjJo',
    badge: 'BIM Civil',
    quote: 'Chose CADD Centre Manjeri to shape his engineering career.'
  },
  {
    id: 'DR18fAkj7im',
    name: 'Masood',
    role: '3D Exhibition Designer',
    location: 'Gulf Projects',
    course: '3D Modelling & Visualization',
    thumbnail: '/images/reels/masood.jpg',
    reelUrl: 'https://www.instagram.com/reel/DR18fAkj7im/?stkn=bmZzMnQ5YjZ6ZGNz',
    badge: '3D Modeling',
    quote: 'Working on international exhibition & pavilion designs.'
  },
  {
    id: 'DRUYYpHiaab',
    name: 'Thasnee',
    role: 'CAD & 3D Specialist',
    location: 'Palakkad',
    course: 'AutoCAD, SketchUp & Lumion',
    thumbnail: '/images/reels/thasnee.jpg',
    reelUrl: 'https://www.instagram.com/reel/DRUYYpHiaab/?stkn=Mjl4MnI1N3Z6MzNx',
    badge: 'Design Suite',
    quote: 'Learning AutoCAD, SketchUp & Lumion with mentor guidance.'
  },
  {
    id: 'DRKA9QXif1g',
    name: 'Rinsha',
    role: 'Mechanical CAD Designer',
    location: 'Thuvvur',
    course: 'SolidWorks Mechanical',
    thumbnail: '/images/reels/rinsha.jpg',
    reelUrl: 'https://www.instagram.com/reel/DRKA9QXif1g/?stkn=eWY2MWo2anBseGhi',
    badge: 'Mechanical',
    quote: 'Precision industrial drafting and 3D machine assemblies.'
  },
  {
    id: 'DQWkFmYCR57',
    name: 'Sharan Babu',
    role: 'Design Engineer',
    location: 'Malappuram',
    course: 'SolidWorks & Machine Design',
    thumbnail: '/images/reels/sharan.jpg',
    reelUrl: 'https://www.instagram.com/reel/DQWkFmYCR57/?stkn=MXRha3duZDZjZXVpOA==',
    badge: 'Engineering',
    quote: 'Deep practical understanding of CAD drafting and assembly.'
  },
  {
    id: 'DPtSzT0iWAc',
    name: 'Shahin',
    role: 'BIM Engineer',
    location: 'Mukkam',
    course: 'Building Information Modeling',
    thumbnail: '/images/reels/shahin.jpg',
    reelUrl: 'https://www.instagram.com/reel/DPtSzT0iWAc/?stkn=NWZ3ZWZ3Mnc0N3h4',
    badge: 'BIM Civil',
    quote: 'Mastering BIM at CADD Centre Manjeri for top industry roles.'
  }
];

export default function NewsletterFinbiz({ onOpenDemo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-8 sm:py-10 bg-white border-t border-gray-100 relative select-none font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Centered Eyebrow Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-[#C4161C] tracking-tight">
            Hear from our students
          </h3>
        </div>

        {/* Main 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

          {/* Left Column: Heading + Description + Action Buttons */}
          <div className="space-y-5 text-left max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#C4161C] tracking-tight leading-tight">
              Straight from our learners&#39; hearts!
            </h2>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              It is always joyful to enable passionate learners in their journey to success. Watch our learners share their experiences with learning at CADD Centre Manjeri.
            </p>

            {/* Action Buttons: Opens Reels Modal + Syllabus Enquire */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-extrabold text-sm shadow-lg shadow-pink-600/30 hover:scale-105 transition-all cursor-pointer group"
                title="Click to view Student Stories on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-white" />
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Verification Features Row */}
            <div className="pt-3 border-t border-gray-100 flex flex-wrap items-center gap-4 text-xs text-gray-600 font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified GCC Placements</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Real Student Testimonials</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>@caddcentremanjeri</span>
              </span>
            </div>
          </div>

          {/* Right Column: Student Speaks Studio Showcase (Coded Model Structure - No Static Image) */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-[#FFF8F8] to-[#FFF0F2] p-6 sm:p-8 shadow-xl border border-red-100/90 group text-left">
            {/* Ambient Background Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-pink-100/30 rounded-full blur-2xl pointer-events-none -ml-10 -mb-10" />

            <div className="relative z-10 space-y-5">
              {/* Top Header Row: Live Studio Tag + Instagram Pill */}
              <div className="flex items-center justify-between gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-red-200/80 text-[11px] font-black text-red-600 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-pulse" />
                  <span className="tracking-wide uppercase text-[10px]">STUDENT SPEAKS STUDIO</span>
                </div>

                <a
                  href="https://www.instagram.com/caddcentremanjeri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 hover:bg-gradient-to-r hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white text-gray-700 font-bold text-[11px] shadow-2xs border border-gray-200 transition-all group/ig"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#E1306C] group-hover/ig:text-white transition-colors" />
                  <span>@caddcentremanjeri</span>
                </a>
              </div>

              {/* Bold Typography Title & Speech Bubble Icon */}
              <div className="flex items-center justify-between gap-4 pt-1">
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
                    <span className="text-[#C4161C] block">STUDENT</span>
                    <span className="text-gray-950 block mt-1">SPEAKS</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium mt-2">
                    Direct video experiences & career transformation stories
                  </p>
                </div>

                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#C4161C] to-[#8C0D12] text-white flex items-center justify-center shadow-lg shadow-red-600/20 shrink-0 group-hover:scale-105 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 fill-white/20 text-white" />
                </div>
              </div>

              {/* Student Quotes Mini-Cards */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-2xl bg-white/95 border border-red-100 shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-[#C4161C] text-[9.5px] font-black flex items-center justify-center shrink-0">
                      AS
                    </span>
                    <span className="text-xs font-black text-gray-900 truncate">Aswathi</span>
                  </div>
                  <div className="text-[10px] text-red-600 font-bold">Interior CAD</div>
                  <p className="text-[10.5px] text-gray-600 line-clamp-2 leading-tight">
                    &ldquo;From foundation to realistic 3D interior walkthroughs.&rdquo;
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-white/95 border border-red-100 shadow-2xs space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-[#C4161C] text-[9.5px] font-black flex items-center justify-center shrink-0">
                      KT
                    </span>
                    <span className="text-xs font-black text-gray-900 truncate">Karthik</span>
                  </div>
                  <div className="text-[10px] text-red-600 font-bold">BIM Civil</div>
                  <p className="text-[10.5px] text-gray-600 line-clamp-2 leading-tight">
                    &ldquo;Shaped my engineering career for top GCC placement.&rdquo;
                  </p>
                </div>
              </div>

              {/* Action Button: Opens Reels Lightbox Modal */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full py-3.5 px-5 rounded-2xl bg-[#C4161C] hover:bg-[#A81217] text-white font-extrabold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-red-600/25 hover:shadow-xl transition-all cursor-pointer group/btn active:scale-98"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:scale-110 transition-transform">
                  <Play className="w-3 h-3 fill-current text-white ml-0.5" />
                </div>
                <span>Click to Watch Student Reels</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* DIRECT STUDENT REEL MINI-CARDS (MAXIMUM SHORT)           */}
        {/* ========================================================= */}
        <div className="mt-6 pt-5 border-t border-gray-100 text-left">
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-md bg-pink-50 text-[#E1306C] inline-flex items-center justify-center">
                <InstagramIcon className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className="text-xs sm:text-sm font-extrabold text-gray-950">
                  Student Speaks Reels (Click to Watch):
                </span>
                <span className="hidden sm:inline text-[11px] text-gray-500 ml-2">
                  Direct student stories on Instagram @caddcentremanjeri
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E1306C] hover:text-[#b01e50] transition-colors cursor-pointer shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* 8 Ultra-Compact Horizontal Cards (2 Rows of 4 on Desktop, ~50px height each) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {STUDENT_REELS.map((reel) => (
              <a
                key={reel.id}
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl bg-gray-50/80 hover:bg-white border border-gray-200/80 hover:border-[#E1306C]/50 hover:shadow-xs transition-all duration-150 relative cursor-pointer"
                title={`Watch ${reel.name}'s story on Instagram`}
              >
                {/* 40x40 Square Avatar with Gradient Ring & Play overlay */}
                <div className="relative w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-gray-900 ring-1 ring-black/10">
                  <img
                    src={reel.thumbnail}
                    alt={reel.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-200 opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-xs">
                      <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Info Text */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-extrabold text-gray-900 group-hover:text-[#C4161C] transition-colors truncate">
                      {reel.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-gray-400 group-hover:text-[#E1306C] shrink-0 transition-colors" />
                  </div>
                  <p className="text-[10px] font-bold text-[#C4161C] truncate leading-tight">
                    {reel.role}
                  </p>
                  <p className="text-[9px] text-gray-500 truncate leading-tight">
                    {reel.location} • {reel.badge}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* INSTAGRAM REELS POPUP MODAL                               */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F141C] text-white rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 sm:px-7 py-4 border-b border-white/10 flex items-center justify-between bg-[#151B26]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                    Student Speaks — Real Stories
                  </h3>
                  <p className="text-xs text-gray-400">
                    Watch real learner journeys directly on Instagram <span className="text-[#FF5A43] font-bold">@caddcentremanjeri</span>
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body: Scrollable 8 Stories */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                {STUDENT_REELS.map((reel) => (
                  <a
                    key={reel.id}
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#18202E] hover:bg-[#202B3D] rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all p-3 flex flex-col justify-between text-left cursor-pointer"
                  >
                    <div className="relative aspect-square rounded-xl overflow-hidden bg-black mb-2.5">
                      <img
                        src={reel.thumbnail}
                        alt={reel.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform opacity-85"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/80 backdrop-blur-md text-white text-[9px] font-bold border border-white/20">
                        {reel.badge}
                      </div>

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-transform">
                        <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                      </div>

                      <div className="absolute bottom-1.5 left-2 flex items-center gap-1 text-[10px] text-gray-300">
                        <MapPin className="w-3 h-3 text-pink-400" />
                        <span>{reel.location}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-white group-hover:text-pink-400 transition-colors">
                        {reel.name}
                      </h4>
                      <p className="text-xs text-[#FF5A43] font-semibold truncate">
                        {reel.role}
                      </p>
                      <p className="text-[11px] text-gray-400 line-clamp-2 leading-relaxed">
                        {reel.quote}
                      </p>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-xs font-bold text-pink-400 group-hover:text-pink-300">
                      <span>Watch Reel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-7 py-3.5 border-t border-white/10 bg-[#151B26] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>All videos link to verified student accounts on Instagram</span>
              </span>

              <a
                href="https://www.instagram.com/caddcentremanjeri"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-pink-400 transition-colors"
              >
                <span>Visit @caddcentremanjeri on Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
