import HeroSection from "@/sections/HeroSection";
import ScheduleSection from "@/sections/ScheduleSection";
import PromoSection from "@/sections/PromoSection";
import AboutSection from "@/sections/AboutSection";
import ProgramSection from "@/sections/ProgramSection";
import ReviewSection from "@/sections/ReviewSection";
import TipsSection from "@/sections/TipsSection";
import CTASection from "@/sections/CTASection";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-b from-orange-50 via-white to-orange-50 transition-all duration-500">
      <HeroSection />
      <div className="border-t border-orange-100" />
      <ScheduleSection />
      <div className="border-t border-orange-100" />
      <PromoSection />
      <div className="border-t border-orange-100" />
      <AboutSection />
      <div className="border-t border-orange-100" />
      <ProgramSection />
      <div className="border-t border-orange-100" />
      <ReviewSection />
      <div className="border-t border-orange-100" />
      <TipsSection />
      <div className="border-t border-orange-100" />
      <CTASection />
    </main>
  );
}