"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function KontakSection() {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", msg: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <motion.section
      id="kontak"
      className="space-y-14"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Mari <span className="text-[#538A53]">Terhubung</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Saya selalu terbuka untuk proyek baru, kolaborasi, atau sekadar obrolan hangat.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

        {/* Contact cards */}
        <div className="lg:col-span-5 space-y-4">
          <a
            href="mailto:tangguhal@gmail.com"
            className="flex items-center gap-4 bg-zinc-950/50 border border-zinc-800/60 rounded-2xl p-5
                       hover:border-teal-500/30 transition-all hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Email</p>
              <p className="text-sm font-semibold text-white mt-0.5">tangguhal@gmail.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/6281213066891?text=Halo%20Rayyan%2C%20saya%20tertarik%20bekerja%20sama."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-zinc-950/50 border border-zinc-800/60 rounded-2xl p-5
                       hover:border-emerald-500/30 transition-all hover:scale-[1.02]"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12.004 2c-5.51 0-9.99 4.48-9.99 9.99 0 2.05.622 4.02 1.799 5.69L2.1 22.09l4.568-1.201a9.92 9.92 0 005.332 1.54h.004c5.51 0 9.99-4.48 9.99-9.99C22 6.48 17.51 2 12.004 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">WhatsApp</p>
              <p className="text-sm font-semibold text-white mt-0.5">+62 812-1306-6891</p>
            </div>
          </a>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="bg-zinc-950/50 border border-zinc-800/60 rounded-3xl p-6 sm:p-8 space-y-5">

            {sent && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Pesan Anda telah berhasil terkirim!
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Nama Lengkap</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-teal-500/60
                             rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Alamat Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-zinc-900 border border-zinc-800 focus:border-teal-500/60
                             rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Pesan</label>
              <textarea
                id="contact-message"
                rows={5}
                required
                value={form.msg}
                onChange={(e) => setForm((f) => ({ ...f, msg: e.target.value }))}
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-teal-500/60
                           rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              id="contact-submit"
              className="inline-flex items-center gap-2 bg-[#538A53]
                         hover:opacity-90 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg
                         transition-all hover:-translate-y-0.5"
            >
              Kirim Pesan
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
