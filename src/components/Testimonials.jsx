import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, Quote, LayoutGrid, Radio, X, ArrowUpRight } from 'lucide-react';
import useOverlayHistory from '../hooks/useOverlayHistory';

// Single Google Review Card
function ReviewCard({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="w-[310px] sm:w-[370px] lg:w-[390px] shrink-0 bg-[#0E1624]/85 backdrop-blur-xl border border-white/10 rounded-[22px] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#E94B3C]/60 hover:bg-[#121D30] hover:shadow-[0_12px_32px_rgba(233,75,60,0.18)] hover:-translate-y-1 cursor-pointer text-left select-none relative group"
    >
      {/* Subtle Quote Watermark in Background */}
      <Quote className="absolute top-4 right-4 w-12 h-12 text-white/[0.04] group-hover:text-[#E94B3C]/[0.08] transition-colors pointer-events-none" />

      <div>
        {/* Reviewer Header: Avatar + Info + Google Badge */}
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div className="flex items-center gap-3 min-w-0">
            {/* Student Avatar */}
            <div className="w-12 h-12 rounded-full overflow-hidden border border-white/20 shadow-md shrink-0 bg-slate-800">
              <img
                src={item.avatar}
                alt={item.name}
                loading="lazy"
                width="48"
                height="48"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-tight truncate">
                  {item.name}
                </h3>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified Reviewer" />
              </div>
              <span className="inline-block text-[11px] font-semibold text-[#FF7A5C] bg-[#E94B3C]/10 border border-[#E94B3C]/20 px-2 py-0.5 rounded-full mt-1 truncate max-w-[200px]">
                {item.role}
              </span>
            </div>
          </div>

          {/* Google G Logo Badge */}
          <div className="w-7 h-7 rounded-full bg-white/[0.08] border border-white/15 flex items-center justify-center p-1.5 shrink-0" title="Verified Google Review">
            <svg className="w-full h-full" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
            </svg>
          </div>
        </div>

        {/* 5 Golden Stars + Time */}
        <div className="flex items-center gap-2 mb-2.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </div>
          <span className="text-xs font-black text-white">5.0</span>
          <span className="text-[11px] text-white/50 font-normal">• {item.time}</span>
        </div>

        {/* Quotation text */}
        <p className="text-xs sm:text-[13px] text-white/75 font-normal leading-relaxed line-clamp-4 group-hover:text-white/95 transition-colors">
          "{item.quote}"
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex items-center justify-between pt-3.5 mt-3.5 border-t border-white/10 text-[11px] text-white/50">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Verified Student Review</span>
        </span>
        <span className="text-[#FF7A5C] font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">
          Read full &rarr;
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('stream'); // 'stream' | 'grid'
  const [activeModalReview, setActiveModalReview] = useState(null);

  // Close modal with back swipe / button
  useOverlayHistory(!!activeModalReview, () => setActiveModalReview(null));

  // 16 Real Verified Google Reviews for CADD Centre Manjeri
  const testimonials = [
    {
      id: 1,
      name: 'sharuz vlog',
      role: 'BIM for Architecture',
      category: 'bim',
      rating: 5,
      time: '3 months ago',
      avatar: '/images/reviews/sharuz-vlog.jpg',
      quote: 'I am Sarath from Koppam. I had a great and best learning experience at CADD Centre Manjeri doing the BIM for Architecture course. The trainers explain complex concepts in a very simple and practical way, making it easy to understand. They focus on real-world projects which is very helpful. The institute also provides good guidance regarding placement opportunities.'
    },
    {
      id: 2,
      name: 'Shibil Shibil',
      role: 'Interior Design',
      category: 'interior',
      rating: 5,
      time: '6 months ago',
      avatar: '/images/reviews/shibil-shibil.jpg',
      quote: 'I am shibil. I joined here for interior design course. I have experienced a wonderful atmosphere for studies. The faculties are very comfortable and they were industry experts with a handful of experience. Also CADD centre helped me improve my skills significantly.'
    },
    {
      id: 3,
      name: 'Haritha P Haridas',
      role: 'Revit Architecture',
      category: 'bim',
      rating: 5,
      time: '6 months ago',
      avatar: '/images/reviews/haritha-p-haridas.jpg',
      quote: 'I recently completed Revit Architecture training at CADD Centre and it was a great learning experience. The classes were practical, well-structured, and focused on real-time project work. The trainer explained every concept clearly, especially modeling, detailing, and family creation, which helped me build strong confidence in Revit.'
    },
    {
      id: 4,
      name: 'Sidhan Harshad',
      role: 'Interior Designing',
      category: 'interior',
      rating: 5,
      time: '5 months ago',
      avatar: '/images/reviews/sidhan-harshad.png',
      quote: 'I am Sidhan. I had a great learning experience at CADD Centre Manjeri while pursuing the Interior Designing course. The classes were well-structured, covering tools like AutoCAD, 3ds Max, SketchUp, Lumion and other essential design software, which are very useful for real-world projects.'
    },
    {
      id: 5,
      name: 'Ajaykrishna PT',
      role: 'Revit MEP',
      category: 'mep',
      rating: 5,
      time: '5 months ago',
      avatar: '/images/reviews/ajaykrishna-pt.jpg',
      quote: 'I completed my Revit MEP course at CADD Centre Manjeri, one of the best institutes for BIM, MEP, AutoCAD, Mechanical CAD, and SolidWorks. The classes were well-structured and very easy to understand, even for beginners. The trainers are highly supportive, knowledgeable, and always ready to clear doubts.'
    },
    {
      id: 6,
      name: 'darshana K',
      role: 'Interior Designing',
      category: 'interior',
      rating: 5,
      time: '4 months ago',
      avatar: '/images/reviews/darshana-k.jpg',
      quote: 'The interior designing course at CADD Centre Manjeri is a good and best option for whoever wants to build practical design skills. The course covers both theory and software training, including tools like AutoCAD, SketchUp, 3ds Max, and V-Ray, which are essential in the interior design field.'
    },
    {
      id: 7,
      name: 'Afna Vahid',
      role: 'AutoCAD · Revit · 3ds Max',
      category: 'autocad',
      rating: 5,
      time: '6 months ago',
      avatar: '/images/reviews/afna-vahid.png',
      quote: 'I am afna. I had a wonderful experience at CADD Center. I learned AutoCAD, Revit, and 3ds Max here. The teaching was clear and practical, which helped me understand the software easily. The staff and trainers are very supportive and friendly.'
    },
    {
      id: 8,
      name: 'Amjad Yousuf',
      role: 'Civil CAD & BIM',
      category: 'bim',
      rating: 5,
      time: '3 months ago',
      avatar: '/images/reviews/amjad-yousuf.png',
      quote: 'I got an excellent training experience at CADD Centre Manjeri. The faculties were friendly and supportive with good lab facilities. Also industry oriented teaching. It is the leading and best centre in Manjeri.'
    },
    {
      id: 9,
      name: 'Shahabas Manu',
      role: 'Architectural CAD',
      category: 'autocad',
      rating: 5,
      time: '1 month ago',
      avatar: '/images/reviews/shahabas-manu.png',
      quote: 'My name is Shahabas. Join the top CAD school in Manjeri, Kerala, which provides professional instruction and assistance with placement. Classes are simple to understand, and trainers are very helpful. BIM is a great tool for training architects. Strongly suggested.'
    },
    {
      id: 10,
      name: 'Sarania Saneesh',
      role: 'BIM for Architecture',
      category: 'bim',
      rating: 5,
      time: '5 months ago',
      avatar: '/images/reviews/sarania-saneesh.jpg',
      quote: 'As a BIM for architecture student of CADD Centre Manjeri, I had a great learning experience. The trainers are highly supportive and explain concepts clearly with practical examples. The classes are well-structured and industry-oriented, which helped me improve my technical skills and confidence.'
    },
    {
      id: 11,
      name: 'Sreni Maneesha',
      role: 'Interior Design',
      category: 'interior',
      rating: 5,
      time: '6 months ago',
      avatar: '/images/reviews/sreni-maneesha.jpg',
      quote: 'I had a great learning experience at CADD Centre. The interior design course was well-structured and very practical. The trainers were supportive, knowledgeable, and always ready to clear doubts. The hands-on training helped me understand real industry standards.'
    },
    {
      id: 12,
      name: 'MHD AFNAN',
      role: 'MEP Course',
      category: 'mep',
      rating: 5,
      time: '6 months ago',
      avatar: '/images/reviews/mhd-afnan.jpg',
      quote: 'CADD centre Manjeri is a top institution for MEP courses. All teachers are very friendly, knowledgeable and provide good practical exposure.'
    },
    {
      id: 13,
      name: 'Prathul Prathul',
      role: 'AutoCAD Drafting',
      category: 'autocad',
      rating: 5,
      time: '3 months ago',
      avatar: '/images/reviews/prathul-prathul.jpg',
      quote: 'I chose the AutoCAD course at CADD Centre Manjeri. The syllabus oriented and project oriented classes helped me improve my drafting and designing skills. CADD Centre Manjeri is the professional and leading centre in Malappuram district.'
    },
    {
      id: 14,
      name: 'Sneha TK',
      role: 'Interior Design',
      category: 'interior',
      rating: 5,
      time: '5 months ago',
      avatar: '/images/reviews/sneha-tk.jpg',
      quote: 'I am Sneha, BSc Computer Science graduate. I joined for the best Interior designing course including AutoCAD, SketchUp, 3ds Max and Lumion at CADD Centre Manjeri. The faculty experience was very talented faculties and working professionals. I got placed as well!'
    },
    {
      id: 15,
      name: 'Shana_Hasbu',
      role: 'Master BIM',
      category: 'bim',
      rating: 5,
      time: '5 months ago',
      avatar: '/images/reviews/shana-hasbu.jpg',
      quote: 'Best BIM training institution in Manjeri with best experienced faculty. Here I have completed Master BIM including Revit Architecture, Revit Structure, Revit MEP, Navisworks, BIM 360, Dynamo, and LOD. It helped me secure a job abroad.'
    },
    {
      id: 16,
      name: 'Malikdeenar',
      role: 'AutoCAD & Drafting',
      category: 'autocad',
      rating: 5,
      time: '3 months ago',
      avatar: '/images/reviews/malikdeenar.png',
      quote: 'I am Malik Deenar. Here I chose the AutoCAD course. The classes were highly useful and professional. Here I got the best classes and better atmosphere. CADD Centre Manjeri is the leading centre in Malappuram for AutoCAD.'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Reviews', count: testimonials.length },
    { id: 'interior', label: 'Interior Design', count: testimonials.filter(t => t.category === 'interior').length },
    { id: 'bim', label: 'BIM & Revit', count: testimonials.filter(t => t.category === 'bim').length },
    { id: 'mep', label: 'MEP Systems', count: testimonials.filter(t => t.category === 'mep').length },
    { id: 'autocad', label: 'AutoCAD', count: testimonials.filter(t => t.category === 'autocad').length },
  ];

  // Filtered reviews
  const filteredReviews = useMemo(() => {
    if (selectedCategory === 'all') return testimonials;
    return testimonials.filter(t => t.category === selectedCategory);
  }, [selectedCategory]);

  // Split reviews into two streams for the dual marquee
  const row1 = useMemo(() => testimonials.slice(0, 8), [testimonials]);
  const row2 = useMemo(() => testimonials.slice(8, 16), [testimonials]);

  return (
    <section 
      id="testimonials" 
      className="relative py-16 sm:py-24 lg:py-28 bg-[#080D14] text-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-t border-white/5"
    >
      {/* Dynamic CSS for seamless infinite marquee */}
      <style>{`
        @keyframes marquee-stream-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-stream-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .stream-track-left {
          display: flex;
          width: max-content;
          animation: marquee-stream-left 36s linear infinite;
        }
        .stream-track-right {
          display: flex;
          width: max-content;
          animation: marquee-stream-right 36s linear infinite;
        }
        .stream-track-left:hover,
        .stream-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient Red Glow Accents */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-[#E94B3C]/10 blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER & GOOGLE TRUST METRICS                     */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-8 sm:mb-12">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E94B3C]" />
            <span className="text-[11px] font-bold text-[#E94B3C] uppercase tracking-[0.16em]">
              GOOGLE REVIEWS &amp; TESTIMONIALS
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-white">
            Words of Appreciation from Our Students
          </h2>

          <p className="text-xs sm:text-sm text-white/70 font-normal leading-relaxed max-w-xl mx-auto">
            Verified Google reviews from engineering and architecture students trained at CADD Centre Manjeri.
          </p>

          {/* Google Verified Rating Scorecard Badge */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-3.5 px-4.5 py-2 rounded-full bg-white/[0.05] border border-white/12 backdrop-blur-md shadow-sm">
              <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold text-white">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
              </div>
              <span className="text-white/25">•</span>
              <span className="text-[11px] sm:text-xs font-semibold text-white/85">
                500+ Verified Reviews
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CONTROLS: Category Filters & View Toggle      */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 no-scrollbar">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#E94B3C] text-white shadow-md shadow-red-500/25'
                      : 'bg-white/[0.05] border border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                  }`}
                >
                  {cat.label} ({cat.count})
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button */}
          <div className="hidden sm:inline-flex items-center p-1 rounded-full bg-white/[0.05] border border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('stream')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'stream'
                  ? 'bg-[#E94B3C] text-white shadow-xs'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <Radio className="w-3.5 h-3.5" />
              <span>Live Stream</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#E94B3C] text-white shadow-xs'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>All Grid</span>
            </button>
          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* SHOWCASE SECTION: Stream Mode vs Grid View                */}
      {/* ========================================================= */}
      {viewMode === 'stream' && selectedCategory === 'all' ? (
        <div className="space-y-5 sm:space-y-6 relative overflow-hidden py-2">
          
          {/* Gradient Edge Vignettes to create sleek infinite fade */}
          <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-28 bg-gradient-to-r from-[#080D14] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-28 bg-gradient-to-l from-[#080D14] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Leftward Streaming Marquee */}
          <div className="overflow-hidden">
            <div className="stream-track-left gap-4 sm:gap-6">
              {[...row1, ...row1].map((item, idx) => (
                <ReviewCard 
                  key={`r1-${item.id}-${idx}`} 
                  item={item} 
                  onSelect={setActiveModalReview} 
                />
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Streaming Marquee */}
          <div className="overflow-hidden">
            <div className="stream-track-right gap-4 sm:gap-6">
              {[...row2, ...row2].map((item, idx) => (
                <ReviewCard 
                  key={`r2-${item.id}-${idx}`} 
                  item={item} 
                  onSelect={setActiveModalReview} 
                />
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* Grid Mode (or when a category is selected) */
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredReviews.map((item) => (
              <ReviewCard 
                key={item.id} 
                item={item} 
                onSelect={setActiveModalReview} 
              />
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: Full Verified Review Lightbox                       */}
      {/* ========================================================= */}
      <AnimatePresence>
        {activeModalReview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 font-['Plus_Jakarta_Sans',sans-serif]">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalReview(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              className="relative w-full max-w-lg bg-[#0E1726] border border-white/15 rounded-[24px] p-6 sm:p-8 shadow-2xl z-10 text-left"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalReview(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close review"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Reviewer Header */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/20 shadow-md shrink-0 bg-slate-800">
                  <img
                    src={activeModalReview.avatar}
                    alt={activeModalReview.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {activeModalReview.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="inline-block text-xs font-semibold text-[#FF7A5C] bg-[#E94B3C]/10 border border-[#E94B3C]/20 px-2.5 py-0.5 rounded-full mt-1">
                    {activeModalReview.role}
                  </span>
                </div>
              </div>

              {/* Star Rating & Time */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-sm font-black text-white">5.0 Star Rating</span>
                <span className="text-xs text-white/50">• {activeModalReview.time}</span>
              </div>

              {/* Full Review Text */}
              <p className="text-sm sm:text-base text-white/85 font-normal leading-relaxed">
                "{activeModalReview.quote}"
              </p>

              {/* Footer Trust Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Verified Google Review</span>
                </span>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF7A5C] hover:text-[#ff9282] font-semibold inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
