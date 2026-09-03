import type { Meta, StoryObj } from '@storybook/react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './Accordion'

const meta: Meta<typeof Accordion> = {
  title: 'Primitives/Accordion',
  component: Accordion,
  tags: ['autodocs'],
}
export default meta

export const Default: StoryObj = {
  render: () => (
    <div className="max-w-md p-4 rounded-lg border-2 border-border bg-card shadow-[var(--card-shadow)]">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Paper Toy Assembly</AccordionTrigger>
          <AccordionContent>
            Fold along the dashed lines and apply glue to the highlighted tabs. Keep sharp creases for the best rigidity.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Printing Recommendations</AccordionTrigger>
          <AccordionContent>
            Print at 100% scale on heavy cardstock (65lb–110lb / 176–300 gsm) for optimal stiffness and clean folding.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Custom Stickers & Textures</AccordionTrigger>
          <AccordionContent>
            Apply custom facial expressions and accessories in the Studio editor prior to generating your high-res PDF net.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  ),
}
