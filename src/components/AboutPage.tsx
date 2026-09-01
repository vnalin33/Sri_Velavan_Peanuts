'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.08 }
    );

    [heroRef, quoteRef, valuesRef, journeyRef, ctaRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  const milestones = [
    {
      year: 'Early 2025',
      title: 'The Seed Was Planted',
      desc: 'Mohanraj.P founded Sri Velavan with a clear mission — to bring premium, naturally processed peanuts directly from the farms of Dharapuram to businesses across India.',
      icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    },
    {
      year: 'Mid 2025',
      title: 'Building Trust',
      desc: 'Established strong relationships with local farmers and built a reliable supply chain focused on quality at every step.',
      icon: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    },
    {
      year: '2025–2026',
      title: 'Growing Steadily',
      desc: 'Expanded operations to serve B2B clients, maintaining the same commitment to quality, consistency, and natural processing methods.',
      icon: 'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    },
    {
      year: 'Today',
      title: 'A Trusted Name',
      desc: 'Sri Velavan has become a dependable partner for businesses seeking premium peanuts — rooted in tradition, driven by quality.',
      icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
    },
  ];

  const values = [
    {
      title: 'Quality First',
      desc: 'Every peanut is carefully selected and processed to meet the highest standards — no shortcuts, no compromises.',
      icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    },
    {
      title: 'Farm Direct',
      desc: 'Sourced directly from trusted farms in Dharapuram, ensuring freshness and authenticity in every batch.',
      icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    },
    {
      title: 'Natural Process',
      desc: 'Traditional cold-pressed methods that preserve the nutrition and natural flavor profile of every kernel.',
      icon: 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
    },
    {
      title: 'Reliable Supply',
      desc: 'Consistent, on-time delivery that businesses can depend on — every single order, every single time.',
      icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12',
    },
  ];

  const stats = [
    { value: '1.5+', label: 'Years of Trust' },
    { value: '100%', label: 'Natural Process' },
    { value: 'B2B', label: 'Wholesale Focus' },
    { value: '24hr', label: 'Response Time' },
  ];

  return (
    <main className="bg-gb min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gb/90 backdrop-blur-2xl border-b border-dg/8 transition-all duration-500">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center shrink-0 group">
            <Image
              src="/images/logo.png"
              alt="Sri Velavan"
              width={320}
              height={100}
              className="h-[60px] w-auto transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2.5 text-[0.82rem] font-medium text-dg/60 hover:text-dg px-4 py-2 rounded-full hover:bg-dg/5 transition-all duration-300"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </nav>

      {/* ═══════════════════════════════════════════
          HERO — Founder Showcase
      ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="pt-[130px] pb-20 md:pt-[170px] md:pb-28 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-[100px] right-[-250px] w-[600px] h-[600px] rounded-full bg-dg/[0.015] pointer-events-none" />
        <div className="absolute bottom-[-150px] left-[-200px] w-[500px] h-[500px] rounded-full bg-dg/[0.02] pointer-events-none" />
        <div className="absolute top-[200px] left-[10%] w-[200px] h-[200px] rounded-full bg-dg/[0.01] pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
            {/* Founder Image — 2 columns */}
            <div className="reveal-scale md:col-span-2 order-2 md:order-1 flex justify-center">
              <div className="relative max-w-[360px] w-full">
                {/* Decorative outer frame */}
                <div className="absolute -inset-5 rounded-[32px] border border-dg/8 -z-20" />
                <div className="absolute -inset-10 rounded-[40px] border border-dg/[0.04] -z-30" />
                {/* Corner accents */}
                <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-dg/15 rounded-tl-xl -z-10" />
                <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-dg/15 rounded-br-xl -z-10" />

                <div className="relative rounded-[24px] overflow-hidden shadow-[0_40px_100px_rgba(26,51,36,0.18)]">
                  <Image
                    src="/images/founder.jpg"
                    alt="Mohanraj.P — Founder of Sri Velavan"
                    width={440}
                    height={550}
                    className="object-cover w-full aspect-[3/4]"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-dg/50 via-dg/20 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-gb text-[0.7rem] font-semibold tracking-[0.2em] uppercase">Founder & Visionary</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Info — 3 columns */}
            <div className="md:col-span-3 order-1 md:order-2">
              <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-6">Meet Our Founder</span>
              <h1 className="reveal-up font-serif text-4xl md:text-5xl lg:text-[3.8rem] text-dg leading-[1.06] mb-3 tracking-[-0.01em]">
                Mohanraj<span className="text-dg/30">.</span>P
              </h1>
              <p className="reveal-up text-dg/35 text-[0.72rem] font-semibold tracking-[0.2em] uppercase mb-8">
                Founder & Managing Director — Sri Velavan
              </p>
              <div className="reveal-up w-20 h-[1px] bg-gradient-to-r from-dg/25 to-transparent mb-8" />
              <p className="reveal-up text-[1.1rem] md:text-xl text-dg/55 font-light leading-[1.7] mb-5">
                With a deep-rooted passion for agriculture and an unwavering commitment to quality, 
                <strong className="text-dg font-medium"> Mohanraj.P</strong> founded Sri Velavan in early 2025 
                from the heart of <strong className="text-dg font-medium">Dharapuram, Tamil Nadu</strong>.
              </p>
              <p className="reveal-up text-[0.95rem] text-dg/45 font-light leading-[1.75] mb-10">
                His vision was simple yet powerful — to bridge the gap between the rich peanut farms of 
                Dharapuram and businesses that demand consistently high-quality produce. In just 1.5 years, 
                he has built Sri Velavan into a trusted name in the peanut processing industry, 
                earning the confidence of clients through reliability, transparency, and an uncompromising 
                focus on natural quality.
              </p>

              {/* Info pills */}
              <div className="reveal-up flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-dg/[0.04] border border-dg/8">
                  <div className="w-8 h-8 rounded-full bg-dg/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-dg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-[0.78rem] text-dg/55 font-medium">Dharapuram, TN</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-dg/[0.04] border border-dg/8">
                  <div className="w-8 h-8 rounded-full bg-dg/10 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-dg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <span className="text-[0.78rem] text-dg/55 font-medium">Established 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATS BAR
      ═══════════════════════════════════════════ */}
      <section className="py-10 md:py-14 bg-dg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dg via-dg-mid to-dg opacity-60" />
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center"
                style={{ animation: `fadeSlideUp 0.6s ease-out ${i * 0.15}s both` }}
              >
                <p className="font-serif text-3xl md:text-4xl text-gb mb-1 tracking-tight">{stat.value}</p>
                <p className="text-[0.7rem] text-gb/40 font-medium tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          QUOTE SECTION
      ═══════════════════════════════════════════ */}
      <section ref={quoteRef} className="py-20 md:py-28 relative">
        <div className="max-w-[850px] mx-auto px-6 md:px-10 text-center relative">
          <div className="reveal-up">
            {/* Decorative quote mark */}
            <div className="relative inline-block mb-8">
              <svg className="w-12 h-12 text-dg/10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
              </svg>
            </div>
            <blockquote className="font-serif text-2xl md:text-[1.75rem] lg:text-3xl text-dg leading-[1.5] italic mb-10">
              &ldquo;Quality is not an act, it is a habit. At Sri Velavan, we ensure that every peanut 
              that leaves our facility carries the trust our farmers and clients have placed in us.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-[1px] bg-dg/15" />
              <div>
                <p className="text-dg/70 text-sm font-semibold tracking-[0.08em]">Mohanraj.P</p>
                <p className="text-dg/30 text-[0.65rem] font-medium tracking-[0.15em] uppercase mt-0.5">Founder, Sri Velavan</p>
              </div>
              <div className="w-12 h-[1px] bg-dg/15" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════════════ */}
      <section ref={valuesRef} className="py-20 md:py-28 bg-gb-light relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-dg/5" />
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-5">What Drives Us</span>
            <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-dg leading-[1.1] mb-5 tracking-[-0.01em]">
              Our Core Values
            </h2>
            <div className="reveal-up gold-divider mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v, i) => (
              <div key={i} className="reveal-up group">
                <div className="card-premium p-7 md:p-8 text-center h-full relative overflow-hidden">
                  {/* Hover gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-dg/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  <div className="icon-float w-14 h-14 rounded-2xl bg-dg/[0.06] border border-dg/8 flex items-center justify-center mx-auto mb-6 group-hover:bg-dg/10 group-hover:border-dg/15 transition-all duration-500">
                    <svg className="w-6 h-6 text-dg/70 group-hover:text-dg transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-dg mb-3">{v.title}</h3>
                  <p className="text-dg/40 text-[0.82rem] leading-[1.65] font-light">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          JOURNEY TIMELINE
      ═══════════════════════════════════════════ */}
      <section ref={journeyRef} className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-dg/5" />
        <div className="max-w-[1000px] mx-auto px-6 md:px-10 relative">
          <div className="text-center mb-16">
            <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-5">Our Journey</span>
            <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-dg leading-[1.1] mb-5 tracking-[-0.01em]">
              1.5 Years of <span className="italic">Growth</span>
            </h2>
            <p className="reveal-up text-[0.92rem] text-dg/40 font-light max-w-lg mx-auto leading-relaxed">
              A young company with deep roots — here&apos;s how we got here.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical center line (desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-dg/10 -translate-x-[0.5px]" />
            {/* Vertical left line (mobile) */}
            <div className="md:hidden absolute left-[23px] top-0 bottom-0 w-[1px] bg-dg/10" />

            {milestones.map((m, i) => (
              <div key={i} className="reveal-up relative mb-14 last:mb-0">
                {/* Desktop layout */}
                <div className={`hidden md:grid md:grid-cols-2 md:gap-16 items-start`}>
                  {/* Left column */}
                  <div className={`${i % 2 === 0 ? 'text-right pr-8' : 'order-2 pl-8'}`}>
                    {i % 2 === 0 ? (
                      <>
                        <span className="inline-block text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-dg/30 mb-2">{m.year}</span>
                        <h3 className="font-serif text-xl text-dg mb-2">{m.title}</h3>
                        <p className="text-dg/40 text-[0.88rem] leading-[1.65] font-light">{m.desc}</p>
                      </>
                    ) : (
                      <div /> /* Spacer */
                    )}
                  </div>
                  {/* Right column */}
                  <div className={`${i % 2 === 1 ? 'text-left pl-8' : 'order-2'}`}>
                    {i % 2 === 1 ? (
                      <>
                        <span className="inline-block text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-dg/30 mb-2">{m.year}</span>
                        <h3 className="font-serif text-xl text-dg mb-2">{m.title}</h3>
                        <p className="text-dg/40 text-[0.88rem] leading-[1.65] font-light">{m.desc}</p>
                      </>
                    ) : (
                      <div /> /* Spacer */
                    )}
                  </div>
                </div>

                {/* Timeline dot — desktop */}
                <div className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 w-11 h-11 rounded-full bg-gb border-2 border-dg/15 items-center justify-center z-10 shadow-sm">
                  <svg className="w-4.5 h-4.5 text-dg/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                  </svg>
                </div>

                {/* Mobile layout */}
                <div className="md:hidden flex items-start gap-5 pl-14">
                  {/* Timeline dot — mobile */}
                  <div className="absolute left-[12px] top-0.5 w-[23px] h-[23px] rounded-full bg-gb border-2 border-dg/15 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-dg/30" />
                  </div>
                  <div>
                    <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-dg/30 mb-1.5">{m.year}</span>
                    <h3 className="font-serif text-lg text-dg mb-1.5">{m.title}</h3>
                    <p className="text-dg/40 text-[0.82rem] leading-[1.65] font-light">{m.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════ */}
      <section ref={ctaRef} className="py-20 md:py-28 bg-gb-light relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-dg/5" />
        {/* Subtle decorative circles */}
        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-dg/[0.015] pointer-events-none" />
        <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-dg/[0.02] pointer-events-none" />

        <div className="max-w-[700px] mx-auto px-6 md:px-10 text-center relative z-10">
          <span className="reveal-up inline-block text-[0.65rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-5">Partner With Us</span>
          <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-dg leading-[1.1] mb-6 tracking-[-0.01em]">
            Let&apos;s Work <span className="italic">Together</span>
          </h2>
          <p className="reveal-up text-[0.95rem] text-dg/45 font-light leading-[1.7] mb-10 max-w-lg mx-auto">
            Whether you&apos;re looking for a reliable peanut supplier or want to learn more about our products, 
            we&apos;d love to hear from you.
          </p>
          <div className="reveal-up flex flex-wrap gap-4 justify-center">
            <Link href="/#contact" className="btn-primary group">
              <span>Get in Touch</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link href="/#products" className="btn-secondary">
              Explore Products
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════════ */}
      <footer className="bg-dg text-gb/50 py-8 relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gb/5" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[0.68rem] text-gb/20 font-light">&copy; {new Date().getFullYear()} Sri Velavan Chekku Aalai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-[0.68rem] text-gb/25 hover:text-gb/50 transition-colors font-light">
              Home
            </Link>
            <Link href="/#contact" className="text-[0.68rem] text-gb/25 hover:text-gb/50 transition-colors font-light">
              Contact
            </Link>
            <span className="text-[0.68rem] text-gb/15 font-light">Pure · Natural · Traditional</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
