import { colors } from "@/theme/colors"
import { fonts } from "@/theme/fonts"
import { StyleSheet } from "react-native"

export const typography = StyleSheet.create({
    heading: {
        fontFamily: fonts.medium,
        fontSize: 18,
    },
    body: {
        fontFamily: fonts.regular,
        fontSize: 16,
    },
    small: {
        fontFamily: fonts.regular,
        fontSize: 14,
    },
    display: {
        fontFamily: fonts.regular,
        fontSize: 28,
        textAlign: "center",
        padding: 10,
    },
    muted: {
        color: colors.neutral[400],
    },
    italicMuted: {
        color: colors.neutral[400],
        fontStyle: "italic",
    },
})
