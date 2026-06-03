"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Buy", children: ["Houses for Sale", "Apartments", "Duplexes", "Land", "Commercial"] },
  { label: "Rent", children: ["Houses for Rent", "Apartments", "Short Lets", "Serviced Apartments"] },
  { label: "Invest", href: "#" },
  { label: "Diaspora", href: "#" },
  { label: "Services", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block border-b border-gray-100 bg-[#0B4D2C] text-white">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-9 text-xs">
          <span className="text-white/70">Nigeria&apos;s Most Trusted Real Estate Platform</span>
          <div className="flex items-center gap-6">
            <a href="tel:+2341234567890" className="flex items-center gap-1.5 text-white/80 hover:text-white transition-colors cursor-pointer">
              <Phone className="w-3 h-3" />
              +234 123 456 7890
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">Diaspora Portal</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors cursor-pointer">Sign In</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 cursor-pointer flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#0B4D2C] flex items-center justify-center">
              <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M10 2L2 8v10h5v-6h6v6h5V8L10 2z" fill="white" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900 leading-none tracking-tight">Estate</span>
              <span className="font-bold text-lg text-[#0B4D2C] leading-none tracking-tight">Naija</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4D2C] hover:bg-gray-50 rounded-lg transition-all duration-150 cursor-pointer">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-200/60 py-2 z-50">
                      {link.children.map((c) => (
                        <a key={c} href="#" className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#0B4D2C] hover:bg-gray-50 transition-all duration-100 cursor-pointer first:rounded-t-xl last:rounded-b-xl">
                          {c}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={link.label} href={link.href} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0B4D2C] hover:bg-gray-50 rounded-lg transition-all duration-150 cursor-pointer">
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              Sign In
            </a>
            <a href="#" className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0B4D2C] hover:bg-[#093d23] rounded-xl transition-colors duration-200 cursor-pointer">
              List Property
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href ?? "#"} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:text-[#0B4D2C] hover:bg-gray-50 rounded-xl transition-all cursor-pointer">
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a href="#" className="block w-full text-center py-3 text-sm font-semibold text-white bg-[#0B4D2C] hover:bg-[#093d23] rounded-xl transition-colors cursor-pointer">
              List Property
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
