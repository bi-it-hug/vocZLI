import { VociProps } from "@/types/voci"

export type VociDetailProps = {
    voci?: VociProps
    onSave: (voci: VociProps) => void
    onCancel?: () => void
    onDelete?: () => void
}
