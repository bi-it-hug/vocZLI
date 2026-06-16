import type { VociType } from "@/models/voci"
import { colors } from "@/theme/colors"
import { Text, TouchableOpacity, View } from "react-native"

type VociItemProps = VociType & {
    onPress: () => void
}

export function VociItem({ term, translation, imageUri, onPress }: VociItemProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingBlock: 9,
                paddingInline: 16,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: colors.neutral[200],
                backgroundColor: colors.white,
                minWidth: 200,
                margin: 5,
            }}
        >
            {/* <Text>{imageUri ?? "nix da"}</Text> */}
            <View>
                <Text style={{ fontSize: 28 }}>{term}</Text>
                <Text>{translation}</Text>
            </View>
        </TouchableOpacity>
    )
}
