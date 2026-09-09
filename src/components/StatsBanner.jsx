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
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative py-16 sm:py-24 lg:py-28 bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-white/5"
    >
      {/* Ambient background glow accents in Brand Red */}
      <div 
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#E94B3C]/12 blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#E94B3C]/8 blur-[130px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: CADD Centre Manjeri Why Choose Us Content     */}
          {/* ========================================================= */}
          <div ref={leftColRef} className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#E94B3C] shadow-[0_0_10px_#E94B3C] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#E94B3C]">
                WHY CHOOSE US
              </span>
            </div>

            {/* Dominant 3-Line Headline (White & Brand Red) */}
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-[-0.03em] leading-[1.08] text-white">
              Industry Skills,<br />
              <span className="text-[#E94B3C] drop-shadow-[0_0_35px_rgba(233,75,60,0.45)]">
                Practical Training &amp;
              </span><br />
              <span className="text-white">
                Career Confidence.
              </span>
            </h2>

            {/* Authentic CADD Centre Manjeri Description */}
            <p className="text-sm sm:text-base lg:text-[16px] text-white/75 font-normal leading-relaxed max-w-xl">
              At CADD Centre Manjeri, we focus on more than software training. Our programs combine live project-based learning, practical industry workflows, and career-focused guidance to help you develop skills that are relevant to real-world work.
            </p>

            {/* 4 Core Pillars Grid (Replacing dummy BCA/MBA with authentic 01-04 points) */}
            <div 
              ref={pillarsRef} 
              className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5"
            >
              {corePillars.map((pillar) => (
                <div key={pillar.num} className="space-y-1">
                  <span className="text-xs font-black text-[#E94B3C] tracking-wider block">
                    {pillar.num}
                  </span>
                  <h3 className="text-sm sm:text-[15px] font-bold text-white tracking-tight leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-white/60 font-normal leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex items-center gap-3.5 sm:gap-4 flex-wrap">
              <a
                href="#features"
                className="bg-[#E94B3C] hover:bg-[#D4382A] active:bg-[#B82E22] text-white text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(233,75,60,0.4)] hover:scale-105 active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Explore Courses</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenDemo}
                className="bg-white/5 hover:bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                Enquire Now
              </button>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Authentic CADD Photograph & Approach Card   */}
          {/* ========================================================= */}
          <div ref={rightColRef} className="lg:col-span-5 relative">
            <div className="relative h-[420px] sm:h-[480px] lg:h-[530px] rounded-[28px] sm:rounded-[32px] overflow-hidden border border-white/15 shadow-2xl group bg-[#0E1726]">
              {/* Authentic CADD Centre Manjeri Counselling / Mentorship Photograph */}
              <img 
                src="/images/why-choose-us.jpg" 
                alt="CADD Centre Manjeri Industry Skills and Mentorship" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Legibility Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Floating Glassmorphic Overlay Card at Bottom with Image 2 Content */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 rounded-[20px] bg-[#0E1726]/85 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-2xl text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#E94B3C]">
                    OUR APPROACH
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug">
                  From Learning Software to Building a Career
                </h4>
                <p className="text-xs sm:text-[13px] text-white/80 font-normal leading-relaxed mt-1.5">
                  Develop practical skills through industry-focused training, hands-on projects and career guidance designed for engineering and design professionals.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
