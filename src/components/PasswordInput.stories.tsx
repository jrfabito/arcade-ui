import type { Meta, StoryObj } from '@storybook/react'
import { PasswordInput } from './PasswordInput'
import { useState } from 'react'

const meta: Meta<typeof PasswordInput> = {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: function PasswordDemo() {
    const [pwd, setPwd] = useState('SecretPass123!')
    return (
      <div className="max-w-xs p-4">
        <PasswordInput value={pwd} onChange={setPwd} placeholder="Enter your password" />
      </div>
    )
  },
}
