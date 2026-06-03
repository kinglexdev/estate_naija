import { MapPin, BedDouble, Bath, Maximize2, ShieldCheck, Heart } from "lucide-react";

export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  price: string;
  priceNote?: string;
  type: "For Sale" | "For Rent" | "Short Let" | "Investment";
  beds?: number;
  baths?: number;
  size?: string;
  imageBg: string;
  verified: boolean;
  tag?: string;
  tagColor?: string;
}

const typeBadge: Record<Property["type"], string> = {
  "For Sale": "bg-emerald-100 text-emerald-700",
  "For Rent": "bg-blue-100 text-blue-700",
  "Short Let": "bg-amber-100 text-amber-700",
  Investment: "bg-violet-100 text-violet-700",
};

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300 cursor-pointer flex flex-col">

      {/* Image */}
      <div className="relative h-56 overflow-hidden" style={{ background: p.imageBg }}>
        {/* Placeholder visual */}
        <div className="absolute inset-0 flex items-end p-4">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${typeBadge[p.type]}`}>
            {p.type}
          </span>
          {p.tag && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${p.tagColor ?? "bg-amber-400 text-amber-900"}`}>
              {p.tag}
            </span>
          )}
        </div>

        {/* Save button */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-150 cursor-pointer" aria-label="Save property">
          <Heart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
        </button>

        {/* Verified */}
        {p.verified && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/95 rounded-lg shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700">Verified</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="text-xl font-bold text-gray-900 leading-tight">{p.price}</p>
          {p.priceNote && <span className="text-xs text-gray-400 font-medium mt-1 flex-shrink-0">{p.priceNote}</span>}
        </div>

        <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-1.5 group-hover:text-[#0B4D2C] transition-colors duration-200 line-clamp-2">
          {p.title}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
          <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
          <span>{p.address}, {p.city}</span>
        </div>

        {(p.beds !== undefined || p.baths !== undefined || p.size) && (
          <div className="flex items-center gap-4 pt-3 border-t border-gray-100 mt-auto">
            {p.beds !== undefined && (
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <BedDouble className="w-3.5 h-3.5 text-gray-400" />
                {p.beds} Beds
              </span>
            )}
            {p.baths !== undefined && (
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Bath className="w-3.5 h-3.5 text-gray-400" />
                {p.baths} Baths
              </span>
            )}
            {p.size && (
              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                <Maximize2 className="w-3.5 h-3.5 text-gray-400" />
                {p.size}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
