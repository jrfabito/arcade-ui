import type { Meta, StoryObj } from '@storybook/react'
import { ActionTooltip } from './ActionTooltip'
import { Button } from '@/primitives/Button'

const meta: Meta<typeof ActionTooltip> = {
  title: 'Components/ActionTooltip',
  component: ActionTooltip,
  tags: ['autodocs'],
}
export default meta

export const FloatingCard: StoryObj = {
  render: () => (
    <div className="relative h-64 flex items-center justify-center p-8 bg-muted/40 rounded-lg">
      <ActionTooltip x={300} y={200}>
        <div className="flex flex-col gap-2">
          <p className="font-header text-base">Select Face</p>
          <p className="text-xs text-muted-foreground">Pick a facet on the 3D model to attach sticker.</p>
          <Button variant="primary" size="sm">Attach Sticker</Button>
        </div>
      </ActionTooltip>
    </div>
  ),
}
