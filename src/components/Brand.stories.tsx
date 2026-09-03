import type { Meta, StoryObj } from '@storybook/react'
import { ArcadeMark } from './Brand'

const meta: Meta<typeof ArcadeMark> = {
  title: 'Components/Brand',
  component: ArcadeMark,
  tags: ['autodocs'],
}
export default meta

export const GlyphMark: StoryObj = {
  render: () => (
    <div className="p-8 flex items-center gap-6">
      <ArcadeMark className="h-10 w-auto text-brand-lime" />
      <ArcadeMark className="h-14 w-auto text-brand-sky" />
      <ArcadeMark className="h-20 w-auto text-foreground" />
    </div>
  ),
}
