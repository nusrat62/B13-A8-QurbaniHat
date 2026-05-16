import { FaFacebook, FaMapMarkerAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";

const Footer = () => {
    return (
        <div className="bg-[#1B4332] pt-20">


            {/* footer main part */}
            <div className="flex flex-wrap justify-center items-center gap-12 text-center lg:text-left lg:gap-20 xl:gap-50">
                {/* about section */}
                <div className="w-[300px]">
                    <h2 className="text-[2.5rem] text-[#FFD700] font-bold ">QurbanirHat</h2>
                    <p className="text-[#FFD700] font-medium mt-4">Your trusted Qurbani market place. Find healthy animals for Eid-ul-Adha.</p>
                </div>

                {/* contact info */}
                <div className="space-y-5 w-[300px]">
                    <h2 className="text-[2rem] text-[#FFD700] font-bold ">Contact Us</h2>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><FaMapMarkerAlt /></span> Dhaka, Bangladesh </p>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><IoIosCall /></span> +880 172 534 2541
                    </p>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><IoIosMail /></span>qurbanirhat@gmail.com
                    </p>
                </div>

                {/* social links */}
                <div className="space-y-5 w-[300px]">
                    <h2 className="text-[2rem] text-[#FFD700] font-bold ">Follow Us</h2>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><FaFacebook /></span>Facebook</p>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><FaTwitter /></span>Twitter
                    </p>

                    <p className="text-[#FFD700] flex gap-2 items-center font-medium justify-center lg:justify-normal">
                        <span><FaYoutube /></span>Youtube
                    </p>
                </div>
            </div>

            {/* footer foot part */}
            <hr className="text-gray-600 mt-15 lg:mt-20" />
            <div>
                <footer className="footer sm:footer-horizontal footer-center bg-[#14342A] text-[#9CA3AF] p-4">
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by QurbanirHat</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;