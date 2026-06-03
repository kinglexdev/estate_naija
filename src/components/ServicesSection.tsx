import { Home, Key, TrendingUp, ClipboardList, Globe, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    desc: "Full support from search through closing — offers, negotiations, and documentation.",
    cta: "Browse for Sale",
    accent: "bg-emerald-50",
    iconColor: "text-emerald-700",
  },
  {
    icon: Key,
    title: "Rentals & Short Lets",
    desc: "Long-term rentals and short lets across major cities. Verified landlords only.",
    cta: "Browse Rentals",
    accent: "bg-blue-50",
    iconColor: "text-blue-700",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Land banking, off-plan developments, and yield-generating properties for investors.",
    cta: "View Investments",
    accent: "bg-amber-50",
    iconColor: "text-amber-700",
  },
  {
    icon: ClipboardList,
    title: "Property Management",
    desc: "Tenant screening, rent collection, maintenance coordination, and monthly reporting.",
    cta: "Learn More",
    accent: "bg-violet-50",
    iconColor: "text-violet-700",
  },
  {
    icon: Globe,
    title: "Diaspora Services",
    desc: "Safe property acquisition for Nigerians abroad. Remote inspection, title verification.",
    cta: "Diaspora Portal",
    accent: "bg-teal-50",
    iconColor: "text-teal-700",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    desc: "Office spaces, warehouses, retail outlets, and development sites across Nigeria.",
    cta: "View Commercial",
    accent: "bg-slate-50",
    iconColor: "text-slate-700",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#0B4D2C] uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">More Than a Listing Site</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We are an executing real estate company — helping you find, acquire, manage,
            and grow your Nigerian property portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80 transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className={`w-11 h-11 ${s.accent} rounded-xl flex items-center justify-center mb-4`}>
                <s.icon className={`w-5 h-5 ${s.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-[#0B4D2C] group-hover:gap-2.5 transition-all duration-200">
                {s.cta}
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
