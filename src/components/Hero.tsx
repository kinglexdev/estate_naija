import SearchBar from "./SearchBar";

const stats = [
  { value: "4,200+", label: "Active Listings" },
  { value: "₦180B+", label: "Transactions" },
  { value: "12,000+", label: "Happy Clients" },
  { value: "18", label: "Cities" },
];

export default function Hero({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  return (
    <section ref={heroRef} className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden" aria-label="Find your property">

      {/* Background image with overlay */}
      <div className="absolute inset-0">
        {/* Deep green → charcoal gradient — replace with next/image when real photos available */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D22] via-[#0a3320] to-[#111827]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#F59E0B]/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-32 pb-20">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 rounded-full backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-white/80 text-xs font-medium tracking-wide">Verified listings · Fraud-free transactions</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.1] tracking-tight mb-5">
          Find Your Dream Property
          <span className="block text-[#F59E0B] mt-1">Anywhere in Nigeria</span>
        </h1>
        <p className="text-center text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Trusted by thousands of Nigerians at home and in the diaspora. Every listing verified, every transaction supported.
        </p>

        {/* Search */}
        <div className="max-w-4xl mx-auto">
          <SearchBar />
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 backdrop-blur-sm px-6 py-5 text-center hover:bg-white/10 transition-colors duration-200">
              <p className="text-2xl lg:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-white/50 text-xs font-medium mt-0.5 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curve into white */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 64L1440 64L1440 20C1200 60 960 70 720 50C480 30 240 0 0 20L0 64Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
