import { useVoci } from "@/context/voci-context"
import { styles } from "@/theme/styles"
import { typography } from "@/theme/typography"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Image, Pressable, Text, View } from "react-native"
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
            <Text style={[typography.body, styles.progressLabel]}>
                {`${currentIndex + 1} / ${vociList.length}`}
            </Text>
            <View style={styles.card}>
                {currentVoci.imageUri && (
                    <Image
                        source={{ uri: currentVoci.imageUri }}
                        style={styles.cardImage}
                        resizeMode="cover"
                    />
                )}
                <Text style={typography.display}>{currentVoci.term}</Text>
                <Text style={[typography.body, typography.italicMuted]}>
                    {showTranslation ? currentVoci.translation : "\u00A0"}
                </Text>
                <View style={styles.buttonRow}>
                    <Pressable
                        style={[styles.button, styles.buttonFlex]}
                        onPress={() => setShowTranslation(!showTranslation)}
                    >
                        <Text style={typography.body}>Translate</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button, styles.buttonFlex]}
                        onPress={() => handleNext()}
                    >
                        <Text style={typography.body}>Next</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}
