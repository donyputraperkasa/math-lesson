import WhatsappButton from "@/components/WhatsappButton";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative flex flex-col items-center justify-center text-center py-16 px-4 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-100">
        {/* Decorative blur circles */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="px-10 py-12 mx-auto">
            <div className="flex justify-center items-center gap-3 mb-4">
                <Sparkles className="w-9 h-9 text-blue-600 animate-pulse" />
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow">
                    BELAJAR MATEMATIKA
                </h1>
            </div>

            <p className="text-blue-700/80 mb-6 text-lg md:text-xl leading-relaxed">
                Bimbingan belajar matematika yang{" "}
                <span className="font-semibold">mudah dipahami</span>,{" "}
                <span className="font-semibold">nyaman</span>, dan{" "}
                <span className="font-semibold">berorientasi hasil</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm md:text-base">
            <span className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 font-medium">
                Berpengalaman
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 font-medium">
                Bersertifikat Pendidik
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-600/10 text-blue-700 font-medium">
                Friendly & Sabar
            </span>
            </div>
        </div>
        </section>
    );
}