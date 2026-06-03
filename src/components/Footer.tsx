import { MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  Buy: ["Houses for Sale", "Apartments", "Land for Sale", "Commercial", "New Developments"],
  Rent: ["Houses for Rent", "Apartments for Rent", "Short Lets", "Commercial Spaces"],
  Services: ["Property Management", "Inspection Services", "Diaspora Services", "Investment Advisory", "Valuation"],
  Company: ["About Us", "Blog", "Careers", "Press", "Contact"],
};

export default function Footer() {
  return (
    <footer className="bg-[#0D2B27] text-white" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#0F766E] flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" aria-hidden="true">
                  <path d="M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3V9.5z" fill="currentColor" />
                </svg>
              </div>
              <span className="font-heading text-lg font-semibold tracking-wide">
                Estate<span className="text-[#14B8A6]">Naija</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Nigeria&apos;s trusted real estate marketplace. Buy, rent, manage, and invest with confidence.
            </p>
            <div className="space-y-2">
              <a href="tel:+2341234567890" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-150 cursor-pointer">
                <Phone className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
                +234 123 456 7890
              </a>
              <a href="mailto:hello@estatenaija.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-150 cursor-pointer">
                <Mail className="w-4 h-4 text-[#14B8A6]" aria-hidden="true" />
                hello@estatenaija.com
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-[#14B8A6] flex-shrink-0" aria-hidden="true" />
                <span>Lagos · Abuja · Port Harcourt</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-heading text-xs font-semibold text-white uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150 cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} EstateNaija Ltd. All rights reserved. RC: 1234567
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/40 hover:text-white/70 transition-colors duration-150 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
