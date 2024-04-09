import ROUTES from "@/routes"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import React from "react"


const Navbar = () => {
    return (
        <nav className="w-full backdrop-blur-lg bg-white/[0.05] py-6 fixed border-b-2 border-white/[0.1] z-20">
            <div className="flex items-center justify-between lg:px-[10vw] px-[5vw]">
                <Link href={ROUTES.STATIC.LANDING}>
                    <Image src="/img/hyge.png" alt="Hyge Logo" width={100} height={200} />
                </Link>

                <div className="bg-gray-400/30 rounded-full p-3 px-6 items-center gap-8 lg:flex hidden">
                    <NavLink href={ROUTES.STATIC.LANDING} text="Home" />
                    <NavLink href={ROUTES.STATIC.LANDING} text="Services" />
                    <NavLink href={ROUTES.STATIC.LANDING} text="Why Us" />
                    <NavLink href={ROUTES.STATIC.LANDING} text="Our Process" />
                    <NavLink href={ROUTES.STATIC.LANDING} text="Our Work" />
                    <NavLink href={ROUTES.STATIC.LANDING} text="FAQs" />
                </div>
                <button className="p-3 px-6 bg-gray-500/30 text-gray-200/50 rounded-full hover:text-white transition-all duration-300 lg:block hidden">
                    Let's Talk
                </button>
            </div>
            <div className="">
                
            </div>
        </nav>
    )
}

const NavLink = (props: NavLinkProps) => {
    const { href, text } = props;
    return <Link href={href} className="text-white/70 hover:text-white transition-all duration-300">{text}</Link>
}

interface NavLinkProps extends LinkProps {
    text: string
}

export default Navbar

