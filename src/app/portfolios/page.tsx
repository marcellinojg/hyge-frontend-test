"use client"

import { ClientBadge, ClientList } from "@/components/ClientBadge";
import PortfolioCard from "@/components/PortfolioCard";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Page() {
    return (
        <main className="min-h-screen min-w-screen xl:px-[15vw] lg:px-[12.5vw] px-[5vw]">
            <div className="min-w-screen pt-36 lg:pt-[24vh] flex flex-col justify-center lg:gap-10 gap-6">
                <Fade cascade duration={800} direction="up">
                    <h1 className="lg:text-5xl text-3xl flex items-center gap-2 font-bold">
                        Our
                        <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 inline-block text-transparent bg-clip-text">Portfolio</span>
                    </h1>
                    <p className="text-xl text-white/80">
                        As your digital partner, we collaborate with you to drive innovation, stay <br /> ahead of the curve, and deliver real impact for your business.
                    </p>
                    <div className="flex items-center justify-start flex-wrap gap-3">
                        <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full px-8 transition-all duration-300">
                            All
                        </button>
                        <button className="p-3 bg-gray-500/50 text-gray-200/80 hover:bg-gray-400/40 hover:text-gray-100/80 rounded-full px-8 transition-all duration-300">
                            Web Development
                        </button>
                        <button className="p-3 bg-gray-500/50 text-gray-200/80 hover:bg-gray-400/40 hover:text-gray-100/80 rounded-full px-8 transition-all duration-300">
                            App Development
                        </button>
                        <button className="p-3 bg-gray-500/50 text-gray-200/80 hover:bg-gray-400/40 hover:text-gray-100/80 rounded-full px-8 transition-all duration-300">
                            Design
                        </button>
                    </div>
                </Fade>
            </div>

            <div className="mt-24 w-full grid lg:grid-cols-2 grid-cols-1 gap-8">
                <Fade cascade duration={600}>
                    <PortfolioCard
                        title="Levare Decanter"
                        description="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
                        categories={['Web Development', 'UI Design']}
                        imgPath="/img/preview/stock_1.png"
                        id="1"
                    />
                    <PortfolioCard
                        title="Levare Decanter"
                        description="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
                        categories={['Web Development', 'UI Design']}
                        imgPath="/img/preview/stock_2.png"
                        id="2"
                    />
                    <PortfolioCard
                        title="Levare Decanter"
                        description="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
                        categories={['Web Development', 'UI Design']}
                        imgPath="/img/preview/stock_3.png"
                        id="3"
                    />
                    <PortfolioCard
                        title="Levare Decanter"
                        description="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
                        categories={['Web Development', 'UI Design']}
                        imgPath="/img/preview/stock_4.png"
                        id="4"
                    />
                    <PortfolioCard
                        title="Levare Decanter"
                        description="Through our website, we aim to share the joy of authentic wine enjoyment by offering innovative products that enhance the tasting experience, provide valuable resources and knowledge, and foster a vibrant community of wine lovers."
                        categories={['Web Development', 'UI Design']}
                        imgPath="/img/preview/stock_5.png"
                        id="5"
                    />
                </Fade>

            </div>

            <Fade direction="up" className="lg:text-start text-center">
                <button className="mt-8 p-3 px-6 bg-gray-500/30 text-gray-200/50 rounded-full hover:text-white transition-all duration-300">
                    Load More
                </button>
            </Fade>


            <div className="min-w-screen flex flex-col justify-center gap-8 my-24">
                <Fade cascade duration={600} direction="up">
                    <h1 className="lg:text-5xl text-3xl flex items-center gap-2 font-bold">
                        Our
                        <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 inline-block text-transparent bg-clip-text">Clients</span>
                    </h1>
                    <p className="text-xl text-white/80">Here are just few of the clients we’ve had the privilege to serve:</p>
                </Fade>
                <ClientList>
                    <Fade cascade direction="right" damping={0.2}>
                        {Array(13).fill(1).map((_, index) =>
                            <ClientBadge key={index}>
                                <Image className="lg:h-[50px] h-[40px] w-auto object-contain" src={`/img/client/stock_${index + 1}.png`} width={100} height={300} alt="Client logo" />
                            </ClientBadge>
                        )}
                    </Fade>
                </ClientList>
            </div>
        </main>
    );
}