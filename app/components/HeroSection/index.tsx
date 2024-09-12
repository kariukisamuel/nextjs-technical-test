import Nav from "./Nav";
import Hero from "./Hero";
export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-blazingRed  to-blazingYellow h-screen  text-white overflow-hidden">
      <Nav />
      <Hero />
    </div>
  );
}
