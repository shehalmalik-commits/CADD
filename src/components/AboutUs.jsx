import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Globe, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  Compass, 
  GraduationCap, 
  Building2, 
  Cpu, 
  PenTool, 
  Layers, 
  ShieldCheck,
  Wrench,
  BarChart3,
  ChevronDown
} from 'lucide-react';
import CourseBottomSheet from './CourseBottomSheet';
import useOverlayHistory from '../hooks/useOverlayHistory';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import MagneticButton from './motion/MagneticButton';
import { disciplinesData } from '../data/disciplinesData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs({ onOpenDemo }) {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isDisciplinesExpanded, setIsDisciplinesExpanded] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Back / swipe-back closes the sheet instead of leaving the site.
  useOverlayHistory(!!selectedCourse, () => setSelectedCourse(null));
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const disciplinesGridRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP ANIMATIONS (>= 1024px)
      mm.add('(min-width: 1024px)', () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { autoAlpha: 0, y: 30, scale: 0.98 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        if (leftColRef.current && rightColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { autoAlpha: 0, x: -30 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: leftColRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );

          gsap.fromTo(
            rightColRef.current,
            { autoAlpha: 0, x: 30 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: rightColRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        if (disciplinesGridRef.current) {
          const items = disciplinesGridRef.current.querySelectorAll('.discipline-card-item');
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 15 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.04,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: disciplinesGridRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }
      });

      // MOBILE & TABLET ANIMATIONS (< 1024px)
      mm.add('(max-width: 1023px)', () => {
        if (headerRef.current) {
          gsap.fromTo(
            headerRef.current,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headerRef.current,
                start: 'top 90%',
                once: true,
              },
            }
          );
        }

        if (leftColRef.current) {
          gsap.fromTo(
            leftColRef.current,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const iconMap = {
    Palette: PenTool,
    Layers: Layers,
    Shield: ShieldCheck,
    Landmark: Building2,
    BarChart3: BarChart3,
    Building: Building2,
    Box: Cpu,
    Wrench: Wrench,
    Cpu: Cpu
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-10 sm:py-24 bg-[#F5F4F1] font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-6 sm:mb-16">
          <SectionHeading
            eyebrow="ABOUT CADD CENTRE"
            title="A Global Learning Vision. Closer to Manjeri."
            description="Empowering engineering, architecture, and design professionals with world-class CAD/BIM education, certified curriculums, and direct industry mentorship."
            align="center"
          />
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Story & Legacy (5 Cols) */}
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-between sm:space-y-6">
            
            {/* Legacy Card (Always visible on mobile) */}
            <div 
              className="bg-white rounded-[20px] p-5 sm:p-8 border border-[rgba(28,37,51,0.10)] shadow-2xs cursor-pointer sm:cursor-default"
              onClick={() => setIsAboutExpanded((prev) => !prev)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-[10px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C]">
                  <Globe className="w-5 h-5 stroke-[1.8]" />
                </div>

                {/* Mobile Expand / Collapse Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsAboutExpanded((prev) => !prev);
                  }}
                  className="sm:hidden w-7 h-7 rounded-full bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-[#E94B3C] flex items-center justify-center shadow-xs active:scale-90 transition-all cursor-pointer hover:bg-[#E94B3C] hover:text-white"
                  aria-label={isAboutExpanded ? "Show fewer cards" : "Expand Beyond Software Training card"}
                  aria-expanded={isAboutExpanded}
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      isAboutExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#1C2533] mb-2">CADD Centre Legacy &amp; Network</h3>
              <p className="text-xs sm:text-sm text-[#687282] leading-relaxed">
                <strong>CADD Centre Manjeri</strong> brings industry-focused technical training in CAD, engineering, architecture, and design to students and professionals. Proudly serving Manjeri for 25 years and backed by CADD Centre’s global network legacy since <strong>1988</strong>, we focus on practical skills and career-ready learning.
              </p>

              <div className="mt-5 pt-4 border-t border-[rgba(28,37,51,0.08)] flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-[6px] bg-[#E94B3C]/10 text-[#E94B3C] text-xs font-black shrink-0">
                  1988
                </span>
                <p className="text-xs text-[#687282] font-medium leading-normal">
                  Empowering learners with industry-relevant technical skills since 1988.
                </p>
              </div>
            </div>

            {/* Philosophy Card (Expandable on mobile, always visible on sm+) */}
            <div
              className={`transition-all duration-300 ease-in-out sm:contents ${
                isAboutExpanded
                  ? 'grid grid-rows-[1fr] opacity-100 mt-4 sm:mt-0'
                  : 'grid grid-rows-[0fr] opacity-0 pointer-events-none sm:pointer-events-auto sm:opacity-100 sm:mt-0'
              }`}
            >
              <div className="overflow-hidden sm:overflow-visible sm:contents">
                <div className="bg-white rounded-[20px] p-5 sm:p-8 border border-[rgba(28,37,51,0.10)] shadow-2xs flex-1 flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-[10px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C] mb-4">
                      <Award className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1C2533] mb-2">Beyond Software Training</h3>
                    <p className="text-xs sm:text-sm text-[#687282] leading-relaxed">
                      Our focus goes beyond simply learning software tools. We aim to help students develop the practical skills, confidence, and professional domain knowledge needed to prepare for real-world career opportunities.
                    </p>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-[#E94B3C] bg-[#E94B3C]/5 px-3.5 py-2.5 rounded-[8px] border border-[#E94B3C]/20">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#E94B3C]" />
                    <span>Practical, career-oriented education &amp; hands-on projects</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Training Programs Grid (7 Cols) */}
          <div ref={rightColRef} className="lg:col-span-7 bg-white rounded-[20px] p-5 sm:p-8 border border-[rgba(28,37,51,0.10)] shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#E94B3C] uppercase tracking-wider">
                  <BookOpen className="w-4 h-4" />
                  <span>Specialized Disciplines</span>
                </div>

                {/* Mobile Expand / Collapse Button */}
                <button
                  type="button"
                  onClick={() => setIsDisciplinesExpanded((prev) => !prev)}
                  className="sm:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-[#E94B3C] text-[11px] font-bold shadow-xs active:scale-95 transition-all cursor-pointer hover:bg-[#E94B3C] hover:text-white"
                  aria-label={isDisciplinesExpanded ? "Show fewer disciplines" : "Expand all 9 disciplines"}
                  aria-expanded={isDisciplinesExpanded}
                >
                  <span>{isDisciplinesExpanded ? 'Show Less' : '+7 More'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                      isDisciplinesExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#1C2533] mb-2">
                Explore Industry Training in Manjeri
              </h3>
              <p className="text-xs sm:text-sm text-[#687282] mb-5 leading-relaxed">
                At CADD Centre Manjeri, students explore comprehensive, hands-on training tailored for key engineering and design sectors:
              </p>

              {/* Grid of 9 Courses (Mobile: 2 visible + 7 expandable, Desktop: full grid) */}
              <div ref={disciplinesGridRef} className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
                {/* First 2 disciplines (Always visible) */}
                {disciplinesData.slice(0, 2).map((discipline) => {
                  const IconComp = iconMap[discipline.iconName] || Building2;
                  return (
                    <div
                      key={discipline.id}
                      onClick={() => setSelectedCourse(discipline)}
                      className="discipline-card-item p-3.5 rounded-[12px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.08)] hover:border-[#E94B3C]/40 hover:bg-white hover:shadow-xs transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                    >
                      <div className="mb-2">
                        <div className="w-7 h-7 rounded-[6px] bg-white border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C] group-hover:bg-[#E94B3C] group-hover:text-white transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#1C2533] group-hover:text-[#E94B3C] transition-colors leading-snug">
                        {discipline.cardTitle}
                      </span>
                    </div>
                  );
                })}

                {/* Remaining 7 disciplines (Expandable on mobile, always visible on sm+) */}
                <div
                  className={`col-span-2 sm:col-span-auto transition-all duration-300 ease-in-out sm:contents ${
                    isDisciplinesExpanded
                      ? 'grid grid-rows-[1fr] opacity-100'
                      : 'grid grid-rows-[0fr] opacity-0 pointer-events-none sm:pointer-events-auto sm:opacity-100'
                  }`}
                >
                  <div className="overflow-hidden sm:overflow-visible sm:contents">
                    <div className="grid grid-cols-2 gap-2.5 sm:contents">
                      {disciplinesData.slice(2).map((discipline) => {
                        const IconComp = iconMap[discipline.iconName] || Building2;
                        return (
                          <div
                            key={discipline.id}
                            onClick={() => setSelectedCourse(discipline)}
                            className="discipline-card-item p-3.5 rounded-[12px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.08)] hover:border-[#E94B3C]/40 hover:bg-white hover:shadow-xs transition-all duration-200 flex flex-col justify-between cursor-pointer group"
                          >
                            <div className="mb-2">
                              <div className="w-7 h-7 rounded-[6px] bg-white border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C] group-hover:bg-[#E94B3C] group-hover:text-white transition-colors">
                                <IconComp className="w-4 h-4" />
                              </div>
                            </div>
                            <span className="text-xs font-bold text-[#1C2533] group-hover:text-[#E94B3C] transition-colors leading-snug">
                              {discipline.cardTitle}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom summary bar inside right card */}
            <div className="mt-6 pt-4 border-t border-[rgba(28,37,51,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#E94B3C]" />
                <span className="text-xs font-medium text-[#687282]">Industry-recognized certification &amp; placement guidance</span>
              </div>
              <Button onClick={onOpenDemo} variant="link" size="sm">
                View All Details
              </Button>
            </div>
          </div>

        </div>

      </div>

      {/* Course Details Bottom Sheet */}
      <CourseBottomSheet
        isOpen={!!selectedCourse}
        onClose={() => setSelectedCourse(null)}
        course={selectedCourse}
        badgeLabel={selectedCourse?.title}
        onOpenDemo={onOpenDemo}
      />
    </section>
  );
}
