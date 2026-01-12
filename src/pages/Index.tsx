import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import EventImageSection from "@/components/EventImageSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CompaniesSection from "@/components/CompaniesSection";
import TimetableSection from "@/components/TimetableSection";
import ParticipateSection from "@/components/ParticipateSection";
import OverviewSection from "@/components/OverviewSection";
import SideNavigation from "@/components/SideNavigation";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SideNavigation />
      
      <main className="pt-16 lg:pr-56">
        <HeroSection />
        <FeaturesSection />
        <EventImageSection />
        <TestimonialsSection />
        <CompaniesSection />
        <TimetableSection />
        <ParticipateSection />
        <OverviewSection />
      </main>

      <StickyFooter />
    </div>
  );
};

export default Index;
