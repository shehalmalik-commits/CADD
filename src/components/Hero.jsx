import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  return (
    <section className="relative w-full h-screen min-h-[620px] max-h-[1080px] overflow-hidden font-['Plus_Jakarta_Sans',sans-serif] select-none">

      {/* 100% Full-Width Full-Bleed Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src="/web hero section final out-2-2.mp4" type="video/mp4" />
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Translucent Gradient Overlay for High Text Contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(8, 14, 24, 0.60) 0%, rgba(10, 20, 35, 0.32) 40%, rgba(6, 12, 22, 0.82) 100%)'
        }}
      />

      {/* Subtle Vignette Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 25% 75%, rgba(6, 12, 22, 0.80) 0%, transparent 65%)'
        }}
      />

      {/* ========================================================= */}
      {/* LOWER-LEFT HERO HEADLINE & CADD CENTRE POSITIONING        */}
      {/* ========================================================= */}
      <div className="absolute bottom-10 sm:bottom-14 lg:bottom-16 xl:bottom-20 left-6 sm:left-10 lg:left-14 xl:left-20 z-20 max-w-2xl text-left pointer-events-auto">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
          <span className="text-[11px] sm:text-[12px] font-bold text-[#E94B3C] uppercase tracking-[0.18em]">
            PROUDLY SERVING MANJERI FOR 25 YEARS
          </span>
        </div>

        {/* Dominant Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] font-bold text-white tracking-[-0.02em] leading-[1.08] sm:leading-[1.1]">
          Learn the Skills.<br />
          Build Your Future.
        </h1>

        {/* Description */}
        <p className="mt-3.5 sm:mt-4 text-xs sm:text-[14px] text-white/85 font-normal leading-relaxed max-w-[520px]">
          The World’s Largest CAD, Interior Design, MEP, BIM &amp; PPM Training Network. Empowering students and professionals in Manjeri with practical skills and career preparation.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="mt-6 sm:mt-7 flex items-center gap-3 sm:gap-4 flex-wrap">
          {/* Primary CTA */}
          <a
            href="#features"
            className="bg-[#E94B3C] hover:bg-[#D4382A] text-white px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-[10px] text-xs sm:text-[13.5px] font-bold inline-flex items-center gap-1.5 shadow-[0_4px_16px_rgba(233,75,60,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Explore Courses</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#071724]/80 hover:bg-[#071724] border border-white/20 hover:border-white/40 text-white px-5 sm:px-6 py-2.5 sm:py-3.5 rounded-[10px] text-xs sm:text-[13.5px] font-semibold inline-flex items-center gap-1.5 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LOWER-RIGHT LATEST NEWS FLOATING CARD                     */}
      {/* ========================================================= */}
      <div className="hidden sm:block absolute bottom-10 sm:bottom-14 lg:bottom-16 xl:bottom-20 right-6 sm:right-10 lg:right-14 xl:right-20 z-20 pointer-events-auto">
        <div className="w-[220px] sm:w-[245px] bg-[#071724]/85 backdrop-blur-md border border-white/20 rounded-[12px] p-4 shadow-2xl text-left transition-transform duration-200 hover:scale-[1.03] group cursor-pointer">

          {/* Small Label */}
          <div className="flex items-center gap-1.5 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C] animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">
              Latest News
            </span>
          </div>

          {/* News Headline */}
          <p className="text-[11.5px] font-medium text-white/95 leading-snug line-clamp-2">
            New courses, workshops and placement opportunities at CADD Centre Manjeri.
          </p>

          {/* Read More Link */}
          <a
            href="#events"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E94B3C] hover:text-[#ff6354] transition-colors mt-2.5 group-hover:underline"
          >
            <span>Read More</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

    </section>
  );
}
