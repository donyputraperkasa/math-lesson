import React from "react";
import { Quote } from "lucide-react";
import reviews from "@/data/reviews";

export default function ReviewSection() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-orange-700 mb-10 flex items-center justify-center gap-2">
            <Quote className="w-8 h-8 text-orange-500" />
            Apa Kata Siswa?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
                <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-orange-400 hover:-translate-y-1"
                >
                <Quote className="w-6 h-6 text-orange-500 mx-auto mb-3 opacity-80" />
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
