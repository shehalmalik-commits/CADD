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
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import CourseBottomSheet from './CourseBottomSheet';
import useOverlayHistory from '../hooks/useOverlayHistory';
import { disciplinesData } from '../data/disciplinesData';

gsap.registerPlugin(ScrollTrigger);

const FACULTY_MEMBERS = [
  {
    id: 'fac-1',
    name: 'Er. Suhaib K.',
    role: 'Lead BIM Architect & ISO 19650 Specialist',
    department: 'Civil & Architectural BIM',
    exp: '12+ Years Industry Exp',
    credentials: 'Autodesk Certified Instructor · Revit Professional',
    img: '/images/cand1.png',
    status: 'ACTIVE MENTOR',
    tag: 'BIM ARCHITECTURE'
  },
  {
    id: 'fac-2',
    name: 'Er. Rahul M.',
    role: 'Senior Structural Engineer & STAAD Specialist',
    department: 'Structural Analysis & Design',
    exp: '10+ Years Industry Exp',
    credentials: 'Bentley STAAD.Pro Certified · ETABS Master',
    img: '/images/cand2.png',
    status: 'ACTIVE MENTOR',
    tag: 'STRUCTURAL CAD'
  },
  {
    id: 'fac-3',
    name: 'Ar. Fathima N.',
    role: 'Interior Architecture & High-End Visualizer',
    department: 'Interior Design & 3D V-Ray',
    exp: '8+ Years Industry Exp',
    credentials: '3ds Max Specialist · Chaos Group V-Ray Pro',
    img: '/images/cand3.png',
    status: 'ACTIVE MENTOR',
    tag: 'INTERIOR VISUALS'
  },
  {
    id: 'fac-4',
    name: 'Er. Akhil P.',
    role: 'MEP Systems & Building Services Coordinator',
    department: 'Mechanical, Electrical & Plumbing',
    exp: '9+ Years Industry Exp',
    credentials: 'Revit MEP Certified · ASHRAE & NFPA Standards',
    img: '/images/cand4.png',
    status: 'ACTIVE MENTOR',
    tag: 'MEP COORDINATOR'
  }
];

export default function AboutUs({ onOpenDemo }) {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [facultyIndex, setFacultyIndex] = useState(0);

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
      className="relative py-16 sm:py-24 bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* NUMBERED TECHNICAL HEADER 04 */}
        <div ref={headerRef} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 border-b border-slate-200 pb-8">
          <div className="max-w-3xl space-y-2 text-left">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-[#0D62FE] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                04 MEET THE EXPERTS / FACULTY
              </span>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">
                [ AUTHORIZED INDUSTRY MENTORS ]
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              WORLD-CLASS MENTORSHIP.<br />
              <span className="text-[#0D62FE]">CLOSER TO MANJERI.</span>
            </h2>

            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 font-normal leading-relaxed max-w-2xl">
              Direct, hands-on instruction from authorized Autodesk, Bentley, and PTC certified mentors with real-world infrastructure and high-rise project experience.
            </p>
          </div>

          {/* Reference design pagination buttons: 01, 02/04, 03 */}
          <div className="flex items-center gap-2 font-mono text-xs shrink-0">
            <button
              type="button"
              onClick={() => setFacultyIndex((prev) => (prev > 0 ? prev - 1 : FACULTY_MEMBERS.length - 1))}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Previous mentor"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-700">
              <span className="text-[#0D62FE]">0{facultyIndex + 1}</span> / 0{FACULTY_MEMBERS.length}
            </div>
            <button
              type="button"
              onClick={() => setFacultyIndex((prev) => (prev < FACULTY_MEMBERS.length - 1 ? prev + 1 : 0))}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center transition-all cursor-pointer shadow-xs"
              aria-label="Next mentor"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* FACULTY CARDS ROW (Matching Reference Design 04 Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16">
          {FACULTY_MEMBERS.map((mentor, idx) => {
            const isHighlighted = idx === facultyIndex;
            return (
              <div
                key={mentor.id}
                onClick={() => setFacultyIndex(idx)}
                className={`group rounded-[24px] bg-white border p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col justify-between text-left shadow-lg hover:shadow-2xl hover:-translate-y-1.5 ${
                  isHighlighted
                    ? 'border-[#0D62FE] ring-2 ring-blue-500/20 shadow-blue-500/10'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  {/* Portrait Container */}
                  <div className="relative aspect-[4/4.5] w-full rounded-[18px] overflow-hidden bg-slate-100 mb-4">
                    <img
                      src={mentor.img}
                      alt={mentor.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/images/faculty.png';
                      }}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[#0D62FE] border border-slate-200 shadow-xs">
                        [ {mentor.tag} ]
                      </span>
                    </div>
                    <div className="absolute bottom-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 font-mono text-[9.5px] font-bold text-emerald-700 bg-emerald-50/95 backdrop-blur-md px-2 py-0.5 rounded-md border border-emerald-200 shadow-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {mentor.status}
                      </span>
                    </div>
                  </div>

                  {/* Mentor Details */}
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#0D62FE] transition-colors">
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5 line-clamp-1">
                    {mentor.role}
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-2 line-clamp-1">
                    {mentor.credentials}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 font-semibold">{mentor.exp}</span>
                  <span className="text-[#0D62FE] font-bold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    PROFILE &rarr;
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 VALUE PILLARS ROW (Pure White Cards with Electric Blue Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="rounded-[24px] bg-slate-50/70 border border-slate-200 hover:border-[#0D62FE] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D62FE] group-hover:bg-[#0D62FE] group-hover:text-white transition-all">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                  EST. 1988
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0D62FE] transition-colors">
                Global Network &amp; Legacy
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Proudly serving Manjeri for over 25 years. Backed by Asia&apos;s premier CAD/BIM network with 1.5M+ engineers and designers trained worldwide across 30+ countries.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 font-mono text-xs font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#0D62FE]" />
              <span>36+ Years of Proven Excellence</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="rounded-[24px] bg-slate-50/70 border border-slate-200 hover:border-[#0D62FE] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Award className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                  PRACTICAL
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0D62FE] transition-colors">
                Beyond Software Training
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                We go far beyond basic tool commands. Students master real-world construction drawings, MEP coordination, structural analysis, and client-ready 3D rendering workflows.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 font-mono text-xs font-semibold text-emerald-600">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>100% Live Project Case Studies</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="rounded-[24px] bg-slate-50/70 border border-slate-200 hover:border-[#0D62FE] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D62FE] group-hover:bg-[#0D62FE] group-hover:text-white transition-all">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-600">
                  CAREERS
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0D62FE] transition-colors">
                Placement &amp; Certification
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                Internationally recognized course certification, portfolio development, resume formatting, and continuous placement support across top AEC and manufacturing firms in India and GCC.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center gap-2 font-mono text-xs font-semibold text-slate-600">
              <span className="w-2 h-2 rounded-full bg-[#0D62FE]" />
              <span>Dedicated Placement Cell Support</span>
            </div>
          </div>
        </div>

        {/* SPECIALIZED DISCIPLINES SHOWCASE */}
        <div className="rounded-[28px] bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Disciplines Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#0D62FE] uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                <span>[ SPECIALIZED DISCIPLINES ]</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase">
                Explore Industry Training in Manjeri
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Click on any discipline to inspect curriculum modules, software taught, live projects, and career pathways.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenDemo}
              className="self-start md:self-auto px-5 py-2.5 rounded-full bg-[#0D62FE] hover:bg-[#0045D8] text-xs font-mono font-bold uppercase tracking-wider text-white transition-all cursor-pointer inline-flex items-center gap-2 shadow-md shadow-blue-500/20"
            >
              <span>ENQUIRE ALL PROGRAMS</span>
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
                  className="discipline-card-item rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200 hover:border-[#0D62FE] p-4.5 sm:p-5 transition-all duration-200 cursor-pointer group flex flex-col justify-between shadow-sm hover:shadow-lg relative overflow-hidden text-left"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0D62FE] group-hover:bg-[#0D62FE] group-hover:text-white transition-all">
                        <IconComp className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
                        {discipline.badge || 'PRO'}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-[15px] font-extrabold text-slate-900 group-hover:text-[#0D62FE] transition-colors leading-snug">
                      {discipline.cardTitle}
                    </h4>

                    {toolsList && (
                      <p className="mt-1.5 text-[11px] text-slate-500 font-mono line-clamp-1">
                        {toolsList}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-slate-900 transition-colors">
                    <span className="text-[11.5px] font-mono font-semibold">Syllabus &amp; Careers</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0D62FE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Summary Strip */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Authorized International Certification · Free Career Demo · Flexible Batches</span>
            </div>

            <button
              type="button"
              onClick={onOpenDemo}
              className="text-xs font-mono font-bold text-[#0D62FE] hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors"
            >
              <span>[ BOOK A FREE COUNSELING SESSION ]</span>
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
