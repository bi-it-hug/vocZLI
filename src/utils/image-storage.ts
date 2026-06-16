import { File, Paths } from "expo-file-system"
import { manipulateAsync, SaveFormat } from "expo-image-manipulator"

const MAX_WIDTH = 800
const QUALITY = 0.7

export function isAppImageUri(uri: string): boolean {
    return uri.startsWith(Paths.document.uri)
}

export async function copyImageToAppDirectory(
    sourceUri: string
): Promise<string> {
    const compressed = await manipulateAsync(
        sourceUri,
        [{ resize: { width: MAX_WIDTH } }],
        { compress: QUALITY, format: SaveFormat.JPEG }
    )

    const filename = `${Date.now()}.jpg`
    const destFile = new File(Paths.document, filename)
    const sourceFile = new File(compressed.uri)
    await sourceFile.copy(destFile)

    return destFile.uri
}

export function deleteImageFromAppDirectory(
    imageUri: string | undefined
): void {
    if (!imageUri || !isAppImageUri(imageUri)) return

    try {
        const file = new File(imageUri)
        if (file.exists) {
            file.delete()
        }
    } catch (error) {
        console.error("Fehler beim Löschen des Bildes:", error)
    }
}
