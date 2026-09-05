import type { Preview } from '@storybook/react'
import './preview.css'

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Welcome',
          ['Introduction', 'Quick Start'],
          'Foundations',
          ['Colors & Tokens', 'Typography', 'Elevation & Physics'],
          'Primitives',
          'Components',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Arcade Light' },
          { value: 'dark', icon: 'moon', title: 'Arcade Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'light'
      if (typeof document !== 'undefined') {
        const root = document.documentElement
        root.classList.toggle('dark', selectedTheme === 'dark')
      }
      return Story()
    },
  ],
}

export default preview
