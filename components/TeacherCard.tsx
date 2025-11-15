"use client";
import Image from "next/image";

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
            className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl hover:rotate-1"
        >
        <div className="w-full flex justify-center" style={{ backgroundColor: bgColor }}>
            <Image
            src={imagePath}
            alt={name || "Teacher photo"}
            width={200}
            height={200}
            className="object-cover mt-6"
            />
        </div>
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-1">{name}</h2>
            {role && (
                <span className="inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow">
                    👑 {role}
                </span>
            )}
            <p className="text-[#8B0000] font-medium mb-1">{university}</p>
            <p className="text-gray-600 mb-2">{domicile}</p>
            <p className="text-sm text-gray-500 mb-3">{experience}</p>
            <p className="text-gray-400">{description}</p>
        </div>
        </div>
    );
}