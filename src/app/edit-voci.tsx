import { styles } from "@/app/styles"
import { VociDetail } from "@/components/voci-detail"
import { useVoci } from "@/context/voci-context"
import { VociType } from "@/models/voci"
import { useLocalSearchParams, useRouter } from "expo-router"
import { View } from "react-native"

export default function EditVoci() {
    const router = useRouter()
    const { term: termParam } = useLocalSearchParams<{ term: string }>()
    const term = Array.isArray(termParam) ? termParam[0] : termParam
    const { vociList, updateVoci, removeVoci } = useVoci()

    const voci = term ? vociList.find((v) => v.term === term) : undefined
    if (!voci) return null

    const originalTerm = voci.term

    function handleSave(updatedVoci: VociType) {
        updateVoci(originalTerm, updatedVoci)
        router.back()
    }

    function handleDelete() {
        removeVoci(originalTerm)
        router.back()
    }

    return (
        <View style={styles.container}>
            <VociDetail
                voci={voci}
                onSave={handleSave}
                onCancel={() => router.back()}
                onDelete={handleDelete}
            />
        </View>
    )
}
