import React from "react";
import { MessageCircle } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none" />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h2 className="text-3xl font-bold mb-4 drop-shadow-md animate-fade-in">
                    Siap Belajar Bersama?
                </h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto animate-fade-in delay-100">
                    Jadikan belajar matematika lebih mudah dan menyenangkan bersama{" "}
                    <span className="font-semibold">guru privat berpengalaman</span>.
                </p>
                <a
                    href="https://wa.me/6282236343404?text=Halo%20kak%2C%20saya%20ingin%20booking%20les%20privat%20matematika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-orange-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-orange-100 transition-transform transform hover:scale-105 animate-bounce-slow"
                >
                    <MessageCircle className="w-5 h-5" />
                    Booking via WhatsApp
                </a>
            </div>
        </section>
    );
}
