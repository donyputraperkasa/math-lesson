// app/tips/[slug]/page.tsx
import { notFound } from "next/navigation";
import React from "react";
import tipsData from "@/data/tips";

type Props = {
    params: { slug: string };
};

export default function TipDetailPage({ params }: Props) {
    const { slug } = params;
    // tipsData should be an array of { slug, title, content }
    const tip = (tipsData as any[]).find((t) => t.slug === slug);

    if (!tip) {
        // if not found, show 404 page
        notFound();
    }

    return (
        <section className="py-12 max-w-3xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">{tip.title}</h1>
        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: tip.content }} />
        </section>
    );
}