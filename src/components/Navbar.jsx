import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Layers,
  Palette,
  Cpu,
  Building,
  Wrench,
  CalendarCheck,
  Compass,
  FileCode2,
  Sparkles,
  Home,
  Award,
  Phone
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useOverlayHistory from '../hooks/useOverlayHistory';

// Core engineering disciplines for Courses mega-menu hover dropdown
const NAV_DISCIPLINES = [
  { name: 'Interior Design', tools: 'AutoCAD · 3ds Max · SketchUp · Lumion', icon: Palette },
  { name: 'BIM [Building Info]', tools: 'Revit Arch · Navisworks · BIM 360', icon: Building },
  { name: 'MEP with BIM', tools: 'HVAC · Electrical · Plumbing · Revit MEP', icon: Cpu },
  { name: 'Structural Design', tools: 'STAAD.Pro · ETABS · Tekla · SAFE', icon: Layers },
  { name: 'Product Design', tools: 'SolidWorks · Creo Parametric · GD&T', icon: Wrench },
  { name: 'Project Planning & Mgmt', tools: 'Primavera P6 · MS Project · CPM', icon: CalendarCheck },
  { name: 'Surveying & Transportation', tools: 'AutoCAD Civil 3D · MicroStation', icon: Compass },
  { name: 'AutoCAD Professional', tools: 'Civil · Mechanical · Electrical CAD', icon: FileCode2 }
];

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [coursesHovered, setCoursesHovered] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const lastOpenTimeRef = useRef(0);

  // Back / swipe-back closes the menu instead of leaving the site
  useOverlayHistory(mobileMenuOpen, () => {
    setMobileMenuOpen(false);
    setMobileCoursesOpen(false);
  });

  // Dynamic Scrollspy: track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // If near top of page, home is always active
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Check sections from bottom to top according to actual DOM layout:
      // DOM order: hero (home) -> features (courses) -> placement -> events -> about -> testimonials
      const sections = [
        { id: 'testimonials', key: 'testimonials' },
        { id: 'about', key: 'about' },
        { id: 'events', key: 'events' },
        { id: 'placement', key: 'placement' },
        { id: 'features', key: 'features' }
      ];

      const navHeight = 90;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top has entered upper half of viewport and bottom is still below navbar
          if (rect.top <= window.innerHeight * 0.45 && rect.bottom >= navHeight) {
            setActiveSection(sec.key);
            return;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coursesRef = useRef(null);

  // Close Courses dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) {
        setCoursesHovered(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleMouseEnterCourses = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    lastOpenTimeRef.current = Date.now();
    setCoursesHovered(true);
  };

  const handleMouseLeaveCourses = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setCoursesHovered(false);
    }, 280);
  };

  const handleCoursesTouchOrClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (e && e.stopPropagation) e.stopPropagation();
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);

    // If dropdown is not currently open, open it immediately
    if (!coursesHovered) {
      lastOpenTimeRef.current = Date.now();
      setCoursesHovered(true);
      return;
    }

    // If it was just opened within the last 400ms (e.g. mouseenter fired right before click),
    // keep it OPEN so it doesn't instantly close on tap/click!
    if (Date.now() - lastOpenTimeRef.current < 400) {
      setCoursesHovered(true);
      return;
    }

    // If already open and settled, clicking it again navigates smoothly to #features
    navTo(e, 'features');
  };

  const navTo = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveSection(id);
    setCoursesHovered(false);
    setMobileMenuOpen(false);
    setMobileCoursesOpen(false);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center">
      <div className="w-full max-w-5xl pointer-events-auto rounded-full bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-200/80 px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all">
        {/* Brand Logo - Authentic RED CADD Centre Manjeri */}
        <a
          href="#"
          onClick={(e) => navTo(e, 'home')}
          className="flex items-center group cursor-pointer focus:outline-none shrink-0"
          aria-label="CADD Centre Manjeri Home"
        >
          <img
            src="/CADD.png"
            alt="CADD Centre Manjeri"
            className="h-7 sm:h-8 lg:h-9 w-auto max-w-[130px] sm:max-w-none object-contain transition-transform duration-200 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation Links with Active Scrollspy & Hover Dropdown */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 text-[13.5px] font-semibold text-slate-700">
          {/* 1. Home */}
          <a
            href="#"
            onClick={(e) => navTo(e, 'home')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'home'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Home
          </a>

          {/* 2. Courses with Mega-Menu Dropdown */}
          <div
            ref={coursesRef}
            className="relative"
            onMouseEnter={handleMouseEnterCourses}
            onMouseLeave={handleMouseLeaveCourses}
          >
            <button
              type="button"
              onClick={handleCoursesTouchOrClick}
              aria-expanded={coursesHovered}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === 'features' || coursesHovered
                  ? 'bg-blue-50 text-blue-600 font-bold'
                  : 'hover:text-blue-600 hover:bg-slate-50'
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  coursesHovered ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Hover & Touch Mega-Menu Dropdown */}
            <AnimatePresence>
              {coursesHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full -left-12 sm:left-0 pt-2 w-[560px] max-w-[92vw] z-50 text-left"
                >
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                      <div>
                        <p className="text-[12px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                          Certified Engineering Disciplines
                        </p>
                        <p className="text-[11px] text-slate-500">
                          36+ accredited career programs in Manjeri
                        </p>
                      </div>

                      <a
                        href="#features"
                        onClick={(e) => navTo(e, 'features')}
                        className="text-[11.5px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors group/all cursor-pointer"
                      >
                        View All Courses <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    {/* 8 Disciplines Grid (2 columns) */}
                    <div className="grid grid-cols-2 gap-2">
                      {NAV_DISCIPLINES.map((d) => (
                        <a
                          key={d.name}
                          href="#features"
                          onClick={(e) => navTo(e, 'features')}
                          className="group/item flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                        >
                          <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-xs">
                            <d.icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12.5px] font-bold text-slate-900 group-hover/item:text-blue-600 transition-colors truncate">
                              {d.name}
                            </p>
                            <p className="text-[10px] text-slate-500 truncate">
                              {d.tools}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        Free Demo &amp; Syllabus Counseling
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoursesHovered(false);
                          onOpenDemo();
                        }}
                        className="text-[11.5px] font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                      >
                        Enquire Admissions →
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. About Us */}
          <a
            href="#about"
            onClick={(e) => navTo(e, 'about')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'about'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            About Us
          </a>

          {/* 4. Placements */}
          <a
            href="#placement"
            onClick={(e) => navTo(e, 'placement')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'placement'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Placements
          </a>

          {/* 5. Events */}
          <a
            href="#events"
            onClick={(e) => navTo(e, 'events')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'events'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Events
          </a>

          {/* 6. Reviews */}
          <a
            href="#testimonials"
            onClick={(e) => navTo(e, 'testimonials')}
            className={`px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'testimonials'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'hover:text-blue-600 hover:bg-slate-50'
            }`}
          >
            Reviews
          </a>

          {/* 7. Contact CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-3.5 py-1.5 rounded-full text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-semibold transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button - Royal Blue Pill Capsule */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-[13px] font-bold px-5 sm:px-6 py-2 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-xs active:scale-95 transition-all"
          >
            Apply Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-20 inset-x-4 max-h-[82vh] overflow-y-auto bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] md:hidden space-y-1.5 text-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 text-left pointer-events-auto">
          {/* 1. Home */}
          <a
            href="#"
            onClick={(e) => navTo(e, 'home')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'home'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Home className="w-4 h-4 text-blue-600" />
            <span>Home</span>
          </a>

          {/* 2. Mobile Courses Accordion Item */}
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50/50">
            <button
              type="button"
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className={`w-full flex items-center justify-between py-2.5 px-3.5 text-sm font-semibold transition-all cursor-pointer ${
                activeSection === 'features' || mobileCoursesOpen
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Courses</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  8 Disciplines
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileCoursesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'
                }`}
              />
            </button>

            {/* Expandable disciplines list */}
            <AnimatePresence>
              {mobileCoursesOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden border-t border-slate-200 bg-white p-2 text-left"
                >
                  <div className="grid grid-cols-1 gap-1.5 max-h-56 overflow-y-auto pr-1">
                    {NAV_DISCIPLINES.map((d) => (
                      <a
                        key={d.name}
                        href="#features"
                        onClick={(e) => navTo(e, 'features')}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <d.icon className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-slate-800 truncate">{d.name}</p>
                          <p className="text-[10px] text-slate-500 truncate">{d.tools}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between px-1">
                    <a
                      href="#features"
                      onClick={(e) => navTo(e, 'features')}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
                    >
                      View All 36+ Courses →
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileCoursesOpen(false);
                        onOpenDemo();
                      }}
                      className="text-xs font-medium text-slate-600 hover:text-blue-600"
                    >
                      Free Counseling
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. About Us */}
          <a
            href="#about"
            onClick={(e) => navTo(e, 'about')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'about'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>About Us</span>
          </a>

          {/* 4. Placements */}
          <a
            href="#placement"
            onClick={(e) => navTo(e, 'placement')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'placement'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Award className="w-4 h-4 text-blue-600" />
            <span>Placements</span>
          </a>

          {/* 5. Events */}
          <a
            href="#events"
            onClick={(e) => navTo(e, 'events')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'events'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-blue-600" />
            <span>Events</span>
          </a>

          {/* 6. Reviews */}
          <a
            href="#testimonials"
            onClick={(e) => navTo(e, 'testimonials')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'testimonials'
                ? 'bg-blue-50 text-blue-600 font-bold'
                : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Reviews</span>
          </a>

          {/* 7. Direct Admissions & Quick Actions */}
          <div className="pt-3 mt-2 border-t border-slate-100 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl text-sm font-bold shadow-md shadow-blue-500/25 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Fast Call Button inside drawer */}
            <a
              href="tel:+918891550060"
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Desk: +91 88915 50060</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
