import type { Meta, StoryObj } from '@storybook/react'
import { LoadingOverlay } from './LoadingOverlay'

const meta: Meta<typeof LoadingOverlay> = {
  title: 'Components/LoadingOverlay',
  component: LoadingOverlay,
  tags: ['autodocs'],
}
export default meta

export const ActiveLoading: StoryObj = {
  render: () => (
    <div className="relative h-64 w-full border border-border rounded-lg overflow-hidden">
      <LoadingOverlay label="Assembling 3D Critter Net..." className="absolute" />
    </div>
  ),
}
