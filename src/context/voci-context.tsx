import type { VociType } from "@/models/voci"
import { createContext, ReactNode, useContext, useState } from "react"

type VociContextType = {
    vociList: VociType[]
    addVoci: (voci: VociType) => void
    updateVoci: (term: VociType["term"], updatedVoci: VociType) => void
    removeVoci: (term: VociType["term"]) => void
}

const VociContext = createContext<VociContextType | undefined>(undefined)

function VociProvider({ children }: { children: ReactNode }) {
    const [vociList, setVociList] = useState<VociType[]>([
        { term: "Apple", translation: "Apfel" },
        { term: "Banana", translation: "Banane" },
        { term: "Cherry", translation: "Kirsche" },
    ])

    function addVoci(newVoci: VociType) {
        setVociList((prev) => [...prev, newVoci])
    }

    function updateVoci(term: VociType["term"], updatedVoci: VociType) {
        setVociList((prev) =>
            prev.map((voci) => (voci.term === term ? updatedVoci : voci))
        )
    }

    function removeVoci(term: VociType["term"]) {
        setVociList((prev) => prev.filter((voci) => voci.term !== term))
    }

    return (
        <VociContext.Provider
            value={{ vociList, addVoci, updateVoci, removeVoci }}
        >
            {children}
        </VociContext.Provider>
    )
}

function useVoci() {
    const context = useContext(VociContext)
    if (!context)
        throw new Error(
            "useVoci muss innerhalb von VociProvider verwendet werden"
        )
    return context
}

export { useVoci, VociProvider }
