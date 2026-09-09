import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  MapPin, 
  Phone, 
  Mail, 
  BookOpen, 
  Navigation, 
  Award,
  Layers,
  Compass,
  Wrench,
  Cpu,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import MagneticButton from './motion/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Footer({ onOpenDemo }) {
  const footerRef = useRef(null);
  const newsletterCardRef = useRef(null);
  const newsletterImgRef = useRef(null);
  const mainFooterRef = useRef(null);
  const columnsRef = useRef(null);
  const affiliationsRef = useRef(null);

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // DESKTOP (>= 1024px)
      mm.add('(min-width: 1024px)', () => {
        if (newsletterCardRef.current) {
          gsap.fromTo(
            newsletterCardRef.current,
            { autoAlpha: 0, y: 35, scale: 0.96 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.85,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: newsletterCardRef.current,
                start: 'top 88%',
                once: true,
              },
            }
          );
        }

        if (newsletterImgRef.current) {
          gsap.fromTo(
            newsletterImgRef.current,
            { clipPath: 'inset(0 100% 0 0)', autoAlpha: 0 },
            {
              clipPath: 'inset(0 0% 0 0)',
              autoAlpha: 1,
              duration: 0.9,
              ease: 'power3.inOut',
              scrollTrigger: {
                trigger: newsletterCardRef.current,
                start: 'top 88%',
                once: true,
              },
            }
          );
        }

        if (columnsRef.current) {
          const cols = columnsRef.current.children;
          gsap.fromTo(
            cols,
            { autoAlpha: 0, y: 25 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.75,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: mainFooterRef.current,
                start: 'top 85%',
                once: true,
              },
            }
          );
        }

        if (affiliationsRef.current) {
          const badges = affiliationsRef.current.children;
          gsap.fromTo(
            badges,
            { autoAlpha: 0, y: 15 },
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.04,
              duration: 0.6,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: affiliationsRef.current,
                start: 'top 92%',
                once: true,
              },
            }
          );
        }
      });

      // MOBILE & TABLET (< 1024px)
      mm.add('(max-width: 1023px)', () => {
        if (newsletterCardRef.current) {
          gsap.fromTo(
            newsletterCardRef.current,
            { autoAlpha: 0, y: 20 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.65,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: newsletterCardRef.current,
                start: 'top 90%',
                once: true,
              },
            }
          );
        }
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const popularCourses = [
    'Civil CADD',
    'Mechanical CADD',
    'Electrical CADD',
    'BIM & Revit',
    'MEP Training',
    'Interior Design',
    'CAD CAM & CAE',
    'STAAD.Pro',
    'Project Planning & Management'
  ];

  const affiliations = [
    { 
      title: 'Autodesk Authorized', 
      desc: 'Training Partner', 
      icon: <Layers className="w-4 h-4 text-[#E94B3C]" /> 
    },
    { 
      title: 'Bentley Systems', 
      desc: 'Channel Partner', 
      icon: <Compass className="w-4 h-4 text-[#E94B3C]" /> 
    },
    { 
      title: 'Dassault Systèmes', 
      desc: 'SOLIDWORKS Partner', 
      icon: <Wrench className="w-4 h-4 text-[#E94B3C]" /> 
    },
    { 
      title: 'PTC Creo Network', 
      desc: 'Authorized Workflows', 
      icon: <Cpu className="w-4 h-4 text-[#E94B3C]" /> 
    },
    { 
      title: 'ISO 9001:2015', 
      desc: 'Certified Quality', 
      icon: <ShieldCheck className="w-4 h-4 text-[#E94B3C]" /> 
    },
    { 
      title: 'PMI Standards', 
      desc: 'Project Management', 
      icon: <BarChart3 className="w-4 h-4 text-[#E94B3C]" /> 
    }
  ];

  return (
    <footer id="contact" ref={footerRef} className="bg-[#F5F4F1] pt-10 pb-8 px-3 sm:px-6 lg:px-8 font-['Plus_Jakarta_Sans',sans-serif] relative">
      <div className="max-w-[1360px] mx-auto">

        {/* ========================================================= */}
        {/* 1. FLOATING OVERLAPPING NEWSLETTER BANNER                 */}
        {/* ========================================================= */}
        <div ref={newsletterCardRef} className="relative z-20 max-w-4xl mx-auto -mb-16 sm:-mb-20 px-3">
          <div className="bg-white rounded-[20px] sm:rounded-[24px] border border-[rgba(28,37,51,0.10)] shadow-[0_16px_48px_rgba(0,0,0,0.08)] p-6 sm:p-8 lg:p-10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              
              {/* Left Visual Illustration (~40%) */}
              <div 
                ref={newsletterImgRef}
                className="hidden md:block md:col-span-5 h-[160px] sm:h-[190px] rounded-[16px] overflow-hidden relative border border-[rgba(28,37,51,0.08)] shadow-2xs group"
              >
                <img
                  src="/images/newsletter-visual.jpg"
                  alt="CAD & Engineering Design Visual"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A20]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/90 bg-[#171A20]/70 px-2 py-0.5 rounded-[4px] border border-white/10 backdrop-blur-xs">
                    Engineering Workflows
                  </span>
                </div>
              </div>

              {/* Right Content & Form (~60%) */}
              <div className="md:col-span-7 space-y-3">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-[#E94B3C]" />
                    <span className="text-[10px] font-bold text-[#E94B3C] uppercase tracking-[0.14em]">
                      ADMISSION &amp; BATCH UPDATES
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#1C2533] tracking-tight leading-snug">
                    Stay Updated with CADD Centre
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#687282] leading-relaxed font-normal">
                    Follow us on Instagram for new batches, upcoming technical workshops, software certifications, campus moments and admission updates in Manjeri.
                  </p>
                </div>

                <div className="pt-1">
                  <MagneticButton strength={0.3}>
                    <a
                      href="https://www.instagram.com/caddcentremanjeri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 rounded-[8px] bg-[#E94B3C] hover:bg-[#D4382A] text-white text-xs sm:text-sm font-bold px-4 py-2.5 shadow-2xs hover:shadow-lg hover:shadow-[#E94B3C]/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] transition-[transform,box-shadow,background-color] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E94B3C] focus-visible:ring-offset-2"
                    >
                      <svg
                        className="w-4 h-4 fill-none stroke-current stroke-2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      <span>Follow on Instagram</span>
                    </a>
                  </MagneticButton>

                  <p className="mt-2 text-[11px] text-[#9299A3]">
                    @caddcentremanjeri
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN FOOTER CONTAINER (Below Floating Banner)           */}
        {/* ========================================================= */}
        <div 
          ref={mainFooterRef}
          className="bg-white rounded-[24px] border border-[rgba(28,37,51,0.10)] shadow-[0_4px_24px_rgba(0,0,0,0.03)] pt-24 sm:pt-28 pb-8 sm:pb-10 px-6 sm:px-10 lg:px-12 space-y-10"
        >

          {/* ======================================================= */}
          {/* 4-COLUMN NATURAL GRID                                   */}
          {/* ======================================================= */}
          <div ref={columnsRef} className="grid grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">

            {/* Column 1: Brand & Socials (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <a 
                href="#"
                className="flex items-center select-none cursor-pointer focus:outline-none"
                aria-label="CADD Centre Manjeri Home"
              >
                <img
                  src="/logo-color.png"
                  alt="CADD Centre Manjeri"
                  className="h-10 sm:h-11 w-auto max-w-[210px] object-contain shrink-0"
                />
              </a>

              <p className="text-xs sm:text-[13px] text-[#687282] font-normal leading-relaxed max-w-sm">
                Build your future with industry-focused training in CAD, BIM, MEP, Interior Design and Project Management. Empowering engineers and designers with practical, career-ready skills.
              </p>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-[10px] font-bold text-[#9299A3] uppercase tracking-wider block mb-2">Connect With Us</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.instagram.com/caddcentremanjeri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] hover:border-[#E94B3C]/50 hover:bg-[#E94B3C]/5 text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    title="Instagram - @caddcentremanjeri"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  <a
                    href="https://www.facebook.com/manjericaddcentre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] hover:border-[#E94B3C]/50 hover:bg-[#E94B3C]/5 text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    title="Facebook - @manjericaddcentre"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <button
                    type="button"
                    onClick={() => alert("LinkedIn page is pending and coming soon! Stay tuned.")}
                    className="w-8 h-8 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] hover:border-[#E94B3C]/50 hover:bg-[#E94B3C]/5 text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs cursor-pointer"
                    title="LinkedIn (Coming Soon)"
                    aria-label="LinkedIn (Coming Soon)"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </button>

                  <a
                    href="https://www.youtube.com/@caddcentremanjeri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-[8px] bg-[#F5F4F1] border border-[rgba(28,37,51,0.10)] hover:border-[#E94B3C]/50 hover:bg-[#E94B3C]/5 text-[#1C2533] hover:text-[#E94B3C] flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-2xs"
                    title="YouTube - @caddcentremanjeri"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Popular Courses (3 Cols) */}
            <div className="lg:col-span-3 text-xs sm:text-[13px] space-y-3">
              <h4 className="font-bold text-[#1C2533] text-sm flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E94B3C]" />
                <span>Popular Courses</span>
              </h4>
              <ul className="grid grid-cols-1 gap-2 font-medium text-[#687282]">
                {popularCourses.map((course, idx) => (
                  <li key={idx}>
                    <a
                      href="#features"
                      className="hover:text-[#E94B3C] transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C] shrink-0 group-hover:scale-125 transition-transform" />
                      <span>{course}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Quick Links (2 Cols) */}
            <div className="lg:col-span-2 text-xs sm:text-[13px] space-y-3">
              <h4 className="font-bold text-[#1C2533] text-sm flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#E94B3C]" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-2 font-medium text-[#687282]">
                <li>
                  <a href="#" className="hover:text-[#E94B3C] transition-colors block text-left cursor-pointer">
                    Home
                  </a>
                </li>
                <li><a href="#about" className="hover:text-[#E94B3C] transition-colors block">About Us</a></li>
                <li><a href="#features" className="hover:text-[#E94B3C] transition-colors block">Courses</a></li>
                <li><a href="#placement" className="hover:text-[#E94B3C] transition-colors block">Placements</a></li>
                <li>
                  <a href="#events" className="hover:text-[#E94B3C] transition-colors block">
                    Events
                  </a>
                </li>
                <li><a href="#testimonials" className="hover:text-[#E94B3C] transition-colors block">Reviews</a></li>
                <li>
                  <button onClick={onOpenDemo} className="hover:text-[#E94B3C] transition-colors text-left cursor-pointer font-bold text-[#E94B3C] flex items-center gap-1">
                    <span>Enquiry</span>
                    <span className="text-xs">↗</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Details (3 Cols) */}
            <div className="lg:col-span-3 text-xs sm:text-[13px] space-y-3.5">
              <a
                href="https://g.page/r/CYw2bmKW2VoSEAE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#1C2533] hover:text-[#E94B3C] transition-colors text-sm flex items-center gap-2 group cursor-pointer"
                title="View CADD Centre Manjeri on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#E94B3C] group-hover:scale-110 transition-transform shrink-0" />
                <span>CADD Centre Manjeri</span>
              </a>

              <div className="space-y-3 text-[#687282]">
                <div>
                  <span className="text-[10px] font-bold text-[#9299A3] uppercase tracking-wider block">Address</span>
                  <a
                    href="https://g.page/r/CYw2bmKW2VoSEAE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block font-medium text-[#1C2533] mt-0.5 leading-snug hover:text-[#E94B3C] transition-colors cursor-pointer"
                    title="Get directions to CADD Centre Manjeri on Google Maps"
                  >
                    <span>
                      2nd Floor, KORAMBAYIL CORPORATE MALL,<br />
                      Calicut Road, above Dhanlaxmi Bank,<br />
                      Manjeri, Kerala 676121
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#E94B3C] mt-1.5 group-hover:underline">
                      <Navigation className="w-3 h-3" />
                      <span>Get Directions on Google Maps ↗</span>
                    </span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[#9299A3] uppercase tracking-wider block mb-1">Dedicated Concierge Lines</span>
                  <div className="font-medium text-[#1C2533] space-y-1">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#687282]">Enquiry:</span>
                      <a href="tel:+918891550060" className="font-semibold hover:text-[#E94B3C] transition-colors">
                        +91 88915 50060
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#687282]">Admissions:</span>
                      <a href="tel:+918891850060" className="font-semibold hover:text-[#E94B3C] transition-colors">
                        +91 88918 50060
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#687282]">Placements:</span>
                      <a href="tel:+919544169638" className="font-semibold hover:text-[#E94B3C] transition-colors">
                        +91 95441 69638
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#687282]">Internships:</span>
                      <a href="tel:+918714269638" className="font-semibold hover:text-[#E94B3C] transition-colors">
                        +91 87142 69638
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#687282]">Projects:</span>
                      <a href="tel:+916235550078" className="font-semibold hover:text-[#E94B3C] transition-colors">
                        +91 62355 50078
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold text-[#9299A3] uppercase tracking-wider block">Email</span>
                  <a href="mailto:manjeri@caddcentre.com" className="font-medium text-[#1C2533] mt-0.5 flex items-start gap-1.5 hover:text-[#E94B3C] transition-colors min-w-0">
                    <Mail className="w-3 h-3 text-[#E94B3C] shrink-0 mt-0.5" />
                    <span className="min-w-0 break-all">manjeri@caddcentre.com</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* ======================================================= */}
          {/* SECTION 2: AFFILIATIONS & INDUSTRY RECOGNITION          */}
          {/* ======================================================= */}
          <div className="pt-6 border-t border-[rgba(28,37,51,0.08)] space-y-3">
            <div className="flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#E94B3C]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#1C2533] uppercase tracking-[0.14em]">
                AFFILIATIONS &amp; INDUSTRY RECOGNITION
              </span>
            </div>

            <div ref={affiliationsRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-1">
              {affiliations.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 text-left border-l-2 border-[#E94B3C]/30 pl-2.5 py-1 hover:border-[#E94B3C] transition-all group"
                >
                  <div className="p-1.5 rounded-[8px] bg-white border border-[rgba(28,37,51,0.08)] shadow-2xs group-hover:border-[#E94B3C]/40 group-hover:bg-[#E94B3C]/5 group-hover:scale-105 transition-all shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <p className="text-xs font-bold text-[#1C2533] leading-snug group-hover:text-[#E94B3C] transition-colors truncate sm:whitespace-normal">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-[#687282] leading-tight truncate sm:whitespace-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================= */}
          {/* SECTION 3: COMPACT BOTTOM LEGAL & COPYRIGHT ROW         */}
          {/* ======================================================= */}
          <div className="pt-4 border-t border-[rgba(28,37,51,0.08)] flex flex-col md:flex-row items-center justify-between text-xs text-[#687282] gap-3">
            <p>© 2026 CADD Centre Manjeri. All Rights Reserved.</p>

            <div className="flex flex-wrap items-center gap-3 text-[#687282] font-semibold text-[11px]">
              <a href="#" className="hover:text-[#E94B3C] transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-[#E94B3C] transition-colors">Terms &amp; Conditions</a>
              <span>•</span>
              <a href="#" className="hover:text-[#E94B3C] transition-colors">Refund Policy</a>
            </div>

            <p className="text-[11px] text-[#9299A3] font-medium">
              Designed for future engineers &amp; designers.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
