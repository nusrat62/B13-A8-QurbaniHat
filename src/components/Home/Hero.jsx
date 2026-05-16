import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import goru from "@/assets/chachar-sathe-goru.jpg"
import Image from "next/image";
import 'animate.css';

const Hero = () => {
    return (
        <div className="bg-linear-to-r from-[#2D6A4F] via-[#40916C] to-[#74C69D] py-20 px-2 md:px-4 lg:px-0 flex items-center justify-center gap-30 flex-wrap">
            {/* left side */}
            <div className="text-center lg:text-left">
                {/* badge */}
                
                <div className="animate__animated animate__fadeInUp animate_fast inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <span className="text-yellow-300 text-sm">🕌</span>
                    <span className="text-white text-sm font-medium">Eid-ul-Adha Special 2026</span>
                </div>
                {/* heading */}
                <h1 className="animate__animated animate__fadeInUp animate_fast text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                    Find Your Perfect
                    <span className="block text-secondary-light mt-2">Qurbani Animal</span>
                </h1>

                {/* Description */}
                <p className="animate__animated animate__fadeInUp animate_fast text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                    Select from our premium collection of healthy cows, goats, and sheep.
                    Trusted by thousands for Qurbani across the country.
                </p>

                {/* browse btn */}
                <Link href={"/animals"}>
                    <button className="animate__animated animate__fadeInUp animate_fast mb-8 btn btn-outline hover:text-green-700 text-white mx-auto border-2 border-[#ffffff]"><FaArrowRight /> Browse Animals</button>
                </Link>


                {/* Stats */}
                <div className="animate__animated animate__fadeInUp animate_fast grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                        <div className="text-white/70 text-sm">Happy Customers</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
                        <div className="text-white/70 text-sm">Animal Breeds</div>
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                        <div className="text-white/70 text-sm">Cities Covered</div>
                    </div>
                </div>
            </div>


            {/* right side */}
            <div>
                <Image src={goru} alt="goru" height={400} className="animate__animated animate__fadeInUp animate_fast rounded-lg border-4 border-white/40" width={400} />
            </div>
        </div>
    );
};

export default Hero;