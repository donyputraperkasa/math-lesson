// sections/AboutSection.tsx
import React from "react";
import { UserRound, MapPin, BookOpen, TrendingUp, Briefcase } from "lucide-react";

export default function AboutSection() {
    return (
        <section className="py-16 bg-transparent backdrop-blur-[1px] relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 bg-white shadow-md rounded-lg p-8 text-gray-700">
                <div className="flex justify-center mb-6">
                    <img
                        src="/dony-1.png"
                        alt="Foto Dony Putra Perkasa"
                        className="w-36 h-36 rounded-full border-4 border-orange-500 object-cover shadow-md"
                    />
                </div>
                <h2 className="text-3xl font-bold text-orange-700 mb-6 text-center">Tentang Saya</h2>
                <ul className="space-y-4 max-w-xl mx-auto mb-6">
                    <li className="flex items-center space-x-3">
                        <UserRound className="w-6 h-6 text-orange-600" />
                        <span>Nama: dony putra perkasa</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-orange-600" />
                        <span>Tempat Tinggal: Kasihan, Bantul, Yogyakarta</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <BookOpen className="w-6 h-6 text-orange-600" />
                        <span>Pendidikan: matematika and software engineering</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-orange-600" />
                        <span>Minat: matematika, cryptocurrency, dan software engineering</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <Briefcase className="w-6 h-6 text-orange-600" />
                        <span>Profesi: Staf Pendidikaan dan Software Engineer</span>
                    </li>
                </ul>
                <p className="text-center max-w-3xl mx-auto text-lg">
                    Saya bersemangat dalam menyalurkan ilmu matematika saya, dan hal ini konsisten saya lakukan sejak 2015 ketika saya mengawali karir saya sebagai guru private door to door, dan sekarang ingin mencoba merambah kedalam private online yang ingin menjangkau tempat yang jauh, sesuai dengan pendidikan yang menjangkau dimanapun. Selain itu saya juga sebagai seorang junior software engineering yang sedang merintis keahlian saya.
                </p>
            </div>
        </section>
    );
}
