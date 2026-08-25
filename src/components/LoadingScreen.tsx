'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [phase, setPhase] = useState<'loading' | 'cracking' | 'done'>('loading');

  useEffect(() => {
    // Phase 1: Loading with shell wobble (1.5s)
    const t1 = setTimeout(() => setPhase('cracking'), 1500);
    // Phase 2: Shell cracks open (1.2s), then fade out
    const t2 = setTimeout(() => setPhase('done'), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-gb flex flex-col items-center justify-center transition-opacity duration-500 opacity-100"
    >
      {/* Peanut SVG animation */}
      <div className="relative w-32 h-32 mb-8">
        {/* Left shell half */}
        <svg
          viewBox="0 0 60 100"
          className={`absolute left-0 top-0 w-16 h-32 transition-all duration-700 ease-in-out origin-bottom-right ${
            phase === 'cracking' ? '-translate-x-4 -rotate-[25deg] opacity-60' : 'animate-[shellWobble_1s_ease-in-out_infinite]'
          }`}
        >
          <path
            d="M55 10 C55 10 50 0 35 0 C20 0 8 12 5 25 C2 38 2 52 5 65 C8 78 15 88 25 95 C30 98 35 100 40 100 C45 100 50 98 55 95 L55 10Z"
            fill="#D4C4A0"
            stroke="#B8A882"
            strokeWidth="1.5"
          />
          {/* Shell texture lines */}
          <path d="M15 20 Q30 25 50 18" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.6" />
          <path d="M12 40 Q30 45 52 38" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.5" />
          <path d="M10 60 Q28 65 52 58" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.4" />
          <path d="M15 78 Q30 82 48 76" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.3" />
        </svg>

        {/* Right shell half */}
        <svg
          viewBox="0 0 60 100"
          className={`absolute right-0 top-0 w-16 h-32 transition-all duration-700 ease-in-out origin-bottom-left ${
            phase === 'cracking' ? 'translate-x-4 rotate-[25deg] opacity-60' : 'animate-[shellWobble_1s_ease-in-out_infinite]'
          }`}
        >
          <path
            d="M5 10 C5 10 10 0 25 0 C40 0 52 12 55 25 C58 38 58 52 55 65 C52 78 45 88 35 95 C30 98 25 100 20 100 C15 100 10 98 5 95 L5 10Z"
            fill="#D4C4A0"
            stroke="#B8A882"
            strokeWidth="1.5"
          />
          <path d="M45 20 Q30 25 10 18" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.6" />
          <path d="M48 40 Q30 45 8 38" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.5" />
          <path d="M50 60 Q32 65 8 58" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.4" />
          <path d="M45 78 Q30 82 12 76" fill="none" stroke="#C4B48E" strokeWidth="0.8" opacity="0.3" />
        </svg>

        {/* Nut kernel inside (revealed when shell opens) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            phase === 'cracking' ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
        >
          <svg viewBox="0 0 50 70" className="w-12 h-16">
            {/* Main kernel */}
            <ellipse cx="25" cy="35" rx="18" ry="28" fill="#C4713D" />
            {/* Kernel highlight */}
            <ellipse cx="20" cy="28" rx="8" ry="14" fill="#D4854F" opacity="0.6" />
            {/* Kernel line */}
            <path d="M25 8 Q24 35 25 62" fill="none" stroke="#A85C2F" strokeWidth="1" opacity="0.5" />
            {/* Top shine */}
            <ellipse cx="22" cy="20" rx="4" ry="6" fill="#E09A60" opacity="0.4" />
          </svg>
        </div>
      </div>

      {/* Brand text */}
      <p className={`font-serif text-xl text-dg/80 italic tracking-wide transition-all duration-500 ${
        phase === 'cracking' ? 'opacity-100 translate-y-0' : 'opacity-60 translate-y-1'
      }`}>
        Sri Velavan
      </p>
      <p className={`text-[0.6rem] text-dg/30 tracking-[0.35em] uppercase font-medium mt-2 transition-all duration-500 ${
        phase === 'cracking' ? 'opacity-100' : 'opacity-40'
      }`}>
        Naturally Better
      </p>

      <style jsx>{`
        @keyframes shellWobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }
      `}</style>
    </div>
  );
}
