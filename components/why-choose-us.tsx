"use client";

import { BookOpen, Users, GraduationCap, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: BookOpen,
    title: "Pendidikan Integral Berbasis Tauhid",
    description:
      "Kurikulum terpadu yang memadukan pemahaman Diniyah Islamiyah, hafalan Al-Qur'an, dan sains modern untuk membentuk insan kamil.",
  },
  {
    icon: Users,
    title: "Lingkungan Alamiah, Ilmiah & Islamiah",
    description:
      "Kampus yang tenang dan asri di Savanajaya Kabupaten Buru, mendukung kedisiplinan, ukhuwah islamiyah, serta kebiasaan hidup islami.",
  },
  {
    icon: GraduationCap,
    title: "Kaderisasi Pemimpin Peradaban",
    description:
      "Membina santri agar memiliki integritas syar'i, jiwa kepemimpinan, dan kepedulian tinggi untuk berdakwah serta memimpin peradaban Islam.",
  },
  {
    icon: HeartHandshake,
    title: "Pemberdayaan Umat & Dhuafa",
    description:
      "Komitmen nyata pemberdayaan ekonomi syariah dan kepedulian sosial terhadap kaum dhuafa & mustadh'afin menuju kemandirian umat.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-emerald-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 bg-emerald-800/80 px-3 py-1 rounded-full border border-emerald-700 mb-3 inline-block">
            Keunggulan Pesantren
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
            Mengapa Memilih Hidayatullah Buru?
          </h2>
          <p className="text-emerald-100/80 text-sm sm:text-base">
            Empat pilar utama pembentukan karakter dan keunggulan santri di Pondok Pesantren Hidayatullah Kabupaten Buru.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-center hover:bg-white/15 transition-all shadow-md group"
            >
              <div
                className="w-14 h-14 bg-emerald-400/20 border border-emerald-400/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-300 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors"
              >
                <reason.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2.5">
                {reason.title}
              </h3>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
