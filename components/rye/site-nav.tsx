"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { m, useMotionValueEvent, useScroll } from "motion/react"

import { Button } from "@/components/ui/button"
import { RyeLogo } from "@/components/rye/logo"
import { SPRING_TACTILE } from "@/lib/rye/motion"
import { cn } from "@/lib/utils"

export function SiteNav({ variant = "patient" }: { variant?: "patient" | "providers" }) {
  const isProviders = variant === "providers"
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 12)
  })

  return (
    <header
      data-scrolled={scrolled}
      className={cn(
        "sticky top-0 z-30 border-b backdrop-blur transition-[border-color,box-shadow,background-color]",
        "duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        "border-transparent bg-background/80",
        "data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/90 data-[scrolled=true]:shadow-soft"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <m.div whileTap={{ scale: 0.94 }} transition={SPRING_TACTILE} className="inline-flex">
          <Button variant="outline" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        </m.div>
        <RyeLogo />
        <div className="flex items-center gap-2">
          {isProviders ? (
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/">For patients</Link>
            </Button>
          ) : (
            <Button variant="ghost" asChild className="hidden sm:inline-flex">
              <Link href="/providers">Provider demo</Link>
            </Button>
          )}
          <m.div
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={SPRING_TACTILE}
            className="inline-flex"
          >
            {isProviders ? (
              <Button asChild className="rounded-full px-5">
                <Link href="#pilot">Apply for pilot</Link>
              </Button>
            ) : (
              <Button asChild className="rounded-full px-5">
                <Link href="/intake">Do I Qualify?</Link>
              </Button>
            )}
          </m.div>
        </div>
      </div>
    </header>
  )
}
