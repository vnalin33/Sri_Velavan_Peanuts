import type { Metadata } from 'next';
import InfrastructurePage from '@/components/InfrastructurePage';

export const metadata: Metadata = {
  title: 'Infrastructure — Sree Velavan | High-Tech Peanut Processing',
  description: 'Explore our state-of-the-art peanut processing facility in Dharapuram. Automated shelling, electronic sorting, quality testing, and temperature-controlled storage.',
};

export default function Infrastructure() {
  return <InfrastructurePage />;
}
