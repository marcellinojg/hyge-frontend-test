import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";
import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.className} bg-gradient-to-b from-[#061430] to-[#101111]`}>
        <header className="relative">
          {/* white shade */}
          <div className="absolute w-screen mx-auto top-1/2 left-0 lg:flex hidden gap-[10vw] justify-center items-start -z-30">
            <div className="w-[80px] h-[300px] -translate-x-1/2 rounded-full bg-gradient-radial opacity-[0.03] from-white to-transparent blur-xl">
            </div>
            <div className="w-[80px] h-[400px] -translate-x-1/2 translate-y-2 rounded-full bg-gradient-radial opacity-[0.05] from-white to-transparent blur-xl">
            </div>
            <div className="w-[80px] h-[600px] -translate-x-1/2 rounded-full bg-gradient-radial opacity-[0.03] from-white to-transparent blur-xl">
            </div>
            <div className="w-[80px] h-[400px] -translate-x-1/2 rounded-full bg-gradient-radial opacity-[0.03] from-white to-transparent blur-xl">
            </div>
            <div className="w-[80px] h-[300px] -translate-x-1/2 rounded-full bg-gradient-radial opacity-[0.03] from-white to-transparent blur-xl">
            </div>
          </div>
          <Navbar />
        </header>
        {children}
        <footer>
          {/* Footer Appointment */}
          <section className="min-w-screen min-h-screen grid place-items-center overflow-hidden relative lg:mt-0 mt-10">
            <div className="flex flex-col justify-center gap-8 text-center">
              <h1 className="lg:text-5xl text-3xl font-bold mx-7 tracking-widest">
                <span className="text-white">We can help to improve your business</span> <br />
                <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 py-4 inline-block text-transparent bg-clip-text">
                  by upgrading your technology!
                </span>
              </h1>
              <p className="text-xl text-white/80">Schedule a free 30 mins call with us</p>
              <button className="bg-blue-600 py-4 px-8 rounded-full self-center">Book an appointment</button>
            </div>
            {/* Big Circles */}
            <div className="absolute lg:w-[90vw] lg:h-[90vw] w-[150vw] h-[200vw] from-white/[0.02] to-black bg-gradient-to-b bottom-0 translate-y-[80%] rounded-full -z-10 shadow-[0px_-5px_70px_8px_#026BEC5D] ">
            </div>
            <div className="absolute lg:w-[90vw] lg:h-[130vw] w-[150vw] h-[350vw] from-white/[0.02] to-black bg-gradient-to-b bottom-0 translate-y-[80%] rounded-full -z-20 shadow-[-40px_-5px_50px_2px_#026BEC5D]">
            </div>
            <div className="absolute lg:w-[90vw] lg:h-[200vw] w-[150vw] h-[550vw] from-white/[0.02] to-black bg-gradient-to-b bottom-0 translate-y-[80%] rounded-full -z-30 shadow-[20px_-5px_50px_2px_#026BEC5D]">
            </div>
            {/* Map on Mobile */}
            <Image src={'/img/map.png'} width={1000} height={300} alt="Map illustration" className="absolute lg:hidden scale-150 top-0 -left-1/4" />
          </section>
          {/* Divider */}
          <div className="w-full h-[2px] from-transparent via-gray-700/40 to-transparent bg-gradient-to-r">
          </div>
          {/* Footer Information */}
          <section className="min-w-screen lg:px-[7.5vw] px-[5vw]">
            <div className="grid lg:grid-cols-3 grid-cols-1 py-16 gap-12">
              <div className="space-y-8">
                <Image src="/img/hyge.png" alt="Hyge Logo" width={100} height={200} />
                <p className="text-white/80 text-lg">
                  Hyge is a Singapore based company that provides customisation and specialisation in website design, development, as well as mobile app development.
                </p>
                <span className="flex items-center gap-2">
                  <IoLocationOutline />
                  North Point Bizhub, Singapore.
                </span>
              </div>
              <div className="text-white/80 text-lg space-y-4 place-content-center">
                <div className="flex flex-col gap-2">
                  <span>Email Us:</span>
                  <span>michael@hygeworks.com</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span>Contact Us:</span>
                  <span>+65 8533 3575</span>
                </div>
              </div>
              <div className="flex flex-col text-white/80 text-lg">
                <Link href={"#"} className="py-5 flex items-center justify-between border-b-2 border-white/80 group">
                  <span className="group-hover:-translate-y-1 transition-all duration-300 tracking-wider">LinkedIn</span>
                  <BsArrowUpRight className="group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
                <Link href={"#"} className="py-5 flex items-center justify-between border-b-2 border-white/80 group">
                  <span className="group-hover:-translate-y-1 transition-all duration-300 tracking-wider">Instagram</span>
                  <BsArrowUpRight className="group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
                <Link href={"#"} className="py-5 flex items-center justify-between border-b-2 border-white/80 group">
                  <span className="group-hover:-translate-y-1 transition-all duration-300 tracking-wider">Behance</span>
                  <BsArrowUpRight className="group-hover:-translate-y-1 transition-all duration-300" />
                </Link>
              </div>
            </div>
            {/* Divider */}
            <div className="w-full h-[2px] from-transparent via-gray-700/40 to-transparent bg-gradient-to-r">
            </div>
            {/* Footer copyright */}
            <div className="w-full flex items-center justify-between py-12">
              <span className="text-white/80 md:text-base text-sm">Copyright © 2023 Hyge, Pte. Ltd.</span>
              <span className="text-white/80 md:text-base text-sm">All Rights Reserved</span>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
