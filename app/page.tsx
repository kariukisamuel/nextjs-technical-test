// Import necessary components from their respective paths
import Header from "./components/Layout/Header";
import Hero from "./components/Home/Hero";
import HowDreamshareWorks from "./components/Home/HowDreamShareWorks";
import Partners from "./components/Home/Partners";
import HolidayActivity from "./components/Home/HolidayActivity";
import MeetAPartnerForm from "./components/Home/MeetAPartnerForm";
import Footer from "./components/Layout/Footer";

export default function Home() {
  return (
    <div>
      {/* 
        Page Layout:

        - <Header />: Renders the header of the page, typically containing navigation links and branding.
        
        - <main>: The main content section of the page.
          - <Hero />: Displays the hero section, likely containing a prominent image or message.
          - <HowItWorks title="How Dreamshare works?"/>: Component that explains how the Dreamshare service works. The title is passed as a prop.
          - <Partners title="Meet a partner for your best holiday"/>: Displays information about partners related to the holiday experience. The title is passed as a prop.
          - <HolidayActivity title="Discover holiday activity ideas"/>: Shows different ideas for holiday activities. The title is passed as a prop.
          - <Form title="Create your holiday activity"/>: A form component allowing users to create or submit their holiday activities. The title is passed as a prop.

        - <Footer />: Renders the footer of the page, typically containing contact information, links, and other site-wide details.
      */}
      <Header />
      <main>
        <Hero />
        <HowDreamshareWorks/>
        <Partners />
        <HolidayActivity/>
        <MeetAPartnerForm/>
      </main>
      <Footer />
    </div>
  );
}
