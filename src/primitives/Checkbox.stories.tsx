import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { Label } from './Label'
import { useState } from 'react'

const meta: Meta<typeof Checkbox> = {
  title: 'Primitives/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
}
export default meta

export const Interactive: StoryObj = {
  render: function CheckboxDemo() {
    const [checked, setChecked] = useState<boolean | 'indeterminate'>(true)
    return (
      <div className="flex flex-col gap-4 p-4">
        <label className="flex items-center gap-2.5 text-sm font-medium cursor-pointer">
          <Checkbox checked={checked} onCheckedChange={setChecked} id="terms" />
          <span>Agree to Paper Critters community terms</span>
        </label>
        <label className="flex items-center gap-2.5 text-sm font-medium opacity-50 cursor-not-allowed">
          <Checkbox checked={false} disabled id="disabled" />
          <span>Disabled option</span>
        </label>
      </div>
    )
  },
}
