import { useVoci } from "@/context/voci-context"
import { colors } from "@/theme/colors"
import { styles } from "@/theme/styles"
import { typography } from "@/theme/typography"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function LearnScreen() {
    const [showTranslation, setShowTranslation] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
    const { vociList } = useVoci()
    const router = useRouter()

    const currentVoci = vociList[currentIndex]

    function handleNext() {
        currentIndex < vociList.length - 1
            ? setCurrentIndex(currentIndex + 1)
            : router.push("/")
        setShowTranslation(false)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text
                style={[typography.body, { position: "absolute", top: 24 }]}
            >{`${currentIndex + 1} / ${vociList.length}`}</Text>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "stretch",
                    width: 300,
                    padding: 18,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.neutral[200],
                    backgroundColor: colors.white,
                }}
            >
                {currentVoci.imageUri && (
                    <Image
                        source={{ uri: currentVoci.imageUri }}
                        style={learnStyles.image}
                        resizeMode="cover"
                    />
                )}
                <Text
                    style={[
                        typography.body,
                        {
                            padding: 10,
                            fontSize: 28,
                            textAlign: "center",
                        },
                    ]}
                >
                    {currentVoci.term}
                </Text>
                <Text
                    style={[
                        typography.body,
                        { color: colors.neutral[400], fontStyle: "italic" },
                    ]}
                >
                    {showTranslation ? currentVoci.translation : "\u00A0"}
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        height: 60,
                        gap: 9,
                        marginTop: 12,
                    }}
                >
                    <Pressable
                        style={[styles.button, { paddingInline: 8, flex: 1 }]}
                        onPress={() => setShowTranslation(!showTranslation)}
                    >
                        <Text style={typography.body}>Translate</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, { paddingInline: 8, flex: 1 }]}
                        onPress={() => handleNext()}
                    >
                        <Text style={typography.body}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const learnStyles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        marginBottom: 12,
    },
})
