'use client';

import { useEffect, useRef, useState } from 'react';

const steps = [
  { label: 'Source', desc: 'Direct from trusted agricultural regions', icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
  { label: 'Select', desc: 'Careful grading and quality assessment', icon: 'M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z' },
  { label: 'Process', desc: 'Cleaning, sorting, and preparation', icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182' },
  { label: 'Pack', desc: 'Quality-controlled packaging', icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
  { label: 'Deliver', desc: 'Reliable dispatch to your business', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' },
];

export default function Quality() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            entry.target.querySelectorAll('.reveal-up, .road-step').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = el.classList.contains('road-step') ? 'translateY(0) scale(1)' : 'translateY(0)';
                el.classList.add('revealed');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="quality" ref={sectionRef} className="py-16 md:py-28 bg-gb-light relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <span className="reveal-up inline-block text-xs font-medium tracking-[0.3em] uppercase text-dg/50 mb-6">Our Process</span>
          <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-5xl text-dg leading-[1.1]">The quality journey.</h2>
          <div className="reveal-up gold-divider mt-8" />
        </div>

        {/* Desktop: Straight-line roadmap */}
        <div className="hidden md:block relative">
          {/* Steps row */}
          <div className="relative flex items-start justify-between mb-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="road-step relative z-10 flex-1 flex flex-col items-center"
                style={{
                  opacity: 0,
                  transform: 'translateY(20px) scale(0.9)',
                  transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.35}s`,
                }}
              >
                {/* Step number badge */}
                <span className="text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-dg/50 mb-3">0{i + 1}</span>

                {/* Icon */}
                <div className="step-icon icon-float w-16 h-16 rounded-2xl bg-gradient-to-br from-dg/10 to-dg/5 border border-dg/10 flex items-center justify-center text-dg transition-all duration-500 hover:from-dg/15 hover:to-dg/8 hover:shadow-lg hover:border-dg/20 hover:-translate-y-1">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>

                {/* Label */}
                <h4 className="font-serif text-[1.05rem] text-dg mt-4 mb-1">{step.label}</h4>
                <p className="text-[0.82rem] text-dg/65 font-light max-w-[150px] text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Traveling line + peanut — below the steps */}
          <div className="relative h-6 mx-[8%]">
            {/* Connector line */}
            <div
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] origin-left"
              style={{
                backgroundImage: 'repeating-linear-gradient(90deg, rgba(26,51,36,0.25) 0, rgba(26,51,36,0.25) 8px, transparent 8px, transparent 16px)',
                transform: animated ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            />
            {/* Small dots at each step position */}
            {steps.map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-dg/20"
                style={{
                  left: `${i * 25}%`,
                  transform: `translateX(-50%) translateY(-50%) scale(${animated ? 1 : 0})`,
                  transition: `transform 0.4s ease ${0.5 + i * 0.35}s`,
                }}
              />
            ))}
            {/* Traveling peanut */}
            <div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: animated ? 'calc(100% - 16px)' : '0%',
                transition: 'left 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s',
                opacity: animated ? 1 : 0,
              }}
            >
              <svg viewBox="0 0 36 24" className="w-8 h-5 drop-shadow-sm" style={{ animation: animated ? 'peanutBob 1.5s ease-in-out infinite' : 'none' }}>
                <ellipse cx="18" cy="12" rx="16" ry="10" fill="#D4A96A" stroke="#B8905A" strokeWidth="1.5" />
                <ellipse cx="13" cy="10" rx="5" ry="7" fill="#DEB878" opacity="0.5" />
                <ellipse cx="23" cy="10" rx="5" ry="7" fill="#DEB878" opacity="0.5" />
                <line x1="16" y1="3" x2="16" y2="21" stroke="#C49A5C" strokeWidth="0.8" opacity="0.4" />
                <line x1="20" y1="3" x2="20" y2="21" stroke="#C49A5C" strokeWidth="0.8" opacity="0.4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Mobile: Vertical roadmap */}
        <div className="md:hidden relative pl-12">
          {/* Vertical connector */}
          <div className="absolute left-[21px] top-0 bottom-0 w-[1px] border-l border-dashed border-dg/12">
            <div
              className="w-full border-l border-dashed border-dg/12 origin-top"
              style={{
                height: '100%',
                transform: animated ? 'scaleY(1)' : 'scaleY(0)',
                transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
              }}
            />
          </div>

          {/* Mobile peanut */}
          <div
            className="absolute left-[10px] z-20"
            style={{
              top: animated ? 'calc(100% - 16px)' : '0px',
              transition: 'top 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s',
              opacity: animated ? 1 : 0,
            }}
          >
            <svg viewBox="0 0 28 20" className="w-6 h-4" style={{ animation: animated ? 'peanutBob 1.5s ease-in-out infinite' : 'none' }}>
              <ellipse cx="14" cy="10" rx="12" ry="8" fill="#D4A96A" stroke="#B8905A" strokeWidth="1.5" />
              <ellipse cx="10" cy="8" rx="4" ry="5.5" fill="#DEB878" opacity="0.5" />
              <ellipse cx="18" cy="8" rx="4" ry="5.5" fill="#DEB878" opacity="0.5" />
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="road-step relative mb-10 last:mb-0"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.25}s`,
              }}
            >
              {/* Road stop dot */}
              <div className="absolute -left-[30px] top-2 w-6 h-6 rounded-full bg-gb-light border-[3px] border-dg/15 flex items-center justify-center shadow-sm">
                <span className="text-[0.5rem] font-bold text-dg/60">{i + 1}</span>
              </div>

              <div className="flex items-start gap-3">
                <div className="step-icon icon-float w-12 h-12 rounded-xl bg-gradient-to-br from-dg/10 to-dg/5 border border-dg/10 flex items-center justify-center shrink-0 text-dg transition-all duration-500 hover:from-dg/15 hover:to-dg/8">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={step.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-base text-dg mb-1">{step.label}</h4>
                  <p className="text-[0.82rem] text-dg/65 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes peanutBob {
          0%, 100% { transform: translateY(-1px); }
          50% { transform: translateY(1px); }
        }
      `}</style>
    </section>
  );
}
