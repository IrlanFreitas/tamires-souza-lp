import Header from "@/components/common/Header/header";
import { HeroSection } from "@/components/sections/Hero/hero";
import  ResultsSection  from "@/components/sections/Results/results";

export default function Page() {
  return (
    <>
      <Header />
      <HeroSection />
      <ResultsSection />
    </>
  );
}
