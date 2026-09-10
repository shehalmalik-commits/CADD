import React, { useState, useRef } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import Button from '../ui/Button';
import useAutoCarousel from '../../hooks/useAutoCarousel';
import { EVENT_CATEGORIES } from '../../data/mockEvents';

// Vertical 9:16 "reel" card — the same portrait format the posts have on Instagram
function EventReelCard({ evt }) {
  const href = evt.instagram_url || null;
  const Wrapper = href ? 'a' : 'div';
  const wrapperProps = href
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative block aspect-[9/16] w-full rounded-[18px] overflow-hidden border border-slate-200 bg-slate-900 shadow-md transition-all duration-300 hover:border-blue-500/60 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 select-none cursor-pointer"
    >
      <img
        src={evt.cover_image}
        alt={evt.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Reel scrim: keeps the caption legible over any post artwork */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent pointer-events-none" />

      {/* Category Tag */}
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-blue-700 border border-slate-200/80 z-10 shadow-xs">
        {evt.category}
      </span>

      {/* Instagram Reel Icon Badge */}
      {evt.instagram_url && (
        <span className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all z-10 shadow-xs">
          <svg
            className="w-3.5 h-3.5 fill-none stroke-current stroke-2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </span>
      )}

      {/* Bottom Content Area */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 space-y-1.5 z-10">
        <h3 className="text-[13px] sm:text-[14px] font-bold text-white tracking-tight leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">
          {evt.title}
        </h3>

        <p className="text-[10.5px] text-slate-300 font-normal leading-relaxed line-clamp-2">
          {evt.description}
        </p>

        {evt.instagram_url && (
          <div className="pt-2 mt-1 border-t border-white/20 flex items-center justify-between">
            <span className="text-[9.5px] font-semibold text-white/80">
              Watch on Instagram
            </span>
            <span className="inline-flex items-center gap-0.5 text-[10.5px] font-bold text-blue-300 group-hover:text-white transition-colors">
              <span>Watch</span>
              <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default function HomepageEvents({ events = [], onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef(null);

  const displayEvents = events
    .filter((e) => e.status === 'published')
    .filter((e) => selectedCategory === 'All' || e.category === selectedCategory)
    .sort((a, b) => new Date(b.event_date) - new Date(a.event_date));

  const total = displayEvents.length;

  // Mobile auto-carousel
  const { railProps, index: slide, goTo } = useAutoCarousel(total);

  // Reset slide index when category filter changes
  React.useEffect(() => {
    goTo(0);
  }, [selectedCategory, goTo]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="events"
      className="py-10 sm:py-24 bg-slate-50/70 text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden border-t border-slate-200/80"
    >
      <div id="news" className="absolute -top-12 left-0 pointer-events-none" />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* TOP SECTION HEADER                                        */}
        {/* ========================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6">
          <div className="max-w-2xl space-y-2 text-left">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                CAMPUS HAPPENINGS &amp; REELS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              More Than a Classroom.<br />
              <span className="text-blue-600">A Community That Builds Careers.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed max-w-xl">
              Workshops, industry visits, practical setting-out, celebrations and campus life reels from CADD Centre Manjeri.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Carousel Arrows */}
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              <button
                type="button"
                onClick={scrollLeft}
                aria-label="Previous reels"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={scrollRight}
                aria-label="Next reels"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-blue-600 hover:text-white text-slate-700 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <Button onClick={onOpenDemo} variant="primary" size="md">
              Enquire Admissions
            </Button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CATEGORY FILTER CHIPS                                     */}
        {/* ========================================================= */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {EVENT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 border border-slate-200 shadow-2xs'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* 9:16 REEL DISPLAY ROW / CAROUSEL                           */}
        {/* ========================================================= */}
        {total > 0 ? (
          <>
            {/* MOBILE: auto-advancing 2-up slider */}
            <div className="sm:hidden">
              <div
                {...railProps}
                className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory no-scrollbar"
              >
                {displayEvents.map((evt, idx) => (
                  <div
                    key={evt.id}
                    className={`snap-center shrink-0 w-[calc((100%-0.75rem)/2)] transition-opacity duration-300 ${
                      idx === slide ? 'opacity-100' : 'opacity-75'
                    }`}
                  >
                    <EventReelCard evt={evt} />
                  </div>
                ))}
              </div>

              {total > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {displayEvents.map((evt, idx) => (
                    <button
                      key={evt.id}
                      type="button"
                      onClick={() => goTo(idx)}
                      aria-label={`Show ${evt.title}`}
                      className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                        idx === slide ? 'w-4 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* SM AND UP: interactive scrollable reel showcase */}
            <div
              ref={scrollContainerRef}
              className="hidden sm:flex gap-4 overflow-x-auto pb-4 pt-1 snap-x no-scrollbar scroll-smooth"
            >
              {displayEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="snap-start shrink-0 w-[220px] lg:w-[245px] xl:w-[260px]"
                >
                  <EventReelCard evt={evt} />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-[16px] border border-slate-200 p-8">
            <p className="text-slate-500">No events found in this category.</p>
          </div>
        )}

        {/* ========================================================= */}
        {/* REFINED BOTTOM ARCHIVE BAR                                */}
        {/* ========================================================= */}
        <div className="mt-10 sm:mt-14 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <h4 className="text-sm font-bold text-slate-900 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Explore the CADD Centre Experience</span>
            </h4>
            <p className="text-xs text-slate-500">
              Workshops · Industry Visits · Competitions · Celebrations · Placement Sessions
            </p>
          </div>

          <a
            href="https://www.instagram.com/caddcentremanjeri/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer group py-2"
          >
            <span>Follow @caddcentremanjeri</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
