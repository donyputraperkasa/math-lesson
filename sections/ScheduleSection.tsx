"use client";

import React from "react";

type Day =
    | "Senin"
    | "Selasa"
    | "Rabu"
    | "Kamis"
    | "Jumat"
    | "Sabtu"
    | "Minggu";

type TimeSlot =
    | "08.00 - 09.30"
    | "10.00 - 11.30"
    | "14.00 - 15.30"
    | "17.00 - 18.30"
    | "19.00 - 20.30";

type Schedule = Record<TimeSlot, Record<Day, string>>;

const schedule: Schedule = {
    "08.00 - 09.30": {
        Senin: "kerja",
        Selasa: "kerja",
        Rabu: "kerja",
        Kamis: "kerja",
        Jumat: "kerja",
        Sabtu: "✅",
        Minggu: "✅",
    },
    "10.00 - 11.30": {
        Senin: "kerja",
        Selasa: "kerja",
        Rabu: "kerja",
        Kamis: "kerja",
        Jumat: "kerja",
        Sabtu: "✅",
        Minggu: "✅",
    },
    "14.00 - 15.30": {
        Senin: "kerja",
        Selasa: "kerja",
        Rabu: "kerja",
        Kamis: "kerja",
        Jumat: "kerja",
        Sabtu: "✅",
        Minggu: "✅",
    },
    "17.00 - 18.30": {
        Senin: "✅",
        Selasa: "✅",
        Rabu: "✅",
        Kamis: "✅",
        Jumat: "✅",
        Sabtu: "✅",
        Minggu: "✅",
    },
    "19.00 - 20.30": {
        Senin: "✅",
        Selasa: "✅",
        Rabu: "✅",
        Kamis: "✅",
        Jumat: "✅",
        Sabtu: "✅",
        Minggu: "✅",
    },
};

export default function ScheduleSection() {
    const days: Day[] = [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
    ];
    const times: TimeSlot[] = Object.keys(schedule) as TimeSlot[];

    return (
        <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Jadwal Les Privat Mingguan 📅
            </h2>
            <p className="text-gray-600 mb-8">
            Jadwal disesuaikan dengan waktu luang pengajar. 
            </p>

            <div className="overflow-x-auto">
            <table className="w-full border-collapse shadow-md bg-white rounded-xl overflow-hidden">
                <thead>
                <tr className="bg-blue-600 text-white text-sm md:text-base">
                    <th className="py-3 px-4 text-left">Waktu</th>
                    {days.map((day) => (
                    <th key={day} className="py-3 px-4">
                        {day}
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {times.map((time) => (
                    <tr
                    key={time}
                    className="border-t hover:bg-blue-50 transition-colors duration-150"
                    >
                    <td className="py-3 px-4 font-medium bg-gray-100 text-sm md:text-base">
                        {time}
                    </td>
                    {days.map((day) => {
                        const status = schedule[time][day];

                        let badgeStyle = "";
                        let badgeText = "";

                        if (status === "✅") {
                        badgeStyle =
                            "bg-green-100 text-green-700 border-green-300";
                        badgeText = "Tersedia";
                        } else if (status === "kerja") {
                        badgeStyle =
                            "bg-gray-200 text-gray-600 border-gray-300 italic";
                        badgeText = "Kerja";
                        } else {
                        badgeStyle =
                            "bg-gray-100 text-gray-400 border-gray-200";
                        badgeText = "-";
                        }

                        return (
                        <td
                            key={day}
                            className="py-3 px-4 text-center text-sm md:text-base"
                        >
                            <span
                            className={`inline-block px-3 py-1 rounded-full border font-medium ${badgeStyle}`}
                            >
                            {badgeText}
                            </span>
                        </td>
                        );
                    })}
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            <p className="text-gray-600 mt-6 text-sm md:text-base">
            🧑‍💻 Jadwal pagi & siang di hari kerja tidak tersedia karena jam kerja.  
            Jadwal fleksibel untuk sore dan akhir pekan ✨
            </p>
        </div>
        </section>
    );
}