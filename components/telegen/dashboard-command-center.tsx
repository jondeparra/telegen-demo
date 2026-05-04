"use client"

import { useMemo, useState } from "react"
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  FileWarning,
  GitBranch,
  MapPinned,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react"

import { BentoCard, CommandBar, MetricTile, StatusPill, TelegenLogo } from "@/components/telegen/chrome"
import { Button } from "@/components/ui/button"
import {
  campaigns,
  complianceQueue,
  dashboardNav,
  experiments,
  funnelStages,
  metrics,
  patientPipeline,
  stateCoverage,
} from "@/lib/telegen/data"
import { cn } from "@/lib/utils"

const navIcons = [Sparkles, GitBranch, ArrowUpRight, MapPinned, ShieldCheck, UsersRound]

export function DashboardCommandCenter() {
  const [active, setActive] = useState("Overview")
  const activeIndex = useMemo(() => dashboardNav.indexOf(active), [active])

  return (
    <div className="grid min-h-screen gap-5 px-4 py-5 lg:grid-cols-[260px_1fr] lg:p-6">
      <aside className="rounded-[24px] border border-black/10 bg-white/78 p-4 shadow-[0_28px_90px_-62px_rgba(15,23,42,0.8),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
        <div className="flex items-center justify-between">
          <TelegenLogo />
          <div className="rounded-full border border-cyan-300/40 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700">
            beta
          </div>
        </div>
        <div className="mt-8 space-y-1">
          {dashboardNav.map((item, index) => {
            const Icon = navIcons[index]
            return (
              <button
                key={item}
                type="button"
                onClick={() => setActive(item)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted-foreground transition-all hover:bg-black/[0.035] hover:text-foreground",
                  active === item &&
                    "bg-foreground text-background shadow-[0_12px_35px_-24px_rgba(15,23,42,0.9)] hover:bg-foreground hover:text-background"
                )}
              >
                <Icon className="size-4" />
                {item}
              </button>
            )
          })}
        </div>
        <div className="mt-8 rounded-2xl border border-lime-300/40 bg-lime-50/80 p-4 text-sm text-lime-950">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="size-4" />
            Launch posture
          </div>
          <p className="mt-2 leading-6 text-lime-900/80">
            CA and NV are ready. UT is queued for license renewal review before campaigns scale.
          </p>
        </div>
        <div className="mt-4 rounded-2xl border border-rose-300/40 bg-rose-50/80 p-4 text-sm text-rose-950">
          <div className="flex items-center gap-2 font-semibold">
            <CircleAlert className="size-4" />
            Guardrail
          </div>
          <p className="mt-2 leading-6 text-rose-900/80">
            Telegen is infrastructure. Licensed clinicians make all medical decisions.
          </p>
        </div>
      </aside>

      <section className="min-w-0">
        <div className="mb-5 flex flex-col gap-4 rounded-[24px] border border-black/10 bg-white/72 p-4 shadow-soft backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Telegen command center
            </div>
            <h1 className="mt-2 font-heading text-4xl font-normal leading-none sm:text-5xl">
              Regulated growth loop
            </h1>
          </div>
          <div className="w-full max-w-xl">
            <CommandBar prompt={`Ask Telegen to draft a CA launch funnel... ${activeIndex + 1}/6 context loaded`} />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <MetricTile key={metric.label} {...metric} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <FunnelDropOff />
          <CampaignTable />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <ExperimentWinner />
          <StateRouting />
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr]">
          <ComplianceQueue />
          <PatientPipeline />
        </div>
      </section>
    </div>
  )
}

function FunnelDropOff() {
  return (
    <BentoCard className="min-h-[330px]">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold">Funnel drop-off</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Winners are measured by booked consults and paid treatment-review starts.
          </p>
        </div>
        <StatusPill tone="good">Live cohort</StatusPill>
      </div>
      <div className="mt-6 space-y-4">
        {funnelStages.map((stage, index) => (
          <div key={stage.label} className="grid grid-cols-[110px_1fr_70px] items-center gap-3">
            <div>
              <div className="text-sm font-medium">{stage.label}</div>
              <div className="text-xs text-muted-foreground">{stage.count}</div>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-muted">
              <div
                className={cn(
                  "h-full rounded-full",
                  index < 2
                    ? "bg-[linear-gradient(90deg,var(--telegen-cyan),var(--telegen-lime))]"
                    : "bg-[linear-gradient(90deg,var(--telegen-rose),var(--telegen-violet))]"
                )}
                style={{ width: `${stage.value}%` }}
              />
            </div>
            <div className="text-right text-sm font-semibold tabular">{stage.value}%</div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

function CampaignTable() {
  return (
    <BentoCard className="min-h-[330px]">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Campaign performance</div>
          <p className="mt-1 text-sm text-muted-foreground">Source, state, paid starts, booked consults.</p>
        </div>
        <Button size="sm" variant="outline" className="rounded-full">
          Export
        </Button>
      </div>
      <div className="mt-5 overflow-hidden rounded-lg border border-black/10">
        {campaigns.map((campaign) => (
          <div key={campaign.name} className="grid grid-cols-[1fr_60px_70px] gap-3 border-b border-black/10 bg-white/70 p-3 text-sm last:border-b-0 sm:grid-cols-[1.2fr_70px_80px_70px]">
            <div className="min-w-0">
              <div className="truncate font-medium">{campaign.name}</div>
              <div className="text-xs text-muted-foreground">{campaign.source} / {campaign.state}</div>
            </div>
            <div className="hidden text-right sm:block">
              <div className="font-medium tabular">{campaign.starts}</div>
              <div className="text-xs text-muted-foreground">starts</div>
            </div>
            <div className="text-right">
              <div className="font-medium tabular">{campaign.booked}</div>
              <div className="text-xs text-muted-foreground">booked</div>
            </div>
            <div className="text-right font-semibold text-cyan-700">{campaign.roas}</div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

function ExperimentWinner() {
  const winner = experiments[0]

  return (
    <BentoCard>
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-xl bg-foreground text-background">
          <Sparkles className="size-5" />
        </div>
        <div>
          <div className="text-sm font-semibold">Experiment winner</div>
          <div className="text-sm text-muted-foreground">{winner.name}</div>
        </div>
      </div>
      <div className="mt-8 font-heading text-4xl leading-none">{winner.winner}</div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{winner.detail}</p>
      <div className="mt-6 flex items-center justify-between rounded-lg border border-lime-300/40 bg-lime-50 p-4">
        <span className="text-sm font-medium text-lime-900">Paid review starts</span>
        <span className="font-heading text-3xl leading-none text-lime-800">{winner.lift}</span>
      </div>
    </BentoCard>
  )
}

function StateRouting() {
  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">State-aware routing</div>
          <p className="mt-1 text-sm text-muted-foreground">Patient state must match eligible licensed coverage.</p>
        </div>
        <MapPinned className="size-5 text-cyan-700" />
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stateCoverage.map((row) => (
          <div key={row.state} className="rounded-lg border border-black/10 bg-white/72 p-4">
            <div className="flex items-center justify-between">
              <div className="font-heading text-3xl leading-none">{row.state}</div>
              <StatusPill tone={row.status === "Ready" ? "good" : row.status === "Review" ? "warn" : "neutral"}>
                {row.status}
              </StatusPill>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              {row.clinicians} clinicians / {row.next}
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

function ComplianceQueue() {
  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Compliance review queue</div>
          <p className="mt-1 text-sm text-muted-foreground">Claims review before publish.</p>
        </div>
        <FileWarning className="size-5 text-rose-600" />
      </div>
      <div className="mt-5 space-y-3">
        {complianceQueue.map((item) => (
          <div key={item.item} className="rounded-lg border border-black/10 bg-white/72 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="font-medium">{item.item}</div>
              <StatusPill tone={item.risk === "High" ? "hot" : item.risk === "Medium" ? "warn" : "good"}>
                {item.risk}
              </StatusPill>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{item.status}</div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}

function PatientPipeline() {
  const max = patientPipeline[0]?.count ?? 1

  return (
    <BentoCard>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-semibold">Patient pipeline</div>
          <p className="mt-1 text-sm text-muted-foreground">Operational status without prescription-volume incentives.</p>
        </div>
        <UsersRound className="size-5 text-violet-700" />
      </div>
      <div className="mt-5 space-y-4">
        {patientPipeline.map((stage) => (
          <div key={stage.stage}>
            <div className="mb-2 flex items-center justify-between text-sm">
              <span className="font-medium">{stage.stage}</span>
              <span className="font-semibold tabular">{stage.count.toLocaleString()}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,var(--telegen-violet),var(--telegen-cyan))]"
                style={{ width: `${Math.round((stage.count / max) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  )
}
