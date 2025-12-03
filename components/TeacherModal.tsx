"use client";

import { Teacher } from "./Types";
import { X, Instagram, Linkedin, Music2, GraduationCap } from "lucide-react";
import TeacherHeader from "./TeacherHeader";
import TeacherInfo from "./TeacherInfo";

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

            <TeacherHeader teacher={teacher} />
            <TeacherInfo teacher={teacher} />

            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
                <X className="h-6 w-6" />
            </button>

        </div>
        </div>
    );
}