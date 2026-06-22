import React from "react";
import {
  DirectorySection,
  GrowthStackSection,
  HeroSection,
  JoinSection,
  MarketplaceSection,
  SessionNotesSection,
  TestimonialsSection,
} from "../sections/index.js";

export default function HomePage() {
  return (
    <main id="home">
      <HeroSection />
      <MarketplaceSection />
      <SessionNotesSection />
      <TestimonialsSection />
      <GrowthStackSection />
      <DirectorySection />
      <JoinSection />
    </main>
  );
}
