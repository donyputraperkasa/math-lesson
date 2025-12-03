

import Image from "next/image";
import { Teacher } from "./Types";

export default function TeacherHeader({ teacher }: { teacher: Teacher }) {
    if (!teacher.image) return null;

    return (
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
    );
}