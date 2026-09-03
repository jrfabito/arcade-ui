import type { Meta, StoryObj } from '@storybook/react'
import { ItemTooltipCard, ItemTooltipHeader } from './ItemTooltip'
import { Badge } from '@/primitives/Badge'
import { Button } from '@/primitives/Button'

const meta: Meta<typeof ItemTooltipCard> = {
  title: 'Components/ItemTooltip',
  component: ItemTooltipCard,
  tags: ['autodocs'],
}
export default meta

export const PreviewTooltip: StoryObj = {
  render: () => (
    <div className="p-8">
      <ItemTooltipCard width={260}>
        <ItemTooltipHeader
          title="Cyber Bunny"
          subtitle="Created by paper_pro"
          statusBadge={<Badge variant="accent">New Release</Badge>}
        />
        <div className="mt-3 flex gap-2">
          <Button variant="hero" size="sm" className="w-full">
            Inspect
          </Button>
        </div>
      </ItemTooltipCard>
    </div>
  ),
}
