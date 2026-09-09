import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FileText, UserCheck, FolderCheck, Compass, CheckCircle2, Building, ArrowUpRight, X, ChevronLeft, ChevronRight, Award, Sparkles, ZoomIn, ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import useAutoCarousel from '../hooks/useAutoCarousel';

// 17 Authentic Placed Student Images from assets/placestudents
import imgHanna from '../assets/placestudents/Hanna.png';
import imgHijas from '../assets/placestudents/Hijas.png';
import imgJasmin from '../assets/placestudents/Jasmin.png';
import imgJithin from '../assets/placestudents/Jithin.png';
import imgPeter from '../assets/placestudents/Peter.png';
import imgVipin from '../assets/placestudents/Vipin.png';
import imgShahla from '../assets/placestudents/Shahla.png';
import imgSalman from '../assets/placestudents/Salman.png';

import imgDilshad from '../assets/placestudents/IMG_0058.PNG';
import imgAnsar from '../assets/placestudents/IMG_0059.PNG';
import imgAnshad from '../assets/placestudents/IMG_0060.PNG';
import imgZiyad from '../assets/placestudents/IMG_0061.PNG';
import imgSreni from '../assets/placestudents/IMG_0063.JPEG';
import imgVignesh from '../assets/placestudents/IMG_0065.JPEG';
import imgSuhail from '../assets/placestudents/IMG_0069.JPEG';
import imgAshique from '../assets/placestudents/IMG_0070.PNG';
import imgShehin from '../assets/placestudents/IMG_0071.PNG';

// Placed Students Data with rich metadata
export const placedStudentsList = [
  {
    id: 'placed-hanna',
    name: 'Hanna',
    role: 'Designer',
    company: 'Design & Architecture',
    img: imgHanna,
    alt: 'Hanna - Placed as Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-hijas',
    name: 'Hijas',
    role: 'BIM Modeler',
    company: 'BIM Consultancy',
    img: imgHijas,
    alt: 'Hijas - Placed as BIM Modeler from CADD Centre Manjeri',
  },
  {
    id: 'placed-jasmin',
    name: 'Jasmin',
    role: 'CAD Draftman',
    company: 'Engineering Consultancy',
    img: imgJasmin,
    alt: 'Jasmin - Placed as CAD Draftman from CADD Centre Manjeri',
  },
  {
    id: 'placed-jithin',
    name: 'Jithin',
    role: 'Site Engineer',
    company: 'Infrastructure & Construction',
    img: imgJithin,
    alt: 'Jithin - Placed as Site Engineer from CADD Centre Manjeri',
  },
  {
    id: 'placed-peter',
    name: 'Peter',
    role: 'Site Engineer',
    company: 'Construction & Civil',
    img: imgPeter,
    alt: 'Peter - Placed as Site Engineer from CADD Centre Manjeri',
  },
  {
    id: 'placed-vipin',
    name: 'Vipin',
    role: 'Designer',
    company: 'Design Studio',
    img: imgVipin,
    alt: 'Vipin - Placed as Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-shahla',
    name: 'Shahla',
    role: 'CAD Designer',
    company: 'Architectural Consultancy',
    img: imgShahla,
    alt: 'Shahla - Placed as CAD Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-salman',
    name: 'Salman',
    role: 'Designer',
    company: 'Engineering Studio',
    img: imgSalman,
    alt: 'Salman - Placed as Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-dilshad',
    name: 'Dilshad',
    role: 'MEP Designer',
    company: 'Focus MEP Solutions',
    img: imgDilshad,
    alt: 'Dilshad - Placed as MEP Designer at Focus MEP Solutions from CADD Centre Manjeri',
  },
  {
    id: 'placed-ansar',
    name: 'Ansar',
    role: 'Draughtsman',
    company: 'Engineering Consultancy',
    img: imgAnsar,
    alt: 'Ansar - Placed as Draughtsman from CADD Centre Manjeri',
  },
  {
    id: 'placed-anshad',
    name: 'Anshad',
    role: 'Product Designer',
    company: 'Product Design Studio',
    img: imgAnshad,
    alt: 'Anshad - Placed as Product Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-ziyad',
    name: 'Ziyad',
    role: 'Draughtsman',
    company: 'Architectural Drafting',
    img: imgZiyad,
    alt: 'Ziyad - Placed as Draughtsman from CADD Centre Manjeri',
  },
  {
    id: 'placed-sreni',
    name: 'Sreni',
    role: '3D Designer',
    company: '3D Visualization Firm',
    img: imgSreni,
    alt: 'Sreni - Placed as 3D Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-vignesh',
    name: 'Vignesh',
    role: 'Product Designer',
    company: 'Industrial Design Firm',
    img: imgVignesh,
    alt: 'Vignesh - Placed as Product Designer from CADD Centre Manjeri',
  },
  {
    id: 'placed-suhail',
    name: 'Suhail',
    role: 'Designer',
    company: 'SeoskoServ Private Limited',
    img: imgSuhail,
    alt: 'Suhail - Placed as Designer at SeoskoServ Private Limited from CADD Centre Manjeri',
  },
  {
    id: 'placed-ashique',
    name: 'Ashique',
    role: 'Designer',
    company: 'SeoskoServ Private Limited',
    img: imgAshique,
    alt: 'Ashique - Placed as Designer at SeoskoServ Private Limited from CADD Centre Manjeri',
  },
  {
    id: 'placed-shehin',
    name: 'Shehin',
    role: 'Interior Designer',
    company: 'Ajiro Solutions',
    img: imgShehin,
    alt: 'Shehin - Placed as Interior Designer at Ajiro Solutions from CADD Centre Manjeri',
  },
];

// Single Portrait Card with crisp border and subtle interactive hover
function PortraitCard({ student, className = "", onClick }) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick?.()}
      className={`group relative rounded-[16px] xl:rounded-[18px] overflow-hidden border-2 border-white/95 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:shadow-[0_16px_36px_rgba(233,75,60,0.18)] hover:scale-[1.04] transition-all duration-300 cursor-pointer select-none ${className}`}
      title={`${student.name} - ${student.role} (${student.company})`}
    >
      <img
        src={student.img}
        alt={student.alt}
        className="w-full h-full object-cover object-center pointer-events-none"
        loading="eager"
      />
      {/* Subtle hover overlay hint with Zoom icon */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5">
        <div className="flex items-center justify-between text-white text-[11px] font-semibold">
          <span className="truncate pr-1">{student.name}</span>
          <ZoomIn className="w-3.5 h-3.5 shrink-0 text-white/90" />
        </div>
      </div>
    </div>
  );
}

// Stepped Flow Cluster with smooth rotation
function SteppedFlowCluster({ items, isRight = false, interval = 2600, cardSize = "", onSelectCard }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const getSlot = (slotIdx) => {
    const innerX = isRight ? -190 : 190;
    const offstageX = isRight ? 205 : -205;

    switch (slotIdx) {
      case 0:
        return { x: 0, y: 0, opacity: 1, scale: 1, zIndex: 10 };
      case 1:
        return { x: innerX, y: 65, opacity: 1, scale: 1, zIndex: 15 };
      case 2:
        return { x: innerX, y: 295, opacity: 1, scale: 1, zIndex: 15 };
      case 3:
        return { x: 0, y: 360, opacity: 1, scale: 1, zIndex: 10 };
      case 4:
        return { x: offstageX, y: 360, opacity: 0, scale: 0.88, zIndex: 0 };
      default:
        return { x: offstageX, y: 0, opacity: 0, scale: 0.88, zIndex: 0 };
    }
  };

  return (
    <div className="relative w-[340px] xl:w-[370px] 2xl:w-[390px] h-[550px] xl:h-[575px] 2xl:h-[600px] pointer-events-auto">
      {items.map((card, i) => {
        const currentSlot = (i + step) % items.length;
        const style = getSlot(currentSlot);

        return (
          <motion.div
            key={card.id}
            initial={false}
            animate={{
              x: style.x,
              y: style.y,
              opacity: style.opacity,
              scale: style.scale,
              zIndex: style.zIndex,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`absolute ${isRight ? 'right-0' : 'left-0'} top-0 transform-gpu will-change-transform will-change-opacity`}
          >
            <PortraitCard
              student={card}
              className={cardSize}
              onClick={() => onSelectCard(card)}
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function PlacementSection({ onOpenDemo }) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isPillarsExpanded, setIsPillarsExpanded] = useState(false);

  // Placed-students rail on mobile / tablet: advances on its own, pauses while
  // the viewer is interacting with it or the poster lightbox is open.
  const { railProps, index: railIndex, goTo: goToStudent } = useAutoCarousel(
    placedStudentsList.length,
    { paused: !!selectedStudent }
  );

  // Left wing items (9 items)
  const leftCards = [
    placedStudentsList[0], // Hanna (Designer)
    placedStudentsList[1], // Hijas (BIM Modeler)
    placedStudentsList[2], // Jasmin (CAD Draftman)
    placedStudentsList[3], // Jithin (Site Engineer)
    placedStudentsList[8], // Dilshad (MEP Designer)
    placedStudentsList[9], // Ansar (Draughtsman)
    placedStudentsList[10], // Anshad (Product Designer)
    placedStudentsList[11], // Ziyad (Draughtsman)
    placedStudentsList[12], // Sreni (3D Designer)
  ];

  // Right wing items (8 items)
  const rightCards = [
    placedStudentsList[4], // Peter (Site Engineer)
    placedStudentsList[5], // Vipin (Designer)
    placedStudentsList[6], // Shahla (CAD Designer)
    placedStudentsList[7], // Salman (Designer)
    placedStudentsList[13], // Vignesh (Product Designer)
    placedStudentsList[14], // Suhail (Designer - SeoskoServ)
    placedStudentsList[15], // Ashique (Designer - SeoskoServ)
    placedStudentsList[16], // Shehin (Interior Designer - Ajiro)
  ];

  // Placement Pillars
  const placementPillars = [
    {
      icon: FileText,
      title: "Resume & Portfolio Guidance",
      desc: "Industry-standard CAD portfolio structuring & technical project documentation."
    },
    {
      icon: UserCheck,
      title: "Interview Preparation",
      desc: "Technical mock interviews, drafting speed assessments, and professional communication."
    },
    {
      icon: FolderCheck,
      title: "Industry-Oriented Projects",
      desc: "Live project workflows matching real engineering and architectural deliverables."
    },
    {
      icon: Compass,
      title: "Career Counselling",
      desc: "One-on-one mentorship identifying optimal discipline paths across Civil, BIM, Mechanical & MEP."
    }
  ];

  const cardSize = "w-[138px] h-[172px] sm:w-[145px] sm:h-[181px] lg:w-[152px] lg:h-[190px] xl:w-[162px] xl:h-[202px] 2xl:w-[172px] 2xl:h-[215px]";

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedStudent(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="placement" className="relative py-10 sm:py-20 lg:py-24 bg-[#F5F4F1] overflow-hidden min-h-0 sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]">
      <div id="team" className="absolute -top-12 left-0 pointer-events-none" />
      <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col lg:flex-row items-center justify-between lg:h-[610px] 2xl:h-[650px]">

        {/* LEFT ANIMATED CARD FLOW CLUSTER */}
        <div className="hidden lg:flex flex-1 justify-start">
          <SteppedFlowCluster
            items={leftCards}
            isRight={false}
            interval={2600}
            cardSize={cardSize}
            onSelectCard={setSelectedStudent}
          />
        </div>

        {/* CENTER PLACEMENT CELL CONTENT BLOCK */}
        <div className="relative z-20 text-center max-w-[490px] xl:max-w-[530px] mx-auto px-4 flex flex-col items-center flex-shrink-0 my-8 lg:my-0">

          {/* Squircle Icon Box */}
          <div className="w-12 h-12 rounded-[12px] bg-white shadow-sm border border-[rgba(28,37,51,0.10)] flex items-center justify-center text-[#E94B3C] mb-3.5">
            <Briefcase className="w-6 h-6 stroke-[1.8]" />
          </div>

          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-sm bg-[#E94B3C]" />
            <span className="text-[11px] font-bold text-[#E94B3C] uppercase tracking-[0.14em]">
              PLACEMENT CELL
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C2533] tracking-tight leading-[1.15]">
            From Skills to<br />
            <span className="text-[#E94B3C]">
              Career Opportunities.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-[#687282] font-normal leading-relaxed max-w-md">
            Practical training is only the beginning. Our dedicated placement cell helps students prepare for technical interviews, portfolio presentations, and professional engineering opportunities across India and the Middle East.
          </p>

          {/* Placement Services 2x2 Grid (Mobile: Card 1 + expandable Cards 2-4, Desktop: 2-column grid) */}
          <div className="mt-5 w-full text-left sm:grid sm:grid-cols-2 sm:gap-2.5">
            {/* Card 01 - Always visible on mobile with expand toggle button */}
            <div
              className="bg-white border border-[rgba(28,37,51,0.10)] rounded-[12px] p-3 shadow-2xs space-y-1 hover:border-[#E94B3C]/30 transition-colors cursor-pointer sm:cursor-default"
              onClick={() => setIsPillarsExpanded((prev) => !prev)}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-4 h-4 text-[#E94B3C] shrink-0" />
                  <h3 className="text-xs font-bold text-[#1C2533] truncate sm:whitespace-normal">
                    {placementPillars[0].title}
                  </h3>
                </div>

                {/* Mobile Expand / Collapse Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPillarsExpanded((prev) => !prev);
                  }}
                  className="sm:hidden shrink-0 w-6 h-6 rounded-full bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] text-[#E94B3C] flex items-center justify-center shadow-xs active:scale-90 transition-all cursor-pointer hover:bg-[#E94B3C] hover:text-white"
                  aria-label={isPillarsExpanded ? "Show fewer services" : "Expand all placement services"}
                  aria-expanded={isPillarsExpanded}
                >
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ease-out ${
                      isPillarsExpanded ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>
              <p className="text-[11px] text-[#687282] leading-tight">
                {placementPillars[0].desc}
              </p>
            </div>

            {/* Cards 02, 03, 04 - Expandable on mobile with smooth transition, direct 2x2 grid on desktop */}
            <div
              className={`transition-all duration-300 ease-in-out sm:contents ${
                isPillarsExpanded
                  ? 'grid grid-rows-[1fr] opacity-100 mt-2.5 sm:mt-0'
                  : 'grid grid-rows-[0fr] opacity-0 pointer-events-none sm:pointer-events-auto sm:opacity-100 sm:mt-0'
              }`}
            >
              <div className="overflow-hidden sm:overflow-visible sm:contents">
                <div className="flex flex-col gap-2.5 sm:contents">
                  {placementPillars.slice(1).map((pillar, idx) => {
                    const IconComp = pillar.icon;
                    return (
                      <div
                        key={idx + 1}
                        className="bg-white border border-[rgba(28,37,51,0.10)] rounded-[12px] p-3 shadow-2xs space-y-1 hover:border-[#E94B3C]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <IconComp className="w-4 h-4 text-[#E94B3C] shrink-0" />
                          <h3 className="text-xs font-bold text-[#1C2533]">{pillar.title}</h3>
                        </div>
                        <p className="text-[11px] text-[#687282] leading-tight">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Direct Placement Assistance Banner */}
          <div className="mt-4 p-3 bg-white border border-[rgba(28,37,51,0.10)] rounded-[12px] text-left w-full shadow-2xs flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Building className="w-4 h-4 text-emerald-600 shrink-0" />
              <p className="text-[11px] font-bold text-[#1C2533]">
                100+ Placement Partners &amp; Industry Network
              </p>
            </div>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-[4px] border border-emerald-200">
              Active Support
            </span>
          </div>

          {/* CTA Button */}
          <div className="mt-5">
            <Button onClick={onOpenDemo} variant="primary" size="md">
              Enquire Placement Assistance
            </Button>
          </div>

        </div>

        {/* RIGHT ANIMATED CARD FLOW CLUSTER */}
        <div className="hidden lg:flex flex-1 justify-end">
          <SteppedFlowCluster
            items={rightCards}
            isRight={true}
            interval={2600}
            cardSize={cardSize}
            onSelectCard={setSelectedStudent}
          />
        </div>

        {/* AUTO-ADVANCING PLACED-STUDENTS CAROUSEL (mobile & tablet) */}
        <div className="lg:hidden w-full mt-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E94B3C]" />
              <span className="text-[12px] font-bold text-[#1C2533]">Recent Placed Students</span>
            </div>
            <span className="text-[11px] font-medium text-[#687282]">
              {placedStudentsList.length} Success Stories
            </span>
          </div>

          <div
            {...railProps}
            className="flex gap-3 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory no-scrollbar scroll-smooth"
          >
            {placedStudentsList.map((student, idx) => (
              <div
                key={student.id}
                className={`snap-center shrink-0 w-[150px] sm:w-[168px] transition-opacity duration-300 ${
                  idx === railIndex ? 'opacity-100' : 'opacity-70'
                }`}
              >
                <PortraitCard
                  student={student}
                  className="w-full aspect-[4/5]"
                  onClick={() => setSelectedStudent(student)}
                />
                <div className="mt-1.5 text-center">
                  <p className="text-[12px] font-bold text-[#1C2533] truncate">{student.name}</p>
                  <p className="text-[10px] text-[#E94B3C] font-semibold truncate">{student.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Position dots — also let the viewer jump straight to a student */}
          <div className="flex items-center justify-center gap-1.5 mt-1">
            {placedStudentsList.map((student, idx) => (
              <button
                key={student.id}
                type="button"
                onClick={() => goToStudent(idx)}
                aria-label={`Show ${student.name}`}
                className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  idx === railIndex ? 'w-4 bg-[#E94B3C]' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* INTERACTIVE FULL-RES POSTER LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedStudent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStudent(null)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl overflow-hidden max-w-sm sm:max-w-md w-full shadow-2xl border border-white/40"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStudent(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors shadow-md"
                aria-label="Close poster view"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Poster Image */}
              <div className="relative w-full aspect-[4/5] bg-slate-100">
                <img
                  src={selectedStudent.img}
                  alt={selectedStudent.alt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Footer info bar */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#1C2533]">{selectedStudent.name}</h4>
                  <p className="text-xs text-[#E94B3C] font-semibold">{selectedStudent.role} &bull; {selectedStudent.company}</p>
                </div>
                <button
                  onClick={() => {
                    setSelectedStudent(null);
                    onOpenDemo?.();
                  }}
                  className="text-xs font-bold text-[#E94B3C] hover:underline flex items-center gap-1"
                >
                  Join Course <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

