import type { Meta, StoryObj } from '@storybook/react'
import { ColorPalette } from './ColorPalette'
import { useState } from 'react'

const meta: Meta<typeof ColorPalette> = {
  title: 'Components/ColorPalette',
  component: ColorPalette,
  tags: ['autodocs'],
}
export default meta

export const InteractivePalette: StoryObj = {
  render: function PaletteDemo() {
    const [color, setColor] = useState('#b0d135')
    return (
      <div className="max-w-xs p-4 rounded-lg border-2 border-border bg-card shadow-[var(--card-shadow)]">
        <ColorPalette
          value={color}
          onChange={setColor}
          onReset={() => setColor('#ffffff')}
        />
      </div>
    )
  },
}
