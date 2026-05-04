"use client"

import { type ComponentProps, type ReactNode } from "react"
import { m } from "motion/react"

import { fadeUpChild, REVEAL_VIEWPORT, scaleFadeChild } from "@/lib/rye/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  id?: string
  delay?: number
  stagger?: number
}

export function Reveal({
  children,
  className,
  id,
  delay = 0.08,
  stagger = 0.08,
}: RevealProps) {
  const variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  return (
    <m.div
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={REVEAL_VIEWPORT}
    >
      {children}
    </m.div>
  )
}

type RevealItemProps = {
  children: ReactNode
  className?: string
  variant?: "fade-up" | "scale-fade"
} & Omit<ComponentProps<typeof m.div>, "variants" | "ref">

export function RevealItem({
  children,
  className,
  variant = "fade-up",
  ...rest
}: RevealItemProps) {
  const variants = variant === "scale-fade" ? scaleFadeChild : fadeUpChild

  return (
    <m.div className={className} variants={variants} {...rest}>
      {children}
    </m.div>
  )
}
