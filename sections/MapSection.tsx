export default function MapSection() {
    return (
        <section className="py-16 bg-white/30 text-center relative overflow-hidden">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Area Layanan Les Privat</h2>
        <p className="text-gray-700 mb-6">
            Saya melayani les privat di area <strong>Kasihan, Bantul, dan sekitar Yogyakarta</strong>.
        </p>

        <div className="flex justify-center">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.365340343693!2d110.3695!3d-7.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a579ddbc59f5b%3A0x2b62b8c6c3a3e2b4!2sYogyakarta!5e0!3m2!1sid!2sid!4v1700000000000"
            width="600"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow-md w-full max-w-2xl"
            />
        </div>
        </section>
    );
}