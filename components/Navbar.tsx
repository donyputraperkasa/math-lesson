"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Calculator } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: "Beranda", href: "/" },
        { name: "Program", href: "/program" },
        { name: "Tips", href: "/tips" },
        { name: "Review", href: "/review" },
        { name: "Tentang", href: "/about" },
        { name: "Kontak", href: "/contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-orange-200 shadow-sm">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-orange-700">
                    <Calculator className="w-6 h-6 text-orange-600" />
                    matematika dari nol<span className="text-orange-500">.</span>
                </Link>

                {/* Menu (Desktop) */}
                <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition-all px-3 py-1 rounded-md ${
                                    isActive
                                        ? "bg-orange-500 text-white font-semibold"
                                        : "hover:text-orange-600 hover:bg-orange-100"
                                }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}

                    <a
                        href="https://wa.me/6282236343404?text=Halo%20saya%20ingin%20booking%20les%20privat%20matematika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg shadow transition-all"
                    >
                        Booking
                    </a>
                </div>

                {/* Toggle (Mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-700 hover:text-orange-700 text-2xl"
                >
                    ☰
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-orange-200 py-3 px-6 flex flex-col space-y-3 text-gray-700">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`transition-colors px-3 py-1 rounded-md ${
                                    isActive
                                        ? "bg-orange-100 text-orange-700 font-semibold"
                                        : "hover:text-orange-600 hover:bg-orange-50"
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
                        className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-center mt-2 transition-all"
                    >
                        Booking via WhatsApp
                    </a>
                </div>
            )}
        </nav>
    );
}