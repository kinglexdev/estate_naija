import { ShieldCheck, Eye, FileCheck, Users, HeadphonesIcon, Globe } from "lucide-react";

const indicators = [
  { icon: ShieldCheck, title: "Title Verification", desc: "We verify C of O, Governor's Consent, Deed of Assignment, and all title documents before listing any property." },
  { icon: Eye, title: "Inspection Support", desc: "Physical, virtual, and remote inspections — designed for diaspora buyers who can't visit in person." },
  { icon: FileCheck, title: "Transaction Transparency", desc: "Full documentation trail, offer tracking, and escrow guidance at every stage of your transaction." },
  { icon: Users, title: "Vetted Agents Only", desc: "Every agent on our platform is background-checked, certified, and continuously reviewed." },
  { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Speak to a real estate professional any time — real humans, not bots." },
  { icon: Globe, title: "Diaspora Specialists", desc: "Tailored services for Nigerians abroad: remote verification, trusted acquisition, and asset management." },
];

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-[#F9FAFB]" aria-label="Why trust EstateNaija">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-xs font-semibold text-[#0B4D2C] uppercase tracking-widest mb-3">Why Choose Us</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">Built on Trust & Transparency</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nigeria's real estate market can be complex. We protect every transaction with verified data,
            professional support, and complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {indicators.map((item) => (
            <div key={item.title} className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#0B4D2C]/6 flex items-center justify-center mb-4 group-hover:bg-[#0B4D2C] transition-colors duration-300">
                <item.icon className="w-5 h-5 text-[#0B4D2C] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Credential strip */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-100 px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm font-medium text-gray-500 text-center sm:text-left">
              Accredited, registered, and trusted by thousands of Nigerians
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {[
                { label: "NIESV", sub: "Member" },
                { label: "LASRERA", sub: "Registered" },
                { label: "CAC", sub: "Incorporated" },
                { label: "ISO 9001", sub: "Certified" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#0B4D2C]" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-bold text-gray-800">{b.label}</p>
                  <p className="text-[10px] text-gray-400">{b.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
