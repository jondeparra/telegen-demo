import type { Transition, Variants } from "motion/react"

export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const SPRING_TACTILE: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 22,
}

export const SPRING_CALM: Transition = {
  type: "spring",
  stiffness: 220,
  damping: 28,
}

export const DURATION = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.6,
  counter: 1.4,
} as const

export const fadeUpParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
}

export const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
}

export const fadeInChild: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
}

export const scaleFadeChild: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
}

export const REVEAL_VIEWPORT = { once: true, margin: "-10% 0px" } as const
