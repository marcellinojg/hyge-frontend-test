'use client'

import { useScrollDirection } from "@/app/hooks/useScrollDirection"
import ROUTES from "@/routes"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import React, { Dispatch, SetStateAction, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"


const Navbar = () => {
    const [isMobileNavbarActive, setIsMobileNavbarActive] = useState<boolean>(false)

    return (
        <>
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
                    <button className="p-3 px-6 bg-gray-500/30 text-gray-200/50 rounded-full hover:text-white hover:from-teal-500 hover:via-blue-600 hover:to-blue-500 hover:bg-gradient-to-r transition-all duration-300 lg:block hidden">
                        Let's Talk
                    </button>
                </div>
            </nav>
            <FloatingNavbarButton setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavbarMobile isMobileNavbarActive={isMobileNavbarActive} setIsMobileNavbarActive={setIsMobileNavbarActive} />
        </>

    )
}

const NavLink = (props: NavLinkProps) => {
    const { href, text } = props;
    return <Link href={href} className="text-white/70 hover:text-white transition-all duration-300 font-bold text-lg">{text}</Link>
}

const NavLinkMobile = (props: NavLinkMobileProps) => {
    const { href, text, setIsMobileNavbarActive } = props;
    return <Link href={href} className="py-4 font-bold border-b-2 border-white/30 text-lg hover:bg-white hover:text-slate-900" onClick={() => setIsMobileNavbarActive(false)}>
        {text}
    </Link>
}

const FloatingNavbarButton = ({ setIsMobileNavbarActive }: { setIsMobileNavbarActive: Dispatch<SetStateAction<boolean>> }) => {
    const scrollDirection = useScrollDirection();
    const floatingNavbarButtonClass = scrollDirection == 'up' ? '-translate-y-20 opacity-100' : 'translate-y-0 opacity-0'

    return <div className={`fixed lg:hidden -bottom-16 z-30 w-screen flex justify-center transition duration-600 ${floatingNavbarButtonClass}`}>
        <div className="flex items-center justify-center gap-2 from-[#061430] via-[#041331] to-[#061430] bg-gradient-to-br rounded-full p-2 border-2 border-white/30">
            <button onClick={() => setIsMobileNavbarActive(true)} className="lg:hidden flex items-center gap-2 border-2 border-white/30 p-3 px-6 rounded-full bg-transparent hover:from-slate-800 hover:to-slate-900 hover:bg-gradient-to-r transition duration-300">
                Menu
                <FaBars />
            </button>
            <button className="p-3 px-6 text-white rounded-full from-teal-500 via-blue-600 to-blue-500 bg-gradient-to-r transition-all duration-300 lg:hidden block">
                Let's Talk
            </button>
        </div>
    </div>
}

const NavbarMobile = ({ isMobileNavbarActive, setIsMobileNavbarActive }: { isMobileNavbarActive: boolean, setIsMobileNavbarActive: Dispatch<SetStateAction<boolean>> }) => {
    const mobileNavbarTransitionClass = isMobileNavbarActive ? '-translate-x-0 opacity-100' : 'translate-x-[100vw] opacity-0'

    return <div className={`w-screen h-screen fixed top-0 left-0 bg-gradient-to-b from-[#061430] to-[#101111] z-50 lg:hidden flex flex-col justify-between p-8 transition-all duration-300 ${mobileNavbarTransitionClass}`}>
        <div className="flex flex-col">
            <button onClick={() => setIsMobileNavbarActive(false)} className="self-end mb-8">
                <FaTimes size={24} />
            </button>
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="Home" setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="Services" setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="Why Us" setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="Our Process" setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="Our Work" setIsMobileNavbarActive={setIsMobileNavbarActive} />
            <NavLinkMobile href={ROUTES.STATIC.LANDING} text="FAQs" setIsMobileNavbarActive={setIsMobileNavbarActive} />
        </div>
        <Image src="/img/hyge.png" alt="Hyge Logo" width={100} height={200} className="self-center" />
    </div>
}

interface NavLinkProps extends LinkProps {
    text: string
}

interface NavLinkMobileProps extends NavLinkProps {
    setIsMobileNavbarActive: Dispatch<SetStateAction<boolean>>
}

export default Navbar

