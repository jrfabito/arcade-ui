import type { Meta, StoryObj } from '@storybook/react'
import { DrawerShell } from './DrawerShell'
import { Button } from '@/primitives/Button'
import { HelpCircle } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof DrawerShell> = {
  title: 'Components/DrawerShell',
  component: DrawerShell,
  tags: ['autodocs'],
}
export default meta

export const InteractiveDrawer: StoryObj = {
  render: function DrawerDemo() {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <Button onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <DrawerShell
          open={open}
          onClose={() => setOpen(false)}
          title="Studio Help"
          icon={<HelpCircle className="size-5 text-accent-strong" />}
        >
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Controls</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Use left mouse drag to orbit the critter model. Right mouse drag to pan, and scroll wheel to zoom.
            </p>
            <h4 className="font-display font-semibold text-foreground">Keyboard Shortcuts</h4>
            <ul className="space-y-1 font-mono text-xs">
              <li>⌘Z — Undo</li>
              <li>⇧⌘Z — Redo</li>
              <li>Space — Center view</li>
            </ul>
          </div>
        </DrawerShell>
      </div>
    )
  },
}
