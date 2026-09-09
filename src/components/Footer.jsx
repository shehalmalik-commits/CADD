import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Globe } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Courses', href: '#features' },
    { label: 'Placements', href: '#placement' },
    { label: 'Campus Happenings & Reels', href: '#events' },
    { label: 'Student Reviews', href: '#testimonials' },
  ];

  const popularCourses = [
    'Civil CADD',
    'Mechanical CADD',
    'Electrical CADD',
    'BIM & Revit',
    'MEP Training',
    'Interior Design',
    'CAD CAM & CAE',
    'STAAD.Pro',
    'Project Planning & Management',
  ];

  return (
    <footer className="relative bg-white text-[#1C2533] font-['Plus_Jakarta_Sans',sans-serif] pt-16 sm:pt-24 select-none">
      
      {/* ========================================================= */}
      {/* FLOATING HERO BANNER CARD (Overlapping Top of Footer)     */}
      {/* ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 -mt-28 sm:-mt-36 lg:-mt-44 relative z-20">
        <div 
          className="rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 text-center shadow-2xl relative overflow-hidden border border-white/10"
          style={{
            background: 'radial-gradient(circle at 50% 15%, #6B1717 0%, #2A0909 55%, #120404 100%)',
          }}
        >
          {/* Subtle Ambient Red Glow inside the card */}
          <div 
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-[#E94B3C]/20 blur-[90px] pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-black tracking-tight text-white leading-tight">
              Ready to transform your CAD &amp; BIM<br className="hidden sm:inline" /> engineering career?
            </h3>

            <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed max-w-2xl mx-auto">
              Book a free career evaluation session and discover how CADD Centre Manjeri can launch your professional career across India &amp; the Middle East.
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={onOpenDemo}
                className="bg-white hover:bg-slate-100 text-[#1C2533] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-2xl inline-flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Free Career Evaluation</span>
                <ArrowUpRight className="w-4 h-4 text-[#E94B3C]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MAIN FOOTER BODY (Pure White Background)                  */}
      {/* ========================================================= */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        
        {/* Brand Bar: Logo & Subtitle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-[rgba(28,37,51,0.10)]">
          <a href="#" className="shrink-0 flex items-center">
            <img
              src="/logo-color.png"
              alt="CADD Centre Manjeri"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          <p className="text-xs sm:text-[13px] text-[#687282] font-medium text-center sm:text-right max-w-md">
            Industry-focused technical training in CAD, BIM, MEP, Interior Design &amp; Project Management.
          </p>
        </div>

        {/* 4-Columns Grid */}
        <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#1C2533] tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#687282]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-[#E94B3C] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="text-[#E94B3C] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer pt-1"
                >
                  <span>Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Popular Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#1C2533] tracking-tight">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px] text-[#687282]">
              {popularCourses.map((course) => (
                <li key={course} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C] shrink-0" />
                  <a href="#features" className="hover:text-[#E94B3C] transition-colors">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-[#1C2533] tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-[#687282]">
              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E94B3C]/10 text-[#E94B3C] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <a href="mailto:manjeri@caddcentre.com" className="hover:text-[#E94B3C] transition-colors break-all">
                    manjeri@caddcentre.com
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E94B3C]/10 text-[#E94B3C] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <div>
                    <a href="tel:+918891550060" className="hover:text-[#E94B3C] transition-colors">
                      +91 88915 50060
                    </a>
                  </div>
                  <div>
                    <a href="tel:+917025569638" className="hover:text-[#E94B3C] transition-colors">
                      +91 70255 69638
                    </a>
                  </div>
                  <div>
                    <a href="tel:+919544369638" className="hover:text-[#E94B3C] transition-colors">
                      +91 95443 69638
                    </a>
                  </div>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#E94B3C]/10 text-[#E94B3C] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="leading-relaxed">
                  2nd Floor, Korambayil Corporate Mall, Calicut Road, Above Dhanlaxmi Bank, Manjeri, Kerala 676121
                </p>
              </li>
            </ul>
          </div>

          {/* Col 4: Branch & Social */}
          <div className="lg:col-span-2 flex flex-col items-start lg:items-end justify-between">
            <div className="space-y-4 w-full lg:text-right">
              {/* Branch Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[rgba(28,37,51,0.12)] bg-[#F5F4F1] text-xs font-semibold text-[#1C2533]">
                <Globe className="w-3.5 h-3.5 text-[#E94B3C]" />
                <span>Manjeri, Kerala</span>
              </div>

              {/* Follow Us */}
              <div className="pt-2">
                <p className="text-[11px] font-bold text-[#9299A3] uppercase tracking-wider mb-2.5">
                  FOLLOW US
                </p>
                <div className="flex items-center gap-2 lg:justify-end">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1C2533] hover:bg-[#E94B3C] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/caddcentremanjeri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1C2533] hover:bg-[#E94B3C] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    aria-label="Instagram"
                  >
                    <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1C2533] hover:bg-[#E94B3C] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    aria-label="Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#1C2533] hover:bg-[#E94B3C] text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
                    aria-label="YouTube"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="border-t border-[rgba(28,37,51,0.08)] pt-6 mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9299A3]">
          <p>&copy; {new Date().getFullYear()} CADD Centre Manjeri. All rights reserved.</p>
          <p className="text-center sm:text-right">The World’s Largest CAD, Interior Design, MEP, BIM &amp; PPM Training Network.</p>
        </div>

      </div>

    </footer>
  );
}
