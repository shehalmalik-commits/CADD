import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Star,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Play,
  Pause,
  ArrowUpRight
} from 'lucide-react';

const GOOGLE_MAPS_REVIEWS_URL = 'https://maps.app.goo.gl/CX7j5Jd4syy3r627A';

// Only authentic Google reviews with real student profile pictures
const VERIFIED_REVIEWS = [
  {
    id: 'sharuz',
    name: 'sharuz vlog',
    category: 'bim',
    role: 'BIM for Architecture',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/sharuz-vlog.jpg',
    quote:
      'I am Sarath from Koppam. I had a great and best learning experience at CADD Centre Manjeri doing the BIM for Architecture course. The trainers explain complex concepts in a very simple and practical way, making it easy to understand. They focus on real-world projects which is very helpful. The institute also provides good guidance regarding placement opportunities.'
  },
  {
    id: 'sreni',
    name: 'Sreni Maneesha',
    category: 'interior',
    role: 'Interior Design',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/sreni-maneesha.jpg',
    quote:
      'I had a great learning experience at CADD Centre. The interior design course was well-structured and very practical. The trainers were supportive, knowledgeable, and always ready to clear doubts. The hands-on training helped me understand real industry standards.'
  },
  {
    id: 'mhd-afnan',
    name: 'MHD AFNAN',
    category: 'mep',
    role: 'MEP Course',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/mhd-afnan.jpg',
    quote:
      'CADD centre Manjeri is a top institution for MEP courses. All teachers are very friendly, knowledgeable and provide good practical exposure with real HVAC and electrical drawings.'
  },
  {
    id: 'prathul',
    name: 'Prathul Prathul',
    category: 'autocad',
    role: 'AutoCAD Drafting',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/prathul-prathul.jpg',
    quote:
      'I chose the AutoCAD course at CADD Centre Manjeri. The syllabus oriented and project oriented classes helped me improve my drafting and designing skills. CADD Centre Manjeri is the professional and leading centre in Malappuram district.'
  },
  {
    id: 'sneha',
    name: 'Sneha TK',
    category: 'interior',
    role: 'Interior Design',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/sneha-tk.jpg',
    quote:
      'I am Sneha, BSc Computer Science graduate. I joined for the best Interior designing course including AutoCAD, SketchUp, 3ds Max and Lumion at CADD Centre Manjeri. The faculty experience was very talented faculties and working professionals. I got placed as well!'
  },
  {
    id: 'shibil',
    name: 'Shibil Shibil',
    category: 'interior',
    role: 'Interior Design',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/shibil-shibil.jpg',
    quote:
      'I am shibil. I joined here for interior design course. I have experienced a wonderful atmosphere for studies. The faculties are very comfortable and they were industry experts with a handful of experience. Also CADD centre helped me improve my skills significantly.'
  },
  {
    id: 'haritha',
    name: 'Haritha P Haridas',
    category: 'bim',
    role: 'Revit Architecture',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/haritha-p-haridas.jpg',
    quote:
      'I recently completed Revit Architecture training at CADD Centre and it was a great learning experience. The classes were practical, well-structured, and focused on real-time project work. The trainer explained every concept clearly, especially modeling, detailing, and family creation, which helped me build strong confidence in Revit.'
  },
  {
    id: 'sidhan',
    name: 'Sidhan Harshad',
    category: 'interior',
    role: 'Interior Designing',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/sidhan-harshad.png',
    quote:
      'I am Sidhan. I had a great learning experience at CADD Centre Manjeri while pursuing the Interior Designing course. The classes were well-structured, covering tools like AutoCAD, 3ds Max, SketchUp, Lumion and other essential design software, which are very useful for real-world projects.'
  },
  {
    id: 'ajaykrishna',
    name: 'Ajaykrishna PT',
    category: 'mep',
    role: 'Revit MEP',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/ajaykrishna-pt.jpg',
    quote:
      'I completed my Revit MEP course at CADD Centre Manjeri, one of the best institutes for BIM, MEP, AutoCAD, Mechanical CAD, and SolidWorks. The classes were well-structured and very easy to understand, even for beginners. The trainers are highly supportive, knowledgeable, and always ready to clear doubts.'
  },
  {
    id: 'darshana',
    name: 'darshana K',
    category: 'interior',
    role: 'Interior Designing',
    rating: 5,
    time: '4 months ago',
    avatar: '/images/reviews/darshana-k.jpg',
    quote:
      'The interior designing course at CADD Centre Manjeri is a good and best option for whoever wants to build practical design skills. The course covers both theory and software training, including tools like AutoCAD, SketchUp, 3ds Max, and V-Ray, which are essential in the interior design field.'
  },
  {
    id: 'afna',
    name: 'Afna Vahid',
    category: 'autocad',
    role: 'AutoCAD · Revit · 3ds Max',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/afna-vahid.png',
    quote:
      'I am afna. I had a wonderful experience at CADD Center. I learned AutoCAD, Revit, and 3ds Max here. The teaching was clear and practical, which helped me understand the software easily. The staff and trainers are very supportive and friendly.'
  },
  {
    id: 'amjad',
    name: 'Amjad Yousuf',
    category: 'bim',
    role: 'Civil CAD & BIM',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/amjad-yousuf.png',
    quote:
      'I got an excellent training experience at CADD Centre Manjeri. The faculties were friendly and supportive with good lab facilities. Also industry oriented teaching. It is the leading and best centre in Manjeri.'
  },
  {
    id: 'shahabas',
    name: 'Shahabas Manu',
    category: 'bim',
    role: 'Architectural CAD',
    rating: 5,
    time: '1 month ago',
    avatar: '/images/reviews/shahabas-manu.png',
    quote:
      'My name is Shahabas. Join the top CAD school in Manjeri, Kerala, which provides professional instruction and assistance with placement. Classes are simple to understand, and trainers are very helpful. BIM is a great tool for training architects. Strongly suggested.'
  },
  {
    id: 'sarania',
    name: 'Sarania Saneesh',
    category: 'bim',
    role: 'BIM for Architecture',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/sarania-saneesh.jpg',
    quote:
      'As a BIM for architecture student of CADD Centre Manjeri, I had a great learning experience. The trainers are highly supportive and explain concepts clearly with practical examples. The classes are well-structured and industry-oriented, which helped me improve my technical skills and confidence.'
  },
  {
    id: 'shana',
    name: 'Shana_Hasbu',
    category: 'bim',
    role: 'Master BIM',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/shana-hasbu.jpg',
    quote:
      'Best BIM training institution in Manjeri with best experienced faculty. Here I have completed Master BIM including Revit Architecture, Revit Structure, Revit MEP, Navisworks, BIM 360, Dynamo, and LOD. It helped me secure a job abroad.'
  },
  {
    id: 'malikdeenar',
    name: 'Malikdeenar',
    category: 'autocad',
    role: 'AutoCAD & Drafting',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/malikdeenar.png',
    quote:
      'I am Malik Deenar. Here I chose the AutoCAD course. The classes were highly useful and professional. Here I got the best classes and better atmosphere. CADD Centre Manjeri is the leading centre in Malappuram for AutoCAD.'
  }
];

export default function TestimonialsFinbiz() {
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  // Infinite items for smooth continuous sliding
  const displayItems = useMemo(() => {
    return [...VERIFIED_REVIEWS, ...VERIFIED_REVIEWS];
  }, []);

  // Autoplay sliding motion
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          sliderRef.current.scrollLeft = 0;
        } else {
          sliderRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const amount = direction === 'left' ? -360 : 360;
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="py-10 sm:py-14 bg-[#FAFAFA] relative overflow-hidden select-none border-t border-gray-100"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header with Integrated Controls & Zero Wasted Gap */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5 sm:mb-6 text-left">
          <div className="space-y-1.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-red-50 border border-red-200/70 text-xs font-bold uppercase tracking-wider text-[#C4161C]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C4161C] animate-pulse" />
              <span>GOOGLE VERIFIED REVIEWS • 4.9 ★ RATING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Words of Appreciation from Our Students
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-relaxed">
              Real, verified Google reviews from engineering and architecture students trained at CADD Centre Manjeri.
            </p>
          </div>

          {/* Right Controls: Google Rating Link + Play/Pause + Navigation Arrows */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-start md:self-end">
            <a
              href={GOOGLE_MAPS_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 shadow-2xs text-xs font-bold text-gray-800 transition-all cursor-pointer group"
              title="Open CADD Centre Manjeri Google Maps Reviews"
            >
              {/* Google Colored G Icon */}
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>4.9 ★ (450+ Reviews)</span>
              <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-[#C4161C] transition-colors" />
            </a>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold border transition-all cursor-pointer bg-white text-gray-700 hover:text-gray-950 border-gray-200 shadow-2xs"
              title="Toggle automatic review sliding"
            >
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              {isPlaying ? <Pause className="w-3 h-3 text-gray-500" /> : <Play className="w-3 h-3 text-[#C4161C]" />}
            </button>

            <button
              type="button"
              onClick={() => scrollSlider('left')}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollSlider('right')}
              className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#C4161C] hover:text-[#C4161C] text-gray-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* MODERN UPRIGHT CAROUSEL SLIDER (NO TILTING, NO OVERLAPPING) */}
        <div
          ref={sliderRef}
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar py-3 scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {displayItems.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[300px] sm:w-[350px] md:w-[380px] shrink-0 bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md hover:border-[#C4161C]/50 transition-all duration-300 flex flex-col justify-between text-left relative group select-none"
            >
              {/* Subtle Quote Background Icon */}
              <Quote className="absolute top-5 right-5 w-10 h-10 text-gray-100 group-hover:text-red-50 transition-colors pointer-events-none" />

              <div>
                {/* Header: Profile Photo + Info + Google Badge */}
                <div className="flex items-center gap-3.5 mb-4 relative z-10">
                  {/* Real Student Profile Photo with Google Badge */}
                  <div className="relative shrink-0">
                    <div className="w-13 h-13 rounded-full overflow-hidden border-2 border-white shadow-sm ring-2 ring-gray-100 bg-gray-50">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                      />
                    </div>
                    {/* Google G Logo Badge on Avatar */}
                    <div
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center p-0.5"
                      title="Verified on Google Maps"
                    >
                      <svg className="w-full h-full" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-sm sm:text-base font-extrabold text-[#111827] tracking-tight leading-snug truncate">
                        {review.name}
                      </h3>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" title="Verified Google Reviewer" />
                    </div>
                    <div className="text-[11.5px] font-bold text-[#C4161C] mt-0.5 truncate">
                      {review.role}
                    </div>
                  </div>
                </div>

                {/* Star Rating + Time */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-gray-900">5.0</span>
                  <span className="text-[11px] text-gray-400 font-medium">• {review.time}</span>
                </div>

                {/* Review Quote Body */}
                <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed line-clamp-4 group-hover:text-gray-900 transition-colors">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Card Footer: Verified Badge + Direct Google Maps Link */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-100 text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Verified Google Student</span>
                </span>

                <a
                  href={GOOGLE_MAPS_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#C4161C] font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  title="Read this review on Google Maps"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: View All Reviews & Leave a Review */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-gray-200/90 shadow-xs text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Rated 4.9 / 5.0 by 450+ Verified Students on Google Maps
              </h4>
              <p className="text-xs text-gray-500">
                Kerala's top-rated CAD, BIM, Interior, and MEP engineering training campus in Manjeri.
              </p>
            </div>
          </div>

          <a
            href={GOOGLE_MAPS_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#11161E] hover:bg-[#C4161C] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs active:scale-97 shrink-0 flex items-center gap-2"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
