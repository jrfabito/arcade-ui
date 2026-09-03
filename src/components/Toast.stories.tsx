import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from './Toast'
import { Button } from '@/primitives/Button'
import { useState } from 'react'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
}
export default meta

export const Interactive: StoryObj = {
  render: function ToastDemo() {
    const [msg, setMsg] = useState<string | null>('Saved toy draft to cloud!')
    return (
      <div className="p-8">
        <Button onClick={() => setMsg('Saved toy draft to cloud!')}>Trigger Toast</Button>
        {msg && <Toast message={msg} onDismiss={() => setMsg(null)} />}
      </div>
    )
  },
}
