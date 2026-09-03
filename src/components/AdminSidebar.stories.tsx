import type { Meta, StoryObj } from '@storybook/react'
import { AdminSidebar } from './AdminSidebar'
import { Users, BarChart3, Bell, Settings, Shield } from 'lucide-react'
import { useState } from 'react'

const meta: Meta<typeof AdminSidebar> = {
  title: 'Components/AdminSidebar',
  component: AdminSidebar,
  tags: ['autodocs'],
}
export default meta

export const AdminNav: StoryObj = {
  render: function SidebarDemo() {
    const [active, setActive] = useState('users')
    return (
      <div className="h-[480px] flex border border-border rounded-lg overflow-hidden">
        <AdminSidebar
          activeId={active}
          onSelect={setActive}
          header={<span className="font-header text-lg">Admin Panel</span>}
          sections={[
            {
              title: 'Moderation',
              items: [
                { id: 'users', label: 'Users', icon: <Users className="size-4" />, badge: 3 },
                { id: 'metrics', label: 'Metrics', icon: <BarChart3 className="size-4" /> },
                { id: 'announcements', label: 'Announcements', icon: <Bell className="size-4" /> },
              ],
            },
            {
              title: 'System',
              items: [
                { id: 'permissions', label: 'Permissions', icon: <Shield className="size-4" /> },
                { id: 'settings', label: 'Settings', icon: <Settings className="size-4" /> },
              ],
            },
          ]}
        />
        <div className="flex-1 p-6 bg-background">
          <h2 className="font-header text-2xl capitalize">{active}</h2>
          <p className="mt-2 text-sm text-muted-foreground">Admin management workspace for {active}.</p>
        </div>
      </div>
    )
  },
}
