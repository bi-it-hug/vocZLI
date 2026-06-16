import { VociItem } from "@/components/voci-item"
import { useVoci } from "@/context/voci-context"
import { colors } from "@/theme/colors"
import { styles } from "@/theme/styles"
import { useRouter } from "expo-router"
import { GraduationCap } from "lucide-react-native"
import { ActivityIndicator, FlatList, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Index() {
    const router = useRouter()
    const { vociList, isLoading } = useVoci()

    return (
        <SafeAreaView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator color={colors.neutral[500]} />
            ) : (
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
            )}
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
        </SafeAreaView>
    )
}
