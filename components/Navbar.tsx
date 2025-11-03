"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // ✅ tambahkan ini

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname(); // ✅ dapatkan path aktif (misal: "/about")

    const menuItems = [
        { name: "Beranda", href: "/" },
        { name: "Program", href: "/program" },
        { name: "Tips", href: "/tips" },
        { name: "Review", href: "/review" },
        { name: "Tentang", href: "/about" },
        { name: "Kontak", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
            {/* Brand */}
            <Link href="/" className="text-2xl font-bold text-blue-700">
            matematika dari nol<span className="text-blue-500">.</span>
            </Link>

            {/* Menu (Desktop) */}
            <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            {menuItems.map((item) => {
                const isActive = pathname === item.href; // ✅ cek apakah menu ini aktif
                return (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors px-3 py-1 rounded-md ${
                    isActive
                        ? "bg-blue-500 text-white font-semibold" // aktif dengan blok warna
                        : "hover:text-blue-600 hover:bg-blue-50" // normal dengan hover halus
                    }`}
                >
                    {item.name}
                </Link>
                );
            })}

            <a
                href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20booking%20les%20privat%20matematika"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition"
            >
                Booking
            </a>
            </div>

            {/* Toggle (Mobile) */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-700 text-2xl"
            >
            ☰
            </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-3 px-6 flex flex-col space-y-3 text-gray-700">
            {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                <Link
                    key={item.name}
                    href={item.href}
                    className={`transition-colors px-3 py-1 rounded-md ${
                    isActive
                        ? "bg-blue-100 text-blue-700 font-semibold"
                        : "hover:text-blue-600 hover:bg-blue-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                >
                    {item.name}
                </Link>
                );
            })}

            <a
                href="https://wa.me/6282236343404?text=Halo%20saya%20ingin%20booking%20les%20privat%20matematika"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center mt-2"
            >
                Booking via WhatsApp
            </a>
            </div>
        )}
        </nav>
    );
}