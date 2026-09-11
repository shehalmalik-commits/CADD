import React from 'react';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center', // 'left' | 'center'
  className = '',
  light = false
}) {
  const alignClasses = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <div className={`flex flex-col max-w-3xl space-y-3 ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span className="text-[11px] font-bold text-blue-600 uppercase tracking-[0.14em]">
            {eyebrow}
          </span>
        </div>
      )}

      {title && (
        <h2 className={`text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15] ${light ? 'text-white' : 'text-slate-900'
          }`}>
          {title}
        </h2>
      )}

      {description && (
        <p className={`text-sm sm:text-base font-normal leading-relaxed max-w-2xl ${light ? 'text-slate-200' : 'text-slate-600'
          }`}>
          {description}
        </p>
      )}
    </div>
  );
}
