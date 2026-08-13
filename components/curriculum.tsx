"use client";

import { BookOpen, Compass, Award, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const curriculumItems = [
  {
    icon: BookOpen,
    title: "Kurikulum Nasional",
    description:
      "Menggunakan standar kurikulum resmi pemerintah (seperti Kurikulum Merdeka atau Kurikulum 2013) yang disesuaikan dengan nilai-nilai keislaman.",
  },
  {
    icon: Compass,
    title: "Kurikulum Berbasis Tauhid",
    description:
      "Menjadikan tauhid sebagai poros dan landasan seluruh mata pelajaran serta pembentukan karakter (akhlak mulia) peserta didik.",
  },
  {
    icon: Award,
    title: "Program Keagamaan & Al-Qur'an",
    description:
      "Fokus pada tahfidz (hafalan Al-Qur'an), tahsin, penerapan metode baca Al-Qur'an khusus (seperti metode UMMI), serta pendalaman bahasa Arab dan Inggris.",
  },
  {
    icon: HeartHandshake,
    title: "Pengembangan Aspek Insani",
    description:
      "Mengembangkan potensi ruhiyah (spiritual), aqliyah (intelektual), dan jismiyah (fisik/keterampilan) secara seimbang.",
  },
];

export function Curriculum() {
  return (
    <section id="kurikulum" className="py-12 sm:py-16 md:py-20 bg-emerald-950 text-white overflow-hidden border-t border-emerald-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase font-bold tracking-widest text-emerald-300 bg-emerald-900 px-3.5 py-1 rounded-none border border-emerald-700 mb-3 inline-block">
            Sistem Pendidikan
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
            Komponen Utama Kurikulum
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Pondok Pesantren Hidayatullah Kabupaten Buru menerapkan sistem pendidikan integral yang memadukan keunggulan ilmu pengetahuan umum dan ketauhidan Rabbani.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {curriculumItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-emerald-900/60 border border-emerald-800 p-6 rounded-none flex flex-col justify-between hover:bg-emerald-900 transition-colors"
            >
              <div>
                <div className="w-12 h-12 bg-emerald-800 border border-emerald-600 rounded-none flex items-center justify-center mb-5 text-emerald-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
