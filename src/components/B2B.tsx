'use client';

import { useEffect, useRef } from 'react';

export default function B2B() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 100)); }); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: 'Consistent Grading', desc: 'Every batch sorted and graded to your exact specification', icon: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75' },
    { title: 'Flexible Quantities', desc: 'From 100kg bags to full truckloads — any volume', icon: 'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z' },
    { title: 'Reliable Dispatch', desc: 'On-time delivery for your production schedule', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12' },
    { title: 'Direct Pricing', desc: 'No middlemen — factory to your facility', icon: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z' },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-dg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dg via-dg-mid/40 to-dg" />
      <div className="max-w-[1050px] mx-auto px-6 md:px-10 relative z-10">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="reveal-left inline-block text-[0.62rem] font-semibold tracking-[0.35em] uppercase text-gb/30 mb-4">For Business</span>
            <h2 className="reveal-left font-serif text-2xl md:text-3xl lg:text-[2.5rem] text-gb leading-[1.12] mb-5 tracking-[-0.01em]">
              Your Wholesale<br /><span className="italic">Peanut Partner.</span>
            </h2>
            <p className="reveal-left text-[0.88rem] text-gb/35 font-light leading-[1.7] mb-8">
              We work with oil mills, food processors, snack manufacturers, and wholesale traders. Consistent quality, every batch.
            </p>
            <a href="#contact" className="reveal-left inline-flex items-center gap-2.5 px-7 py-3.5 bg-gb text-dg font-medium text-[0.85rem] rounded-full hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(237,227,208,0.15)] transition-all duration-400 group">
              <span>Discuss Your Requirement</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — feature list */}
          <div className="space-y-4">
            {features.map((item, i) => (
              <div key={i} className="reveal-right flex items-start gap-4 p-5 rounded-xl border border-gb/6 hover:border-gb/14 hover:bg-gb/[0.03] transition-all duration-400 group">
                <div className="w-10 h-10 rounded-xl bg-gb/8 flex items-center justify-center shrink-0 group-hover:bg-gb/12 transition-colors duration-400">
                  <svg className="w-4.5 h-4.5 text-gb/45 group-hover:text-gb/70 transition-colors duration-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[0.88rem] font-medium text-gb/75 mb-1">{item.title}</h4>
                  <p className="text-[0.78rem] text-gb/30 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
