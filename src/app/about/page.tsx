import type { Metadata } from 'next';
import AboutPage from '@/components/AboutPage';

export const metadata: Metadata = {
  title: 'About — Sree Velavan | Our Founder & Story',
  description: 'Learn about Mohanraj.P, the visionary founder of Sree Velavan, and the journey of building a trusted peanut processing business from Dharapuram.',
};

export default function About() {
  return <AboutPage />;
}
