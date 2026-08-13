"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="profil" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Container displaying Plang Pesantren with Slide In Left animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[320px] sm:h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-emerald-100 group"
          >
            <Image
              src="/images/plang-pesantren.jpg"
              alt="Plang Pondok Pesantren Hidayatullah Kabupaten Buru"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full w-fit mb-2 border border-emerald-500/30">
                Papan Nama Resmi
              </span>
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                Pondok Pesantren Hidayatullah Kabupaten Buru
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 flex items-center gap-1.5 mt-1">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Desa Savanajaya, Kec. Waeapo, Kab. Buru, Prov. Maluku</span>
              </p>
            </div>
          </motion.div>

          {/* Content with Slide In Right animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-semibold mb-3">
              <span>Profil Lembaga</span>
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-4 sm:mb-6">
              Mendidik Generasi Tauhid & Membangun Peradaban di Bumi Bupolo
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              <strong>Pondok Pesantren Hidayatullah Kabupaten Buru</strong> berdiri kokoh di tengah keasrian Desa Savanajaya, Kecamatan Waeapo, Kabupaten Buru, Maluku. Sebagai bagian dari jaringan Pesantren Hidayatullah Nasional, kami berkomitmen menyelenggarakan pendidikan integral berbasis Tauhid untuk melahirkan generasi yang bertakwa, cerdas, dan mandiri.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { title: "Kurikulum Integral Berbasis Tauhid", desc: "Memadukan pemahaman Diniyah Al-Qur'an dan Hadits dengan kurikulum nasional." },
                { title: "Lingkungan Kampus Alamiah & Islamiah", desc: "Suasana belajar yang asri, tenang, kondusif, dan kental dengan nilai-nilai kepesantrenan." },
                { title: "Pemberdayaan Umat & Kepedulian Dhuafa", desc: "Aktif menyelenggarakan program dakwah sosial, beasiswa dhuafa, dan pengembangan ekonomi syariah." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3 bg-emerald-50/60 p-3 rounded-xl border border-emerald-100/60 hover:bg-emerald-50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-900">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#visi-misi"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm sm:text-base shadow-md inline-block"
                >
                  Selengkapnya Visi & Misi
                </Link>
              </motion.div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/6285243025306"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-emerald-700 text-emerald-800 hover:bg-emerald-50 font-semibold px-6 py-3 rounded-full transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Hubungi Pengurus</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
