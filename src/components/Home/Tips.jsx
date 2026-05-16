import tips from "@/data/tipsData.json"

const Tips = () => {
  

  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D6A4F] mb-4">
            Qurbani Tips & Guidelines
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Important things to check before buying an animal for Qurbani.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[980px] mx-auto gap-6">
          {tips.map(tip => (
            <div 
              key={tip.id}
              className={`bg-green-100 w-[300px] rounded-2xl p-6 transition-all duration-300 hover:shadow-lg mx-auto`}
            >
              
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {`${tip.id}. ${tip.title}`}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {tip.description}.
              </p>

              {/* details */}
              {/* <ul className="list-disc mt-5">
                {
                    tip.details.map((detail, index)=> <li key={index}>{detail}</li> )
                }
              </ul> */}
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Tips;