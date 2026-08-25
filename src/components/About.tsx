'use client';

import { useEffect, useRef } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
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
    <section id="about" ref={sectionRef} className="py-16 md:py-24 bg-gb relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <span className="reveal-up inline-block text-xs font-medium tracking-[0.3em] uppercase text-dg/50 mb-6">Our Foundation</span>
          <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-5xl text-dg leading-[1.1] mb-8">
            Rooted in Nature.<br /><span className="italic">Built on Trust.</span>
          </h2>
          <p className="reveal-up text-lg md:text-xl text-dg/50 font-light leading-relaxed max-w-2xl mx-auto">
            Sri Velavan brings together traditional agricultural values with modern quality standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {features.map((f, i) => (
            <div key={i} className="reveal-up text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-dg/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <svg className="w-5 h-5 text-dg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-dg mb-3">{f.title}</h3>
              <p className="text-dg/45 text-[0.95rem] leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
