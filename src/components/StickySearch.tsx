"use client";

import { useState, useEffect, useRef } from "react";
import SearchBar from "./SearchBar";

export default function StickySearch({ heroRef }: { heroRef: React.RefObject<HTMLElement | null> }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    const el = heroRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [heroRef]);

  return (
    <div
      className={`fixed top-16 lg:top-20 left-0 right-0 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-white/95 backdrop-blur-md border-b border-teal-100 shadow-md py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchBar compact />
        </div>
      </div>
    </div>
  );
}
