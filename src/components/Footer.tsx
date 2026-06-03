import { Phone, Mail, MapPin } from "lucide-react";

const links = {
  Buy: ["Houses for Sale", "Apartments", "Duplexes", "Land", "Commercial"],
  Rent: ["Houses for Rent", "Apartments for Rent", "Short Lets", "Serviced Apartments"],
  Services: ["Property Management", "Inspection Services", "Diaspora Services", "Investment Advisory"],
  Company: ["About Us", "Blog", "Careers", "Contact Us", "Privacy Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#0B4D2C] flex items-center justify-center">
                <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
                  <path d="M10 2L2 8v10h5v-6h6v6h5V8L10 2z" fill="white" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-white">Estate</span>
                <span className="font-bold text-lg text-[#F59E0B]">Naija</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Nigeria&apos;s most trusted real estate platform. Buy, rent, manage, and invest with confidence.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+2341234567890" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Phone className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                +234 123 456 7890
              </a>
              <a href="mailto:hello@estatenaija.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                <Mail className="w-4 h-4 text-[#F59E0B]" aria-hidden="true" />
                hello@estatenaija.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" aria-hidden="true" />
                Lagos · Abuja · Port Harcourt
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">{cat}</h3>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors duration-150 cursor-pointer">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} EstateNaija Limited. All rights reserved. RC: 1234567
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((t) => (
              <a key={t} href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
