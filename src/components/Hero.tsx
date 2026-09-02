'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/hero-bg.jpg" alt="Premium peanuts" fill className="object-cover" priority sizes="100vw" quality={90} />
        <div className="absolute inset-0 bg-gradient-to-r from-gb/60 via-gb/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-gb/20 via-transparent to-gb/30" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="min-h-screen flex items-center pt-40 pb-20 lg:pt-32 lg:pb-16">
          <div className="max-w-2xl">
            {/* Top badge */}
            <div
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-dg/15 bg-gb/50 backdrop-blur-md mb-10"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 0.2s both' }}
            >
              <span className="w-2 h-2 rounded-full bg-dg animate-pulse" />
              <span className="text-[0.62rem] font-semibold text-dg tracking-[0.3em] uppercase">Sree Velavan · Chekku Aalai · Dharapuram</span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.06] tracking-[-0.02em] text-dg mb-5"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 0.4s both' }}
            >
              Nature&apos;s Finest Nuts,<br />
              <span className="italic">Straight from the Source.</span>
            </h1>

            {/* Catchy subline */}
            <p
              className="text-lg md:text-xl font-serif italic text-dg/55 mb-6"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 0.55s both' }}
            >
              Where every kernel tells a story of quality.
            </p>

            {/* Description */}
            <p
              className="text-[0.92rem] md:text-base text-dg/45 leading-[1.7] max-w-md mb-10 font-light"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 0.7s both' }}
            >
              We don&apos;t just sell peanuts — we process, grade, and deliver the best. Trusted by oil mills, snack makers, and distributors who know the difference.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap gap-4"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 0.85s both' }}
            >
              <a href="#contact" className="btn-primary group">
                <span>Get a Quote</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#story" className="btn-secondary">See Our Process</a>
            </div>

            {/* Scroll indicator */}
            <div
              className="hidden lg:flex items-center gap-3 mt-14 text-dg/20"
              style={{ animation: 'fadeSlideUp 0.8s ease-out 1s both' }}
            >
              <div className="w-[1px] h-10 bg-dg/12 relative overflow-hidden">
                <div className="w-full h-3 bg-dg/25 absolute top-0 animate-[scrollDown_2s_ease-in-out_infinite]" />
              </div>
              <span className="text-[0.62rem] tracking-[0.25em] uppercase font-semibold">Scroll</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollDown {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
