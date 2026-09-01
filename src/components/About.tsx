'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: 'Careful Sourcing', desc: 'Every peanut is sourced directly from trusted farms, ensuring quality begins at the very first step.', icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
    { title: 'Precision Handling', desc: 'From selection to packaging, every stage follows careful processes to maintain consistent quality.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
    { title: 'Reliable Consistency', desc: 'Dependable supply that businesses can count on — every order meeting the same high standard.', icon: 'M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-28 bg-gb relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-dg/5" />
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-6">Our Foundation</span>
          <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-[2.85rem] text-dg leading-[1.08] mb-8 tracking-[-0.01em]">
            Rooted in Nature.<br /><span className="italic">Built on Trust.</span>
          </h2>
          <p className="reveal-up text-lg md:text-xl text-dg/45 font-light leading-relaxed max-w-2xl mx-auto">
            Sri Velavan brings together traditional agricultural values with modern quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-14 mb-14">
          {features.map((f, i) => (
            <div key={i} className={`reveal-up text-center md:text-left group`}>
              <div className="icon-float w-14 h-14 rounded-2xl bg-dg/[0.06] border border-dg/8 flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:bg-dg/10 group-hover:border-dg/15 transition-all duration-500">
                <svg className="w-5.5 h-5.5 text-dg/60 group-hover:text-dg transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-dg mb-3">{f.title}</h3>
              <p className="text-dg/40 text-[0.92rem] leading-[1.65] font-light">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Link to full About page */}
        <div className="reveal-up text-center">
          <Link
            href="/about/"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-dg/60 hover:text-dg px-5 py-2.5 rounded-full border border-dg/15 hover:border-dg/30 hover:bg-dg/[0.03] transition-all duration-400 group"
          >
            <span>Meet Our Founder</span>
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
