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
    <section id="products" ref={sectionRef} className="py-16 md:py-24 bg-dg relative">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center mb-12">
          <span className="reveal-up inline-block text-xs font-medium tracking-[0.3em] uppercase text-gb/50 mb-4">Our Product</span>
          <h2 className="reveal-up font-serif text-2xl md:text-3xl lg:text-4xl text-gb leading-[1.1] mb-4">Quality in every kernel.</h2>
          <p className="reveal-up text-sm text-gb/45 font-light max-w-md mx-auto">
            Wholesale peanut supply — processed, graded, and delivered to your business.
          </p>
        </div>

        {/* Compact horizontal product card */}
        <div className="reveal-scale border border-gb/10 rounded-xl overflow-hidden group hover:border-gb/20 hover:shadow-[0_16px_48px_rgba(237,227,208,0.06)] transition-all duration-500 max-w-[820px] mx-auto">
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative h-[200px] md:h-auto md:w-[300px] shrink-0 overflow-hidden bg-dg-mid">
              <Image src="/peanut-animation/ezgif-frame-060.jpg" alt="Red Skin Peanuts" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="300px" />
            </div>

            {/* Details */}
            <div className="p-5 md:p-6 flex flex-col justify-center">
              <h3 className="font-serif text-lg md:text-xl text-gb mb-2">Red Skin Peanuts</h3>
              <p className="text-gb/40 text-[0.8rem] leading-relaxed font-light mb-4">
                Native variety with rich flavor — carefully processed, graded, and delivered in bulk to wholesalers, manufacturers, and oil mills.
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {['Handpicked', 'Custom Grading', 'Bulk Ready', 'Oil Mill Grade'].map((tag, i) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full border border-gb/12 text-[0.65rem] text-gb/50 font-medium tracking-wide hover:bg-gb/8 hover:border-gb/20 transition-all duration-300 cursor-default"
                    style={{ animation: `fadeSlideUp 0.5s ease-out ${0.6 + i * 0.1}s both` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a href="#contact" className="inline-flex items-center gap-1.5 text-gb/60 font-medium text-xs tracking-wide group/link hover:text-gb transition-colors w-fit">
                <span>Enquire Now</span>
                <svg className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
