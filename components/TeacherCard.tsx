"use client";
import Image from "next/image";
import { GraduationCap } from "lucide-react";

interface TeacherCardProps {
    name: string;
    university: string;
    domicile: string;
    experience: string;
    description: string;
    image?: string;
    bgColor: string;
    role?: string;
    onClick?: () => void;
}

export default function TeacherCard({
    name,
    university,
    domicile,
    experience,
    description,
    image,
    bgColor,
    role,
    onClick,
    }: TeacherCardProps) {
    const imagePath = `/${image || "dony1.png"}`;

    return (
        <div
            onClick={onClick}
            className="cursor-pointer flex flex-col items-center bg-white/30 backdrop-blur-md border border-blue-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-blue-200/70 hover:shadow-xl"
        >
        <div className="w-full flex justify-center pt-6 rounded-t-2xl" style={{ backgroundColor: bgColor }}>
            <Image
            src={imagePath}
            alt={name || "Teacher photo"}
            width={200}
            height={200}
            className="object-cover mt-6"
            />
        </div>
        <div className="p-6 text-center space-y-2">
            <h2 className="text-2xl font-extrabold text-blue-900">{name}</h2>
            {role && (
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    👑 {role}
                </span>
            )}
            <div className="text-blue-700 font-semibold space-y-1">
                {university.split("+").map((item, index) => (
                    <p key={index} className="flex items-center justify-center gap-2">
                        <GraduationCap className="h-4 w-4 text-blue-600" />
                        {item.trim()}
                    </p>
                ))}
            </div>
            <p className="text-gray-600 mb-2">{domicile}</p>
            <p className="text-sm text-gray-600">{experience}</p>
            <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        </div>
    );
}