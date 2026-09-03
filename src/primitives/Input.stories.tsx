import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Label } from './Label'

const meta: Meta<typeof Input> = {
  title: 'Primitives/Input',
  component: Input,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Name your critter...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-2 max-w-sm">
      <Label htmlFor="critter-name">Critter Name</Label>
      <Input id="critter-name" defaultValue="Sir Fluffington" />
      <span className="text-xs text-muted-foreground">Saved just now</span>
    </div>
  ),
}

export const InvalidError: Story = {
  render: () => (
    <div className="flex flex-col gap-2 max-w-sm">
      <Label htmlFor="username-error">Username · error</Label>
      <Input id="username-error" defaultValue="taken_name" aria-invalid="true" />
      <span className="text-xs text-destructive">That username is already taken</span>
    </div>
  ),
}
