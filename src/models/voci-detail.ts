import { VociType } from "@/models/voci"

export type VociDetailType = {
    voci?: VociType
    onSave: (voci: VociType) => void
    onCancel?: () => void
    onDelete?: () => void
}
