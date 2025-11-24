"use client";

import DeveloperSection from "@/components/About/Developer";
import HistorySection from "@/components/About/History";
import LeadershipSection from "@/components/About/Leadership";
import MissionVisionValues from "@/components/About/Missions";
import StaffSection from "@/components/About/Staff";

export default function AboutPage() {
  return (
    <main>
      <HistorySection />
      <MissionVisionValues />
      <LeadershipSection />
      <StaffSection />
      <DeveloperSection />
    </main>
  );
}
