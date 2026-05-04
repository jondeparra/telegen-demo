"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "motion/react"

import { DURATION, EASE_OUT_EXPO } from "@/lib/rye/motion"

export type CounterFormat =
  | "raw"
  | "currency"
  | "currency-k"
  | "percent"
  | "multiplier"
  | "comma"
  | "decimal-1"

const formatters: Record<CounterFormat, (v: number) => string> = {
  raw: (v) => String(Math.round(v)),
  currency: (v) => `$${Math.round(v).toLocaleString()}`,
  "currency-k": (v) => `$${(v / 1000).toFixed(1)}k`,
  percent: (v) => `${v.toFixed(1)}%`,
  multiplier: (v) => `${v.toFixed(1)}x`,
  comma: (v) => Math.round(v).toLocaleString(),
  "decimal-1": (v) => v.toFixed(1),
}

type CounterProps = {
  to: number
  format?: CounterFormat
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export function Counter({
  to,
  format = "raw",
  duration = DURATION.counter,
  className,
  prefix = "",
  suffix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-15% 0px" })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const fn = formatters[format]
    if (reduce) {
      node.textContent = `${prefix}${fn(to)}${suffix}`
      return
    }
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate: (latest) => {
        node.textContent = `${prefix}${fn(latest)}${suffix}`
      },
    })
    return () => controls.stop()
  }, [inView, to, duration, reduce, format, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatters[format](0)}
      {suffix}
    </span>
  )
}
