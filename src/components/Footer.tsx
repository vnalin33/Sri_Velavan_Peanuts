import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dg text-gb/50 pt-14 pb-6 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gb/8" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Image src="/images/logo.png" alt="Sree Velavan" width={320} height={110} className="h-[85px] w-auto brightness-0 invert opacity-50 mb-5" />
            <p className="text-[0.78rem] text-gb/25 font-light leading-relaxed max-w-[220px]">
              Peanut processing & wholesale supply since Dharapuram. Quality you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gb/50 font-medium text-[0.7rem] tracking-[0.2em] uppercase mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Our Story', href: '/#story' },
                { label: 'Products', href: '/#products' },
                { label: 'Quality', href: '/#quality' },
                { label: 'About', href: '/about/' },
                { label: 'Infrastructure', href: '/infrastructure/' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[0.78rem] text-gb/25 hover:text-gb/55 transition-colors duration-300 font-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-gb/50 font-medium text-[0.7rem] tracking-[0.2em] uppercase mb-5">Products</h4>
            <ul className="space-y-2.5 text-[0.78rem] text-gb/25 font-light">
              <li>Red Skin Peanuts</li>
              <li>Custom Grading</li>
              <li>Bulk Supply</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gb/50 font-medium text-[0.7rem] tracking-[0.2em] uppercase mb-5">Contact Us</h4>
            <div className="space-y-3.5 text-[0.78rem] font-light text-gb/25">
              <div className="flex items-start gap-2.5">
                <svg className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gb/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>95, Meenakshipuram,<br />Dharapuram - 638657,<br />Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-gb/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+917904538909" className="hover:text-gb/50 transition-colors duration-300">+91 79045 38909</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-gb/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:Support.srivelavan@gmail.com" className="hover:text-gb/50 transition-colors duration-300">Support.srivelavan@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <svg className="w-3.5 h-3.5 shrink-0 text-gb/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Mon – Sat, 9am – 6pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gb/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[0.65rem] text-gb/18 font-light">&copy; {new Date().getFullYear()} Sree Velavan Chekku Aalai. All rights reserved.</p>
          <p className="text-[0.65rem] text-gb/15 font-light tracking-wider">Pure · Natural · Traditional</p>
        </div>
      </div>
    </footer>
  );
}
