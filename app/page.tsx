import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import PartnerSection from "./components/PartnerSection";
import HolidayActivitySection from "./components/HolidayActivitySection";
import Form from "./components/FormSection";
import Footer from "./components/FooterSection";

export default function Home() {
  return (
    <div>
      <main>
        <HeroSection />
        <HowItWorksSection title="How Dreamshare works?" />
        <PartnerSection title="Meet a partner for your best holiday" />
        <HolidayActivitySection title="Discover holiday activity ideas" />
        <Form title="Crate your holiday activity" />
      </main>
      <Footer />
    </div>
  );
}
