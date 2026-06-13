import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TickerBanner from '@/components/TickerBanner';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import WorkSection from '@/components/WorkSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />

      
      <TickerBanner />
      <ServicesSection />
      <StatsSection />
      <WorkSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
