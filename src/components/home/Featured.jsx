import featuredData from "@/data/featuredData.json"
import Image from "next/image";
import Link from "next/link";
const Featured = () => {
    return (
        <div className="mt-30">
            <h2 className="text-center text-4xl font-bold">Featured Animals</h2>

            <div className="flex gap-5 items-center justify-center flex-wrap my-8">

                {/* featured card */}
                {
                    featuredData.map(item => <div
                        className="w-[330px] bg-[#ffffff] shadow-lg rounded-2xl p-4 relative"
                        key={item.id}>
                        <Image
                            src={item.image}
                            width={300}
                            height={200}
                            className="rounded-2xl object-cover h-[200px]"
                            alt="animals photo" />

                        {/* Badge - Popular/Best Seller etc */}

                        <div className="absolute top-1 left-30 bg-[#FFD700] text-[#2D6A4F] text-xs font-bold px-3 py-1 rounded-full shadow-md">
                            {item.badge}
                        </div>



                        {/* title and price */}

                        <h2 className="text-[1.5rem] font-bold mt-4">{item.name}</h2>
                        <p className="text-xl font-bold text-[#F59E0B]">৳{item.price}</p>

                        {/* Breed */}
                        <p className="text-sm text-gray-500 mb-2">{item.breed}</p>
                        {/* description */}
                        <p className="text-gray-500 mb-4">{item.description}</p>

                        <Link href={`/animals/animal/${item.id}`}>
                            <button className="bg-[#40916C] text-white font-medium hover:bg-[#2D6A4F] btn btn-block">View Details</button>
                        </Link>

                    </div>)
                }
            </div>

        </div>
    );
};

export default Featured;