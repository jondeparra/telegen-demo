import Link from "next/link"
import {
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  FileCheck2,
  GitBranch,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react"

import { BentoCard, CommandBar, StatusPill, TelegenLogo } from "@/components/telegen/chrome"
import { Button } from "@/components/ui/button"
import {
  bookingSlots,
  confirmationSteps,
  intakeFields,
  intakeNodes,
  paywallVariants,
} from "@/lib/telegen/data"

type WorkflowKind = "intake" | "paywall" | "booking" | "confirmation"

const workflowCopy: Record<WorkflowKind, { title: string; detail: string; prompt: string }> = {
  intake: {
    title: "AI intake workflow builder",
    detail:
      "Draft state gates, structured intake questions, and provider approval controls before a funnel reaches patients.",
    prompt: "Ask Telegen to add contraindication screening after medication history...",
  },
  paywall: {
    title: "Paywall experiment builder",
    detail:
      "Test review-start framing, plan copy, and payment handoffs while avoiding direct prescription checkout language.",
    prompt: "Ask Telegen to create a review-first paywall variant for CA...",
  },
  booking: {
    title: "State-aware booking",
    detail:
      "Match patient state to licensed provider availability before showing consult slots or unsupported-state fallbacks.",
    prompt: "Ask Telegen to show eligible clinicians for Nevada patients...",
  },
  confirmation: {
    title: "Confirmation and support",
    detail:
      "Explain next steps, reinforce clinician control, and route non-clinical support questions without medical advice.",
    prompt: "Ask Telegen to draft next-step support copy without medical guidance...",
  },
}

export function WorkflowShell({ kind }: { kind: WorkflowKind }) {
  const copy = workflowCopy[kind]

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-5 text-foreground sm:px-6 lg:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute left-[-20%] top-16 h-56 w-[48rem] rotate-[-15deg] bg-[linear-gradient(90deg,rgba(34,211,238,0.2),rgba(190,242,100,0.18),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-20%] top-64 h-56 w-[48rem] rotate-[15deg] bg-[linear-gradient(90deg,transparent,rgba(251,113,133,0.18),rgba(139,92,246,0.17))] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-5 flex flex-col gap-4 rounded-[24px] border border-black/10 bg-white/76 p-4 shadow-soft backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-4">
            <TelegenLogo />
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Telegen workflow
              </div>
              <h1 className="mt-1 font-heading text-3xl font-normal leading-none sm:text-4xl">{copy.title}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <Link href="/">Home</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[24px] border border-black/10 bg-white/78 p-4 shadow-[0_28px_90px_-62px_rgba(15,23,42,0.8),0_1px_0_rgba(255,255,255,0.9)_inset] backdrop-blur-2xl">
            {[
              ["Intake Builder", "/intake", kind === "intake"],
              ["Paywalls", "/checkout", kind === "paywall"],
              ["Booking", "/book", kind === "booking"],
              ["Confirmation", "/thanks", kind === "confirmation"],
            ].map(([label, href, active]) => (
              <Link
                key={String(href)}
                href={String(href)}
                className={`mb-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-black/[0.035] hover:text-foreground"
                }`}
              >
                {label}
                {active ? <CheckCircle2 className="size-4" /> : null}
              </Link>
            ))}
            <div className="mt-6 rounded-2xl border border-cyan-300/40 bg-cyan-50/80 p-4 text-sm leading-6 text-cyan-950">
              {copy.detail}
            </div>
          </aside>

          <section className="min-w-0">
            <CommandBar prompt={copy.prompt} />
            <div className="mt-5">{renderWorkflow(kind)}</div>
          </section>
        </div>
      </div>
    </main>
  )
}

function renderWorkflow(kind: WorkflowKind) {
  if (kind === "paywall") return <PaywallSurface />
  if (kind === "booking") return <BookingSurface />
  if (kind === "confirmation") return <ConfirmationSurface />
  return <IntakeSurface />
}

function IntakeSurface() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_360px]">
      <BentoCard className="min-h-[620px]">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Builder canvas</div>
            <p className="mt-1 text-sm text-muted-foreground">Connected nodes remain provider-approved before publish.</p>
          </div>
          <GitBranch className="size-5 text-cyan-700" />
        </div>
        <div className="relative mt-6 min-h-[500px] rounded-xl border border-black/10 bg-[linear-gradient(135deg,#fff,#f8fafc)]">
          <svg className="absolute inset-0 size-full" aria-hidden="true">
            <path d="M155 210 C260 120 330 120 430 145" fill="none" stroke="rgba(14,165,233,0.35)" strokeWidth="2" />
            <path d="M155 250 C275 345 355 350 445 345" fill="none" stroke="rgba(163,230,53,0.4)" strokeWidth="2" />
            <path d="M545 155 C650 140 720 160 820 170" fill="none" stroke="rgba(251,113,133,0.35)" strokeWidth="2" />
            <path d="M550 350 C650 350 730 330 835 330" fill="none" stroke="rgba(139,92,246,0.35)" strokeWidth="2" />
          </svg>
          {intakeNodes.map((node) => (
            <div
              key={node.title}
              className="absolute w-[210px] rounded-xl border border-black/10 bg-white/86 p-4 shadow-[0_20px_70px_-48px_rgba(15,23,42,0.8)] backdrop-blur"
              style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="font-medium">{node.title}</div>
                <StatusPill tone={node.status === "Approved" ? "good" : node.status === "Review" ? "warn" : "neutral"}>
                  {node.status}
                </StatusPill>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{node.meta}</div>
            </div>
          ))}
        </div>
      </BentoCard>
      <BentoCard>
        <div className="flex items-center gap-3">
          <FileCheck2 className="size-5 text-cyan-700" />
          <div className="text-sm font-semibold">Required intake fields</div>
        </div>
        <div className="mt-5 space-y-3">
          {intakeFields.map((field) => (
            <div key={field} className="flex items-center gap-3 rounded-lg border border-black/10 bg-white/72 p-3 text-sm">
              <CheckCircle2 className="size-4 text-lime-700" />
              {field}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl border border-rose-300/40 bg-rose-50 p-4 text-sm leading-6 text-rose-950">
          AI drafts structure and risk notes. Providers approve clinical protocol and launch state rules.
        </div>
      </BentoCard>
    </div>
  )
}

function PaywallSurface() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
      <BentoCard>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Paywall variants</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Payment starts a treatment-review workflow; it does not guarantee a prescription.
            </p>
          </div>
          <CreditCard className="size-5 text-cyan-700" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {paywallVariants.map((variant) => (
            <div key={variant.name} className="rounded-xl border border-black/10 bg-white/76 p-5 shadow-soft">
              <StatusPill tone={variant.status === "Winner" ? "good" : variant.status === "Running" ? "warn" : "neutral"}>
                {variant.status}
              </StatusPill>
              <div className="mt-6 font-heading text-4xl leading-none">{variant.price}</div>
              <div className="mt-3 text-sm font-medium">{variant.name}</div>
              <div className="mt-8 rounded-lg border border-cyan-300/30 bg-cyan-50 p-3 text-sm font-semibold text-cyan-800">
                {variant.metric} paid review starts
              </div>
            </div>
          ))}
        </div>
      </BentoCard>
      <BentoCard>
        <div className="text-sm font-semibold">Revenue handoff</div>
        <div className="mt-5 space-y-3">
          {[
            "Provider-owned processor connected",
            "Revenue imports separated from clinical decisions",
            "No merchant-of-record claim for MVP",
            "Refund policy and support copy require approval",
          ].map((item) => (
            <div key={item} className="rounded-lg border border-black/10 bg-white/72 p-3 text-sm text-muted-foreground">
              {item}
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  )
}

function BookingSurface() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
      <BentoCard>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">License-matched consult slots</div>
            <p className="mt-1 text-sm text-muted-foreground">Patients see slots only after state coverage is confirmed.</p>
          </div>
          <CalendarClock className="size-5 text-cyan-700" />
        </div>
        <div className="mt-6 grid gap-4">
          {bookingSlots.map((slot) => (
            <div key={slot.clinician} className="grid gap-3 rounded-xl border border-black/10 bg-white/76 p-4 shadow-soft sm:grid-cols-[1fr_140px_140px] sm:items-center">
              <div>
                <div className="font-medium">{slot.clinician}</div>
                <div className="mt-1 text-sm text-muted-foreground">Licensed states: {slot.states}</div>
              </div>
              <div className="text-sm font-semibold">{slot.window}</div>
              <StatusPill tone={slot.status === "Available" ? "good" : "warn"}>{slot.status}</StatusPill>
            </div>
          ))}
        </div>
      </BentoCard>
      <BentoCard>
        <div className="text-sm font-semibold">Unsupported-state fallback</div>
        <div className="mt-6 rounded-xl border border-amber-300/40 bg-amber-50 p-5 text-sm leading-6 text-amber-950">
          If no appropriately licensed clinician is available, Telegen pauses booking and moves the patient to a waitlist or support path.
        </div>
      </BentoCard>
    </div>
  )
}

function ConfirmationSurface() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
      <BentoCard>
        <div className="flex items-center gap-3">
          <MessageSquareText className="size-5 text-cyan-700" />
          <div>
            <div className="text-sm font-semibold">Support assistant</div>
            <p className="mt-1 text-sm text-muted-foreground">Process guidance, not medical advice.</p>
          </div>
        </div>
        <div className="mt-6 space-y-4">
          <div className="max-w-xl rounded-2xl rounded-bl-sm border border-black/10 bg-white p-4 text-sm leading-6 shadow-soft">
            Your consult request is queued with an eligible licensed clinician. What happens next?
          </div>
          <div className="ml-auto max-w-xl rounded-2xl rounded-br-sm bg-foreground p-4 text-sm leading-6 text-background">
            Telegen confirms booking, routes support questions, and keeps clinical decisions with the provider of record.
          </div>
        </div>
      </BentoCard>
      <BentoCard>
        <div className="flex items-center gap-3">
          <ShieldCheck className="size-5 text-lime-700" />
          <div className="text-sm font-semibold">Required language</div>
        </div>
        <div className="mt-5 space-y-3">
          {confirmationSteps.map((step, index) => (
            <div key={step} className="flex gap-3 rounded-lg border border-black/10 bg-white/72 p-3 text-sm leading-6">
              {index === 0 ? <CircleAlert className="mt-0.5 size-4 shrink-0 text-amber-700" /> : <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-700" />}
              {step}
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  )
}
