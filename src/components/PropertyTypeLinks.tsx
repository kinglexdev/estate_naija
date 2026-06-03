import { Home, Key, TrendingUp, Building2, MapPin, Zap } from "lucide-react";

const types = [
  { icon: Home, label: "Buy a Home", count: "1,840 listings", color: "bg-emerald-50 text-emerald-700", href: "#" },
  { icon: Key, label: "Rent a Home", count: "980 listings", color: "bg-blue-50 text-blue-700", href: "#" },
  { icon: Zap, label: "Short Let", count: "320 listings", color: "bg-amber-50 text-amber-700", href: "#" },
  { icon: TrendingUp, label: "Investment", count: "215 listings", color: "bg-violet-50 text-violet-700", href: "#" },
  { icon: MapPin, label: "Buy Land", count: "640 listings", color: "bg-orange-50 text-orange-700", href: "#" },
  { icon: Building2, label: "Commercial", count: "180 listings", color: "bg-slate-50 text-slate-700", href: "#" },
];

export default function PropertyTypeLinks() {
  return (
    <section className="py-14 bg-white" aria-label="Browse by property type">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {types.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className="group flex flex-col items-center gap-3 p-5 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer text-center"
            >
              <div className={`w-12 h-12 rounded-xl ${t.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <t.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-tight">{t.label}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
