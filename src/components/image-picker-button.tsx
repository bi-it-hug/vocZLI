import { styles } from "@/theme/styles"
import { typography } from "@/theme/typography"
import { ImagePickerButtonProps } from "@/types/image-picker-button"
import { copyImageToAppDirectory } from "@/utils/image-storage"
import * as ImagePicker from "expo-image-picker"
import { Alert, Image, Text, TouchableOpacity } from "react-native"

export function ImagePickerButton({
    imageUri,
    onImageSelected,
}: ImagePickerButtonProps) {
    async function openCamera() {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== "granted") {
            Alert.alert("Fehler", "Kamera-Zugriff benötigt!")
            return
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            await handleImagePicked(result.assets[0].uri)
        }
    }

    async function handleImagePicked(uri: string) {
        try {
            const permanentUri = await copyImageToAppDirectory(uri)
            onImageSelected(permanentUri)
        } catch (error) {
            console.error("Fehler beim Speichern des Bildes:", error)
            Alert.alert("Fehler", "Bild konnte nicht gespeichert werden.")
        }
    }

    async function openGallery() {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== "granted") {
            Alert.alert("Fehler", "Galerie-Zugriff benötigt!")
            return
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            await handleImagePicked(result.assets[0].uri)
        }
    }

    function showPickerOptions() {
        Alert.alert("Bild auswählen", "Woher möchtest du das Bild nehmen?", [
            { text: "Foto aufnehmen", onPress: () => openCamera() },
            { text: "Aus Galerie wählen", onPress: () => openGallery() },
            { text: "Abbrechen", style: "cancel" },
        ])
    }

    return (
        <TouchableOpacity
            style={styles.imagePicker}
            onPress={showPickerOptions}
            activeOpacity={0.7}
        >
            {imageUri ? (
                <Image source={{ uri: imageUri }} style={styles.imagePickerImage} />
            ) : (
                <Text style={[typography.small, typography.muted]}>
                    Bild hinzufügen
                </Text>
            )}
        </TouchableOpacity>
    )
}
