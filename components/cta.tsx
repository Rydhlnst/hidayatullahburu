"use client";

import { HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-emerald-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-300 bg-emerald-900/80 px-3.5 py-1 rounded-none border border-emerald-700 mb-4 inline-block">
            Penerimaan Santri Baru (PSB)
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">
            Mari Bergabung Bersama Hidayatullah Buru
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Wujudkan masa depan putra-putri Anda yang berilmu, berakhlak Rabbani, dan memiliki ketauhidan yang kokoh dalam lingkungan pesantren yang asri dan kondusif.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/6285243025306?text=Assalamu'alaikum,%20saya%20ingin%20mendaftar%20di%20Pondok%20Pesantren%20Hidayatullah%20Buru"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-8 py-3.5 sm:px-10 sm:py-4 rounded-none transition-all text-sm sm:text-base shadow-xl"
            >
              <HeartHandshake className="w-5 h-5 text-emerald-700" />
              <span>Daftar via WhatsApp (0852-4302-5306)</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
