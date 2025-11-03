import React from "react";
import { BookOpen } from "lucide-react";

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

export default function ProgramSection() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-orange-700">Program Les</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((program, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-400 bg-white p-6 transition-all duration-300 transform hover:-translate-y-1"
                >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {program.title}
                </h3>
                <p className="text-gray-700">{program.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
