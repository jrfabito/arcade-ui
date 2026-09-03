import type { Meta, StoryObj } from '@storybook/react'
import { SplitButton } from './SplitButton'
import { FileText, Copy, Trash2, Download } from 'lucide-react'

const meta: Meta<typeof SplitButton> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  tags: ['autodocs'],
}
export default meta

export const PrimarySplit: StoryObj = {
  render: () => (
    <div className="flex flex-wrap gap-4 p-4">
      <SplitButton
        variant="primary"
        label="Save toy"
        onClick={() => alert('Saved toy!')}
        items={[
          {
            label: 'Save as draft',
            icon: <FileText className="size-4" />,
            onClick: () => alert('Saved as draft!'),
          },
          {
            label: 'Save as template',
            icon: <Copy className="size-4" />,
            onClick: () => alert('Saved as template!'),
          },
          { separator: true, label: '' },
          {
            label: 'Delete draft',
            icon: <Trash2 className="size-4" />,
            destructive: true,
            onClick: () => alert('Deleted draft!'),
          },
        ]}
      />

      <SplitButton
        variant="hero"
        label="Download 3D"
        onClick={() => alert('Downloading 3D...')}
        items={[
          {
            label: 'Export GLTF (.gltf)',
            icon: <Download className="size-4" />,
            onClick: () => alert('Exporting GLTF...'),
          },
          {
            label: 'Export OBJ (.obj)',
            icon: <Download className="size-4" />,
            onClick: () => alert('Exporting OBJ...'),
          },
        ]}
      />
    </div>
  ),
}
