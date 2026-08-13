"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Alhamdulillah, mempercayakan pendidikan anak di Pondok Pesantren Hidayatullah Kabupaten Buru adalah keputusan terbaik. Pembinaan adab, hafalan Al-Qur'an, dan kemandirian santri dirasakan sangat nyata.",
    name: "Ustadz Abdullah",
    role: "Wali Santri Kabupaten Buru",
    image: "/images/logo-hidayatullah.png",
  },
  {
    quote:
      "Pesantren Hidayatullah Buru memberikan fondasi ketauhidan yang kuat dan semangat berdakwah. Suasana kampus yang asri dan pembimbing yang sabar menjadikan santri bersemangat menuntut ilmu.",
    name: "Ahmad Mujahid",
    role: "Alumni Hidayatullah Buru",
    image: "/images/logo-hidayatullah.png",
  },
  {
    quote:
      "Program integrasi antara pendidikan formal dan hafalan Al-Qur'an berjalan seimbang. Anak-anak dibina menjadi pribadi yang berakhlak Rabbani dan peduli sesama.",
    name: "Ibu Fatimah",
    role: "Tokoh Masyarakat Waeapo",
    image: "/images/logo-hidayatullah.png",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-800">
            Kata Wali Santri & Alumni
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 md:p-10 relative">
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 italic pl-4 border-l-4 border-emerald-500">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-emerald-50">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="font-semibold text-emerald-900 text-sm sm:text-base">
                  {testimonials[current].name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {testimonials[current].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={prev}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
