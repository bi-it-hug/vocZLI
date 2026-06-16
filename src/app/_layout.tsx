import { VociProvider } from "@/context/voci-context"
import { colors } from "@/theme/colors"
import { styles } from "@/theme/styles"
import {
    Geist_100Thin,
    Geist_200ExtraLight,
    Geist_300Light,
    Geist_400Regular,
    Geist_500Medium,
    Geist_600SemiBold,
    Geist_700Bold,
    Geist_800ExtraBold,
    Geist_900Black,
    useFonts,
} from "@expo-google-fonts/geist"
import { Stack, useRouter } from "expo-router"
import { Plus } from "lucide-react-native"
import { Pressable } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
    const router = useRouter()

    const [fontsLoaded] = useFonts({
        Geist_100Thin,
        Geist_200ExtraLight,
        Geist_300Light,
        Geist_400Regular,
        Geist_500Medium,
        Geist_600SemiBold,
        Geist_700Bold,
        Geist_800ExtraBold,
        Geist_900Black,
    })

    if (!fontsLoaded) {
        return null
    }

    return (
        <SafeAreaProvider>
            <VociProvider>
                <Stack
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: colors.neutral[100],
                        },
                        headerTitleStyle: {
                            fontFamily: "Geist_500Medium",
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
                        options={{
                            title: "Neue Vokabel",
                            presentation: "modal",
                        }}
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
        </SafeAreaProvider>
    )
}
