import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Marquee from "@/components/ui/Marquee";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen selection-purple bg-brand-dark">
        <Navbar />
        
        <Hero />
        <About />
        <Marquee />
        <Features />
        <TechStack />
        <Experience />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
