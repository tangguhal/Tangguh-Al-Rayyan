"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <nav className={`max-w-7xl mx-auto px-6 py-3 transition-all duration-500 ${isScrolled ? "bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl" : ""}`}>

        {/* Row: brand (kiri) + links (kanan) */}
        <ul className="flex items-center justify-between list-none m-0 p-0">

          {/* Brand / Logo */}
          <li>
            <a
              href="#beranda"
              className={`text-2xl font-extrabold tracking-widest select-none transition-colors duration-300 ${isScrolled ? "text-[#538A53]" : "text-white"}`}
            >
              Rayyan
            </a>
          </li>

          {/* Desktop nav — kanan (justify-content-end equivalent) */}
          <li className="hidden md:block">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="relative px-4 py-2 text-sm font-medium text-zinc-400
                               hover:text-teal-400 transition-colors duration-200
                               rounded-xl hover:bg-zinc-900 group block"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2
                                     w-0 h-0.5 bg-teal-400 rounded-full
                                     transition-all duration-300 group-hover:w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </li>

          {/* Mobile hamburger */}
          <li className="md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 text-zinc-400 hover:text-white rounded-xl hover:bg-zinc-900 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="md:hidden mt-3 pt-3 border-t border-zinc-800/60 flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-zinc-400
                             hover:text-teal-400 hover:bg-zinc-900 rounded-xl transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
