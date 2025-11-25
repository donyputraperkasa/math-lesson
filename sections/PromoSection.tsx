"use client";

import { useState } from "react";
import { Percent, BookOpen, Users, Laptop, Sparkles, Star, X } from "lucide-react";

export default function PromoSection() {
    const [selectedPromo, setSelectedPromo] = useState<any>(null);

    const promos = [
        {
            title: "Paket 4x / Bulan (Reguler)",
            level: "SMP",
            duration: "60-90 menit/sesi",
            price: "Rp500.000",
            desc: "Kelas maksimal 3 siswa, difokuskan untuk meningkatkan pemahaman dan kemampuan menyelesaikan soal ujian.",
            icon: Users,
            color: "emerald",
            bgColor: "bg-emerald-50",
            buttonColor: "bg-emerald-500 hover:bg-emerald-600",
        },
        {
            title: "Paket 4x / Bulan (One-on-One)",
            level: "SMP",
            duration: "60-90 menit/sesi",
            price: "Rp200.000",
            desc: "Privat personal dengan pembahasan mendalam sesuai kebutuhan akademik siswa.",
            icon: Star,
            color: "emerald",
            bgColor: "bg-emerald-100",
            buttonColor: "bg-emerald-600 hover:bg-emerald-700",
        },
        // SMA/K
        {
            title: "Paket 4x / Bulan (Reguler)",
            level: "SMA/K",
            duration: "60-90 menit/sesi",
            price: "Rp600.000",
            desc: "Kelas berkelompok kecil (maks 3 siswa) dengan fokus pada persiapan ujian sekolah dan UTBK.",
            icon: BookOpen,
            color: "violet",
            bgColor: "bg-violet-50",
            buttonColor: "bg-violet-500 hover:bg-violet-600",
        },
        {
            title: "Paket 4x / Bulan (One-on-One)",
            level: "SMA/K",
            duration: "60-90 menit/sesi",
            price: "Rp280.000",
            desc: "Kelas intensif 1 guru 1 siswa, cocok untuk siswa kelas akhir atau persiapan UTBK/SNBT.",
            icon: Laptop,
            color: "violet",
            bgColor: "bg-violet-100",
            buttonColor: "bg-violet-600 hover:bg-violet-700",
        },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-10">
            <Percent className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-400 text-transparent bg-clip-text">
                ✨ Pilih Paket Les Terbaikmu ✨
            </h2>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {promos.map((promo, i) => {
                const Icon = promo.icon;
                return (
                <div
                    key={i}
                    className={`${promo.bgColor} border border-${promo.color}-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-${promo.color}-600 p-6 flex flex-col justify-between transition-all duration-300 flex-shrink-0 snap-center w-80 border-t-4 border-${promo.color}-400 hover:-translate-y-1`}
                >
                    <div>
                    <Icon className={`w-10 h-10 text-${promo.color}-500 mx-auto mb-3`} />
                    <h3 className={`text-xl font-semibold text-${promo.color}-600 mb-1`}>
                        {promo.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                        {promo.level} • {promo.duration}
                    </p>
                    <p className="text-gray-700 mb-4">{promo.desc}</p>
                    </div>
                    <div>
                    <p className={`text-2xl font-bold text-${promo.color}-700 mb-4`}>
                        {promo.price}
                    </p>
                    <button
                        onClick={() => setSelectedPromo(promo)}
                        className={`${promo.buttonColor} text-white font-bold px-5 py-2 rounded-lg transition`}
                    >
                        Booking Sekarang
                    </button>
                    </div>
                </div>
                );
            })}
            </div>

            {/* Modal Section */}
            {selectedPromo && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50"
                    onClick={() => setSelectedPromo(null)}
                >
                    <div
                    className="bg-white rounded-2xl shadow-lg p-8 w-96 relative"
                    onClick={(e) => e.stopPropagation()} // agar klik di dalam modal tidak menutup
                    >
                    <button
                        onClick={() => setSelectedPromo(null)}
                        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h3 className="text-2xl font-bold text-orange-600 mb-4">Detail Pemesanan</h3>
                    <div className="text-left space-y-2 mb-6">
                        <p><strong>Paket:</strong> {selectedPromo.title}</p>
                        <p><strong>Jenjang:</strong> {selectedPromo.level}</p>
                        <p><strong>Durasi:</strong> {selectedPromo.duration}</p>
                        <p><strong>Harga:</strong> {selectedPromo.price}</p>
                    </div>
                    <a
                        href={`https://wa.me/6282236343404?text=${encodeURIComponent(
                            `Halo! Saya ingin mendaftar les dengan detail berikut:\n\n` +
                            `✅ Paket: ${selectedPromo.title}\n` +
                            `🎓 Jenjang: ${selectedPromo.level}\n` +
                            `⏱️ Durasi: ${selectedPromo.duration}\n` +
                            `💰 Harga: ${selectedPromo.price}\n\n` +
                            `Mohon informasi lebih lanjut, terima kasih!`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
                        >
                        Lanjut ke WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </div>
        </section>
    );
}