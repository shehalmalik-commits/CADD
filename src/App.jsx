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
import FloatingContact from './components/FloatingContact';
import SmoothScroll from './components/motion/SmoothScroll';
import useOverlayHistory from './hooks/useOverlayHistory';

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoInterest, setDemoInterest] = useState('');

  const handleOpenDemo = (interest = '') => {
    if (typeof interest === 'string' && interest.trim().length > 0) {
      setDemoInterest(interest);
    }
    setDemoOpen(true);
  };

  // Back / swipe-back closes the enquiry modal instead of leaving the site.
  useOverlayHistory(demoOpen, () => setDemoOpen(false));

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C4161C]/15 selection:text-[#C4161C] overflow-x-clip">

        {/* Finbiz Header with Left Angled Crimson Ribbon */}
        <HeaderFinbiz onOpenDemo={() => handleOpenDemo()} />

        <main>
          {/* Section 1: Hero Section */}
          <HeroFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* Section 2: More About Us (Checklist + Tilted Tablet + Rating Cards) */}
          <AboutFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* Section 3: Courses Section (Awesome HR Portfolio + Mid Dark CTA Banner) */}
          <PortfolioFinbiz onOpenDemo={handleOpenDemo} />

          {/* Section 4: Internships Section (Certified Industrial Internships & Live Projects) */}
          <InternshipsFinbiz onOpenDemo={handleOpenDemo} />

          {/* Section 5: Placements Section (Executive Alumni Dossier) */}
          <TeamFinbiz onOpenDemo={handleOpenDemo} />

          {/* Section 6: Testimonials Section (Customer Testimonials with Floating Avatars) */}
          <TestimonialsFinbiz />

          {/* Section 7: Revolutionary Solution Section (3D Cube + 2 Stat Boxes) */}
          <RevolutionaryFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* Section 8: Blog Section (Latest Blog Posts with Red Date Badges) */}
          <BlogFinbiz onOpenDemo={() => handleOpenDemo()} />

          {/* Section 9: Hear from our students / Student Speaks Banner */}
          <NewsletterFinbiz onOpenDemo={() => handleOpenDemo()} />
        </main>

        {/* Section 10: Deep Dark 3-Column Footer */}
        <FooterFinbiz onOpenDemo={() => handleOpenDemo()} />

        {/* Floating Call / WhatsApp / Instagram contact dock */}
        <FloatingContact />

        {/* Admissions & Demo Enquiry Modal */}
        <DemoModal
          isOpen={demoOpen}
          onClose={() => setDemoOpen(false)}
          initialInterest={demoInterest}
        />
      </div>
    </SmoothScroll>
  );
}

