"use client";

import { useState } from "react";
import { Search, MapPin, Home, Tag, BedDouble, ChevronDown } from "lucide-react";

const tabs = ["Buy", "Rent", "Short Let", "Investment"] as const;
type Tab = (typeof tabs)[number];

const locations = ["Lagos Island", "Lekki", "Victoria Island", "Ikoyi", "Ikeja", "Abuja", "Gwarinpa", "Maitama", "Asokoro", "Port Harcourt", "GRA", "Trans-Amadi", "Enugu", "Owerri", "Ibadan"];
const propertyTypes = ["House", "Apartment / Flat", "Duplex", "Detached House", "Semi-Detached", "Terraced", "Land", "Commercial"];
const priceRanges: Record<Tab, string[]> = {
  Buy: ["Under ₦5M", "₦5M – ₦20M", "₦20M – ₦50M", "₦50M – ₦100M", "₦100M – ₦300M", "Above ₦300M"],
  Rent: ["Under ₦500K/yr", "₦500K – ₦1.5M/yr", "₦1.5M – ₦3M/yr", "₦3M – ₦6M/yr", "Above ₦6M/yr"],
  "Short Let": ["Under ₦30K/night", "₦30K – ₦80K/night", "₦80K – ₦200K/night", "Above ₦200K/night"],
  Investment: ["Under ₦10M", "₦10M – ₦50M", "₦50M – ₦150M", "Above ₦150M"],
};
const bedroomOptions = ["Studio", "1+", "2+", "3+", "4+", "5+"];

function Select({ icon, label, options, placeholder }: { icon: React.ReactNode; label: string; options: string[]; placeholder: string }) {
  return (
    <div className="flex-1 min-w-0 px-4 py-3">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-0.5">{label}</p>
      <div className="relative flex items-center gap-2">
        <span className="text-gray-400 flex-shrink-0">{icon}</span>
        <select className="w-full bg-transparent text-sm font-medium text-gray-800 appearance-none focus:outline-none cursor-pointer pr-5" aria-label={label}>
          <option value="">{placeholder}</option>
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="absolute right-0 w-3.5 h-3.5 text-gray-400 pointer-events-none flex-shrink-0" />
      </div>
    </div>
  );
}

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const [activeTab, setActiveTab] = useState<Tab>("Buy");

  return (
    <div className="w-full">
      {/* Tabs — hidden in compact mode */}
      {!compact && (
        <div className="flex gap-1 mb-3">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === t
                  ? "bg-white text-[#0B4D2C] shadow-sm"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* Search card */}
      <div className={`bg-white rounded-2xl shadow-xl shadow-black/10 flex flex-col lg:flex-row lg:items-stretch divide-y lg:divide-y-0 lg:divide-x divide-gray-100 overflow-hidden ${compact ? "shadow-md" : ""}`}>
        <Select icon={<MapPin className="w-4 h-4" />} label="Location" options={locations} placeholder="Where?" />
        <Select icon={<Home className="w-4 h-4" />} label="Property Type" options={propertyTypes} placeholder="Any type" />
        <Select icon={<Tag className="w-4 h-4" />} label="Price Range" options={priceRanges[activeTab]} placeholder="Any price" />
        <Select icon={<BedDouble className="w-4 h-4" />} label="Bedrooms" options={bedroomOptions} placeholder="Any" />

        {/* Search button */}
        <div className="flex items-center p-2.5">
          <button className="flex items-center gap-2 px-7 py-3.5 bg-[#0B4D2C] hover:bg-[#093d23] text-white text-sm font-semibold rounded-xl transition-colors duration-200 cursor-pointer w-full lg:w-auto justify-center whitespace-nowrap">
            <Search className="w-4 h-4" />
            Search
          </button>
        </div>
      </div>

      {/* Popular searches — only in hero */}
      {!compact && (
        <div className="flex flex-wrap items-center gap-2 mt-4">
          <span className="text-white/60 text-xs font-medium">Popular:</span>
          {["Lekki Phase 1", "Maitama Abuja", "GRA Port Harcourt", "Victoria Island", "Enugu GRA"].map((s) => (
            <button key={s} className="text-xs px-3.5 py-1.5 bg-white/15 hover:bg-white/25 text-white rounded-full border border-white/20 transition-all duration-150 cursor-pointer backdrop-blur-sm">
              {s}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
