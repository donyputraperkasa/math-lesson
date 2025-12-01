import HeroSection from "@/sections/HeroSection";
import ScheduleSection from "@/sections/ScheduleSection";
import PromoSection from "@/sections/PromoSection";
import ReviewSection from "@/sections/ReviewSection";
import CTASection from "@/sections/CTASection";
import MapSection from "@/sections/MapSection";
import Question from "@/components/Question";

export default function HomePage() {
  return (
      <main
        className="relative bg-cover bg-center bg-fixed text-gray-800"
        style={{
          backgroundImage: "url('/wallpaper1.png')",
        }}
      >
      {/* Overlay transparan agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />

      {/* Efek gradient transparan di atas konten utama */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/40 pointer-events-none" />

      {/* Konten utama */}
      <div className="relative z-10 ">
        <HeroSection />
        <div className="" />
        <ScheduleSection />
        <div className="" />
        <PromoSection />
        <div className="" />
        <ReviewSection />
        <div className="" />
        <CTASection />
        <div className="" />
        <Question />
        <div className="" />
        <MapSection />
      </div>
    </main>
  );
}