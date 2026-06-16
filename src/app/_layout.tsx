import { styles } from "@/app/styles"
import { VociProvider } from "@/context/voci-context"
import { colors } from "@/theme/colors"
import { Stack, useRouter } from "expo-router"
import { Plus } from "lucide-react-native"
import { Pressable } from "react-native"

export default function RootLayout() {
    const router = useRouter()

    return (
        <VociProvider>
            <Stack
                screenOptions={{
                    headerStyle: {
                        backgroundColor: colors.neutral[100],
                    },
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerRight: () => (
                        <Pressable
                            style={({ pressed }) => [
                                { marginRight: 16, marginTop: 16 },
                                styles.button,
                                pressed && styles.buttonPressed,
                            ]}
                            onPress={() => router.navigate("/add-voci")}
                        >
                            <Plus size={16} />
                        </Pressable>
                    ),
                }}
            >
                <Stack.Screen
                    name="index"
                    options={{ title: "Meine Vokabeln" }}
                />
                <Stack.Screen
                    name="learn"
                    options={{ title: "Vokabeln lernen" }}
                />
                <Stack.Screen
                    name="add-voci"
                    options={{ title: "Neue Vokabel", presentation: "modal" }}
                />
                <Stack.Screen
                    name="edit-voci"
                    options={{
                        title: "Vokabel bearbeiten",
                        presentation: "modal",
                    }}
                />
            </Stack>
        </VociProvider>
    )
}
