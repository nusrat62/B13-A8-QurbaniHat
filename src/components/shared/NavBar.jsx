'use client'
import Image from "next/image";
import NavLink from "./NavLink";
import profile from "@/assets/profile.png"
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const NavBar = () => {

    // get user session
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user;


    return (
        <div className="navbar bg-[#ffffff] shadow-sm xl:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* mobile menu */}
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink href={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/animals"}>All Animals</NavLink>
                        </li>
                        <li>
                            <NavLink href={"/profile"}>My Profile</NavLink>
                        </li>
                    </ul>
                </div>
                {/* logo */}
                <h2 className=" text-[#2D6A4F] text-[1.5rem] font-bold">QurbanirHat</h2>
            </div>
            {/* desktop menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink href={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/animals"}>All Animals</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/profile"}>My Profile</NavLink>
                    </li>
                </ul>
            </div>
            {/* if user logged */}
            {isPending ? <div className="navbar-end">
                <span className="loading loading-ring loading-sm"></span>
            </div>
                : session ? <div className="navbar-end flex items-center gap-1 md:gap-3">
                    <span className="md:hidden">Hello, {user.name.split(" ")[0]}</span>
                    <span className="hidden md:flex">Hello, {user.name}</span>
                    <Image
                        src={user.image ? user.image : profile}
                        height={40}
                        width={40}
                        alt="profile avatar"
                        className="rounded-full border border-[#40916C]" />
                    <Link className="hidden md:flex" href={"/"}>
                        <button onClick={async () => await authClient.signOut()} className="btn btn-outline border border-[#40916C] font-semibold text-[#40916C] hover:bg-red-100 hover:text-red-700">Log out</button>
                    </Link>
                </div>
                    :
                    <div className="navbar-end flex items-center gap-3">

                        <Link href={"/signin"}>
                            <button className="btn btn-outline border border-[#40916C] font-semibold text-[#40916C] hover:bg-[#2D6A4F] hover:text-[#ffffff]">Sign In</button>
                        </Link>

                        <Link href={"/signup"}>
                            <button className="hidden md:flex btn bg-[#40916C] font-semibold text-[#FFFFFF] hover:bg-[#2D6A4F]">Sign Up</button>
                        </Link>
                    </div>
            }


            {/* if user no logged in */}

        </div>
    );
};

export default NavBar;