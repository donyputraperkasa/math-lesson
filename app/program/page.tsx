import { BookOpen } from "lucide-react";

export default function ProgramPage() {
    const programs = [
        {
        title: "Les Privat",
        desc: "Solusi pembelajaran personal untuk siswa yang mengalami kesulitan memahami matematika dan membutuhkan pendampingan intensif secara one-on-one.",
        levels: ["SD", "SMP", "SMA/K"],
        },
        {
        title: "Les Reguler",
        desc: "Program belajar berkelompok untuk siswa yang merasa sulit belajar sendiri, dengan bimbingan terarah dan suasana kelas yang kondusif.",
        levels: ["SD", "SMP", "SMA/K"],
        },
    ];

    return (
        <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-700" />
            <h1 className="text-3xl font-bold text-blue-700">
                Program Pendampingan Belajar Matematika
            </h1>
            </div>

            <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Banyak siswa mengalami kesulitan memahami konsep matematika, terlebih saat harus belajar sendiri 
            tanpa arahan yang tepat. Kami hadir untuk membantu siswa belajar dengan metode yang lebih terstruktur,
            interaktif, dan mudah dipahami.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, i) => (
                <div
                key={i}
                className="border border-blue-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-400 bg-white p-6 transition-all"
                >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {program.title}
                </h3>
                <p className="text-gray-700 mb-4">{program.desc}</p>
                <ul className="text-gray-700">
                    {program.levels.map((level, j) => (
                    <li key={j} className="py-1">
                        • Jenjang {level}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}