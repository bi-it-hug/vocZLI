import { styles } from "@/theme/styles"
import { typography } from "@/theme/typography"
import { VociItemProps } from "@/types/voci-item"
import { Image, Text, TouchableOpacity, View } from "react-native"

export function VociItem({
    term,
    translation,
    imageUri,
    onPress,
}: VociItemProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.listItem}>
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.thumbnail}
                    resizeMode="cover"
                />
            ) : (
                <View style={styles.thumbnailPlaceholder} />
            )}
            <View style={styles.textContainer}>
                <Text style={typography.heading}>{term}</Text>
                <Text style={[typography.body, typography.muted]}>
                    {translation}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
