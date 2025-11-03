import { Lightbulb } from "lucide-react";

export default function TipsPage() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            <h1 className="text-3xl font-bold text-orange-700">Semua Tips Belajar Matematika</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                {
                slug: "belajar-pecahan",
                title: "Cara Cepat Pahami Pecahan",
                excerpt: "Trik mudah memahami operasi pecahan tanpa harus bingung dengan penyebut...",
                },
                {
                slug: "trik-persen",
                title: "Trik Soal Persen",
                excerpt: "Cara cepat mengerjakan soal persen tanpa kalkulator dengan logika sederhana...",
                },
                {
                slug: "aritmatika-sosial",
                title: "Tips Aritmatika Sosial",
                excerpt: "Memahami konsep untung, rugi, dan diskon dengan contoh kehidupan sehari-hari...",
                },
            ].map((tip, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md hover:border-orange-400 transition-all bg-white"
                >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">{tip.title}</h3>
                <p className="text-gray-700 mb-4">{tip.excerpt}</p>
                <a
                    href={`/tips/${tip.slug}`}
                    className="text-orange-600 font-medium hover:underline"
                >
                    Baca Selengkapnya →
                </a>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}