import type { VociProps } from "@/types/voci"
import { deleteImageFromAppDirectory } from "@/utils/image-storage"
import AsyncStorage from "@react-native-async-storage/async-storage"
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

type VociContextType = {
    isLoading: boolean
    vociList: VociProps[]
    addVoci: (voci: VociProps) => void
    updateVoci: (term: VociProps["term"], updatedVoci: VociProps) => void
    removeVoci: (term: VociProps["term"]) => void
}

const VociContext = createContext<VociContextType | undefined>(undefined)

function VociProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)
    const [vociList, setVociList] = useState<VociProps[]>([
        { term: "Apple", translation: "Apfel" },
        { term: "Banana", translation: "Banane" },
        { term: "Cherry", translation: "Kirsche" },
    ])

    function addVoci(newVoci: VociProps) {
        setVociList((prev) => [...prev, newVoci])
    }

    function updateVoci(term: VociProps["term"], updatedVoci: VociProps) {
        setVociList((prev) =>
            prev.map((voci) => {
                if (voci.term !== term) return voci
                if (voci.imageUri && voci.imageUri !== updatedVoci.imageUri) {
                    deleteImageFromAppDirectory(voci.imageUri)
                }
                return updatedVoci
            })
        )
    }

    function removeVoci(term: VociProps["term"]) {
        setVociList((prev) => {
            const voci = prev.find((v) => v.term === term)
            deleteImageFromAppDirectory(voci?.imageUri)
            return prev.filter((v) => v.term !== term)
        })
    }

    useEffect(() => {
        async function loadVocis() {
            try {
                // await new Promise((resolve) => setTimeout(resolve, 1000))

                const vocis: VociProps[] = JSON.parse(
                    (await AsyncStorage.getItem("vocis")) ?? "[]"
                )
                console.info("Erfolgreich geladen!")
                setVociList(vocis)
            } catch (error) {
                console.error(`Fehler beim laden: ${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        loadVocis()
    }, [])

    useEffect(() => {
        async function saveVocis() {
            try {
                await AsyncStorage.setItem("vocis", JSON.stringify(vociList))
                console.info("Erfolgreich gespeichert!")
            } catch (error) {
                console.error(`Fehler beim speichern: ${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        saveVocis()
    }, [vociList])

    return (
        <VociContext.Provider
            value={{ isLoading, vociList, addVoci, updateVoci, removeVoci }}
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

export { VociProvider, useVoci }
