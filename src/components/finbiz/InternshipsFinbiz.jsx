import React, { useState } from 'react';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Sparkles,
  Layers,
  FileCheck,
  Building2,
  Cpu,
  Compass,
  PhoneCall,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  GraduationCap
} from 'lucide-react';

const INTERNSHIP_TRACKS = [
  {
    id: 'civil-bim',
    badge: 'KTU & University Approved',
    discipline: 'Civil & Architectural Engineering',
    title: 'BIM & Structural Modeling Internship',
    tools: ['AutoCAD 2D/3D', 'Revit Architecture', 'Navisworks Manage', 'ETABS', 'Civil 3D'],
    durations: ['15 Days Intensive', '1 Month Industrial', '3-6 Months Capstone'],
    eligibility: 'B.Tech / B.Arch / Polytechnic Diploma Civil students & graduates',
    deliverables: [
      'Live G+5 Architectural & Structural Drawing Submissions',
      'LOD 300/350 3D BIM Model & 4D Construction Simulation',
      'Clash Detection Matrix & BOQ Quantity Estimation',
      'University Approved Internship Completion Certificate'
    ],
    highlight: 'Includes KTU Activity Points eligible documentation & viva guidance.',
    color: '#C4161C'
  },
  {
    id: 'mech-auto',
    badge: 'Automotive & Industrial Focus',
    discipline: 'Mechanical & Automobile Engineering',
    title: 'Product Design & FEA Analysis Internship',
    tools: ['SolidWorks', 'CATIA V5', 'Ansys Workbench', 'GD&T', 'AutoCAD Mech'],
    durations: ['15 Days Intensive', '1 Month Industrial', '3 Months Advanced'],
    eligibility: 'B.Tech / Polytechnic Mechanical, Automobile & Production streams',
    deliverables: [
      'Parametric 3D CAD Component Modeling & Assembly Drafting',
      'Structural Static FEA & Thermal Analysis Simulation Reports',
      'Reverse Engineering & Geometric Dimensioning & Tolerancing (GD&T)',
      'Certified Industrial Internship Credential & Portfolio Booklet'
    ],
    highlight: 'Real-world machinery part manufacturing and stress inspection protocols.',
    color: '#0D62FE'
  },
  {
    id: 'electrical-mep',
    badge: 'High-Demand GCC & Indian Careers',
    discipline: 'Electrical & Building Services',
    title: 'MEP BIM & HVAC Engineering Internship',
    tools: ['Revit MEP', 'AutoCAD Electrical', 'Navisworks', 'DIALux Evo', 'HVAC Calc'],
    durations: ['1 Month Industrial', '2 Months Specialized', '3-6 Months Master'],
    eligibility: 'B.Tech / Diploma Electrical, Mechanical & Building Services',
    deliverables: [
      'Commercial High-Rise HVAC Ducting & Chilled Water Layouts',
      'Electrical Power Distribution, Single Line Diagrams (SLD) & Lighting',
      'Plumbing, Drainage & Fire Fighting (NFPA) Schematics',
      'MEP Clash Resolution Report & Final Project Clearance'
    ],
    highlight: 'Directly mapped to Middle East (UAE, Qatar, Saudi) MEP consultancy standards.',
    color: '#059669'
  },
  {
    id: 'interior-arch',
    badge: 'Creative Visualizer Track',
    discipline: 'Interior & Architectural Design',
    title: '3D Visualization & Interior Internship',
    tools: ['3ds Max', 'V-Ray / Corona', 'SketchUp Pro', 'Lumion', 'Photoshop'],
    durations: ['15 Days Bootcamp', '1 Month Studio', '3 Months Professional'],
    eligibility: 'B.Arch, B.Des, Interior Design diploma students & enthusiasts',
    deliverables: [
      'Photorealistic Day & Night Interior Lighting Simulation',
      'Modular Kitchen, Wardrobe & Millwork Detailing Sheets',
      'Walkthrough Animation & Virtual Reality Panoramic Tours',
      'Client-Ready Presentation Portfolio with Material Specs'
    ],
    highlight: 'Hands-on practice with luxury residential and commercial fit-out blueprints.',
    color: '#D97706'
  }
];

const PERKS = [
  {
    icon: FileCheck,
    title: 'KTU & University Approved',
    desc: 'Official certificate, attendance logbook, and project report recognized for college academic credits.'
  },
  {
    icon: Building2,
    title: 'Live Site Blueprint Practice',
    desc: 'Work on actual commercial, residential, and industrial construction projects instead of dummy assignments.'
  },
  {
    icon: Cpu,
    title: 'High-Spec Dedicated CAD Lab',
    desc: 'Individual high-performance workstation equipped with authorized software at CADD Centre Manjeri.'
  },
  {
    icon: GraduationCap,
    title: 'Corporate Mentor Guidance',
    desc: '1-on-1 mentorship from seasoned industry professionals and authorized certified instructors.'
  }
];

export default function InternshipsFinbiz({ onOpenDemo }) {
  const [activeTrack, setActiveTrack] = useState(null);
  const [showAllPerks, setShowAllPerks] = useState(false);

  const currentTrack = activeTrack ? INTERNSHIP_TRACKS.find(t => t.id === activeTrack) : null;

  const handleTrackClick = (trackId) => {
    setActiveTrack(prev => (prev === trackId ? null : trackId));
  };

  return (
    <section id="internships" className={`pt-7 sm:pt-9 ${currentTrack ? 'pb-10 sm:pb-14' : 'pb-5 sm:pb-6'} bg-[#FAFAFA] select-none border-t border-gray-100 relative overflow-hidden`}>
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-7 sm:mb-9">
          <div className="space-y-2.5 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
              <Briefcase className="w-3.5 h-3.5 text-[#C4161C]" />
              <span>ACADEMIC &amp; INDUSTRIAL TRAINING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Certified Engineering <br className="hidden sm:inline" />
              Internships &amp; Live Projects
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
              Bridge the gap between campus syllabus and industry execution. University-approved 15-day to 6-month hands-on internships for B.Tech, Polytechnic Diploma, and Architecture students at CADD Centre Manjeri.
            </p>
          </div>

          {/* Quick Stats Banner (Compact 1-row grid on Mobile) */}
          <div className="grid grid-cols-3 sm:flex items-center gap-2 sm:gap-6 bg-white p-3 sm:p-5 rounded-2xl border border-gray-200/80 shadow-xs shrink-0 text-center sm:text-left">
            <div className="pr-1 sm:pr-4 border-r border-gray-100">
              <span className="block text-lg min-[360px]:text-xl sm:text-3xl font-black text-[#111827]">100%</span>
              <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider">KTU / Board</span>
            </div>
            <div className="pr-1 sm:pr-4 border-r border-gray-100">
              <span className="block text-lg min-[360px]:text-xl sm:text-3xl font-black text-[#C4161C]">1500+</span>
              <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider">Interns</span>
            </div>
            <div>
              <span className="block text-lg min-[360px]:text-xl sm:text-3xl font-black text-[#111827]">15–180</span>
              <span className="text-[9.5px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider">Day Batches</span>
            </div>
          </div>
        </div>

        {/* 4 Feature Value Props with Mobile 'View All' Toggle to reduce vertical length */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6">
          {PERKS.map((perk, idx) => {
            const Icon = perk.icon;
            const isHiddenOnMobile = !showAllPerks && idx >= 2;
            return (
              <div
                key={idx}
                className={`${
                  isHiddenOnMobile ? 'hidden sm:block' : 'block'
                } bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-xs hover:border-red-200 hover:shadow-md transition-all duration-200 text-left group`}
              >
                <div className="flex sm:block items-center gap-3 sm:gap-0 mb-2 sm:mb-3.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-50 text-[#C4161C] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#C4161C] group-hover:text-white transition-all">
                    <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#111827] sm:mt-0">{perk.title}</h3>
                </div>
                <p className="text-[11px] sm:text-[12px] text-gray-500 leading-relaxed pl-12 sm:pl-0">{perk.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile View All / Show Less Toggle Button */}
        <div className="sm:hidden flex justify-center mb-5">
          <button
            type="button"
            onClick={() => setShowAllPerks(!showAllPerks)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-200 text-xs font-bold shadow-2xs transition-all cursor-pointer active:scale-95"
          >
            <span>{showAllPerks ? 'Show Less' : 'View All Features (4)'}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${showAllPerks ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Track Selection Tabs - Centered */}
        <div className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 ${currentTrack ? 'mb-6 sm:mb-8' : 'mb-0'}`}>
          {INTERNSHIP_TRACKS.map((track) => {
            const isActive = track.id === activeTrack;
            return (
              <button
                key={track.id}
                type="button"
                onClick={() => handleTrackClick(track.id)}
                className={`group px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-[13px] font-bold whitespace-nowrap transition-all cursor-pointer shadow-xs active:scale-97 flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#C4161C] text-white shadow-md shadow-red-900/20 ring-2 ring-[#C4161C]/30'
                    : 'bg-red-50/80 text-[#C4161C] hover:text-white hover:bg-[#C4161C] border border-red-200 hover:border-[#C4161C] hover:shadow-md'
                }`}
              >
                <span>{track.discipline.split('&')[0].trim()}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isActive ? 'rotate-180 text-white' : 'text-[#C4161C] group-hover:text-white'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Selected Track Detailed Showcase Card (Appears ONLY when clicked) */}
        {currentTrack && (
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden text-left transition-all animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[#C4161C] text-[11px] font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentTrack.badge}</span>
                  </div>
                  <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {currentTrack.discipline}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
                    {currentTrack.title}
                  </h3>
                </div>

                {/* Software Stack Pills */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5">
                    Authorized Software Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentTrack.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
                    What You Will Build &amp; Receive:
                  </h4>
                  <div className="space-y-2.5">
                    {currentTrack.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Highlight Callout */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 font-medium">
                  <strong>Academic Compliance:</strong> {currentTrack.highlight}
                </div>
              </div>

              {/* Right Summary & Application Card (5 cols) */}
              <div className="lg:col-span-5 bg-gray-50/90 rounded-2xl p-6 sm:p-7 border border-gray-200/70 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">
                    Internship Batch Options
                  </h4>
                  <div className="space-y-2">
                    {currentTrack.durations.map((dur, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-xl bg-white border border-gray-200 text-xs font-bold text-gray-800 shadow-xs"
                      >
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#C4161C]" />
                          <span>{dur}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-[#C4161C] font-extrabold bg-red-50 px-2 py-0.5 rounded-md">
                          Admissions Open
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                    Target Eligibility
                  </h4>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    {currentTrack.eligibility}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href="tel:+918714269638"
                    className="w-full py-3.5 px-5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer text-center"
                    title="Call Internship Desk"
                  >
                    <span>Apply For This Internship</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={`https://wa.me/918714269638?text=${encodeURIComponent(
                      `Hi CADD Centre Manjeri, I would like to enquire about the ${currentTrack.title} internship program.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-5 rounded-full bg-white hover:bg-gray-100 text-gray-800 border border-gray-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      </div>
    </section>
  );
}
