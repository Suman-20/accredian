"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "Stats", id: "stats" },
  { name: "Clients", id: "clients" },
  { name: "Accredian Edge", id: "edge" },
  { name: "CAT", id: "cat" },
  { name: "How It Works", id: "how-it-works" },
  { name: "FAQs", id: "faqs" },
  { name: "Testimonials", id: "testimonials" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur z-50 border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-5 lg:px-8">
          {/* Logo */}
          <Link href="/" aria-label="Accredian home" className="shrink-0">
            <Image
              src="/logo.jpg"
              alt="Accredian"
              width={200}
              height={60}
              priority
              className="h-auto w-36 sm:w-44"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full bg-slate-50 px-2 py-2">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-sm text-slate-600 font-semibold hover:bg-white hover:text-blue-600 hover:shadow-sm transition"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="lg:hidden rounded-xl p-2 text-3xl text-slate-700 hover:bg-slate-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 lg:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setMenuOpen(false)}
        ></div>

        {/* Floating Card */}
        <div
          className={`absolute top-24 right-5 w-[calc(100%-2.5rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 transition-all duration-300 ${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${
                  index === 0
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600 w-fit pb-1"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}

          </nav>
        </div>
      </div>
    </>
  );
}
