import { GraduationCap, MapPin } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-6">Tentang Saya</h1>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
            Halo! Saya <span className="font-semibold text-orange-700">Dony Putra Perkasa</span>,
            seorang guru privat matematika berpengalaman sejak tahun 2015.
            </p>
            <div className="flex items-center justify-center gap-2 mb-4 text-gray-700">
            <MapPin className="w-5 h-5 text-orange-600" />
            <span className="font-medium">Kasihan, Bantul, Yogyakarta</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-6 text-gray-700">
            <GraduationCap className="w-5 h-5 text-orange-600" />
            <span>Berpengalaman lebih dari 9 tahun mengajar privat matematika untuk SMP & SMA</span>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4">
            Saya percaya bahwa setiap siswa memiliki potensi untuk berprestasi dalam matematika
            apabila mendapatkan bimbingan yang sabar, metode yang sesuai, dan suasana belajar
            yang positif. Dalam setiap sesi les, saya berusaha untuk tidak hanya mengajar rumus,
            tetapi juga menanamkan cara berpikir kritis dan rasa percaya diri.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Dengan pendekatan personal dan fleksibel, saya siap membantu kamu memahami materi
            matematika — dari konsep dasar hingga persiapan ujian — dengan hasil nyata dan
            pengalaman belajar yang menyenangkan ✨
            </p>
        </div>
        </section>
    );
}