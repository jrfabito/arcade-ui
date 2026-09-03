import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Trash2, Sparkles, Download } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'hero', 'secondary', 'outline', 'ghost', 'destructive', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Create Toy',
  },
}

export const Hero: Story = {
  args: {
    variant: 'hero',
    children: 'Download PDF',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: (
      <>
        <Trash2 className="size-4" />
        Delete Item
      </>
    ),
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <Button variant="primary">Primary</Button>
      <Button variant="hero">Hero CTA</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">
        <Trash2 className="size-4" /> Destructive
      </Button>
      <Button variant="link">Link</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 p-4">
      <Button variant="primary" size="sm">Small (sm)</Button>
      <Button variant="primary" size="default">Default</Button>
      <Button variant="primary" size="lg">Large (lg)</Button>
      <Button variant="hero" size="icon" aria-label="Sparkles">
        <Sparkles className="size-4" />
      </Button>
    </div>
  ),
}
