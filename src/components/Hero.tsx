import SearchBar from "./SearchBar";

const stats = [
  { value: "4,200+", label: "Properties Listed" },
  { value: "₦180B+", label: "Transactions Facilitated" },
  { value: "12,000+", label: "Happy Clients" },
  { value: "18", label: "Cities Covered" },
];

export default function Hero({
  heroRef,
}: {
  heroRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Hero — find your property"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D5C54] via-[#0F766E] to-[#134E4A]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs font-semibold tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
            Nigeria&apos;s Trusted Real Estate Platform
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-center text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-4">
          Find Your Perfect<br />
          <span className="text-[#5EEAD4]">Nigerian Property</span>
        </h1>
        <p className="text-center text-white/75 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Buy, rent, or invest in verified properties across Lagos, Abuja, Port Harcourt, and beyond —
          with full transaction support and fraud protection.
        </p>

        {/* Search */}
        <div className="max-w-5xl mx-auto mb-12">
          <SearchBar />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-2xl lg:text-3xl font-bold text-white">{s.value}</p>
              <p className="text-white/60 text-xs font-medium mt-1 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 lg:h-20">
          <path d="M0 80L48 69.3C96 59 192 37 288 32C384 27 480 37 576 48C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
