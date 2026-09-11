import React from 'react';
import { Target, ArrowRight, Calendar, Sparkles } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: 'New Weekend & Regular Batches: Master Certificate in BIM',
    date: '15. 09. 2026',
    day: '15',
    month: 'SEP',
    category: 'ADMISSIONS OPEN',
    author: 'CADD MANJERI',
    badge: 'Batches Starting',
    img: '/images/hero-cad-bim.jpg'
  },
  {
    id: 2,
    title: 'Free Workshop: ISO 19650 BIM Standards & GCC Career Scope',
    date: '20. 09. 2026',
    day: '20',
    month: 'SEP',
    category: 'TECHNICAL WORKSHOP',
    author: 'BIM ARCHITECTURE',
    badge: 'Free Registration',
    img: '/images/cad_bim_hero_bg.jpg'
  },
  {
    id: 3,
    title: 'Campus Placement Drive: 15+ Top Civil & MEP Firms Hiring',
    date: '28. 09. 2026',
    day: '28',
    month: 'SEP',
    category: 'CAREER DRIVE',
    author: 'PLACEMENT CELL',
    badge: '15+ MNC Recruiters',
    img: '/images/course_structural.jpg'
  }
];

export default function BlogFinbiz({ onOpenDemo }) {
  return (
    <section id="blog" className="py-12 sm:py-16 bg-white select-none border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 text-left">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
              <Target className="w-3.5 h-3.5 text-[#C4161C]" />
              <span>CAMPUS UPDATES &amp; EVENTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight leading-tight">
              Latest Admissions &amp; Workshops
            </h2>
          </div>

          <button
            type="button"
            onClick={onOpenDemo}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#C4161C] hover:text-[#9e1116] transition-colors self-start sm:self-auto cursor-pointer group"
          >
            <span>View All Schedules &amp; Batches</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Shorter, Compact Modern Horizontal Strip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={onOpenDemo}
              className="group bg-white rounded-2xl p-3.5 sm:p-4 border border-gray-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-[#C4161C]/50 transition-all duration-300 flex items-center gap-4 cursor-pointer text-left relative overflow-hidden"
            >
              {/* Left Compact Image Thumbnail (No Change Image) */}
              <div className="relative w-28 sm:w-32 h-24 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100 shadow-2xs">
                <img
                  src={post.img}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Compact Date Tag inside Thumbnail */}
                <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-white text-[9.5px] font-bold border border-white/10 flex items-center gap-1">
                  <Calendar className="w-2.5 h-2.5 text-[#C4161C]" />
                  <span>{post.day} {post.month}</span>
                </div>
              </div>

              {/* Right Content Column */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5 space-y-1.5">
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-1">
                  <span className="text-[10px] font-bold text-[#C4161C] uppercase tracking-wider truncate">
                    {post.category}
                  </span>
                  <span className="hidden sm:inline-block text-[9px] font-bold text-gray-400 uppercase">
                    {post.author}
                  </span>
                </div>

                {/* Course/Event Title (2 Lines Max) */}
                <h3 className="text-xs sm:text-[13.5px] font-extrabold text-gray-900 group-hover:text-[#C4161C] transition-colors line-clamp-2 leading-snug tracking-tight">
                  {post.title}
                </h3>

                {/* Compact Action Link */}
                <div className="pt-0.5 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-[#C4161C] flex items-center gap-1 transition-colors">
                    <span>Register Now</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>

                  <span className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-[#C4161C] text-gray-500 group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>

              {/* Subtle Red Top-Border Highlight on Hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-[#C4161C] opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
