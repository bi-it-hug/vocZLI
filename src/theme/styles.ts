import { colors } from "@/theme/colors"
import { radius, sizes, spacing } from "@/theme/spacing"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: spacing.screen,
        backgroundColor: colors.white,
    },
    stack: {
        gap: spacing.sm,
    },
    card: {
        width: sizes.learnCardWidth,
        padding: spacing.xxxl,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.neutral[200],
        backgroundColor: colors.white,
        alignItems: "stretch",
        justifyContent: "center",
    },
    cardImage: {
        width: "100%",
        height: sizes.learnImageHeight,
        borderRadius: radius.md,
        marginBottom: spacing.xl,
    },
    button: {
        minWidth: 31,
        padding: spacing.sm,
        backgroundColor: colors.neutral[100],
        borderColor: colors.neutral[200],
        borderWidth: 1,
        borderRadius: radius.sm,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
    },
    buttonCenter: {
        alignItems: "center",
        alignSelf: "stretch",
    },
    buttonFlex: {
        flex: 1,
        paddingHorizontal: spacing.md,
    },
    buttonRow: {
        flexDirection: "row",
        height: sizes.buttonRowHeight,
        gap: 9,
        marginTop: spacing.xl,
    },
    input: {
        backgroundColor: colors.neutral[100],
        borderColor: colors.neutral[200],
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        borderWidth: 1,
        borderRadius: radius.sm,
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: sizes.inputMaxWidth,
    },
    floatingButton: {
        position: "absolute",
        bottom: spacing.screen,
        right: spacing.screen,
    },
    buttonPressed: {
        transform: [{ translateY: 2 }],
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: spacing.lg,
        padding: spacing.lg,
        borderRadius: radius.lg,
        borderWidth: 1,
        borderColor: colors.neutral[200],
        backgroundColor: colors.white,
        minWidth: 200,
        margin: spacing.xs,
    },
    thumbnail: {
        width: sizes.thumbnail,
        height: sizes.thumbnail,
        borderRadius: radius.md,
    },
    thumbnailPlaceholder: {
        width: sizes.thumbnail,
        height: sizes.thumbnail,
        borderRadius: radius.md,
        backgroundColor: colors.neutral[200],
    },
    textContainer: {
        flex: 1,
    },
    imagePicker: {
        width: sizes.imagePicker,
        height: sizes.imagePicker,
        borderRadius: radius.md,
        backgroundColor: colors.neutral[200],
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    imagePickerImage: {
        width: sizes.imagePicker,
        height: sizes.imagePicker,
    },
    progressLabel: {
        position: "absolute",
        top: spacing.header,
    },
    headerButton: {
        marginRight: spacing.xxl,
        marginTop: spacing.xxl,
    },
})
