import type { Meta, StoryObj } from '@storybook/react'
import { FilterBarShell } from './FilterBarShell'
import { Button } from '@/primitives/Button'
import { useState } from 'react'

const meta: Meta<typeof FilterBarShell> = {
  title: 'Components/FilterBarShell',
  component: FilterBarShell,
  tags: ['autodocs'],
}
export default meta

export const FullShelf: StoryObj = {
  render: function ShelfDemo() {
    const [sort, setSort] = useState('popular')
    const [tags, setTags] = useState<Set<string>>(new Set(['cute']))

    return (
      <div className="w-full">
        <FilterBarShell
          sectionLabel="Community Showcase"
          count={142}
          sortValue={sort}
          onSortChange={setSort}
          sortOptions={[
            { value: 'popular', label: 'Most Popular' },
            { value: 'recent', label: 'Recently Added' },
            { value: 'name', label: 'Alphabetical' },
          ]}
          facets={[
            {
              key: 'tags',
              label: 'Tags',
              options: ['cute', 'scary', 'origami', 'animal', 'robot'],
              selected: tags,
              onToggle: (t) => {
                setTags((prev) => {
                  const next = new Set(prev)
                  if (next.has(t)) next.delete(t)
                  else next.add(t)
                  return next
                })
              },
              onClear: () => setTags(new Set()),
            },
          ]}
          actions={<Button variant="hero" size="sm">Create Toy</Button>}
        />
      </div>
    )
  },
}
