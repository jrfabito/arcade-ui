import { type ReactNode } from 'react'
import { ModalShell } from './ModalShell'
import { Button } from '@/primitives/Button'

export interface ConfirmModalProps {
  open: boolean
  title: string
  description: ReactNode
  confirmLabel?: string
  cancelLabel?: string
  destructive?: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  destructive = false,
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) return null

  return (
    <ModalShell title={title} onClose={onCancel}>
      <div className="flex flex-col gap-4">
        <div className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </div>
        <div className="flex justify-end gap-2.5 pt-2">
          <Button variant="ghost" size="sm" onClick={onCancel}>
            {cancelLabel}
          </Button>
          <Button
            variant={destructive ? "destructive" : "primary"}
            size="sm"
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </ModalShell>
  )
}
