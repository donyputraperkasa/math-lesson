import { GraduationCap, MapPin } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="py-20 bg-blue-50">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-semibold text-blue-700 mb-3">
                Mengapa Layanan Ini Hadir?
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-blue-800 font-medium mb-4">
                Tidak sedikit siswa yang merasa matematika sebagai beban,
                bukan karena kurang berusaha, tetapi karena belum menemukan cara belajar yang tepat.
                </p>

                {/* Elegant Divider */}
                <div className="flex items-center justify-center mb-8">
                <div className="h-px w-28 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                </div>

                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-4">
                Di tengah tuntutan akademik yang semakin tinggi, banyak siswa mengalami kesulitan memahami konsep dasar matematika.
                Saat belajar sendiri terasa tidak efektif dan kelas di sekolah bergerak terlalu cepat,
                rasa cemas dan kehilangan kepercayaan diri pun kerap muncul.
                </p>

                <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
                Layanan bimbingan belajar ini hadir sebagai pendamping belajar yang membantu siswa memahami matematika secara bertahap,
                terarah, dan sesuai dengan kebutuhan masing-masing. Dengan pendekekatan yang lebih personal dan komunikasi yang terbuka,
                proses belajar menjadi lebih manusiawi dan menyenangkan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-700 mb-2">Pendekatan Personal</h3>
                    <p className="text-sm text-gray-700">
                    Setiap siswa dipahami secara individu, dengan metode belajar yang disesuaikan
                    dengan kemampuan dan kecepatan masing-masing.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-700 mb-2">Pembelajaran Terarah</h3>
                    <p className="text-sm text-gray-700">
                    Materi disusun secara sistematis, dari konsep dasar hingga latihan soal,
                    sehingga siswa tidak merasa tertinggal.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                    <GraduationCap className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-blue-700 mb-2">Pengalaman Mengajar</h3>
                    <p className="text-sm text-gray-700">
                    Dengan pengalaman mengajar bertahun-tahun, fokus pembelajaran tidak hanya pada hasil,
                    tetapi pada pemahaman konsep yang kuat.
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
}