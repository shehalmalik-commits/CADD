import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import useOverlayHistory from '../hooks/useOverlayHistory';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Back / swipe-back closes the menu instead of leaving the site
  useOverlayHistory(mobileMenuOpen, () => setMobileMenuOpen(false));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ease-out ${
        scrolled
          ? 'bg-[#080D14]/92 backdrop-blur-md border-b border-white/10 shadow-lg py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent py-4.5 sm:py-6'
      }`}
    >
      <div className="max-w-[1680px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
        
        {/* Brand Logo - CADD Centre Manjeri */}
        <a 
          href="#" 
          className="flex items-center group cursor-pointer focus:outline-none shrink-0"
          aria-label="CADD Centre Manjeri Home"
        >
          <img 
            src="/CADD.png" 
            alt="CADD Centre Manjeri" 
            className="h-9 sm:h-11 lg:h-[46px] w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8.5 text-[13.5px] font-medium tracking-wide">
          {/* Home Capsule Pill Button */}
          <a 
            href="#" 
            className="px-4.5 py-1.5 rounded-full border border-white/25 bg-white/10 text-white font-semibold hover:bg-white/20 transition-all shadow-sm"
          >
            Home
          </a>

          <a 
            href="#features" 
            className="text-white/85 hover:text-white transition-colors"
          >
            Courses
          </a>

          <a 
            href="#about" 
            className="text-white/85 hover:text-white transition-colors"
          >
            About Us
          </a>

          <a 
            href="#placement" 
            className="text-white/85 hover:text-white transition-colors"
          >
            Placements
          </a>

          <a 
            href="#events" 
            className="text-white/85 hover:text-white transition-colors"
          >
            Events
          </a>

          <a 
            href="#testimonials" 
            className="text-white/85 hover:text-white transition-colors"
          >
            Reviews
          </a>

          <button
            type="button"
            onClick={onOpenDemo}
            className="text-white/85 hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA Button - Vibrant Red Capsule Button */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#E94B3C] hover:bg-[#D4382A] active:bg-[#B82E22] text-white text-[13.5px] font-semibold px-6 lg:px-7 py-2.5 rounded-full transition-all duration-200 shadow-[0_4px_16px_rgba(233,75,60,0.35)] hover:shadow-[0_6px_22px_rgba(233,75,60,0.5)] hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile menu controls */}
        <div className="md:hidden flex items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#E94B3C] hover:bg-[#D4382A] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md active:scale-95 transition-all"
          >
            Apply Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-16 inset-x-4 bg-[#080D14]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl md:hidden space-y-3 text-center text-white animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex justify-center pb-1">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)} 
              className="inline-block px-5 py-1.5 rounded-full border border-white/25 bg-white/10 text-white text-sm font-semibold"
            >
              Home
            </a>
          </div>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-white/90 hover:text-white">Courses</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-white/90 hover:text-white">About Us</a>
          <a href="#placement" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-white/90 hover:text-white">Placements</a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-white/90 hover:text-white">Events</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block py-1 text-sm font-medium text-white/90 hover:text-white">Reviews</a>
          <button
            type="button"
            onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
            className="block w-full py-1 text-sm font-medium text-white/90 hover:text-white cursor-pointer"
          >
            Contact
          </button>

          <div className="pt-2 border-t border-white/10 flex justify-center">
            <button
              type="button"
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full bg-[#E94B3C] hover:bg-[#D4382A] text-white py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-red-500/30 active:scale-98 transition-all"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
