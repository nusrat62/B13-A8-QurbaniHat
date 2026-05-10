import { Cake, MapPin, Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  // ✅ safety guard (VERY IMPORTANT)
  if (!animal) return null;

  const {
    id,
    image,
    category,
    type,
    name,
    location,
    weight,
    age,
    price,
  } = animal;

  // ✅ safe values
  const safeImage = image || "/placeholder.png";
  const safeName = name || "Unknown Animal";
  const safeLocation = location || "Not specified";
  const safeWeight = weight || 0;
  const safeAge = age || 0;
  const safePrice = price || 0;

  return (
    <div className="group relative bg-surface border border-border rounded-[14px] overflow-hidden cursor-default w-full transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-primary-hover hover:border-accent/40">

      {/* Image Section */}
      <div className="relative h-50 w-full overflow-hidden bg-background">
        <Image
          src={safeImage}
          alt={safeName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-5">

        {/* Category & Type */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-primary/90 text-background text-[11px] font-semibold px-3 py-1.5 rounded-full">
            {category || "Category"}
          </div>
          <div className="bg-gradient-accent text-primary text-[11px] font-bold px-3 py-1.5 rounded-full">
            {type || "Type"}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-heading text-[18px] font-bold text-heading truncate mb-3.5 group-hover:text-primary transition-colors duration-300">
          {safeName}
        </h3>

        {/* Meta */}
        <div className="flex gap-2 flex-wrap mb-4">

          {/* Location */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5">
            <MapPin className="w-3.5 h-3.5 text-muted" />
            <span className="text-[11px] text-muted">
              {safeLocation}
            </span>
          </div>

          {/* Weight */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5">
            <Scale className="w-3.5 h-3.5 text-muted" />
            <span className="text-[11px] text-muted">
              {safeWeight} kg
            </span>
          </div>

          {/* Age */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5">
            <Cake className="w-3.5 h-3.5 text-muted" />
            <span className="text-[11px] text-muted">
              {safeAge} yrs
            </span>
          </div>

        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-[11px] text-muted block mb-1.5 uppercase">
            Starting from
          </span>

          <span className="font-heading text-[24px] font-bold text-accent">
            <span className="text-[1rem]">৳</span>
            {safePrice.toLocaleString()}
          </span>
        </div>

        {/* CTA */}
        <div className="border-t border-border pt-4 mt-4">
          <Link
            href={`/animals/${id || ""}`}
            className="w-full h-11 bg-primary hover:bg-primary-hover text-background font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
          >
            <span>View Details</span>
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AnimalCard;