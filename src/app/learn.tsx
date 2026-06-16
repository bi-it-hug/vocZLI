import { styles } from "@/app/styles"
import { useVoci } from "@/context/voci-context"
import { colors } from "@/theme/colors"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Pressable, Text, View } from "react-native"

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
        <View style={styles.container}>
            <Text
                style={{ position: "absolute", top: 24 }}
            >{`${currentIndex + 1} / ${vociList.length}`}</Text>
            <View
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 18,
                    borderRadius: 16,
                    borderWidth: 1,
                    borderColor: colors.neutral[200],
                    backgroundColor: colors.white,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        width: 300,
                        height: 60,
                        gap: 9,
                    }}
                >
                    <Pressable
                        style={[styles.button, { paddingInline: 8, flex: 1 }]}
                        onPress={() => setShowTranslation(!showTranslation)}
                    >
                        <Text>Translate</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, { paddingInline: 8, flex: 1 }]}
                        onPress={() => handleNext()}
                    >
                        <Text>Next</Text>
                    </Pressable>
                </View>
                <Text
                    style={{
                        padding: 10,
                        fontSize: 28,
                        textAlign: "center",
                    }}
                >
                    {currentVoci.term}
                </Text>
                <Text
                    style={{ color: colors.neutral[400], fontStyle: "italic" }}
                >
                    {showTranslation ? currentVoci.translation : "\u00A0"}
                </Text>
                {/* {showTranslation && <Text>{currentVoci.translation}</Text>} */}
            </View>
        </View>
    )
}
