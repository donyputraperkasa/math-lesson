import { Percent } from "lucide-react";

export default function PromoSection() {
    const promos = [
        {
        title: "Paket 4x / Bulan",
        price: "Rp350.000",
        desc: "Cocok untuk pendalaman konsep dan latihan intensif setiap minggu.",
        },
        {
        title: "Paket 8x / Bulan",
        price: "Rp650.000",
        desc: "Belajar lebih rutin, hasil maksimal! Dapatkan materi tambahan & quiz.",
        },
        {
        title: "Paket Spesial 4x / Bulan 🎁",
        price: "Rp300.000",
        desc: "Promo terbatas! Untuk siswa baru selama bulan ini.",
        },
    ];

    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-10">
            <Percent className="w-8 h-8 text-orange-500" />
            <h2 className="text-3xl font-bold text-orange-700">Paket Les Privat</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
                <div
                key={i}
                className="border border-orange-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-400 bg-white p-6 flex flex-col justify-between transition-all duration-300"
                >
                <div>
                    <h3 className="text-xl font-semibold text-orange-600 mb-2">
                    {promo.title}
                    </h3>
                    <p className="text-gray-700 mb-4">{promo.desc}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-orange-700 mb-4">
                    {promo.price}
                    </p>
                    <a
                    href="https://wa.me/6282236343404?text=Halo%2C%20saya%20ingin%20daftar%20paket%20les%20privat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg font-medium transition"
                    >
                    Booking Sekarang
                    </a>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}