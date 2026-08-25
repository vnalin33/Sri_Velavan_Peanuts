'use client';

import { useEffect, useRef } from 'react';

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 120)); }); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-16 md:py-24 bg-gb relative overflow-hidden">
      {/* Decorative organic wave lines */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1440 400">
        <path d="M-20 100 C120 60, 280 140, 440 100 C600 60, 760 140, 920 100 C1080 60, 1240 140, 1460 100" fill="none" stroke="rgba(26,51,36,0.04)" strokeWidth="1.5" style={{ animation: 'waveFloat 8s ease-in-out infinite' }} />
        <path d="M-20 200 C160 160, 320 240, 500 200 C680 160, 840 240, 1020 200 C1200 160, 1360 240, 1460 200" fill="none" stroke="rgba(26,51,36,0.035)" strokeWidth="1.2" style={{ animation: 'waveFloat 10s ease-in-out infinite 1s' }} />
        <path d="M-20 300 C100 260, 260 340, 420 300 C580 260, 740 340, 900 300 C1060 260, 1300 340, 1460 300" fill="none" stroke="rgba(26,51,36,0.04)" strokeWidth="1.5" style={{ animation: 'waveFloat 9s ease-in-out infinite 2s' }} />
      </svg>

      <style jsx>{`
        @keyframes waveFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
      `}</style>

      <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center relative z-10">
        <span className="reveal-up inline-block text-xs font-medium tracking-[0.3em] uppercase text-dg/50 mb-6">Partner With Us</span>
        <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-5xl text-dg leading-[1.1] mb-8">
          Let&apos;s Grow <span className="italic">Together.</span>
        </h2>
        <p className="reveal-up text-lg md:text-xl text-dg/50 font-light leading-relaxed max-w-xl mx-auto mb-12">
          Looking for a dependable peanut supply partner? Let&apos;s talk about your requirement.
        </p>

        <div className="reveal-up flex flex-wrap items-center justify-center gap-4 mb-5">
          <a href="tel:+919176646043" className="btn-primary">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>Call: 91766 46043</span>
          </a>
          <a href="https://wa.me/919176646043?text=Hello%20Sri%20Velavan%2C%20I%20need%20a%20B2B%20peanut%20quote." target="_blank" rel="noopener noreferrer" className="btn-secondary">WhatsApp Us</a>
          <a href="mailto:Support.srivelavan@gmail.com" className="btn-secondary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>Email Us</span>
          </a>
        </div>

        {/* Clean matching email pill */}
        <div className="reveal-up inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-dg/5 hover:bg-dg/10 border border-dg/15 hover:border-dg/30 text-sm text-dg/70 hover:text-dg transition-all">
          <span className="text-xs font-medium tracking-wider uppercase text-dg/50">Email:</span>
          <a href="mailto:Support.srivelavan@gmail.com" className="font-medium text-dg hover:underline">
            Support.srivelavan@gmail.com
          </a>
        </div>

        <div className="reveal-up mt-6 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-dg/60 text-sm">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Quality Assured
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            95, Meenakshipuram, Dharapuram - 638657
          </span>
        </div>
      </div>
    </section>
  );
}
