"use client";

import { useState } from "react";
import { Search, MapPin, Home, Tag, BedDouble, ChevronDown } from "lucide-react";

const locations = [
  "Lagos", "Abuja", "Port Harcourt", "Enugu", "Owerri",
  "Uyo", "Calabar", "Benin City", "Asaba", "Kano", "Ibadan",
];

const propertyTypes = [
  "House", "Apartment / Flat", "Duplex", "Detached House",
  "Semi-Detached", "Terraced", "Land", "Commercial",
];

const listingTypes = ["For Sale", "For Rent", "Short Let", "Investment"];

const priceRanges = [
  "Any Price",
  "Under ₦5M",
  "₦5M – ₦20M",
  "₦20M – ₦50M",
  "₦50M – ₦100M",
  "₦100M – ₦300M",
  "Above ₦300M",
];

const bedroomOptions = ["Any", "1+", "2+", "3+", "4+", "5+"];

interface SelectFieldProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}

function SelectField({ icon, label, value, onChange, options, placeholder }: SelectFieldProps) {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-xs font-semibold text-[#0F766E] uppercase tracking-wider mb-1 px-1">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0F766E] pointer-events-none">
          {icon}
        </span>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none bg-transparent pl-9 pr-8 py-2.5 text-sm font-medium text-[#134E4A] focus:outline-none cursor-pointer"
          aria-label={label}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475569] pointer-events-none" />
      </div>
    </div>
  );
}

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [listingType, setListingType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  return (
    <div
      className={`bg-white rounded-2xl shadow-xl border border-teal-100 ${
        compact ? "p-3" : "p-4 lg:p-5"
      }`}
    >
      <div className="flex flex-col lg:flex-row lg:items-end gap-3">
        {/* Listing type tabs */}
        <div className="flex gap-1 lg:hidden mb-1">
          {listingTypes.map((t) => (
            <button
              key={t}
              onClick={() => setListingType(t)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                listingType === t
                  ? "bg-[#0F766E] text-white"
                  : "bg-teal-50 text-[#0F766E] hover:bg-teal-100"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-row flex-1 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-teal-100 border border-teal-100 rounded-xl overflow-hidden">
          <SelectField
            icon={<MapPin className="w-4 h-4" />}
            label="Location"
            value={location}
            onChange={setLocation}
            options={locations}
            placeholder="Any location"
          />

          <SelectField
            icon={<Home className="w-4 h-4" />}
            label="Property Type"
            value={propertyType}
            onChange={setPropertyType}
            options={propertyTypes}
            placeholder="Any type"
          />

          <div className="hidden lg:block">
            <SelectField
              icon={<Tag className="w-4 h-4" />}
              label="Listing"
              value={listingType}
              onChange={setListingType}
              options={listingTypes}
              placeholder="Sale / Rent"
            />
          </div>

          <SelectField
            icon={
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/>
              </svg>
            }
            label="Price Range"
            value={priceRange}
            onChange={setPriceRange}
            options={priceRanges}
            placeholder="Any price"
          />

          <SelectField
            icon={<BedDouble className="w-4 h-4" />}
            label="Bedrooms"
            value={bedrooms}
            onChange={setBedrooms}
            options={bedroomOptions}
            placeholder="Any"
          />
        </div>

        <button
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F766E] hover:bg-[#0D6962] text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer flex-shrink-0 lg:min-w-[130px]"
          aria-label="Search properties"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>

      {/* Popular searches */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-[#475569] font-medium">Popular:</span>
        {["Lagos Mainland", "Lekki", "Gwarinpa", "GRA Port Harcourt", "Enugu GRA"].map((s) => (
          <button
            key={s}
            className="text-xs px-3 py-1 bg-teal-50 hover:bg-teal-100 text-[#0F766E] font-medium rounded-full transition-colors duration-150 cursor-pointer"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  );
}
