import React from "react";
import Link from "next/link";
import { Lightbulb } from "lucide-react";

const tips = [
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
];

export default function TipsSection() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
            <Lightbulb className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-orange-700">Tips Belajar Matematika</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl p-6 text-left bg-white shadow-sm hover:shadow-lg hover:border-orange-400 transform hover:-translate-y-1 transition-all duration-300"
                >
                <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {tip.title}
                </h3>
                <p className="text-gray-700 mb-4">{tip.excerpt}</p>
                <Link
                    href={`/tips/${tip.slug}`}
                    className="text-orange-600 font-medium hover:underline"
                >
                    Baca Selengkapnya →
                </Link>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
