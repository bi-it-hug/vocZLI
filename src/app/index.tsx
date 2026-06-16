import { styles } from "@/app/styles"
import { VociItem } from "@/components/voci-item"
import { useVoci } from "@/context/voci-context"
import { useRouter } from "expo-router"
import { GraduationCap } from "lucide-react-native"
import { FlatList, Pressable, View } from "react-native"

export default function Index() {
    const router = useRouter()
    const { vociList } = useVoci()

    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={vociList}
                    keyExtractor={(item) => item.term}
                    renderItem={({ item }) => (
                        <VociItem
                            term={item.term}
                            translation={item.translation}
                            imageUri={item.imageUri}
                            onPress={() =>
                                router.push(
                                    `/edit-voci?term=${encodeURIComponent(item.term)}`
                                )
                            }
                        />
                    )}
                />
            </View>
            <Pressable
                style={({ pressed }) => [
                    styles.floatingButton,
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={() => router.navigate("/learn")}
            >
                <GraduationCap size={16} />
            </Pressable>
        </>
    )
}
