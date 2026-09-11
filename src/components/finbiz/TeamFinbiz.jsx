import React, { useState, useMemo } from 'react';
import {
  Target,
  MapPin,
  TrendingUp,
  Building2,
  CheckCircle2,
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
  Sparkles,
  Layers,
  Users
} from 'lucide-react';

// Authentic Placed Student Poster Images from assets/placestudents
import imgHanna from '../../assets/placestudents/Hanna.png';
import imgHijas from '../../assets/placestudents/Hijas.png';
import imgJasmin from '../../assets/placestudents/Jasmin.png';
import imgJithin from '../../assets/placestudents/Jithin.png';
import imgPeter from '../../assets/placestudents/Peter.png';
import imgVipin from '../../assets/placestudents/Vipin.png';
import imgShahla from '../../assets/placestudents/Shahla.png';
import imgSalman from '../../assets/placestudents/Salman.png';
import imgDilshad from '../../assets/placestudents/IMG_0058.PNG';
import imgAnsar from '../../assets/placestudents/IMG_0059.PNG';
import imgAnshad from '../../assets/placestudents/IMG_0060.PNG';
import imgZiyad from '../../assets/placestudents/IMG_0061.PNG';
import imgSreni from '../../assets/placestudents/IMG_0063.JPEG';
import imgVignesh from '../../assets/placestudents/IMG_0065.JPEG';
import imgSuhail from '../../assets/placestudents/IMG_0069.JPEG';
import imgAshique from '../../assets/placestudents/IMG_0070.PNG';
import imgShehin from '../../assets/placestudents/IMG_0071.PNG';

export const PLACED_ALUMNI = [
  {
    id: 'hanna',
    name: 'Hanna',
    role: 'Interior Designer',
    category: 'interior',
    company: 'Design & Architecture Studio',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    uplift: '+3.4x Salary',
    course: 'Master Diploma in Interior BIM',
    tools: ['AutoCAD', '3ds Max', 'V-Ray', 'Revit'],
    badge: 'Top Placement',
    img: imgHanna
  },
  {
    id: 'hijas',
    name: 'Hijas',
    role: 'BIM Modeler',
    category: 'bim',
    company: 'BIM Global Engineering Consultancy',
    location: 'Abu Dhabi, UAE',
    flag: '🇦🇪',
    uplift: '+3.6x Salary',
    course: 'Master Diploma in BIM Architecture',
    tools: ['Revit Architecture', 'Navisworks', 'AutoCAD'],
    badge: 'GCC Career',
    img: imgHijas
  },
  {
    id: 'shehin',
    name: 'Shehin',
    role: 'Interior BIM Designer',
    category: 'interior',
    company: 'Ajiro Design Solutions',
    location: 'Calicut, India',
    flag: '🇮🇳',
    uplift: '+3.1x Salary',
    course: 'Executive Diploma in Interior CAD',
    tools: ['3ds Max', 'Revit', 'SketchUp', 'V-Ray'],
    badge: 'MNC Studio',
    img: imgShehin
  },
  {
    id: 'ziyad',
    name: 'Ziyad',
    role: 'Civil Structural Engineer',
    category: 'civil',
    company: 'Smart Design & Build Contracting',
    location: 'Dubai, UAE',
    flag: '🇦🇪',
    uplift: '+3.7x Salary',
    course: 'Master Diploma in Structural Analysis',
    tools: ['AutoCAD', 'ETABS', 'SAFE', 'Tekla'],
    badge: 'High Package',
    img: imgZiyad
  },
  {
    id: 'jasmin',
    name: 'Jasmin',
    role: 'CAD Draftsman',
    category: 'bim',
    company: 'Apex Engineering Consultancy',
    location: 'Kochi & GCC',
    flag: '🇦🇪',
    uplift: '+2.8x Salary',
    course: 'Professional in Architectural CAD',
    tools: ['AutoCAD', 'Revit', 'Lumion'],
    badge: 'Gulf Track',
    img: imgJasmin
  },
  {
    id: 'jithin',
    name: 'Jithin',
    role: 'Site Engineer',
    category: 'civil',
    company: 'Al-Bayan Infrastructure & Construction',
    location: 'Doha, Qatar',
    flag: '🇶🇦',
    uplift: '+3.5x Salary',
    course: 'Civil & Structural Master Program',
    tools: ['AutoCAD Civil', 'STAAD.Pro', 'ETABS'],
    badge: 'Infrastructure',
    img: imgJithin
  },
  {
    id: 'peter',
    name: 'Peter',
    role: 'Structural Detailer',
    category: 'civil',
    company: 'Sterling Construction Group',
    location: 'Bangalore, India',
    flag: '🇮🇳',
    uplift: '+2.9x Salary',
    course: 'Advanced Diploma in Structural Design',
    tools: ['AutoCAD', 'STAAD.Pro', 'MS Project'],
    badge: 'Top MNC',
    img: imgPeter
  },
  {
    id: 'vipin',
    name: 'Vipin',
    role: 'Mechanical Designer',
    category: 'mechanical',
    company: 'Vector Precision Studio',
    location: 'Chennai, India',
    flag: '🇮🇳',
    uplift: '+3.1x Salary',
    course: 'Master Diploma in Mechanical CADD',
    tools: ['SolidWorks', 'Creo', 'CATIA'],
    badge: 'Automotive CAD',
    img: imgVipin
  },
  {
    id: 'shahla',
    name: 'Shahla',
    role: 'BIM & CAD Designer',
    category: 'bim',
    company: 'Horizon Architectural Consultants',
    location: 'Sharjah, UAE',
    flag: '🇦🇪',
    uplift: '+3.3x Salary',
    course: 'Master Diploma in BIM & Architecture',
    tools: ['Revit Architecture', 'AutoCAD', 'Navisworks'],
    badge: 'Architecture',
    img: imgShahla
  },
  {
    id: 'salman',
    name: 'Salman',
    role: 'Mechanical CAD Designer',
    category: 'mechanical',
    company: 'Gulf Industrial Engineering',
    location: 'Riyadh, Saudi Arabia',
    flag: '🇸🇦',
    uplift: '+3.2x Salary',
    course: 'Professional in Mechanical CAD',
    tools: ['SolidWorks', 'AutoCAD Mechanical', 'ANSYS'],
    badge: 'Industrial',
    img: imgSalman
  },
  {
    id: 'dilshad',
    name: 'Dilshad',
    role: 'MEP Designer',
    category: 'interior',
    company: 'Focus MEP Solutions',
    location: 'Calicut & GCC',
    flag: '🇦🇪',
    uplift: '+3.5x Salary',
    course: 'Master Diploma in MEP BIM',
    tools: ['Revit MEP', 'AutoCAD', 'HAP'],
    badge: 'MEP Systems',
    img: imgDilshad
  },
  {
    id: 'ansar',
    name: 'Ansar',
    role: 'Civil Draughtsman',
    category: 'civil',
    company: 'Civil & Architectural Engineering',
    location: 'Malappuram, India',
    flag: '🇮🇳',
    uplift: '+2.6x Salary',
    course: 'Diploma in Civil Draughtsmanship',
    tools: ['AutoCAD', '3ds Max', 'SketchUp'],
    badge: 'Drafting',
    img: imgAnsar
  },
  {
    id: 'anshad',
    name: 'Anshad',
    role: 'Product Designer',
    category: 'mechanical',
    company: 'Creative Studio Solutions',
    location: 'Coimbatore, India',
    flag: '🇮🇳',
    uplift: '+3.0x Salary',
    course: 'Master Diploma in Product Design',
    tools: ['SolidWorks', 'KeyShot', 'Creo'],
    badge: 'R&D Product',
    img: imgAnshad
  },
  {
    id: 'sreni',
    name: 'Sreni',
    role: 'Architectural BIM Designer',
    category: 'bim',
    company: 'Modern Architecture & Interiors',
    location: 'Kerala, India',
    flag: '🇮🇳',
    uplift: '+2.9x Salary',
    course: 'Master Diploma in Architectural BIM',
    tools: ['Revit', 'SketchUp', 'Lumion', 'AutoCAD'],
    badge: 'BIM Modeler',
    img: imgSreni
  },
  {
    id: 'vignesh',
    name: 'Vignesh',
    role: 'Mechanical Draughtsman',
    category: 'mechanical',
    company: 'Engineering Services Group',
    location: 'Pune, India',
    flag: '🇮🇳',
    uplift: '+2.7x Salary',
    course: 'Diploma in Mechanical CADD',
    tools: ['AutoCAD Mechanical', 'SolidWorks'],
    badge: 'Precision CAD',
    img: imgVignesh
  },
  {
    id: 'suhail',
    name: 'Suhail',
    role: 'CAD Designer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    location: 'Hyderabad, India',
    flag: '🇮🇳',
    uplift: '+3.0x Salary',
    course: 'Master Diploma in Product Design',
    tools: ['SolidWorks', 'CATIA', 'AutoCAD'],
    badge: 'Design Engg',
    img: imgSuhail
  },
  {
    id: 'ashique',
    name: 'Ashique',
    role: 'Creo & Mechanical Engineer',
    category: 'mechanical',
    company: 'SeoskoServ Private Limited',
    location: 'Hyderabad, India',
    flag: '🇮🇳',
    uplift: '+2.8x Salary',
    course: 'Professional in Mechanical CAD',
    tools: ['Creo Parametric', 'AutoCAD', 'ANSYS'],
    badge: 'FEA & CAD',
    img: imgAshique
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Placements', count: 17 },
  { id: 'bim', label: 'BIM & Architecture', count: 4 },
  { id: 'civil', label: 'Civil & Structural', count: 4 },
  { id: 'mechanical', label: 'Mechanical & Product', count: 5 },
  { id: 'interior', label: 'Interior & MEP', count: 4 }
];

const RECRUITERS = [
  'Dar Al-Handasah',
  'L&T Construction',
  'Sobha Realty',
  'Shapoorji Pallonji',
  'Al-Bayan Infrastructure',
  'Sterling Group',
  'BIM Global Engineering',
  'Apex Engineering',
  'Ajiro Design Studio',
  'Focus MEP Solutions',
  'SeoskoServ Private Limited'
];

export default function TeamFinbiz({ onOpenDemo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'slider'
  const [isExpanded, setIsExpanded] = useState(false);
  const sliderRef = React.useRef(null);

  const filteredAlumni = useMemo(() => {
    if (selectedCategory === 'all') return PLACED_ALUMNI;
    return PLACED_ALUMNI.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // If expanded, show all filtered alumni; otherwise show top 8 for clean hierarchy
  const displayedAlumni = viewMode === 'grid' && !isExpanded
    ? filteredAlumni.slice(0, 8)
    : filteredAlumni;

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="placements" className="pt-16 sm:pt-20 pb-8 sm:pb-10 bg-[#F8F9FA] relative select-none">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
            <Target className="w-3.5 h-3.5 text-[#C4161C]" />
            <span>VERIFIED CORPORATE PLACEMENTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-tight">
            Career Trajectory &amp; Alumni Placements
          </h2>

          <p className="text-sm sm:text-base text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed">
            15,000+ certified engineers, drafters, and BIM modelers thriving across UAE, Qatar, Saudi Arabia, and top Indian MNCs.
          </p>
        </div>

        {/* ========================================================= */}
        {/* 4 EXECUTIVE PLACEMENT METRICS SCORECARD                   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8">
          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C4161C]/10 text-[#C4161C] flex items-center justify-center mb-2.5 sm:mb-3">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">15,000+</div>
            <div className="text-[10.5px] sm:text-xs font-semibold text-gray-500 mt-1">Engineers &amp; Designers Placed</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-2.5 sm:mb-3">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">100%</div>
            <div className="text-[10.5px] sm:text-xs font-semibold text-gray-500 mt-1">Placement Assistance Support</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2.5 sm:mb-3">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">3.5x</div>
            <div className="text-[10.5px] sm:text-xs font-semibold text-gray-500 mt-1">Average Salary Uplift</div>
          </div>

          <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2.5 sm:mb-3">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-3xl font-black text-gray-900 tracking-tight">450+</div>
            <div className="text-[10.5px] sm:text-xs font-semibold text-gray-500 mt-1">Corporate Hiring Partners</div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* HIRING PARTNERS TICKER (VARIETY & PRESTIGE)               */}
        {/* ========================================================= */}
        <div className="mb-10 py-3 px-4 sm:px-6 rounded-2xl bg-white border border-gray-200/70 shadow-xs flex flex-col md:flex-row items-center justify-between gap-3 overflow-hidden">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-mono font-bold text-gray-800 uppercase tracking-wider">
              Top Corporate Recruiters:
            </span>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto no-scrollbar py-1 text-xs font-semibold text-gray-600" style={{ WebkitOverflowScrolling: 'touch' }}>
            {RECRUITERS.map((r, i) => (
              <span key={i} className="whitespace-nowrap flex items-center gap-2 shrink-0">
                <span>{r}</span>
                {i < RECRUITERS.length - 1 && <span className="text-gray-300">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CONTROLS BAR: Filters + View Mode Switcher    */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Tabs */}
          <div
            className="flex items-center gap-2 overflow-x-auto w-full pb-1 no-scrollbar"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setIsExpanded(false);
                  }}
                  className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#C4161C] text-white shadow-md'
                      : 'bg-white text-gray-700 hover:text-gray-950 hover:bg-gray-100 border border-gray-200/80 shadow-xs'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Action: Grid vs Slider Switcher (Desktop) + Touch Navigation (Mobile) */}
          <div className="flex items-center gap-2.5 shrink-0 self-end sm:self-auto">
            {/* View Mode Toggle (Desktop only) */}
            <div className="hidden sm:inline-flex items-center p-1 rounded-xl bg-white border border-gray-200/80 shadow-xs text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#C4161C] text-white font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Grid
              </button>
              <button
                type="button"
                onClick={() => setViewMode('slider')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'slider'
                    ? 'bg-[#C4161C] text-white font-bold shadow-xs'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Slider
              </button>
            </div>

            {/* Mobile Touch Swipe Arrows */}
            <div className="flex sm:hidden items-center gap-1.5">
              <span className="text-[11px] font-mono text-gray-500 font-semibold mr-1">Swipe →</span>
              <button
                type="button"
                onClick={() => scrollSlider('left')}
                className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] text-gray-700 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Previous Placement"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                className="w-8 h-8 rounded-lg bg-white border border-gray-200 hover:border-[#C4161C] text-gray-700 flex items-center justify-center shadow-xs active:scale-95 cursor-pointer"
                aria-label="Next Placement"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Desktop Slider Navigation Arrows (when in slider mode) */}
            {viewMode === 'slider' && (
              <div className="hidden sm:flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollSlider('left')}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollSlider('right')}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CARD SHOWCASE: DESKTOP GRID / MOBILE HORIZONTAL SWIPE     */}
        {/* ========================================================= */}
        {viewMode === 'grid' ? (
          /* ======================== GRID MODE (Desktop Grid / Mobile Horizontal Swipe) ======================== */
          <div className="space-y-6 sm:space-y-10">
            <div
              ref={sliderRef}
              className="flex sm:grid overflow-x-auto sm:overflow-visible gap-4 sm:gap-6 pb-4 sm:pb-0 pt-1 snap-x snap-mandatory sm:snap-none no-scrollbar scroll-smooth sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {filteredAlumni.map((member, idx) => {
                const isHiddenOnDesktop = !isExpanded && idx >= 8;
                return (
                  <div
                    key={member.id}
                    onClick={() => setSelectedAlumni(member)}
                    className={`${
                      isHiddenOnDesktop ? 'flex sm:hidden' : 'flex'
                    } w-[275px] xs:w-[290px] sm:w-auto shrink-0 sm:shrink snap-start sm:snap-none group bg-white rounded-[24px] border border-gray-200/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#C4161C]/50 transition-all duration-300 flex-col justify-between cursor-pointer text-left relative`}
                  >
                    {/* Photo Frame Container */}
                    <div className="relative aspect-[4/4.6] w-full rounded-[18px] overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
                      <img
                        src={member.img}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Floating Top Left: Flag + Location Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/60 text-[10.5px] font-bold text-gray-800 shadow-sm">
                        <span>{member.flag}</span>
                        <span>{member.location}</span>
                      </div>

                      {/* Floating Top Right: Salary Uplift Badge */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#C4161C] text-[10px] font-black text-white shadow-md">
                        {member.uplift}
                      </div>

                      {/* Bottom Spotlight Tag */}
                      <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[9.5px] font-mono font-bold text-white uppercase tracking-wider">
                        {member.badge}
                      </div>
                    </div>

                    {/* Information Body */}
                    <div className="pt-4 pb-2 space-y-2">
                      <div className="flex items-center justify-between gap-1">
                        <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight group-hover:text-[#C4161C] transition-colors truncate">
                          {member.name}
                        </h3>
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#C4161C] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-md shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#C4161C]" />
                          <span>PLACED</span>
                        </span>
                      </div>

                      {/* Role */}
                      <div className="text-xs font-bold text-[#C4161C] tracking-wide">
                        {member.role}
                      </div>

                      {/* Company Name */}
                      <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium truncate">
                        <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                        <span className="truncate">{member.company}</span>
                      </div>

                      {/* Software Skills Pill Chips */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {member.tools.slice(0, 3).map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md text-[10px] font-semibold"
                          >
                            {tool}
                          </span>
                        ))}
                        {member.tools.length > 3 && (
                          <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-bold">
                            +{member.tools.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-gray-400 font-medium truncate">
                        {member.course}
                      </span>
                      <span className="text-[#C4161C] font-bold inline-flex items-center gap-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
                        <span>View</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile Swipe Hint Bar */}
            <div className="sm:hidden flex items-center justify-between pt-1 px-1 text-xs text-gray-500 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C4161C] animate-pulse" />
                <span>Swipe to view all <strong>{filteredAlumni.length}</strong> placements</span>
              </span>
              <span className="text-[11px] text-gray-400 font-mono">Horizontal Scroll ↔</span>
            </div>

            {/* PROMINENT "VIEW ALL" EXPANSION BUTTON (Desktop Grid) */}
            {filteredAlumni.length > 8 && (
              <div className="hidden sm:flex flex-col items-center justify-center pt-4">
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-[#C4161C] text-gray-900 hover:text-[#C4161C] font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-95"
                >
                  {isExpanded ? (
                    <>
                      <span>Show Less Placements</span>
                      <span className="text-xs">↑</span>
                    </>
                  ) : (
                    <>
                      <span>View All Placements ({filteredAlumni.length} Total)</span>
                      <span className="text-xs">↓</span>
                    </>
                  )}
                </button>
                <p className="text-[11px] text-gray-400 mt-2 font-medium">
                  {isExpanded
                    ? `Showing all ${filteredAlumni.length} placed alumni profiles`
                    : `Showing 8 of ${filteredAlumni.length} alumni · Click to expand full directory`}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* ======================== SLIDER MODE ======================== */
          <div className="relative">
            {/* Horizontal Track with Smooth Scroll */}
            <div
              ref={sliderRef}
              className="flex gap-6 overflow-x-auto pb-6 pt-1 snap-x no-scrollbar scroll-smooth"
            >
              {filteredAlumni.map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedAlumni(member)}
                  className="w-[280px] sm:w-[310px] shrink-0 snap-start bg-white rounded-[24px] border border-gray-200/80 p-4 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-[#C4161C]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left relative"
                >
                  {/* Photo Frame Container */}
                  <div className="relative aspect-[4/4.6] w-full rounded-[18px] overflow-hidden bg-gray-100 border border-gray-100 shadow-inner">
                    <img
                      src={member.img}
                      alt={`${member.name} - ${member.role}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Floating Top Left: Flag + Location Badge */}
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-gray-200/60 text-[10.5px] font-bold text-gray-800 shadow-sm">
                      <span>{member.flag}</span>
                      <span>{member.location}</span>
                    </div>

                    {/* Floating Top Right: Salary Uplift Badge */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-[#C4161C] text-[10px] font-black text-white shadow-md">
                      {member.uplift}
                    </div>

                    {/* Bottom Spotlight Tag */}
                    <div className="absolute bottom-2 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[9.5px] font-mono font-bold text-white uppercase tracking-wider">
                      {member.badge}
                    </div>
                  </div>

                  {/* Information Body */}
                  <div className="pt-4 pb-2 space-y-2">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-base sm:text-lg font-black text-gray-900 tracking-tight group-hover:text-[#C4161C] transition-colors truncate">
                        {member.name}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-[#C4161C] bg-red-50 border border-red-200/60 px-2 py-0.5 rounded-md shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-[#C4161C]" />
                        <span>PLACED</span>
                      </span>
                    </div>

                    {/* Role */}
                    <div className="text-xs font-bold text-[#C4161C] tracking-wide">
                      {member.role}
                    </div>

                    {/* Company Name */}
                    <div className="flex items-center gap-1.5 text-xs text-gray-600 font-medium truncate">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                      <span className="truncate">{member.company}</span>
                    </div>

                    {/* Software Skills Pill Chips */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {member.tools.slice(0, 3).map((tool, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-md text-[10px] font-semibold"
                        >
                          {tool}
                        </span>
                      ))}
                      {member.tools.length > 3 && (
                        <span className="px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded-md text-[10px] font-bold">
                          +{member.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-3 mt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-gray-400 font-medium truncate">
                      {member.course}
                    </span>
                    <span className="text-[#C4161C] font-bold inline-flex items-center gap-0.5 shrink-0 group-hover:translate-x-0.5 transition-transform">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Indicator */}
            <div className="text-center pt-2">
              <span className="text-xs text-gray-400 font-medium">
                ← Drag or click arrows to view all {filteredAlumni.length} placed alumni →
              </span>
            </div>
          </div>
        )}


      </div>

      {/* ========================================================= */}
      {/* ALUMNI DOSSIER LIGHTBOX MODAL                             */}
      {/* ========================================================= */}
      {selectedAlumni && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white rounded-[28px] overflow-hidden shadow-2xl p-6 sm:p-8 text-left space-y-5 animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedAlumni(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Header with Poster */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-24 rounded-2xl overflow-hidden bg-gray-100 border-2 border-gray-100 shadow-md shrink-0">
                <img
                  src={selectedAlumni.img}
                  alt={selectedAlumni.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>OFFICIAL VERIFIED PLACEMENT</span>
                </span>
                <h3 className="text-xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                  <span>{selectedAlumni.name}</span>
                  <span>{selectedAlumni.flag}</span>
                </h3>
                <div className="text-xs font-bold text-[#C4161C]">
                  {selectedAlumni.role}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {selectedAlumni.company} · {selectedAlumni.location}
                </div>
              </div>
            </div>

            {/* Placement Details Card */}
            <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 text-xs">
              <div>
                <span className="text-gray-400 font-medium block text-[11px]">Salary Hike</span>
                <span className="text-sm font-black text-[#C4161C]">{selectedAlumni.uplift}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium block text-[11px]">Placement Location</span>
                <span className="text-sm font-bold text-gray-900">{selectedAlumni.flag} {selectedAlumni.location}</span>
              </div>
              <div className="col-span-2 pt-2 border-t border-gray-200/60">
                <span className="text-gray-400 font-medium block text-[11px]">Course Completed</span>
                <span className="text-xs font-bold text-gray-900">{selectedAlumni.course}</span>
              </div>
            </div>

            {/* Software Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Software Tools Mastered
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedAlumni.tools.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedAlumni(null);
                  if (onOpenDemo) onOpenDemo();
                }}
                className="flex-1 py-3 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer shadow-md"
              >
                Enquire Similar Course
              </button>
              <button
                type="button"
                onClick={() => setSelectedAlumni(null)}
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


