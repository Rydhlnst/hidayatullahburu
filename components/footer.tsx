"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, HeartHandshake, Compass } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer id="kontak" className="bg-emerald-950 text-white border-t border-emerald-900 overflow-hidden">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10"
        >
          {/* Column 1: Brand & Logo (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="relative w-12 h-12 flex-shrink-0 bg-white rounded-full p-1 shadow-md"
              >
                <Image
                  src="/images/logo-hidayatullah.png"
                  alt="Logo Hidayatullah Buru"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold leading-snug">
                  PONDOK PESANTREN HIDAYATULLAH
                </h3>
                <p className="text-xs text-emerald-400 font-semibold tracking-wider">
                  KABUPATEN BURU - MALUKU
                </p>
              </div>
            </div>
            <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed max-w-md">
              Mewujudkan Kampus Miniatur Peradaban Islam melalui Pendidikan Integral Berbasis Tauhid, Dakwah Islamiah, dan Pemberdayaan Ekonomi Keumatan.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-emerald-900/80 border border-emerald-800 text-emerald-300 text-xs">
              <Compass className="w-3.5 h-3.5" />
              <span>Visi: Kampus Miniatur Peradaban Islam</span>
            </div>
          </div>

          {/* Column 2: Alamat & Kontak (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading text-base font-bold text-emerald-300 uppercase tracking-wider">
              Alamat & Kontak Resmi
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-emerald-100/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  Jl. Waetona RT.02 RW.01 Desa Savanajaya, Kec. Waeapo, Kab. Buru, Prov. Maluku. Kode Pos 97574
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hp / WA: 0852 4302 5306 / 0812 4020 7405</span>
              </div>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/6285243025306?text=Assalamu'alaikum%20Pengurus%20Pesantren%20Hidayatullah%20Buru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-medium px-4 py-2 rounded-none text-xs transition-colors mt-2 shadow-md"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Chat Admin Pendaftaran</span>
              </motion.a>
            </div>
          </div>

          {/* Column 3: Navigasi Cepat (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-base font-bold text-emerald-300 uppercase tracking-wider">
              Tautan Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-emerald-100/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  • Beranda
                </Link>
              </li>
              <li>
                <Link href="#profil" className="hover:text-white transition-colors">
                  • Profil Pesantren
                </Link>
              </li>
              <li>
                <Link href="#visi-misi" className="hover:text-white transition-colors">
                  • Visi, Misi & Tujuan
                </Link>
              </li>
              <li>
                <Link href="#lembaga" className="hover:text-white transition-colors">
                  • Unit Pendidikan
                </Link>
              </li>
              <li>
                <Link href="#galeri" className="hover:text-white transition-colors">
                  • Galeri Foto & Poster
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-emerald-900 bg-emerald-950/90 py-4">
        <div className="container mx-auto px-4 text-center text-emerald-400/80 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Pondok Pesantren Hidayatullah Kabupaten Buru. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
