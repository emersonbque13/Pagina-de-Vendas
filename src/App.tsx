import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Imagine from "./components/Imagine";
import Benefits from "./components/Benefits";
import WhatIsInside from "./components/WhatIsInside";
import Comparison from "./components/Comparison";
import Curiosities from "./components/Curiosities";
import Differences from "./components/Differences";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Guarantee from "./components/Guarantee";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  // Smooth scroll handler to the CTA Final section
  const handleCtaClick = () => {
    const ctaSection = document.getElementById("cta-final");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-brand-red/20 selection:text-brand-navy" id="landing-page-root">
      {/* Premium Floating Header */}
      <Header onCtaClick={handleCtaClick} />

      <main className="flex-1" id="landing-page-main">
        {/* 1. Hero Section */}
        <Hero onCtaClick={handleCtaClick} />

        {/* 2. Emotional Pain Section */}
        <Problem />

        {/* 3. Mental Relief Vision Section */}
        <Imagine />

        {/* 4. Transformational Benefits List */}
        <Benefits />

        {/* 5. Superficial Contents Presentation */}
        <WhatIsInside />

        {/* 6. Comparison Section */}
        <Comparison />

        {/* 7. Alarm curiosities */}
        <Curiosities />

        {/* 8. Unique Differentials */}
        <Differences />

        {/* 9. Layout Example Testimonials */}
        <Testimonials />

        {/* 10. Guarantee Seal Block */}
        <Guarantee />

        {/* 11. FAQ strategic questions */}
        <FAQ />

        {/* 12. Final checkout / urgency block */}
        <CTA />
      </main>

      {/* Premium Footer */}
      <Footer />
    </div>
  );
}
