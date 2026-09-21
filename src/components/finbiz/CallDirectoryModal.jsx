import React, { useState, useEffect } from 'react';
import {
  Phone,
  PhoneCall,
  MessageCircle,
  X,
  GraduationCap,
  Briefcase,
  Building2,
  Check,
  Copy,
  ExternalLink,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

const DEPARTMENTS = [
  {
    id: 'course-enquiry',
    tabName: 'Course Enquiry',
    badge: 'Curriculum & Fees',
    title: 'Course Enquiry Desk',
    subtitle: 'CAD, BIM, Interior, Mechanical & Project Management Courses',
    phone: '+91 88915 50060',
    cleanPhone: '+918891550060',
    whatsapp: '918891550060',
    whatsappMsg: 'Hi CADD Centre Manjeri, I would like to enquire about course syllabus, batch timings and fee details.',
    icon: GraduationCap,
    timing: 'Mon – Sat: 8:30 AM – 7:30 PM',
    tag: 'Course Enquiry',
    color: '#C4161C',
    description: 'Direct assistance for curriculum details, software modules, class schedules, and flexible batch timings.'
  },
  {
    id: 'admissions',
    tabName: 'Admissions',
    badge: 'Seat Booking & Enrollment',
    title: 'Admissions & Seat Registration',
    subtitle: 'Direct Admissions, Scholarship Guidance & Batch Allocation',
    phone: '+91 88918 50060',
    cleanPhone: '+918891850060',
    whatsapp: '918891850060',
    whatsappMsg: 'Hi CADD Centre Manjeri, I want to take admission for upcoming batches and know about enrollment procedures.',
    icon: Building2,
    timing: 'Mon – Sat: 9:00 AM – 7:00 PM',
    tag: 'Admissions Desk',
    color: '#E11D48',
    description: 'Dedicated admissions officer for instant seat reservation, batch allocation, student ID, and admission verification.'
  },
  {
    id: 'placements',
    tabName: 'Placements',
    badge: 'GCC & MNC Careers',
    title: 'Corporate Placement Cell',
    subtitle: 'Campus Recruitment, Gulf Job Assistance & Interview Prep',
    phone: '+91 95441 69638',
    cleanPhone: '+919544169638',
    whatsapp: '919544169638',
    whatsappMsg: 'Hi CADD Centre Placement Cell, I would like to enquire regarding placement support, interview drives, and recruiter tie-ups.',
    icon: Award,
    timing: 'Mon – Sat: 9:30 AM – 6:00 PM',
    tag: 'Placement Cell',
    color: '#059669',
    description: 'Support for alumni placements across UAE, Qatar, Saudi Arabia & India, interview scheduling, and recruitment drives.'
  },
  {
    id: 'internships',
    tabName: 'Internships',
    badge: 'KTU Approved Training',
    title: 'Certified Engineering Internships',
    subtitle: 'KTU Approved 15-Day to 6-Month Industrial Training',
    phone: '+91 87142 69638',
    cleanPhone: '+918714269638',
    whatsapp: '918714269638',
    whatsappMsg: 'Hi CADD Centre Manjeri, I would like to enquire about Engineering Internship programs and live project training.',
    icon: Briefcase,
    timing: 'Mon – Sat: 9:00 AM – 6:30 PM',
    tag: 'Internship Desk',
    color: '#0D62FE',
    description: 'Certified 1 to 6-month industrial internships for B.Tech, Diploma & Architecture students with real live drawing submissions.'
  },
  {
    id: 'projects',
    tabName: 'Projects',
    badge: 'Live Drawing & Academic',
    title: 'Academic & Live Projects Desk',
    subtitle: 'Final Year B.Tech/Diploma Projects, 3D Models & Drawings',
    phone: '+91 62355 50078',
    cleanPhone: '+916235550078',
    whatsapp: '916235550078',
    whatsappMsg: 'Hi CADD Centre Manjeri, I would like to enquire about academic project guidance and commercial drawing submissions.',
    icon: Layers,
    timing: 'Mon – Sat: 9:00 AM – 6:30 PM',
    tag: 'Projects Desk',
    color: '#7C3AED',
    description: 'Specialized assistance for final year B.Tech/Diploma capstone projects, 3D modelling, analysis, and thesis drawing sheets.'
  }
];

export default function CallDirectoryModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('all');
  const [copiedId, setCopiedId] = useState(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (id, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const displayedDepts = activeTab === 'all'
    ? DEPARTMENTS
    : DEPARTMENTS.filter((d) => d.id === activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/65 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[92vh] sm:max-h-[88vh]">

        {/* 1. MODAL HEADER */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-r from-gray-900 via-[#111827] to-gray-900 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-md">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-[10.5px] font-mono font-bold tracking-wider uppercase text-[#FF5A43] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>DIRECT DEDICATED LINES</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                Call CADD Centre Manjeri
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
            title="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 2. DEPARTMENT TABS (Fast Switcher) */}
        <div className="px-4 py-2.5 sm:px-6 sm:py-3 bg-gray-50 border-b border-gray-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              activeTab === 'all'
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80 hover:bg-gray-100'
            }`}
          >
            All Desks ({DEPARTMENTS.length})
          </button>

          {DEPARTMENTS.map((dept) => {
            const isActive = activeTab === dept.id;
            return (
              <button
                key={dept.id}
                type="button"
                onClick={() => setActiveTab(dept.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-[#C4161C] text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80 hover:bg-gray-100'
                }`}
              >
                <span>{dept.tabName}</span>
              </button>
            );
          })}
        </div>

        {/* 3. SCROLLABLE DEPARTMENT CARDS LIST */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 sm:space-y-4">
          {displayedDepts.map((dept) => {
            const Icon = dept.icon;
            const isCopied = copiedId === dept.id;

            return (
              <div
                key={dept.id}
                className="p-4 sm:p-5 rounded-2xl border border-gray-200/90 bg-white hover:border-[#C4161C]/50 hover:shadow-md transition-all relative overflow-hidden group"
              >
                {/* Accent line on left */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-1.5"
                  style={{ backgroundColor: dept.color }}
                />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pl-1.5">

                  {/* Left: Department Info */}
                  <div className="space-y-1 text-left min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-700">
                        {dept.badge}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-extrabold text-gray-900 leading-snug">
                      {dept.title}
                    </h4>

                    <p className="text-xs text-gray-500 leading-relaxed max-w-md">
                      {dept.description}
                    </p>

                    {/* Big Phone Number Display */}
                    <div className="pt-1 flex items-center gap-2">
                      <span className="text-base sm:text-lg font-mono font-black text-gray-900 tracking-tight">
                        {dept.phone}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(dept.id, dept.cleanPhone)}
                        className="p-1 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                        title="Copy phone number"
                      >
                        {isCopied ? (
                          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                            <Check className="w-3.5 h-3.5" /> Copied
                          </span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Right: Quick Action Buttons (Call Now & WhatsApp) */}
                  <div className="flex sm:flex-col items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    {/* Direct Call Button */}
                    <a
                      href={`tel:${dept.cleanPhone}`}
                      className="w-full sm:w-36 py-2.5 px-3.5 rounded-xl bg-[#C4161C] hover:bg-[#a51217] text-white text-xs font-bold transition-all shadow-sm hover:shadow flex items-center justify-center gap-1.5 cursor-pointer active:scale-97 text-center shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>

                    {/* WhatsApp Chat Button */}
                    <a
                      href={`https://wa.me/${dept.whatsapp}?text=${encodeURIComponent(dept.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-36 py-2 px-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-97 text-center shrink-0"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* 4. FOOTER NOTE */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500 shrink-0">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C4161C]" />
            <span>Authorized Autodesk &amp; Bentley Training Partner • Manjeri</span>
          </div>
          <span className="text-[11px] text-gray-400 font-mono">
            2nd Floor, Korambayil Corporate Mall
          </span>
        </div>

      </div>
    </div>
  );
}
