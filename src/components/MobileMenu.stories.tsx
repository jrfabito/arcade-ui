import type { Meta, StoryObj } from '@storybook/react'
import { MobileMenu } from './MobileMenu'
import { ArcadeMark } from './Brand'
import { Button } from '@/primitives/Button'
import { useState } from 'react'

const meta: Meta<typeof MobileMenu> = {
  title: 'Components/MobileMenu',
  component: MobileMenu,
  tags: ['autodocs'],
}
export default meta

export const InteractiveMenu: StoryObj = {
  render: function MenuDemo() {
    const [open, setOpen] = useState(false)
    return (
      <div className="p-8">
        <MobileMenu
          open={open}
          onOpenChange={setOpen}
          logo={
            <div className="flex items-center gap-2">
              <ArcadeMark className="h-6 w-auto text-brand-lime" />
              <span className="font-header text-lg">Paper Critters</span>
            </div>
          }
          footer={<Button variant="primary" className="w-full">Sign In</Button>}
        >
          <div className="flex flex-col gap-3 font-display text-lg">
            <a href="#" className="py-2 text-foreground font-semibold">Studio</a>
            <a href="#" className="py-2 text-muted-foreground hover:text-foreground">Gallery</a>
            <a href="#" className="py-2 text-muted-foreground hover:text-foreground">About</a>
          </div>
        </MobileMenu>
      </div>
    )
  },
}
