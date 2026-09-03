import type { Meta, StoryObj } from '@storybook/react'
import { Slider } from './Slider'
import { useState } from 'react'

const meta: Meta<typeof Slider> = {
  title: 'Primitives/Slider',
  component: Slider,
  tags: ['autodocs'],
}
export default meta

export const StickerSizeSlider: StoryObj = {
  render: function SliderDemo() {
    const [val, setVal] = useState([58])
    return (
      <div className="max-w-sm p-4">
        <Slider value={val} onValueChange={setVal} max={100} step={1} />
        <div className="mt-3 flex justify-between font-mono text-xs font-medium text-muted-foreground">
          <span>Sticker scale</span>
          <span className="font-semibold text-foreground">{val[0]}%</span>
        </div>
      </div>
    )
  },
}
