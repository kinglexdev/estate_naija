"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickySearch from "@/components/StickySearch";
import PropertyTypeLinks from "@/components/PropertyTypeLinks";
import TrustBanner from "@/components/TrustBanner";
import FeaturedListings from "@/components/FeaturedListings";
import ServicesSection from "@/components/ServicesSection";
import TrustIndicators from "@/components/TrustIndicators";
import DiasporaSection from "@/components/DiasporaSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <>
      <Navbar />
      <StickySearch heroRef={heroRef} />
      <main>
        <Hero heroRef={heroRef} />
        <PropertyTypeLinks />
        <TrustBanner />
        <FeaturedListings />
        <ServicesSection />
        <TrustIndicators />
        <DiasporaSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
