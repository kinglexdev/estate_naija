"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Buy", children: ["Houses", "Apartments", "Land", "Commercial"] },
  { label: "Rent", children: ["Long-Term", "Short Lets", "Serviced Apts"] },
  { label: "Invest", href: "#" },
  { label: "Diaspora", href: "#" },
  { label: "Services", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-[#f0a500] rounded-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-sm" />
              <div className="relative w-8 h-8 rounded-lg bg-[#f0a500]/10 border border-[#f0a500]/30 flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4" aria-hidden="true">
                  <path d="M10 2L2 8v10h5v-6h6v6h5V8L10 2z" fill="#f0a500" />
                </svg>
              </div>
            </div>
            <span className="font-heading text-base font-semibold tracking-wider text-white">
              Estate<span className="text-[#f0a500]">Naija</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-44 bg-[#18181b] border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-1.5 z-50">
                      {link.children.map((c) => (
                        <a key={c} href="#" className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-150 cursor-pointer">
                          {c}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.label} href={link.href} className="px-4 py-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer">
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer px-3 py-2">
              Sign In
            </a>
            <a
              href="#"
              className="relative px-5 py-2.5 text-sm font-semibold text-black bg-[#f0a500] hover:bg-[#d4930a] rounded-xl transition-all duration-200 cursor-pointer overflow-hidden group"
            >
              <span className="relative z-10">List Property</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#111113] border border-white/[0.06] rounded-2xl mb-4 py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href ?? "#"} className="block px-4 py-3 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-150 cursor-pointer">
                {link.label}
              </a>
            ))}
            <div className="px-2 pt-3 border-t border-white/[0.06] mt-2">
              <a href="#" className="block w-full text-center py-3 text-sm font-semibold text-black bg-[#f0a500] hover:bg-[#d4930a] rounded-xl transition-colors duration-200 cursor-pointer">
                List Property
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
