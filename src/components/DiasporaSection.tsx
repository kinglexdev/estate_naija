import { ShieldCheck, VideoIcon, FileSearch, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Browse & Select",
    desc: "Browse verified listings online. Our team provides detailed reports and documentation.",
  },
  {
    icon: VideoIcon,
    step: "02",
    title: "Remote Inspection",
    desc: "Schedule a live virtual tour. Our agents walk you through the property in real time.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Title Verification",
    desc: "We verify all title documents — C of O, Survey, Deed — and confirm authenticity.",
  },
  {
    icon: ArrowRight,
    step: "04",
    title: "Secure & Close",
    desc: "Complete your acquisition securely with our legal and transaction support team.",
  },
];

export default function DiasporaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0D5C54] to-[#134E4A] relative overflow-hidden" aria-label="Diaspora services">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          {/* Left content */}
          <div className="lg:w-5/12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 bg-[#5EEAD4] rounded-full" />
              For Nigerians in the Diaspora
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-white leading-tight mb-4">
              Buy Nigerian Property<br />
              <span className="text-[#5EEAD4]">From Anywhere in the World</span>
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Distance shouldn&apos;t stop you from building wealth back home. We provide the verification,
              inspection, and transaction support you need to acquire property safely — without stepping foot in Nigeria.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#"
                className="px-6 py-3 bg-[#14B8A6] hover:bg-[#0F766E] text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Diaspora Portal
              </a>
              <a
                href="#"
                className="px-6 py-3 border border-white/30 hover:border-white/60 text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer"
              >
                Speak to an Agent
              </a>
            </div>
          </div>

          {/* Steps */}
          <div className="lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((s) => (
              <div
                key={s.step}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center flex-shrink-0">
                    <s.icon className="w-5 h-5 text-[#5EEAD4]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[#5EEAD4] text-xs font-bold mb-1">Step {s.step}</p>
                    <h3 className="text-white font-semibold text-sm mb-1">{s.title}</h3>
                    <p className="text-white/60 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
