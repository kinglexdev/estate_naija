import { Building2, Key, TrendingUp, ClipboardList, Search, Globe } from "lucide-react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Property Sales",
    desc: "Find and acquire residential, commercial, or land properties with our full transaction support.",
    cta: "Browse for Sale",
    color: "bg-teal-50",
    iconColor: "text-[#0F766E]",
  },
  {
    icon: Key,
    title: "Rentals & Lets",
    desc: "Long-term rentals and short lets across major Nigerian cities. Verified landlords only.",
    cta: "Browse Rentals",
    color: "bg-blue-50",
    iconColor: "text-[#0369A1]",
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    desc: "Land banking, off-plan developments, and yield-generating properties for investors.",
    cta: "View Investments",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: ClipboardList,
    title: "Property Management",
    desc: "Let us manage your property — tenant screening, rent collection, maintenance, and reporting.",
    cta: "Learn More",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Globe,
    title: "Diaspora Services",
    desc: "Remote property acquisition, title verification, and trusted management for Nigerians abroad.",
    cta: "Diaspora Portal",
    color: "bg-teal-50",
    iconColor: "text-[#0F766E]",
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    desc: "Office spaces, warehouses, retail outlets, and development sites across Nigeria.",
    cta: "View Commercial",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white" aria-label="Our services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest mb-2">
            Our Services
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#134E4A] leading-tight mb-4">
            More Than a Listing Site
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            We are an executing real estate company — we help you find, acquire, manage, and grow
            your Nigerian property portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#0F766E]/20 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center mb-4`}>
                <s.icon className={`w-6 h-6 ${s.iconColor}`} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-base font-semibold text-[#134E4A] mb-2">{s.title}</h3>
              <p className="text-sm text-[#475569] leading-relaxed flex-1">{s.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#0F766E] group-hover:gap-2 transition-all duration-200">
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
