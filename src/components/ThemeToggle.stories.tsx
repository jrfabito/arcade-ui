import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle } from './ThemeToggle'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="p-4">
      <ThemeToggle />
    </div>
  ),
}
