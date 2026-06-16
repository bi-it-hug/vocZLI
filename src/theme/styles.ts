import { colors } from "@/theme/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        padding: 20,
        backgroundColor: colors.white,
    },
    button: {
        minWidth: 31,
        padding: 6,
        backgroundColor: colors.neutral[100],
        borderColor: colors.neutral[200],
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    input: {
        backgroundColor: colors.neutral[100],
        borderColor: colors.neutral[200],
        paddingBlock: 6,
        paddingInline: 8,
        borderWidth: 1,
        borderRadius: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: 240,
    },
    floatingButton: {
        position: "absolute",
        bottom: 20,
        right: 20,
    },
    buttonPressed: {
        transform: [{ translateY: 2 }],
    },
})
