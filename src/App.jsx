import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-[#0b0f1a] overflow-hidden">

      {/* GLOBAL GLOW — ONLY ONCE */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[160px]" />
      <div className="absolute top-[40%] right-[-300px] w-[600px] h-[600px] bg-blue-600/35 rounded-full blur-[160px]" />
      <div className="absolute bottom-[-400px] left-[30%] w-[600px] h-[600px] bg-purple-700/35 rounded-full blur-[160px]" />

      {/* ALL CONTENT */}
      <div className="relative z-10">

        <Navbar />
        <Hero />
        <Aboutme/>
        <Skills />
        <Portfolio />
        <Experience />
        <Certificates/>
        <Interests/>
        <Contact />
        <Footer />

      </div>

    </div>
  );
}
