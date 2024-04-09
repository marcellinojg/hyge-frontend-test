import { ReactNode } from "react"


export const CategoryList = ({ children }: { children: ReactNode }) => {
    return <div className="flex items-center justify-start flex-wrap gap-3">
        {children}
    </div>
}

export const CategoryBadge = ({ children }: { children: ReactNode }) => {
    return <div className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 rounded-full">
        <div className="border-2 border-blue-500 rounded-full p-3 lg:px-8 px-4 lg:text-base text-xs bg-gradient-to-b from-slate-700 to-slate-900">
            <span className="bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 inline-block text-transparent bg-clip-text font-bold">{children}</span>
        </div>
    </div>
}