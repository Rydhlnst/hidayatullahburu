"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Upload, Trash2, Tag, AlertCircle, CheckCircle2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
}

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kampus");
  const [caption, setCaption] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchItems = async () => {
    try {
      const res = await fetch("/api/gallery");
      if (res.ok) {
        const data = await res.json();
        setItems(data);
      }
    } catch {
      console.error("Failed to load gallery items");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleUploadAndSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title) {
      setMessage({ type: "error", text: "Pilih file gambar dan isi judul foto!" });
      return;
    }

    setIsUploading(true);
    setMessage(null);

    try {
      // Step 1: Upload image file to Cloudflare R2
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();
      if (!uploadRes.ok) {
        throw new Error(uploadData.error || "Gagal mengunggah ke Cloudflare R2");
      }

      const imageUrl = uploadData.url;

      // Step 2: Save metadata to Gallery DB
      const saveRes = await fetch("/api/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          image: imageUrl,
          caption,
        }),
      });

      if (!saveRes.ok) {
        throw new Error("Gagal menyimpan data foto ke database");
      }

      setMessage({ type: "success", text: "Berhasil mengunggah foto ke Cloudflare R2!" });
      setFile(null);
      setTitle("");
      setCaption("");
      fetchItems();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setMessage({ type: "error", text: err.message });
      } else {
        setMessage({ type: "error", text: "Terjadi kesalahan upload" });
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus foto ini dari Cloudflare R2 dan galeri?")) return;

    try {
      const res = await fetch(`/api/gallery?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchItems();
        setMessage({ type: "success", text: "Foto berhasil dihapus dari Cloudflare R2!" });
      }
    } catch {
      setMessage({ type: "error", text: "Gagal menghapus foto" });
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-emerald-950">
          Galeri Foto & Cloudflare R2 Uploader
        </h1>
        <p className="text-sm text-gray-600">
          Unggah foto kegiatan dan kawasan kampus ke Cloudflare R2 Object Storage.
        </p>
      </div>

      {message && (
        <div
          className={`p-4 rounded-none text-xs flex items-center gap-2 border ${
            message.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
              : "bg-red-50 text-red-800 border-red-300"
          }`}
        >
          {message.type === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Upload Form Card */}
      <div className="bg-white p-6 border border-gray-200 rounded-none shadow-sm space-y-6">
        <h3 className="font-heading text-lg font-bold text-emerald-950 flex items-center gap-2">
          <Upload className="w-5 h-5 text-emerald-700" />
          <span>Upload Foto Baru ke Cloudflare R2</span>
        </h3>

        <form onSubmit={handleUploadAndSave} className="grid md:grid-cols-2 gap-5">
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Pilih Berkas Gambar
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="w-full text-xs text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-xs file:font-semibold file:bg-emerald-800 file:text-white hover:file:bg-emerald-700 border border-gray-300 p-1"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Judul Foto
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Contoh: Kegiatan Pengajian Santri Hidayatullah"
                className="w-full p-2.5 text-xs bg-gray-50 border border-gray-300 rounded-none focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Kategori Tag
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2.5 text-xs bg-gray-50 border border-gray-300 rounded-none focus:outline-none focus:border-emerald-600"
              >
                <option value="Kampus">Kampus & Masjid</option>
                <option value="Pendidikan">Pendidikan & Kelas</option>
                <option value="Tahfizh">Tahfizh & Al-Qur'an</option>
                <option value="Dakwah">Dakwah & Sosial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-700 mb-1">
                Deskripsi Singkat (Opsional)
              </label>
              <input
                type="text"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Keterangan tambahan foto..."
                className="w-full p-2.5 text-xs bg-gray-50 border border-gray-300 rounded-none focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              disabled={isUploading}
              className="bg-emerald-800 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-none transition-colors inline-flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>{isUploading ? "Mengunggah ke Cloudflare R2..." : "Unggah & Simpan Foto"}</span>
            </button>
          </div>
        </form>
      </div>

      {/* R2 Gallery List */}
      <div className="space-y-4">
        <h3 className="font-heading text-lg font-bold text-emerald-950">
          Daftar Foto di Galeri ({items.length})
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-200 rounded-none overflow-hidden shadow-sm flex flex-col justify-between"
            >
              <div className="relative h-48 bg-emerald-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded-none">
                  <Tag className="w-3 h-3" />
                  <span>{item.category}</span>
                </div>
                <h4 className="font-bold text-emerald-950 text-sm line-clamp-1">{item.title}</h4>
                {item.caption && <p className="text-xs text-gray-500 line-clamp-2">{item.caption}</p>}
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => handleDelete(item.id)}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold py-2 rounded-none transition-colors border border-red-200 inline-flex items-center justify-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus dari R2</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
