"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, ChevronRight, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const searchableContents = [
  {
    id: "profil",
    title: "Profil & Sejarah Pesantren Hidayatullah Buru",
    category: "Profil",
    href: "#profil",
    keywords: ["profil", "sejarah", "pondok", "pesantren", "hidayatullah", "buru", "savanajaya", "waeapo", "maluku"],
    snippet: "Pondok Pesantren Hidayatullah Kabupaten Buru berlokasi di Desa Savanajaya, Kecamatan Waeapo, Buru - Maluku.",
  },
  {
    id: "visi",
    title: "Visi: Kampus Miniatur Peradaban Islam",
    category: "Visi & Misi",
    href: "#visi-misi",
    keywords: ["visi", "peradaban", "islam", "miniatur", "pendidikan", "integral", "tauhid"],
    snippet: "Menjadi Kampus Miniatur Peradaban Islam melalui Pendidikan Integral Berbasis Tauhid.",
  },
  {
    id: "misi",
    title: "Misi & 5 Fungsi Utama Pesantren",
    category: "Visi & Misi",
    href: "#visi-misi",
    keywords: ["misi", "fungsi", "jamaah", "dakwah", "dhuafa", "sosial", "kaderisasi"],
    snippet: "Mewujudkan masyarakat berjama'ah, menggerakkan dakwah, dan memberdayakan dhuafa.",
  },
  {
    id: "kurikulum",
    title: "Komponen Utama Kurikulum Berbasis Tauhid",
    category: "Kurikulum",
    href: "#kurikulum",
    keywords: ["kurikulum", "merdeka", "2013", "tauhid", "tahfidz", "ummi", "tahsin", "bahasa", "arab", "inggris"],
    snippet: "Kurikulum Nasional (Kurikulum Merdeka/2013), Tahfidz Al-Qur'an UMMI, B. Arab & Inggris, dan Pengembangan Insani.",
  },
  {
    id: "lembaga",
    title: "Unit Pendidikan Integral (RA, MI, MTs, MA, Tahfizh)",
    category: "Lembaga",
    href: "#lembaga",
    keywords: ["ra", "mi", "mts", "ma", "madrasah", "ibtidaiyah", "tsanawiyah", "aliyah", "tahfizh", "rumah", "quran"],
    snippet: "Pendidikan Integral RA, MI, MTs, MA, serta Pembinaan Tahfizh & Rumah Qur'an Hidayatullah.",
  },
  {
    id: "galeri",
    title: "Galeri Foto & Dokumentasi Kampus",
    category: "Galeri",
    href: "#galeri",
    keywords: ["galeri", "foto", "dokumentasi", "gedung", "masjid", "poster", "infografis", "fasilitas"],
    snippet: "Dokumentasi foto fisik kawasan kampus, gedung madrasah, masjid, dan poster resmi Visi Misi.",
  },
  {
    id: "psb",
    title: "Pendaftaran Santri Baru (PSB)",
    category: "Pendaftaran",
    href: "https://wa.me/6285243025306?text=Assalamu'alaikum%20Informasi%20PSB%20Hidayatullah%20Buru",
    isExternal: true,
    keywords: ["psb", "pendaftaran", "santri", "baru", "penerimaan", "syarat", "biaya", "whatsapp"],
    snippet: "Informasi Pendaftaran Santri Baru Pondok Pesantren Hidayatullah Buru via WhatsApp Admin.",
  },
  {
    id: "lokasi",
    title: "Peta Lokasi Google Maps & Alamat Lengkap",
    category: "Lokasi",
    href: "#lokasi",
    keywords: ["lokasi", "peta", "maps", "alamat", "waetona", "savanajaya", "waeapo", "buru", "maluku"],
    snippet: "Jl. Waetona RT.02 RW.01 Savanajaya, Waeapo, Kabupaten Buru, Maluku.",
  },
  {
    id: "kontak",
    title: "Kontak Resmi & Alamat Pengurus",
    category: "Kontak",
    href: "#kontak",
    keywords: ["kontak", "telepon", "hp", "wa", "whatsapp", "email", "pengurus", "admin"],
    snippet: "No HP / WA: 0852 4302 5306 / 0812 4020 7405 | Email: hidayatullahburu@gmail.com.",
  },
];

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpenResults, setIsOpenResults] = useState(false);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return searchableContents.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.snippet.toLowerCase().includes(query) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleSelectResult = (href: string, isExternal?: boolean) => {
    setIsOpenResults(false);
    setSearchQuery("");

    if (isExternal) {
      window.open(href, "_blank");
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-amber-50/50 via-white to-slate-50 py-8 sm:py-12 border-b border-gray-200">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Large Prominent Emblem Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 sm:w-56 sm:h-56 mx-auto mb-4 drop-shadow-md"
        >
          <Image
            src="/images/logo-hidayatullah.png"
            alt="Emblem Logo Pondok Pesantren Hidayatullah"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Large Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black text-emerald-950 tracking-tight uppercase leading-tight mb-3">
            PONDOK PESANTREN HIDAYATULLAH
            <br />
            KABUPATEN BURU MALUKU
          </h1>

          {/* Subtitle / Quote */}
          <p className="text-gray-600 italic text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
            &ldquo;Jadilah kamu orang-orang rabbani karena kamu selalu mengajarkan Kitab&rdquo;
            <span className="block text-emerald-800 font-semibold not-italic text-xs sm:text-sm mt-1">
              — Mewujudkan Kampus Miniatur Peradaban Islam
            </span>
          </p>
        </motion.div>

        {/* Search Bar & Auto-Complete Engine */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative max-w-xl mx-auto mb-8"
        >
          <div className="flex border-2 border-emerald-800 bg-white shadow-md focus-within:ring-2 focus-within:ring-emerald-600">
            <div className="relative flex-1 flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setIsOpenResults(true);
                }}
                onFocus={() => setIsOpenResults(true)}
                placeholder="Ketik untuk mencari..."
                className="w-full py-3 px-4 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <button
              onClick={() => {
                if (filteredResults.length > 0) {
                  handleSelectResult(filteredResults[0].href, filteredResults[0].isExternal);
                }
              }}
              className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-7 py-3 text-sm flex items-center gap-2 transition-colors flex-shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>

          {/* Search Dropdown Results */}
          <AnimatePresence>
            {isOpenResults && searchQuery.trim() && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 5 }}
                className="absolute top-full left-0 right-0 mt-1 bg-white border border-emerald-200 shadow-2xl z-50 text-left overflow-hidden max-h-80 overflow-y-auto"
              >
                {filteredResults.length > 0 ? (
                  <div className="divide-y divide-gray-100">
                    {filteredResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleSelectResult(result.href, result.isExternal)}
                        className="w-full p-3.5 hover:bg-emerald-50 text-left transition-colors flex items-start justify-between gap-3 group"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-2 py-0.5">
                              {result.category}
                            </span>
                            <h4 className="font-bold text-sm text-emerald-950 group-hover:text-emerald-700">
                              {result.title}
                            </h4>
                          </div>
                          <p className="text-xs text-gray-500 line-clamp-1">{result.snippet}</p>
                        </div>
                        {result.isExternal ? (
                          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-700 flex-shrink-0 mt-1" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-700 flex-shrink-0 mt-1" />
                        )}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-gray-500">
                    Tidak ditemukan konten untuk &ldquo;{searchQuery}&rdquo;. Coba kata kunci seperti <strong>Visi, Kurikulum, RA, MI, MTs, MA, Galeri, atau Lokasi</strong>.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Menu Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-3 bg-emerald-900 text-white px-8 py-3 font-bold text-sm sm:text-base shadow-md cursor-pointer hover:bg-emerald-950 transition-colors"
          onClick={() => {
            const menuElement = document.querySelector("#profil");
            if (menuElement) {
              menuElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <Menu className="w-5 h-5" />
          <span>Menu Navigasi Utama</span>
        </motion.div>
      </div>
    </section>
  );
}
