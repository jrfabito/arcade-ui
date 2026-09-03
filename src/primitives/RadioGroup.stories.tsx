import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from './RadioGroup'
import { Label } from './Label'
import { useState } from 'react'

const meta: Meta<typeof RadioGroup> = {
  title: 'Primitives/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
}
export default meta

export const PlanSelection: StoryObj = {
  render: function RadioDemo() {
    const [value, setValue] = useState('standard')
    return (
      <div className="p-4">
        <RadioGroup value={value} onValueChange={setValue} className="flex gap-6">
          <label className="flex items-center gap-2.5 text-sm cursor-pointer">
            <RadioGroupItem value="standard" id="r1" />
            <span>Standard PDF</span>
          </label>
          <label className="flex items-center gap-2.5 text-sm cursor-pointer">
            <RadioGroupItem value="hires" id="r2" />
            <span>High-Resolution 300 DPI</span>
          </label>
        </RadioGroup>
      </div>
    )
  },
}
