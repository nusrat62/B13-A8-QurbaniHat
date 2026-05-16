import breeds from "@/data/topBreeds.json"
import Image from 'next/image';
import Link from 'next/link';

const TopBreeds = () => {
  

  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
           
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] mb-3">
            Top Popular Breeds
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Most demanded animals this Qurbani season
          </p>
        </div>

        {/* Breeds Grid */}
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {breeds.map((breed) => (
            <div 
              key={breed.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-[300px] w-full mx-auto sm:mx-0"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Type Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#2D6A4F]">
                  {breed.type}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-5 text-center">
               
                
                {/* Breed Name */}
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {breed.name}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-gray-500 mb-3">
                  {breed.description}
                </p>
                
                {/* Price Range */}
                <p className="text-[#F59E0B] font-semibold text-sm mb-3">
                  ৳{breed.priceRange}
                </p>
                
                {/* Popularity Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Popularity</span>
                    <span>{breed.popularity}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#40916C] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${breed.popularity}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* View Button */}
                <Link href={`/animals/animal/${breed.id}`}>
                  <button className="w-full border-2 border-[#40916C] text-[#40916C] py-2 rounded-full text-sm font-medium hover:bg-[#40916C] hover:text-white transition duration-300">
                    View {breed.name}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Animals Button */}
        <div className="text-center mt-12">
          <Link href="/animals">
            <button className="inline-flex items-center gap-2 bg-[#2D6A4F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#40916C] transition duration-300 shadow-md hover:shadow-lg">
              View All Animals
              <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopBreeds;