import { FileSearch, Video, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  { icon: FileSearch, num: "01", title: "Browse & Select", desc: "Browse verified listings with full documentation online." },
  { icon: Video, num: "02", title: "Live Virtual Tour", desc: "Our agent walks you through the property in real time via video call." },
  { icon: ShieldCheck, num: "03", title: "Title Verification", desc: "We confirm all documents — C of O, Survey, Deed — are authentic." },
  { icon: CheckCircle2, num: "04", title: "Secure & Close", desc: "Complete acquisition with our legal and transaction team by your side." },
];

export default function DiasporaSection() {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-label="Diaspora property services">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-[#0B4D2C] rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left */}
            <div className="lg:w-5/12 p-10 lg:p-14 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-white/70 text-xs font-medium mb-6 w-fit">
                <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full" />
                For Nigerians in the Diaspora
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 tracking-tight">
                Buy Nigerian Property<br />
                <span className="text-[#F59E0B]">From Anywhere</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Distance shouldn&apos;t stop you from building wealth back home.
                We provide the verification, inspection, and transaction support you need — without stepping foot in Nigeria.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer">
                  Diaspora Portal
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="px-6 py-3 border border-white/20 hover:border-white/40 text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer">
                  Speak to an Agent
                </a>
              </div>
            </div>

            {/* Right — steps */}
            <div className="lg:w-7/12 p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-4 content-center">
              {steps.map((s) => (
                <div key={s.num} className="bg-white/8 border border-white/10 rounded-2xl p-5 hover:bg-white/12 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <s.icon className="w-5 h-5 text-[#F59E0B]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#F59E0B] text-xs font-bold mb-0.5">Step {s.num}</p>
                      <h3 className="text-white text-sm font-semibold mb-1">{s.title}</h3>
                      <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
