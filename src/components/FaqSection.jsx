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
  CheckCircle2,
  Award,
  Sparkles,
  Tag,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

export default function FaqSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = [
    { id: 'all', label: 'All FAQs (29)', icon: <HelpCircle className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'institute', label: 'CADD Centre & Overview', icon: <ShieldCheck className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'autocad-civil', label: 'AutoCAD & Civil 3D', icon: <PenTool className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'bim', label: 'BIM & Architecture', icon: <Layers className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'interior-vis', label: 'Interior & 3ds Max', icon: <BookOpen className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'mep-mech', label: 'MEP & SolidWorks', icon: <Wrench className="w-3.5 h-3.5 shrink-0" /> },
    { id: 'eligibility-careers', label: 'Eligibility & Placements', icon: <Award className="w-3.5 h-3.5 shrink-0" /> },
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

  // Reset open item and expand state on category/search change
  useEffect(() => {
    setOpenIdx(0);
    setIsExpanded(false);
  }, [activeCategory, searchQuery]);

  const visibleFaqs = (isExpanded || filteredFaqs.length <= 6)
    ? filteredFaqs
    : filteredFaqs.slice(0, 6);

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-white text-slate-900 font-['Plus_Jakarta_Sans',sans-serif] border-t border-slate-200 overflow-hidden">
      {/* Schema.org JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN: Got Questions Badge, Photo Card with Floating Advisor Badge & Subtext */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Got Questions Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0D62FE] text-xs font-mono font-bold tracking-wider mb-6 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0D62FE]" />
              <span>[ 05 FREQUENTLY ASKED QUESTIONS ]</span>
            </div>

            {/* Photo Card with Layered Frame Effect */}
            <div className="relative w-full max-w-[420px] mx-auto lg:mx-0 group">
              {/* Layered tilted background frame */}
              <div className="absolute inset-0 rounded-[28px] border border-slate-200 bg-slate-50 transform -rotate-3 scale-[1.01] pointer-events-none hidden sm:block" />

              {/* Main Photo Card */}
              <div className="relative rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-2xl">
                <img
                  src="/images/faq-advisor.jpg"
                  alt="CADD Career Advisor"
                  className="w-full aspect-[4/5] object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glassmorphism Advisor Badge */}
                <div
                  onClick={onOpenDemo}
                  className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-2xl flex items-center gap-3.5 cursor-pointer hover:border-[#0D62FE] transition-all group/badge"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#0D62FE] group-hover/badge:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight flex items-center gap-1.5">
                      Need Career Guidance?
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5 font-medium">
                      Our certified counsellors are ready to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-caption Text beneath Card */}
            <p className="mt-5 text-xs sm:text-[13px] text-slate-500 leading-relaxed max-w-[420px] text-left">
              CADD Centre Manjeri offers industry-certified training in AutoCAD, BIM, Revit, MEP &amp; 3ds Max with 100% placement support.
            </p>
          </div>

          {/* RIGHT COLUMN: Headline, Subtitle, Search, Category Pills, Accordion */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              FREQUENTLY ASKED QUESTIONS<span className="text-[#0D62FE]">.</span>
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              Everything you need to know about CAD, BIM, MEP, Interior Design, and Placement Support at CADD Centre Manjeri.
            </p>

            {/* Search Input */}
            <div className="mt-6 relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AutoCAD, BIM, MEP, Interior, Placement..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-[#0D62FE] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Horizontal Filter Category Pills */}
            <div className="flex flex-wrap items-center gap-2 mt-4 mb-6">
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
                    className={`px-3.5 py-1.5 rounded-full font-mono text-xs flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${isActive
                        ? 'bg-[#0D62FE] text-white font-bold shadow-md shadow-blue-500/20 border border-[#0D62FE]'
                        : 'bg-slate-50 text-slate-600 hover:text-[#0D62FE] hover:bg-slate-100 border border-slate-200 font-medium'
                      }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Accordion Questions List */}
            {filteredFaqs.length > 0 ? (
              <>
                <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                  {visibleFaqs.map((item, idx) => {
                    const isOpen = openIdx === idx;

                    return (
                      <div
                        key={item.id}
                        className={`transition-colors duration-200 ${isOpen ? 'bg-blue-50/30' : 'hover:bg-slate-50/50'
                          }`}
                      >
                        {/* Question Header */}
                        <button
                          type="button"
                          onClick={() => setOpenIdx(isOpen ? null : idx)}
                          className="w-full text-left py-4.5 px-1 flex items-start sm:items-center justify-between gap-4 cursor-pointer group"
                        >
                          <span className={`transition-colors leading-snug font-bold ${isOpen
                              ? "text-base sm:text-lg text-[#0D62FE]"
                              : "text-sm sm:text-base text-slate-800 group-hover:text-[#0D62FE]"
                            }`}>
                            {item.question}
                          </span>

                          <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${isOpen
                              ? 'border-blue-200 bg-blue-50 text-[#0D62FE]'
                              : 'border-slate-200 text-slate-400 group-hover:border-slate-300 group-hover:text-[#0D62FE]'
                            }`}>
                            {isOpen ? (
                              <X className="w-3.5 h-3.5" />
                            ) : (
                              <Plus className="w-3.5 h-3.5" />
                            )}
                          </div>
                        </button>

                        {/* Answer Body */}
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: "easeInOut" }}
                            >
                              <div className="pb-5 px-1 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-3.5">
                                <p>{item.answer}</p>

                                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                                  <div className="flex items-center gap-1.5 text-emerald-600 font-medium text-xs sm:text-[13px]">
                                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                                    <span>Authorized International Certification &amp; Placements</span>
                                  </div>

                                  <button
                                    type="button"
                                    onClick={onOpenDemo}
                                    className="text-xs sm:text-[13px] font-mono font-bold text-[#0D62FE] hover:underline inline-flex items-center gap-1 cursor-pointer transition-colors group/link"
                                  >
                                    <span>ENQUIRE COURSE</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

                {/* Show More / Show Fewer Button */}
                {filteredFaqs.length > 6 && (
                  <div className="pt-5">
                    <button
                      type="button"
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="w-full py-3 px-6 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs sm:text-sm font-mono font-bold text-slate-800 flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer group"
                    >
                      <span>
                        {isExpanded ? (
                          'SHOW FEWER QUESTIONS'
                        ) : (
                          <>
                            SEE MORE QUESTIONS <span className="ml-1.5 px-2 py-0.5 rounded-full bg-blue-50 text-[#0D62FE] text-[11px] font-bold">+{filteredFaqs.length - 6} MORE</span>
                          </>
                        )}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'
                        }`} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-slate-50 rounded-[16px] p-8 text-center border border-slate-200 shadow-sm my-4">
                <p className="text-sm font-semibold text-slate-700">No matching questions found for "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="mt-3 text-xs font-mono font-bold text-[#0D62FE] hover:underline cursor-pointer"
                >
                  RESET SEARCH &amp; CATEGORY FILTERS
                </button>
              </div>
            )}
          </div>

        </div>

        {/* POPULAR SEARCHES & KEYWORDS CLOUD */}
        <div className="mt-14 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-3.5 text-slate-500">
            <Tag className="w-3.5 h-3.5 text-[#0D62FE]" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
              POPULAR CAD &amp; BIM SEARCHES IN MANJERI &amp; MALAPPURAM
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearchTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-[11.5px] font-mono font-medium text-slate-600 hover:text-[#0D62FE] hover:border-[#0D62FE] hover:bg-blue-50/50 transition-colors shadow-2xs cursor-default"
              >
                [ {tag} ]
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
