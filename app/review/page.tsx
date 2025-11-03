import { Quote } from "lucide-react";

export default function ReviewPage() {
    const reviews = [
        {
        name: "Ayu",
        level: "SMA Kelas 12",
        comment: "Belajar bareng Kak Dony enak banget, penjelasannya jelas dan sabar banget.",
        },
        {
        name: "Rafi",
        level: "SMP Kelas 9",
        comment: "Awalnya gak suka matematika, tapi sekarang malah jadi semangat belajar!",
        },
        {
        name: "Nanda",
        level: "SMA Kelas 11",
        comment: "Kak Dony bikin konsep rumit jadi gampang banget dipahami.",
        },
    ];

    return (
        <section className="py-20 bg-orange-50">
            <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-10">Testimoni Siswa</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((r, i) => (
                <div
                    key={i}
                    className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all border-t-4 border-orange-400"
                >
                    <Quote className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                    <p className="text-gray-700 italic mb-4">“{r.comment}”</p>
                    <h4 className="font-semibold text-orange-700">{r.name}</h4>
                    <span className="text-sm text-gray-500">{r.level}</span>
                </div>
                ))}
            </div>
            </div>
        </section>
    );
}