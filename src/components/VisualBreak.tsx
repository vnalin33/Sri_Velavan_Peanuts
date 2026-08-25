'use client';

import { useEffect, useRef } from 'react';

export default function VisualBreak() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) entry.target.querySelectorAll('.reveal-up').forEach((el, i) => setTimeout(() => el.classList.add('revealed'), i * 150)); }); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-gb overflow-hidden">
      <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center relative z-10">
        <h2 className="reveal-up font-serif text-4xl md:text-5xl lg:text-[4rem] text-dg leading-[1.15] italic">
          Good products begin<br />with good ingredients.
        </h2>
        <div className="reveal-up gold-divider mt-10" />
      </div>
    </section>
  );
}
