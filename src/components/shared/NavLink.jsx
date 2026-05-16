'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const NavLink = ({href, children}) => {
    const pathName = usePathname()
    const isActive = pathName === href;
    return (
        <Link className={`${isActive? 'text-[#2D6A4F]':''} text-[1rem] font-medium`} href={href}>{children}</Link>
    );
};

export default NavLink;