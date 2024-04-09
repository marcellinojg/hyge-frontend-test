import Image from "next/image"
import { CategoryBadge, CategoryList } from "./CategoryBadge"
import { Fade } from "react-awesome-reveal"
import ROUTES from "@/routes"
import Link from "next/link"


interface PortfolioCardProps {
    title: string
    categories: string[]
    description: string
    imgPath: string
    id: string
}

const PortfolioCard = (props: PortfolioCardProps) => {
    const { title, categories, description, imgPath, id } = props
    return <Link href={ROUTES.DYNAMIC.PORTFOLIOS(id)}>
        <div className="backdrop-blur-sm from-[#061430] via-[#041331] to-[#061430] bg-gradient-to-br p-4 rounded-lg border-[1px] border-white/20">
            <Image src={imgPath} className="w-full object-cover rounded-lg" width={500} height={500} alt="Portofolio Preview" />
            <div className="bg-transparent rounded-lg border-[1px] border-white/20 mt-6 w-full p-4 lg:space-y-8 space-y-5">
                <CategoryList>
                    <Fade cascade duration={700} direction="up">
                        {categories.map(category => <CategoryBadge key={category}>{category}</CategoryBadge>)}
                    </Fade>
                </CategoryList>
                <Fade cascade>
                    <h2 className="lg:text-2xl text-xl font-bold">{title}</h2>
                    <p className="lg:text-lg text-white/80 line-clamp-3">
                        {description}
                    </p>
                </Fade>
            </div>
        </div>
    </Link>

}

export default PortfolioCard