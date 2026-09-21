import React from 'react';
import {
  Target,
  ArrowRight,
  ExternalLink,
  Phone,
  Play,
  Award,
  Video,
  Clock,
  Sparkles,
  Building2,
  Mail
} from 'lucide-react';

// Inline Instagram gradient SVG icon
function InstagramIcon({ className = "w-3 h-3" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// 1. TOP TIER: 3 REGISTER WORKSHOPS (Ultra-compact, short card structure)
export const REGISTER_WORKSHOPS = [
  {
    id: 'intellibuild',
    brand: 'IntelliBuild',
    title: 'The Smart Building Workshop Series',
    subtitle: 'Design Intelligent Spaces with AI & IoT',
    bannerImg: '/images/workshops/intellibuild_workshop.jpg',
    whatYouLearn: [
      'AI Tools for Visualization',
      '3D Massing & Planning',
      'IoT Automation Prototypes',
      'Smart Sensor Control'
    ],
    footerInfo: '3 Hours • Ideation + Prototype • Kit Provided',
    registerUrl: 'https://caddcentre.com/workshop/',
    sourceUrl: 'https://caddcentre.com/workshop/',
    isInstagram: false
  },
  {
    id: 'smartpro',
    brand: 'SmartPro',
    title: 'Smart Product Design Workshop Series',
    subtitle: 'Innovate. Prototype. Engineer the Future.',
    bannerImg: '/images/workshops/smartpro_workshop.jpg',
    whatYouLearn: [
      'Trends in Smart Product Design',
      'AI Sketches & 3D Modeling',
      'IoT & Embedded Systems',
      'Physical Testing & Debugging'
    ],
    footerInfo: '3 Hours • Ideation + Prototype • Tool Kit Provided',
    registerUrl: 'https://caddcentre.com/workshop/',
    sourceUrl: 'https://caddcentre.com/workshop/',
    isInstagram: false
  },
  {
    id: 'vastu',
    brand: 'വാസ്തുവിലെ വാസ്തവം',
    title: 'Scientific Vastu Masterclass for Civil Engineers',
    subtitle: 'Essential Planning & Alignments with Engr. Rijul Das',
    bannerImg: '/images/workshops/vastu_banner.svg',
    whatYouLearn: [
      'Scientific Basis of Vastu',
      'Structural Clashes Prevention',
      'Practical Drafting Rules',
      'Live Case Studies & Q&A'
    ],
    footerInfo: 'Kaizen Hall Manjeri • Engr. Rijul Das • Kit Provided',
    registerUrl: 'https://surveyheart.com/form/67481adf3f45646d0c72cd0a',
    sourceUrl: 'https://www.instagram.com/p/DC_qyJYh3aZ/',
    isInstagram: true
  }
];

// 2. BOTTOM TIER: WORKSHOP VIDEO DEMOS ("just videos mathram")
export const WORKSHOP_VIDEOS = [
  {
    id: 'bim-video',
    badge: 'REEL',
    title: 'BIM² Masterclass: Real-Time Structural Load Testing',
    author: '@caddcentremanjeri x ACES',
    description: 'Explore the power of BIM: Design, prototype, and physical weight load testing.',
    thumbnail: '/images/workshops/bim_aces_workshop.jpg',
    videoUrl: 'https://www.instagram.com/reel/DSaEXE6iTuf/'
  },
  {
    id: 'bridge-video',
    badge: 'LIVE WORKSHOP',
    title: 'Bridge Miniature Construction & Load Capacity Testing',
    author: '@caddcentremanjeri x Eranad Knowledge City',
    description: 'Scale bridge model construction and hydraulic testing with students.',
    thumbnail: '/images/workshops/bridge_workshop.jpg',
    videoUrl: 'https://www.instagram.com/p/DDg1UTZSxPB/'
  },
  {
    id: 'facade-video',
    badge: 'STUDENT PROJECT',
    title: '3D Modern Facade & Building Visualization Showcase',
    author: '@caddcentremanjeri Student Work',
    description: 'Hyper-realistic exterior facade rendering created by our learner Noushida.',
    thumbnail: '/images/events/manjeri/manjeri_DcyM0j3JY4i.jpg',
    videoUrl: 'https://www.instagram.com/caddcentremanjeri'
  }
];

// Official College & Technical Campus Associates
export const INSTITUTIONAL_ASSOCIATES = [
  {
    id: 'ekctc',
    name: 'Eranad Knowledge City Technical Campus',
    shortName: 'EKC Technical Campus',
    subtitle: 'Engineering & Technology',
    url: 'https://ekctc.edu.in/',
    logo: '/images/logos/ekc-logo.png',
  },
  {
    id: 'madin-engg',
    name: "Ma'din College of Engineering and Management",
    shortName: "Ma'din Engineering College",
    subtitle: 'Engineering & Management',
    url: 'https://madin.edu.in/institute/madin-college-of-engineering-and-management/',
    logo: '/images/logos/madin-academy.png',
  },
  {
    id: 'orphanage-poly',
    name: 'Orphanage Polytechnic College',
    shortName: 'Orphanage Polytechnic',
    subtitle: 'Polytechnic Diploma Campus',
    url: 'https://www.orphanagepoly.com/',
    logo: '/images/logos/orphanage-polytechnic.png',
  },
  {
    id: 'gptc-manjeri',
    name: 'Government Polytechnic College Manjeri',
    shortName: 'Govt. Polytechnic Manjeri',
    subtitle: 'Technical Education Dept.',
    url: 'https://gptcmanjeri.in/',
    logo: '/images/logos/gptc-seal.png',
  },
  {
    id: 'madin-iti',
    name: "Ma'din Industrial Training Institute (ITI)",
    shortName: "Ma'din ITI Campus",
    subtitle: 'Industrial Technical Training',
    url: 'https://madin.edu.in/institute/madin-industrial-training-institute/',
    logo: '/images/logos/madin-academy.png',
  },
];

export default function BlogFinbiz({ onOpenDemo, onOpenWorkshop, onOpenCallDirectory }) {
  return (
    <>
      {/* ========================================================= */}
      {/* SECTION 9: OFFICIAL CERTIFIED WORKSHOPS                   */}
      {/* ========================================================= */}
      <section
        id="workshops"
        className="py-8 sm:py-10 bg-[#F8FAFC] select-none border-t border-gray-200 relative font-['Plus_Jakarta_Sans',sans-serif]"
      >
        <div id="projects" className="absolute -top-20" />
        <div id="blog" className="absolute -top-20" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C4161C]">
                <Target className="w-3.5 h-3.5 text-[#C4161C]" />
                <span>OFFICIAL CERTIFIED WORKSHOPS</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
                Shape the Future with Smart Design
              </h2>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onOpenWorkshop()}
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold shadow-md transition-colors cursor-pointer group"
              >
                <span>APPLY NOW</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* 3 Short, Compact Uniform Registration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
            {REGISTER_WORKSHOPS.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md hover:border-[#C4161C]/50 transition-all duration-200 flex flex-col justify-between overflow-hidden text-left group relative"
              >
                {/* Short Image Banner (Height constrained to ~120px) */}
                <div className="relative h-28 sm:h-32 overflow-hidden bg-gray-100 shrink-0 border-b border-gray-100">
                  <img
                    src={card.bannerImg}
                    alt={card.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 ease-out"
                  />

                  {/* Top-Right Source Badge */}
                  <a
                    href={card.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/75 hover:bg-[#C4161C] backdrop-blur-md text-white text-[9.5px] font-bold border border-white/20 shadow-2xs flex items-center gap-1 transition-colors cursor-pointer"
                    title="View Source Link"
                  >
                    {card.isInstagram ? (
                      <InstagramIcon className="w-2.5 h-2.5 text-pink-300" />
                    ) : (
                      <ExternalLink className="w-2.5 h-2.5 text-white" />
                    )}
                    <span>{card.isInstagram ? 'Instagram' : 'Official'}</span>
                  </a>
                </div>

                {/* Card Content: Compact, Short & Informative */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1">
                    {/* Brand / Category (Red) */}
                    <span className="text-[11px] font-bold text-[#C4161C] tracking-wide block">
                      {card.brand}
                    </span>

                    {/* Title (Compact 1 line or 2 lines) */}
                    <h3 className="text-sm sm:text-[14.5px] font-black text-gray-950 tracking-tight leading-snug line-clamp-1 group-hover:text-[#C4161C] transition-colors" title={card.title}>
                      {card.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-[11.5px] text-gray-500 font-normal line-clamp-1">
                      {card.subtitle}
                    </p>
                  </div>

                  {/* "What You'll Learn" - 2-Column Compact Micro Topics Grid */}
                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                      Key Topics
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] text-gray-700">
                      {card.whatYouLearn.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C4161C] shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Duration & Kit Badge */}
                  <div className="pt-1.5 border-t border-gray-100">
                    <span className="inline-block text-[10px] font-bold text-gray-700 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 truncate max-w-full">
                      {card.footerInfo}
                    </span>
                  </div>

                  {/* Solid Red [Register Now] Button */}
                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => onOpenWorkshop(card.title)}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#C4161C] hover:bg-[#a51217] text-white text-xs font-bold shadow-2xs transition-colors cursor-pointer"
                    >
                      <span>Register Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Accent Top Border */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-[#C4161C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 10: CAMPUS WORKSHOP VIDEOS                        */}
      {/* ========================================================= */}
      <section
        id="campus-videos"
        className="py-10 sm:py-12 bg-white select-none border-t border-gray-200 relative font-['Plus_Jakarta_Sans',sans-serif]"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 text-left">
            <div className="space-y-0.5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C4161C]">
                <Video className="w-3 h-3 text-[#C4161C]" />
                <span>CAMPUS WORKSHOP VIDEOS</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-gray-950 tracking-tight">
                Live Workshop Sessions &amp; Student Prototyping
              </h3>
            </div>

            <a
              href="https://www.instagram.com/caddcentremanjeri"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#E1306C] hover:text-[#b01e50] transition-colors cursor-pointer"
            >
              <InstagramIcon className="w-3 h-3" />
              <span>More on Instagram</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* 3 Compact 16:9 Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {WORKSHOP_VIDEOS.map((vid) => (
              <div
                key={vid.id}
                className="group bg-white rounded-xl border border-gray-200/90 shadow-2xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between text-left relative"
              >
                {/* 16:9 Compact Video Thumbnail with Glowing Play Button */}
                <div className="relative h-28 sm:h-32 overflow-hidden bg-gray-900">
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300 ease-out opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[9px] font-mono font-bold uppercase border border-white/15">
                    {vid.badge}
                  </div>

                  {/* Centered Glowing Instagram Play Button */}
                  <a
                    href={vid.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform cursor-pointer"
                    title="Watch Video"
                  >
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </a>
                </div>

                {/* Video Info Body */}
                <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between space-y-1.5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C4161C] uppercase tracking-wide block">
                      {vid.author}
                    </span>
                    <h4 className="text-xs sm:text-[13px] font-extrabold text-gray-950 group-hover:text-[#C4161C] transition-colors leading-snug line-clamp-1">
                      {vid.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-1 leading-normal font-normal">
                      {vid.description}
                    </p>
                  </div>

                  {/* Watch Link */}
                  <div className="pt-1.5 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={vid.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C4161C] group-hover:text-[#9e1116] transition-colors cursor-pointer"
                    >
                      <span>Watch Video</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>

                    <InstagramIcon className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* ASSOCIATE WITH US BANNER (FROM IMAGE 2)                   */}
          {/* ========================================================= */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1017] text-white border border-white/10 shadow-lg text-left relative overflow-hidden">
            {/* Subtle ambient volumetric glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C4161C]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="space-y-2.5 max-w-3xl">
                <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Associate With Us
                </h4>

                <p className="text-sm sm:text-base font-semibold text-gray-200 tracking-wide">
                  Connect • Learn • Collaborate • Build Careers
                </p>

                {/* 12 Programs & Engagements Strip */}
                <div className="pt-2 text-xs sm:text-[13px] text-gray-300 font-medium leading-relaxed">
                  <span>Seminars</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Workshops</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Orientations</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Job Fairs</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Career Guidance</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Guest Lectures</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Technical Demonstrations</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Placement Drives</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Internships</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Certification Programs</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Faculty Development</span> <span className="text-gray-600 px-1.5">|</span>
                  <span>Industry Visits</span>
                </div>
              </div>

              {/* Direct Connect Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href="tel:+916235550078"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                  title="Call CADD Centre Manjeri: +91 62355 50078"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C4161C]" />
                  <span>Call: 6235550078</span>
                </a>
                <a
                  href="mailto:info@caddmanjeri.com?subject=Institution%20Association%20Enquiry%20-%20CADD%20Centre%20Manjeri&body=Hi%20CADD%20Centre%20Manjeri%2C%0A%0AWe%20would%20like%20to%20associate%20with%20your%20institution%20for%20workshops%2C%20seminars%2C%20internships%2C%20and%20campus%20training%20programs.%0A%0AInstitution%20Name%3A%0AContact%20Person%3A%0APhone%3A"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#C4161C] hover:bg-[#a51217] text-white text-xs font-bold shadow-md transition-all cursor-pointer active:scale-97 text-center"
                  title="Email CADD Centre Manjeri to Associate (info@caddmanjeri.com)"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Associate Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Institutional Associates Logo Strip */}
            <div className="relative z-10 pt-6 mt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300">
                  <Building2 className="w-3.5 h-3.5 text-[#C4161C]" />
                  <span>Key Institutional Associates &amp; Engineering Campuses</span>
                </div>
                <span className="text-[11px] text-gray-400 font-medium">
                  Click logo to visit official campus portal ↗
                </span>
              </div>

              {/* 5 Clickable Institution Logo Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
                {INSTITUTIONAL_ASSOCIATES.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit official website: ${item.name}`}
                    className="group bg-white hover:bg-gray-50 rounded-lg p-2.5 sm:p-3 flex flex-col items-center justify-between border border-transparent shadow-xs hover:shadow-lg hover:shadow-red-900/20 hover:border-red-200 transition-all duration-300 hover:-translate-y-1 text-center cursor-pointer h-[76px] sm:h-[84px]"
                  >
                    <div className="flex-1 w-full flex items-center justify-center px-1">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="max-h-6 sm:max-h-7 max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full flex items-center justify-center gap-1 mt-1.5 text-[9.5px] sm:text-[10.5px] font-bold text-gray-500 group-hover:text-[#C4161C] transition-colors leading-none">
                      <span className="truncate">{item.shortName}</span>
                      <ExternalLink className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
