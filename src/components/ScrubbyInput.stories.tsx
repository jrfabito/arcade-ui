import type { Meta, StoryObj } from '@storybook/react'
import { ScrubbyInput } from './ScrubbyInput'
import { useState } from 'react'

const meta: Meta<typeof ScrubbyInput> = {
  title: 'Components/ScrubbyInput',
  component: ScrubbyInput,
  tags: ['autodocs'],
}
export default meta

export const InteractiveScrub: StoryObj = {
  render: function ScrubDemo() {
    const [x, setX] = useState(120)
    const [y, setY] = useState(45)
    return (
      <div className="flex flex-col gap-3 max-w-xs p-4 rounded-lg border border-border bg-card">
        <p className="text-xs text-muted-foreground">Click and drag label to scrub, or click input to edit value.</p>
        <ScrubbyInput label="X" value={x} onValueChange={setX} step={1} min={0} max={500} />
        <ScrubbyInput label="Y" value={y} onValueChange={setY} step={1} min={0} max={500} />
      </div>
    )
  },
}
