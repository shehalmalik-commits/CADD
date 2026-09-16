import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterFinbiz() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 -mb-16 z-30">
      <div className="relative rounded-[36px] overflow-hidden bg-[#C4161C] p-8 sm:p-12 shadow-2xl shadow-[#C4161C]/30 text-white">

        {/* Subtle background photo overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
          <img
            src="/images/why-choose-us.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Left Title */}
          <div className="text-left space-y-1 w-full lg:w-auto">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              DOWNLOAD CURRICULUM
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
              Get Course Syllabus &amp; Fees
            </h3>
          </div>

          {/* Right Input Form */}
          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-auto flex-1 max-w-xl flex flex-col sm:flex-row items-stretch sm:items-center bg-transparent sm:bg-white rounded-2xl sm:rounded-full p-0 sm:p-2 gap-2.5 sm:gap-0 shadow-none sm:shadow-inner"
          >
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email or WhatsApp Number"
              className="w-full sm:flex-1 px-5 py-3.5 sm:py-2.5 bg-white sm:bg-transparent rounded-full text-xs sm:text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none shadow-sm sm:shadow-none"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-3 rounded-full bg-[#11161E] hover:bg-black text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shrink-0 shadow-md active:scale-95 text-center flex items-center justify-center"
            >
              {subscribed ? (
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Brochure Sent!</span>
                </span>
              ) : (
                <span>Download Brochure</span>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
