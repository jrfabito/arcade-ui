import type { Meta, StoryObj } from '@storybook/react'
import { ModalShell } from './ModalShell'
import { Button } from '@/primitives/Button'
import { useState } from 'react'

const meta: Meta<typeof ModalShell> = {
  title: 'Components/ModalShell',
  component: ModalShell,
  tags: ['autodocs'],
}
export default meta

export const InteractiveModal: StoryObj = {
  render: function ModalDemo() {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Modal Dialog</Button>
        {open && (
          <ModalShell title="Publish Toy" onClose={() => setOpen(false)}>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                Your toy will be reviewed and published to the community showcase.
              </p>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="hero" size="sm" onClick={() => setOpen(false)}>Confirm & Publish</Button>
              </div>
            </div>
          </ModalShell>
        )}
      </div>
    )
  },
}
