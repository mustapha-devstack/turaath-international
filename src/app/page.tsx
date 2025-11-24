import AboutSection from "@/components/Home/About";
import AdmissionsSection from "@/components/Home/Admission";
import FoundersSection from "@/components/Home/Founders";
import HeroSection from "@/components/Home/Hero";
import PillarsSection from "@/components/Home/Pillars";
import ProgramsSection from "@/components/Home/Program";
import ValuesSection from "@/components/Home/Value";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ValuesSection />
      <AboutSection />
      <ProgramsSection />
      <FoundersSection />
      <PillarsSection />
      <AdmissionsSection />
    </main>
  )
}