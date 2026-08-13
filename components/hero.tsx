"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/kampus-1.jpg",
    title: "Pondok Pesantren Hidayatullah Kabupaten Buru",
    subtitle: "Mewujudkan Kampus Miniatur Peradaban Islam melalui Pendidikan Integral Berbasis Tauhid.",
  },
  {
    image: "/images/kampus-2.jpg",
    title: "Membina Generasi Rabbani & Berakhlak Mulia",
    subtitle: "Pusat kaderisasi calon pemimpin peradaban Islam yang unggul, mandiri, dan berdaya saing di Maluku.",
  },
  {
    image: "/images/plang-pesantren.jpg",
    title: "Lingkungan Belajar Kondusif & Asri",
    subtitle: "Berlokasi di Desa Savanajaya, Kecamatan Waeapo, Kabupaten Buru - Maluku.",
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            {slides[current].title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
            {slides[current].subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://wa.me/6285243025306"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-none transition-colors text-sm sm:text-base"
            >
              Pendaftaran Santri Baru
            </Link>
            <Link
              href="#visi-misi"
              className="bg-white/20 hover:bg-white/30 text-white border border-white/40 font-semibold px-6 py-3 rounded-none transition-colors backdrop-blur-sm text-sm sm:text-base"
            >
              Lihat Visi & Misi
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 hover:bg-black/60 text-white p-2 sm:p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
