import React from 'react';
import {
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  Building2
} from 'lucide-react';

function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function InstagramGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function FooterFinbiz({ onOpenDemo, onOpenCallDirectory }) {
  return (
    <footer id="footer" className="bg-[#090D14] text-white pt-16 sm:pt-20 pb-12 relative overflow-hidden select-none text-left font-['Plus_Jakarta_Sans',sans-serif]">

      {/* Background Blueprint Mesh & Ambient Radial Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#C4161C/10,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#FF5A43/6,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ========================================================= */}
        {/* 2. 4-COLUMN RICH INFORMATION ARCHITECTURE                 */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-16 border-b border-white/10">

          {/* COLUMN 1: INSTITUTE BRAND & DIRECT CONTACT DIRECTORY */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-[#C4161C] text-white font-black text-xs tracking-wider uppercase">
                CADD CENTRE
              </span>
              <span className="text-xs font-bold text-gray-300 tracking-wider uppercase">
                MANJERI CAMPUS
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed">
              Kerala&apos;s benchmark engineering CAD, BIM, Structural &amp; Project Planning training institute. Equipping civil, mechanical, and architectural engineers with globally accredited certifications for 30+ years.
            </p>

            {/* Direct Contact Directory */}
            <div className="space-y-2.5 pt-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C4161C] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/dir//CADD+Centre+%7C+CAD+%7C+Interior+Design+%7C+BIM+%7C+MEP+%7C+Primavera+%7C+Product+Design+Training+in+Manjeri,+Malappuram,+2nd+Floor,+KORAMBAYIL+CORPORATE+MALL,+Calicut+Rd,+above+Dhanlaxmi+Bank,+Karuvambram,+Manjeri,+Kerala+676121/@11.2716965,75.7557343,13.03z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba6366fe440b235:0x125ad996626e368c!2m2!1d76.1194379!2d11.120027?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white leading-snug transition-colors"
                  title="Open Google Maps directions to CADD Centre Manjeri"
                >
                  2nd Floor, Korambayil Corporate Mall, Calicut Rd, Above Dhanlaxmi Bank, Manjeri — 676121
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C4161C] shrink-0" />
                <button
                  type="button"
                  onClick={onOpenCallDirectory}
                  className="hover:text-white font-semibold transition-colors cursor-pointer text-left text-xs text-gray-300"
                  title="Click to view all department lines (+91 88915 50060)"
                >
                  +91 88915 50060
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C4161C] shrink-0" />
                <a href="mailto:info@caddmanjeri.com" className="hover:text-white text-gray-400 transition-colors">
                  info@caddmanjeri.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/918891550060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-emerald-400 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Admissions Desk</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <InstagramGlyph className="w-4 h-4 text-pink-400 shrink-0" />
                <a
                  href="https://www.instagram.com/caddcentremanjeri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-pink-300 font-semibold transition-colors flex items-center gap-1"
                >
                  <span>@caddcentremanjeri</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: 8 FLAGSHIP ENGINEERING DISCIPLINES */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A43] border-b border-white/10 pb-2 whitespace-nowrap">
              Engineering Disciplines
            </h4>

            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Master Certificate in BIM (Revit, Navisworks)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Interior Design (3ds Max, V-Ray, SketchUp)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Structural Design &amp; FEA (ETABS, STAAD.Pro)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> MEP with BIM Engineering (HVAC &amp; Fire)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Mechanical CAD (SolidWorks, CATIA V5)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Surveying &amp; Infrastructure (Civil 3D)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Project Planning &amp; Management (Primavera P6)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="text-[#C4161C] text-[10px]">■</span> Architectural AutoCAD 2D/3D
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: CAREER & PLACEMENT SUPPORT */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A43] border-b border-white/10 pb-2 whitespace-nowrap">
              Career &amp; Placement Support
            </h4>

            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>
                <a href="#placements" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>100% Placement Assistance Desk</span>
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Gulf (UAE, Qatar, KSA) Placement Desk</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Autodesk Certificate Verification</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Dual-Display Workstation Lab Access</span>
                </a>
              </li>
              <li>
                <a href="#campus-life" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Campus Life &amp; Live Site Visits</span>
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Resume &amp; Technical Portfolio Mentoring</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-[#FF5A43] font-bold cursor-pointer"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                  <span>Book Free 1-on-1 Counseling</span>
                </button>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: LAB SCHEDULES & DIRECT ENQUIRY */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FF5A43] border-b border-white/10 pb-2 whitespace-nowrap">
              Lab &amp; Batch Timings
            </h4>

            <div className="space-y-2.5 text-xs text-gray-400">
              {/* Regular Batches */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF5A43]" />
                  <span>Regular Weekday Batches</span>
                </div>
                <div className="text-[11.5px] text-gray-300 font-mono">
                  Mon – Fri: 08:30 AM – 07:30 PM
                </div>
              </div>

              {/* Weekend Batches */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-white font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Weekend Batches</span>
                </div>
                <div className="text-[11.5px] text-gray-300 font-mono">
                  Saturday: 09:00 AM – 06:00 PM
                </div>
                <div className="text-[10.5px] text-amber-400 font-semibold">
                  Sunday: Working Professionals Track
                </div>
              </div>

              {/* Fast Track Note */}
              <div className="text-[11px] text-gray-400 leading-relaxed">
                * Fast-track crash batches &amp; live project guidance available.
              </div>

              {/* CTA Button */}
              <button
                type="button"
                onClick={onOpenDemo}
                className="w-full py-3 px-4 rounded-xl bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer active:scale-97 text-center block"
              >
                Request Course Enquiry
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. BOTTOM COPYRIGHT, LEGAL & VERIFICATION BAR             */}
        {/* ========================================================= */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} CADD Centre Manjeri — Kerala&apos;s Benchmark Engineering &amp; CAD/BIM Training Hub. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-gray-400">
            <button
              type="button"
              onClick={onOpenDemo}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Admissions Policy
            </button>
            <span className="text-gray-700">•</span>
            <button
              type="button"
              onClick={onOpenDemo}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Certificate Verification
            </button>
            <span className="text-gray-700">•</span>
            <button
              type="button"
              onClick={onOpenDemo}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Placement Cell Guidelines
            </button>
            <span className="text-gray-700">•</span>
            <span className="text-gray-500">ISO 9001:2015 Verified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
