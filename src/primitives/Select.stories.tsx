import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './Select'
import { useState } from 'react'

const meta: Meta<typeof Select> = {
  title: 'Primitives/Select',
  component: Select,
  tags: ['autodocs'],
}
export default meta

export const StickerSetSelect: StoryObj = {
  render: function SelectDemo() {
    const [set, setSet] = useState('friends')
    return (
      <div className="p-8 max-w-xs">
        <Select value={set} onValueChange={setSet}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Choose a set" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="core">Core Origami Set</SelectItem>
            <SelectItem value="friends">Critter Friends</SelectItem>
            <SelectItem value="emotes">Premium Emotes</SelectItem>
            <SelectItem value="monsters">Neon Monsters</SelectItem>
          </SelectContent>
        </Select>
      </div>
    )
  },
}
