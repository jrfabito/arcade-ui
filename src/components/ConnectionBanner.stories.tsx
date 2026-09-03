import type { Meta, StoryObj } from '@storybook/react'
import { ConnectionBanner } from './ConnectionBanner'

const meta: Meta<typeof ConnectionBanner> = {
  title: 'Components/ConnectionBanner',
  component: ConnectionBanner,
  tags: ['autodocs'],
}
export default meta

export const OfflineStatus: StoryObj = {
  render: () => (
    <div className="h-32 relative">
      <ConnectionBanner status="offline" />
    </div>
  ),
}

export const SyncedStatus: StoryObj = {
  render: () => (
    <div className="h-32 relative">
      <ConnectionBanner status="synced" />
    </div>
  ),
}
