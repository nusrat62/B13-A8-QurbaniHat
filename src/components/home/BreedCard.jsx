import { Scale } from "lucide-react";
import Image from "next/image";

const BreedCard = ({ breed }) => {
  return (
    <div className="group relative bg-surface border border-border rounded-2xl overflow-hidden cursor-pointer w-56 xl:w-full transition-all duration-300 hover:-translate-y-1.5 shadow-primary-hover hover:border-accent/40">
      {/* Breed Image */}
      <div className="relative h-48 w-full overflow-hidden bg-background">
        <Image
          src={breed.image}
          alt={breed.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-all duration-300 group-hover:scale-105"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Type Badge */}
        <div className="absolute top-3 right-3 bg-gradient-accent text-primary font-body text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg">
          {breed.type}
        </div>
      </div>

      {/* Breed Info */}
      <div className="p-4">
        {/* Breed Name */}
        <h3 className="font-heading text-lg font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300">
          {breed.name}
        </h3>

        {/* Weight Range */}
        <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2">
          <Scale className="w-4 h-4 text-muted shrink-0" />
          <span className="font-body text-sm font-medium text-muted">
            {breed.weightRange}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BreedCard;
