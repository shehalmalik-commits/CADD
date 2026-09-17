import React, { useState, useRef } from 'react';
import {
  Play,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  X,
  Film,
  Image as ImageIcon,
  Tag,
  Share2
} from 'lucide-react';
import { INITIAL_EVENTS } from '../../data/mockEvents';

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

const FILTER_TABS = [
  { id: 'all', label: 'All Highlights' },
  { id: 'reels', label: 'Reels & Masterclasses' },
  { id: 'student', label: 'Student Projects' },
  { id: 'campus', label: 'Campus Life & Events' },
  { id: 'programs', label: 'Programs & Guidance' },
];

export default function RevolutionaryFinbiz({ onOpenDemo }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="campus-life"
      className="pt-5 sm:pt-7 pb-12 sm:pb-16 bg-[#080C14] text-white font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden select-none border-y border-white/5 text-left"
    >
      {/* Ambient background volumetric glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C4161C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A43]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* SECTION HEADER & INSTAGRAM METRICS DOCK                   */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 sm:mb-8 gap-6">
          <div className="space-y-3 max-w-3xl text-left">
            {/* Red Live Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-[#FF5A43] text-[11px] font-mono font-bold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-ping" />
              <span>[ LIVE FROM @CADDCENTREMANJERI ]</span>
            </div>

            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] xl:text-[42px] font-extrabold text-white tracking-tight leading-tight">
              Life at CADD Centre. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-gray-400">
                Masterclasses, Reels &amp; <span className="whitespace-nowrap">Student Work.</span>
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed">
              Authentic engineering tutorials, software tips, site visits, and campus celebrations directly from our Manjeri center.
            </p>
          </div>

          {/* Right Action Controls: Follow Button + Carousel Navigation Arrows */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
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
        {/* REELS & POSTS CAROUSEL: SLEEK COMPACT SMARTPHONE REEL DECK */}
        {/* ========================================================= */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 pt-1 no-scrollbar snap-x snap-mandatory scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {INITIAL_EVENTS.map((item) => {
            return (
              <div
                key={item.id}
                className="relative flex-none w-[220px] sm:w-[245px] md:w-[260px] aspect-[9/13.5] rounded-2xl overflow-hidden bg-[#0C1220] border border-white/10 shadow-lg group snap-start transition-all duration-300 hover:-translate-y-2 hover:border-[#E1306C]/60 hover:shadow-[0_15px_35px_rgba(225,48,108,0.22)]"
              >
                {/* Reel Image Background */}
                <img
                  src={item.cover_image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                />

                {/* Subtle vignette gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/40 pointer-events-none" />

                {/* Top Floating Header Dock */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-semibold text-white border border-white/15 shadow-xs">
                    <InstagramIcon className="w-2.5 h-2.5 text-[#E1306C]" />
                    <span>caddcentremanjeri</span>
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/65 backdrop-blur-md text-white/90 border border-white/15 uppercase">
                    {item.is_reel ? 'REEL' : 'POST'}
                  </span>
                </div>

                {/* Center Glowing Instagram Play Button */}
                <a
                  href={item.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg shadow-pink-900/50 group-hover:scale-115 transition-transform duration-300 z-10 cursor-pointer"
                  title={item.is_reel ? "Watch on Instagram" : "View on Instagram"}
                >
                  {item.is_reel ? (
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  )}
                  <span className="absolute inset-0 rounded-full bg-white/30 animate-ping -z-10" />
                </a>

                {/* Bottom Info Floating Card (Clean, compact, no overlap clash) */}
                <div className="absolute inset-x-2.5 bottom-2.5 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 z-10 text-left space-y-1.5 group-hover:border-white/20 transition-colors">
                  {/* Category Chip + Date */}
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <span className="px-2 py-0.5 rounded-full bg-red-500/15 text-[#FF5A43] font-mono font-bold uppercase tracking-wider text-[9px] border border-red-500/20">
                      {item.category}
                    </span>
                    <span>{new Date(item.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-[13px] font-bold text-white leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Watch CTA Link */}
                  <div className="pt-0.5 flex items-center justify-between">
                    <a
                      href={item.instagram_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#E1306C] group-hover:text-white transition-colors cursor-pointer"
                    >
                      <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                      <span>Watch Reel</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPost(item);
                      }}
                      className="text-[10px] text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      Details
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* BOTTOM FULL-WIDTH INSTAGRAM COMMUNITY BANNER              */}
        {/* ========================================================= */}
        <div className="mt-10 p-5 sm:p-6 rounded-[24px] sm:rounded-[28px] bg-gradient-to-r from-white/[0.04] via-white/[0.07] to-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shrink-0 shadow-lg shadow-pink-900/30">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Join 10,000+ Aspiring Engineers in Manjeri</h4>
              <p className="text-xs text-gray-400 mt-0.5">Follow @caddcentremanjeri for daily CAD tutorials, software updates &amp; student placements.</p>
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

      {/* ========================================================= */}
      {/* IN-PAGE LIGHTBOX PREVIEW MODAL                            */}
      {/* ========================================================= */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0F172A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-white/5">
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white">
                  <InstagramIcon className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-xs font-bold text-white">@caddcentremanjeri</h4>
                  <p className="text-[10px] text-gray-400">CADD Centre Manjeri Campus</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body with Image Cover */}
            <div className="relative aspect-[16/10] sm:aspect-[16/11] bg-black overflow-hidden">
              <img
                src={selectedPost.cover_image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[10px] font-mono font-bold border border-white/15">
                {selectedPost.is_reel ? 'REEL' : 'POST'}
              </div>
            </div>

            {/* Modal Details */}
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span className="px-2.5 py-0.5 rounded-full bg-red-500/10 text-[#FF5A43] font-mono text-[10px] font-bold border border-red-500/30">
                  {selectedPost.category}
                </span>
                <span>{new Date(selectedPost.event_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                {selectedPost.title}
              </h3>

              <p className="text-xs text-gray-300 leading-relaxed">
                {selectedPost.description}
              </p>

              {/* Tags */}
              {selectedPost.tags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedPost.tags.map((t, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-red-400 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Modal CTA */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-gray-300 transition-colors cursor-pointer"
                >
                  Close
                </button>

                <a
                  href={selectedPost.instagram_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>{selectedPost.is_reel ? 'Watch Reel on Instagram' : 'View on Instagram'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

