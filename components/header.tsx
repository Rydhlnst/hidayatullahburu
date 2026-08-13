"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navItems = [
  { label: "BERANDA", href: "/" },
  { label: "PROFIL", href: "#profil" },
  { label: "VISI & MISI", href: "#visi-misi" },
  { label: "KURIKULUM", href: "#kurikulum" },
  {
    label: "LEMBAGA",
    href: "#lembaga",
    children: [
      { label: "Pendidikan Integral (RA/MI/MTs/MA)", href: "#lembaga" },
      { label: "Tahfizh & Rumah Qur'an", href: "#lembaga" },
      { label: "Dakwah & Sosial Keumatan", href: "#lembaga" },
    ],
  },
  { label: "GALERI", href: "#galeri" },
  { label: "LOKASI", href: "#lokasi" },
  { label: "KONTAK", href: "#kontak" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-emerald-950 text-white text-xs sm:text-sm border-b border-emerald-900">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <a
            href="https://wa.me/6285243025306"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>0852-4302-5306</span>
          </a>
          <a
            href="https://wa.me/6285243025306"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-600 px-3 py-1 rounded-none text-xs transition-colors font-medium"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/images/logo-hidayatullah.png"
                alt="Logo Hidayatullah"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading text-sm sm:text-base font-bold text-emerald-900 leading-tight">
                PESANTREN HIDAYATULLAH
              </h1>
              <p className="text-xs text-emerald-700">Kabupaten Buru</p>
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-emerald-900 hover:bg-emerald-50 rounded-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => item.children && setOpenDropdown(null)}
              >
                {item.children ? (
                  <>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-none transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 bg-white rounded-none shadow-lg border py-1 min-w-[200px] z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50 rounded-none transition-colors block"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <nav className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-3 text-left text-gray-700 font-medium border-b border-gray-100"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 pb-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-sm text-gray-600 hover:text-emerald-700"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-gray-700 font-medium border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
