import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Plus,
  X,
  Search,
  BookOpen,
  Layers,
  PenTool,
  ShieldCheck,
  Wrench,
  BarChart3,
  CheckCircle2,
  Award,
  UserCheck,
  Sparkles,
  Tag,
  Compass
} from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import useAutoCarousel from '../hooks/useAutoCarousel';

export default function FaqSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', label: 'All FAQs (29)', icon: <HelpCircle className="w-4 h-4" /> },
    { id: 'institute', label: 'CADD Centre & Overview', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'autocad-civil', label: 'AutoCAD, Civil 3D & Civil', icon: <PenTool className="w-4 h-4" /> },
    { id: 'bim', label: 'BIM & Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'interior-vis', label: 'Interior Design & 3ds Max', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'mep-mech', label: 'MEP, Mechanical & SolidWorks', icon: <Wrench className="w-4 h-4" /> },
    { id: 'eligibility-careers', label: 'Eligibility, Beginners & Careers', icon: <Award className="w-4 h-4" /> },
  ];

  // Complete 29 SEO-Optimized FAQs for Manjeri & Malappuram
  const faqData = [
    {
      id: 1,
      category: 'institute',
      question: 'What makes your CADD Centre in Manjeri a leading CAD training centre?',
      answer: 'Our CADD Centre in Manjeri, Malappuram provides industry-focused training in CAD, BIM, MEP, Interior Design, Structural Design, Product Design, 3D Visualization, and Project Planning & Management. Training combines software skills, practical exercises, project workflows, and career-oriented learning.'
    },
    {
      id: 2,
      category: 'institute',
      question: 'Why choose your CAD Institute in Manjeri, Malappuram?',
      answer: 'Students and professionals choose our CAD training institute in Manjeri to develop practical skills in industry-relevant design and engineering software. Our programs are suitable for beginners, engineering students, graduates, designers, architects, and working professionals.'
    },
    {
      id: 3,
      category: 'autocad-civil',
      question: 'What CAD courses are available in Manjeri?',
      answer: 'Our CAD programs include AutoCAD, AutoCAD Architecture, AutoCAD Civil 3D, AutoCAD Mechanical, AutoCAD Electrical, and MicroStation. Course selection depends on your educational background and career specialization.'
    },
    {
      id: 4,
      category: 'autocad-civil',
      question: 'What is the best AutoCAD course in Manjeri?',
      answer: 'The right AutoCAD course in Manjeri depends on your career objective. General AutoCAD is suitable for technical drafting, while AutoCAD Architecture, Civil 3D, Mechanical, and Electrical are designed for specific engineering and design disciplines.'
    },
    {
      id: 5,
      category: 'bim',
      question: 'Do you offer the best BIM courses in Manjeri?',
      answer: 'We offer career-focused BIM training in Manjeri covering Revit Architecture, Revit Structure, Revit MEP, Navisworks, Dynamo, BIM 360, Autodesk Construction Cloud, and COBie. Programs are designed to develop practical BIM modeling and coordination skills.'
    },
    {
      id: 6,
      category: 'bim',
      question: 'Is there a BIM training institute in Malappuram for engineering students?',
      answer: 'Yes. Students looking for BIM training in Malappuram can choose programs based on their specialization, including Architecture, Civil & Structural Engineering, and MEP. Training focuses on BIM modeling, documentation, coordination, and industry workflows.'
    },
    {
      id: 7,
      category: 'mep-mech',
      question: 'Do you provide MEP courses in Manjeri?',
      answer: 'Yes. Our MEP courses in Manjeri cover HVAC, electrical systems, plumbing, fire protection, Revit MEP, Navisworks, BIM coordination, and related MEP workflows.'
    },
    {
      id: 8,
      category: 'interior-vis',
      question: 'What is included in the Interior Design course in Manjeri?',
      answer: 'The Interior Design course in Manjeri covers tools and workflows such as AutoCAD, 3ds Max, SketchUp, V-Ray, Corona Renderer, Enscape, Lumion, and Photoshop, along with 2D planning, 3D modeling, materials, lighting, rendering, and presentation.'
    },
    {
      id: 9,
      category: 'mep-mech',
      question: 'Do you offer Product Design and SolidWorks training in Malappuram?',
      answer: 'Yes. Our Product Design and SolidWorks training in Malappuram focuses on 2D drafting, 3D part modeling, assembly design, sheet metal, surface modeling, engineering drawings, and manufacturing documentation.'
    },
    {
      id: 10,
      category: 'interior-vis',
      question: 'Is 3ds Max training available in Manjeri?',
      answer: 'Yes. Our 3ds Max training in Manjeri focuses on 3D modeling, materials and textures, lighting, V-Ray and Corona rendering, environment creation, visualization, and professional presentation workflows.'
    },
    {
      id: 11,
      category: 'institute',
      question: 'Do you provide Project Planning & Management training?',
      answer: 'Yes. Our Project Planning & Management courses in Manjeri include Primavera P6 and Microsoft Project, covering WBS, scheduling, resource management, baseline management, progress tracking, delay analysis, and project reporting.'
    },
    {
      id: 12,
      category: 'eligibility-careers',
      question: 'Who can join CAD, BIM and MEP training in Manjeri?',
      answer: 'Our courses are suitable for students, fresh graduates, engineers, architects, interior designers, mechanical professionals, electrical engineers, civil professionals, and working professionals who want to develop or upgrade their technical skills.'
    },
    {
      id: 13,
      category: 'eligibility-careers',
      question: 'Do you provide practical and live project-based training?',
      answer: 'Yes. Our training emphasizes practical exercises and live project-based workflows, helping learners understand how CAD, BIM, MEP, design, and project management software are applied in real-world projects.'
    },
    {
      id: 14,
      category: 'eligibility-careers',
      question: 'Do you provide placement and career support?',
      answer: 'Career guidance and placement support are provided according to the selected program and applicable eligibility. Students receive guidance related to resume preparation, interview preparation, portfolio development, and career opportunities.'
    },
    {
      id: 15,
      category: 'institute',
      question: 'Where is the CADD & CAD Training Centre located?',
      answer: 'Our training centre is located at 2nd Floor, KORAMBAYIL CORPORATE MALL, Calicut Road, above Dhanlaxmi Bank, Manjeri, Kerala 676121, making it easily accessible to students and engineering professionals from Manjeri and across Malappuram.'
    },
    {
      id: 16,
      category: 'institute',
      question: 'How can I choose the right CAD or BIM course for my career?',
      answer: 'The best course depends on your qualification, engineering or design stream, current software knowledge, and career goal. Our team can help you identify a suitable course based on your professional interests and specialization.'
    },
    {
      id: 17,
      category: 'institute',
      question: 'Why should I choose a CAD, BIM or MEP course in Manjeri?',
      answer: 'Choosing a specialized CAD, BIM, or MEP course in Manjeri can help you develop technical software skills relevant to architecture, construction, engineering, manufacturing, and project management. A practical, industry-oriented learning approach can also help you build stronger project and portfolio skills.'
    },
    {
      id: 18,
      category: 'institute',
      question: 'Which is the best CAD and BIM training centre in Manjeri?',
      answer: 'Our training centre provides industry-focused training in CAD, BIM, MEP, structural design, interior design, civil engineering, mechanical design, and project management, with practical and live project-based learning.'
    },
    {
      id: 19,
      category: 'autocad-civil',
      question: 'Is AutoCAD Civil 3D training available in Manjeri?',
      answer: 'Yes. The AutoCAD Civil 3D course covers surveying, surface modeling, alignments, profiles, road and corridor design, grading, pipe networks, quantity takeoff, and civil engineering documentation.'
    },
    {
      id: 20,
      category: 'autocad-civil',
      question: 'Is MicroStation training available in Manjeri?',
      answer: 'Yes. MicroStation training covers 2D engineering drafting, surveying and mapping, topographic mapping, road and highway design, site development, geometric design, and infrastructure documentation.'
    },
    {
      id: 21,
      category: 'eligibility-careers',
      question: 'Are the courses suitable for beginners?',
      answer: 'Yes. Courses are structured to help beginners, students, graduates, and working professionals develop software skills progressively from fundamentals to industry workflows.'
    },
    {
      id: 22,
      category: 'autocad-civil',
      question: 'Which course is best for civil engineering students?',
      answer: 'Depending on your career goal, suitable options include AutoCAD, Civil 3D, Revit Structure, STAAD.Pro, ETABS, SAFE, Tekla Structures, and BIM for Architecture & Engineering.'
    },
    {
      id: 23,
      category: 'bim',
      question: 'Which BIM course is best for architecture students?',
      answer: 'Revit Architecture and BIM for Architecture are suitable choices for students interested in architectural BIM modeling, documentation, coordination, and construction workflows.'
    },
    {
      id: 24,
      category: 'mep-mech',
      question: 'Which courses are suitable for mechanical engineers?',
      answer: 'Mechanical professionals can choose from AutoCAD Mechanical, SolidWorks, Creo, CATIA, and Product Design programs based on their career objectives.'
    },
    {
      id: 25,
      category: 'mep-mech',
      question: 'Which courses are available for electrical and MEP engineers?',
      answer: 'Training options include AutoCAD Electrical, Revit MEP, MEP with BIM, HVAC, Electrical Systems, Plumbing, Fire Protection, and BIM Coordination.'
    },
    {
      id: 26,
      category: 'eligibility-careers',
      question: 'Do you provide certificates after course completion?',
      answer: 'Yes. Course completion certificates are provided according to the selected training program and applicable certification requirements.'
    },
    {
      id: 27,
      category: 'eligibility-careers',
      question: 'Can working professionals join CAD and BIM courses?',
      answer: 'Yes. Training programs offer flexible batch schedules suitable for students, fresh graduates, engineers, designers, architects, and working professionals looking to upgrade their technical skills.'
    },
    {
      id: 28,
      category: 'bim',
      question: 'What are the career opportunities after completing a BIM course?',
      answer: 'Graduates can pursue high-demand roles such as BIM Modeler, BIM Coordinator, Revit Technician, BIM Engineer, and Construction Coordinator across India and the Middle East.'
    },
    {
      id: 29,
      category: 'interior-vis',
      question: 'What are the career opportunities after completing an interior design course?',
      answer: 'Students can build exciting careers as Interior Designers, 3D Architectural Visualizers, Space Planners, Residential & Commercial CAD Detailers, or start their own design practice.'
    }
  ];

  // Natural SEO keywords tag cloud
  const popularSearchTags = [
    "CADD Centre in Manjeri, Malappuram",
    "CAD Training Centre in Manjeri",
    "Best CAD Institute in Manjeri",
    "AutoCAD Training Institute in Manjeri",
    "CAD & CADD Training Centre in Malappuram",
    "Best AutoCAD Course in Manjeri",
    "Best BIM Course in Manjeri",
    "Best Interior Design Course in Manjeri",
    "Best MEP Course in Manjeri",
    "Best 3ds Max Course in Manjeri",
    "Best SolidWorks Course in Manjeri",
    "Best Product Design Course in Manjeri",
    "Best Project Planning & Management Course in Manjeri",
    "Best BIM Training Institute in Malappuram",
    "Best AutoCAD Training Institute in Malappuram",
    "Best Interior Designing Training Institute in Malappuram",
    "Best MEP Training Institute in Malappuram",
    "Best SolidWorks Training Institute in Malappuram",
    "Best 3ds Max Training Institute in Malappuram",
    "Best Product Design Institute in Malappuram",
    "Best Project Planning & Management Training Institute in Malappuram"
  ];

  // Generate Schema.org FAQPage structured data
  const jsonLdData = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }, []);

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Mobile shows one question per slide instead of a tall accordion stack.
  const { railProps, index: slide, goTo } = useAutoCarousel(filteredFaqs.length, { paused: true });

  // Reset slide index and expand state on category/search change
  useEffect(() => {
    goTo(0);
    setIsExpanded(false);
  }, [activeCategory, searchQuery, goTo]);

  const visibleDesktopFaqs = (isExpanded || filteredFaqs.length <= 8)
    ? filteredFaqs
    : filteredFaqs.slice(0, 8);

  return (
    <section id="faq" className="relative py-10 sm:py-24 bg-[#F5F4F1] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Schema.org JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <SectionHeading
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="CAD &amp; CADD Training in Manjeri, Malappuram"
            description="Find clear answers about courses, AutoCAD &amp; BIM training, software coverage, eligibility, and career placement assistance at CADD Centre Manjeri."
            align="center"
          />

          {/* Search Input */}
          <div className="mt-6 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#9299A3] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search AutoCAD, BIM, MEP, Interior, Placement..."
              className="w-full pl-9 pr-8 py-2.5 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-xs sm:text-sm text-[#1C2533] placeholder-[#9299A3] shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#E94B3C]/20 focus:border-[#E94B3C] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#9299A3] hover:text-[#1C2533] cursor-pointer"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 2-COLUMN MAIN LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Sidebar: Vertical Category Tabs */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:flex lg:flex-col gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setOpenIdx(0);
                  }}
                  className={`w-full px-4 py-3 rounded-[12px] flex items-center justify-between text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1C2533] border border-[#E94B3C]/40 shadow-xs font-bold'
                      : 'bg-white/60 hover:bg-white text-[#687282] hover:text-[#1C2533] border border-[rgba(28,37,51,0.08)] font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`p-1 rounded-[6px] transition-colors ${
                      isActive ? 'bg-[#E94B3C]/10 text-[#E94B3C]' : 'text-[#9299A3]'
                    }`}>
                      {cat.icon}
                    </span>
                    <span className="text-xs sm:text-sm">{cat.label}</span>
                  </div>

                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                    isActive ? 'text-[#E94B3C] translate-x-0.5' : 'text-[#9299A3]'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* MOBILE / TABLET: one question per slide */}
          <div className="lg:hidden">
            {filteredFaqs.length > 0 ? (
              <>
                <div
                  {...railProps}
                  className="flex gap-3 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1 items-stretch"
                >
                  {filteredFaqs.map((item) => (
                    <div key={item.id} className="snap-center shrink-0 w-full">
                      <div className="h-full bg-white rounded-[16px] border border-[rgba(28,37,51,0.10)] shadow-2xs p-5 flex flex-col">
                        <p className="text-sm font-bold text-[#1C2533] leading-snug">
                          {item.question}
                        </p>

                        <div className="pt-3 mt-3 border-t border-[rgba(28,37,51,0.08)] text-xs text-[#687282] leading-relaxed space-y-3 flex-1">
                          <p>{item.answer}</p>
                        </div>

                        <div className="pt-3 mt-1 flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>Authorized Certification &amp; Placements</span>
                          </div>

                          <Button onClick={onOpenDemo} variant="link" size="sm">
                            Enquire Course
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide controls */}
                {filteredFaqs.length > 1 && (
                  <div className="flex items-center justify-center gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => goTo((slide - 1 + filteredFaqs.length) % filteredFaqs.length)}
                      aria-label="Previous question"
                      className="w-8 h-8 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                    </button>

                    <span className="text-xs font-bold text-[#1C2533]">
                      {slide + 1} <span className="text-[#9299A3] font-normal">/ {filteredFaqs.length}</span>
                    </span>

                    <button
                      type="button"
                      onClick={() => goTo((slide + 1) % filteredFaqs.length)}
                      aria-label="Next question"
                      className="w-8 h-8 rounded-[8px] bg-white border border-[rgba(28,37,51,0.12)] text-[#1C2533] hover:text-[#E94B3C] hover:border-[#E94B3C]/40 flex items-center justify-center cursor-pointer active:scale-95"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-[16px] p-8 text-center border border-[rgba(28,37,51,0.10)] shadow-2xs">
                <p className="text-sm font-semibold text-[#687282]">No matching questions found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-3 text-xs font-bold text-[#E94B3C] hover:underline cursor-pointer"
                >
                  Reset Search &amp; Category Filters
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Desktop Accordion Questions List */}
          <div className="hidden lg:block lg:col-span-8 space-y-2.5">
            {filteredFaqs.length > 0 ? (
              <>
                {visibleDesktopFaqs.map((item, idx) => {
                  const isOpen = openIdx === idx;

                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-200 rounded-[16px] overflow-hidden ${
                        isOpen
                          ? 'bg-white border border-[#E94B3C]/40 shadow-xs p-5'
                          : 'bg-white border border-[rgba(28,37,51,0.10)] hover:border-[rgba(28,37,51,0.2)] p-4 sm:p-5 shadow-2xs'
                      }`}
                    >
                      {/* Question Header Row */}
                      <button
                        type="button"
                        onClick={() => setOpenIdx(isOpen ? null : idx)}
                        className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                      >
                        <span className={`text-xs sm:text-sm leading-snug transition-colors ${
                          isOpen ? 'font-bold text-[#1C2533]' : 'font-semibold text-[#1C2533] group-hover:text-[#E94B3C]'
                        }`}>
                          {item.question}
                        </span>

                        <div className={`p-1 rounded-[6px] shrink-0 transition-colors ${
                          isOpen ? 'text-[#E94B3C] bg-[#E94B3C]/10' : 'text-[#9299A3] group-hover:text-[#1C2533]'
                        }`}>
                          {isOpen ? (
                            <X className="w-3.5 h-3.5" />
                          ) : (
                            <Plus className="w-3.5 h-3.5" />
                          )}
                        </div>
                      </button>

                      {/* Expanded Answer Body */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                          >
                            <div className="pt-3 mt-3 border-t border-[rgba(28,37,51,0.08)] text-xs sm:text-sm text-[#687282] leading-relaxed space-y-3">
                              <p>{item.answer}</p>

                              <div className="pt-1 flex flex-wrap items-center justify-between gap-3">
                                <div className="flex items-center gap-1.5 text-emerald-600 font-semibold text-xs">
                                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                                  <span>Authorized International Certification &amp; Practical Training Included</span>
                                </div>

                                <Button onClick={onOpenDemo} variant="link" size="sm">
                                  Enquire Course
                                </Button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}

                {/* See More / Show Fewer Button for Desktop */}
                {filteredFaqs.length > 8 && (
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="w-full py-3.5 px-4 rounded-[14px] bg-white hover:bg-[#FDFBF7] border border-[rgba(28,37,51,0.12)] hover:border-[#E94B3C]/40 text-xs sm:text-sm font-bold text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center gap-2.5 transition-all duration-200 shadow-2xs hover:shadow-xs cursor-pointer group"
                    >
                      <span className="flex items-center gap-2">
                        {isExpanded ? (
                          <>Show Fewer Questions</>
                        ) : (
                          <>
                            See More Questions <span className="px-2 py-0.5 rounded-full bg-[#E94B3C]/10 text-[#E94B3C] text-[11px] font-bold">+{filteredFaqs.length - 8} More</span>
                          </>
                        )}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#9299A3] group-hover:text-[#E94B3C] transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : 'rotate-0'
                      }`} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-[16px] p-8 text-center border border-[rgba(28,37,51,0.10)] shadow-2xs">
                <p className="text-sm font-semibold text-[#687282]">No matching questions found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-3 text-xs font-bold text-[#E94B3C] hover:underline cursor-pointer"
                >
                  Reset Search &amp; Category Filters
                </button>
              </div>
            )}
          </div>

        </div>

        {/* POPULAR SEARCHES & KEYWORDS CLOUD */}
        <div className="mt-12 pt-8 border-t border-[rgba(28,37,51,0.08)] max-w-5xl mx-auto">
          <div className="flex items-center gap-2 mb-3.5 text-[#687282]">
            <Tag className="w-3.5 h-3.5 text-[#E94B3C]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C2533]">
              Popular Training Searches in Manjeri &amp; Malappuram
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearchTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-white border border-[rgba(28,37,51,0.08)] text-[11px] font-medium text-[#687282] hover:text-[#E94B3C] hover:border-[#E94B3C]/30 transition-colors shadow-2xs cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
