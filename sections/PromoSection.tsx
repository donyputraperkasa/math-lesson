// sections/PromoSection.tsx
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
        <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-10">Paket Les Privat 💡</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promos.map((promo, i) => (
                <div
                key={i}
                className="border border-gray-200 rounded-2xl shadow-sm hover:shadow-md p-6 flex flex-col justify-between"
                >
                <div>
                    <h3 className="text-xl font-semibold text-blue-600 mb-2">{promo.title}</h3>
                    <p className="text-gray-600 mb-4">{promo.desc}</p>
                </div>
                <div>
                    <p className="text-2xl font-bold text-blue-700 mb-4">{promo.price}</p>
                    <a
                    href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20daftar%20paket%20les%20privat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
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