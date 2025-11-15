"use client";

import { Teacher } from "./Types";
import { X, Instagram, Linkedin, Music2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface TeacherModalProps {
    teacher: Teacher;
    onClose: () => void;
}

export default function TeacherModal({ teacher, onClose }: TeacherModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto p-4"
            onClick={onClose}
        >
        <div
            className="bg-white w-full max-w-lg rounded-2xl overflow-hidden shadow-xl animate-[fadeIn_0.3s_ease] mb-10 relative"
            onClick={(e) => e.stopPropagation()}
        >

            {/* Header Image */}
            {teacher.image && (
            <div
                className="h-70 relative flex justify-center bg-white"
                style={{ backgroundColor: teacher.bgColor }}
            >
                <Image
                src={`/${teacher.image}`}
                alt={teacher.name}
                width={600}
                height={600}
                style={{ objectFit: "contain" }}
                />
            </div>
            )}

            {/* Content */}
            <div className="p-6 pt-8">
            <h2 className="text-2xl font-bold mb-2 text-center">
                {teacher.name}
            </h2>

            {teacher.role && (
                <div className="flex justify-center mb-3">
                    <span className="inline-flex items-center gap-1 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                        👑 {teacher.role}
                    </span>
                </div>
            )}

            <p className="text-[#8B0000] font-semibold text-center mb-1">
                {teacher.university}
            </p>

            <p className="text-gray-600 text-center mb-3">
                {teacher.domicile}
            </p>

            <p className="text-sm text-gray-500 text-center mb-4">
                {teacher.experience}
            </p>

            <p className="text-gray-700 leading-relaxed text-center mb-4">
                {teacher.description}
            </p>

            {/* Additional Info Section */}
            <div className="mt-6 space-y-3 text-center">

                {/* Social Media Icons */}
                {teacher.social && (
                <div className="flex items-center justify-center gap-4">
                    
                    {/* Instagram */}
                    {teacher.social.instagram && (
                    <a
                        href={teacher.social.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="text-pink-600 hover:text-pink-700"
                    >
                        <Instagram className="h-6 w-6" />
                    </a>
                    )}

                    {/* TikTok */}
                    {teacher.social.tiktok && (
                    <a
                        href={teacher.social.tiktok}
                        target="_blank"
                        rel="noreferrer"
                        className="text-black hover:text-gray-800"
                    >
                        <Music2 className="h-6 w-6" />
                    </a>
                    )}

                    {/* LinkedIn */}
                    {teacher.social.linkedin && (
                    <a
                        href={teacher.social.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                    >
                        <Linkedin className="h-6 w-6" />
                    </a>
                    )}
                </div>
                )}

                {/* Last Education */}
                {teacher.lastEducation && (
                <p className="text-gray-700">
                    <span className="font-semibold">Pendidikan Terakhir: </span>
                    {teacher.lastEducation}
                </p>
                )}

                {/* Certification */}
                {teacher.certification && (
                <p className="text-gray-700">
                    <span className="font-semibold">Sertifikasi: </span>
                    {teacher.certification}
                </p>
                )}
            </div>

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                <X className="h-6 w-6" />
            </button>

            </div>
        </div>
        </div>
    );
}