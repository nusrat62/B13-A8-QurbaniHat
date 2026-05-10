import AnimalCard from "./AnimalCard";

const RelatedAnimals = ({ animals, currentAnimalId, currentAnimalType }) => {
  // Filter animals by same type, excluding current animal, limit to 4
  const relatedAnimals = animals
    .filter(
      (animal) =>
        animal.type === currentAnimalType && animal.id !== currentAnimalId,
    )
    .slice(0, 4);

  // If no related animals of same type, show random animals
  if (relatedAnimals.length === 0) {
    const otherAnimals = animals
      .filter((animal) => animal.id !== currentAnimalId)
      .slice(0, 4);

    if (otherAnimals.length === 0) {
      return null;
    }

    return (
      <section className="mt-16 sm:mt-20 lg:mt-24">
        <div className="mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-heading mb-2">
            More Animals
          </h2>
          <p className="text-sm sm:text-base text-muted font-body">
            Explore other quality animals available for Qurbani
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
          {otherAnimals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="mt-16 sm:mt-20 lg:mt-24">
      <div className="mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-heading mb-2">
          Similar {currentAnimalType}s
        </h2>
        <p className="text-sm sm:text-base text-muted font-body">
          You might also be interested in these{" "}
          {currentAnimalType.toLowerCase()}s
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
        {relatedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
};

export default RelatedAnimals;
