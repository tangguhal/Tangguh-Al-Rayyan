"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
const Lanyard = dynamic(() => import("../Lanyard"), { ssr: false, loading: () => null });

const tools = [
  { name: "React", icon: "⚛️", color: "text-cyan-400   border-cyan-400/30   bg-cyan-400/5" },
  { name: "Tailwind CSS", icon: "🌊", color: "text-teal-400   border-teal-400/30   bg-teal-400/5" },
  { name: "Firebase", icon: "🔥", color: "text-orange-400 border-orange-400/30 bg-orange-400/5" },
  { name: "Next.js", icon: "▲", color: "text-zinc-300   border-zinc-300/30   bg-zinc-300/5" },
  { name: "VS Code", icon: "💻", color: "text-blue-400   border-blue-400/30   bg-blue-400/5" },
  { name: "Git / GitHub", icon: "🐙", color: "text-red-400    border-red-400/30    bg-red-400/5" },
  { name: "Python", icon: "🐍", color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  { name: "Tableau", icon: "📊", color: "text-blue-500   border-blue-500/30   bg-blue-500/5" },
  { name: "Power BI", icon: "📈", color: "text-amber-400  border-amber-400/30  bg-amber-400/5" },
  { name: "Looker", icon: "🔍", color: "text-indigo-400 border-indigo-400/30 bg-indigo-400/5" },
  { name: "Excel", icon: "📗", color: "text-emerald-500 border-emerald-500/30 bg-emerald-500/5" },
  { name: "Classification", icon: "🏷️", color: "text-purple-400 border-purple-400/30 bg-purple-400/5" },
  { name: "Regressor", icon: "📉", color: "text-rose-400   border-rose-400/30   bg-rose-400/5" },
  { name: "Object Detection", icon: "👁️", color: "text-sky-400    border-sky-400/30    bg-sky-400/5" },
  { name: "Forecasting", icon: "🔮", color: "text-violet-400 border-violet-400/30 bg-violet-400/5" },
  { name: "Hyperparameter Tuning", icon: "⚙️", color: "text-zinc-400   border-zinc-400/30   bg-zinc-400/5" },
];

export default function TentangSection() {
  return (
    <motion.section
      id="tentang"
      className="space-y-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="bg-[#11111C] border border-[#43b331] rounded-3xl overflow-hidden flex flex-col md:flex-row">

        {/* Left Column - Lanyard */}
        <div className="relative w-full max-w-[300px] mx-auto md:w-1/3 aspect-[9/16] bg-transparent flex justify-center overflow-visible">
          <div className="absolute inset-0 z-20 pointer-events-auto">
            <Lanyard
              position={[0, 0, 14]}
              gravity={[0, -40, 0]}
              frontImage="/avatar.jpg"
              imageFit="cover"
              lanyardWidth={1}
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 p-6 sm:p-8 space-y-6">
          {/* Heading */}
          <div className="text-left space-y-2 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Tentang <span className="text-[#43b331]">Saya</span>
            </h2>
            <p className="text-zinc-400 text-lg italic">| Mengungkap data menjadi strategi yang luar biasa. |</p>
          </div>

          {/* Bio */}
          <div className="relative z-10 space-y-4">
            <p className="text-zinc-300 leading-relaxed">
              Saya adalah seorang data analyst dan data scientist dengan latar belakang yang mencakup
              industri pertambangan batu bara, agribisnis, dan grup korporasi multi-entitas di Indonesia.
              Di awal karier, fokus saya adalah mengubah data operasional yang kompleks — angka produksi,
              pemakaian alat berat, hingga konsolidasi laporan keuangan — menjadi dashboard yang bisa
              dibaca dengan cepat oleh jajaran BOD (Board of Directors).
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Beberapa tahun terakhir, saya memperluas keahlian ke arah data science dan machine learning:
              melakukan forecasting permintaan, segmentasi pelanggan, serta audit kebocoran data (data leakage)
              secara menyeluruh sebelum hasil model dilaporkan. Saat ini saya juga sedang mengembangkan proyek
              computer vision, termasuk sistem klasifikasi buah berbasis YOLOv11, sebagai langkah menuju peran
              AI engineering yang lebih luas.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              Baik deliverable-nya berupa dashboard Power BI, workbook costing, maupun model yang sudah dilatih,
              tujuannya tetap sama: memastikan data cukup bisa dipercaya sehingga seseorang dapat langsung
              mengambil keputusan tanpa perlu mengecek ulang pekerjaan saya.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            {[
              { val: "4+", label: "Tahun Pengalaman" },
              { val: "20+", label: "Proyek Selesai" },
              { val: "10+", label: "Klien Puas" },
            ].map((s) => (
              <div key={s.label} className="bg-zinc-900/40 border border-[#43b331]/30 rounded-2xl p-5 text-center backdrop-blur-sm">
                <div className="text-3xl font-extrabold text-white">{s.val}</div>
                <div className="text-xs text-zinc-400 mt-1 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* Tech Stack Grid - Persegi & Ikon */}
      <div className="pt-10 space-y-6">
        <h3 className="text-3xl sm:text-4xl font-bold text-white text-center">
          Skill <span className="text-[#3daf2b]">&amp;</span> Tools
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {tools.map((t) => (
            <div
              key={t.name}
              className={`flex flex-col items-center justify-center gap-3 aspect-square rounded-2xl border 
                          transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${t.color}`}
            >
              <div className="text-3xl sm:text-4xl filter drop-shadow-md">{t.icon}</div>
              <span className="text-[11px] sm:text-xs font-bold text-center leading-tight px-1 tracking-wide">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
