import React, { useState } from 'react';
import { Mail, Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export default function HeaderFinbiz({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Utilities Strip (Desktop) */}
      <div className="hidden lg:block border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-end h-10 text-xs text-gray-500 font-medium gap-8">
          <div className="flex items-center gap-2 hover:text-[#C4161C] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#C4161C]" />
            <a href="mailto:info@caddmanjeri.com">info@caddmanjeri.com</a>
          </div>
          <div className="flex items-center gap-2 hover:text-[#C4161C] transition-colors">
            <Phone className="w-3.5 h-3.5 text-[#C4161C]" />
            <a href="tel:+918891550060">Hotline: <strong className="text-gray-900">+91 88915 50060</strong></a>
          </div>
        </div>
      </div>

      {/* Main Navbar Bar with Left Red Angled Ribbon */}
      <div className="relative max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between h-15 sm:h-18">
        
        {/* Left Crimson Polygon Ribbon with Official Red CADD Centre Logo */}
        <div className="absolute left-0 top-0 bottom-0 flex items-center">
          <div 
            className="h-full bg-[#C4161C] flex items-center pl-3 sm:pl-6 pr-6 sm:pr-8 shadow-md"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0 100%)',
              minWidth: '145px',
              maxWidth: '240px'
            }}
          >
            <a href="#" className="flex items-center bg-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl shadow-xs hover:scale-102 transition-transform">
              <img
                src="/CADD.png"
                alt="CADD Centre Manjeri"
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Spacer for the left ribbon */}
        <div className="w-[140px] sm:w-[220px] shrink-0" />

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-semibold text-gray-800">
          <a href="#hero" className="text-[#C4161C] transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-[#C4161C] transition-colors">
            About Us
          </a>
          <a href="#courses" className="hover:text-[#C4161C] transition-colors flex items-center gap-1">
            Courses <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </a>
          <a href="#placements" className="hover:text-[#C4161C] transition-colors flex items-center gap-1">
            Placements <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </a>
          <a href="#blog" className="hover:text-[#C4161C] transition-colors">
            Campus Blog
          </a>
          <a href="#footer" className="hover:text-[#C4161C] transition-colors">
            Contact
          </a>
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Instant Enquiry Button (Direct 1-tap conversion) */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="sm:hidden inline-flex items-center justify-center px-3.5 py-1.5 rounded-full bg-[#C4161C] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-xs cursor-pointer active:scale-95 transition-all"
          >
            ENQUIRE
          </button>

          {/* Desktop CTA Button */}
          <button
            type="button"
            onClick={onOpenDemo}
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#11161E] hover:bg-[#C4161C] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-200 cursor-pointer active:scale-96"
          >
            ENQUIRE NOW
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors md:hidden cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#C4161C]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/98 backdrop-blur-xl px-5 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-bold text-[#C4161C] border-b border-gray-50"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C] border-b border-gray-50"
          >
            About Us
          </a>
          <a
            href="#courses"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C] border-b border-gray-50"
          >
            Courses &amp; 8 Disciplines
          </a>
          <a
            href="#placements"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C] border-b border-gray-50"
          >
            Alumni Placements (GCC &amp; India)
          </a>
          <a
            href="#campus-life"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C] border-b border-gray-50"
          >
            Campus Life &amp; Student Reels
          </a>
          <a
            href="#blog"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C] border-b border-gray-50"
          >
            Campus Blog &amp; Events
          </a>
          <a
            href="#footer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-gray-800 hover:text-[#C4161C]"
          >
            Contact CADD Centre
          </a>

          {/* Direct Phone Shortcut in Drawer */}
          <div className="pt-2 flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-xl">
            <span className="font-medium">Admissions Desk:</span>
            <a href="tel:+918891550060" className="font-bold text-gray-900 hover:text-[#C4161C]">
              +91 88915 50060
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemo();
              }}
              className="w-full py-3.5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-97 transition-all"
            >
              <span>ENQUIRE ADMISSIONS NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
