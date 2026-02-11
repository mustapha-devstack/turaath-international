"use client";

import ContactForm from "@/components/Contact/ContactForm";
import GoogleMap from "@/components/Contact/GoogleMap";
import ContactHeroSection from "@/components/Contact/Hero";
import SchoolInfo from "@/components/Contact/SchoolInfo";
import SocialMedia from "@/components/Contact/Social";


export default function ContactPage() {
  

  return (
    <main>
      <ContactHeroSection/>
      <ContactForm />
      <SchoolInfo />
      <GoogleMap />
      <SocialMedia />
    </main>
  );
}
