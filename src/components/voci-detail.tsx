import { styles } from "@/app/styles"
import { VociType } from "@/models/voci"
import { VociDetailType } from "@/models/voci-detail"
import { colors } from "@/theme/colors"
import { useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

export function VociDetail({
    voci,
    onSave,
    onCancel,
    onDelete,
}: VociDetailType) {
    const isEdit = voci !== undefined
    const [term, setTerm] = useState(voci?.term ?? "")
    const [translation, setTranslation] = useState(voci?.translation ?? "")

    function handleSave() {
        if (!term.trim() || !translation.trim()) {
            Alert.alert("Error", "Alle Felder ausfüllen!")
        } else {
            const newVoci: VociType = { term, translation }
            onSave(newVoci)
            if (!isEdit) {
                setTerm("")
                setTranslation("")
            }
        }
    }

    function handleDelete() {
        Alert.alert("Löschen", "Vokabel wirklich löschen?", [
            { text: "Abbrechen", style: "cancel" },
            {
                text: "Löschen",
                style: "destructive",
                onPress: () => onDelete?.(),
            },
        ])
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ gap: 6 }}>
                <TextInput
                    placeholder="Term"
                    style={styles.input}
                    value={term}
                    onChangeText={setTerm}
                    placeholderTextColor={colors.neutral[400]}
                />
                <TextInput
                    placeholder="Translation"
                    style={styles.input}
                    value={translation}
                    onChangeText={setTranslation}
                    placeholderTextColor={colors.neutral[400]}
                />
                <Pressable
                    style={[styles.input, { alignItems: "center" }]}
                    onPress={handleSave}
                >
                    <Text>Speichern</Text>
                </Pressable>
                {isEdit && (
                    <View style={{ gap: 6 }}>
                        <Pressable
                            style={[styles.input, { alignItems: "center" }]}
                            onPress={onCancel}
                        >
                            <Text>Abbrechen</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.input, { alignItems: "center" }]}
                            onPress={handleDelete}
                        >
                            <Text>Löschen</Text>
                        </Pressable>
                    </View>
                )}
            </SafeAreaView>
        </SafeAreaProvider>
    )
}
