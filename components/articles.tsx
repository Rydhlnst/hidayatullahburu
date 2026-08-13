"use client";

import Image from "next/image";
import Link from "next/link";
import { Newspaper } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    image: "/images/visi-misi-poster.jpg",
    category: ["Visi Misi", "Pengumuman"],
    title: "Sosialisasi Visi & Misi Menjadi Kampus Miniatur Peradaban Islam Hidayatullah Buru",
    date: "Agustus 2026",
    author: "Hidayatullah Buru",
    href: "#visi-misi",
  },
  {
    image: "/images/kampus-2.jpg",
    category: ["Pendidikan", "Tahfizh"],
    title: "Pembinaan Karakter Santri & Program Tahfizh Al-Qur'an Berbasis Tauhid",
    date: "Agustus 2026",
    author: "Humas Pesantren",
    href: "#lembaga",
  },
  {
    image: "/images/kampus-1.jpg",
    category: ["Dakwah", "Sosial"],
    title: "Pemberdayaan Kaum Dhuafa & Mustadh'afin Melalui Dakwah dan Usaha Ekonomi Syariah",
    date: "Agustus 2026",
    author: "Pengurus Pesantren",
    href: "#visi-misi",
  },
];

export function Articles() {
  return (
    <section id="artikel" className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <Newspaper className="w-4 h-4 text-emerald-600" />
            <span>Kabar & Informasi</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-3">
            Berita & Artikel Pesantren
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Informasi perkembangan kegiatan dakwah, pendidikan, dan pengabdian masyarakat di Hidayatullah Buru.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
            >
              <Link
                href={article.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all flex flex-col justify-between h-full block"
              >
                <div>
                  <div className="relative h-48 sm:h-52 bg-emerald-950 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.category.map((cat) => (
                        <span
                          key={cat}
                          className="text-[11px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded-full border border-emerald-100"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-base sm:text-lg font-bold text-emerald-950 mb-2 line-clamp-2 group-hover:text-emerald-700 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-3">
                      {article.date} • Oleh {article.author}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
