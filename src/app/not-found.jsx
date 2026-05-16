import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div className="bg-gray-50 h-screen flex justify-center items-center">
            <div className="">
                <h1 className="text-[4rem] text-center font-bold text-[#2D6A4F]">404</h1>
                <h2 className="text-[1.5rem] font-bold text-[#2D6A4F]">The Page is Not Found</h2>
                <Link className="flex justify-center mt-4" href={"/"}>
                    <button className="btn bg-[#40916C] text-[#ffffff] hover:bg-[#2D6A4F] ">Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;