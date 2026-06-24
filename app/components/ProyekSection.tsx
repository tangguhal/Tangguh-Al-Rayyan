"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

/* ─── Types ──────────────────────────────────────────────── */
interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  id: string;
  category: string;
  categoryKey: string;
  categoryColor: "teal" | "amber" | "slate" | "rose";
  status: string;
  title: string;
  subtitle: string;
  goal: string;
  metrics: ProjectMetric[];
  highlights: string[];
  tools: string[];
  hasPdf: boolean;
  pdfFile?: string;
  thumb: string | null;
  description: string;
}

/* ─── Project Data ───────────────────────────────────────── */
const projects: Project[] = [
  {
    id: "jakarta",
    category: "Data Analytics",
    categoryKey: "analytics",
    categoryColor: "teal",
    status: "Completed",
    title: "Analisis Penumpang Angkutan Umum Jakarta",
    subtitle: "Profil tren, pangsa pasar & kualitas data — 8 moda transportasi (Jan 2024–Apr 2026)",
    goal: "Membantu tim manajemen memahami tren permintaan angkutan umum, mengidentifikasi pergeseran modal ke transportasi berbasis rel, dan memitigasi risiko salah tafsir akibat perubahan kategorisasi data Mikrotrans sejak Januari 2026.",
    metrics: [
      { label: "Total Penumpang Jan–Apr 2026", value: "276,1 jt" },
      { label: "Pertumbuhan YoY", value: "+10,4%" },
      { label: "Pertumbuhan Tercepat", value: "LRT +23,1%" },
      { label: "Pangsa TJ+Mikrotrans & KRL", value: "92,9%" },
    ],
    highlights: [
      "Mengidentifikasi data quality issue: penurunan tajam TransJakarta 2026 adalah artefak kategorisasi, bukan penurunan ridership riil.",
      "Menemukan anomali operasional 16–17 Des 2024: KRL & KCI Bandara tercatat 0 penumpang pada hari kerja normal.",
      "Modal shift ke transportasi rel terkonfirmasi — LRT, MRT, KRL, dan KCI Bandara tumbuh dua digit.",
      "Profil komuter per hari menunjukkan pola berbeda: moda darat turun tajam di akhir pekan, kapal justru memuncak.",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "PowerPoint", "EDA", "Data Quality Analysis"],
    hasPdf: true,
    pdfFile: "/projects/Laporan_Analisis_Angkutan_Umum_Jakarta.pdf",
    thumb: null,
    description: "Profil tren, pangsa pasar, dan kualitas data lintas 8 moda transportasi periode Jan 2024–Apr 2026.",
  },
  {
    id: "maintenance",
    category: "Business Intelligence",
    categoryKey: "bi",
    categoryColor: "amber",
    status: "Completed",
    title: "Dashboard Maintenance Kendaraan & Mesin",
    subtitle: "Monitoring real-time status maintenance 89 unit kendaraan dan 13 mesin",
    goal: "Memberikan visibilitas real-time kepada tim operasional atas status maintenance seluruh armada kendaraan dan mesin, sehingga manajemen dapat mengidentifikasi backlog perbaikan dan memprioritaskan resource secara proaktif.",
    metrics: [
      { label: "Total Kendaraan", value: "89 Unit" },
      { label: "Total Mesin", value: "13 Unit" },
      { label: "Request Repair (MTD)", value: "74 Unit" },
      { label: "Ticket In Progress", value: "63 Ticket" },
    ],
    highlights: [
      "Dashboard menampilkan breakdown vehicle & machine status berdasarkan jenis kepemilikan (Company Own, Dry Hire, Operating Lease, dll).",
      "Analisis type equipment menunjukkan Excavator (25 unit) dan Dump Truck (20 unit) sebagai armada terbesar.",
      "Damage type analysis: 97,3% kerusakan berasal dari Wear & Tear, hanya 2,7% Human Error.",
      "Filter date interaktif memungkinkan manajemen memantau status maintenance per periode spesifik.",
    ],
    tools: ["Power BI", "DAX", "Data Modeling", "Operations Analytics"],
    hasPdf: false,
    thumb: "/projects/edit_1.jpg",
    description: "Monitoring real-time status maintenance 89 unit kendaraan dan 13 mesin, termasuk type equipment dan damage type analysis.",
  },
  {
    id: "plantation",
    category: "Business Intelligence",
    categoryKey: "bi",
    categoryColor: "amber",
    status: "Completed",
    title: "Dashboard Produksi & Stok CPO Perkebunan",
    subtitle: "Monitoring harian stok CPO, Kernel, Cangkang — 7 storage tank & target produksi",
    goal: "Menyediakan dashboard operasional harian bagi manajemen perkebunan untuk memantau stok komoditas (CPO, Kernel, Cangkang) secara real-time per storage tank, mengukur pencapaian target produksi, dan menganalisis trend sortasi TBS.",
    metrics: [
      { label: "Total Stok CPO", value: "883.339 kg" },
      { label: "Total Stok Kernel", value: "554.961 kg" },
      { label: "OER (Oil Extraction Rate)", value: "81%" },
      { label: "KER (Kernel Extraction Rate)", value: "51%" },
    ],
    highlights: [
      "Monitoring stok CPO dan Kernel per storage tank (ST1–ST7) dengan breakdown aktual vs kemarin.",
      "Visualisasi target produksi TBS dan CPO per bulan (Jan–Des) vs realisasi aktual.",
      "Analisis sortasi TBS harian untuk mengukur kualitas dan volume pengiriman buah segar.",
      "Harga TBS (Rp/kg) ditampilkan real-time sebagai referensi valuasi stok.",
    ],
    tools: ["Power BI", "DAX", "Agribusiness Analytics", "Data Modeling"],
    hasPdf: false,
    thumb: "/projects/Edit_2.jpg",
    description: "Monitoring harian stok CPO, Kernel, dan Cangkang across 7 storage tank, target produksi vs aktual, dan sortasi TBS.",
  },
  {
    id: "document",
    category: "Business Intelligence",
    categoryKey: "bi",
    categoryColor: "amber",
    status: "Completed",
    title: "Dashboard Penomoran Dokumen Korporasi",
    subtitle: "Monitoring 953 dokumen lintas 15+ business unit dalam satu grup korporasi",
    goal: "Membantu corporate secretary dan tim legal/compliance memantau volume, status, dan distribusi dokumen korporasi secara terpusat, sehingga manajemen dapat memastikan tidak ada dokumen penting yang terlambat diproses atau lolos dari radar.",
    metrics: [
      { label: "Total Dokumen (MTD)", value: "452" },
      { label: "All Total Dokumen", value: "953" },
      { label: "Dokumen On Progress", value: "94,25%" },
      { label: "Sistem vs Manual", value: "89,6% / 10,4%" },
    ],
    highlights: [
      "Breakdown distribusi dokumen per area (Jakarta HQ dominan dengan 436 dokumen MTD).",
      "Analisis document type menunjukkan Surat Internal (184) dan Memo Internal Group (124) sebagai tipe terbanyak.",
      "Document notification days memungkinkan tim memantau dokumen yang mendekati batas waktu (14, 21, 45 hari).",
      "Visualisasi business unit terbesar sebagai pengirim dokumen untuk perencanaan kapasitas tim legal.",
    ],
    tools: ["Power BI", "DAX", "Corporate Reporting", "Multi-Entity Data Modeling"],
    hasPdf: false,
    thumb: "/projects/edit_3.jpg",
    description: "Monitoring 953 dokumen korporasi lintas 15+ business unit, meliputi status, kategori, dan distribusi per area.",
  },
  {
    id: "cpo",
    category: "Business Intelligence",
    categoryKey: "bi",
    categoryColor: "amber",
    status: "Completed",
    title: "Dashboard Produksi TBS & Lahan CPO",
    subtitle: "Monitoring 16.170 hektar lahan, produksi TBS, dan curah hujan per wilayah",
    goal: "Memberikan gambaran komprehensif kepada manajemen perkebunan atas performa produksi TBS per wilayah dibandingkan target, sekaligus mengintegrasikan data curah hujan sebagai faktor kontekstual yang mempengaruhi output produksi.",
    metrics: [
      { label: "Total Lahan", value: "16.170 Ha" },
      { label: "Produksi TBS Internal", value: "28,96 jt kg" },
      { label: "Produksi TBS Eksternal", value: "14,36 jt kg" },
      { label: "Harga TBS", value: "Rp 2.533/kg" },
    ],
    highlights: [
      "Perbandingan produksi TBS Aktual vs Plan per bulan (Jan–Des) untuk evaluasi pencapaian target tahunan.",
      "Breakdown produksi per wilayah (LME, MME, PAM1, PAM2, ABU, LKIC) untuk identifikasi wilayah underperforming.",
      "Integrasi data curah hujan harian (Cerah/Hujan Ringan) per 4 zona sebagai konteks operasional.",
      "Pie chart persentase TBS Internal (73,3%) vs Eksternal (26,7%) untuk analisis ketergantungan supply.",
    ],
    tools: ["Power BI", "DAX", "Agribusiness Analytics", "Weather Data Integration"],
    hasPdf: false,
    thumb: "/projects/edit_4.jpg",
    description: "Monitoring 16.170 hektar lahan, produksi TBS aktual vs plan, curah hujan per wilayah, dan harga TBS harian.",
  },
  {
    id: "retail",
    category: "Machine Learning",
    categoryKey: "ml",
    categoryColor: "teal",
    status: "Completed",
    title: "Retail Sales Analytics & Forecasting",
    subtitle: "Pipeline end-to-end: EDA → segmentasi → forecasting → prediksi penjualan pada 120K transaksi",
    goal: "Membangun pipeline analitik dan machine learning end-to-end pada dataset transaksi ritel skala besar — mulai dari eksplorasi data, segmentasi pelanggan, hingga forecasting demand dan prediksi penjualan — dengan audit data leakage menyeluruh untuk memastikan validitas model sebelum hasil dilaporkan.",
    metrics: [
      { label: "Total Transaksi", value: "~120K" },
      { label: "Model Terbaik", value: "LightGBM" },
      { label: "Metode Segmentasi", value: "K-Means" },
      { label: "Forecasting Engine", value: "Prophet" },
    ],
    highlights: [
      "Melakukan audit data leakage secara eksplisit — model awal menunjukkan R²=1.0 yang teridentifikasi sebagai kebocoran fitur, lalu dibangun ulang dengan benar menggunakan Gradient Boosting.",
      "Segmentasi pelanggan dengan K-Means menghasilkan cluster yang dapat diinterpretasikan untuk strategi marketing berbasis perilaku pembelian.",
      "Forecasting demand menggunakan Prophet dengan dekomposisi tren, musiman, dan holiday effect untuk perencanaan stok.",
      "Model prediksi penjualan menggunakan XGBoost dan LightGBM dengan feature engineering berbasis time-series (lag features, rolling statistics).",
      "Seluruh pipeline dikemas dalam Jupyter Notebook yang reusable dan GitHub README untuk dokumentasi teknis.",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "LightGBM", "Prophet", "K-Means", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    hasPdf: true,
    pdfFile: "/projects/BOD_Retail_Sales_Prediction.pdf",
    thumb: null,
    description: "Pipeline end-to-end: EDA, segmentasi pelanggan K-Means, forecasting Prophet, dan prediksi penjualan XGBoost/LightGBM pada 120K transaksi ritel.",
  },
];

/* ─── Filter Categories ──────────────────────────────────── */
const filterCategories = [
  { key: "all", label: "Semua" },
  { key: "bi", label: "Business Intelligence" },
  { key: "analytics", label: "Data Analytics" },
  { key: "ml", label: "Machine Learning" },
];

/* ─── Color Mappings ─────────────────────────────────────── */
const categoryColorMap = {
  teal: {
    badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    statusBadge: "bg-teal-500/10 text-teal-400",
    label: "text-teal-400",
    goalBg: "bg-teal-500/10 border-teal-500/20",
    goalTitle: "text-teal-400",
    goalText: "text-teal-300/80",
  },
  amber: {
    badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    statusBadge: "bg-amber-500/10 text-amber-400",
    label: "text-amber-400",
    goalBg: "bg-amber-500/10 border-amber-500/20",
    goalTitle: "text-amber-400",
    goalText: "text-amber-300/80",
  },
  slate: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    statusBadge: "bg-blue-500/10 text-blue-400",
    label: "text-blue-400",
    goalBg: "bg-blue-500/10 border-blue-500/20",
    goalTitle: "text-blue-400",
    goalText: "text-blue-300/80",
  },
  rose: {
    badge: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    statusBadge: "bg-rose-500/10 text-rose-400",
    label: "text-rose-400",
    goalBg: "bg-rose-500/10 border-rose-500/20",
    goalTitle: "text-rose-400",
    goalText: "text-rose-300/80",
  },
};

/* ─── Project Card ───────────────────────────────────────── */
function ProjectCard({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  const colors = categoryColorMap[project.categoryColor];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      layout
      onClick={onClick}
      className="group relative bg-zinc-900/60 rounded-2xl border border-zinc-800/60 overflow-hidden
                 cursor-pointer transition-all duration-300
                 hover:border-zinc-700/80 hover:-translate-y-1
                 hover:shadow-[0_20px_50px_-16px_rgba(0,0,0,0.6)]"
    >
      {/* Thumbnail area */}
      <div className="relative h-52 overflow-hidden">
        {project.thumb ? (
          <Image
            src={project.thumb}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : project.id === "jakarta" ? (
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#1a2744] to-teal-900 p-6">
            <div className="text-white text-5xl font-extrabold opacity-20 mb-2">276 jt</div>
            <div className="font-mono text-xs text-teal-300 tracking-widest uppercase">Penumpang Jan–Apr 2026</div>
          </div>
        ) : (
          /* Retail ML placeholder */
          <div className="h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1e35] to-[#1a3a5c] gap-2 relative overflow-hidden">
            <div className="flex items-end gap-2 mb-1" aria-hidden="true">
              {[28, 44, 36, 56, 40, 52, 32].map((h, i) => (
                <div
                  key={i}
                  className="w-4 rounded-t"
                  style={{
                    height: `${h}px`,
                    background: i === 3 ? "#E8B84B" : `rgba(232,184,75,${0.5 + i * 0.05})`,
                  }}
                />
              ))}
            </div>
            <div className="font-mono text-[11px] text-[#E8B84B] tracking-widest uppercase font-medium">
              120K Transaksi
            </div>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        flex items-end p-4">
          <span className="text-white text-xs font-semibold font-mono flex items-center gap-1.5">
            Klik untuk lihat detail
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M7 7h10v10" />
            </svg>
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`font-mono text-[10px] tracking-widest uppercase font-semibold ${colors.label}`}>
            {project.category}
          </span>
          <span className={`font-mono text-[10px] px-2 py-1 rounded-full font-medium ${colors.statusBadge}`}>
            {project.status}
          </span>
        </div>
        <h3 className="font-bold text-[1.05rem] leading-snug mb-2 text-white">
          {project.title}
        </h3>
        <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-4">
          {project.tools.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] px-2 py-1 border border-zinc-700/60 rounded text-zinc-500"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Project Modal ──────────────────────────────────────── */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const colors = categoryColorMap[project.categoryColor];

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  /* Close on backdrop click */
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="bg-zinc-900 border border-zinc-800/80 rounded-2xl w-full max-w-[820px] max-h-[90vh] overflow-y-auto relative
                   shadow-2xl
                   [&::-webkit-scrollbar]:w-1.5
                   [&::-webkit-scrollbar-track]:bg-zinc-900
                   [&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700
                     flex items-center justify-center hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {/* Thumbnail */}
        {project.thumb && (
          <div className="relative w-full bg-zinc-950 rounded-t-2xl">
            <Image
              src={project.thumb}
              alt={project.title}
              width={1600}
              height={900}
              className="w-full h-auto object-contain rounded-t-2xl"
              sizes="820px"
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6 sm:p-7">
          {/* Category & Status badges */}
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`font-mono text-[10px] px-3 py-1 rounded-full font-semibold uppercase tracking-widest border ${colors.badge}`}>
              {project.category}
            </span>
            <span className={`font-mono text-[10px] px-3 py-1 rounded-full font-medium ${colors.statusBadge}`}>
              {project.status}
            </span>
          </div>

          <h2 className="font-extrabold text-2xl leading-tight mb-1 text-white">{project.title}</h2>
          <p className="text-zinc-400 text-sm mb-6">{project.subtitle}</p>

          {/* Goal */}
          <div className={`${colors.goalBg} border rounded-xl p-4 mb-6`}>
            <div className="flex items-center gap-2 mb-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={colors.goalTitle}>
                <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
              </svg>
              <span className={`font-bold text-sm ${colors.goalTitle}`}>Tujuan Proyek</span>
            </div>
            <p className={`text-sm leading-relaxed ${colors.goalText}`}>{project.goal}</p>
          </div>

          {/* Key Metrics */}
          <h3 className="font-bold text-sm mb-3 text-white">Key Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-zinc-800/60 border border-zinc-700/40 rounded-xl p-4 text-center">
                <div className="font-extrabold text-xl text-white leading-tight">{m.value}</div>
                <div className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mt-1 leading-tight">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Highlights */}
          <h3 className="font-bold text-sm mb-3 text-white">Yang Dikerjakan</h3>
          <ul className="space-y-2.5 mb-6">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                <span className="text-teal-400 mt-0.5 shrink-0">✓</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <h3 className="font-bold text-sm mb-3 text-white">Tools & Teknologi</h3>
          <div className="flex gap-2 flex-wrap">
            {project.tools.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-3 py-1.5 border border-zinc-700/60 rounded-lg text-zinc-400 bg-zinc-800/40"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* PDF Section */}
        {project.hasPdf && project.pdfFile && (
          <div className="px-6 sm:px-7 pb-7">
            <div className="flex items-center gap-2 mb-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-400">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              <span className="font-semibold text-sm text-white">Laporan Lengkap (PDF)</span>
            </div>
            {/* Tambahan parameter #toolbar=0 untuk menyembunyikan tombol download/print bawaan browser */}
            <iframe
              src={`${project.pdfFile}#toolbar=0&navpanes=0`}
              className="w-full h-[480px] border-none rounded-xl border border-zinc-700/40 select-none"
              title="Laporan PDF"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────── */
export default function ProyekSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (p) => activeFilter === "all" || p.categoryKey === activeFilter
  );

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <motion.section
      id="proyek"
      className="space-y-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs tracking-widest text-[#538A53] uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-3 text-white">
            Proyek & <span className="text-[#538A53]">Hasil Kerja</span>
          </h2>
          <p className="text-zinc-400 text-base max-w-xl leading-relaxed">
            Kumpulan proyek data analytics, business intelligence, dan machine learning
            yang pernah saya kerjakan — dari dashboard operasional hingga laporan analisis tingkat eksekutif.
          </p>
        </div>
      </div>

      {/* ── Filter ── */}
      <div className="flex gap-2 flex-wrap">
        {filterCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`font-mono text-xs px-4 py-2 rounded-full border font-medium transition-all duration-200
              ${
                activeFilter === cat.key
                  ? "bg-white text-zinc-900 border-white"
                  : "border-zinc-700/60 text-zinc-500 hover:text-white hover:border-zinc-600"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-zinc-500 text-sm">Tidak ada proyek di kategori ini.</p>
        </div>
      )}

      {/* ── Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
