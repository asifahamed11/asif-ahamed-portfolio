import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Research from "@/components/Research";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Main Seamless Widescreen Canvas */}
      <main className="max-w-[1540px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 pt-12 sm:pt-16 pb-12 space-y-12 sm:space-y-14 flex-1 relative z-10">
        {/* Row 1: Hero & Identity */}
        <Hero />

        {/* Row 2: Research & Projects Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pt-8 border-t border-line">
          <Research />
          <Projects />
        </div>

        {/* Row 3: Toolkit & Contact Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 border-t border-line">
          <div className="lg:col-span-7">
            <Skills />
          </div>
          <div className="lg:col-span-5">
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
