import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    id: 'sharuz',
    name: 'sharuz vlog',
    role: 'BIM for Architecture',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/sharuz-vlog.jpg',
    quote:
      'I am Sarath from Koppam. I had a great and best learning experience at CADD Centre Manjeri doing the BIM for Architecture course. The trainers explain complex concepts in a very simple and practical way, making it easy to understand. They focus on real-world projects which is very helpful. The institute also provides good guidance regarding placement opportunities.'
  },
  {
    id: 'shibil',
    name: 'Shibil Shibil',
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
    role: 'BIM for Architecture',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/sarania-saneesh.jpg',
    quote:
      'As a BIM for architecture student of CADD Centre Manjeri, I had a great learning experience. The trainers are highly supportive and explain concepts clearly with practical examples. The classes are well-structured and industry-oriented, which helped me improve my technical skills and confidence.'
  },
  {
    id: 'sreni',
    name: 'Sreni Maneesha',
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
    role: 'MEP Course',
    rating: 5,
    time: '6 months ago',
    avatar: '/images/reviews/mhd-afnan.jpg',
    quote:
      'CADD centre Manjeri is a top institution for MEP courses. All teachers are very friendly, knowledgeable and provide good practical exposure.'
  },
  {
    id: 'prathul',
    name: 'Prathul Prathul',
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
    role: 'Interior Design',
    rating: 5,
    time: '5 months ago',
    avatar: '/images/reviews/sneha-tk.jpg',
    quote:
      'I am Sneha, BSc Computer Science graduate. I joined for the best Interior designing course including AutoCAD, SketchUp, 3ds Max and Lumion at CADD Centre Manjeri. The faculty experience was very talented faculties and working professionals. I got placed as well!'
  },
  {
    id: 'shana',
    name: 'Shana_Hasbu',
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
    role: 'AutoCAD & Drafting',
    rating: 5,
    time: '3 months ago',
    avatar: '/images/reviews/malikdeenar.png',
    quote:
      'I am Malik Deenar. Here I chose the AutoCAD course. The classes were highly useful and professional. Here I got the best classes and better atmosphere. CADD Centre Manjeri is the leading centre in Malappuram for AutoCAD.'
  }
];

export default function TestimonialsFinbiz() {
  // Center card initially on Darshana K (index 2) exactly matching Image 2
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const total = REVIEWS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Auto-play interval with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#FBFBFC] relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Section Header Matching Image 2 */}
        <div className="max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111827] tracking-tight leading-[1.2]">
            Words of Appreciation from Our Students
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-gray-500 font-normal max-w-2xl mx-auto leading-relaxed">
            Verified Google reviews from engineering and architecture students trained at CADD Centre Manjeri.
          </p>
        </div>

        {/* 3D Stacked / Fanned Carousel Container */}
        <div
          className="relative h-[480px] sm:h-[500px] max-w-5xl mx-auto flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {REVIEWS.map((review, idx) => {
            // Calculate relative offset from currentIndex: -2, -1, 0, 1, 2
            let diff = idx - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isVisible = Math.abs(diff) <= 2;
            const isCenter = diff === 0;

            // Responsive offsets and rotation for the fan-out deck
            let transformStyle = '';
            let zIndex = 10;
            let opacity = 0;
            let pointerEvents = 'none';

            if (isCenter) {
              transformStyle = 'translateX(-50%) translateY(0) scale(1) rotate(0deg)';
              zIndex = 30;
              opacity = 1;
              pointerEvents = 'auto';
            } else if (diff === -1) {
              transformStyle = 'translateX(calc(-50% - 210px)) translateY(12px) scale(0.92) rotate(-6.5deg)';
              zIndex = 20;
              opacity = 0.78;
              pointerEvents = 'auto';
            } else if (diff === -2) {
              transformStyle = 'translateX(calc(-50% - 390px)) translateY(30px) scale(0.83) rotate(-13deg)';
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = 'auto';
            } else if (diff === 1) {
              transformStyle = 'translateX(calc(-50% + 210px)) translateY(12px) scale(0.92) rotate(6.5deg)';
              zIndex = 20;
              opacity = 0.78;
              pointerEvents = 'auto';
            } else if (diff === 2) {
              transformStyle = 'translateX(calc(-50% + 390px)) translateY(30px) scale(0.83) rotate(13deg)';
              zIndex = 10;
              opacity = 0.45;
              pointerEvents = 'auto';
            } else {
              // Off-screen hidden cards
              const dir = diff > 0 ? 1 : -1;
              transformStyle = `translateX(calc(-50% + ${dir * 500}px)) translateY(50px) scale(0.7) rotate(${dir * 18}deg)`;
              zIndex = 0;
              opacity = 0;
              pointerEvents = 'none';
            }

            return (
              <div
                key={review.id}
                onClick={() => {
                  if (!isCenter && isVisible) {
                    setCurrentIndex(idx);
                  }
                }}
                style={{
                  transform: transformStyle,
                  transformOrigin: '50% 115%',
                  left: '50%',
                  zIndex,
                  opacity,
                  pointerEvents
                }}
                className={`absolute top-0 w-[300px] sm:w-[350px] md:w-[380px] h-[440px] sm:h-[460px] bg-white rounded-[26px] p-6 sm:p-7 flex flex-col items-center justify-between text-center transition-all duration-500 ease-out cursor-pointer ${isCenter
                    ? 'border-2 border-[#C4161C] shadow-[0_24px_60px_rgba(196,22,28,0.14)]'
                    : 'border border-gray-200/80 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:opacity-95'
                  }`}
              >
                {/* Top Section: Avatar with Google G Badge */}
                <div className="w-full flex flex-col items-center">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-gray-100 ring-2 ring-gray-100/60">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Google G Logo Badge */}
                    <div
                      className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center p-1"
                      title="Google Review"
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

                  {/* Student Name + Verified Checkmark Badge */}
                  <div className="flex items-center justify-center gap-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                      {review.name}
                    </h3>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>

                  {/* Red / Coral Course Category */}
                  <div className="text-xs font-semibold text-[#C4161C] mt-0.5">
                    {review.role}
                  </div>

                  {/* Star Rating + 5.0 + Time */}
                  <div className="flex items-center justify-center gap-1.5 mt-2.5">
                    <div className="flex items-center gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-900">5.0</span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-[11px] text-gray-500 font-medium">
                      {review.time}
                    </span>
                  </div>
                </div>

                {/* Review Quote Body */}
                <div className="my-auto py-2">
                  <p className="text-xs sm:text-[13px] text-gray-600 font-normal leading-relaxed line-clamp-5">
                    "{review.quote}"
                  </p>
                </div>

                {/* Subtle Bottom Trust Indicator */}
                <div className="w-full pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Verified Google Student Review</span>
                </div>
              </div>
            );
          })}

          {/* Navigation Controls: Left & Right Arrow Buttons */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Review"
            className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200 text-gray-700 hover:text-[#C4161C] hover:border-[#C4161C] hover:scale-110 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Review"
            className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-gray-200 text-gray-700 hover:text-[#C4161C] hover:border-[#C4161C] hover:scale-110 flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${i === currentIndex
                  ? 'w-8 h-2.5 bg-[#C4161C]'
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

