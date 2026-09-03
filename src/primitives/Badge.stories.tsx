import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  tags: ['autodocs'],
}
export default meta

export const AllBadges: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-2.5 p-4">
      <Badge variant="solid">Free</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="soft">Draft</Badge>
      <Badge variant="outline">Beta</Badge>
      <Badge variant="danger">Locked</Badge>
    </div>
  ),
}
