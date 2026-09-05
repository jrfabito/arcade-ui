import { Shapes, LayoutGrid, CheckSquare, ArrowRight } from 'lucide-react'

export function CategoryIndex() {
  const categories = [
    {
      title: 'Primitives',
      count: '15+ Components',
      description: 'Atomic building blocks built on Radix UI primitives: Buttons, Inputs, Cards, Badges, Switches, Sliders, Tables, and Dropdowns.',
      icon: Shapes,
      tag: 'Core UI',
    },
    {
      title: 'Composite Components',
      count: '20+ Patterns',
      description: 'Production-ready compositions: Modal Shells, Drawers, Tooltips, Navigation Bars, Filter Bars, and Password Checklists.',
      icon: LayoutGrid,
      tag: 'Application',
    },
    {
      title: 'Ant Design Parity Roadmap',
      count: 'Detailed Spec',
      description: 'Comprehensive evaluation against enterprise design systems with prioritized milestones and component checklist.',
      icon: CheckSquare,
      tag: 'Roadmap',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-0">
      {categories.map((cat) => {
        const Icon = cat.icon
        return (
          <div
            key={cat.title}
            className="flex flex-col justify-between rounded-lg border-2 border-border bg-card p-5 shadow-[4px_4px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
                  <Icon className="h-4 w-4 text-foreground" />
                </div>
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                  {cat.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground font-sans m-0">
                {cat.title}
              </h3>
              <div className="text-xs font-mono text-brand-lime font-semibold mt-0.5 mb-2">
                {cat.count}
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed m-0">
                {cat.description}
              </p>
            </div>
            <div className="pt-4 mt-3 border-t border-border/50 flex items-center gap-1.5 text-xs font-mono font-bold text-foreground">
              Explore in sidebar <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        )
      })}
    </div>
  )
}
