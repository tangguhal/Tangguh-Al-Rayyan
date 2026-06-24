"use client";

export default function FooterSection() {
  return (
    <footer className="mt-32 border-t border-zinc-800/60 bg-zinc-950/40 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Rayyan. All rights reserved.</p>
        <span className="text-xl font-extrabold tracking-widest text-[#538A53]">Rayyan</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl
                     text-zinc-400 hover:text-white transition-all hover:scale-105"
          aria-label="Kembali ke atas"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}
