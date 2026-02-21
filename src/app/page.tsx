import Header from "@/components/common/Header/header";
import { HeroSection } from "@/components/sections/Hero/hero";
import ResultsSection from "@/components/sections/Results/results";
import ServicesSection from "@/components/sections/Services/services";
import ProblemsSection from "@/components/sections/Problems/problems";
import ProcessSection from "@/components/sections/Process/process";
import TestimonialsSection from "@/components/sections/Testimonials/testimonials";
import PresentationsSection from "@/components/sections/Presentations/presentations";
import FaqSection from "@/components/sections/FAQ/faq";
import Footer from "@/components/common/Footer/footer";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ResultsSection />
      <ServicesSection />
      <ProblemsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PresentationsSection />
      <FaqSection />
      <Footer />
    </>
  );
}
