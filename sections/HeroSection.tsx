import WhatsappButton from "@/components/WhatsappButton";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section
            className="relative flex flex-col items-center justify-center text-center py-16 px-4 overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: "url('/dony2.png')" }}
        >
            {/* Overlay gelap agar teks kontras */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 animate-fade-in">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Sparkles className="w-8 h-8 text-white animate-pulse" />
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-md">
                        BELAJAR MATEMATIKA
                    </h1>
                </div>

                <p className="text-white/90 max-w-xl mx-auto mb-3 text-lg leading-relaxed drop-shadow-md">
                    Belajar jadi lebih mudah dan menyenangkan bersama{" "}
                </p>

                <div className="mb-8">
                    <span className="font-semibold text-white">berpengalaman | </span>
                    <span className="font-semibold text-white">bersertifikat pendidik | </span>
                    <span className="font-semibold text-white"> friendly</span>
                </div>
            </div>
        </section>
    );
}