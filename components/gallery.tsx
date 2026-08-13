"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, ZoomIn, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  {
    src: "/images/plang-pesantren.jpg",
    title: "Plang Nama Resmi Pesantren",
    category: "Identitas",
    location: "Jl. Waetona Desa Savanajaya, Kec. Waeapo, Kab. Buru",
    description: "Papan petunjuk resmi Pondok Pesantren Hidayatullah Kabupaten Buru, Maluku.",
  },
  {
    src: "/images/visi-misi-poster.jpg",
    title: "Poster Visi, Misi, Fungsi & Tujuan",
    category: "Dokumen Resmi",
    location: "Kampus Hidayatullah Buru",
    description: "Pedoman visi miniatur peradaban Islam dan 6 pilar misi perjuangan pesantren.",
  },
  {
    src: "/images/kampus-1.jpg",
    title: "Akses Jalan & Area Kampus 1",
    category: "Lingkungan Kampus",
    location: "Savanajaya, Kab. Buru",
    description: "Pemandangan jalan masuk utama dan area hijau kampus Hidayatullah Buru yang asri.",
  },
  {
    src: "/images/kampus-2.jpg",
    title: "Kompleks Masjid & Bangunan Kampus 2",
    category: "Fasilitas Pesantren",
    location: "Savanajaya, Kab. Buru",
    description: "Masjid dan sarana kegiatan santri di lingkungan kampus alamiah dan islamiah.",
  },
  {
    src: "/images/logo-hidayatullah.png",
    title: "Logo Resmi Hidayatullah",
    category: "Identitas",
    location: "Nasional / Kabupaten Buru",
    description: "Simbol Bintang Segi Delapan dan Al-Qur'an sebagai pedoman peradaban Islam.",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <Camera className="w-4 h-4 text-emerald-600" />
            <span>Dokumentasi Visual</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-3">
            Galeri Foto Pondok Pesantren
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Potret lingkungan, fasilitas, dan dokumen resmi Pondok Pesantren Hidayatullah Kabupaten Buru.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImage(img)}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-emerald-950">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <span className="absolute top-3 left-3 bg-emerald-800/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm border border-emerald-500/30">
                  {img.category}
                </span>
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="absolute bottom-3 right-3 bg-white/20 text-white p-2 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ZoomIn className="w-4 h-4" />
                </motion.div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-heading font-bold text-emerald-950 text-base sm:text-lg mb-1 group-hover:text-emerald-700 transition-colors">
                  {img.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-3">
                  {img.description}
                </p>
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{img.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-emerald-900 text-white p-2.5 rounded-full hover:bg-emerald-800 transition-colors font-bold text-xs shadow-lg"
                >
                  ✕ Tutup
                </button>
              </div>
              <div className="p-5 sm:p-6 bg-white">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-emerald-950">
                    {selectedImage.title}
                  </h3>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{selectedImage.description}</p>
                <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
