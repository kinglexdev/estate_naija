import { MapPin, BedDouble, Bath, Maximize2, ShieldCheck } from "lucide-react";

export interface Property {
  id: string;
  title: string;
  location: string;
  city: string;
  price: string;
  type: "For Sale" | "For Rent" | "Short Let" | "Investment";
  beds?: number;
  baths?: number;
  size?: string;
  imageColor: string;
  verified: boolean;
  tag?: string;
}

const typeColors: Record<Property["type"], string> = {
  "For Sale": "bg-[#0F766E] text-white",
  "For Rent": "bg-[#0369A1] text-white",
  "Short Let": "bg-violet-600 text-white",
  Investment: "bg-amber-600 text-white",
};

export default function PropertyCard({ property: p }: { property: Property }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-teal-50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
      {/* Image placeholder */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: p.imageColor }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 80 60" fill="none" className="w-24 h-24 opacity-20" aria-hidden="true">
            <rect x="10" y="20" width="60" height="35" rx="3" fill="white" />
            <polygon points="40,5 5,22 75,22" fill="white" />
            <rect x="30" y="35" width="20" height="20" fill="currentColor" className="text-white/40" />
          </svg>
        </div>
        {/* Listing type badge */}
        <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-lg ${typeColors[p.type]}`}>
          {p.type}
        </span>
        {/* Tag */}
        {p.tag && (
          <span className="absolute top-3 right-3 px-2.5 py-1 text-xs font-bold rounded-lg bg-amber-400 text-amber-900">
            {p.tag}
          </span>
        )}
        {/* Verified badge */}
        {p.verified && (
          <span className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-[#0F766E] text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-4">
        <p className="font-heading text-xl font-semibold text-[#0F766E]">{p.price}</p>
        <h3 className="text-sm font-semibold text-[#134E4A] mt-1 leading-snug group-hover:text-[#0F766E] transition-colors duration-200">
          {p.title}
        </h3>
        <div className="flex items-center gap-1 mt-1.5 text-xs text-[#475569]">
          <MapPin className="w-3.5 h-3.5 text-[#0F766E] flex-shrink-0" />
          <span>{p.location}, {p.city}</span>
        </div>

        {/* Features */}
        {(p.beds !== undefined || p.baths !== undefined || p.size) && (
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-teal-50">
            {p.beds !== undefined && (
              <span className="flex items-center gap-1 text-xs text-[#475569]">
                <BedDouble className="w-3.5 h-3.5 text-[#0F766E]" />
                {p.beds} Beds
              </span>
            )}
            {p.baths !== undefined && (
              <span className="flex items-center gap-1 text-xs text-[#475569]">
                <Bath className="w-3.5 h-3.5 text-[#0F766E]" />
                {p.baths} Baths
              </span>
            )}
            {p.size && (
              <span className="flex items-center gap-1 text-xs text-[#475569]">
                <Maximize2 className="w-3.5 h-3.5 text-[#0F766E]" />
                {p.size}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
