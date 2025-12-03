import React from "react";

export default function PromoCard({ promo, onSelect }: any) {
  const Icon = promo.icon;

  return (
    <div
      className="group w-full rounded-3xl p-6 flex flex-col justify-between backdrop-blur-2xl bg-white/80 border border-white/40 shadow-xl shadow-black/30 transition-all duration-500 opacity-100 translate-y-0 hover:-translate-y-2 hover:shadow-black/40 hover:bg-white/60"
    >
      <div>
        <Icon
          className="w-10 h-10 text-blue-600 mx-auto mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.9)] transition-all duration-300"
        />
        <h3 className="text-xl font-semibold text-blue-700 mb-1">
          {promo.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          {promo.level} • {promo.duration}
        </p>
        <p className="text-gray-700 mb-4">{promo.desc}</p>
      </div>

      <div>
        <p className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text drop-shadow-md">
          {promo.price}
        </p>

        <button
          onClick={() => onSelect(promo)}
          className="w-full px-5 py-3 rounded-xl font-semibold bg-blue-600/90 hover:bg-blue-700 text-white shadow-lg shadow-blue-400/30 hover:shadow-blue-500/40 ransition-all duration-300 hover:scale-105"
        >
          Booking Sekarang
        </button>
      </div>
    </div>
  );
}
