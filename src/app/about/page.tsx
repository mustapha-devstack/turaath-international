"use client";

import DeveloperSection from "@/components/About/Developer";
import AboutHeroSection from "@/components/About/Hero";
import HistorySection from "@/components/About/History";
import MissionVisionValues from "@/components/About/Missions";
import StaffSection from "@/components/About/Staff";

export default function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <HistorySection />
      <MissionVisionValues />
      <StaffSection />
      <DeveloperSection />
    </main>
  );
}
