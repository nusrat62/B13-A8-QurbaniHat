'use client'
import animalsData from "@/data/animalsData.json"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


const AnimalsPage = () => {

    // state for sort
    const [sort, setSort] = useState("default")

    // sort function
    const handleSort = (e) => {
        setSort(e.target.value)
    }

    let filteredData = [...animalsData];

    if (sort === "low") {
        filteredData.sort((a, b) => a.price - b.price);
    }
    else if (sort === "high") {
        filteredData.sort((a, b) => b.price - a.price);
    }
    else {
        filteredData = [...animalsData]
    }


    return (
        <div className="mt-30">
            {/* Page Header */}
            <div className="text-center mb-10">
                <h1 className="text-[3rem] font-bold text-[#2D6A4F] mb-3">All Animals</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">Browse our complete collection of healthy cows and goats for Qurbani.</p>
            </div>

            {/* sort section */}
            <div className="flex justify-center">
                <select onChange={handleSort} defaultValue="Sort by: Default" className="select">
                    <option disabled={true}>Sort by: Default</option>
                    <option value="default">Default</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                </select>
            </div>

            <div className="flex gap-5 items-center justify-center flex-wrap my-8">

                {/* featured card */}
                {
                    filteredData.map(item => <div
                        className="card w-[330px] h-[480px] bg-[#ffffff] shadow-lg rounded-2xl p-4 relative"
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
                        <p className="text-xl font-bold text-[#F59E0B]">
                            ৳{item.price.toLocaleString()}
                        </p>

                        {/* Breed */}
                        <p className="text-sm text-gray-500 mb-2">{item.breed}</p>
                        {/* description */}
                        <p className="text-gray-500 h-full mb-4">{item.description}</p>

                        <Link href={`/animals/animal/${item.id}`}>
                            <button className="bg-[#40916C] text-white font-medium hover:bg-[#2D6A4F] btn btn-block">View Details</button>
                        </Link>
                    </div>)
                }
            </div>

        </div>
    );
};

export default AnimalsPage;