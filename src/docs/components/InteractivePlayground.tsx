import * as React from 'react'
import { Button } from '../../primitives/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../primitives/Card'
import { Badge } from '../../primitives/Badge'
import { Input } from '../../primitives/Input'
import { Switch } from '../../primitives/Switch'
import { Slider } from '../../primitives/Slider'
import { Sparkles, Printer, RefreshCw, Scissors, Heart } from 'lucide-react'

export function InteractivePlayground() {
  const [critterName, setCritterName] = React.useState('Sir Fluffington')
  const [isHolo, setIsHolo] = React.useState(true)
  const [scale, setScale] = React.useState([75])
  const [likes, setLikes] = React.useState(12)
  const [lastAction, setLastAction] = React.useState<string | null>(null)

  return (
    <div className="rounded-xl border-2 border-border bg-card p-6 sm:p-8 shadow-[5px_5px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] my-0">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-8 border-b-2 border-border/70 gap-2">
        <div>
          <div className="font-mono text-xs uppercase font-bold text-brand-lime tracking-wider flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-lime" />
            Live Interactive Preview
          </div>
          <div className="text-lg sm:text-xl font-extrabold text-foreground font-sans tracking-tight mt-1">
            Feel the Arcade Physics
          </div>
        </div>
        <div className="text-xs font-mono text-muted-foreground bg-muted/60 px-2.5 py-1 rounded border border-border/50">
          Click buttons to test the active-press shadow collapse
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <label className="block text-xs font-mono font-bold uppercase text-foreground mb-2 tracking-wider">
              Critter Label
            </label>
            <Input
              value={critterName}
              onChange={(e) => setCritterName(e.target.value)}
              placeholder="Name your critter..."
              className="max-w-md"
            />
          </div>

          <div className="flex items-center justify-between max-w-md p-4 rounded-lg border-2 border-border bg-background shadow-[2px_2px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
            <div className="space-y-1">
              <div className="text-sm font-bold text-foreground">Holographic Foil Card</div>
              <div className="text-xs text-muted-foreground">Applies high-gloss shine finish</div>
            </div>
            <Switch
              checked={isHolo}
              onCheckedChange={(checked) => setIsHolo(checked)}
              aria-label="Toggle holographic foil"
            />
          </div>

          <div className="space-y-3 max-w-md">
            <div className="flex justify-between text-xs font-mono">
              <span className="font-bold uppercase tracking-wider text-foreground">Print Scale Ratio</span>
              <span className="text-muted-foreground font-bold">{scale[0]}%</span>
            </div>
            <Slider
              value={scale}
              onValueChange={setScale}
              min={25}
              max={150}
              step={5}
              className="py-1"
            />
          </div>

          <div className="pt-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
              Test Button Variants
            </div>
            <div className="flex flex-wrap gap-2.5 gap-y-3">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setLastAction('Exported blueprint')}
              >
                Primary
              </Button>
              <Button
                variant="hero"
                size="sm"
                onClick={() => setLastAction('Hero action triggered')}
              >
                Hero Accent
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setLastAction('Saved draft')}
              >
                Secondary
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLastAction('Outline clicked')}
              >
                Outline
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => setLastAction('Reset values')}
              >
                Destructive
              </Button>
            </div>
            {lastAction && (
              <div className="mt-3 text-xs font-mono text-brand-lime flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" /> Event: <span>{lastAction}</span>
              </div>
            )}
          </div>
        </div>

        {/* Live Output Card Preview */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <Card className="w-full max-w-sm transition-all duration-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between mb-1">
                <Badge variant={isHolo ? 'accent' : 'outline'}>
                  {isHolo ? '★ Special Edition' : 'Standard Edition'}
                </Badge>
                <button
                  type="button"
                  onClick={() => setLikes((prev) => prev + 1)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-brand-coral hover:scale-110 transition-transform cursor-pointer"
                  title="Like this critter"
                >
                  <Heart className="h-3.5 w-3.5 fill-current" /> {likes}
                </button>
              </div>
              <CardTitle className="text-xl">{critterName || 'Unnamed Critter'}</CardTitle>
              <CardDescription>
                Ready-to-cut paper toy model • Scale factor {scale[0]}%
              </CardDescription>
            </CardHeader>

            <CardContent className="pb-4">
              <div className="h-28 w-full rounded-md border-2 border-border bg-muted/40 flex flex-col items-center justify-center relative overflow-hidden">
                {isHolo && (
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-lime/10 via-brand-sky/15 to-transparent pointer-events-none" />
                )}
                <Scissors className="h-8 w-8 text-foreground/70 mb-1" />
                <span className="font-mono text-[11px] text-muted-foreground uppercase font-bold tracking-wider">
                  Fold Lines &amp; Glue Tabs Calibrated
                </span>
              </div>
            </CardContent>

            <CardFooter className="flex gap-2 pt-0">
              <Button
                variant="primary"
                className="flex-1 gap-1.5"
                onClick={() => setLastAction('Sent to printer')}
              >
                <Printer className="h-4 w-4" /> Print PDF
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCritterName('Sir Fluffington')
                  setScale([75])
                  setIsHolo(true)
                  setLastAction('Reset to default')
                }}
                title="Reset Critter"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
