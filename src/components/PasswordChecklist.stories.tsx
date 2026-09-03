import type { Meta, StoryObj } from '@storybook/react'
import { PasswordChecklist } from './PasswordChecklist'
import { PasswordInput } from './PasswordInput'
import { useState } from 'react'

const meta: Meta<typeof PasswordChecklist> = {
  title: 'Components/PasswordChecklist',
  component: PasswordChecklist,
  tags: ['autodocs'],
}
export default meta

export const InteractiveValidation: StoryObj = {
  render: function ChecklistDemo() {
    const [pwd, setPwd] = useState('Paper1!')
    return (
      <div className="max-w-xs p-4 rounded-lg border border-border bg-card">
        <PasswordInput value={pwd} onChange={setPwd} placeholder="Enter password to test" />
        <PasswordChecklist password={pwd} />
      </div>
    )
  },
}
