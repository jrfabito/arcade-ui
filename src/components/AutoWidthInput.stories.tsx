import type { Meta, StoryObj } from '@storybook/react'
import { AutoWidthInput } from './AutoWidthInput'
import { useState } from 'react'

const meta: Meta<typeof AutoWidthInput> = {
  title: 'Components/AutoWidthInput',
  component: AutoWidthInput,
  tags: ['autodocs'],
}
export default meta

export const Interactive: StoryObj = {
  render: function AutoWidthDemo() {
    const [val, setVal] = useState('Type to grow me...')
    return (
      <div className="p-4 flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">Input width auto-fits text dynamically:</span>
        <AutoWidthInput
          value={val}
          onChange={(e) => setVal(e.target.value)}
          className="border-2 border-input-border rounded-md px-3 py-1 text-base font-semibold"
        />
      </div>
    )
  },
}
