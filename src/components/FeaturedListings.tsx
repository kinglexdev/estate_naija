import PropertyCard, { Property } from "./PropertyCard";
import { ArrowRight } from "lucide-react";

const properties: Property[] = [
  {
    id: "1",
    title: "4-Bedroom Detached Duplex with BQ",
    location: "Lekki Phase 1",
    city: "Lagos",
    price: "₦185,000,000",
    type: "For Sale",
    beds: 4,
    baths: 4,
    size: "350 sqm",
    imageColor: "linear-gradient(135deg, #0F766E 0%, #134E4A 100%)",
    verified: true,
    tag: "New",
  },
  {
    id: "2",
    title: "3-Bedroom Serviced Apartment",
    location: "Maitama",
    city: "Abuja",
    price: "₦4,500,000/yr",
    type: "For Rent",
    beds: 3,
    baths: 3,
    size: "220 sqm",
    imageColor: "linear-gradient(135deg, #0369A1 0%, #075985 100%)",
    verified: true,
  },
  {
    id: "3",
    title: "Prime Commercial Land — Title: C of O",
    location: "Trans-Amadi",
    city: "Port Harcourt",
    price: "₦75,000,000",
    type: "For Sale",
    size: "1,000 sqm",
    imageColor: "linear-gradient(135deg, #854D0E 0%, #713F12 100%)",
    verified: true,
    tag: "C of O",
  },
  {
    id: "4",
    title: "Luxury Penthouse — Short Let",
    location: "Victoria Island",
    city: "Lagos",
    price: "₦250,000/night",
    type: "Short Let",
    beds: 2,
    baths: 2,
    size: "180 sqm",
    imageColor: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    verified: true,
  },
  {
    id: "5",
    title: "5-Bedroom Mansion with Pool",
    location: "Asokoro",
    city: "Abuja",
    price: "₦320,000,000",
    type: "For Sale",
    beds: 5,
    baths: 6,
    size: "650 sqm",
    imageColor: "linear-gradient(135deg, #0F766E 0%, #0369A1 100%)",
    verified: true,
    tag: "Premium",
  },
  {
    id: "6",
    title: "Diaspora-Ready Investment Land",
    location: "Enugu GRA",
    city: "Enugu",
    price: "₦12,000,000",
    type: "Investment",
    size: "500 sqm",
    imageColor: "linear-gradient(135deg, #B45309 0%, #92400E 100%)",
    verified: true,
    tag: "High ROI",
  },
];

const filterTabs = ["All", "For Sale", "For Rent", "Investment", "Short Let"];

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-white" aria-label="Featured property listings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm font-semibold text-[#0F766E] uppercase tracking-widest mb-2">
              Featured Properties
            </p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-[#134E4A] leading-tight">
              Handpicked Listings
            </h2>
            <p className="text-[#475569] mt-2 text-sm leading-relaxed max-w-md">
              Every listing is verified by our team. No scams, no surprises.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-sm font-semibold text-[#0F766E] hover:text-[#0D6962] transition-colors duration-200 cursor-pointer flex-shrink-0"
          >
            View all listings
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 mb-8 scrollbar-none">
          {filterTabs.map((tab, i) => (
            <button
              key={tab}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                i === 0
                  ? "bg-[#0F766E] text-white"
                  : "bg-teal-50 text-[#0F766E] hover:bg-teal-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-10">
          <button className="px-8 py-3.5 border-2 border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white font-semibold text-sm rounded-xl transition-colors duration-200 cursor-pointer">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
}
