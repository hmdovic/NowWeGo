import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import Services from "@/components/sections/Services";
import SelectedWork from "@/components/sections/SelectedWork";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import Results from "@/components/sections/Results";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Services />
      <SelectedWork />
      <WhyUs />
      <Process />
      <Results />
      <Testimonials />
      <FAQSection />
      <CTA />
    </>
  );
}
