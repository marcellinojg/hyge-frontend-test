

import { ReactNode } from "react"


export const ClientList = ({ children }: { children: ReactNode }) => {
    return <div className="flex items-center gap-3 flex-wrap mt-4">
        {children}
    </div>
}

export const ClientBadge = ({ children }: { children: ReactNode }) => {
    return <div className="border-2 border-white/30 bg-gradient-to-b from-white/[0.05] to-transparent py-3 px-8 rounded-xl">
        {children}
    </div>
}