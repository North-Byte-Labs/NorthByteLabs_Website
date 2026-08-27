import React from "react";
import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { PricingStrip } from "@/components/sections/PricingStrip";
import { Services } from "@/components/sections/Services";
import { Showcase } from "@/components/sections/Showcase";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { SeoSection } from "@/components/sections/SeoSection";
import { Analytics } from "@/components/sections/Analytics";
import { Branding } from "@/components/sections/Branding";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaSection } from "@/components/sections/CtaSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/sections/WhatsAppButton";
import { IdlePopup } from "@/components/sections/IdlePopup";

function App() {
  useSmoothScroll();

  return (
    <div className="App relative min-h-screen w-full overflow-x-hidden bg-background text-foreground antialiased">
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <Navbar />

      <main className="w-full overflow-x-hidden">
        <Hero />
        <Pricing />
        <PricingStrip />
        <Services />
        <Showcase />
        <BeforeAfter />
        <SeoSection />
        <Analytics />
        <Branding />
        <WhyChoose />
        <Process />
        <Portfolio />
        <Testimonials />
        <CtaSection />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
      <IdlePopup />
      <Toaster position="bottom-center" richColors />
    </div>
  );
}

export default App;
