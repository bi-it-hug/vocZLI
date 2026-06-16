import { colors } from "@/theme/colors"
import { typography } from "@/theme/typography"
import { VociItemProps } from "@/types/voci-item"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const THUMBNAIL_SIZE = 46

export function VociItem({
    term,
    translation,
    imageUri,
    onPress,
}: VociItemProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {imageUri ? (
                <Image
                    source={{ uri: imageUri }}
                    style={styles.thumbnail}
                    resizeMode="cover"
                />
            ) : (
                <View style={styles.placeholder} />
            )}
            <View style={styles.textContainer}>
                <Text style={[typography.heading]}>{term}</Text>
                <Text style={[typography.body, { color: colors.neutral[400] }]}>
                    {translation}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        padding: 10,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.neutral[200],
        backgroundColor: colors.white,
        minWidth: 200,
        margin: 5,
    },
    thumbnail: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
        borderRadius: 12,
    },
    placeholder: {
        width: THUMBNAIL_SIZE,
        height: THUMBNAIL_SIZE,
        borderRadius: 12,
        backgroundColor: colors.neutral[200],
    },
    textContainer: {
        flex: 1,
    },
})
