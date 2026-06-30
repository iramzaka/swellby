import React from "react";
import {
  DirectorySection,
  GrowthStackSection,
  HeroSection,
  JoinSection,
  MarketplaceSection,
  ServiceCoordinationSection,
  SessionNotesSection,
  TestimonialsSection,
} from "../sections/index.js";

export default function HomePage() {
  return (
    <main id="home">
      <HeroSection />
      <SessionNotesSection />
      <ServiceCoordinationSection />
      <TestimonialsSection />
      <MarketplaceSection />
      <GrowthStackSection />
      <DirectorySection />
      <JoinSection />
    </main>
  );
}
