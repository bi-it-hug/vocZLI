import { colors } from "@/theme/colors"
import { styles } from "@/theme/styles"
import { typography } from "@/theme/typography"
import { VociProps } from "@/types/voci"
import { VociDetailProps } from "@/types/voci-detail"
import { deleteImageFromAppDirectory } from "@/utils/image-storage"
import { useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { ImagePickerButton } from "./image-picker-button"

export function VociDetail({
    voci,
    onSave,
    onCancel,
    onDelete,
}: VociDetailProps) {
    const isEdit = voci !== undefined
    const [term, setTerm] = useState(voci?.term ?? "")
    const [translation, setTranslation] = useState(voci?.translation ?? "")
    const [imageUri, setImageUri] = useState(voci?.imageUri ?? undefined)

    function handleSave() {
        if (!term.trim() || !translation.trim()) {
            Alert.alert("Error", "Alle Felder ausfüllen!")
        } else {
            const newVoci: VociProps = { term, translation, imageUri }
            onSave(newVoci)
            if (!isEdit) {
                setTerm("")
                setTranslation("")
                setImageUri(undefined)
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

    function handleCancel() {
        if (isEdit && imageUri && imageUri !== voci?.imageUri) {
            deleteImageFromAppDirectory(imageUri)
        }
        onCancel?.()
    }

    return (
        <View style={{ gap: 6, width: "auto" }}>
            <ImagePickerButton
                imageUri={imageUri}
                onImageSelected={setImageUri}
            />
            <TextInput
                placeholder="Term"
                style={[typography.body, styles.input]}
                value={term}
                onChangeText={setTerm}
                placeholderTextColor={colors.neutral[400]}
            />
            <TextInput
                placeholder="Translation"
                style={[typography.body, styles.input]}
                value={translation}
                onChangeText={setTranslation}
                placeholderTextColor={colors.neutral[400]}
            />
            <Pressable
                style={[styles.input, { alignItems: "center" }]}
                onPress={handleSave}
            >
                <Text style={typography.body}>Speichern</Text>
            </Pressable>
            {isEdit && (
                <View style={{ gap: 6 }}>
                    <Pressable
                        style={[styles.input, { alignItems: "center" }]}
                        onPress={handleCancel}
                    >
                        <Text style={typography.body}>Abbrechen</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.input, { alignItems: "center" }]}
                        onPress={handleDelete}
                    >
                        <Text style={typography.body}>Löschen</Text>
                    </Pressable>
                </View>
            )}
        </View>
    )
}
