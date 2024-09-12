import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PartnerSection from "./components/PartnerSection";
import HolidayActivitySection from "./components/HolidayActivitySection";
import Form from "./components/FormSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection title="How Dreamshare works?" />
      <PartnerSection title="Meet a partner for your best holiday" />
      <HolidayActivitySection title="Discover holiday activity ideas" />
      <Form title="Crate your holiday activity"/>
    </main>
  );
}
