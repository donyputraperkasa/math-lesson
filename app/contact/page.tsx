import { MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <section className="py-20 bg-orange-50">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-orange-700 mb-4">Hubungi Saya</h1>
            <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
            Ingin tahu lebih lanjut tentang les privat matematika atau ingin langsung berdiskusi jadwal? 
            Silakan hubungi saya melalui formulir di bawah atau lewat WhatsApp.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {/* Form Kontak */}
            <form className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
                <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Nama</label>
                <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Email</label>
                <input
                    type="email"
                    placeholder="Masukkan alamat email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                </div>
                <div className="mb-4">
                <label className="block text-gray-800 font-medium mb-2">Pesan</label>
                <textarea
                    rows={4}
                    placeholder="Tulis pesan kamu di sini..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                ></textarea>
                </div>
                <button
                type="submit"
                className="bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-orange-700 transition"
                >
                Kirim Pesan
                </button>
            </form>

            {/* Info Kontak */}
            <div className="flex flex-col justify-center bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
                <h2 className="text-xl font-semibold text-orange-700 mb-4">Informasi Kontak</h2>
                <p className="text-gray-800 mb-2">
                <span className="font-semibold">Nama:</span> Dony Putra Perkasa
                </p>
                <p className="text-gray-800 mb-2">
                <span className="font-semibold">Lokasi:</span> Kasihan, Bantul, Yogyakarta
                </p>
                <p className="text-gray-800 mb-6">
                <span className="font-semibold">Email:</span>{" "}
                <a
                    href="mailto:donyputraperkasa@gmail.com"
                    className="text-orange-600 hover:underline"
                >
                    donyputraperkasa@gmail.com
                </a>
                </p>
                <a
                href="https://wa.me/6282236343404?text=Halo%20kak%2C%20saya%20ingin%20tanya%20tentang%20les%20privat%20matematika"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition text-center"
                >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
                </a>
            </div>
            </div>
        </div>
        </section>
    );
}