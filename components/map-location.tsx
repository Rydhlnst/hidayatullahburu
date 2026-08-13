"use client";

import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function MapLocation() {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Pesantren+Hidayatullah+Buru/@-3.2970543,127.0090998,621m/data=!3m1!1e3!4m6!3m5!1s0x2d726b0fd4fde97b:0xf9150fe26fd6e1ea!8m2!3d-3.2970903!4d127.0103851!16s%2Fg%2F11fl9k0wbn";

  // Embedded Google Map search query for Pesantren Hidayatullah Buru (-3.2970903, 127.0103851)
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.862413149867!2d127.0078111!3d-3.2970903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d726b0fd4fde97b%3A0xf9150fe26fd6e1ea!2sPesantren%20Hidayatullah%20Buru!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

  return (
    <section id="lokasi" className="py-12 sm:py-16 md:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-none bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4 text-emerald-700" />
            <span>Lokasi Kampus</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-950 mb-3">
            Lokasi Pesantren Hidayatullah Buru
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Kunjungi Kampus Pondok Pesantren Hidayatullah Kabupaten Buru yang asri dan kondusif di Desa Savanajaya.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Info Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-emerald-950 text-white p-6 sm:p-8 rounded-none border border-emerald-900 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-400 mb-2 block">
                Alamat Lengkap
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-white">
                Pondok Pesantren Hidayatullah Buru
              </h3>

              <div className="space-y-4 text-sm text-emerald-100/90 mb-8">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="leading-relaxed">
                    Jl. Waetona RT.02 RW.01 Desa Savanajaya, Kecamatan Waeapo, Kabupaten Buru, Provinsi Maluku. Kode Pos 97574.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <p className="font-semibold">0852 4302 5306 / 0812 4020 7405</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-emerald-900">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-none transition-colors text-sm shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Buka di Google Maps</span>
              </a>
            </div>
          </motion.div>

          {/* Google Maps iFrame (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border border-gray-200 rounded-none overflow-hidden min-h-[350px] shadow-sm relative"
          >
            <iframe
              title="Google Maps Pesantren Hidayatullah Buru"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
