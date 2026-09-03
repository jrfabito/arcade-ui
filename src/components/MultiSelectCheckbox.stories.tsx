import type { Meta, StoryObj } from '@storybook/react'
import { MultiSelectCheckbox } from './MultiSelectCheckbox'
import { useState } from 'react'

const meta: Meta<typeof MultiSelectCheckbox> = {
  title: 'Components/MultiSelectCheckbox',
  component: MultiSelectCheckbox,
  tags: ['autodocs'],
}
export default meta

export const FacetDropdown: StoryObj = {
  render: function MultiSelectDemo() {
    const [selected, setSelected] = useState<Set<string>>(new Set(['fox', 'bear']))
    const options = ['fox', 'bear', 'rabbit', 'deer', 'owl', 'wolf', 'badger', 'hedgehog', 'squirrel']

    const handleToggle = (item: string) => {
      setSelected((prev) => {
        const next = new Set(prev)
        if (next.has(item)) next.delete(item)
        else next.add(item)
        return next
      })
    }

    return (
      <div className="p-12">
        <MultiSelectCheckbox
          label="Critters"
          options={options}
          selected={selected}
          onToggle={handleToggle}
          onClear={() => setSelected(new Set())}
        />
      </div>
    )
  },
}
