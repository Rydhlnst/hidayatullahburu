"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Image as ImageIcon,
  BookOpen,
  Building2,
  Images,
  LogOut,
  ArrowUpRight,
} from "lucide-react";

const sidebarLinks = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "Hero Carousel", href: "/admin/hero", icon: ImageIcon },
  { label: "Galeri & R2 Upload", href: "/admin/gallery", icon: Images },
  { label: "Kurikulum & Visi", href: "/admin/curriculum", icon: BookOpen },
  { label: "Unit Lembaga", href: "/admin/institutions", icon: Building2 },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // Do not render dashboard sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-emerald-950 text-white flex-shrink-0 border-r border-emerald-900">
        <div className="p-5 border-b border-emerald-900 flex items-center gap-3">
          <div className="relative w-10 h-10 bg-white rounded-none p-1">
            <Image
              src="/images/logo-hidayatullah.png"
              alt="Logo Hidayatullah"
              fill
              className="object-contain p-0.5"
            />
          </div>
          <div>
            <h2 className="font-heading font-bold text-sm leading-snug">CMS ADMIN</h2>
            <p className="text-[11px] text-emerald-400">Hidayatullah Buru</p>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 text-xs font-bold uppercase tracking-wider rounded-none transition-colors ${
                  isActive
                    ? "bg-emerald-800 text-white border-l-4 border-emerald-400"
                    : "text-emerald-100/70 hover:bg-emerald-900 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 mt-auto border-t border-emerald-900 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-between px-4 py-2.5 bg-emerald-900/60 hover:bg-emerald-900 text-emerald-200 text-xs font-medium rounded-none transition-colors"
          >
            <span>Lihat Website Utama</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2.5 bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-medium rounded-none transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar / Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">{children}</main>
    </div>
  );
}
