import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import ScrollStory from '@/components/ScrollStory';
import About from '@/components/About';
import Products from '@/components/Products';
import Quality from '@/components/Quality';
import B2B from '@/components/B2B';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import FloatingPeanut from '@/components/FloatingPeanut';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <TrustBadges />
      <ScrollStory />
      <About />
      <Products />
      <Quality />
      <B2B />
      <CTA />
      <Footer />
      <FloatingPeanut />
    </>
  );
}
