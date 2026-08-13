"use client";

import { useState } from "react";
import Image from "next/image";
import { Target, Compass, Flag, Layers, ZoomIn, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function VisiMisi() {
  const [isPosterModalOpen, setIsPosterModalOpen] = useState(false);

  const misiList = [
    "Mewujudkan masyarakat berjama'ah, bersyari'ah, unggul dan berpengaruh",
    "Menggerakkan dakwah dan rekrutmen anggota baru Hidayatullah",
    "Menyelenggarakan pendidikan integral berbasis Tauhid",
    "Menyelenggarakan pasar syari'ah dan ekonomi keumatan yang berdaya saing",
    "Memberdayakan kaum dhuafa dan mustadh'afin",
    "Mengembangkan lingkungan kampus yang alamiah, ilmiah dan islamiah",
  ];

  const tujuanList = [
    "Membangun wilayah pemukiman muslim sebagai miniatur peradaban Islam",
    "Mendirikan lembaga pendidikan integral yang unggul dan berdaya saing",
    "Melakukan pembinaan dan perkaderan untuk lahirnya pemimpin dan pejuang peradaban Islam",
    "Mendirikan lembaga/usaha ekonomi produktif untuk pendanaan jama'ah dan perjuangan peradaban Islam",
    "Memberdayakan dhu'afa & mustadh'afin menuju kehidupan mandiri dan kompetitif",
  ];

  const fungsiList = [
    "Kampus peragaan syari'at Islam",
    "Kampus dakwah dan rekrutmen anggota",
    "Kampus pendidikan dan perkaderan",
    "Kampus pemberdayaan ekonomi",
    "Kampus peduli dhu'afa dan mustadh'afin",
  ];

  return (
    <section id="visi-misi" className="py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Landasan & Direction Pesantren</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4">
            Visi, Misi, Fungsi & Tujuan
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Pondok Pesantren Hidayatullah Kabupaten Buru didirikan dengan komitmen kuat menjadi wadah pembinaan generasi Rabbani, pusat dakwah, serta pemberdayaan ekonomi dan sosial keumatan.
          </p>
        </motion.div>

        {/* Highlight Banner Visi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12 relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Target className="w-80 h-80 text-white" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 text-emerald-300 font-semibold text-sm mb-2">
              <Target className="w-5 h-5" />
              <span>VISI UTAMA PESANTREN</span>
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
              &quot;Menjadi Kampus Miniatur Peradaban Islam&quot;
            </h3>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed">
              Mewujudkan kawasan yang mengintegrasikan nilai-nilai tauhid, pendidikan integral, dakwah syar'i, serta kesejahteraan sosial ekonomi dalam kehidupan sehari-hari santri dan masyarakat.
            </p>
          </div>
        </motion.div>

        {/* Content Grid & Poster Preview */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Main Text Content Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* MISI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-emerald-950">
                    Misi Pesantren
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">6 Pilar Perjuangan Hidayatullah Buru</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {misiList.map((misi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.02, x: 3 }}
                    className="flex items-start gap-3 bg-emerald-50/50 p-3.5 rounded-xl border border-emerald-100/60"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                      {misi}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* TUJUAN */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <Flag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-emerald-950">
                    Tujuan Pesantren
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-700 font-semibold">
                    Mencapai Ridha Allah ﷻ melalui 5 Langkah Strategis:
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-4">
                {tujuanList.map((tujuan, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.4 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100"
                  >
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                      {tujuan}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FUNGSI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-emerald-950">
                    Fungsi Pesantren Hidayatullah
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">Peran Nyata Kampus Hidayatullah Buru</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {fungsiList.map((fungsi, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.3 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    className="bg-emerald-900 text-white p-4 rounded-xl text-center flex flex-col items-center justify-center gap-2 shadow-sm cursor-default"
                  >
                    <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Fungsi {idx + 1}</span>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-snug">{fungsi}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Official Poster Card Sidebar (4 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-emerald-200 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-heading font-bold text-emerald-950 text-sm sm:text-base">
                  Dokumen Resmi Visi & Misi
                </h4>
                <span className="text-xs text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  Hidayatullah Buru
                </span>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group border border-gray-200 shadow-inner"
                onClick={() => setIsPosterModalOpen(true)}
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/visi-misi-poster.jpg"
                    alt="Poster Visi Misi Hidayatullah Buru"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300 bg-gray-50"
                  />
                </div>
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-emerald-900 font-bold px-4 py-2 rounded-full text-xs flex items-center gap-2 shadow-lg">
                    <ZoomIn className="w-4 h-4" /> Perbesar Gambar
                  </span>
                </div>
              </motion.div>

              <p className="text-xs text-gray-500 mt-3 text-center italic">
                Klik pada gambar poster di atas untuk memperbesar dokumen resmi Visi, Misi, Fungsi, dan Tujuan.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal Lightbox for Poster */}
      <AnimatePresence>
        {isPosterModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsPosterModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl p-2 sm:p-4 overflow-hidden flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsPosterModalOpen(false)}
                className="absolute top-4 right-4 bg-emerald-800 text-white p-2 rounded-full hover:bg-emerald-700 transition-colors z-10 font-bold text-xs"
              >
                ✕ Tutup
              </button>
              <div className="relative w-full h-[75vh]">
                <Image
                  src="/images/visi-misi-poster.jpg"
                  alt="Poster Visi Misi Hidayatullah Buru Full"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
