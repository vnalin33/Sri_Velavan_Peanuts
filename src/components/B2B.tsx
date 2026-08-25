'use client';

import { useEffect, useRef } from 'react';

export default function B2B() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 100)); }); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-dg relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative z-10">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="reveal-left inline-block text-[0.65rem] font-medium tracking-[0.3em] uppercase text-gb/40 mb-3">For Business</span>
            <h2 className="reveal-left font-serif text-2xl md:text-3xl lg:text-4xl text-gb leading-[1.15] mb-4">
              Your Wholesale<br /><span className="italic">Peanut Partner.</span>
            </h2>
            <p className="reveal-left text-sm text-gb/40 font-light leading-relaxed mb-6">
              We work with oil mills, food processors, snack manufacturers, and wholesale traders. Consistent quality, every batch.
            </p>
            <a href="#contact" className="reveal-left inline-flex items-center gap-2 px-6 py-3 bg-gb text-dg font-medium text-sm rounded-full hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Discuss Your Requirement
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — compact feature list */}
          <div className="space-y-4">
            {[
              { title: 'Consistent Grading', desc: 'Every batch sorted and graded to specification' },
              { title: 'Flexible Quantities', desc: 'From 100kg bags to full truckloads' },
              { title: 'Reliable Dispatch', desc: 'On-time delivery for your production schedule' },
              { title: 'Direct Pricing', desc: 'No middlemen — factory to your facility' },
            ].map((item, i) => (
              <div key={i} className="reveal-right flex items-start gap-3 p-4 rounded-lg border border-gb/8 hover:border-gb/15 hover:bg-gb/5 transition-all duration-400">
                <div className="w-6 h-6 rounded-full bg-gb/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-gb/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gb/80 mb-0.5">{item.title}</h4>
                  <p className="text-[0.75rem] text-gb/35 font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
