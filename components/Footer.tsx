// components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
            <p className="font-semibold">© {new Date().getFullYear()} dony putra perkasa</p>
            <p>Kasihan Bantul Yogyakarta | Berpengalaman menjadi guru private sejak 2015</p>
        </div>
        </footer>
    );
}