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
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#080D14]/92 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5 sm:py-3.5 pt-[max(env(safe-area-inset-top),0.625rem)]'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-3 sm:py-5 pt-[max(env(safe-area-inset-top),0.75rem)]'
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        {/* Brand Logo - CADD Centre Manjeri */}
        <a
          href="#"
          onClick={(e) => navTo(e, 'home')}
          className="flex items-center group cursor-pointer focus:outline-none shrink-0"
          aria-label="CADD Centre Manjeri Home"
        >
          <img
            src="/CADD.png"
            alt="CADD Centre Manjeri"
            className="h-8 sm:h-11 lg:h-[46px] w-auto max-w-[135px] sm:max-w-none object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]"
          />
        </a>

        {/* Desktop Navigation Links with Active Scrollspy & Hover Dropdown */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-[13.5px] font-medium tracking-wide">
          {/* 1. Home */}
          <a
            href="#"
            onClick={(e) => navTo(e, 'home')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'home'
                ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </a>

          {/* 2. Courses with Rich Touch & Hover Mega-Menu Dropdown */}
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
              className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                activeSection === 'features' || coursesHovered
                  ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  coursesHovered ? 'rotate-180 text-[#FF5A36]' : 'text-white/60'
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
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#090E17]/95 backdrop-blur-xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                    {/* Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                      <div>
                        <p className="text-[12px] font-bold text-white uppercase tracking-wider flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A36] animate-pulse" />
                          Certified Engineering Disciplines
                        </p>
                        <p className="text-[11px] text-slate-400">
                          36+ accredited career programs in Manjeri
                        </p>
                      </div>

                      <a
                        href="#features"
                        onClick={(e) => navTo(e, 'features')}
                        className="text-[11.5px] font-bold text-[#FF7A5C] hover:text-[#FF5A36] flex items-center gap-1 transition-colors group/all cursor-pointer"
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
                          className="group/item flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all cursor-pointer"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#FF5A36]/10 border border-[#FF5A36]/25 text-[#FF7A5C] group-hover/item:bg-[#FF5A36] group-hover/item:text-white flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-sm">
                            <d.icon className="w-3.5 h-3.5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[12.5px] font-bold text-white group-hover/item:text-[#FF7A5C] transition-colors truncate">
                              {d.name}
                            </p>
                            <p className="text-[10px] text-slate-400 truncate">
                              {d.tools}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>

                    {/* Dropdown Footer CTA */}
                    <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        Free Demo &amp; Syllabus Counseling
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoursesHovered(false);
                          onOpenDemo();
                        }}
                        className="text-[11.5px] font-bold text-white hover:text-[#FF7A5C] transition-colors cursor-pointer"
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
            className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'about'
                ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </a>

          {/* 4. Placements */}
          <a
            href="#placement"
            onClick={(e) => navTo(e, 'placement')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'placement'
                ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Placements
          </a>

          {/* 5. Events */}
          <a
            href="#events"
            onClick={(e) => navTo(e, 'events')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'events'
                ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Events
          </a>

          {/* 6. Reviews */}
          <a
            href="#testimonials"
            onClick={(e) => navTo(e, 'testimonials')}
            className={`px-4 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeSection === 'testimonials'
                ? 'border border-white/25 bg-white/15 text-white font-semibold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Reviews
          </a>

          {/* 7. Contact CTA */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="px-4 py-1.5 rounded-full text-slate-300 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button - Vibrant Red Capsule Button */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#E94B3C] hover:bg-[#D4382A] active:bg-[#B82E22] text-white text-[13.5px] font-semibold px-6 lg:px-7 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(233,75,60,0.35)] hover:shadow-[0_6px_22px_rgba(233,75,60,0.5)] hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="md:hidden flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#E94B3C] hover:bg-[#D4382A] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md active:scale-95 transition-all"
          >
            Apply Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-16 inset-x-3 max-h-[85vh] overflow-y-auto bg-[#080D14]/98 backdrop-blur-2xl border border-white/15 rounded-3xl p-4.5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] md:hidden space-y-1.5 text-white animate-in fade-in slide-in-from-top-2 duration-200 text-left">
          {/* 1. Home */}
          <a
            href="#"
            onClick={(e) => navTo(e, 'home')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'home'
                ? 'bg-white/15 border border-white/20 text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <Home className="w-4 h-4 text-[#FF7A5C]" />
            <span>Home</span>
          </a>

          {/* 2. Mobile Courses Accordion Item */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <button
              type="button"
              onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
              className={`w-full flex items-center justify-between py-2.5 px-3.5 text-sm font-semibold transition-all cursor-pointer ${
                activeSection === 'features' || mobileCoursesOpen
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#FF7A5C]" />
                <span>Courses</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FF5A36]/20 text-[#FF7A5C] border border-[#FF5A36]/30">
                  8 Disciplines
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileCoursesOpen ? 'rotate-180 text-[#FF5A36]' : 'text-white/60'
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
                  className="overflow-hidden border-t border-white/10 bg-black/50 p-2 text-left"
                >
                  <div className="grid grid-cols-1 gap-1.5 max-h-56 overflow-y-auto pr-1">
                    {NAV_DISCIPLINES.map((d) => (
                      <a
                        key={d.name}
                        href="#features"
                        onClick={(e) => navTo(e, 'features')}
                        className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-md bg-[#FF5A36]/15 text-[#FF7A5C] flex items-center justify-center shrink-0">
                          <d.icon className="w-3 h-3" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold text-white truncate">{d.name}</p>
                          <p className="text-[10px] text-slate-400 truncate">{d.tools}</p>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/10 flex items-center justify-between px-1">
                    <a
                      href="#features"
                      onClick={(e) => navTo(e, 'features')}
                      className="text-xs font-bold text-[#FF7A5C] hover:text-[#FF5A36] flex items-center gap-1 transition-colors"
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
                      className="text-xs font-medium text-white/70 hover:text-white"
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
                ? 'bg-white/15 border border-white/20 text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <Compass className="w-4 h-4 text-[#FF7A5C]" />
            <span>About Us</span>
          </a>

          {/* 4. Placements */}
          <a
            href="#placement"
            onClick={(e) => navTo(e, 'placement')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'placement'
                ? 'bg-white/15 border border-white/20 text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <Award className="w-4 h-4 text-[#FF7A5C]" />
            <span>Placements</span>
          </a>

          {/* 5. Events */}
          <a
            href="#events"
            onClick={(e) => navTo(e, 'events')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'events'
                ? 'bg-white/15 border border-white/20 text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <CalendarCheck className="w-4 h-4 text-[#FF7A5C]" />
            <span>Events</span>
          </a>

          {/* 6. Reviews */}
          <a
            href="#testimonials"
            onClick={(e) => navTo(e, 'testimonials')}
            className={`flex items-center gap-3 py-2.5 px-3.5 rounded-xl text-sm font-semibold transition-all ${
              activeSection === 'testimonials'
                ? 'bg-white/15 border border-white/20 text-white'
                : 'text-white/80 hover:bg-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#FF7A5C]" />
            <span>Reviews</span>
          </a>

          {/* 7. Direct Admissions & Quick Actions */}
          <div className="pt-3 mt-2 border-t border-white/10 space-y-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full bg-[#E94B3C] hover:bg-[#D4382A] text-white py-3 rounded-xl text-sm font-bold shadow-lg shadow-red-500/30 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Apply for Admissions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Fast Call Button inside drawer */}
            <a
              href="tel:+918891550060"
              className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-semibold text-white/90 flex items-center justify-center gap-2 active:scale-98 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Call Desk: +91 88915 50060</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
