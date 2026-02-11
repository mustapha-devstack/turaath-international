import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/ConsulationHeader";

export const metadata: Metadata = {
  title: "Turaath-Consultation",
  description: "Islamic institution",
};

export default function CunsultationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header/>
      {children}
    </main>
        
    );
}
