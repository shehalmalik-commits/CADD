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
    <section id="student-speaks" className="py-8 sm:py-10 bg-white border-t border-gray-100 relative select-none font-['Plus_Jakarta_Sans',sans-serif]">
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

          {/* Right Column: Student Speaks Polaroid Collage Banner (Authentic Reel Photos) */}
          <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100/90 group">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="w-full text-left block relative cursor-pointer focus:outline-none p-5 sm:p-7 min-h-[340px] sm:min-h-[370px] overflow-hidden"
              title="Click to view student stories on Instagram"
            >
              {/* Top-Right Instagram Tag */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-30">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-bold text-[11px] shadow-sm border border-white/10 group-hover:bg-[#E1306C] transition-colors">
                  <InstagramIcon className="w-3 h-3 text-pink-400 group-hover:text-white" />
                  <span>@caddcentremanjeri</span>
                </span>
              </div>

              {/* Grid Layout: Polaroid Collage on Left, STUDENT SPEAKS on Right */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10 pt-2 pb-6">
                
                {/* LEFT: 4 Overlapping Authentic Student Polaroid Frames */}
                <div className="relative w-64 sm:w-72 h-60 sm:h-64 shrink-0 mx-auto sm:mx-0">
                  {/* Subtle soft backdrop shadow */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* 1. Top/Back Polaroid: Masood */}
                  <div className="absolute top-0 left-20 w-26 sm:w-28 bg-white p-1.5 pb-4 shadow-lg border border-gray-200/90 rounded-sm -rotate-3 group-hover:-rotate-6 transition-transform duration-500 z-1">
                    <div className="w-full aspect-[4/4.8] overflow-hidden bg-gray-100">
                      <img
                        src="/images/reels/masood.jpg"
                        alt="Masood - 3D Exhibition Designer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 2. Left Polaroid: Karthik */}
                  <div className="absolute top-8 left-1 w-26 sm:w-28 bg-white p-1.5 pb-4 shadow-lg border border-gray-200/90 rounded-sm -rotate-6 group-hover:-rotate-12 transition-transform duration-500 z-2">
                    <div className="w-full aspect-[4/4.8] overflow-hidden bg-gray-100">
                      <img
                        src="/images/reels/karthik.jpg"
                        alt="Karthik - BIM Civil"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 3. Right Polaroid: Shaheera */}
                  <div className="absolute top-9 right-1 w-26 sm:w-28 bg-white p-1.5 pb-4 shadow-lg border border-gray-200/90 rounded-sm rotate-6 group-hover:rotate-12 transition-transform duration-500 z-2">
                    <div className="w-full aspect-[4/4.8] overflow-hidden bg-gray-100">
                      <img
                        src="/images/reels/shaheera.jpg"
                        alt="Shaheera - Architectural Visualizer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>

                  {/* 4. Front Center Polaroid: Aswathi */}
                  <div className="absolute bottom-1 left-14 sm:left-16 w-30 sm:w-34 bg-white p-1.5 pb-5 shadow-2xl border border-gray-200/90 rounded-sm rotate-1 group-hover:scale-105 transition-all duration-500 z-10 ring-1 ring-black/5">
                    <div className="w-full aspect-[4/4.8] overflow-hidden bg-gray-100">
                      <img
                        src="/images/reels/aswathi.jpg"
                        alt="Aswathi - Interior Designer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT: STUDENT SPEAKS Typography & Chat Bubbles */}
                <div className="flex-1 text-center sm:text-left flex items-center justify-center sm:justify-start gap-3 sm:gap-4 pl-0 sm:pl-2">
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-none">
                      <span className="text-[#C4161C] block">STUDENT</span>
                      <span className="text-gray-950 block mt-1">SPEAKS</span>
                    </h3>
                  </div>

                  {/* Speech Bubble Graphic */}
                  <div className="relative shrink-0 text-[#C4161C] group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-14 h-14 sm:w-16 sm:h-16" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      {/* Red Speech Bubble with smiley */}
                      <path d="M12 20C12 14.5 16.5 10 22 10H42C47.5 10 52 14.5 52 20V32C52 37.5 47.5 42 42 42H28L18 50V42H16C13.8 42 12 40.2 12 38V20Z" fill="white" stroke="#C4161C" />
                      {/* Smiley curve */}
                      <path d="M25 26C27 30 33 30 35 26" stroke="#C4161C" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Black second bubble */}
                      <path d="M46 34C51.5 34 56 38.5 56 44C56 46.5 55 48.8 53.5 50.5L55 56L49.5 54C48 54.6 46.5 55 45 55C39.5 55 35 50.5 35 45" stroke="#11161E" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Floating Bottom Prompt */}
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-30">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-gray-900 font-bold text-xs shadow-md border border-gray-200 group-hover:bg-[#C4161C] group-hover:text-white transition-colors">
                  <Play className="w-3 h-3 fill-current text-[#C4161C] group-hover:text-white" />
                  <span>Click to watch Student Reels</span>
                </span>
              </div>
            </button>
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
