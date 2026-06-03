"use client";

import { useState } from "react";
import PropertyCard, { Property } from "./PropertyCard";
import { ArrowRight } from "lucide-react";

const allProperties: Property[] = [
  {
    id: "1",
    title: "4-Bedroom Detached Duplex with BQ, C of O Title",
    address: "Lekki Phase 1",
    city: "Lagos",
    price: "₦185,000,000",
    type: "For Sale",
    beds: 4, baths: 4, size: "350 sqm",
    imageBg: "linear-gradient(135deg,#134e2a 0%,#0b3d1e 100%)",
    verified: true, tag: "New Listing",
  },
  {
    id: "2",
    title: "3-Bedroom Serviced Apartment, Fully Furnished",
    address: "Maitama",
    city: "Abuja",
    price: "₦4,500,000",
    priceNote: "per year",
    type: "For Rent",
    beds: 3, baths: 3, size: "220 sqm",
    imageBg: "linear-gradient(135deg,#1e3a5f 0%,#0d2644 100%)",
    verified: true,
  },
  {
    id: "3",
    title: "Commercial Land — Governor's Consent Available",
    address: "Trans-Amadi Industrial",
    city: "Port Harcourt",
    price: "₦75,000,000",
    type: "For Sale",
    size: "1,000 sqm",
    imageBg: "linear-gradient(135deg,#451a03 0%,#2d1200 100%)",
    verified: true, tag: "Gov't Consent", tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "4",
    title: "Luxury 2-Bedroom Penthouse — Pool & Gym Access",
    address: "Victoria Island",
    city: "Lagos",
    price: "₦250,000",
    priceNote: "per night",
    type: "Short Let",
    beds: 2, baths: 2, size: "180 sqm",
    imageBg: "linear-gradient(135deg,#3b0764 0%,#1e0038 100%)",
    verified: true,
  },
  {
    id: "5",
    title: "5-Bedroom Mansion with Pool, Cinema & Smart Home",
    address: "Asokoro District",
    city: "Abuja",
    price: "₦320,000,000",
    type: "For Sale",
    beds: 5, baths: 6, size: "650 sqm",
    imageBg: "linear-gradient(135deg,#0c2a1a 0%,#0b4d2c 100%)",
    verified: true, tag: "Premium",
  },
  {
    id: "6",
    title: "Diaspora Investment — Titled Plots in GRA Layout",
    address: "Independence Layout",
    city: "Enugu",
    price: "₦12,000,000",
    type: "Investment",
    size: "500 sqm",
    imageBg: "linear-gradient(135deg,#451a03 0%,#78350f 100%)",
    verified: true, tag: "High ROI", tagColor: "bg-amber-100 text-amber-800",
  },
];

const tabs = ["All", "For Sale", "For Rent", "Short Let", "Investment"];

export default function FeaturedListings() {
  const [activeTab, setActiveTab] = useState("All");

  const shown = activeTab === "All"
    ? allProperties
    : allProperties.filter((p) => p.type === activeTab);

  return (
    <section className="py-16 bg-white" aria-label="Featured listings">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold text-[#0B4D2C] uppercase tracking-widest mb-2">Featured Properties</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Handpicked Listings</h2>
            <p className="text-gray-500 text-sm mt-1.5">Every property verified by our team — no scams, no surprises.</p>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-sm font-semibold text-[#0B4D2C] hover:text-[#093d23] transition-colors cursor-pointer flex-shrink-0 group">
            View all listings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-8 scrollbar-none">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer border ${
                activeTab === t
                  ? "bg-[#0B4D2C] text-white border-[#0B4D2C]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shown.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0B4D2C] text-[#0B4D2C] hover:bg-[#0B4D2C] hover:text-white font-semibold text-sm rounded-xl transition-all duration-200 cursor-pointer group">
            Explore All Properties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" />
          </a>
        </div>
      </div>
    </section>
  );
}
