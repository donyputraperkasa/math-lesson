// sections/AboutSection.tsx
import React from "react";
import { UserRound, MapPin } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-16 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
            <UserRound className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-orange-700">Tentang Pengajar</h2>
            </div>

            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
            Halo! Saya <span className="font-semibold text-orange-700">Dony Putra Perkasa</span>,
            seorang guru privat matematika berpengalaman sejak tahun 2015.
            </p>

            <div className="flex items-center justify-center gap-2 mb-4 text-gray-700">
            <MapPin className="w-5 h-5 text-orange-600" />
            <span className="font-medium">Kasihan, Bantul, Yogyakarta</span>
            </div>

            <p className="text-gray-700 max-w-2xl mx-auto mb-4">
            Dengan pengalaman mengajar berbagai jenjang, saya percaya bahwa setiap siswa dapat
            memahami matematika dengan cara yang menyenangkan dan mudah dipahami.
            </p>

            <p className="text-gray-700 max-w-2xl mx-auto">
            Pendekatan saya berfokus pada logika, latihan bertahap, dan suasana belajar yang santai
            agar siswa lebih percaya diri dan menikmati setiap proses belajar.
            </p>
        </div>
        </section>
    );
}
