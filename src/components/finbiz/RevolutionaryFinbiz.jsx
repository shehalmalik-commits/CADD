import React, { useState, useRef } from 'react';
import {
  Play,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { EVENT_CATEGORIES, INITIAL_EVENTS } from '../../data/mockEvents';

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

// Simulated realistic view counts for authentic social proof
const VIEW_COUNTS = [
  '14.8K', '11.2K', '18.4K', '9.6K', '15.1K', '8.9K', '12.4K',
  '16.7K', '10.5K', '21.3K', '13.9K', '17.2K', '19.8K'
];

export default function RevolutionaryFinbiz({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const filteredEvents = INITIAL_EVENTS
    .filter((e) => e.status === 'published')
    .filter((e) => selectedCategory === 'All' || e.category === selectedCategory)
    .sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="campus-life"
      className="py-16 sm:py-24 bg-[#080C14] text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden select-none border-y border-white/5 text-left"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C4161C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A43]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* SECTION HEADER & INSTAGRAM METRICS DOCK                   */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            {/* Red Live Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#FF5A43] text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-ping" />
              <span>[ CAMPUS LIFE &amp; STUDENT REELS ]</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
              Life at CADD Centre. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-gray-400">
                A Community That Builds Careers.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
              Real moments from our Manjeri campus: hands-on software workshops, industrial site visits, student convocations, and festive celebrations.
            </p>
          </div>

          {/* Right Action Controls: Follow Button + Carousel Navigation Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Instagram Profile Pill */}
            <a
              href="https://www.instagram.com/caddcentremanjeri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-white transition-all cursor-pointer shadow-xs group"
            >
              <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform">
                <InstagramIcon className="w-3.5 h-3.5" />
              </span>
              <span>@caddcentremanjeri</span>
              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-white" />
            </a>

            {/* Slider Navigation Arrows (< >) */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous Reels"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next Reels"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CATEGORY FILTER PILLS                                     */}
        {/* ========================================================= */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-3 mb-5 no-scrollbar"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer shrink-0 ${isSelected
                  ? 'bg-[#C4161C] text-white shadow-lg shadow-red-950/40 ring-2 ring-[#C4161C]/30'
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* REELS CAROUSEL: SLEEK VERTICAL SMARTPHONE REEL CARDS      */}
        {/* ========================================================= */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {filteredEvents.map((reel, idx) => {
            const viewCount = VIEW_COUNTS[idx % VIEW_COUNTS.length];

            return (
              <div
                key={reel.id}
                className="relative flex-none w-[240px] sm:w-[290px] md:w-[310px] aspect-[9/15] rounded-[26px] sm:rounded-[30px] overflow-hidden bg-slate-900 border border-white/10 shadow-xl group snap-start transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-[0_20px_40px_rgba(196,22,28,0.2)]"
              >
                {/* Reel Background Photo Cover */}
                <img
                  src={reel.cover_image}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Scrim Gradients (Top & Bottom Vignettes) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/40 to-black/60 pointer-events-none" />

                {/* TOP BAR: Category Badge + Views Counter */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15 shadow-sm">
                    {reel.category}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10.5px] font-mono font-bold bg-black/60 backdrop-blur-md text-white/90 border border-white/15 shadow-sm">
                    <Eye className="w-3 h-3 text-[#FF5A43]" />
                    <span>{viewCount}</span>
                  </span>
                </div>

                {/* CENTER GLOWING INSTAGRAM PLAY BUTTON */}
                <a
                  href={reel.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_0_30px_rgba(220,39,67,0.5)] group-hover:scale-115 transition-transform duration-300 z-10 cursor-pointer"
                  title="Watch Reel on Instagram"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping -z-10" />
                </a>

                {/* BOTTOM REEL INFO DOCK */}
                <div className="absolute inset-x-0 bottom-0 p-5 space-y-2.5 z-10 text-left">
                  {/* Date & Location */}
                  <div className="flex items-center justify-between text-[11px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FF5A43]" />
                      <span>{new Date(reel.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </span>
                    <span className="truncate max-w-[120px] text-gray-400">{reel.location}</span>
                  </div>

                  {/* Reel Title */}
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug line-clamp-2 group-hover:text-white transition-colors">
                    {reel.title}
                  </h3>

                  {/* Reel Description */}
                  <p className="text-[11.5px] text-gray-300 line-clamp-2 leading-relaxed font-normal">
                    {reel.description}
                  </p>

                  {/* Watch on Instagram CTA Pill */}
                  <div className="pt-2">
                    <a
                      href={reel.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md group/link"
                    >
                      <InstagramIcon className="w-3.5 h-3.5 text-[#dc2743]" />
                      <span>Watch Full Reel</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM FULL-WIDTH INSTAGRAM COMMUNITY BANNER              */}
        {/* ========================================================= */}
        <div className="mt-8 p-5 sm:p-6 rounded-[28px] bg-gradient-to-r from-white/[0.04] via-white/[0.07] to-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-900/30">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Join Our Growing Engineer Community</h4>
              <p className="text-xs text-gray-400 mt-0.5">Follow daily campus reels, project showcases, and student placements.</p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://www.instagram.com/caddcentremanjeri"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer text-center"
            >
              Follow on Instagram
            </a>

            <button
              type="button"
              onClick={onOpenDemo}
              className="hidden md:inline-flex px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Book Campus Visit
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
