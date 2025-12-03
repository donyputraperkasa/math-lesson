import { Teacher } from "./Types";
import TeacherSocial from "./TeacherSocial";
import { GraduationCap, BookOpen } from "lucide-react";

export default function TeacherInfo({ teacher }: { teacher: Teacher }) {
    return (
        <div className="p-8 text-center space-y-4 rounded-2xl backdrop-blur-xl bg-white/60 border border-white/40 shadow-lg shadow-blue-100/50">
            <h2 className="text-3xl font-extrabold text-blue-900 tracking-tight">
                {teacher.name}
            </h2>

            {teacher.role && (
                <div className="flex justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white 
                        bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md">
                        👑 {teacher.role}
                    </span>
                </div>
            )}

            <div className="text-lg font-serif italic text-blue-700 space-y-1">
                {teacher.university.split("+").map((item, index) => (
                    <p key={index} className="flex items-center justify-center gap-2">
                        <GraduationCap className="h-5 w-5 text-blue-600" />
                        {item.trim()}
                    </p>
                ))}
            </div>

            <p className="text-gray-600">{teacher.domicile}</p>

            <p className="text-sm text-gray-500">{teacher.experience}</p>

            <p className="text-gray-700 leading-relaxed max-w-md mx-auto">
                {teacher.description}
            </p>

            <div className="mt-6 space-y-4">
                <TeacherSocial teacher={teacher} />

                <div className="relative pt-6 space-y-4">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-10 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                    {teacher.lastEducation && (
                        <div className="text-gray-800 space-y-1 py-3 px-4 rounded-xl bg-blue-50/40 backdrop-blur-sm border border-blue-100">
                            <div className="flex items-center gap-2 text-blue-800 justify-start">
                                <BookOpen className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold">Pendidikan Terakhir:</span>
                            </div>

                            {teacher.lastEducation.split("+").map((item, index) => (
                                <p key={index} className="text-blue-900 font-medium text-left pl-6">
                                    {item.trim()}
                                </p>
                            ))}
                        </div>
                    )}

                    {teacher.certification && (
                        <div className="text-blue-900 bg-blue-50/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-100">
                            <div className="flex items-center gap-2 mb-1">
                                <GraduationCap className="h-4 w-4 text-blue-600" />
                                <span className="font-semibold">Sertifikasi:</span>
                            </div>
                            <p className="text-blue-900 font-medium text-left pl-6">{teacher.certification}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
