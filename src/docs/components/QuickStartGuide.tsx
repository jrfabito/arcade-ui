import * as React from 'react'
import { Copy, Check } from 'lucide-react'

function CodeSnippet({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-lg border-2 border-border bg-muted/60 overflow-hidden my-3">
      {label && (
        <div className="flex items-center justify-between px-3.5 py-1.5 border-b-2 border-border/60 bg-background/80">
          <span className="font-mono text-[11px] font-bold text-muted-foreground uppercase tracking-wider">{label}</span>
          <button
            type="button"
            onClick={copyToClipboard}
            className="flex items-center gap-1 font-mono text-[11px] font-semibold text-foreground hover:text-brand-lime transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-brand-lime" /> Copied!
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="p-4 overflow-x-auto font-mono text-xs text-foreground m-0 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export function QuickStartGuide() {
  const installCmd = `npm install arcade-ui`

  const cssImport = `@import "tailwindcss";
@import "arcade-ui/theme.css";
@import "arcade-ui/fonts.css";`

  const fontsHtml = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">`

  const usageSnippet = `import { Button, Card, CardHeader, CardTitle, CardContent, CardFooter, Badge } from 'arcade-ui'

export function App() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <Badge variant="accent" className="w-fit mb-2">New Critter</Badge>
        <CardTitle>Sir Fluffington</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Chunky sharp-cornered paper toy ready to print and fold.
        </p>
      </CardContent>
      <CardFooter className="gap-2">
        <Button variant="primary">Edit Toy</Button>
        <Button variant="hero">Download PDF</Button>
      </CardFooter>
    </Card>
  )
}`

  return (
    <div className="flex flex-col gap-6 sm:gap-8 my-0">
      {/* Step 1 */}
      <div className="p-6 rounded-lg border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-lime text-black font-mono font-extrabold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]">
            1
          </span>
          <div className="text-base font-bold text-foreground font-sans">Install Dependency</div>
        </div>
        <p className="text-xs text-muted-foreground m-0 pl-10">
          Arcade UI requires React 18+ or 19 and Tailwind CSS v4.
        </p>
        <div className="mt-3 pl-0 sm:pl-10">
          <CodeSnippet code={installCmd} label="Terminal" />
        </div>
      </div>

      {/* Step 2 */}
      <div className="p-6 rounded-lg border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-sky text-black font-mono font-extrabold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]">
            2
          </span>
          <div className="text-base font-bold text-foreground font-sans">Import CSS &amp; Google Fonts</div>
        </div>
        <p className="text-xs text-muted-foreground m-0 pl-10">
          Include theme variables and font declarations in your CSS entry point (e.g. <code>src/index.css</code>):
        </p>
        <div className="mt-3 pl-0 sm:pl-10 space-y-4">
          <CodeSnippet code={cssImport} label="src/index.css" />
          <p className="text-xs text-muted-foreground m-0 pt-1">
            Load the Google Fonts in your <code>index.html</code> <code>&lt;head&gt;</code>:
          </p>
          <CodeSnippet code={fontsHtml} label="index.html" />
        </div>
      </div>

      {/* Step 3 */}
      <div className="p-6 rounded-lg border-2 border-border bg-card shadow-[4px_4px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]">
        <div className="flex items-center gap-3 mb-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-coral text-white font-mono font-extrabold text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]">
            3
          </span>
          <div className="text-base font-bold text-foreground font-sans">Compose Your First Component</div>
        </div>
        <p className="text-xs text-muted-foreground m-0 pl-10">
          Import primitives and compound components directly with full TypeScript autocompletion:
        </p>
        <div className="mt-3 pl-0 sm:pl-10">
          <CodeSnippet code={usageSnippet} label="App.tsx" />
        </div>
      </div>
    </div>
  )
}
