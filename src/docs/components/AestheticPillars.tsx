import { Square, Zap, Palette, Type } from 'lucide-react'

export function AestheticPillars() {
  const pillars = [
    {
      icon: Square,
      title: 'Chunky Sharp Geometry',
      subtitle: '6px Corners • 2px Borders',
      description: 'Defined borders and consistent 6px radii give every element crisp, tangible presence without feeling clinical.',
      tag: 'Geometry',
      accent: 'border-brand-lime',
    },
    {
      icon: Zap,
      title: 'Tactile Physics & Elevation',
      subtitle: 'Hard Offset Shadows',
      description: 'Components sit raised with 3px, 5px, or 8px offset shadows. On button press, they collapse down for physical feedback.',
      tag: 'Elevation',
      accent: 'border-brand-sky',
    },
    {
      icon: Palette,
      title: 'Vibrant Arcade Palette',
      subtitle: 'Lime • Sky • Tangerine',
      description: 'High-contrast accents paired with rich dark tones and crisp paper whites, powered by responsive CSS variables.',
      tag: 'Colorway',
      accent: 'border-brand-coral',
    },
    {
      icon: Type,
      title: 'Expressive Typography',
      subtitle: 'FattiPatti • Space Grotesk',
      description: 'Display headings use punchy character, buttons leverage Space Grotesk, and IBM Plex provides rock-solid UI readability.',
      tag: 'Typography',
      accent: 'border-foreground',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-0">
      {pillars.map((pillar) => {
        const Icon = pillar.icon
        return (
          <div
            key={pillar.title}
            className="flex flex-col justify-between rounded-lg border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground font-sans m-0">
                {pillar.title}
              </h3>
              <div className="text-xs font-mono text-muted-foreground mt-0.5 mb-2 font-medium">
                {pillar.subtitle}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed m-0">
                {pillar.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
