import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ComponentProps,
} from 'react'
import { cn } from '@/lib/utils'

export interface AutoWidthInputProps extends ComponentProps<'input'> {
  value: string
  extra?: number
}

export function AutoWidthInput({
  value,
  className,
  style,
  extra = 2,
  ...props
}: AutoWidthInputProps) {
  const sizerRef = useRef<HTMLSpanElement>(null)
  const [width, setWidth] = useState<number>()

  useLayoutEffect(() => {
    if (sizerRef.current) setWidth(sizerRef.current.offsetWidth + extra)
  }, [value, props.placeholder, extra])

  useEffect(() => {
    let active = true
    document.fonts?.ready.then(() => {
      if (active && sizerRef.current) setWidth(sizerRef.current.offsetWidth + extra)
    })
    return () => {
      active = false
    }
  }, [extra])

  return (
    <>
      <span
        ref={sizerRef}
        aria-hidden="true"
        className={cn(
          'pointer-events-none invisible absolute left-0 top-0 whitespace-pre',
          className
        )}
      >
        {value || props.placeholder || ''}
      </span>
      <input
        {...props}
        value={value}
        style={{ ...style, width }}
        className={cn('min-w-0 shrink truncate', className)}
      />
    </>
  )
}
