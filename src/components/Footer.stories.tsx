import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
}
export default meta

export const DefaultFooter: StoryObj = {
  render: () => (
    <Footer
      copyright="© 2026 Paper Critters. All rights reserved."
      legalLinks={
        <div className="flex gap-3 font-mono text-[11px]">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
        </div>
      }
    />
  ),
}
