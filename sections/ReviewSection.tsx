import React from "react";
import { Quote } from "lucide-react";
import reviews from "@/data/reviews";

export default function ReviewSection() {
    return (
        <section className="py-20 bg-transparent backdrop-blur-[1px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-600 mb-10 flex items-center justify-center gap-2">
            <Quote className="w-8 h-8 text-blue-600" />
            Apa Kata Siswa?
            </h2>
            <div className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide">
            {reviews.map((r, i) => (
                <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border-t-4 border-blue-400 hover:-translate-y-1 flex-shrink-0 snap-center w-80"
                >
                <Quote className="w-6 h-6 text-blue-600 mx-auto mb-3 opacity-80" />
                <p className="text-gray-700 italic mb-4">“{r.comment}”</p>
                <h4 className="font-semibold text-blue-600">{r.name}</h4>
                <span className="text-sm text-gray-500">{r.level}</span>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
