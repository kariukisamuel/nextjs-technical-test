import Header from "./components/Layout/Header";
import HeroSection from "./components/Home/Hero";
import HowItWorks from "./components/Home/HowItWorks";
import Partners from "./components/Home/Partners";
import HolidayActivity from "./components/Home/HolidayActivity";
import Form from "./components/Home/Form";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    // Set a maximum width for the parent container to prevent elements from expanding beyond 1440px
    <div className="max-w-{1440}">
      <Header />
      <main>
        <HeroSection />
        <HowItWorks title="How Dreamshare works?" />
        <Partners title="Meet a partner for your best holiday" />
        <HolidayActivity title="Discover holiday activity ideas" />
        <Form title="Crate your holiday activity" />
      </main>
      <Footer />
    </div>
  );
}
