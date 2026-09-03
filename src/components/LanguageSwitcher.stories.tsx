import type { Meta, StoryObj } from '@storybook/react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useState } from 'react'

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'Components/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
}
export default meta

export const Interactive: StoryObj = {
  render: function LangDemo() {
    const [lang, setLang] = useState('en')
    return (
      <div className="p-8">
        <LanguageSwitcher value={lang} onValueChange={setLang} />
      </div>
    )
  },
}
