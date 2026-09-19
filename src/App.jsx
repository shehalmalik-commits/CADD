import React, { useState } from 'react';
import HeaderFinbiz from './components/finbiz/HeaderFinbiz';
import HeroFinbiz from './components/finbiz/HeroFinbiz';
import AboutFinbiz from './components/finbiz/AboutFinbiz';
import TeamFinbiz from './components/finbiz/TeamFinbiz';
import PortfolioFinbiz from './components/finbiz/PortfolioFinbiz';
import InternshipsFinbiz from './components/finbiz/InternshipsFinbiz';
import TestimonialsFinbiz from './components/finbiz/TestimonialsFinbiz';
import RevolutionaryFinbiz from './components/finbiz/RevolutionaryFinbiz';
import BlogFinbiz from './components/finbiz/BlogFinbiz';
import NewsletterFinbiz from './components/finbiz/NewsletterFinbiz';
import FooterFinbiz from './components/finbiz/FooterFinbiz';
import DemoModal from './components/DemoModal';
import WorkshopModal from './components/WorkshopModal';
import FloatingContact from './components/FloatingContact';
import SmoothScroll from './components/motion/SmoothScroll';
import useOverlayHistory from './hooks/useOverlayHistory';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoInterest, setDemoInterest] = useState('');

  const [workshopOpen, setWorkshopOpen] = useState(false);
  const [workshopInterest, setWorkshopInterest] = useState('');

  const handleOpenDemo = (interest = '') => {
    if (typeof interest === 'string' && interest.trim().length > 0) {
      setDemoInterest(interest);
    }
    setDemoOpen(true);
  };

  const handleOpenWorkshop = (interest = '') => {
    if (typeof interest === 'string' && interest.trim().length > 0) {
      setWorkshopInterest(interest);
    }
    setWorkshopOpen(true);
  };

  // Back / swipe-back closes the enquiry modals instead of leaving the site.
  useOverlayHistory(demoOpen, () => setDemoOpen(false));
  useOverlayHistory(workshopOpen, () => setWorkshopOpen(false));

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C4161C]/15 selection:text-[#C4161C] overflow-x-clip">

        {/* Finbiz Header with Left Angled Crimson Ribbon */}
        <HeaderFinbiz onOpenDemo={() => handleOpenDemo()} />

        <main>
          {/* 1. Curent pge: Hero Section */}
          <HeroFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* 2. about cadd: About CADD Centre */}
          <AboutFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* 3. Course offrings: Specialized CAD, BIM & Master Programs */}
          <PortfolioFinbiz onOpenDemo={handleOpenDemo} />

          {/* 4. Placement: Placed Students & GCC Alumni Records */}
          <TeamFinbiz onOpenDemo={handleOpenDemo} />

          {/* 5. Srtigt from lernes herat: Straight from Learners' Hearts (Student Speaks) */}
          <NewsletterFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* 6. Reviw: Verified Google Reviews & Testimonials */}
          <TestimonialsFinbiz />

          {/* 7. Life at Cadd centre Reel: Campus Life & Student Reels */}
          <RevolutionaryFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* 8. Intrship: Certified Industrial Internships & Live Projects */}
          <InternshipsFinbiz onOpenDemo={handleOpenDemo} />

          {/* 9 & 10. Workshops (9) & Campus workshop videos (10) */}
          <BlogFinbiz onOpenDemo={handleOpenDemo} onOpenWorkshop={handleOpenWorkshop} />
        </main>

        {/* Footer */}
        <FooterFinbiz onOpenDemo={() => handleOpenDemo()} />

        {/* Floating Call / WhatsApp / Instagram contact dock + live announcement badge */}
        <FloatingContact onOpenDemo={handleOpenDemo} />

        {/* Admissions & Demo Enquiry Modal */}
        <DemoModal
          isOpen={demoOpen}
          onClose={() => setDemoOpen(false)}
          initialInterest={demoInterest}
        />

        {/* Workshop Registration Modal */}
        <WorkshopModal
          isOpen={workshopOpen}
          onClose={() => setWorkshopOpen(false)}
          initialWorkshop={workshopInterest}
        />
      </div>
    </SmoothScroll>
  );
}

