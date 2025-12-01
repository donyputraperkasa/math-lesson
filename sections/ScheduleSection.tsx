"use client";

import React from "react";
import { CalendarDays } from "lucide-react";

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
        Minggu: "booked",
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
        Senin: "booked",
        Selasa: "✅",
        Rabu: "✅",
        Kamis: "✅",
        Jumat: "✅",
        Sabtu: "✅",
        Minggu: "✅",
    },
    "19.00 - 20.30": {
        Senin: "booked",
        Selasa: "✅",
        Rabu: "✅",
        Kamis: "✅",
        Jumat: "✅",
        Sabtu: "✅",
        Minggu: "booked",
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
        <section className="py-16 bg-transparent backdrop-blur-[1px] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
                <CalendarDays className="w-8 h-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900 drop-shadow-sm">
                    Jadwal Les Privat Mingguan
                </h2>
            </div>
            <p className="text-gray-900 drop-shadow-sm mb-8">
            Jadwal disesuaikan dengan waktu luang pengajar.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm md:text-base">
                    <th className="py-4 px-6 text-left rounded-tl-2xl">Waktu</th>
                    {days.map((day) => (
                      <th key={day} className="py-4 px-6 font-semibold">
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {times.map((time, index) => (
                    <tr
                      key={time}
                      className={`transition duration-200 ${
                        index % 2 === 0 ? "bg-blue-50" : "bg-white"
                      } hover:bg-blue-100`}
                    >
                      <td className="py-3 px-4 font-semibold bg-blue-100 text-sm md:text-base text-blue-800">
                        {time}
                      </td>
                      {days.map((day) => {
                        const status = schedule[time][day];
                        let badgeStyle = "";
                        let badgeText = "";

                        if (status === "✅") {
                          badgeStyle = "bg-green-100 text-green-700 border-green-300";
                          badgeText = "Tersedia";
                        } else if (status === "kerja") {
                          badgeStyle = "bg-gray-200 text-gray-600 border-gray-300 italic";
                          badgeText = "Kerja";
                        } else if (status.trim() !== "") {
                          badgeStyle = "bg-blue-100 text-blue-700 border-blue-300 font-semibold";
                          badgeText = status;
                        } else {
                          badgeStyle = "bg-gray-100 text-gray-400 border-gray-200";
                          badgeText = "-";
                        }

                        return (
                          <td key={day} className="py-3 px-4 text-center text-sm md:text-base">
                            <span
                              className={`inline-block px-3 py-1 rounded-full border ${badgeStyle} shadow-sm transition-transform transform hover:scale-105`}
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

            <p className="text-gray-900 mt-6 text-sm md:text-base drop-shadow-sm">
            🧑‍💻 Jadwal pagi & siang di hari kerja tidak tersedia karena jam kerja.
            Jadwal fleksibel untuk sore dan akhir pekan ✨
            </p>
        </div>
        </section>
    );
}