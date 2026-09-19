import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

// Single point of truth for the enquiry number used by both buttons.
const PHONE = '+918891550060';
const PHONE_DISPLAY = '+91 88915 50060';
const WHATSAPP = 'https://wa.me/918891550060';
const INSTAGRAM = 'https://www.instagram.com/caddcentremanjeri';
const INSTAGRAM_HANDLE = '@caddcentremanjeri';

const ANNOUNCEMENTS = [
  { text: 'Online & Offline Classes Available', color: 'bg-[#EF4444]' },
  { text: 'Sunday & Saturday Weekend Classes Available', color: 'bg-emerald-400' },
  { text: 'Early Morning & Night Batches Available', color: 'bg-amber-400' },
];

// lucide-react no longer ships brand marks, so the WhatsApp glyph is inlined.
function WhatsAppGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12.05 21.785h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

// Same outline mark the footer uses, so the brand reads consistently.
function InstagramGlyph({ className }) {
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

/**
 * Persistent call / WhatsApp / Instagram buttons + floating live announcement pill.
 */
export default function FloatingContact({ onOpenDemo }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const activeAnno = ANNOUNCEMENTS[index];

  return (
    <div
      className="pointer-events-none fixed inset-x-0 z-40"
      style={{ bottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="mx-auto max-w-[1680px] px-3 sm:px-6 flex justify-end">

        {/* Single Unified Floating Glassmorphic Capsule Dock */}
        <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-full bg-[#080D14]/92 backdrop-blur-xl border border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">

          {/* Left Announcement Ticker Section (Clickable to open Enquiry Modal) */}
          <div
            onClick={() => { if (onOpenDemo) onOpenDemo(); }}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1 cursor-pointer hover:bg-white/5 rounded-full transition-colors group max-w-[210px] min-[400px]:max-w-[280px] sm:max-w-none"
            title="Click to enquire / view batches"
          >
            <span className={`w-2 h-2 rounded-full ${activeAnno.color} animate-pulse shrink-0 shadow-[0_0_8px_currentColor]`} />
            <span className="text-[10.5px] sm:text-xs font-bold text-white tracking-wide truncate max-w-[170px] min-[400px]:max-w-[240px] sm:max-w-none">
              {activeAnno.text}
            </span>
          </div>

          {/* Subtle Vertical Divider Line */}
          <div className="w-[1px] h-6 bg-white/20 shrink-0" />

          {/* Right Contact Icons: Call, WhatsApp, Instagram */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Call */}
            <a
              href={`tel:${PHONE}`}
              aria-label={`Call CADD Centre Manjeri on ${PHONE_DISPLAY}`}
              title={`Call ${PHONE_DISPLAY}`}
              className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full bg-[#C4161C] hover:bg-[#A81217] text-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chat with CADD Centre Manjeri on WhatsApp`}
              title={`WhatsApp ${PHONE_DISPLAY}`}
              className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5A] text-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <WhatsAppGlyph className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message CADD Centre Manjeri on Instagram`}
              title={`Instagram ${INSTAGRAM_HANDLE}`}
              className="w-8.5 h-8.5 sm:w-9.5 sm:h-9.5 rounded-full bg-[linear-gradient(45deg,#F58529_0%,#DD2A7B_45%,#8134AF_70%,#515BD4_100%)] text-white flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <InstagramGlyph className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
