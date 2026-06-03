import { ShieldCheck, Eye, FileCheck, Users, HeadphonesIcon, Globe } from "lucide-react";

const indicators = [
  {
    icon: ShieldCheck,
    title: "Title Verification",
    desc: "We verify C of O, Governor's Consent, Deed of Assignment, and all title documents before listing.",
  },
  {
    icon: Eye,
    title: "Inspection Support",
    desc: "Physical, virtual, and remote inspection services — perfect for diaspora buyers.",
  },
  {
    icon: FileCheck,
    title: "Transaction Transparency",
    desc: "Full documentation, offer tracking, and escrow guidance at every step.",
  },
  {
    icon: Users,
    title: "Vetted Agents",
    desc: "All agents on the platform are background-checked and professionally certified.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    desc: "Speak to a real estate professional any time — no bots, no runarounds.",
  },
  {
    icon: Globe,
    title: "Diaspora Services",
    desc: "Tailored services for Nigerians abroad: remote verification, trusted acquisition support.",
  },
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-[#F0FDFA]" aria-label="Why trust Estate Naija">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest mb-2">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#134E4A] leading-tight mb-4">
            Built on Trust & Transparency
          </h2>
          <p className="text-[#475569] text-sm leading-relaxed">
            Nigeria&apos;s real estate market can be complex. We protect you with verified data,
            professional support, and complete transaction transparency.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {indicators.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-6 border border-teal-100 hover:border-[#0F766E]/30 hover:shadow-md transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-[#0F766E] flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-[#0F766E] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-base font-semibold text-[#134E4A] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Credential strip */}
        <div className="mt-14 bg-white rounded-2xl border border-teal-100 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-[#475569] text-center sm:text-left">
              Trusted by thousands of Nigerians at home and in the diaspora
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "NIESV", sublabel: "Member" },
                { label: "LASRERA", sublabel: "Registered" },
                { label: "CAC", sublabel: "Incorporated" },
                { label: "ISO 9001", sublabel: "Certified" },
              ].map((badge) => (
                <div key={badge.label} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0F766E]" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold text-[#134E4A] mt-1">{badge.label}</p>
                  <p className="text-xs text-[#475569]">{badge.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
