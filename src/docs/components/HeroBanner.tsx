import { ArcadeMark } from '../../components/Brand'
import { Badge } from '../../primitives/Badge'
import { Sparkles, Terminal, Layers, Box } from 'lucide-react'

export function HeroBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-border bg-card p-6 sm:p-8 md:p-10 shadow-[5px_5px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] mt-4 mb-2 transition-all">
      {/* Background accent glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 h-48 w-48 rounded-full bg-brand-lime/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 h-36 w-36 rounded-full bg-brand-sky/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col max-w-2xl">
          <div
            className="flex items-center gap-3.5 mb-8"
            style={{ marginBottom: '32px' }}
          >
            <ArcadeMark className="h-10 w-auto text-brand-lime" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
              Paper Critters Design System
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-header mt-4 mb-4"
            style={{ marginTop: '16px' }}
          >
            Arcade UI
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed m-0 mb-6 font-sans">
            High-contrast, chunky, playful component library built with crisp 6px sharp corners, 2px solid borders, hard offset shadows, and responsive collapse physics.
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="solid" className="gap-1.5 py-1">
              <Sparkles className="h-3 w-3" /> v0.1.0 Beta
            </Badge>
            <Badge variant="accent" className="gap-1.5 py-1">
              <Box className="h-3 w-3" /> React 19
            </Badge>
            <Badge variant="soft" className="gap-1.5 py-1">
              <Layers className="h-3 w-3" /> Tailwind CSS v4
            </Badge>
            <Badge variant="outline" className="gap-1.5 py-1">
              <Terminal className="h-3 w-3" /> Radix UI
            </Badge>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[220px]">
          <div className="p-3.5 rounded-lg border-2 border-border bg-background shadow-[3px_3px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
            <div className="text-xs font-mono font-semibold text-muted-foreground uppercase">Elevation Signature</div>
            <div className="text-sm font-bold text-foreground mt-0.5">3px / 5px / 8px Hard Offset</div>
          </div>
          <div className="p-3.5 rounded-lg border-2 border-border bg-background shadow-[3px_3px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
            <div className="text-xs font-mono font-semibold text-muted-foreground uppercase">Geometry</div>
            <div className="text-sm font-bold text-foreground mt-0.5">6px Radius • 2px Borders</div>
          </div>
          <div className="p-3.5 rounded-lg border-2 border-border bg-background shadow-[3px_3px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
            <div className="text-xs font-mono font-semibold text-muted-foreground uppercase">Themes</div>
            <div className="text-sm font-bold text-foreground mt-0.5">Adaptive Light &amp; Dark</div>
          </div>
        </div>
      </div>
    </div>
  )
}
