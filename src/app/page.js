import HeroSection from '@/app/components/HeroSection';
import RoleSelection from '@/app/components/RoleSection';
import IntroSection from '@/app/components/IntroSection';
import LogoSection from '@/app/components/LogoSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <RoleSelection />
      <IntroSection />
      <LogoSection />
    </main>
  );
}
