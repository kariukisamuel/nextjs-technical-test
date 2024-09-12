import Nav from "./Nav"
import Hero from "./Hero"
export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-r from-[#FF4E50]  to-[#F9D423] h-screen  text-white overflow-hidden">
              <Nav/>
              <Hero/>
        </div>
    )
}