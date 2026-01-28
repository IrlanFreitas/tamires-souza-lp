import Header from "@/components/common/Header/header";
import { HeroSection } from "@/components/sections/Hero/hero";
import  ResultsSection  from "@/components/sections/Results/results";
import  ProblemsSection  from "@/components/sections/Problems/problems";
import  ProcessSection  from "@/components/sections/Process/process";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ResultsSection />
      <ProblemsSection />
      <ProcessSection />
    </>
  );
}
