import React, { useState, useMemo, useEffect } from 'react';
import {
  Target,
  ArrowRight,
  Clock,
  Award,
  CheckCircle2,
  X,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Search,
  Download,
  Calendar,
  Layers,
  GraduationCap
} from 'lucide-react';

const DISCIPLINES = [
  { id: 'all', label: 'All Courses', count: 36 },
  { id: 'autocad', label: 'AutoCAD', count: 3 },
  { id: 'interior', label: 'Interior Design', count: 5 },
  { id: 'bim', label: 'BIM [Building Information Modelling]', count: 6 },
  { id: 'mep', label: 'MEP with BIM', count: 5 },
  { id: 'product', label: 'Product Design', count: 4 },
  { id: 'structural', label: 'Structural Design', count: 6 },
  { id: 'survey', label: 'Surveying & Transportation', count: 4 },
  { id: 'ppm', label: 'Project Planning & Management', count: 3 },
];
import { MASTER_COURSES } from '../../data/coursesDataFinbiz';

export default function PortfolioFinbiz({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedModules, setExpandedModules] = useState({});
  const [highlightedCourseId, setHighlightedCourseId] = useState(null);

  const INITIAL_LIMIT = 4;

  // Listen for course selection events from Hero ticker
  useEffect(() => {
    const handleCourseSelect = (event) => {
      const { tab, courseId } = event.detail || {};
      if (tab) {
        setActiveTab(tab);
      }
      setSearchQuery('');
      setIsExpanded(true);
      if (courseId) {
        setHighlightedCourseId(courseId);
        setTimeout(() => {
          setHighlightedCourseId(null);
        }, 2800);
      }
    };

    window.addEventListener('cadd-select-course', handleCourseSelect);
    return () => {
      window.removeEventListener('cadd-select-course', handleCourseSelect);
    };
  }, []);

  // Toggle in-card curriculum accordion
  const toggleModules = (courseId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [courseId]: !prev[courseId]
    }));
  };

  // Filter courses by discipline and search query
  const filteredCourses = useMemo(() => {
    return MASTER_COURSES.filter((c) => {
      const matchesTab = activeTab === 'all' || c.disciplineKey === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.disciplineName.toLowerCase().includes(q) ||
        c.tools.some((t) => t.toLowerCase().includes(q)) ||
        c.tag.toLowerCase().includes(q);
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // Show 4 courses initially to reduce excessive scrolling; expand on "View All"
  const displayedCourses = useMemo(() => {
    if (searchQuery) return filteredCourses;
    return isExpanded ? filteredCourses : filteredCourses.slice(0, INITIAL_LIMIT);
  }, [filteredCourses, isExpanded, searchQuery]);

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      const elem = document.getElementById('courses');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section id="courses" className="pt-2 sm:pt-4 pb-3 sm:pb-4 bg-[#F8F9FC] select-none relative overflow-hidden text-left">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================= */}
        {/* SECTION HEADER & CONTROL BAR                              */}
        {/* ========================================================= */}
        <div className="space-y-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200/80 text-xs font-black uppercase tracking-[0.2em] text-[#C4161C] shadow-xs">
                <Target className="w-3.5 h-3.5 text-[#C4161C] animate-pulse" />
                <span>EXPLORE COURSES</span>
              </div>

              {/* Main Section Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black text-[#111827] tracking-tight leading-tight">
                Course Offerings
              </h2>

              <p className="text-sm sm:text-base font-semibold text-gray-800">
                Find the Right Course for Your Career
              </p>

              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                Practical, software-oriented programs in AutoCAD, Revit BIM, SolidWorks, MEP, and Project Planning tailored for real-world engineering careers.
              </p>
            </div>

            {/* Quick Search Tool Filter */}
            <div className="relative w-full lg:w-72 shrink-0">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Revit, AutoCAD, MEP..."
                className="w-full pl-9 pr-8 py-2.5 rounded-full bg-white border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C4161C] focus:ring-1 focus:ring-[#C4161C] transition-all shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* RADICALLY REDESIGNED ARCHITECTURAL DOSSIER ROW LAYOUT     */}
        {/* (ENTIRELY DIFFERENT FROM PLACEMENTS VERTICAL CARDS)       */}
        {/* ========================================================= */}
        {displayedCourses.length === 0 ? (
          <div className="py-16 text-center bg-white rounded-3xl border border-gray-200 p-8">
            <p className="text-gray-500 text-sm">No engineering courses match your search "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-3 text-xs font-bold text-[#C4161C] underline cursor-pointer"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {displayedCourses.map((course) => {
              const isModuleOpen = Boolean(expandedModules[course.id]);

              return (
                <div
                  key={course.id}
                  id={`course-${course.id}`}
                  className={`group bg-white rounded-[28px] border transition-all duration-500 overflow-hidden ${
                    highlightedCourseId === course.id
                      ? 'border-[#C4161C] ring-4 ring-[#C4161C]/25 shadow-2xl scale-[1.008]'
                      : 'border-gray-200/90 hover:border-[#C4161C]/50 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-xl'
                  }`}
                >
                  {/* Main Horizontal Strip */}
                  <div className="p-5 sm:p-7 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8">

                    {/* ZONE 1: UNOBSTRUCTED CINEMATIC VISUAL FRAME (30% WIDTH) */}
                    <div className="relative w-full lg:w-80 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 shrink-0 border border-gray-100 shadow-sm">
                      <img
                        src={course.img}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />

                      {/* Floating Partner Accreditation */}
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 shadow-sm">
                        <Award className="w-3 h-3 text-[#C4161C]" />
                        <span>{course.tag}</span>
                      </div>

                      {/* Floating Duration Badge */}
                      <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-gray-900 text-[10px] font-extrabold shadow-sm border border-gray-200/60">
                        <Clock className="w-3 h-3 text-[#C4161C]" />
                        <span>{course.duration}</span>
                      </div>

                      {/* Bottom Image Tag: Track Code & Lab Mode */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white font-mono text-[9.5px] font-bold uppercase border border-white/10">
                          {course.code}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#C4161C]/90 backdrop-blur-md text-white text-[9.5px] font-bold">
                          {course.mode}
                        </span>
                      </div>
                    </div>

                    {/* ZONE 2: DEEP CURRICULUM ARCHITECTURE & SPECS (48% WIDTH) */}
                    <div className="flex-1 space-y-4">
                      {/* Discipline & Track Subheader */}
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-3 py-0.5 rounded-full bg-red-50 text-[#C4161C] border border-red-100 text-[11px] font-bold uppercase tracking-wider">
                          {course.disciplineName}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs font-mono text-gray-500 font-semibold">
                          {course.level}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h3
                        onClick={() => setSelectedCourse(course)}
                        className="text-xl sm:text-2xl font-black text-gray-950 group-hover:text-[#C4161C] transition-colors leading-tight tracking-tight cursor-pointer"
                      >
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed font-normal max-w-3xl">
                        {course.description}
                      </p>

                      {/* Software Mastered Shelf */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider mr-1">
                          Tools Mastered:
                        </span>
                        {course.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-slate-50 group-hover:bg-red-50 text-slate-800 group-hover:text-[#C4161C] rounded-lg text-xs font-bold border border-slate-200/80 group-hover:border-red-200/80 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Key Industry Deliverables Checklist */}
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 pt-1 text-xs font-medium text-gray-600">
                        {course.perks.map((perk, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>

                      {/* View Modules Button (Relocated to marked position) */}
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => toggleModules(course.id)}
                          className="inline-flex items-center gap-2 py-2 px-3.5 rounded-xl bg-white hover:bg-red-50 border border-gray-200/90 hover:border-red-200 text-gray-800 hover:text-[#C4161C] text-xs font-bold transition-all cursor-pointer shadow-2xs group/btn"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-[#C4161C]" />
                          <span>{isModuleOpen ? 'Hide Modules' : 'View 4 Modules'}</span>
                          {isModuleOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#C4161C]" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#C4161C]" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* ZONE 3: ADMISSIONS, SYLLABUS & ACTIONS PANEL (22% WIDTH) */}
                    <div className="w-full lg:w-64 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-8 border-gray-100 flex flex-col justify-between space-y-4">

                      {/* Value Badges */}
                      <div className="space-y-2 bg-gray-50/80 rounded-2xl p-3.5 border border-gray-100">
                        <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>100% Placement Assured</span>
                        </div>
                        <div className="text-[11px] text-gray-500 font-medium">
                          Dual-Display Workstations · GCC Project Submission Portfolio
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => onOpenDemo ? onOpenDemo(`Free Demo - ${course.title}`) : null}
                          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-red-50/60 border border-gray-200 hover:border-[#C4161C]/50 text-gray-900 hover:text-[#C4161C] text-xs font-extrabold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-2xs active:scale-97 group/demo"
                        >
                          <Calendar className="w-3.5 h-3.5 text-[#C4161C]" />
                          <span>BOOK FREE DEMO</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenDemo ? onOpenDemo(course.title) : null}
                          className="w-full py-3 px-5 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer active:scale-97"
                        >
                          <span>ENQUIRE ADMISSION</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </div>

                  </div>

                  {/* IN-CARD EXPANDABLE CURRICULUM DRAWER */}
                  {isModuleOpen && (
                    <div className="border-t border-red-100 bg-gradient-to-b from-red-50/40 to-white px-6 sm:px-8 py-5 animate-in slide-in-from-top-2 duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-3">
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#C4161C] flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-[#C4161C]" />
                          <span>Detailed Curriculum Modules for {course.title}:</span>
                        </h4>
                        <button
                          type="button"
                          onClick={() => setSelectedCourse(course)}
                          className="text-xs font-bold text-gray-700 hover:text-[#C4161C] flex items-center gap-1 underline cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5 text-[#C4161C]" />
                          <span>Download Full PDF Syllabus</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        {course.modules.map((mod, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs flex items-start gap-2.5 text-xs text-gray-700"
                          >
                            <span className="w-5 h-5 rounded-full bg-red-100 text-[#C4161C] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                              {idx + 1}
                            </span>
                            <span className="font-semibold leading-relaxed">{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW ALL COURSES BUTTON ("VIEW ALL BUTTON")               */}
        {/* ========================================================= */}
        {!searchQuery && filteredCourses.length > INITIAL_LIMIT && (
          <div className="mt-8 flex flex-col items-center justify-center space-y-2">
            <button
              type="button"
              onClick={handleToggleExpand}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#11161E] hover:bg-[#C4161C] text-white text-xs sm:text-[13px] font-extrabold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-97 group"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span>
                {isExpanded
                  ? 'SHOW LESS COURSES'
                  : 'VIEW ALL COURSES'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-white/80 group-hover:text-white" />
              ) : (
                <ChevronDown className="w-4 h-4 text-white/80 group-hover:text-white" />
              )}
            </button>
            <p className="text-[11.5px] text-gray-500 font-medium">
              {isExpanded
                ? 'Showing all engineering & CAD programs'
                : 'Click to view all courses'}
            </p>
          </div>
        )}

        {/* Course Count Indicator */}
        <div className="mt-8 pt-4 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-pulse" />
            <span className="font-semibold text-gray-800">
              {isExpanded
                ? 'Showing all Engineering & CAD Courses'
                : 'Showing flagship programs (Click View All for more)'}
            </span>
          </div>
          <span className="text-gray-400 text-[11px]">
            Autodesk, Bentley, PTC &amp; Siemens Authorized Curriculum • KTU &amp; University Aligned
          </span>
        </div>

      </div>

      {/* Subtle clean architectural finishing divider between Courses & Placements */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent mt-2.5 sm:mt-3" />

      {/* ========================================================= */}
      {/* COURSE SYLLABUS & ADMISSION LIGHTBOX MODAL                */}
      {/* ========================================================= */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedCourse(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Course Header with Thumbnail */}
            <div className="flex items-center gap-4">
              <div className="w-24 h-20 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-sm shrink-0">
                <img
                  src={selectedCourse.img}
                  alt={selectedCourse.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C4161C] bg-red-50 border border-red-100 px-2 py-0.5 rounded-full">
                  <Award className="w-3 h-3 text-[#C4161C]" />
                  <span>{selectedCourse.tag}</span>
                </span>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 tracking-tight leading-snug">
                  {selectedCourse.title}
                </h3>
                <div className="text-xs text-gray-500 font-medium">
                  {selectedCourse.disciplineName} · {selectedCourse.duration}
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
              {selectedCourse.description}
            </div>

            {/* Software Covered */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Software Tools Covered
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCourse.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Modules list in modal */}
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Curriculum Modules
              </h4>
              <div className="space-y-1 text-xs text-gray-700">
                {selectedCourse.modules.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-red-50 text-[#C4161C] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCourse(null);
                  if (onOpenDemo) onOpenDemo();
                }}
                className="flex-1 py-3 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-md"
              >
                Download Syllabus &amp; Enroll
              </button>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                className="px-5 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
