import type { Meta, StoryObj } from '@storybook/react'
import { GlassPanel } from './GlassPanel'
import { Button } from './Button'
import { Input } from './Input'
import { Label } from './Label'

const meta: Meta<typeof GlassPanel> = {
  title: 'Primitives/GlassPanel',
  component: GlassPanel,
  tags: ['autodocs'],
}
export default meta

export const OverArtwork: StoryObj = {
  render: () => (
    <div className="flex min-h-[320px] items-center justify-center rounded-xl bg-[radial-gradient(circle_at_22%_26%,var(--brand-lime),transparent_42%),radial-gradient(circle_at_80%_74%,var(--brand-sky),transparent_48%),linear-gradient(135deg,#e7edf0,#d3dde2)] p-8 dark:bg-[radial-gradient(circle_at_22%_26%,#33380f,transparent_42%),radial-gradient(circle_at_80%_74%,#162a35,transparent_48%),linear-gradient(135deg,#121214,#202026)]">
      <GlassPanel className="w-72 flex flex-col gap-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-label">
          Toy Properties
        </p>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="floating-name">Name</Label>
          <Input id="floating-name" defaultValue="Sir Fluffington" />
        </div>
        <Button variant="hero" size="sm" className="mt-1">
          Add to Gallery
        </Button>
      </GlassPanel>
    </div>
  ),
}
