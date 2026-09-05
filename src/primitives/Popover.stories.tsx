import type { Meta, StoryObj } from '@storybook/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from './Popover'
import { Button } from './Button'
import { Input } from './Input'
import { Label } from './Label'

const meta: Meta<typeof Popover> = {
  title: 'Primitives/Popover',
  component: Popover,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary">Open Dimensions Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-1">
            <h4 className="font-header text-base leading-none text-foreground">Dimensions</h4>
            <p className="text-xs text-muted-foreground font-sans">
              Set the layer width and height for this critter cut pattern.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="width" className="font-mono text-xs uppercase">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8 text-xs" />
            </div>
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="maxWidth" className="font-mono text-xs uppercase">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8 text-xs" />
            </div>
            <div className="grid grid-cols-3 items-center gap-3">
              <Label htmlFor="height" className="font-mono text-xs uppercase">Height</Label>
              <Input id="height" defaultValue="250px" className="col-span-2 h-8 text-xs" />
            </div>
          </div>
          <div className="flex justify-end pt-1">
            <PopoverClose asChild>
              <Button size="sm" variant="primary">Done</Button>
            </PopoverClose>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}
