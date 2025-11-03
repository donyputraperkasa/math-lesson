// app/tips/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import tipsData from "@/data/tips";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function TipDetailPage({ params }: Props) {
    const { slug } = await params;

    const tips = (tipsData as any[]) || [];
    const tip = tips.find((t) => t.slug === slug);

    if (!tip) {
        notFound();
    }

    return (
        <section className="py-16 max-w-3xl mx-auto px-4">
            <nav className="mb-6 text-sm">
                <Link href="/tips" className="text-blue-600 hover:underline">
                ← Kembali ke Semua Tips
                </Link>
            </nav>
            <h1 className="text-3xl font-bold text-blue-700 mb-4">{tip.title}</h1>
            <div
                className="prose max-w-none text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: tip.content || "<p>Konten belum tersedia.</p>" }}
            />
        </section>
    );
}