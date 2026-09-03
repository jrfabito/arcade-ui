import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import { useState } from 'react'

const meta: Meta<typeof Switch> = {
  title: 'Primitives/Switch',
  component: Switch,
  tags: ['autodocs'],
}
export default meta

export const ToggleSwitches: StoryObj = {
  render: function SwitchDemo() {
    const [publicGallery, setPublicGallery] = useState(true)
    const [allowRemix, setAllowRemix] = useState(false)
    return (
      <div className="flex flex-col gap-4 p-4">
        <label className="flex items-center gap-3 text-sm cursor-pointer">
          <Switch checked={publicGallery} onCheckedChange={setPublicGallery} />
          <span>Publish to public gallery</span>
        </label>
        <label className="flex items-center gap-3 text-sm cursor-pointer">
          <Switch checked={allowRemix} onCheckedChange={setAllowRemix} />
          <span>Allow community remixes</span>
        </label>
      </div>
    )
  },
}
