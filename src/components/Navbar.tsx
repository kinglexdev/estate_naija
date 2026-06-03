"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  {
    label: "Buy",
    href: "#",
    children: ["Houses for Sale", "Apartments", "Land", "Commercial"],
  },
  {
    label: "Rent",
    href: "#",
    children: ["Houses for Rent", "Apartments", "Short Lets", "Commercial"],
  },
  { label: "Invest", href: "#" },
  { label: "Services", href: "#" },
  { label: "Diaspora", href: "#" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-teal-50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                <path d="M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3V9.5z" fill="currentColor" />
              </svg>
            </div>
            <span
              className={`font-heading text-lg font-semibold tracking-wide ${
                scrolled ? "text-[#134E4A]" : "text-white"
              }`}
            >
              Estate<span className="text-[#14B8A6]">Naija</span>
            </span>
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
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      scrolled
                        ? "text-[#134E4A] hover:bg-teal-50 hover:text-[#0F766E]"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-lg border border-teal-50 py-2 z-50">
                      {link.children.map((child) => (
                        <a
                          key={child}
                          href="#"
                          className="block px-4 py-2.5 text-sm text-[#134E4A] hover:bg-teal-50 hover:text-[#0F766E] transition-colors duration-150 cursor-pointer"
                        >
                          {child}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    scrolled
                      ? "text-[#134E4A] hover:bg-teal-50 hover:text-[#0F766E]"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* CTA area */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+2341234567890"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                scrolled ? "text-[#0F766E]" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+234 123 456 7890</span>
            </a>
            <a
              href="#"
              className="px-5 py-2.5 bg-[#0F766E] hover:bg-[#0D6962] text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
            >
              List Property
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
              scrolled
                ? "text-[#134E4A] hover:bg-teal-50"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-teal-50 py-4 px-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href ?? "#"}
                className="block px-4 py-3 text-sm font-medium text-[#134E4A] rounded-lg hover:bg-teal-50 hover:text-[#0F766E] transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-teal-50 mt-3">
              <a
                href="#"
                className="block w-full text-center px-5 py-3 bg-[#0F766E] hover:bg-[#0D6962] text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer"
              >
                List Property
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
