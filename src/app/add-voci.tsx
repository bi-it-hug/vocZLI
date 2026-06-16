import { VociDetail } from "@/components/voci-detail"
import { useVoci } from "@/context/voci-context"
import { styles } from "@/theme/styles"
import { VociProps } from "@/types/voci"
import { useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AddVoci() {
    const router = useRouter()
    const { addVoci } = useVoci()

    function handleAdd(newVoci: VociProps) {
        addVoci(newVoci)
        router.back()
    }

    return (
        <SafeAreaView style={styles.container}>
            <VociDetail onSave={handleAdd} />
        </SafeAreaView>
    )
}
