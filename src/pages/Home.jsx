import React from "react";
import Navbar from "@/components/neves/Navbar";
import Hero from "@/components/neves/Hero";
import HighlightsStrip from "@/components/neves/HighlightsStrip";
import PresentationSection from "@/components/neves/PresentationSection";
import IntroSection from "@/components/neves/IntroSection";
import MenuSection from "@/components/neves/MenuSection";
import PromoBanner from "@/components/neves/PromoBanner";
import PromotionsSection from "@/components/neves/PromotionsSection";
import FaqSection from "@/components/neves/FaqSection";
import AtmosphereSection from "@/components/neves/AtmosphereSection";
import OwnersSection from "@/components/neves/OwnersSection";
import ReviewsSection from "@/components/neves/ReviewsSection";
import CtaBanner from "@/components/neves/CtaBanner";
import SiteFooter from "@/components/neves/SiteFooter";
import { OrderProvider } from "@/components/neves/OrderProvider";
import FloatingOrder from "@/components/neves/FloatingOrder";

export default function Home() {
  return (
    <OrderProvider>
      <div className="bg-obsidian min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <PresentationSection />
          <HighlightsStrip />
          <IntroSection />
          <MenuSection />
          <PromoBanner />
          <PromotionsSection />
          <FaqSection />
          <AtmosphereSection />
          <ReviewsSection />
          <CtaBanner />
          <OwnersSection />
          </main>
        <SiteFooter />
        <FloatingOrder />
      </div>
    </OrderProvider>
  );
}