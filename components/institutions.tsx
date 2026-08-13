"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const institutions = [
  {
    name: "RA / TK Integral Hidayatullah",
    desc: "Pendidikan anak usia dini berbasis pembentukan karakter Rabbani dan kecintaan pada Al-Qur'an.",
    tag: "PAUD & RA",
  },
  {
    name: "MI / SD Integral Hidayatullah",
    desc: "Pendidikan dasar unggulan memadukan akademis umum, Tahfizh Al-Qur'an, dan pembiasaan ibadah.",
    tag: "Tingkat Dasar",
  },
  {
    name: "MTs / SMP Integral Hidayatullah",
    desc: "Pembinaan remaja berbasis adab, hafalan Al-Qur'an, wawasan sains, dan kedisiplinan kepesantrenan.",
    tag: "Tingkat Menengah",
  },
  {
    name: "MA / SMA Integral Hidayatullah",
    desc: "Mencetak lulusan siap kuliah dan siap terjun berdakwah dengan bekal kepemimpinan peradaban.",
    tag: "Tingkat Atas",
  },
  {
    name: "Tahfizh & Rumah Qur'an",
    desc: "Program khusus hafalan Al-Qur'an 30 Juz dan pendalaman Diniyah bagi santri dan masyarakat.",
    tag: "Tahfizh Al-Qur'an",
  },
  {
    name: "Lembaga Dakwah & Sosial Ekonomi",
    desc: "Pemberdayaan kaum dhuafa, pembinaan mubaligh, dan pengembangan ekonomi berbasis syariah.",
    tag: "Dakwah & Sosial",
  },
];

export function Institutions() {
  return (
    <section id="lembaga" className="py-12 sm:py-16 md:py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
            <span>Unit Pendidikan & Layanan</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-3">
            Lembaga & Unit Layanan Pesantren
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Pondok Pesantren Hidayatullah Kabupaten Buru menyelenggarakan pendidikan berjenjang integral berbasis Tauhid.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutions.map((inst, idx) => (
            <motion.div
              key={inst.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100/80 hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 relative flex-shrink-0">
                    <Image
                      src="/images/logo-hidayatullah.png"
                      alt="Logo Hidayatullah"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 uppercase">
                    {inst.tag}
                  </span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-emerald-950 mb-2">
                  {inst.name}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {inst.desc}
                </p>
              </div>
              <a
                href="https://wa.me/6285243025306"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900 inline-flex items-center gap-1 mt-2 group"
              >
                <span>Informasi Pendaftaran</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
