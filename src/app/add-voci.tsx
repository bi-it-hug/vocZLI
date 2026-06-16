import { styles } from "@/app/styles"
import { VociDetail } from "@/components/voci-detail"
import { useVoci } from "@/context/voci-context"
import { VociType } from "@/models/voci"
import { useRouter } from "expo-router"
import { View } from "react-native"

export default function AddVoci() {
    const router = useRouter()
    const { addVoci } = useVoci()

    function handleAdd(newVoci: VociType) {
        addVoci(newVoci)
        router.back()
    }

    return (
        <View style={styles.container}>
            <VociDetail onSave={handleAdd} />
        </View>
    )
}
