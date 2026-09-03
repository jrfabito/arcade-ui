import type { Meta, StoryObj } from '@storybook/react'
import { ConfirmModal } from './ConfirmModal'
import { Button } from '@/primitives/Button'
import { useState } from 'react'

const meta: Meta<typeof ConfirmModal> = {
  title: 'Components/ConfirmModal',
  component: ConfirmModal,
  tags: ['autodocs'],
}
export default meta

export const DestructivePrompt: StoryObj = {
  render: function ConfirmDemo() {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <Button variant="destructive" onClick={() => setOpen(true)}>Delete Project</Button>
        <ConfirmModal
          open={open}
          destructive
          title="Delete Toy Draft?"
          description="Are you sure you want to delete Sir Fluffington? This action permanently removes the draft from your local storage and cannot be undone."
          confirmLabel="Delete Draft"
          onConfirm={() => {
            alert('Deleted!')
            setOpen(false)
          }}
          onCancel={() => setOpen(false)}
        />
      </div>
    )
  },
}
