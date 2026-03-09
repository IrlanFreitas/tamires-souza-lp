import { lazy } from 'react';
// import Header from "@/components/common/Header/header";

// import HeroSection from "@/components/sections/Hero/hero";
// import ResultsSection from "@/components/sections/Results/results";
// import ServicesSection from "@/components/sections/Services/services";
// import ProblemsSection from "@/components/sections/Problems/problems";
// import ProcessSection from "@/components/sections/Process/process";
// import TestimonialsSection from "@/components/sections/Testimonials/testimonials";
// import PresentationsSection from "@/components/sections/Presentations/presentations";
// import FaqSection from "@/components/sections/FAQ/faq";
// import Footer from "@/components/common/Footer/footer";

const Header = lazy(() => import("@/components/common/Header/header"));
const HeroSection = lazy(() => import("@/components/sections/Hero/hero"));
const ResultsSection = lazy(() => import("@/components/sections/Results/results"));
const ServicesSection = lazy(() => import("@/components/sections/Services/services"));
const ProblemsSection = lazy(() => import("@/components/sections/Problems/problems"));
const ProcessSection = lazy(() => import("@/components/sections/Process/process"));
const TestimonialsSection = lazy(() => import("@/components/sections/Testimonials/testimonials"));
const PresentationsSection = lazy(() => import("@/components/sections/Presentations/presentations"));
const FaqSection = lazy(() => import("@/components/sections/FAQ/faq"));
const Footer = lazy(() => import("@/components/common/Footer/footer"));

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ResultsSection />
        <ServicesSection />
        <ProblemsSection />
        <ProcessSection />
        <TestimonialsSection />
        <PresentationsSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
