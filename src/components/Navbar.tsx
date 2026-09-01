'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      if (isHome) {
        const storyEl = document.getElementById('story');
        if (storyEl) {
          const rect = storyEl.getBoundingClientRect();
          setHidden(rect.top < 0 && rect.bottom > window.innerHeight);
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'Home', href: isHome ? '#' : '/' },
    { label: 'Our Story', href: isHome ? '#story' : '/#story' },
    { label: 'About', href: '/about/' },
    { label: 'Product', href: isHome ? '#products' : '/#products' },
    { label: 'Quality', href: isHome ? '#quality' : '/#quality' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setMobileOpen(false);
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setMobileOpen(false);
      // Let normal navigation proceed for page links
    }
  }, []);

  return (
    <>
      <nav
        className={`nav-floating ${scrolled ? 'scrolled' : ''}`}
        style={{ opacity: hidden ? 0 : 1, pointerEvents: hidden ? 'none' : 'auto' }}
      >
        <div className="px-6 md:px-8 flex items-center justify-between h-[80px]">
          <Link href="/" className="flex items-center shrink-0 overflow-visible">
            <Image
              src="/images/logo.png"
              alt="Sri Velavan"
              width={380}
              height={120}
              className={`transition-all duration-500 ${scrolled ? 'h-[78px]' : 'h-[100px]'} w-auto`}
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`nav-link-underline text-[0.88rem] font-medium tracking-wide transition-colors duration-300 ${
                  (item.href === '/about/' && pathname === '/about') 
                    ? 'text-dg' 
                    : 'text-dg/80 hover:text-dg'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href={isHome ? '#contact' : '/#contact'} 
              onClick={(e) => isHome && handleNavClick(e, '#contact')} 
              className="hidden md:inline-flex btn-primary !py-2.5 !px-6 !text-[0.82rem]"
            >
              Get in Touch
            </Link>
            <button className="lg:hidden flex flex-col gap-[5px] w-8 h-8 items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span className={`block w-5 h-[1.5px] bg-dg transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-dg transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-gb/98 backdrop-blur-2xl z-[99]">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)} 
                className={`text-2xl font-serif font-medium ${
                  (item.href === '/about/' && pathname === '/about') 
                    ? 'text-dg' 
                    : 'text-dg/70'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href={isHome ? '#contact' : '/#contact'} 
              onClick={(e) => isHome && handleNavClick(e, '#contact')} 
              className="btn-primary mt-4"
            >
              Get in Touch
            </Link>
          </div>
          <button className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center" onClick={() => setMobileOpen(false)}>
            <span className="block w-5 h-[1.5px] bg-dg rotate-45 absolute" />
            <span className="block w-5 h-[1.5px] bg-dg -rotate-45 absolute" />
          </button>
        </div>
      )}
    </>
  );
}
