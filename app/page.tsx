import { Footer } from "@/components/base/Footer";
import { Navigation } from "@/components/base/Navigation";
import { AboutSection } from "@/components/landing/AboutSection";
import { ComponentsSection } from "@/components/landing/ComponentsSection";
import { BentoSection } from "@/components/landing/GridSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HostingSection } from "@/components/landing/HostingSection";
import Particles from "@/components/uicomponents/particles";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-between">
      <Particles
        className="absolute inset-0 -z-10 w-full min-h-dvh"
        quantity={1200}
        ease={80}
        color={"black"}
        refresh
      />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BentoSection />
      <ComponentsSection />
      <HostingSection />
      <Footer />
    </section>
  );
}
