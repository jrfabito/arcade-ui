import { useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "pc-theme"
const listeners = new Set<() => void>()

function systemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

/** Whatever the pre-paint script in index.html already put on <html>. */
let current: Theme =
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("dark")
    ? "dark"
    : "light"

/** Flip the `.dark` class on <html>, persist the choice, and notify subscribers. */
export function setTheme(theme: Theme) {
  current = theme
  document.documentElement.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    /* storage unavailable (private mode) — theme still applies for the session */
  }
  listeners.forEach((notify) => notify())
}

export function toggleTheme() {
  setTheme(current === "dark" ? "light" : "dark")
}

function subscribe(notify: () => void) {
  listeners.add(notify)
  return () => {
    listeners.delete(notify)
  }
}

/** Reactive access to the active theme. `theme` re-renders on every change. */
export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => current,
    () => "light" as Theme
  )
  return { theme, setTheme, toggleTheme, systemTheme }
}
