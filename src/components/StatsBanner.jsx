import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Compass, Lightbulb, Briefcase, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsBanner({ onOpenDemo }) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const pillarsRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP & TABLET ANIMATIONS (>= 768px)
      mm.add('(min-width: 768px)', () => {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { y: 35, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: leftColRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        if (rightColRef.current) {
          gsap.fromTo(
            rightColRef.current,
            { scale: 0.96, autoAlpha: 0 },
            {
              scale: 1,
              autoAlpha: 1,
              duration: 0.95,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rightColRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        if (pillarsRef.current) {
          const pillarCols = pillarsRef.current.children;
          gsap.fromTo(
            pillarCols,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              stagger: 0.08,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: pillarsRef.current,
                start: 'top 90%',
                once: true,
              },
            }
          );
        }
      });

      // MOBILE ANIMATIONS (< 768px)
      mm.add('(max-width: 767px)', () => {
        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { y: 20, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.7,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: leftColRef.current,
                start: 'top 90%',
                once: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const corePillars = [
    {
      num: '01',
      title: 'Industry Learning',
      desc: 'Tools, workflows and standards used across engineering & design.',
      icon: Compass,
    },
    {
      num: '02',
      title: 'Practical Training',
      desc: 'Hands-on knowledge through real-world exercises & live projects.',
      icon: Lightbulb,
    },
    {
      num: '03',
      title: 'Career Programs',
      desc: 'Skills aligned with today’s engineering & construction opportunities.',
      icon: Briefcase,
    },
    {
      num: '04',
      title: 'Placement Support',
      desc: 'Experienced mentors & guidance for your next career step.',
      icon: Award,
    },
  ];

  return (
    <div id="why-choose-us" ref={sectionRef} className="relative bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ========================================================= */}
      {/* 1. TOP 3 KEY PILLARS (Matching Image 1 Hero Feature Cards) */}
      {/* ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Feature Card 1 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              Industry Software Mastery
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
              Hands-on training in industry standard software: AutoCAD, Revit BIM, STAAD.Pro, SolidWorks, MEP, and 3ds Max.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              100% Practical &amp; Live Projects
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
              Work on real-world engineering blueprints, 3D structural analysis, clash detection, and interior visualization portfolios.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 text-left group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-xs">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
              Global Certification &amp; Placements
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
              Internationally recognized credentials valid across 30+ countries, backed by direct interview drives in India &amp; GCC.
            </p>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. STATS COUNTER ROW (Matching Image 1 Cool Blue Banner)  */}
      {/* ========================================================= */}
      <div className="bg-[#F0F6FE] border-y border-blue-100/80 py-10 sm:py-12">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Stat 1 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 tracking-tight">
                25+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Years of Excellence
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Pioneering CAD in Manjeri
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 tracking-tight">
                25,000+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Students Certified
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Alumni Working Worldwide
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 tracking-tight">
                150+
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Corporate Hiring Partners
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Top AEC &amp; MEP Recruiters
              </div>
            </div>

            {/* Stat 4 */}
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 tracking-tight">
                98%
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800">
                Placement Assistance
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                Interview &amp; Portfolio Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. WHY CHOOSE US CONTENT SPLIT SECTION                    */}
      {/* ========================================================= */}
      <div className="py-14 sm:py-20 lg:py-24 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Why Choose Us Content */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                WHY CHOOSE US
              </span>
            </div>

            {/* Dominant Headline */}
            <h2 className="text-[28px] xs:text-[32px] sm:text-4xl lg:text-[46px] font-black tracking-tight leading-[1.12] text-slate-900">
              Industry Skills,<br />
              <span className="text-blue-600">Practical Training &amp;</span><br />
              Career Confidence.
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl">
              At CADD Centre Manjeri, we focus on more than software training. Our programs combine live project-based learning, practical industry workflows, and career-focused guidance to help you develop skills that are relevant to real-world work.
            </p>

            {/* 4 Core Pillars Grid */}
            <div 
              ref={pillarsRef} 
              className="pt-3 sm:pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4"
            >
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.num} className="p-3 sm:p-3.5 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-1 hover:border-blue-400 hover:bg-white transition-all shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] sm:text-xs font-black text-blue-600 tracking-wider block">
                        {pillar.num}
                      </span>
                      <Icon className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <h3 className="text-[13px] sm:text-[14px] font-bold text-slate-900 tracking-tight leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#features"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenDemo}
                className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center justify-center shadow-2xs"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Right Column: Photography & Approach Card */}
          <div ref={rightColRef} className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="relative h-[360px] sm:h-[460px] lg:h-[500px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-slate-200 shadow-xl group bg-slate-100">
              <img 
                src="/images/why-choose-us.jpg" 
                alt="CADD Centre Manjeri Industry Skills and Mentorship" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200 p-4 sm:p-5 shadow-xl text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
                    OUR APPROACH
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">
                  From Learning Software to Building a Career
                </h4>
                <p className="text-[11px] sm:text-[12.5px] text-slate-600 font-normal leading-relaxed mt-1">
                  Develop practical skills through industry-focused training, hands-on projects and career guidance designed for engineering and design professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
