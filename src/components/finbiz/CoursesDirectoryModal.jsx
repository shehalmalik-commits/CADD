import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Search,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { MASTER_COURSES } from '../../data/coursesDataFinbiz';

const DISCIPLINES = [
  { id: 'all', label: 'All Programs', count: 36 },
  { id: 'bim', label: 'BIM Architecture', count: 6 },
  { id: 'interior', label: 'Interior Design', count: 5 },
  { id: 'mep', label: 'MEP with BIM', count: 5 },
  { id: 'structural', label: 'Structural Design', count: 6 },
  { id: 'product', label: 'Product Design', count: 4 },
  { id: 'autocad', label: 'AutoCAD', count: 3 },
  { id: 'survey', label: 'Surveying & Civil', count: 4 },
  { id: 'ppm', label: 'PPM / Primavera', count: 3 },
];

export default function CoursesDirectoryModal({ isOpen, onClose, onSelectCourse }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

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

  const filteredCourses = useMemo(() => {
    return MASTER_COURSES.filter((course) => {
      const matchesTab = activeTab === 'all' || course.disciplineKey === activeTab;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        course.title.toLowerCase().includes(q) ||
        course.disciplineName.toLowerCase().includes(q) ||
        (course.tools && course.tools.some((t) => t.toLowerCase().includes(q))) ||
        (course.tag && course.tag.toLowerCase().includes(q));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[90vh] sm:max-h-[85vh]">

        {/* 1. Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 bg-gradient-to-r from-gray-950 via-[#111827] to-gray-900 text-white flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C4161C] text-white flex items-center justify-center shrink-0 shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-[#FF5A43] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>ALL ACCREDITED PROGRAMS</span>
              </div>
              <h3 className="text-base sm:text-lg font-extrabold text-white leading-tight">
                CADD Centre Course Directory
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

        {/* 2. Search & Discipline Tabs */}
        <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-100 shrink-0 space-y-2.5">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses by name or software (Revit, AutoCAD, 3ds Max...)"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C4161C]/30 focus:border-[#C4161C] shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Discipline Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {DISCIPLINES.map((dept) => {
              const isActive = activeTab === dept.id;
              return (
                <button
                  key={dept.id}
                  type="button"
                  onClick={() => setActiveTab(dept.id)}
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0 ${
                    isActive
                      ? 'bg-[#C4161C] text-white shadow-xs'
                      : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80 hover:bg-gray-100'
                  }`}
                >
                  <span>{dept.label}</span>
                  <span className={`text-[9.5px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {dept.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Course List */}
        <div className="p-3 sm:p-5 overflow-y-auto space-y-2.5 divide-y divide-gray-100">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <BookOpen className="w-8 h-8 mx-auto mb-2 text-gray-300" />
              <p className="text-xs sm:text-sm font-semibold text-gray-700">No courses matching &quot;{searchQuery}&quot;</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for other keywords like Revit, Civil, MEP, or Interior.</p>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => {
                  if (onSelectCourse) {
                    onSelectCourse(course);
                  }
                  onClose();
                }}
                className="pt-2.5 first:pt-0 group flex items-center justify-between gap-3 p-3 rounded-2xl hover:bg-red-50/50 hover:border-[#C4161C]/30 border border-transparent transition-all cursor-pointer"
              >
                <div className="space-y-1 min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-gray-100 text-gray-700 group-hover:bg-[#C4161C] group-hover:text-white transition-colors">
                      {course.disciplineName}
                    </span>
                    {course.duration && (
                      <span className="text-[10.5px] text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span>{course.duration}</span>
                      </span>
                    )}
                    {course.tag && (
                      <span className="text-[10px] text-emerald-600 font-bold hidden sm:inline">
                        • {course.tag}
                      </span>
                    )}
                  </div>

                  <h4 className="text-xs sm:text-sm font-extrabold text-gray-900 group-hover:text-[#C4161C] transition-colors leading-snug truncate">
                    {course.title}
                  </h4>

                  {course.tools && course.tools.length > 0 && (
                    <p className="text-[10.5px] sm:text-[11px] text-gray-500 truncate">
                      <span className="font-medium text-gray-600">Software: </span>
                      {course.tools.join(', ')}
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gray-100 group-hover:bg-[#C4161C] text-gray-700 group-hover:text-white transition-colors text-[11px] font-bold">
                  <span className="hidden sm:inline">Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. Footer info */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 shrink-0">
          <span className="text-[11px] text-gray-500">
            Showing <strong>{filteredCourses.length}</strong> of {MASTER_COURSES.length} programs
          </span>
          <a
            href="#courses"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              const el = document.getElementById('courses');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="text-[11px] font-bold text-[#C4161C] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Browse Section</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}
