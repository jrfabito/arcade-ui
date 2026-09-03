import type { Meta, StoryObj } from '@storybook/react'
import { GlobalNav } from './GlobalNav'
import { ArcadeMark } from './Brand'
import { Button } from '@/primitives/Button'
import { ThemeToggle } from './ThemeToggle'

const meta: Meta<typeof GlobalNav> = {
  title: 'Components/GlobalNav',
  component: GlobalNav,
  tags: ['autodocs'],
}
export default meta

export const DefaultNav: StoryObj = {
  render: () => (
    <GlobalNav
      logo={
        <div className="flex items-center gap-2">
          <ArcadeMark className="h-8 w-auto text-brand-sky dark:text-brand-lime" />
          <span className="font-header text-xl text-foreground">Paper Critters</span>
        </div>
      }
      navItems={
        <>
          <a href="#" className="text-sm font-semibold text-foreground hover:text-accent-strong transition">Studio</a>
          <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition">Gallery</a>
          <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition">Community</a>
        </>
      }
      actions={
        <>
          <ThemeToggle />
          <Button variant="primary" size="sm">Sign In</Button>
        </>
      }
    />
  ),
}
