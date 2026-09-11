import React, { useState } from 'react';
import { Target, CheckCircle2, Phone, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const ACCREDITATIONS = [
  {
    id: 1,
    partner: 'Autodesk',
    sub: 'AUTHORIZED TRAINING PARTNER',
    rating: '4.9 out of 5 stars from 3,800+ alumni',
    stars: 5
  },
  {
    id: 2,
    partner: 'Bentley',
    sub: 'INSTITUTE AUTHORIZED PARTNER',
    rating: '4.9 out of 5 stars from 2,500+ engineers',
    stars: 5
  },
  {
    id: 3,
    partner: 'PTC University',
    sub: 'GLOBAL CERTIFICATION CENTER',
    rating: '4.88 out of 5 stars from 1,645 reviews',
    stars: 5
  }
];

export default function AboutFinbiz({ onOpenDemo }) {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? ACCREDITATIONS.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev === ACCREDITATIONS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Grid: Left Text/Checklist/Founder + Right Tilted Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
              <Target className="w-3.5 h-3.5 text-[#C4161C]" />
              <span>ABOUT CADD CENTRE</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Here is your perfect <br className="hidden sm:inline" />
              Engineering Career Solution
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
              Equipping diploma holders and graduate engineers with world-standard BIM, MEP, and CAD competencies. 25+ years of training excellence in Manjeri bridging academic theory and real-world construction delivery.
            </p>

            {/* 2-Column Checklist with Red Checkmark Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>24/7 Advanced CAD &amp; BIM Lab</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Autodesk &amp; Bentley Certified Mentors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>100% Placement Support in GCC &amp; India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Live Commercial Project Portfolios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>International ISO 19650 Standards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Industry-Recognized Credentials</span>
              </div>
            </div>

            {/* Founder Card + Call Badge */}
            <div className="pt-6 border-t border-gray-100 flex items-center gap-6 flex-wrap">
              {/* Founder Avatar & Title */}
              <div className="flex items-center gap-3">
                <img
                  src="/images/cand1.png"
                  alt="Er. Suhaib K. - Center Director"
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100 shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Er. Suhaib K.</h4>
                  <p className="text-[11px] text-gray-500 font-medium">Center Director &amp; Lead BIM Architect</p>
                </div>
              </div>

              {/* Call Us Anytime Pill */}
              <a
                href="tel:+918891550060"
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 p-2 pr-4 rounded-full transition-colors cursor-pointer w-full sm:w-auto"
              >
                <div className="w-9 h-9 rounded-full bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium">Call us anytime</div>
                  <div className="text-xs font-bold text-gray-900">+91 88915 50060</div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: TILTED TABLET FRAME WITH RED ACCENT BANNER */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full max-w-[500px]">
              
              {/* Main Tilted Tablet Photo Frame */}
              <div 
                className="relative aspect-[4/4.5] w-full rounded-[28px] sm:rounded-[44px] overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white bg-gray-100 transition-transform duration-500 hover:scale-[1.01]"
              >
                <img
                  src="/images/finbiz-consultant.jpg"
                  alt="CADD Centre engineering faculty at workstation"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Diagonal Crimson Badge on bottom-left: "100% Placement Rate" */}
                <div 
                  className="absolute bottom-0 left-0 bg-[#C4161C] text-white py-3 sm:py-4 px-5 sm:px-8 shadow-xl z-20"
                  style={{
                    borderTopRightRadius: '28px'
                  }}
                >
                  <span className="text-xl sm:text-3xl font-black tracking-tight">100%</span>
                  <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/95">
                    Placement Rate
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM ACCREDITATION & REVIEW CARDS ROW */}
        <div className="mt-16 pt-12 border-t border-gray-100 relative">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            {ACCREDITATIONS.map((rev) => (
              <div
                key={rev.id}
                className="p-5 rounded-2xl bg-gray-50/70 border border-gray-100 flex flex-col items-center justify-center text-center space-y-2 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#C4161C] via-red-500 to-amber-500" />
                  <span className="text-sm font-bold text-gray-900">{rev.partner}</span>
                </div>
                <div className="text-[10px] font-bold text-[#C4161C] tracking-wider uppercase">{rev.sub}</div>
                <p className="text-[11.5px] text-gray-500">{rev.rating}</p>
                <div className="flex items-center gap-1">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrow buttons on sides */}
          <div className="flex justify-between items-center mt-6 px-2">
            <button
              type="button"
              onClick={prevReview}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous rating"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 flex items-center justify-center shadow-xs cursor-pointer active:scale-95"
              aria-label="Next rating"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
