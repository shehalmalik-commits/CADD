import React, { useState, useMemo } from 'react';
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

const MASTER_COURSES = [
  {
    id: 'bim-1',
    code: 'BIM-ADV-01',
    title: 'Master Certificate in BIM',
    disciplineKey: 'bim',
    disciplineName: 'BIM [Building Information Modelling]',
    duration: '240 hours',
    mode: 'In-Lab + Cloud VDC',
    level: 'Advanced Master Track',
    tools: ['Revit', 'Navisworks', 'BIM 360', 'Dynamo'],
    img: '/images/hero/hero-bim-architecture.jpg',
    tag: 'Autodesk Certified',
    description: 'Complete BIM coordination, architectural modeling, clash detection, and ISO 19650 international workflows.',
    perks: ['ISO 19650 Standards', 'Clash Matrix Reports', 'Live High-Rise Drawings'],
    modules: [
      'Revit Architecture & Structure Modeling (LOD 300-350)',
      'Navisworks Manage Clash Detection & 4D TimeLiner',
      'Autodesk Construction Cloud (BIM 360) ISO 19650 Workflows',
      'Dynamo Visual Scripting for Architectural Automation'
    ],
    featured: true
  },
  {
    id: 'interior-1',
    code: 'INT-DES-02',
    title: 'Executive Diploma in Interior Design',
    disciplineKey: 'interior',
    disciplineName: 'Interior Design',
    duration: '240 hours',
    mode: 'Studio + VR Walkthroughs',
    level: 'Professional Diploma',
    tools: ['AutoCAD', '3ds Max', 'SketchUp', 'V-Ray'],
    img: '/images/hero/hero-interior-design.jpg',
    tag: 'Design & Visuals',
    description: 'From 2D space planning to photorealistic 3D rendering, materials, lighting setups, and client walk-throughs.',
    perks: ['Photorealistic V-Ray', 'Space Layout Rules', 'Portfolio for GCC'],
    modules: [
      'Architectural Space Planning & AutoCAD Working Drawings',
      '3ds Max Advanced 3D Modeling & Material Texturing',
      'V-Ray & Corona Photorealistic Lighting & Camera Setups',
      'Client Walkthroughs, Virtual Reality & Material Mood Boards'
    ],
    featured: true
  },
  {
    id: 'structural-1',
    code: 'STR-ENG-03',
    title: 'Structural Design & Analysis',
    disciplineKey: 'structural',
    disciplineName: 'Structural Design',
    duration: '220 hours',
    mode: 'Practical FEA Lab',
    level: 'Master Engineering Track',
    tools: ['STAAD.Pro', 'ETABS', 'SAFE', 'Tekla'],
    img: '/images/course_structural.jpg',
    tag: 'Bentley Certified',
    description: 'High-rise RCC, structural steel modeling, earthquake dynamic analysis, and automated bar bending schedules.',
    perks: ['High-Rise RCC Analysis', 'Seismic Zone V', 'Automated BBS Prep'],
    modules: [
      'ETABS High-Rise RCC Modeling & Wind/Seismic Response Spectrum',
      'STAAD.Pro Space Frame & Industrial Steel Trusses Design',
      'SAFE Raft, Mat Foundation & Post-Tensioned Slabs',
      'Tekla Structures Steel Detailing & Automated Rebar Schedules'
    ],
    featured: true
  },
  {
    id: 'mep-1',
    code: 'MEP-BIM-04',
    title: 'MEP with BIM Engineering',
    disciplineKey: 'mep',
    disciplineName: 'MEP with BIM',
    duration: '200 hours',
    mode: 'Dual-Screen Lab',
    level: 'Advanced Engineering',
    tools: ['Revit MEP', 'Navisworks', 'HVAC', 'HAP'],
    img: '/images/course_mep.jpg',
    tag: 'Building Services',
    description: 'HVAC load calculations, plumbing hydraulics, electrical circuits, firefighting, and 3D clash resolution.',
    perks: ['HVAC HAP Loads', 'Firefighting NFPA', 'MEP Clash Resolution'],
    modules: [
      'HVAC Duct Sizing, Chilled Water Piping & HAP Heat Load Calculations',
      'Plumbing Hydraulics, Drainage Networks & Public Health Engineering',
      'Electrical Circuits, Cable Trays, DB Schedules & Lighting Lux Calc',
      'Firefighting Sprinkler Systems (NFPA Standards) & 3D Clash Resolution'
    ],
    featured: true
  },
  {
    id: 'product-1',
    code: 'PRD-CAD-05',
    title: 'Product Design & Engineering',
    disciplineKey: 'product',
    disciplineName: 'Product Design',
    duration: '220 hours',
    mode: 'Parametric CAD Lab',
    level: 'Industrial Track',
    tools: ['SolidWorks', 'Creo', 'CATIA', 'AutoCAD'],
    img: '/images/course_product.jpg',
    tag: 'Mechanical CAD',
    description: 'Parametric 3D part modeling, advanced surface design, assembly modeling, sheet metal, and GD&T drafting.',
    perks: ['Complex Assemblies', 'GD&T ASME Y14.5', 'Sheet Metal & Mold'],
    modules: [
      'SolidWorks Parametric Part & Kinematic Assembly Modeling',
      'Advanced Class-A Surface Design & Organic Contours in CATIA',
      'Sheet Metal Enclosures, Weldments & Plastic Injection Mold Tooling',
      'GD&T Drafting (ASME Y14.5) & FEA Stress/Thermal Simulation'
    ],
    featured: false
  },
  {
    id: 'survey-1',
    code: 'SRV-CIV-06',
    title: 'Surveying & Transportation Engineering',
    disciplineKey: 'survey',
    disciplineName: 'Surveying & Transportation',
    duration: '180 hours',
    mode: 'GIS & Field Data',
    level: 'Infrastructure Track',
    tools: ['AutoCAD Civil 3D', 'MicroStation', 'MX Road'],
    img: '/images/course_survey.jpg',
    tag: 'Infrastructure',
    description: 'Corridor modeling, highway alignment, contour mapping, grading surfaces, and storm drainage layout.',
    perks: ['Corridor Assemblies', 'Cross-Section Profiles', 'Contour Topography'],
    modules: [
      'AutoCAD Civil 3D Survey Total Station Data & Contour Surfaces',
      'Highway Horizontal & Vertical Alignment Geometry Design',
      'Corridor Assembly Modeling, Superelevation & Earthwork Quantities',
      'Stormwater Drainage Networks & MicroStation Infrastructure Drafting'
    ],
    featured: false
  },
  {
    id: 'ppm-1',
    code: 'PPM-MGT-07',
    title: 'Project Planning & Management (PPM)',
    disciplineKey: 'ppm',
    disciplineName: 'Project Planning & Management',
    duration: '140 hours',
    mode: 'Enterprise Project Lab',
    level: 'Management Track',
    tools: ['Primavera P6', 'Microsoft Project', 'WBS'],
    img: '/primavera_p6.jpg',
    tag: 'Oracle Partner',
    description: 'Critical Path Method (CPM), Earned Value Analysis, project scheduling, resource leveling, and risk tracking.',
    perks: ['Primavera P6 Schedules', 'Earned Value Analysis', 'Resource Leveling'],
    modules: [
      'Primavera P6 Enterprise Project Structure (EPS/OBS) Architecture',
      'Work Breakdown Structure (WBS) & Critical Path Method (CPM)',
      'Resource Allocation, Cost Baselines, S-Curves & Resource Leveling',
      'Earned Value Analysis (EVM), Delay Claim Tracking & Executive Reporting'
    ],
    featured: false
  },
  {
    id: 'autocad-1',
    code: 'CAD-ARC-08',
    title: 'Professional in Architectural AutoCAD',
    disciplineKey: 'autocad',
    disciplineName: 'AutoCAD',
    duration: '120 hours',
    mode: 'Drafting Studio',
    level: 'Foundation to Pro',
    tools: ['AutoCAD 2D', 'AutoCAD Architecture', 'Drafting'],
    img: '/images/hero-cad-bim.jpg',
    tag: 'Foundation CAD',
    description: 'Engineering drawing standards, municipal submissions, working floor plans, sections, and elevation details.',
    perks: ['Municipal Sanctions', 'Architectural Layers', 'Standard Detailing'],
    modules: [
      'Precision 2D Drafting & Architectural Drawing Standards',
      'Working Floor Plans, Cross-Sections & Detailed Elevation Views',
      'Layer Management, Annotation Scales & Dynamic Architectural Blocks',
      'Municipal Authority Sanction Drawings & Working Plot Deliverables'
    ],
    featured: false
  },
  {
    id: 'bim-2',
    code: 'BIM-CRD-09',
    title: 'BIM for Architecture & Coordination',
    disciplineKey: 'bim',
    disciplineName: 'BIM [Building Information Modelling]',
    duration: '160 hours',
    mode: 'ACC Cloud Lab',
    level: 'Specialized Diploma',
    tools: ['Revit Architecture', 'Navisworks', 'Enscape'],
    img: '/images/disciplines/discipline-bim.jpg',
    tag: 'ISO 19650',
    description: 'Parametric family creation, LOD 300-400 modeling, construction documentation, and federated model coordination.',
    perks: ['LOD 350-400 Modeling', 'Parametric Families', 'Enscape VR Renders'],
    modules: [
      'Revit Architecture Advanced Parametric Family Creation',
      'LOD 350-400 Construction Documentation & Schedule Extraction',
      'Enscape Real-Time Architectural Walkthroughs & VR Panoramas',
      'Federated Multi-Disciplinary Model Coordination & Clash Matrix'
    ],
    featured: false
  },
  {
    id: 'structural-2',
    code: 'STR-HRI-10',
    title: 'High-Rise RCC & Steel Analysis',
    disciplineKey: 'structural',
    disciplineName: 'Structural Design',
    duration: '240 hours',
    mode: 'Seismic Simulation Lab',
    level: 'Advanced Specialist',
    tools: ['ETABS', 'STAAD.Pro', 'SAFE', 'Tekla'],
    img: '/images/solar_farm_aerial.jpg',
    tag: 'Seismic Design',
    description: 'Wind tunnel simulation, seismic response spectrum, post-tensioned slab design, and fabrication drawings.',
    perks: ['Dynamic Response Spectrum', 'PT Slab Engineering', 'Tekla Steel Detailing'],
    modules: [
      'High-Rise RCC Core Wall & Shear Wall Layout in ETABS',
      'Earthquake Dynamic Response Spectrum Analysis to IS 1893 & Eurocode',
      'Post-Tensioned Flat Slabs & Column Drop Panels Design in SAFE',
      'Tekla Structures Rebar Fabrication & Automatic Bar Bending Schedules'
    ],
    featured: false
  },
  {
    id: 'mep-2',
    code: 'MEP-MAS-11',
    title: 'Master Diploma in MEP BIM',
    disciplineKey: 'mep',
    disciplineName: 'MEP with BIM',
    duration: '240 hours',
    mode: 'GCC Standards Studio',
    level: 'Executive Master Track',
    tools: ['Revit MEP', 'Navisworks', 'NFPA Code', 'HAP'],
    img: '/images/career-journey.jpg',
    tag: 'GCC Standard',
    description: 'Full GCC mechanical and electrical codes, plant room layout, chilled water piping, and BIM 360 cloud delivery.',
    perks: ['GCC Authority Specs', 'Plant Room Design', 'Hydraulic Balancing'],
    modules: [
      'GCC Authority MEP Codes & Approvals (DEWA, Kahramaa, SEWA)',
      'Central Chiller Plant Room, Cooling Towers & Primary/Secondary Pumps',
      'Smoke Management, Clean Agent Suppression & Staircase Pressurization',
      'BIM 360 Field Coordination, Spool Drawings & Shop Drawing Generation'
    ],
    featured: false
  },
  {
    id: 'autocad-2',
    code: 'CAD-MEC-12',
    title: 'Professional in Mechanical AutoCAD',
    disciplineKey: 'autocad',
    disciplineName: 'AutoCAD',
    duration: '120 hours',
    mode: 'Manufacturing Lab',
    level: 'Industrial Drafting',
    tools: ['AutoCAD Mechanical', 'GD&T Standards', 'Drafting'],
    img: '/images/cad_bim_hero_bg.jpg',
    tag: 'Manufacturing',
    description: 'ISO/ASME drafting standards, geometric dimensioning and tolerancing, bill of materials, and production drawings.',
    perks: ['ASME Drafting Specs', 'Geometric Tolerances', 'Automated BOM Lists'],
    modules: [
      'Mechanical Component Drafting & Exploded Assembly Layouts',
      'Geometric Dimensioning & Tolerancing (GD&T) Implementation',
      'Automated Bill of Materials (BOM) & Standard Hardware Integration',
      'Production Shop Drawings for CNC, Turning & Fabrication Shops'
    ],
    featured: false
  }
];

export default function PortfolioFinbiz({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedModules, setExpandedModules] = useState({});

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

  // When on "all" and not searching, show 4 featured courses initially, expand on button click
  const displayedCourses = useMemo(() => {
    if (activeTab === 'all' && !searchQuery) {
      return isExpanded ? filteredCourses : filteredCourses.slice(0, 4);
    }
    return filteredCourses;
  }, [activeTab, searchQuery, isExpanded, filteredCourses]);

  return (
    <section id="courses" className="pt-10 sm:pt-14 pb-20 sm:pb-28 bg-[#F8F9FC] select-none relative overflow-hidden text-left">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER & CONTROL BAR                              */}
        {/* ========================================================= */}
        <div className="space-y-6 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-xs font-black uppercase tracking-[0.2em] text-[#C4161C] shadow-xs">
                <Target className="w-3.5 h-3.5 text-[#C4161C] animate-pulse" />
                <span>36 COURSES ACROSS 8 DISCIPLINES</span>
              </div>

              {/* Main Section Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-tight">
                Course Offerings
              </h2>

              <p className="text-sm sm:text-base font-semibold text-gray-800">
                Find the Right Course for Your Career
              </p>

              <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
                Practical, software-oriented programs in AutoCAD, Revit BIM, SolidWorks, MEP, and Project Planning tailored for real-world engineering careers.
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="w-full sm:w-auto shrink-0">
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#11161E] hover:bg-[#C4161C] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer active:scale-96"
              >
                <span>GET ALL SYLLABUS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search Bar + 8 Disciplines Filter Tabs */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-2">
            {/* 8 Disciplines Filter Tabs */}
            <div
              className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar flex-1"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {DISCIPLINES.map((d) => {
                const isActive = activeTab === d.id;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(d.id);
                      setIsExpanded(false);
                    }}
                    className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                      isActive
                        ? 'bg-[#C4161C] text-white shadow-md'
                        : 'bg-white text-gray-700 hover:text-gray-950 hover:bg-gray-50 border border-gray-200/90 shadow-xs'
                    }`}
                  >
                    <span>{d.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${isActive ? 'bg-white/25 text-white' : 'bg-gray-100 text-gray-600'}`}>
                      {d.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search Tool Filter */}
            <div className="relative shrink-0 md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Revit, AutoCAD, MEP..."
                className="w-full pl-9 pr-8 py-2 rounded-full bg-white border border-gray-200 text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#C4161C] focus:ring-1 focus:ring-[#C4161C] transition-all shadow-xs"
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
                  className="group bg-white rounded-[28px] border border-gray-200/90 hover:border-[#C4161C]/50 shadow-[0_6px_24px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 overflow-hidden"
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
                          onClick={() => toggleModules(course.id)}
                          className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 text-xs font-bold flex items-center justify-between transition-all cursor-pointer shadow-2xs"
                        >
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-3.5 h-3.5 text-[#C4161C]" />
                            <span>{isModuleOpen ? 'Hide Modules' : 'View 4 Modules'}</span>
                          </span>
                          {isModuleOpen ? (
                            <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={onOpenDemo}
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
        {/* VIEW ALL COURSES BUTTON BAR ("VIEW ALL BUTTONM")          */}
        {/* ========================================================= */}
        {activeTab === 'all' && !searchQuery && (
          <div className="mt-12 flex flex-col items-center justify-center space-y-3">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-[#C4161C] text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-sm hover:shadow-md transition-all cursor-pointer group active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-[#C4161C]" />
              <span>
                {isExpanded
                  ? 'SHOW FEATURED COURSES (COLLAPSE)'
                  : 'VIEW ALL 36 COURSES ACROSS 8 DISCIPLINES'}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-[#C4161C]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C4161C]" />
              )}
            </button>
            <p className="text-[11px] text-gray-400 font-medium">
              {isExpanded
                ? 'Showing all 12 specialized master programs & certifications'
                : 'Showing 4 featured programs. Click to expand full catalog.'}
            </p>
          </div>
        )}

        {/* ========================================================= */}
        {/* FULL-WIDTH DARK PHOTOGRAPHIC CTA BANNER                   */}
        {/* ========================================================= */}
        <div className="mt-16 sm:mt-24 relative rounded-[32px] overflow-hidden shadow-2xl bg-gray-950">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/career-journey.jpg"
              alt="Engineering career consultation"
              className="w-full h-full object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
          </div>

          <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Let's discuss about how we can build your engineering career
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Book a free one-on-one session with our senior BIM &amp; CAD engineering counselors in Manjeri.
              </p>
            </div>

            <div className="shrink-0">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl transition-all cursor-pointer active:scale-96"
              >
                <span>ENQUIRE ADMISSION NOW</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

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
