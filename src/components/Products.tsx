'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up, .reveal-scale').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 150)); }); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-20 md:py-28 bg-dg relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-dg via-dg to-dg-mid opacity-50" />
      
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-14">
          <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-gb/35 mb-5">Our Product</span>
          <h2 className="reveal-up font-serif text-2xl md:text-3xl lg:text-[2.5rem] text-gb leading-[1.08] mb-5 tracking-[-0.01em]">Quality in every kernel.</h2>
          <p className="reveal-up text-[0.88rem] text-gb/35 font-light max-w-md mx-auto leading-relaxed">
            Wholesale peanut supply — processed, graded, and delivered to your business.
          </p>
        </div>

        {/* Product card */}
        <div className="reveal-scale border border-gb/8 rounded-2xl overflow-hidden group hover:border-gb/18 hover:shadow-[0_20px_60px_rgba(237,227,208,0.06)] transition-all duration-600 max-w-[850px] mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative h-[220px] md:h-auto md:w-[320px] shrink-0 overflow-hidden bg-dg-mid">
              <Image src="/peanut-animation/ezgif-frame-060.jpg" alt="Red Skin Peanuts" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="320px" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dg/20 md:block hidden" />
            </div>

            {/* Details */}
            <div className="p-6 md:p-8 flex flex-col justify-center">
              <span className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase text-gb/30 mb-3">Premium Grade</span>
              <h3 className="font-serif text-xl md:text-2xl text-gb mb-3">Red Skin Peanuts</h3>
              <p className="text-gb/35 text-[0.85rem] leading-[1.65] font-light mb-5">
                Native variety with rich flavor — carefully processed, graded, and delivered in bulk to wholesalers, manufacturers, and oil mills.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {['Handpicked', 'Custom Grading', 'Bulk Ready', 'Oil Mill Grade'].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full border border-gb/10 text-[0.65rem] text-gb/45 font-medium tracking-wider hover:bg-gb/6 hover:border-gb/18 transition-all duration-300 cursor-default"
                    style={{ animation: `fadeSlideUp 0.5s ease-out ${0.6 + i * 0.1}s both` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 text-gb/55 font-medium text-[0.82rem] tracking-wide group/link hover:text-gb transition-colors w-fit">
                <span>Enquire Now</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
