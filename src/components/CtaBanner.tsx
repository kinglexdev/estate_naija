import { ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Free listing — no upfront cost",
  "Reach verified buyers across Nigeria",
  "Diaspora buyers actively searching",
  "Dedicated agent support",
];

export default function CtaBanner() {
  return (
    <section className="py-16 bg-[#F9FAFB] border-t border-gray-100" aria-label="List your property">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <p className="text-xs font-semibold text-[#0B4D2C] uppercase tracking-widest mb-3">Property Owners</p>
        <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-3">
          Have a Property to Sell or Rent?
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          List on EstateNaija and reach thousands of qualified buyers, renters, and diaspora investors actively searching right now.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
          {perks.map((p) => (
            <span key={p} className="flex items-center gap-2 text-sm text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-[#0B4D2C] flex-shrink-0" />
              {p}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#0B4D2C] hover:bg-[#093d23] text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer group">
            List Your Property
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold text-sm rounded-xl transition-all duration-200 cursor-pointer">
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
