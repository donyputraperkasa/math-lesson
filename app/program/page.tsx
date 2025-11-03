import { BookOpen } from "lucide-react";

export default function ProgramPage() {
    const programs = [
        {
        title: "Les Matematika SMP",
        desc: "Pendalaman konsep dasar dan latihan soal rutin untuk jenjang SMP.",
        },
        {
        title: "Les Matematika SMA",
        desc: "Penguasaan materi matematika wajib dan peminatan dengan pembahasan mendalam.",
        },
        {
        title: "Persiapan Ujian",
        desc: "Bimbingan intensif menghadapi ujian sekolah maupun ujian masuk perguruan tinggi.",
        },
    ];

    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-orange-700">Program Les Privat Matematika</h1>
            </div>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Pilih program yang sesuai dengan kebutuhan belajar kamu. Semua disusun dengan metode interaktif dan menyenangkan agar mudah dipahami.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-400 bg-white p-6 transition-all"
                >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.desc}</p>
                <a
                    href="https://wa.me/6282236343404?text=Halo%20saya%20ingin%20info%20lebih%20lanjut%20tentang%20program%20les%20privat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-white bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-lg font-medium transition-all"
                >
                    Tanya Program →
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}