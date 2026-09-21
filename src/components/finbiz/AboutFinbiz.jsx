import React, { useState } from 'react';
import { Target, CheckCircle2, Phone, MapPin } from 'lucide-react';
import CallDirectoryModal from './CallDirectoryModal';

const PARTNER_STRIP = [
  { name: 'Ansys', logo: '/images/logos/ansys.svg' },
  { name: 'Autodesk', logo: '/images/logos/autodesk.svg' },
  { name: 'Bentley', logo: '/images/logos/bentley.svg' },
  { name: 'Oracle', logo: '/images/logos/oracle.svg' },
  { name: 'Siemens', logo: '/images/logos/siemens.svg' },
  { name: 'PTC', logo: '/images/logos/ptc.svg' },
  { name: '3DS SolidWorks', logo: '/images/logos/solidworks.svg' }
];

export default function AboutFinbiz({ onOpenDemo }) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <section id="about" className="pt-8 sm:pt-12 pb-1 sm:pb-2 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Split Grid: Left Text/Checklist/Founder + Right Tilted Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
              <Target className="w-3.5 h-3.5 text-[#C4161C]" />
              <span>ABOUT CADD CENTRE</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Here is your perfect <br className="hidden sm:inline" />
              Engineering Career Solution
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
              Equipping diploma holders and graduate engineers with world-standard BIM, MEP, and CAD competencies. 25+ years of training excellence in Manjeri bridging academic theory and real-world construction delivery.
            </p>

            {/* 2-Column Checklist with Red Checkmark Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>24/7 Advanced CAD &amp; BIM Lab</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Autodesk &amp; Bentley Certified Mentors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>100% Placement Support in GCC &amp; India</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Live Commercial Project Portfolios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>International ISO 19650 Standards</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-800">
                <CheckCircle2 className="w-4 h-4 text-[#C4161C] shrink-0" />
                <span>Industry-Recognized Credentials</span>
              </div>
            </div>

            {/* Action Dock: Call Directory, Campus Location */}
            <div className="pt-5 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              {/* Call Us Anytime Button -> Opens Dedicated Department Call Directory Modal */}
              <button
                type="button"
                onClick={() => setIsCallModalOpen(true)}
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200/90 py-1.5 pl-2 pr-4 sm:pr-5 rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs group shrink-0 text-left"
                title="Call us anytime - Select Department (+91 88915 50060)"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium leading-none mb-1">Call us anytime</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 group-hover:text-[#C4161C] transition-colors leading-tight">
                    +91 88915 50060
                  </div>
                </div>
              </button>

              {/* Campus Location Address Pill */}
              <a
                href="https://www.google.com/maps/dir//CADD+Centre+%7C+CAD+%7C+Interior+Design+%7C+BIM+%7C+MEP+%7C+Primavera+%7C+Product+Design+Training+in+Manjeri,+Malappuram,+2nd+Floor,+KORAMBAYIL+CORPORATE+MALL,+Calicut+Rd,+above+Dhanlaxmi+Bank,+Karuvambram,+Manjeri,+Kerala+676121/@11.2716965,75.7557343,13.03z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba6366fe440b235:0x125ad996626e368c!2m2!1d76.1194379!2d11.120027?entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 border border-gray-200/90 py-1.5 pl-2 pr-4 sm:pr-5 rounded-2xl sm:rounded-full transition-all cursor-pointer shadow-2xs hover:shadow-xs group max-w-full text-left"
                title="Get directions to CADD Centre Manjeri on Google Maps"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 font-medium leading-none mb-1">Our Location</div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
                    2nd Floor, KORAMBAYIL CORPORATE MALL, Calicut Rd
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: ENLARGED PHOTO FRAME WITH RED ACCENT BANNER */}
          <div className="lg:col-span-6 relative flex justify-center w-full">
            <div className="relative w-full max-w-[490px]">

              {/* Main Tilted Tablet Photo Frame (Enlarged) */}
              <div
                className="relative aspect-[4/3.5] w-full rounded-[26px] sm:rounded-[38px] overflow-hidden shadow-2xl border-4 sm:border-[5px] border-white bg-gray-100 transition-transform duration-500 hover:scale-[1.01]"
              >
                <img
                  src="/images/finbiz-consultant.jpg"
                  alt="CADD Centre engineering faculty at workstation"
                  className="w-full h-full object-cover object-center"
                />

                {/* Diagonal Crimson Badge on bottom-left: "100% Placement Rate" */}
                <div
                  className="absolute bottom-0 left-0 bg-[#C4161C] text-white py-2.5 sm:py-3.5 px-4 sm:px-7 shadow-xl z-20"
                  style={{
                    borderTopRightRadius: '26px'
                  }}
                >
                  <span className="text-xl sm:text-2xl font-black tracking-tight">100%</span>
                  <span className="block text-[9px] sm:text-[10.5px] font-bold uppercase tracking-wider text-white/95">
                    Placement Rate
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* OFFICIAL SOFTWARE DEVELOPER PARTNERS BANNER (COMPACT & SEAMLESS) */}
        <div className="mt-2.5 sm:mt-3.5">
          <div className="bg-gradient-to-b from-gray-50/90 to-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 border border-gray-200/80 shadow-2xs text-center">
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-wide mb-2.5">
              CADD Centre and CADD Centre logo are registered trademarks of CADD Centre Training Services Private Limited.
              <br className="hidden sm:inline" /> All brand names and trademarks belong to respective owners.
            </p>

            {/* 7 Official Logos Strip with Dividers matching Image 1 */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 py-2 sm:py-2.5 px-3 sm:px-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 shadow-2xs overflow-x-auto no-scrollbar">
              {PARTNER_STRIP.map((item, idx) => (
                <React.Fragment key={item.name}>
                  <div className="flex items-center justify-center h-7 sm:h-8 px-1 sm:px-2 shrink-0 hover:scale-105 transition-transform duration-200">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="h-4 sm:h-5.5 w-auto max-w-[85px] sm:max-w-[105px] lg:max-w-[120px] object-contain"
                    />
                  </div>
                  {idx < PARTNER_STRIP.length - 1 && (
                    <div className="w-px h-4.5 sm:h-5.5 bg-gray-200 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Dedicated Department Call Directory Modal */}
      <CallDirectoryModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />
    </section>
  );
}
