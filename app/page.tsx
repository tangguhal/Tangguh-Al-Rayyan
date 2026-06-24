"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TentangSection from "./components/TentangSection";
import ProyekSection from "./components/ProyekSection";
import KontakSection from "./components/KontakSection";
import FooterSection from "./components/FooterSection";

const Aurora = dynamic(() => import("./Aurora"), { ssr: false, loading: () => null });

/* ─── Page ─────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#070708] text-slate-100 relative overflow-x-hidden">

      {/* ── Aurora WebGL background ── */}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-screen z-0 overflow-hidden" aria-hidden="true">
        <Aurora
          colorStops={["#7cff67", "#B497CF", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* ═══ NAVBAR ═══ */}
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />

      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 relative z-10 space-y-32">
        {/* ═══ HERO ═══ */}
        <HeroSection />

        {/* ═══ TENTANG ═══ */}
        <TentangSection />

        {/* ═══ PROYEK ═══ */}
        <ProyekSection />

        {/* ═══ KONTAK ═══ */}
        <KontakSection />
      </main>

      {/* ═══ FOOTER ═══ */}
      <FooterSection />

    </div>
  );
}