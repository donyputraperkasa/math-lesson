import { notFound } from "next/navigation";

export default function TipDetailPage({
    params,
    }: {
    params: { slug: string };
    }) {
    const { slug } = params;

    // contoh data dummy dulu (nanti bisa dari tips.ts)
    const tips = [
        { slug: "belajar-pecahan", title: "Belajar Pecahan", content: "..." },
        { slug: "trik-persen", title: "Trik Soal Persen", content: "..." },
    ];

    const tip = tips.find((t) => t.slug === slug);
    if (!tip) return notFound();

    return (
        <section className="py-16 max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{tip.title}</h1>
        <p className="text-gray-700 leading-relaxed">{tip.content}</p>
        </section>
    );
}