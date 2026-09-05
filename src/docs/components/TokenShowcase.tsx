export function TokenShowcase() {
  const brandColors = [
    { name: 'Brand Lime', token: '--brand-lime', hex: '#b0d135', bgClass: 'bg-[#b0d135]', textClass: 'text-black', role: 'Primary Accent & Hero' },
    { name: 'Brand Sky', token: '--brand-sky', hex: '#4ea8de', bgClass: 'bg-[#4ea8de]', textClass: 'text-white', role: 'Secondary Accent & Links' },
    { name: 'Brand Coral', token: '--brand-coral', hex: '#ff5964', bgClass: 'bg-[#ff5964]', textClass: 'text-white', role: 'Destructive & High Priority' },
    { name: 'Brand Ink', token: '--brand-ink', hex: '#1a1a24', bgClass: 'bg-[#1a1a24]', textClass: 'text-white', role: 'Solid Dark & Hard Shadows' },
  ]

  const semanticColors = [
    { name: 'Background', token: '--background', desc: 'Canvas backdrop (adaptive light/dark)' },
    { name: 'Foreground', token: '--foreground', desc: 'High-contrast typography' },
    { name: 'Card', token: '--card', desc: 'Surface container background' },
    { name: 'Border', token: '--border', desc: '2px solid boundary line' },
    { name: 'Muted', token: '--muted', desc: 'Subtle secondary backgrounds' },
    { name: 'Accent', token: '--accent', desc: 'Highlight & active states' },
  ]

  const fonts = [
    { name: 'FattiPatti', role: 'Display & Hero Headers', sample: 'ARCADE PAPER TOYS', family: 'var(--font-header, sans-serif)', style: 'font-extrabold uppercase tracking-tight' },
    { name: 'Space Grotesk', role: 'Buttons & Action Labels', sample: 'Download PDF Blueprint', family: 'Space Grotesk, sans-serif', style: 'font-semibold tracking-normal' },
    { name: 'IBM Plex Sans', role: 'Body & Microcopy', sample: 'Crisp, highly legible interface typography at any scale.', family: 'IBM Plex Sans, sans-serif', style: 'font-normal' },
    { name: 'IBM Plex Mono', role: 'Data, Tags & Badges', sample: 'v0.1.0 • SHA-256 • 128KB', family: 'IBM Plex Mono, monospace', style: 'font-mono text-sm' },
  ]

  return (
    <div className="flex flex-col gap-12 sm:gap-14 my-0">
      {/* Brand Palette Swatches */}
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-5 border-b-2 border-border/60">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand-lime shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]" />
            Brand Colors
          </div>
          <span className="font-mono text-[10px] uppercase font-semibold text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border/50">
            Core Swatches
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {brandColors.map((color) => (
            <div
              key={color.name}
              className="rounded-lg border-2 border-border overflow-hidden bg-card shadow-[3px_3px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]"
            >
              <div className={`h-16 w-full ${color.bgClass} flex items-end p-2.5`}>
                <span className={`font-mono text-xs font-bold px-1.5 py-0.5 rounded bg-black/25 ${color.textClass}`}>
                  {color.hex}
                </span>
              </div>
              <div className="p-3">
                <div className="text-sm font-bold text-foreground">{color.name}</div>
                <div className="text-xs font-mono text-muted-foreground mt-0.5">{color.token}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{color.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Tokens Grid */}
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-5 border-b-2 border-border/60">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand-sky shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]" />
            Adaptive Semantic Tokens
          </div>
          <span className="font-mono text-[10px] uppercase font-semibold text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border/50">
            Theme Variables
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {semanticColors.map((token) => (
            <div
              key={token.name}
              className="p-3 rounded-lg border-2 border-border bg-card shadow-[2px_2px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))]"
            >
              <div className="text-xs font-bold text-foreground">{token.name}</div>
              <div className="text-[11px] font-mono text-brand-sky dark:text-brand-lime mt-0.5 truncate font-medium">
                {token.token}
              </div>
              <div className="text-[10px] text-muted-foreground mt-1 leading-tight">
                {token.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography Hierarchy */}
      <div>
        <div className="flex items-center justify-between pb-2.5 mb-5 border-b-2 border-border/60">
          <div className="font-mono text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-sm bg-brand-coral shadow-[1px_1px_0px_0px_rgba(0,0,0,0.8)]" />
            Typography Hierarchy
          </div>
          <span className="font-mono text-[10px] uppercase font-semibold text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border/50">
            Font Stacks
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="p-4 rounded-lg border-2 border-border bg-card shadow-[3px_3px_0px_0px_var(--color-primary-shadow,rgba(0,0,0,1))] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-foreground font-sans">{font.name}</span>
                  <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/50">
                    {font.role}
                  </span>
                </div>
                <p
                  className={`text-lg text-foreground my-2.5 ${font.style}`}
                  style={{ fontFamily: font.family }}
                >
                  {font.sample}
                </p>
              </div>
              <div className="text-[11px] font-mono text-muted-foreground border-t border-border/50 pt-2.5 mt-2">
                Font stack: <code>{font.family}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
