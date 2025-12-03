export default function PromoModal({ selectedPromo, onClose }: any) {
    if (!selectedPromo) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
            {selectedPromo.title}
            </h2>

            <p className="text-gray-600 mb-4">{selectedPromo.desc}</p>

            <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mb-4">
            {selectedPromo.price}
            </p>

            <button
            onClick={onClose}
            className="w-full px-5 py-3 rounded-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-all"
            >
            Tutup
            </button>
        </div>
        </div>
    );
}
