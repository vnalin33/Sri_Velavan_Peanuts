'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import Footer from './Footer';

const machinery = [
  {
    title: 'Decorticator — Shelling Machine',
    desc: 'Our motorized decorticator with belt-driven motor efficiently removes peanut shells while keeping kernels intact. Raw groundnuts are fed from the hopper on top, and clean kernels are separated from shells through vibrating mesh screens — all in a single pass.',
    image: '/images/infrastructure/shelling.jpg',
    specs: ['Belt-Driven Motor', 'Multi-Screen Separation', 'Low Kernel Breakage'],
  },
  {
    title: 'Chekku Aalai — Cold-Pressed Oil Extraction',
    desc: 'Our traditional chekku (rotary stone press) extracts pure, cold-pressed groundnut oil the traditional way — without heat or chemicals. Connected to a bucket elevator conveyor, peanuts are automatically fed into the stone press for continuous operation.',
    image: '/images/infrastructure/grading.jpg',
    specs: ['Stone Cold-Press', 'Bucket Elevator Feed', 'Zero Chemicals'],
  },
  {
    title: 'Color Sorter — Electronic Grading',
    desc: 'Our electronic color sorter inspects every peanut at high speed, automatically rejecting discolored, damaged, or foreign particles. Connected via bucket elevator, this machine ensures uniform quality and clean output for every batch we process.',
    image: '/images/infrastructure/packaging.jpg',
    specs: ['Optical Sorting', 'Auto-Reject System', 'Uniform Output'],
  },
];

const stats = [
  { value: '1', label: 'Processing Line' },
  { value: '2 TPH', label: 'Shelling Capacity' },
  { value: 'Chekku', label: 'Cold-Pressed Oil' },
  { value: 'Direct', label: 'Farm Sourcing' },
];

export default function InfrastructurePage() {
  const revealRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-up').forEach((el, i) =>
              setTimeout(() => el.classList.add('revealed'), i * 120)
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <Image
          src="/images/infrastructure/hero.jpg"
          alt="Sree Velavan Processing Unit, Dharapuram"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dg via-dg/60 to-dg/10" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-gb/50 mb-4">
            Our Processing Unit
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gb leading-[1.05] mb-4 max-w-2xl">
            Rooted in <span className="italic">Tradition.</span>
          </h1>
          <p className="text-gb/60 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            A village-born processing unit in Dharapuram — where every peanut is shelled, hand-graded, and packed with care.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-dg py-10 md:py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-gb mb-1">{stat.value}</p>
              <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-gb/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Machinery Showcase */}
      <section className="bg-gb py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div
            className="text-center mb-16 md:mb-20"
            ref={(el) => { if (el) revealRefs.current[0] = el; }}
          >
            <span className="reveal-up inline-block text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-4">
              How We Process
            </span>
            <h2 className="reveal-up font-serif text-3xl md:text-4xl lg:text-[2.85rem] text-dg leading-[1.08] mb-6">
              Simple. Honest. <span className="italic">Effective.</span>
            </h2>
            <p className="reveal-up text-dg/45 text-lg font-light max-w-2xl mx-auto leading-relaxed">
              We believe in keeping things straightforward — good machinery, skilled hands, and honest work. No shortcuts, no compromises.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            {machinery.map((machine, i) => (
              <div
                key={i}
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-14 items-center`}
                ref={(el) => { if (el) revealRefs.current[i + 1] = el; }}
              >
                {/* Image */}
                <div className="reveal-up w-full md:w-[55%] relative rounded-2xl overflow-hidden group">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={machine.image}
                      alt={machine.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 55vw"
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dg/20 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-[45%]">
                  <span className="reveal-up inline-block text-[0.58rem] font-semibold tracking-[0.3em] uppercase text-dg/30 mb-3">
                    Step {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="reveal-up font-serif text-2xl md:text-3xl text-dg mb-4 leading-tight">
                    {machine.title}
                  </h3>
                  <p className="reveal-up text-dg/50 font-light leading-relaxed mb-6 text-[0.95rem]">
                    {machine.desc}
                  </p>
                  <div className="reveal-up flex flex-wrap gap-2.5">
                    {machine.specs.map((spec, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-dg/[0.04] border border-dg/10 text-[0.72rem] font-medium tracking-wide text-dg/60"
                      >
                        <svg className="w-3 h-3 text-dg/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gb-light py-20 md:py-24 border-y border-dg/8">
        <div
          className="max-w-[900px] mx-auto px-6 md:px-10 text-center"
          ref={(el) => { if (el) revealRefs.current[5] = el; }}
        >
          <span className="reveal-up inline-block text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-4">
            Our Process
          </span>
          <h2 className="reveal-up font-serif text-3xl md:text-4xl text-dg leading-tight mb-14">
            Farm to <span className="italic">Dispatch.</span>
          </h2>

          <div className="reveal-up grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
            {[
              { step: '01', title: 'Farm Sourcing', icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
              { step: '02', title: 'Shelling', icon: 'M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z' },
              { step: '03', title: 'Chekku Press', icon: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' },
              { step: '04', title: 'Color Sorting', icon: 'M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25' },
              { step: '05', title: 'Dispatch', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.308A8.177 8.177 0 0016.5 6.562M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-dg/[0.06] border border-dg/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-dg/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-dg/30 mb-1">{item.step}</span>
                <span className="text-sm font-medium text-dg/70">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-gb py-20 md:py-24">
        <div
          className="max-w-[1000px] mx-auto px-6 md:px-10"
          ref={(el) => { if (el) revealRefs.current[6] = el; }}
        >
          <div className="text-center mb-14">
            <span className="reveal-up inline-block text-[0.6rem] font-semibold tracking-[0.35em] uppercase text-dg/35 mb-4">
              Why Sree Velavan
            </span>
            <h2 className="reveal-up font-serif text-3xl md:text-4xl text-dg leading-tight">
              Built on <span className="italic">Trust.</span>
            </h2>
          </div>

          <div className="reveal-up grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Direct Farm Sourcing', desc: 'We buy raw groundnuts directly from farmers around Dharapuram — no middlemen, no markups. Fair prices for farmers, quality raw material for us.', icon: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z' },
              { title: 'Honest Quality', desc: 'Every batch is hand-inspected. No mixing, no blending, no artificial grading. What you see is what you get — clean, uniform, naturally processed peanuts.', icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z' },
              { title: 'Reliable Supply', desc: 'Located in the heart of peanut country, we ensure consistent supply year-round. Our relationships with local farmers mean we never run short on raw material.', icon: 'M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-.308A8.177 8.177 0 0016.5 6.562M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z' },
            ].map((item, i) => (
              <div key={i} className="bg-gb-light rounded-2xl p-7 border border-dg/6">
                <div className="w-11 h-11 rounded-xl bg-dg/[0.06] border border-dg/10 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-dg/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-lg text-dg mb-2">{item.title}</h3>
                <p className="text-dg/40 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dg py-20 md:py-24">
        <div
          className="max-w-[800px] mx-auto px-6 md:px-10 text-center"
          ref={(el) => { if (el) revealRefs.current[7] = el; }}
        >
          <h2 className="reveal-up font-serif text-3xl md:text-4xl text-gb leading-tight mb-6">
            Visit Our <span className="italic">Unit.</span>
          </h2>
          <p className="reveal-up text-gb/50 text-lg font-light max-w-xl mx-auto mb-10 leading-relaxed">
            We welcome business partners to visit our processing unit in Dharapuram. See how we work, meet our team, and experience our commitment to quality firsthand.
          </p>
          <div className="reveal-up flex flex-wrap items-center justify-center gap-4">
            <a href="tel:+917904538909" className="inline-flex items-center gap-2.5 bg-gb text-dg font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gb-dark transition-colors duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Schedule a Visit
            </a>
            <a
              href="https://wa.me/917904538909?text=Hello%20Sree%20Velavan%2C%20I%20would%20like%20to%20visit%20your%20processing%20unit."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent border border-gb/30 text-gb font-medium text-sm px-7 py-3.5 rounded-full hover:bg-gb/10 transition-colors duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
