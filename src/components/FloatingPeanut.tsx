'use client';

import { useState } from 'react';

export default function FloatingPeanut() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-[120px] z-50">
      {/* Chat popup */}
      {isOpen && (
        <div
          className="absolute bottom-24 right-0 w-72 bg-gb border border-dg/15 rounded-2xl shadow-2xl overflow-hidden"
          style={{ animation: 'popUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          <div className="bg-dg px-5 py-4">
            <h4 className="text-gb font-serif text-base">Sri Velavan</h4>
            <p className="text-gb/60 text-xs font-light">We typically reply instantly</p>
          </div>
          <div className="p-4">
            <div className="bg-dg/5 rounded-xl px-4 py-3 mb-4">
              <p className="text-dg text-sm leading-relaxed">
                👋 Hello! Looking for premium Red Skin Peanuts? We&apos;d love to help with your bulk order.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <a
                  href="https://wa.me/919176646043?text=Hello%20Sri%20Velavan%2C%20I%20need%20a%20peanut%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium py-2.5 rounded-xl transition-colors duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="tel:+919176646043"
                  className="flex items-center justify-center gap-2 bg-dg hover:bg-dg/90 text-gb text-sm font-medium px-4 py-2.5 rounded-xl transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call
                </a>
              </div>
              <a
                href="mailto:Support.srivelavan@gmail.com"
                className="flex items-center justify-center gap-2 bg-dg/5 hover:bg-dg/10 text-dg text-xs font-medium py-2 rounded-xl transition-colors duration-300 border border-dg/10"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Support.srivelavan@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating peanut button with shell-crack animation */}
      <button
        onClick={handleToggle}
        className="group relative w-[52px] h-[80px] flex items-center justify-center cursor-pointer"
        style={{ animation: isOpen ? 'none' : 'peanutFloat 3s ease-in-out infinite' }}
        aria-label="Chat with us"
      >
        {/* Closed state: Bean-shaped peanut shell */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ opacity: isOpen ? 0 : 1, transform: isOpen ? 'scale(0.5)' : 'scale(1)' }}
        >
          <svg viewBox="0 0 48 80" className="w-full h-full drop-shadow-lg filter hover:brightness-110 transition-all duration-300">
            <defs>
              <radialGradient id="shellGrad" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#EDD49A" />
                <stop offset="40%" stopColor="#D4A96A" />
                <stop offset="100%" stopColor="#A87D3E" />
              </radialGradient>
              <radialGradient id="shellShine" cx="30%" cy="25%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0)" />
              </radialGradient>
            </defs>
            {/* Shadow */}
            <ellipse cx="24" cy="76" rx="14" ry="3" fill="rgba(0,0,0,0.12)" />
            {/* Main peanut bean shape — two lobes */}
            <path
              d="M24 2 C10 2 4 14 4 26 C4 34 8 38 12 40 C8 42 4 46 4 56 C4 68 14 78 24 78 C34 78 44 68 44 56 C44 46 40 42 36 40 C40 38 44 34 44 26 C44 14 38 2 24 2Z"
              fill="url(#shellGrad)"
              stroke="#9A7035"
              strokeWidth="1"
            />
            {/* Waist indentation */}
            <path d="M8 40 Q24 34 40 40" fill="none" stroke="#A07840" strokeWidth="1.2" opacity="0.5" />
            <path d="M10 41 Q24 47 38 41" fill="none" stroke="#A07840" strokeWidth="0.8" opacity="0.3" />
            {/* Bumpy texture — horizontal ridges */}
            <path d="M10 14 Q24 11 38 14" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <path d="M8 22 Q24 19 40 22" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <path d="M8 30 Q24 27 40 30" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <path d="M10 50 Q24 47 38 50" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <path d="M8 58 Q24 55 40 58" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            <path d="M10 66 Q24 63 38 66" fill="none" stroke="#C4A060" strokeWidth="0.7" opacity="0.3" />
            {/* Vertical center seam */}
            <path d="M24 4 Q22 20 24 40 Q26 60 24 76" fill="none" stroke="#B08545" strokeWidth="0.8" opacity="0.35" />
            {/* Top lobe highlight */}
            <ellipse cx="18" cy="18" rx="7" ry="10" fill="url(#shellShine)" />
            {/* Bottom lobe highlight */}
            <ellipse cx="18" cy="56" rx="6" ry="9" fill="url(#shellShine)" />
            {/* Small texture bumps */}
            <circle cx="14" cy="26" r="1.5" fill="#C4A060" opacity="0.15" />
            <circle cx="34" cy="20" r="1.5" fill="#C4A060" opacity="0.15" />
            <circle cx="16" cy="52" r="1.5" fill="#C4A060" opacity="0.15" />
            <circle cx="32" cy="60" r="1.5" fill="#C4A060" opacity="0.15" />
          </svg>
        </div>

        {/* Open state: Cracked shell with kernel revealed */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'scale(1)' : 'scale(1.3)', pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          <svg viewBox="0 0 90 72" className="w-[90px] h-[72px] drop-shadow-lg overflow-visible">
            <defs>
              <radialGradient id="shellGradL" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#EDD49A" />
                <stop offset="100%" stopColor="#B08545" />
              </radialGradient>
              <radialGradient id="kernelGrad" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#D4854F" />
                <stop offset="50%" stopColor="#C4713D" />
                <stop offset="100%" stopColor="#A85C2F" />
              </radialGradient>
            </defs>

            {/* Left shell half — cracked open */}
            <g style={{ animation: isOpen ? 'shellLeft 0.5s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}>
              <path
                d="M30 6 C14 8 6 20 6 36 C6 52 14 64 30 66 Q36 56 36 36 Q36 16 30 6Z"
                fill="url(#shellGradL)"
                stroke="#A07840"
                strokeWidth="0.8"
              />
              <path d="M15 20 Q24 22 32 18" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
              <path d="M12 36 Q22 38 34 34" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
              <path d="M15 52 Q24 50 32 54" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
            </g>

            {/* Right shell half — cracked open */}
            <g style={{ animation: isOpen ? 'shellRight 0.5s cubic-bezier(0.16,1,0.3,1) forwards' : 'none' }}>
              <path
                d="M60 6 C76 8 84 20 84 36 C84 52 76 64 60 66 Q54 56 54 36 Q54 16 60 6Z"
                fill="url(#shellGradL)"
                stroke="#A07840"
                strokeWidth="0.8"
              />
              <path d="M75 20 Q66 22 58 18" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
              <path d="M78 36 Q68 38 56 34" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
              <path d="M75 52 Q66 50 58 54" fill="none" stroke="#C49A5C" strokeWidth="0.6" opacity="0.3" />
            </g>

            {/* Kernel (nut) revealed in the center */}
            <g style={{ animation: isOpen ? 'kernelReveal 0.6s cubic-bezier(0.16,1,0.3,1) 0.2s forwards' : 'none', opacity: 0 }}>
              <ellipse cx="45" cy="36" rx="12" ry="18" fill="url(#kernelGrad)" />
              {/* Kernel highlight */}
              <ellipse cx="42" cy="28" rx="5" ry="8" fill="#E09A60" opacity="0.4" />
              {/* Kernel line */}
              <path d="M45 18 Q44 36 45 54" fill="none" stroke="#A85C2F" strokeWidth="0.8" opacity="0.4" />
              {/* Top shine */}
              <ellipse cx="42" cy="24" rx="3" ry="4" fill="white" opacity="0.2" />
            </g>

            {/* Small shell fragments */}
            <g style={{ animation: isOpen ? 'fragmentsScatter 0.5s ease-out forwards' : 'none', opacity: 0 }}>
              <rect x="32" y="10" width="4" height="3" rx="1" fill="#D4C4A0" transform="rotate(25 34 11)" />
              <rect x="54" y="14" width="3" height="4" rx="1" fill="#D4C4A0" transform="rotate(-15 55 16)" />
              <rect x="36" y="58" width="3" height="3" rx="1" fill="#D4C4A0" transform="rotate(40 37 59)" />
              <rect x="52" y="56" width="4" height="2" rx="1" fill="#D4C4A0" transform="rotate(-30 54 57)" />
            </g>
          </svg>
        </div>

        {/* Notification dot */}
        {!isOpen && (
          <span className="absolute -top-1 right-0 w-4 h-4 bg-[#25D366] rounded-full border-2 border-gb flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </span>
        )}
      </button>

      <style jsx>{`
        @keyframes peanutFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes popUp {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes shellLeft {
          from { transform: translateX(0) rotate(0deg); opacity: 1; }
          to { transform: translateX(-10px) rotate(-15deg); opacity: 0.7; }
        }
        @keyframes shellRight {
          from { transform: translateX(0) rotate(0deg); opacity: 1; }
          to { transform: translateX(10px) rotate(15deg); opacity: 0.7; }
        }
        @keyframes kernelReveal {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fragmentsScatter {
          0% { opacity: 0; transform: scale(0.8); }
          30% { opacity: 0.8; }
          100% { opacity: 0; transform: scale(1.5) translateY(-8px); }
        }
      `}</style>
    </div>
  );
}
