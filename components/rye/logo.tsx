import Link from "next/link"

import { cn } from "@/lib/utils"

export function RyeLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-semibold leading-none text-[34px] tracking-normal text-[var(--rye-ink)]",
        className
      )}
    >
      rye
    </Link>
  )
}
