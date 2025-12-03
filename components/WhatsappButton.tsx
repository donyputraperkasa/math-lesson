import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsappButton({ className = "" }: { className?: string }) {
    return (
        <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl 
        backdrop-blur-xl bg-green-600 border border-white/30 
        text-white font-semibold shadow-xl shadow-black/20 
        transition-all duration-300 hover:scale-105 hover:bg-green-700 ${className}`}
        >
            <MessageCircle className="w-6 h-6 text-white" />
            Chat via WhatsApp
        </a>
    );
}