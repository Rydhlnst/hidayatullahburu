import Link from "next/link";
import { db } from "@/db";
import { heroSlides, galleryItems, institutions, curriculumItems } from "@/db/schema";
import { count } from "drizzle-orm";
import { ImageIcon, Images, Building2, BookOpen, Upload, Cloud } from "lucide-react";

export default async function AdminDashboardOverview() {
  const [{ value: heroCount }] = await db.select({ value: count() }).from(heroSlides).catch(() => [{ value: 3 }]);
  const [{ value: galleryCount }] = await db.select({ value: count() }).from(galleryItems).catch(() => [{ value: 5 }]);
  const [{ value: institutionCount }] = await db.select({ value: count() }).from(institutions).catch(() => [{ value: 6 }]);
  const [{ value: curriculumCount }] = await db.select({ value: count() }).from(curriculumItems).catch(() => [{ value: 4 }]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-emerald-950">
          Dashboard Pengelolaan Konten & Cloudflare R2
        </h1>
        <p className="text-sm text-gray-600">
          Selamat datang di panel admin Pondok Pesantren Hidayatullah Buru. Kelola gambar R2 dan konten website di sini.
        </p>
      </div>

      {/* R2 Cloud Status Banner */}
      <div className="bg-emerald-950 text-white p-6 rounded-none border border-emerald-900 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-emerald-800 rounded-none flex items-center justify-center text-emerald-300 flex-shrink-0">
            <Cloud className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white">Integrasi Cloudflare R2 Object Storage (Drizzle ORM)</h3>
            <p className="text-xs text-emerald-100/80">
              Penyimpanan gambar cepat tanpa batas storage server dengan transfer bandwidth gratis & Drizzle ORM tanpa binary engine Vercel.
            </p>
          </div>
        </div>
        <Link
          href="/admin/gallery"
          className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-none transition-colors inline-flex items-center gap-2 flex-shrink-0"
        >
          <Upload className="w-4 h-4" />
          <span>Upload ke R2</span>
        </Link>
      </div>

      {/* Summary Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 border border-gray-200 rounded-none shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Hero Slides</p>
            <h3 className="text-2xl font-extrabold text-emerald-950">{heroCount}</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-700">
            <ImageIcon className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 border border-gray-200 rounded-none shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Foto Galeri (R2)</p>
            <h3 className="text-2xl font-extrabold text-emerald-950">{galleryCount}</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-700">
            <Images className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 border border-gray-200 rounded-none shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Unit Lembaga</p>
            <h3 className="text-2xl font-extrabold text-emerald-950">{institutionCount}</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-700">
            <Building2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 border border-gray-200 rounded-none shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Kurikulum</p>
            <h3 className="text-2xl font-extrabold text-emerald-950">{curriculumCount}</h3>
          </div>
          <div className="p-3 bg-emerald-50 text-emerald-700">
            <BookOpen className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Quick Action Management Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 border border-gray-200 rounded-none space-y-3">
          <h3 className="font-heading text-lg font-bold text-emerald-950">Kelola Galeri Foto & R2 Upload</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Unggah foto-foto kegiatan pesantren baru langsung ke Cloudflare R2 bucket dan tambahkan tag kategori.
          </p>
          <Link
            href="/admin/gallery"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-none transition-colors"
          >
            Kelola Galeri →
          </Link>
        </div>

        <div className="bg-white p-6 border border-gray-200 rounded-none space-y-3">
          <h3 className="font-heading text-lg font-bold text-emerald-950">Kelola Hero Carousel Slide</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Perbarui slide gambar latar belakang hero carousel dan teks sambutan utama di beranda.
          </p>
          <Link
            href="/admin/hero"
            className="inline-block bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-none transition-colors"
          >
            Kelola Hero Carousel →
          </Link>
        </div>
      </div>
    </div>
  );
}
