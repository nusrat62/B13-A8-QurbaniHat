import { Scale, Cake, Tag, MapPin } from "lucide-react";

const AnimalQuickStats = ({ animal }) => {
  if (!animal) return null; // ✅ guard

  const {
    weight,
    age,
    breed,
    location,
  } = animal;

  const stats = [
    {
      icon: Scale,
      value: weight ? `${weight} kg` : "N/A",
      label: "Weight",
    },
    {
      icon: Cake,
      value: age ? `${age} years` : "N/A",
      label: "Age",
    },
    {
      icon: Tag,
      value: breed || "Unknown",
      label: "Breed",
    },
    {
      icon: MapPin,
      value: location || "Unknown",
      label: "Location",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-surface border-2 border-border rounded-xl p-4 sm:p-5 
                       hover:border-accent hover:shadow-md hover:-translate-y-1
                       transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-accent-soft flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-heading mb-1">
              {stat.value}
            </p>

            <p className="text-xs sm:text-sm text-muted font-body uppercase tracking-wide">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimalQuickStats;