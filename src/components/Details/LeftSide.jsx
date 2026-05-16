import Image from 'next/image';


const LeftSide = ({targetedAnimal}) => {
    return (
        <div className="relative max-w-[600px]">
            <Image
                src={targetedAnimal.image}
                height={550}
                width={600}
                alt="Animal Photo"
                className="rounded-2xl" />

            <div className="absolute top-4 left-4 bg-[#FFD700] text-[#2D6A4F] text-xs font-bold px-3 py-1 rounded-full">
                {targetedAnimal.badge}
            </div>


            <h2 className="text-[2.5rem] font-bold mt-5">Animal Details</h2>

            <div className="space-y-3">
                {/* Name - two column layout */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Name:</span>
                    <span className="text-gray-800 font-medium w-2/3">{targetedAnimal.name}</span>
                </div>

                {/* Type */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Type:</span>
                    <span className="text-gray-800 w-2/3">{targetedAnimal.type}</span>
                </div>

                {/* Breed */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Breed:</span>
                    <span className="text-gray-800 w-2/3">{targetedAnimal.breed}</span>
                </div>

                {/* Price - special styling */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Price:</span>
                    <span className="text-2xl font-bold text-[#F59E0B] w-2/3">
                        ৳{targetedAnimal.price}
                    </span>
                </div>

                {/* Weight */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Weight:</span>
                    <span className="text-gray-800 w-2/3">{targetedAnimal.weight} kg</span>
                </div>

                {/* Age */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Age:</span>
                    <span className="text-gray-800 w-2/3">{targetedAnimal.age} years</span>
                </div>

                {/* Location */}
                <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="font-semibold text-gray-600 w-1/3">Location:</span>
                    <span className="text-gray-800 w-2/3">{targetedAnimal.location}</span>
                </div>

                {/* Description  */}
                <div className="pt-3">
                    <span className="font-semibold text-gray-600 block mb-2">Description:</span>
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {targetedAnimal.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LeftSide;