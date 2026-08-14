import { db } from "./index";
import {
  adminUsers,
  heroSlides,
  institutions,
  curriculumItems,
  galleryItems,
  articles,
  testimonials,
  siteSettings,
} from "./schema";
import bcrypt from "bcryptjs";

async function seed() {
  console.log("🌱 Seeding database for Pesantren Hidayatullah Buru...");

  // 1. Admin User
  const defaultPasswordHash = await bcrypt.hash("adminpassword123", 10);
  await db
    .insert(adminUsers)
    .values({
      username: "admin",
      password: defaultPasswordHash,
    })
    .onConflictDoNothing();
  console.log("✅ Admin User seeded (username: admin)");

  // 2. Hero Slides
  await db.delete(heroSlides);
  await db.insert(heroSlides).values([
    {
      order: 1,
      title: "Pondok Pesantren Hidayatullah Kabupaten Buru",
      subtitle: "Mewujudkan Kampus Miniatur Peradaban Islam melalui Pendidikan Integral Berbasis Tauhid.",
      image: "/images/kampus-1.jpg",
    },
    {
      order: 2,
      title: "Membina Generasi Rabbani & Berakhlak Mulia",
      subtitle: "Pusat kaderisasi calon pemimpin peradaban Islam yang unggul, mandiri, dan berdaya saing di Maluku.",
      image: "/images/kampus-2.jpg",
    },
    {
      order: 3,
      title: "Lingkungan Belajar Kondusif & Asri",
      subtitle: "Berlokasi di Desa Savanajaya, Kecamatan Waeapo, Kabupaten Buru - Maluku.",
      image: "/images/plang-pesantren.jpg",
    },
  ]);
  console.log("✅ Hero Slides seeded");

  // 3. Curriculum Items
  await db.delete(curriculumItems);
  await db.insert(curriculumItems).values([
    {
      order: 1,
      title: "Kurikulum Resmi Pemerintah",
      description: "Menggunakan standar kurikulum resmi pemerintah (Kurikulum Merdeka / 2013) yang disesuaikan dengan nilai-nilai keislaman.",
      iconName: "Award",
    },
    {
      order: 2,
      title: "Kurikulum Berbasis Tauhid",
      description: "Menjadikan tauhid sebagai poros dan landasan seluruh mata pelajaran serta pembentukan karakter (akhlak mulia) peserta didik.",
      iconName: "BookOpen",
    },
    {
      order: 3,
      title: "Program Keagamaan & Al-Qur'an",
      description: "Fokus pada tahfidz (hafalan Al-Qur'an), tahsin, penerapan metode baca Al-Qur'an khusus (Metode UMMI), serta pendalaman bahasa Arab dan Inggris.",
      iconName: "BookCheck",
    },
    {
      order: 4,
      title: "Pengembangan Aspek Insani",
      description: "Mengembangkan potensi ruhiyah (spiritual), aqliyah (intelektual), dan jismiyah (fisik/keterampilan) secara seimbang.",
      iconName: "BrainCircuit",
    },
  ]);
  console.log("✅ Curriculum Items seeded");

  // 4. Institutions / Units
  await db.delete(institutions);
  await db.insert(institutions).values([
    {
      order: 1,
      name: "RA Integral Hidayatullah",
      category: "Pendidikan Anak Dini",
      description: "Pendidikan anak usia dini berbasis pembentukan karakter Islami, hafalan doa harian, dan pembiasaan adab.",
      features: JSON.stringify(["Metode UMMI Cilik", "Karakter Islami", "Bermain & Belajar Rabbani"]),
      image: "/images/kampus-1.jpg",
    },
    {
      order: 2,
      name: "MI Integral Hidayatullah",
      category: "Madrasah Ibtidaiyah",
      description: "Pendidikan dasar terpadu yang memadukan Sains, Teknologi, Bahasa, dan Tahfizh Al-Qur'an.",
      features: JSON.stringify(["Target Hafalan 3 Juz", "Tahsin UMMI", "Sains Berbasis Tauhid"]),
      image: "/images/kampus-2.jpg",
    },
    {
      order: 3,
      name: "MTs Integral Hidayatullah",
      category: "Madrasah Tsanawiyah",
      description: "Pendidikan menengah pertama dengan penekanan pada kepemimpinan, kemandirian santri, dan bahasa Arab.",
      features: JSON.stringify(["Target Hafalan 5-10 Juz", "Bahasa Arab Dasar", "Pramuka & Silat"]),
      image: "/images/plang-pesantren.jpg",
    },
    {
      order: 4,
      name: "MA Integral Hidayatullah",
      category: "Madrasah Aliyah",
      description: "Pendidikan menengah atas pencetak kader dai dan calon mahasiswa perguruan tinggi Islam ternama.",
      features: JSON.stringify(["Kaderisasi Dai & Ulama", "Penguasaan Kitab Kuning", "Persiapan PTN/PTIN"]),
      image: "/images/visi-misi-poster.jpg",
    },
  ]);
  console.log("✅ Institutions seeded");

  // 5. Gallery Items
  await db.delete(galleryItems);
  await db.insert(galleryItems).values([
    {
      order: 1,
      title: "Gedung Kampus Pesantren",
      category: "Fasilitas Kampus",
      image: "/images/kampus-1.jpg",
      caption: "Kawasan pendidikan asri dan bebas gangguan lingkungan.",
    },
    {
      order: 2,
      title: "Masjid & Area Pembinaan",
      category: "Fasilitas Kampus",
      image: "/images/kampus-2.jpg",
      caption: "Pusat ibadah dan kajian keislaman santri Hidayatullah Buru.",
    },
    {
      order: 3,
      title: "Plang Resmi Pesantren Hidayatullah Buru",
      category: "Dokumentasi",
      image: "/images/plang-pesantren.jpg",
      caption: "Identitas kampus di Savanajaya, Kecamatan Waeapo.",
    },
    {
      order: 4,
      title: "Poster Resmi Visi & Misi",
      category: "Poster & Infografis",
      image: "/images/visi-misi-poster.jpg",
      caption: "Struktur kepengurusan dan arah kebijakan pesantren.",
    },
  ]);
  console.log("✅ Gallery Items seeded");

  // 6. Site Settings
  await db.delete(siteSettings);
  await db.insert(siteSettings).values([
    { key: "phone", value: "085243025306" },
    { key: "email", value: "hidayatullahburu@gmail.com" },
    { key: "address", value: "Jl. Waetona RT.02 RW.01 Savanajaya, Waeapo, Kabupaten Buru, Maluku" },
    { key: "map_coords", value: "-3.2970903, 127.0103851" },
  ]);
  console.log("✅ Site Settings seeded");

  console.log("🎉 Database seeding completed successfully!");
}

seed().catch((err) => {
  console.error("❌ Seed error:", err);
  process.exit(1);
});
