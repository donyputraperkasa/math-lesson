"use client";

import { useState } from "react";
import { Percent, BookOpen, Users, Laptop, Sparkles, Star, X } from "lucide-react";
import PromoGrid from "@/components/PromoGrid";
import PromoModal from "@/components/PromoModal";

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
        <section className="py-20 mt-32 relative z-20 overflow-visible">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-10">
                    <Percent className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">
                        ✨ Pilih Paket Les Terbaikmu ✨
                    </h2>
                </div>
                
                <PromoGrid promos={promos} onSelect={setSelectedPromo} />

                {/* Modal Section */}
                {selectedPromo && (
                    <PromoModal selectedPromo={selectedPromo} onClose={() => setSelectedPromo(null)} />
                )}
            </div>
        </section>
    );
}