import { ShieldCheck, FileCheck, Users, Clock } from "lucide-react";

const points = [
  { icon: ShieldCheck, label: "Title Verified", desc: "C of O, Gov's Consent & more" },
  { icon: FileCheck, label: "Legal Support", desc: "End-to-end transaction guidance" },
  { icon: Users, label: "Vetted Agents", desc: "Background-checked professionals" },
  { icon: Clock, label: "Fast Response", desc: "Average reply under 2 hours" },
];

export default function TrustBanner() {
  return (
    <section className="bg-[#F9FAFB] border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.label} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B4D2C]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <p.icon className="w-5 h-5 text-[#0B4D2C]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{p.label}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
