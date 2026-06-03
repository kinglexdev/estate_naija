"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, ChevronDown } from "lucide-react";

export default function StickySearch({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-100px 0px 0px 0px" }
    );
    const el = heroRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [heroRef]);

  return (
    <div
      className={`fixed top-[105px] left-0 right-0 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white border-b border-gray-200 shadow-md py-3">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5">
            <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              aria-label="Search properties"
            />
            <div className="flex items-center gap-2 border-l border-gray-200 pl-3">
              <select className="text-sm text-gray-600 bg-transparent focus:outline-none cursor-pointer appearance-none pr-4" aria-label="Listing type">
                <option>Buy</option>
                <option>Rent</option>
                <option>Short Let</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 -ml-3 pointer-events-none" />
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-[#0B4D2C] hover:bg-[#093d23] text-white text-sm font-semibold rounded-lg transition-colors duration-200 cursor-pointer flex-shrink-0">
              <Search className="w-3.5 h-3.5" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
