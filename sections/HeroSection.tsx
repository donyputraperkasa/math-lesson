import WhatsappButton from "@/components/WhatsappButton";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-28 px-4 bg-gradient-to-b from-orange-100 via-white to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none" />

        <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-8 h-8 text-orange-500 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 drop-shadow-sm">
                Les Privat Matematika SMP & SMA
            </h1>
            </div>

            <p className="text-gray-700 max-w-xl mx-auto mb-8 text-lg leading-relaxed">
            Belajar jadi lebih mudah dan menyenangkan bersama{" "}
            <span className="font-semibold text-orange-600">guru privat berpengalaman </span> 
            di Kasihan, Bantul & Yogyakarta
            </p>

            <div className="animate-bounce-slow">
            <WhatsappButton />
            </div>
        </div>
        </section>
    );
}