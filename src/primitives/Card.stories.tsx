import type { Meta, StoryObj } from '@storybook/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card'
import { Button } from './Button'

const meta: Meta<typeof Card> = {
  title: 'Primitives/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof Card>

export const CritterCard: Story = {
  render: () => (
    <Card className="max-w-[320px]">
      <div className="aspect-video rounded-[4px] bg-[repeating-linear-gradient(45deg,var(--muted)_0_10px,color-mix(in_srgb,var(--muted)_60%,var(--background))_10px_20px)]" />
      <CardHeader>
        <CardTitle>Neon Gecko</CardTitle>
        <CardDescription>by dino_maker · 214 likes</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        A sharp, lime-accented origami template ready to print and fold.
      </CardContent>
      <CardFooter>
        <Button variant="hero" size="sm" className="w-full">
          Download PDF
        </Button>
      </CardFooter>
    </Card>
  ),
}
