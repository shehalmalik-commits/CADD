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
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import CourseBottomSheet from './CourseBottomSheet';
import useOverlayHistory from '../hooks/useOverlayHistory';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import { disciplinesData } from '../data/disciplinesData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs({ onOpenDemo }) {
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Back / swipe-back closes the sheet instead of leaving the site.
  useOverlayHistory(!!selectedCourse, () => setSelectedCourse(null));
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const disciplinesGridRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
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
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.05,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const iconMap = {
    Palette: PenTool,
    Layers: Layers,
    Shield: ShieldCheck,
    Landmark: Building2,
    BarChart3: BarChart3,
    Building: Compass,
    Box: Cpu,
    Wrench: Wrench,
    Cpu: Cpu
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-16 sm:py-24 bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient Lighting Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#E94B3C]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E94B3C]/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <SectionHeading
            eyebrow="ABOUT CADD CENTRE MANJERI"
            title="A Global Learning Vision. Closer to Manjeri."
            description="Empowering engineering, architecture, and design professionals with world-class CAD/BIM education, certified curriculums, and direct industry mentorship."
            align="center"
            light={true}
          />
        </div>

        {/* 3 VALUE PILLARS ROW (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          
          {/* Pillar 1: Global Legacy */}
          <div className="rounded-[22px] bg-[#0E1624] border border-white/10 hover:border-[#E94B3C]/50 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-[#E94B3C]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E94B3C]/5 rounded-full blur-2xl pointer-events-none group-hover:bg-[#E94B3C]/10 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#E94B3C]/15 border border-[#E94B3C]/30 flex items-center justify-center text-[#FF6B5A] group-hover:scale-110 group-hover:bg-[#E94B3C] group-hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                  EST. 1988
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B5A] transition-colors">
                Global Network &amp; Legacy
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Proudly serving Manjeri for over 25 years. Backed by Asia’s premier CAD/BIM network with 1.5M+ engineers and designers trained worldwide across 30+ countries.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#E94B3C]" />
              <span>36+ Years of Proven Excellence</span>
            </div>
          </div>

          {/* Pillar 2: Practical Learning */}
          <div className="rounded-[22px] bg-[#0E1624] border border-white/10 hover:border-[#E94B3C]/50 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-[#E94B3C]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/10 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                  PRACTICAL
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B5A] transition-colors">
                Beyond Software Training
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                We go far beyond basic tool commands. Students master real-world construction drawings, MEP coordination, structural analysis, and client-ready 3D rendering workflows.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>100% Live Project Case Studies</span>
            </div>
          </div>

          {/* Pillar 3: International Credential & Career */}
          <div className="rounded-[22px] bg-[#0E1624] border border-white/10 hover:border-[#E94B3C]/50 p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:shadow-[#E94B3C]/5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300">
                  CAREERS
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B5A] transition-colors">
                Placement &amp; Certification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed">
                Internationally recognized course certification, portfolio development, resume formatting, and continuous placement support across top AEC and manufacturing firms in India and GCC.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span>Dedicated Placement Cell Support</span>
            </div>
          </div>

        </div>

        {/* SPECIALIZED DISCIPLINES SHOWCASE */}
        <div className="rounded-[28px] bg-[#0A101C] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle glow inside container */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#E94B3C]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Disciplines Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B5A] uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Specialized Disciplines</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Explore Industry Training in Manjeri
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                Click on any discipline to inspect curriculum modules, software taught, live projects, and career pathways.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenDemo}
              className="self-start md:self-auto px-5 py-2.5 rounded-full bg-white/[0.05] hover:bg-[#E94B3C] text-xs font-bold text-white border border-white/15 hover:border-[#E94B3C] transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
            >
              <span>Enquire All Programs</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* 9 Disciplines Interactive Grid */}
          <div ref={disciplinesGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {disciplinesData.map((discipline) => {
              const IconComp = iconMap[discipline.iconName] || Building2;
              const toolsList = discipline.toolsCovered
                ?.flatMap((cat) => cat.tools)
                ?.slice(0, 3)
                ?.join(' · ') || '';

              return (
                <div
                  key={discipline.id}
                  onClick={() => setSelectedCourse(discipline)}
                  className="discipline-card-item rounded-2xl bg-[#0E1624] hover:bg-[#131E30] border border-white/10 hover:border-[#E94B3C]/50 p-4.5 sm:p-5 transition-all duration-200 cursor-pointer group flex flex-col justify-between shadow-md hover:shadow-xl hover:shadow-[#E94B3C]/10 relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#FF6B5A] group-hover:bg-[#E94B3C] group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-400 border border-white/10 uppercase tracking-wider">
                        {discipline.badge || 'PRO'}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-[15px] font-bold text-white group-hover:text-[#FF6B5A] transition-colors leading-snug">
                      {discipline.cardTitle}
                    </h4>

                    {toolsList && (
                      <p className="mt-1.5 text-[11px] text-slate-400 font-mono line-clamp-1">
                        {toolsList}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition-colors">
                    <span className="text-[11.5px] font-semibold">View Syllabus &amp; Careers</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-[#FF6B5A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Authorized International Certification · Free Career Demo · Flexible Batches in Manjeri</span>
            </div>

            <button
              type="button"
              onClick={onOpenDemo}
              className="text-xs font-bold text-[#FF6B5A] hover:text-[#E94B3C] inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>Book a Free Counseling Session</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
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
