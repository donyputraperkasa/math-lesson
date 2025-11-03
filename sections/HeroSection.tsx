// sections/HeroSection.tsx
import WhatsappButton from "@/components/WhatsappButton";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Les Privat Matematika SMP & SMA
        </h1>
        <p className="text-gray-600 max-w-xl mb-8">
            Belajar jadi lebih mudah dan menyenangkan bersama guru privat berpengalaman di Bantul & Jogja.
        </p>
        <WhatsappButton />
        </section>
    );
}