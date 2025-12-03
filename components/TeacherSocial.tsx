import { Instagram, Linkedin, Music2 } from "lucide-react";
import { Teacher } from "./Types";

export default function TeacherSocial({ teacher }: { teacher: Teacher }) {
    if (!teacher.social) return null;

    return (
        <div className="flex items-center justify-center gap-4 mt-2">
            {teacher.social.instagram && (
                <a
                    href={teacher.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-blue-50/60 backdrop-blur-lg shadow hover:scale-110 hover:ring-2 hover:ring-blue-300 transition-transform"
                >
                    <Instagram className="h-6 w-6" />
                </a>
            )}
            {teacher.social.tiktok && (
                <a
                    href={teacher.social.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-blue-50/60 backdrop-blur-lg shadow hover:scale-110 hover:ring-2 hover:ring-blue-300 transition-transform"
                >
                    <Music2 className="h-6 w-6" />
                </a>
            )}
            {teacher.social.linkedin && (
                <a
                    href={teacher.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-blue-50/60 backdrop-blur-lg shadow hover:scale-110 hover:ring-2 hover:ring-blue-300 transition-transform"
                >
                    <Linkedin className="h-6 w-6" />
                </a>
            )}
        </div>
    );
}