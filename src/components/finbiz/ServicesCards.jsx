import React from 'react';
import { Target, ArrowRight, Compass, Building2, Cpu } from 'lucide-react';

const STUDY_DISCIPLINES = [
  {
    id: 1,
    title: 'Master Certificate in BIM',
    desc: 'Comprehensive Building Information Modeling covering Revit Architecture, Structure, MEP, Navisworks Manage, and ISO 19650 international standards.',
    icon: Compass,
    tag: 'Autodesk Certified'
  },
  {
    id: 2,
    title: 'Civil & Structural Engineering',
    desc: 'High-rise structural analysis, steel detailing, and civil infrastructure planning utilizing ETABS, STAAD.Pro, Tekla Structures, and AutoCAD Civil 3D.',
    icon: Building2,
    tag: 'Bentley Certified'
  },
  {
    id: 3,
    title: 'Mechanical CAD & MEP Systems',
    desc: 'Industry-standard parametric product design, automotive modeling, and HVAC/MEP building services with SolidWorks, CATIA, and Revit MEP.',
    icon: Cpu,
    tag: 'Industry 4.0'
  }
];

export default function ServicesCards({ onOpenDemo }) {
  return (
    <section id="services" className="pt-4 sm:pt-6 pb-16 sm:pb-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Row: Eyebrow + Title + View All Button */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            {/* Red Eyebrow with Target Icon */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C4161C]">
              <Target className="w-3.5 h-3.5 text-[#C4161C]" />
              <span>STUDY DISCIPLINES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-tight">
              Together we can engineer <br className="hidden sm:inline" />
              your future
            </h2>
          </div>

          {/* Right Red Button: "VIEW ALL COURSES →" */}
          <div className="w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer active:scale-96"
            >
              <span>VIEW ALL COURSES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Discipline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STUDY_DISCIPLINES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                onClick={onOpenDemo}
                className="bg-[#FBFBFB] rounded-[24px] p-8 sm:p-10 border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left group cursor-pointer"
              >
                {/* Octagonal Line Icon Frame matching Reference Image 1 */}
                <div className="w-14 h-14 rounded-2xl border border-[#C4161C]/25 bg-white flex items-center justify-center mb-7 group-hover:bg-[#C4161C] group-hover:border-[#C4161C] transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6 text-[#C4161C] group-hover:text-white transition-colors duration-300 stroke-[1.8]" />
                </div>

                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#C4161C]/8 text-[#C4161C] text-[10px] font-bold uppercase tracking-wider mb-3">
                  {srv.tag}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C4161C] transition-colors">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed">
                  {srv.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
