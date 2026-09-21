import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Target,
  Building2,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
  Users,
  TrendingUp,
  Award,
  Play,
  Pause,
  Radio,
  Briefcase,
  ArrowRight,
  Phone
} from 'lucide-react';

// Authentic Placed & Certified Alumni Data from CADD Centre Manjeri

const PLACED_ALUMNI = [
  {
    id: 'athul',
    name: 'Athul',
    initials: 'AT',
    role: '3D Designer',
    category: 'interior',
    company: 'Leading Architecture & 3D Studio',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    uplift: '+3.5x Salary',
    course: 'Executive Diploma in 3D Design & Interior CAD',
    tools: ['3ds Max', 'AutoCAD', 'V-Ray', 'SketchUp'],
    badge: 'Successfully Placed',
    img: '/images/students/Athul.png',
    description: 'Specialized in photorealistic 3D architectural visualization, spatial planning, and high-impact client walk-throughs.'
  },
  {
    id: 'shanib',
    name: 'Shanib',
    initials: 'SH',
    role: '3D Designer',
    category: 'interior',
    company: 'Leading 3D Architectural Studio',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    uplift: '+3.5x Salary',
    course: 'Professional in 3D Design & Interior CAD',
    tools: ['3ds Max', 'V-Ray', 'AutoCAD', 'SketchUp'],
    badge: 'Successfully Placed',
    img: '/images/students/Shanib.png',
    description: 'Successfully placed as 3D Designer specializing in photorealistic architectural visualization, 3D spatial modeling, and rendering.'
  },
  {
    id: 'aswathi',
    name: 'Aswathi',
    initials: 'AS',
    role: 'Interior Designer',
    category: 'interior',
    company: 'Interior & Architectural Studio',
    location: 'Kerala & UAE',
    flag: '🇮🇳',
    uplift: '+3.4x Salary',
    course: 'Professional in Interior Design',
    tools: ['AutoCAD Interior', '3ds Max', 'SketchUp', 'V-Ray'],
    badge: 'Successfully Placed',
    img: '/images/students/Aswathi.png',
    description: 'Successfully placed as Interior Designer mastering spatial layout, residential interiors, modular planning, and client walk-throughs.'
  },
  {
    id: 'shamna',
    name: 'Shamna',
    initials: 'SM',
    role: 'Interior Designer',
    category: 'interior',
    company: 'Interior Architecture & Decor Studio',
    location: 'Kerala & GCC',
    flag: '🇮🇳',
    uplift: '+3.3x Salary',
    course: 'Interior Designing',
    tools: ['AutoCAD Interior', '3ds Max', 'SketchUp', 'V-Ray'],
    badge: 'Interior Design Pro',
    img: '/images/students/Shamna.png',
    description: 'Congratulations! Shamna has successfully completed Interior Designing with outstanding performance, mastering space planning, interior drafting, and styling.'
  },
  {
    id: 'ajsal',
    name: 'Ajsal',
    initials: 'AJ',
    role: '5D BIM Engineer',
    category: 'bim',
    company: 'Global BIM & VDC Engineering Consultancy',
    location: 'Abu Dhabi, UAE',
    flag: '🇦🇪',
    uplift: '+3.8x Salary',
    course: 'Master Certificate in 5D BIM',
    tools: ['Revit BIM', 'Navisworks Manage', 'CostX', 'BIM 360'],
    badge: '5D BIM Specialist',
    img: '/images/students/Ajsal.png',
    description: 'Completed 5D BIM with outstanding performance covering digital cost integration, 4D timeliner, and clash resolution.'
  },
  {
    id: 'unnimaya',
    name: 'Unnimaya',
    initials: 'UN',
    role: 'BIM Architectural Modeler',
    category: 'bim',
    company: 'BIM & Architectural Consultancy',
    location: 'Kerala & UAE',
    flag: '🇮🇳',
    uplift: '+3.4x Salary',
    course: 'BIM For ARCH',
    tools: ['Revit Architecture', 'Navisworks', 'AutoCAD', 'BIM 360'],
    badge: 'BIM For ARCH',
    img: '/images/students/Unnimaya.png',
    description: 'Proud moment! Unnimaya has successfully completed BIM For ARCH course with great achievement, mastering building information modeling and parametric architecture.'
  },
  {
    id: 'minha',
    name: 'Minha',
    initials: 'MN',
    role: 'BIM Architectural Modeler',
    category: 'bim',
    company: 'BIM Engineering Consultancy',
    location: 'GCC & India',
    flag: '🇮🇳',
    uplift: '+3.5x Salary',
    course: 'BIM For ARCH',
    tools: ['Revit Architecture', 'Navisworks', 'AutoCAD', 'BIM 360'],
    badge: 'BIM For ARCH',
    img: '/images/students/Minha.png',
    description: 'Congratulations! Minha has successfully completed BIM For ARCH course with outstanding performance, excelling in BIM modeling and parametric design.'
  },
  {
    id: 'pooja',
    name: 'Pooja',
    initials: 'PJ',
    role: 'BIM Architectural Modeler',
    category: 'bim',
    company: 'Architectural & BIM Studio',
    location: 'Kerala & GCC',
    flag: '🇮🇳',
    uplift: '+3.4x Salary',
    course: 'BIM For ARCH',
    tools: ['Revit Architecture', 'Navisworks', 'Enscape', 'BIM 360'],
    badge: 'BIM For ARCH',
    img: '/images/students/Pooja.png',
    description: 'Congratulations! Pooja has successfully completed BIM For ARCH with outstanding performance, delivering high quality architectural models.'
  },
  {
    id: 'thafsal',
    name: 'Thafsal',
    initials: 'TH',
    role: 'BIM Architectural Modeler',
    category: 'bim',
    company: 'GCC Architectural Consortium',
    location: 'Doha, Qatar',
    flag: '🇶🇦',
    uplift: '+3.6x Salary',
    course: 'BIM for Architecture',
    tools: ['Revit Architecture', 'Navisworks', 'Enscape', 'BIM 360'],
    badge: 'BIM Architecture',
    img: '/images/students/Thafsal.png',
    description: 'Completed BIM for Architecture with flying colours, delivering high-precision architectural models and ISO 19650 standards.'
  },
  {
    id: 'zamil',
    name: 'Zamil',
    initials: 'ZM',
    role: 'Planning & Scheduling Engineer',
    category: 'civil',
    company: 'Infrastructure & Project Management',
    location: 'Riyadh, Saudi Arabia',
    flag: '🇸🇦',
    uplift: '+3.7x Salary',
    course: 'Primavera P6 Project Management',
    tools: ['Primavera P6', 'MS Project', 'AutoCAD Civil', 'Scheduling'],
    badge: 'Primavera Pro',
    img: '/images/students/Zamil.png',
    description: 'Well done, Zamil! Completed Primavera with outstanding performance, excelling in project scheduling, resource leveling, and project controls.'
  },
  {
    id: 'meerza',
    name: 'Meerza',
    initials: 'MZ',
    role: 'Planning & Project Control Engineer',
    category: 'civil',
    company: 'Infrastructure Project Management',
    location: 'Saudi Arabia / UAE',
    flag: '🇸🇦',
    uplift: '+3.6x Salary',
    course: 'Primavera P6 Enterprise Project Portfolio',
    tools: ['Primavera P6', 'MS Project', 'AutoCAD Civil', 'Scheduling'],
    badge: 'Primavera Pro',
    img: '/images/students/Meerza.png',
    description: 'Proud moment! Meerza has successfully completed Primavera course with great achievement, mastering critical path scheduling and cost tracking.'
  },
  {
    id: 'drisya',
    name: 'Drisya',
    initials: 'DS',
    role: 'Architectural CAD Draftsperson',
    category: 'civil',
    company: 'Civil & Architectural Engineering Consultancy',
    location: 'Kerala & UAE',
    flag: '🇮🇳',
    uplift: '+3.2x Salary',
    course: 'Professional in AutoCAD',
    tools: ['AutoCAD 2D/3D', 'AutoCAD Architecture', 'Drafting'],
    badge: 'AutoCAD Pro',
    img: '/images/students/Drisya.png',
    description: 'Completed AutoCAD with outstanding performance, excelling in architectural drafting, municipal sanction plans, and working drawings.'
  },
  {
    id: 'basim',
    name: 'Basim',
    initials: 'BM',
    role: 'Mechanical CAD Engineer',
    category: 'mechanical',
    company: 'Precision Engineering & Industrial Works',
    location: 'Riyadh, Saudi Arabia',
    flag: '🇸🇦',
    uplift: '+3.4x Salary',
    course: 'Professional in MECH CAD',
    tools: ['SolidWorks', 'AutoCAD Mechanical', 'CATIA', 'GD&T'],
    badge: 'Mech CAD Star',
    img: '/images/students/Basim.png',
    description: 'Completed MECH CAD with outstanding performance, mastering parametric 3D assembly, kinematics, and manufacturing drafting.'
  }
];

export default function TeamFinbiz({ onOpenDemo }) {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);

  // Seamless continuous loop of all 13 authentic Manjeri alumni
  const marqueeItems = useMemo(() => {
    return [...PLACED_ALUMNI, ...PLACED_ALUMNI];
  }, []);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="placements" className="pt-2 sm:pt-3 pb-8 sm:pb-10 bg-[#F8F9FA] relative select-none overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ========================================================= */}
        {/* COMPACT SECTION HEADER (TIGHT TOP SPACING)                */}
        {/* ========================================================= */}
        <div className="text-center space-y-1.5 mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-red-50 border border-red-200/70 text-[10.5px] font-extrabold uppercase tracking-wider text-[#C4161C]">
            <Target className="w-3 h-3 text-[#C4161C]" />
            <span>VERIFIED CORPORATE PLACEMENTS • CADD CENTRE MANJERI</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#111827] tracking-tight leading-tight">
            Career Trajectory &amp; Placed Alumni
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 font-normal max-w-xl mx-auto leading-relaxed">
            15,000+ certified engineers, drafters, and BIM modelers across UAE, Qatar, Saudi Arabia &amp; India.
          </p>
        </div>

        {/* ========================================================= */}
        {/* COMPACT 4-STAT METRIC ROW                                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 mb-4">
          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C4161C]/10 text-[#C4161C] flex items-center justify-center shrink-0">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">15,000+</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Students Placed</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">100%</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Placement Assistance</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">3.5x</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Avg Salary Uplift</div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-gray-100 shadow-xs flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-black text-gray-900 tracking-tight leading-none">450+</div>
              <div className="text-[10px] font-semibold text-gray-500 mt-0.5">Corporate Recruiters</div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* LIVE STATUS & QUICK CONTROLS BAR (NO CATEGORY TABS)       */}
        {/* ========================================================= */}
        <div className="flex items-center justify-between gap-3 mb-3">
          {/* Live Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              {isPlaying && (
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              )}
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`} />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-800">
              {isPlaying ? 'Live Placement Stream' : 'Stream Paused'} • Certified Alumni
            </span>
          </div>

          {/* Right Controls: Play/Pause, Manual Arrows, Apply button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="tel:+919544169638"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-[#11161E] hover:bg-[#C4161C] text-white transition-all cursor-pointer shadow-xs active:scale-97"
              title="Call Placement Cell: +91 95441 69638"
            >
              <Phone className="w-3 h-3 text-[#C4161C]" />
              <span>Apply for Placement</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold border transition-all cursor-pointer bg-white text-gray-700 hover:text-gray-950 border-gray-200 shadow-2xs"
              title="Click to toggle live motion"
            >
              <span className="font-mono text-[10px]">{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              {isPlaying ? <Pause className="w-3 h-3 text-gray-500" /> : <Play className="w-3 h-3 text-[#C4161C]" />}
            </button>

            <button
              type="button"
              onClick={() => scrollSlider('left')}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Previous Placement"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollSlider('right')}
              className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Next Placement"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* CONTINUOUS LIVE MOVING HORIZONTAL MARQUEE TRACK           */}
        {/* ========================================================= */}
        <div
          className="relative overflow-hidden group/marquee rounded-2xl py-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle gradient fades on edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10" />

          {/* Live Marquee Track: Butter-Smooth Infinite Motion */}
          <div
            ref={sliderRef}
            className="flex flex-nowrap gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth"
            style={{
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div
              className="flex flex-nowrap gap-4 sm:gap-5 shrink-0"
              style={{
                animation: isPlaying ? 'marquee 40s linear infinite' : 'none',
                animationPlayState: isPlaying && !isHovered ? 'running' : 'paused'
              }}
            >
              {marqueeItems.map((member, idx) => (
                <div
                  key={`${member.id}-${idx}`}
                  onClick={() => setSelectedAlumni(member)}
                  className="w-[230px] sm:w-[250px] shrink-0 group bg-white rounded-[20px] border border-gray-200/80 p-3 shadow-sm hover:shadow-xl hover:border-[#C4161C]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left relative hover:-translate-y-1"
                >
                  {/* Photo Frame Container with Verified Placement Poster */}
                  <div className="relative aspect-[4/4.5] w-full rounded-[14px] overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating Top Left: Flag + Location Badge */}
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/60 text-[9.5px] font-bold text-gray-800 shadow-2xs">
                      <span>{member.flag}</span>
                      <span>{member.location}</span>
                    </div>

                    {/* Floating Top Right: Salary Uplift Badge */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#C4161C] text-[9.5px] font-black text-white shadow-xs">
                      {member.uplift}
                    </div>

                    {/* Bottom Spotlight Tag */}
                    <div className="absolute bottom-1.5 left-2 px-1.5 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-white/15 text-[8.5px] font-mono font-bold text-white uppercase tracking-wider">
                      {member.badge}
                    </div>
                  </div>

                  {/* Information Body (Compact) */}
                  <div className="pt-2.5 pb-1 space-y-1">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-sm sm:text-base font-black text-gray-900 tracking-tight group-hover:text-[#C4161C] transition-colors truncate">
                        {member.name}
                      </h3>
                      <span className="inline-flex items-center gap-0.5 text-[9px] font-extrabold text-[#C4161C] bg-red-50 border border-red-200/60 px-1.5 py-0.5 rounded shrink-0">
                        <CheckCircle2 className="w-2.5 h-2.5 text-[#C4161C]" />
                        <span>VERIFIED</span>
                      </span>
                    </div>

                    {/* Role */}
                    <div className="text-[11px] font-bold text-[#C4161C] tracking-wide truncate">
                      {member.role}
                    </div>

                    {/* Company Name */}
                    <div className="flex items-center gap-1 text-[10.5px] text-gray-500 font-medium truncate">
                      <Building2 className="w-3 h-3 text-gray-400 shrink-0" />
                      <span className="truncate">{member.company}</span>
                    </div>

                    {/* Software Skills Pill Chips */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {member.tools.slice(0, 3).map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.2 bg-gray-100 text-gray-700 rounded text-[9px] font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                      {member.tools.length > 3 && (
                        <span className="px-1 py-0.2 bg-gray-100 text-gray-400 rounded text-[9px] font-bold">
                          +{member.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer (Compact) */}
                  <div className="pt-2 mt-1.5 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[10px] text-gray-500 font-medium truncate max-w-[140px]">
                      {member.course}
                    </span>
                    <span className="text-[#C4161C] text-[10.5px] font-bold inline-flex items-center gap-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Live Notice */}
          <div className="flex items-center justify-between pt-3 px-1 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live moving stream • Hover or click any card to inspect</span>
            </span>
          </div>
        </div>

      </div>

      {/* ========================================================= */}
      {/* ALUMNI DOSSIER & POSTER LIGHTBOX MODAL                    */}
      {/* ========================================================= */}
      {selectedAlumni && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedAlumni(null)}
        >
          <div
            className="relative w-full max-w-xl bg-white rounded-[24px] overflow-hidden shadow-2xl p-5 sm:p-6 text-left space-y-4 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedAlumni(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Scrollable content inside modal */}
            <div className="overflow-y-auto pr-1 space-y-4">
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-1">
                {/* Poster Display */}
                <div className="w-36 sm:w-44 aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shadow-md shrink-0">
                  <img
                    src={selectedAlumni.img}
                    alt={selectedAlumni.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-1.5 text-center sm:text-left flex-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>CADD CENTRE MANJERI VERIFIED</span>
                  </span>

                  <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center justify-center sm:justify-start gap-2">
                    <span>{selectedAlumni.name}</span>
                    <span>{selectedAlumni.flag}</span>
                  </h3>

                  <div className="text-xs font-extrabold text-[#C4161C]">
                    {selectedAlumni.role}
                  </div>

                  <div className="text-xs text-gray-500 font-medium">
                    {selectedAlumni.company} · {selectedAlumni.location}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {selectedAlumni.description}
                  </p>
                </div>
              </div>

              {/* Placement Details Card */}
              <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs">
                <div>
                  <span className="text-gray-400 font-medium block text-[10.5px]">Salary Hike</span>
                  <span className="text-xs font-black text-[#C4161C]">{selectedAlumni.uplift}</span>
                </div>
                <div>
                  <span className="text-gray-400 font-medium block text-[10.5px]">Placement Location</span>
                  <span className="text-xs font-bold text-gray-900">{selectedAlumni.flag} {selectedAlumni.location}</span>
                </div>
                <div className="col-span-2 pt-1.5 border-t border-gray-200/60">
                  <span className="text-gray-400 font-medium block text-[10.5px]">Course Completed</span>
                  <span className="text-xs font-bold text-gray-900">{selectedAlumni.course}</span>
                </div>
              </div>

              {/* Software Skills */}
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Software Tools Mastered
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedAlumni.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded-md text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedAlumni(null);
                  if (onOpenDemo) onOpenDemo();
                }}
                className="flex-1 py-2.5 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-sm"
              >
                Enquire Similar Course
              </button>
              <button
                type="button"
                onClick={() => setSelectedAlumni(null)}
                className="px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all cursor-pointer"
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


