import type { Meta, StoryObj } from '@storybook/react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from './DropdownMenu'
import { Button } from './Button'
import { User, Bell, Trash2, MoreHorizontal } from 'lucide-react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Primitives/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
}
export default meta

export const MenuExample: StoryObj = {
  render: () => (
    <div className="p-12">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="sm">
            <MoreHorizontal /> Actions
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56">
          <DropdownMenuLabel>Critter Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <User className="size-4" /> View Creator
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="size-4" /> Notify Updates
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <Trash2 className="size-4" /> Delete Draft
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}
