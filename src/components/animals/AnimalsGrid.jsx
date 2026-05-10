import AnimalCard from "./AnimalCard";

const AnimalsGrid = ({ animalsData }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-7">
      {animalsData.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
};

export default AnimalsGrid;
