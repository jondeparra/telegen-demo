import Link from "next/link"
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  FileCheck2,
  GitBranch,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import {
  BentoCard,
  MarketingSection,
  MiniCommandCenter,
  PageShell,
  SectionIntro,
  SiteNav,
  StatusPill,
} from "@/components/telegen/chrome"
import { Button } from "@/components/ui/button"
import {
  compliancePillars,
  failureModes,
  growthLoop,
  integrations,
  productPillars,
} from "@/lib/telegen/data"

const pillarIcons = [GitBranch, Sparkles, MapPinned, LockKeyhole]

export default function Home() {
  return (
    <PageShell>
      <SiteNav />
      <section className="relative px-4 pb-16 pt-32 sm:px-6 lg:pb-20 lg:pt-40">
        <div className="mx-auto grid w-full max-w-[calc(100vw-2rem)] min-w-0 items-center gap-12 sm:max-w-6xl lg:grid-cols-[0.86fr_1.14fr]">
          <div className="w-full min-w-0 max-w-full">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/78 px-3 py-1.5 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur">
              <span className="size-1.5 rounded-full bg-[var(--telegen-lime)]" />
              AI revenue infrastructure for regulated cash-pay care
            </div>
            <h1 className="w-full max-w-[22rem] break-words font-heading text-[40px] font-normal leading-[0.94] tracking-normal text-foreground sm:max-w-3xl sm:text-7xl sm:leading-[0.9] lg:text-[88px]">
              Revenue infrastructure for regulated cash-pay care.
            </h1>
            <p className="mt-7 w-full max-w-[22rem] text-base leading-7 text-muted-foreground sm:max-w-xl sm:text-lg sm:leading-8">
              Telegen helps licensed providers launch provider-approved funnels, AI-assisted intake,
              state-aware booking, claims review, paywall experiments, and PHI-safe attribution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-11 rounded-full bg-foreground px-5 text-background hover:bg-foreground/90">
                <Link href="/#pilot">
                  Request demo
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-11 rounded-full bg-white/72 px-5">
                <Link href="/dashboard">Run attribution audit</Link>
              </Button>
            </div>
            <div className="mt-8 grid w-full max-w-full grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-3">
              {[
                ["CA/NV", "launch-ready states"],
                ["0", "PHI pixels required"],
                ["24h", "claims queue SLA"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-black/10 bg-white/72 p-3 shadow-soft backdrop-blur">
                  <div className="font-heading text-3xl leading-none">{value}</div>
                  <div className="mt-2 text-xs font-medium leading-4 text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-w-0 overflow-hidden rounded-[32px] lg:overflow-visible">
            <MiniCommandCenter />
          </div>
        </div>
      </section>

      <MarketingSection id="platform" className="pt-6">
        <div className="rounded-[28px] border border-black/10 bg-white/70 p-4 shadow-[0_34px_120px_-72px_rgba(15,23,42,0.78)] backdrop-blur-2xl sm:p-6">
          <div className="grid gap-3 lg:grid-cols-8">
            {growthLoop.map((step, index) => (
              <div key={step} className="relative rounded-xl border border-black/10 bg-white/78 p-4 shadow-soft">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                  {index < growthLoop.length - 1 ? <ArrowRight className="hidden size-4 text-muted-foreground lg:block" /> : null}
                </div>
                <div className="mt-7 text-sm font-semibold leading-5">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </MarketingSection>

      <MarketingSection>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionIntro
            label="Why now"
            title="Generic tools break at the regulated growth layer."
            detail="Cash-pay care operators need speed, but every campaign, intake, state gate, payment handoff, and attribution event has compliance consequences."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {failureModes.map((mode) => (
              <BentoCard key={mode}>
                <div className="flex gap-3">
                  <CircleAlert className="mt-0.5 size-5 shrink-0 text-rose-600" />
                  <p className="text-sm leading-6 text-muted-foreground">{mode}</p>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </MarketingSection>

      <MarketingSection>
        <SectionIntro
          align="center"
          label="Product"
          title="A command center for the whole ad-to-consult loop."
          detail="Telegen makes provider approval, state routing, claims review, and first-party attribution native to the revenue workflow."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {productPillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <BentoCard key={pillar.title} className="min-h-[260px]">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-foreground text-background">
                    <Icon className="size-5" />
                  </div>
                  <StatusPill tone={index === 0 ? "good" : index === 1 ? "warn" : "neutral"}>{pillar.label}</StatusPill>
                </div>
                <h3 className="mt-8 font-heading text-4xl font-normal leading-none">{pillar.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{pillar.detail}</p>
                <div className="mt-8 font-heading text-5xl leading-none">{pillar.stat}</div>
              </BentoCard>
            )
          })}
        </div>
      </MarketingSection>

      <MarketingSection id="compliance">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <SectionIntro
            label="Compliance infrastructure"
            title="Move fast without moving clinical control."
            detail="Telegen is infrastructure, not the provider, pharmacy, prescriber, medical network, or merchant of record."
          />
          <div className="grid gap-4">
            {compliancePillars.map((pillar, index) => (
              <BentoCard key={pillar.title}>
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[linear-gradient(135deg,var(--telegen-cyan),var(--telegen-lime))] text-foreground">
                    {index === 0 ? <FileCheck2 className="size-5" /> : <ShieldCheck className="size-5" />}
                  </div>
                  <div>
                    <h3 className="font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{pillar.detail}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </div>
        </div>
      </MarketingSection>

      <MarketingSection id="integrations">
        <div className="rounded-[28px] border border-black/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(248,250,252,0.72))] p-6 shadow-lift backdrop-blur-2xl sm:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionIntro
              label="Integrations"
              title="Connect to approved clinical, pharmacy, payment, and data paths."
              detail="Telegen should integrate with your lawful operating stack before it tries to replace it."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {integrations.map((integration) => (
                <div key={integration} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/76 p-4 shadow-soft">
                  <CheckCircle2 className="size-5 text-lime-700" />
                  <span className="text-sm font-medium">{integration}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MarketingSection>

      <MarketingSection id="pilot" className="pb-24">
        <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-foreground p-8 text-background shadow-[0_40px_120px_-72px_rgba(15,23,42,0.95)] sm:p-12">
          <div className="absolute right-[-12rem] top-[-8rem] h-72 w-[42rem] rotate-12 bg-[linear-gradient(90deg,var(--telegen-cyan),var(--telegen-lime),var(--telegen-rose))] opacity-30 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-background/60">Pilot offer</div>
              <h2 className="mt-4 max-w-3xl font-heading text-5xl font-normal leading-none sm:text-6xl">
                Paid attribution audit plus one provider-approved funnel.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-background/72">
                Built for one cash-pay clinic in one launch state, with AI-assisted setup, claims review, and booked-consult reporting.
              </p>
            </div>
            <Button asChild size="lg" className="h-11 rounded-full bg-background px-5 text-foreground hover:bg-background/90">
              <Link href="mailto:hello@telegen.health?subject=Telegen%20provider%20demo">
                Request demo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </MarketingSection>
    </PageShell>
  )
}
