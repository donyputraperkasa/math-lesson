"use client";

import TeacherCard from "./TeacherCard";
import { useState } from "react";
import TeacherModal from "./TeacherModal";

export default function TeacherList() {
    const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
    const teachers = [
        {
        name: "Dony Putra Perkasa",
        university: "Universitas Sanata Dharma + REVOU",
        domicile: "Bantul",
        experience: "10 tahun mengajar matematika SD–SMA",
        description: "Mengajar dengan pendekatan logis dan menyenangkan agar siswa memahami konsep dengan baik.",
        image: "dony-1.png",
        bgColor: "#95e1ffff",
        role: "Owner",
        social: {
            instagram: "https://instagram.com/username",
            tiktok: "https://tiktok.com/@username",
            linkedin: "https://linkedin.com/in/username",
        },
        lastEducation: "Matematika + Software Engineering",
        certification: "Sertifikasi Guru Profesional",
        },
        {
        name: "Dhani Meilindra Suwarni",
        university: "Universitas Islam Negeri Sunan Kalijaga",
        domicile: "Bantul",
        experience: "7 tahun mengajar fisika dan matematika",
        description: "Mengajarkan konsep sains dengan logika dan contoh kehidupan nyata.",
        image: "dhani-1.png",
        bgColor: "#FF8C00",
        social: {
            instagram: "https://instagram.com/username",
            tiktok: "https://tiktok.com/@username",
            linkedin: "https://linkedin.com/in/username",
        },
        lastEducation: "Pendidikan Matematika",
        certification: "Sertifikasi Guru Profesional",
        },
        {
        name: "Aurelia Dina Pratiwi",
        university: "Universitas Sanata Dharma",
        domicile: "Yogyakarta",
        experience: "4 tahun mengajar Bahasa Inggris",
        description: "Membantu siswa menguasai grammar dan speaking dengan metode interaktif.",
        image: "dina-1.png",
        bgColor: "#ffff79ff",
        social: {
            instagram: "https://instagram.com/username",
            tiktok: "https://tiktok.com/@username",
            linkedin: "https://linkedin.com/in/username",
        },
        lastEducation: "Pendidikan Matematika",
        certification: "Sertifikasi Guru Profesional",
        },
    ];

    return (
        <section className="py-16 bg-white/80 min-h-screen">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl font-extrabold mb-4 text-blue-700">
                    Team Lecture
                </h1>
                <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
                    Siap membimbing belajarmu dengan metode yang menyenangkan dan efektif!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
                {teachers.map((teacher) => (
                    <TeacherCard
                        key={teacher.name}
                        {...teacher}
                        onClick={() => setSelectedTeacher(teacher)}
                    />
                ))}
                </div>
            </div>
            {selectedTeacher && (
                <TeacherModal
                    teacher={selectedTeacher}
                    onClose={() => setSelectedTeacher(null)}
                />
            )}
        </section>
    );
}