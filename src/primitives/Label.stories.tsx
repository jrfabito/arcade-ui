import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Primitives/Label',
  component: Label,
  tags: ['autodocs'],
}
export default meta

export const TypographyVariants: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-4 p-4">
      <div>
        <Label>Standard Input Label (IBM Plex Sans)</Label>
      </div>
      <div>
        <Label className="font-mono text-[11px] font-semibold uppercase tracking-[0.06em] text-label">
          Section Header Mono Label (IBM Plex Mono)
        </Label>
      </div>
    </div>
  ),
}
