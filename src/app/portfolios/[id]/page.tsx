'use client'
import portfolios from "@/app/data/portfolios"
import { CategoryBadge, CategoryList } from "@/components/CategoryBadge";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { BsArrowLeft } from "react-icons/bs"


export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    const portfolio = portfolios.find((portfolio) => portfolio.id == id)
    const router = useRouter()
    const handleBack = () => {
        router.back()
    }

    return <main className="pt-24 lg:px-[12vw] px-[5vw] min-w-screen min-h-screen">
        {portfolio &&
            <div className="mt-10 flex flex-col">
                <button onClick={handleBack} className="text-white/80 text-lg flex items-center gap-6 hover:-translate-x-2 transition-all duration-300">
                    <BsArrowLeft />
                    Go Back
                </button>
                <Image src={portfolio.imgPath} width={500} height={500} alt="Preview portfolio" className="w-full my-12" />
                <div className="flex lg:flex-row flex-col lg:items-center gap-4">
                    <span className="text-2xl pr-5 font-bold">Our Role</span>
                    <CategoryList>
                        {portfolio.categories.map(category => <CategoryBadge>{category}</CategoryBadge>)}
                    </CategoryList>
                </div>
                <div className="lg:my-28 my-20 flex flex-col gap-10">
                    <h1 className="lg:text-5xl text-3xl font-bold">{portfolio.title}</h1>
                    <p className="text-lg text-white/80">{portfolio.brief}</p>
                    <h2 className="lg:text-2xl text-xl font-bold">Tech stack</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 backdrop-blur-sm from-[#061430] via-[#04173e] to-[#061430] bg-gradient-to-br p-4 rounded-lg border-[1px] border-white/20 ">
                        {portfolio.stack.map(s => <>
                            <div className="bg-transparent rounded-lg border-[1px] border-white/20 w-full p-4 flex items-center justify-center">
                                <div className="lg:py-8 flex flex-col gap-4 text-center">
                                    <Image src={s.path} alt={s.name} width={100} height={100} className="lg:h-[100px] lg:w-[100px] h-[75px] w-[75px] object-contain mx-auto" />
                                    <span className="lg:text-lg">{s.name}</span>
                                </div>
                            </div>
                        </>
                        )}
                    </div>
                </div>
                <div className="pt-24 border-t-2 border-gray-500/30">
                    <h2 className="lg:text-2xl text-xl font-bold">Description</h2>
                    <p className="mt-10 text-xl text-white/80">
                        {portfolio.description}
                    </p>
                </div>
                <div className="pt-24">
                    <h2 className="lg:text-2xl text-xl font-bold">Sneak Peak</h2>
                    <p className="my-10 text-xl text-white/80">
                        Here’s a sneak peek of what we do with Levare:
                    </p>
                    <Image className="w-full" src={portfolio.sneakPeakImgPath} width={500} height={500} alt="Sneak peak" />
                </div>
                <div className="pt-24">
                    <h2 className="lg:text-2xl text-xl font-bold">Problem Statement</h2>
                    <p className="mt-10 text-xl text-white/80">
                        {portfolio.problem}
                    </p>
                </div>
                <div className="pt-24">
                    <h2 className="lg:text-2xl text-xl font-bold">What We Did</h2>
                    <p className="mt-10 text-xl text-white/80">
                        {portfolio.doing}
                    </p>
                </div>

            </div>
        }
    </main>

}