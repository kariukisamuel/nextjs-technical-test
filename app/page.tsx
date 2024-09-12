import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PartnerSection from "./components/PartnerSection";
import HolidayActivitySection from "./components/HolidayActivitySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection title="How Dreamshare works?" />
      <PartnerSection title="Meet a partner for your best holiday" />
      <HolidayActivitySection title="Discover holiday activity ideas" />
    </main>
  );
}
