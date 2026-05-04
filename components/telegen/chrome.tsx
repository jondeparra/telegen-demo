import Link from "next/link"
import {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Command,
  FileCheck2,
  GitBranch,
  Layers3,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { navItems } from "@/lib/telegen/data"

export function TelegenLogo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "font-heading text-[28px] font-normal leading-none tracking-normal text-foreground",
        className
      )}
      aria-label="Telegen home"
    >
      telegen
    </Link>
  )
}

export function SiteNav() {
  return (
    <header className="pointer-events-none fixed left-0 right-0 top-4 z-50 px-3 sm:px-6">
      <nav className="pointer-events-auto mx-auto flex w-full max-w-[calc(100vw-1.5rem)] items-center justify-between overflow-hidden rounded-full border border-black/10 bg-white/78 px-3 py-2 shadow-[0_18px_60px_-34px_rgba(15,23,42,0.55),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl sm:max-w-6xl">
        <TelegenLogo className="px-1 sm:px-2" />
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-black/[0.035] hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden rounded-full sm:inline-flex">
            <Link href="/dashboard">Open demo</Link>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-foreground px-3 text-background hover:bg-foreground/90 sm:px-4">
            <Link href="/#pilot">
              <span className="hidden sm:inline">Request demo</span>
              <span className="sm:hidden">Demo</span>
            </Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export function PageShell({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <main className={cn("relative min-h-screen overflow-hidden bg-background text-foreground", className)}>
      <GridBackdrop />
      <LinearBlurs />
      <div className="relative z-10">{children}</div>
    </main>
  )
}

export function MarketingSection({
  id,
  children,
  className,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={cn("relative px-4 py-20 sm:px-6 lg:py-28", className)}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionIntro({
  label,
  title,
  detail,
  align = "left",
}: {
  label?: string
  title: string
  detail?: string
  align?: "left" | "center"
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {label ? (
        <div className="mb-4 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground shadow-soft backdrop-blur">
          {label}
        </div>
      ) : null}
      <h2 className="font-heading text-4xl font-normal leading-[0.95] tracking-normal text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {detail ? <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">{detail}</p> : null}
    </div>
  )
}

export function BentoCard({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <Card
      data-hoverable="true"
      className={cn(
        "rounded-lg border border-white/70 bg-white/76 py-0 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.7),0_1px_0_rgba(255,255,255,0.85)_inset] ring-black/10 backdrop-blur-xl",
        className
      )}
    >
      <CardContent className="px-5 py-5">{children}</CardContent>
    </Card>
  )
}

export function MetricTile({
  label,
  value,
  delta,
  className,
}: {
  label: string
  value: string
  delta: string
  className?: string
}) {
  return (
    <BentoCard className={cn("min-h-[132px]", className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
        <div className="rounded-full border border-emerald-400/30 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">
          {delta}
        </div>
      </div>
      <div className="mt-7 font-heading text-4xl leading-none tracking-normal text-foreground">{value}</div>
    </BentoCard>
  )
}

export function CommandBar({ prompt }: { prompt: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-black/10 bg-white/82 px-4 py-3 shadow-[0_20px_70px_-44px_rgba(15,23,42,0.75),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-foreground text-background">
        <Command className="size-4" />
      </div>
      <div className="min-w-0 flex-1 truncate text-sm font-medium text-muted-foreground">{prompt}</div>
      <div className="hidden rounded-full border border-cyan-300/40 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 sm:block">
        Agent ready
      </div>
    </div>
  )
}

export function StatusPill({
  children,
  tone = "neutral",
}: React.PropsWithChildren<{ tone?: "neutral" | "good" | "warn" | "hot" }>) {
  const tones = {
    neutral: "border-black/10 bg-white text-muted-foreground",
    good: "border-emerald-400/30 bg-emerald-50 text-emerald-700",
    warn: "border-amber-400/35 bg-amber-50 text-amber-700",
    hot: "border-rose-400/35 bg-rose-50 text-rose-700",
  }

  return (
    <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold", tones[tone])}>
      {children}
    </span>
  )
}

export function AppFrame({ children, className }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        "w-full max-w-full rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(248,250,252,0.82))] p-2 shadow-[0_42px_140px_-70px_rgba(15,23,42,0.85),0_0_0_1px_rgba(255,255,255,0.75)_inset] backdrop-blur-2xl",
        className
      )}
    >
      <div className="overflow-hidden rounded-[22px] border border-black/10 bg-white/80">{children}</div>
    </div>
  )
}

export function MiniCommandCenter() {
  const rows = [
    ["CA longevity audit", "4.2x ROAS", "Ready"],
    ["State gate before history", "+8.1%", "Winner"],
    ["Creator script", "High risk", "Review"],
  ]

  return (
    <AppFrame className="relative mx-auto max-w-5xl rotate-[-0.7deg]">
      <div className="grid min-h-[470px] grid-cols-1 bg-[linear-gradient(135deg,#ffffff,#f8fafc_60%,#eef9ff)] lg:grid-cols-[210px_1fr]">
        <aside className="hidden border-r border-black/10 bg-white/72 p-4 lg:block">
          <div className="mb-6 flex items-center gap-2">
            <TelegenLogo className="text-2xl" />
          </div>
          {["Overview", "Intake", "Paywalls", "Compliance"].map((item, index) => (
            <div
              key={item}
              className={cn(
                "mb-1 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground",
                index === 0 && "bg-foreground text-background shadow-soft"
              )}
            >
              {item}
            </div>
          ))}
          <div className="mt-8 rounded-lg border border-cyan-200 bg-cyan-50/70 p-3 text-xs leading-5 text-cyan-900">
            3 claims need review before publish.
          </div>
        </aside>
        <div className="p-4 sm:p-6">
          <CommandBar prompt="Ask Telegen to draft a CA launch funnel..." />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <PreviewStat label="Revenue" value="$184k" />
            <PreviewStat label="Booked" value="312" />
            <PreviewStat label="Paid starts" value="486" />
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_260px]">
            <div className="rounded-lg border border-black/10 bg-white/78 p-4 shadow-soft">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-semibold">Growth loop</div>
                <StatusPill tone="good">Live</StatusPill>
              </div>
              <div className="space-y-3">
                {["Landing", "Intake", "State match", "Paid review", "Booked"].map((stage, index) => (
                  <div key={stage} className="grid grid-cols-[88px_1fr_42px] items-center gap-3 text-xs">
                    <span className="font-medium text-muted-foreground">{stage}</span>
                    <div className="h-2 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--telegen-cyan),var(--telegen-lime))]"
                        style={{ width: `${92 - index * 12}%` }}
                      />
                    </div>
                    <span className="text-right font-semibold">{92 - index * 12}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-black/10 bg-white/78 p-4 shadow-soft">
              <div className="mb-4 text-sm font-semibold">Agent queue</div>
              <div className="space-y-3">
                {rows.map(([name, value, status]) => (
                  <div key={name} className="rounded-md border border-black/10 bg-white p-3">
                    <div className="text-sm font-medium">{name}</div>
                    <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                      <span>{value}</span>
                      <span>{status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppFrame>
  )
}

function PreviewStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white/78 p-4 shadow-soft">
      <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">{label}</div>
      <div className="mt-3 font-heading text-3xl leading-none">{value}</div>
    </div>
  )
}

export const iconMap = {
  Activity,
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  FileCheck2,
  GitBranch,
  Layers3,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Sparkles,
}

function GridBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.55]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "linear-gradient(to bottom, black 0%, black 62%, transparent 100%)",
      }}
    />
  )
}

function LinearBlurs() {
  return (
    <>
      <div className="pointer-events-none absolute left-[-18%] top-20 h-56 w-[58rem] rotate-[-18deg] bg-[linear-gradient(90deg,rgba(34,211,238,0.22),rgba(190,242,100,0.2),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-18%] top-72 h-64 w-[54rem] rotate-[16deg] bg-[linear-gradient(90deg,transparent,rgba(251,113,133,0.2),rgba(139,92,246,0.18))] blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 left-1/2 h-48 w-[44rem] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(34,211,238,0.12),rgba(255,255,255,0),rgba(190,242,100,0.12))] blur-3xl" />
    </>
  )
}
