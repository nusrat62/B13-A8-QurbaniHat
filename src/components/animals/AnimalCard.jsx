import { Cake, MapPin, Scale } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {
  const { id, image, category, type, name, location, weight, age, price } =
    animal;

  return (
    <div className="group relative bg-surface border border-border rounded-[14px] overflow-hidden cursor-default w-full transition-all duration-300 ease-out hover:-translate-y-1.5 shadow-primary-hover hover:border-accent/40">
      {/* Image Section */}
      <div className="relative h-50 w-full overflow-hidden bg-background">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Body */}
      <div className="p-5">
        {/* Category and Type Badges */}
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-primary/90 text-background font-body text-[11px] font-semibold px-3 py-1.5 rounded-full">
            {category}
          </div>
          <div className="bg-gradient-accent text-primary font-body text-[11px] font-bold px-3 py-1.5 rounded-full">
            {type}
          </div>
        </div>

        {/* Name */}
        <h3 className="font-heading text-[18px] font-bold text-heading truncate mb-3.5 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Meta Chips Row */}
        <div className="flex gap-2 flex-wrap mb-4">
          {/* Location Chip */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:border-accent/30 hover:bg-gradient-accent-soft">
            <MapPin className="w-3.5 h-3.5 text-muted" />
            <span className="font-body text-[11px] font-medium text-muted">
              {location}
            </span>
          </div>

          {/* Weight Chip */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:border-accent/30 hover:bg-gradient-accent-soft">
            <Scale className="w-3.5 h-3.5 text-muted" />
            <span className="font-body text-[11px] font-medium text-muted">
              {weight} kg
            </span>
          </div>

          {/* Age Chip */}
          <div className="flex items-center gap-1.5 bg-background border border-border rounded-lg px-2.5 py-1.5 transition-all duration-200 hover:border-accent/30 hover:bg-gradient-accent-soft">
            <Cake className="w-3.5 h-3.5 text-muted" />
            <span className="font-body text-[11px] font-medium text-muted">
              {age} yrs
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="font-body text-[11px] text-muted block mb-1.5 uppercase tracking-wide">
            Starting from
          </span>
          <span className="font-heading text-[24px] font-bold text-accent">
            <span className="text-[1rem]">৳</span>
            {price.toLocaleString()}
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-4 mt-4">
          {/* CTA Button */}
          <Link
            href={`/animals/${id}`}
            className="w-full h-11 bg-primary hover:bg-primary-hover text-background font-body text-[13px] font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            <span>View Details</span>
            <span className="inline-block transition-transform duration-200 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
