import HeroSection from '@/app/components/HeroSection';
import RoleSelection from '@/app/components/RoleSection';
import IntroSection from '@/app/components/IntroSection';
import LogoSection from '@/app/components/LogoSection';
import GallerySection from '@/app/components/GallerySection';
import ContactSection from '@/app/components/ContactSection';
import TestReview from '@/app/components/TestReview';
import ServiceSection from '@/app/components/ServicesSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RoleSelection />
      <IntroSection />
      <LogoSection />
      <GallerySection />
      <ContactSection />
      <TestReview />
      <ServiceSection />
    </main>
  );
}
