"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const SortControl = ({ currentSort }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: "", label: "Default" },
    { value: "low-to-high", label: "Low to High" },
    { value: "high-to-low", label: "High to Low" },
  ];

  const selectedOption =
    sortOptions.find((option) => option.value === currentSort) ||
    sortOptions[0];

  const handleSortChange = (sortValue) => {
    const params = new URLSearchParams(searchParams.toString());

    if (sortValue) {
      params.set("sort", sortValue);
    } else {
      params.delete("sort");
    }

    router.push(`/animals?${params.toString()}`);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <label className="text-sm sm:text-base font-medium text-body font-body hidden sm:block">
        Sort by Price:
      </label>

      {/* Custom Select Dropdown */}
      <div className="relative" ref={dropdownRef}>
        {/* Selected Value Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between gap-3 min-w-40 sm:min-w-45 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-body font-medium bg-surface border-2 border-border rounded-lg text-body cursor-pointer hover:border-accent hover:shadow-md focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all duration-200"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span>{selectedOption.label}</span>
          <ChevronDown
            className={`w-4 h-4 sm:w-5 sm:h-5 text-muted transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Options */}
        {isOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-surface border-2 border-accent rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
            role="listbox"
          >
            {sortOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSortChange(option.value)}
                className={`w-full text-left px-4 py-3 text-sm sm:text-base font-body font-medium
                           transition-all duration-200
                           ${
                             option.value === currentSort
                               ? "bg-gradient-accent-soft text-primary border-l-4 border-accent"
                               : "text-body hover:bg-background hover:text-primary"
                           }`}
                role="option"
                aria-selected={option.value === currentSort}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SortControl;
