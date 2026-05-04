import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  ClipboardList,
  CreditCard,
  Gauge,
  HeartPulse,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MetricCard } from "@/components/rye/metric-card"
import { Reveal, RevealItem } from "@/components/rye/reveal"
import { SectionHeading } from "@/components/rye/section-heading"
import { SiteNav } from "@/components/rye/site-nav"
import {
  bookingSlots,
  campaignRows,
  chatSteps,
  complianceItems,
  funnelStages,
  providerDifferentiators,
  providerFaqs,
  providerPillars,
  providerTrustStatements,
  treatmentPlans,
} from "@/lib/rye/data"

const conditions = ["Peptide", "GLP-1", "Hormone", "Longevity"]

const pilotMailto =
  "mailto:hello@ryehealth.co?subject=Rye%20pilot%20application&body=Clinic%20name%3A%0AStates%20licensed%3A%0ACurrent%20cash-pay%20revenue%3A%0ABriefly%2C%20what%20you%E2%80%99d%20want%20Rye%20to%20stand%20up%20first%3A"

const pillarIcons = {
  acquire: Megaphone,
  convert: Workflow,
  attribute: Gauge,
} as const

const flowSteps = [
  {
    href: "/",
    label: "Landing",
    eyebrow: "Step 1",
    title: "Henry-style condition page",
    detail: "Free evaluation, transparent pricing, clinician review framing.",
    preview: "Plans from $349/mo · Evaluation $0 · Visit Online",
  },
  {
    href: "/intake",
    label: "Intake",
    eyebrow: "Step 2",
    title: "AI-assisted patient intake",
    detail: "iMessage-style chat with structured controls and BMI math.",
    preview: chatSteps[0]?.prompt ?? "",
  },
  {
    href: "/checkout",
    label: "Treatment review",
    eyebrow: "Step 3",
    title: "Editable plans, compliance copy",
    detail: "Provider-editable pricing. Payment does not guarantee a prescription.",
    preview: `${treatmentPlans[1]?.name ?? "Tirzepatide care"} · ${treatmentPlans[1]?.price ?? "$399"} ${treatmentPlans[1]?.cadence ?? "per month"}`,
  },
  {
    href: "/book",
    label: "Booking",
    eyebrow: "Step 4",
    title: "State-aware scheduling",
    detail: "Clinician availability filtered by state license.",
    preview: bookingSlots.slice(0, 2).join(" · "),
  },
  {
    href: "/thanks",
    label: "Confirmation",
    eyebrow: "Step 5",
    title: "Post-booking support",
    detail: "Confirmation, prep copy, and a non-clinical assistant demo.",
    preview: "Your clinician review is booked.",
  },
]

const dashboardKpis = [
  {
    label: "Attributed revenue",
    numeric: { to: 173500, format: "currency-k" as const },
    detail: "Last 30 days · 3 active campaigns",
  },
  {
    label: "Booked consults",
    numeric: { to: 1240, format: "comma" as const },
    detail: "10% of ad clicks · cash-pay only",
  },
  {
    label: "Cost per booked consult",
    numeric: { to: 58, format: "currency" as const },
    detail: "Down 14% vs prior 30 days",
  },
]

const footerDisclaimers = [
  "Rye is infrastructure. A licensed clinician of record at the clinic makes every medical decision.",
  "Rye is not a provider, pharmacy, prescriber, or merchant of record for prescription medication.",
  "Compounded medications are not FDA-approved and require clinician judgment and qualified-pharmacy review.",
  "Telehealth availability and treatment options vary by state.",
  "Prescription treatment is not guaranteed. Payment does not guarantee a prescription.",
  "This page is provider-facing demo material and does not provide medical advice.",
]

export const metadata = {
  title: "Rye | Agentic AI telehealth infrastructure for licensed cash-pay providers",
  description:
    "Patient acquisition, AI-assisted intake, booking, and revenue attribution for licensed cash-pay telehealth clinics. Pilot-first.",
}

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav variant="providers" />

      <section className="bg-[var(--rye-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
          <Reveal className="flex flex-col gap-6">
            <RevealItem>
              <Badge variant="outline" className="h-8 w-fit bg-background px-3 text-sm">
                For licensed cash-pay providers
              </Badge>
            </RevealItem>
            <RevealItem>
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--rye-ink)] sm:text-6xl lg:text-[64px]">
                Agentic AI telehealth infrastructure for licensed cash-pay providers.
              </h1>
            </RevealItem>
            <RevealItem>
              <p className="max-w-xl text-xl leading-8 text-muted-foreground">
                Launch compliant patient funnels, AI-assisted intake, booking, and revenue attribution &mdash; in days.
              </p>
            </RevealItem>
            <RevealItem className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-full px-8 text-base">
                <Link href="#pilot">Apply for pilot</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-13 rounded-full bg-background px-8 text-base"
              >
                <Link href="/dashboard">See the dashboard</Link>
              </Button>
            </RevealItem>
            <RevealItem className="grid max-w-xl grid-cols-3 gap-3 pt-2">
              {[
                ["Pilot length", "30 days"],
                ["Setup", "White-glove"],
                ["Attribution", "PHI-safe"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border pt-4">
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="mt-1 text-2xl font-semibold tabular">{value}</div>
                </div>
              ))}
            </RevealItem>
          </Reveal>

          <Reveal stagger={0} delay={0.18}>
            <RevealItem variant="scale-fade">
              <Card className="overflow-hidden py-0 shadow-soft">
                <Image
                  src="/images/rye/clinician-review.png"
                  alt="Clinician reviewing a Rye-built intake on a tablet"
                  width={1536}
                  height={1024}
                  priority
                  className="aspect-[4/3] w-full object-cover"
                />
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <RevealItem>
            <div className="text-base text-muted-foreground">
              Built for clinics already running cash-pay care:
            </div>
          </RevealItem>
          <Reveal className="flex flex-wrap gap-2" stagger={0.05} delay={0.05}>
            {conditions.map((condition) => (
              <RevealItem key={condition}>
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {condition}
                </Badge>
              </RevealItem>
            ))}
          </Reveal>
        </Reveal>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem>
              <SectionHeading
                title="Three systems, one revenue surface."
                description="Each pillar ships pre-wired to the others &mdash; campaigns inform the funnel, the funnel feeds attribution, attribution feeds the next experiment."
              />
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-3" stagger={0.1} delay={0.1}>
            {providerPillars.map((pillar) => {
              const Icon = pillarIcons[pillar.key as keyof typeof pillarIcons] ?? Sparkles
              return (
                <RevealItem key={pillar.key}>
                  <Card className="h-full bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <div className="flex size-9 items-center justify-center rounded-full bg-[var(--rye-sage)] text-primary">
                        <Icon />
                      </div>
                      <div className="text-sm font-medium text-muted-foreground">{pillar.eyebrow}</div>
                      <CardTitle className="text-2xl">{pillar.name}</CardTitle>
                      <CardDescription className="text-base leading-7">{pillar.blurb}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid gap-3 text-sm">
                        {pillar.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2">
                            <Check data-icon="inline-start" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </RevealItem>
              )
            })}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--rye-cream)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem>
              <SectionHeading
                title="What Rye builds for your clinic."
                description="A complete patient journey, ready to brand. Click any stage to see it live in the prototype."
              />
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-2 lg:grid-cols-5" stagger={0.07} delay={0.1}>
            {flowSteps.map((step) => (
              <RevealItem key={step.href}>
                <Card className="h-full bg-background shadow-none" data-hoverable="true">
                  <CardHeader>
                    <div className="text-sm font-medium text-muted-foreground tabular">{step.eyebrow}</div>
                    <CardTitle className="text-lg leading-snug">{step.title}</CardTitle>
                    <CardDescription className="leading-6">{step.detail}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div className="rounded-md bg-[var(--rye-sage)] px-3 py-2 text-xs leading-5 text-[var(--rye-green-dark)]">
                      {step.preview}
                    </div>
                    <Button asChild variant="ghost" className="h-9 self-start px-0 text-primary">
                      <Link href={step.href}>
                        Open {step.label.toLowerCase()} <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <Reveal stagger={0} delay={0.05}>
              <RevealItem>
                <SectionHeading
                  title="Every dollar, every drop-off, every state."
                  description="Attributed revenue and PHI-safe analytics in one operator surface."
                />
              </RevealItem>
            </Reveal>
            <Reveal stagger={0} delay={0.15}>
              <RevealItem>
                <Button asChild variant="outline" className="h-11 self-start rounded-full px-5">
                  <Link href="/dashboard">
                    Open the live dashboard <ArrowRight />
                  </Link>
                </Button>
              </RevealItem>
            </Reveal>
          </div>
          <Reveal className="grid gap-4 md:grid-cols-3" stagger={0.08} delay={0.1}>
            {dashboardKpis.map((kpi) => (
              <RevealItem key={kpi.label}>
                <MetricCard label={kpi.label} numeric={kpi.numeric} detail={kpi.detail} />
              </RevealItem>
            ))}
          </Reveal>
          <Reveal className="grid gap-6 lg:grid-cols-[1.4fr_1fr]" stagger={0.1} delay={0.15}>
            <RevealItem>
              <Card className="h-full shadow-none" data-hoverable="true">
                <CardHeader>
                  <CardTitle className="text-lg">Campaigns</CardTitle>
                  <CardDescription>Revenue, conversion, and lift by campaign.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Campaign</TableHead>
                        <TableHead>Source</TableHead>
                        <TableHead className="text-right">Revenue</TableHead>
                        <TableHead className="text-right">CVR</TableHead>
                        <TableHead className="text-right">Lift</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {campaignRows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell className="font-medium">{row.name}</TableCell>
                          <TableCell>{row.source}</TableCell>
                          <TableCell className="text-right tabular">{row.revenue}</TableCell>
                          <TableCell className="text-right tabular">{row.cvr}</TableCell>
                          <TableCell className="text-right tabular font-medium text-primary">{row.lift}</TableCell>
                          <TableCell>
                            <Badge variant={row.status === "Winning" ? "default" : "secondary"}>{row.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </RevealItem>
            <RevealItem>
              <Card className="h-full shadow-none" data-hoverable="true">
                <CardHeader>
                  <CardTitle className="text-lg">Funnel</CardTitle>
                  <CardDescription>Cash-pay drop-off by stage, last 30 days.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-4 text-sm">
                    {funnelStages.map((stage) => {
                      const pct = Number(stage.rate.replace("%", "")) || 0
                      return (
                        <li key={stage.label} className="grid gap-2">
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{stage.label}</span>
                            <span className="text-muted-foreground tabular">
                              {stage.value.toLocaleString()} &middot; {stage.rate}
                            </span>
                          </div>
                          <Progress value={pct} />
                        </li>
                      )
                    })}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--rye-cream)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem>
              <SectionHeading
                title="Not an ops agent. Not a funnel SaaS. Not an in-house build."
                description="Rye is the revenue spine for cash-pay telehealth &mdash; opinionated, attributable, and shipped."
              />
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-3" stagger={0.1} delay={0.1}>
            {providerDifferentiators.map((diff) => (
              <RevealItem key={diff.vs}>
                <Card className="h-full bg-background shadow-none" data-hoverable="true">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit bg-background">
                      {diff.vs}
                    </Badge>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <ul className="grid gap-3 text-sm text-muted-foreground">
                      {diff.weakness.map((line) => (
                        <li key={line} className="flex items-start gap-2">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <Separator />
                    <div className="flex items-start gap-2 text-sm font-medium text-[var(--rye-green-dark)]">
                      <Check data-icon="inline-start" />
                      <span>{diff.ryeAffirm}</span>
                    </div>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <Reveal className="flex flex-col gap-6">
            <RevealItem>
              <Badge variant="secondary" className="w-fit">
                Compliance is a feature, not a footnote
              </Badge>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                State-aware routing, provider approval, PHI-safe analytics.
              </h2>
            </RevealItem>
            <RevealItem>
              <ul className="grid gap-3 text-sm">
                {complianceItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <ShieldCheck data-icon="inline-start" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          </Reveal>
          <Reveal stagger={0} delay={0.1}>
            <RevealItem variant="scale-fade">
              <Card className="bg-[var(--rye-cream)] shadow-soft" data-hoverable="true">
                <CardHeader>
                  <CardTitle className="text-2xl">What Rye is, and is not</CardTitle>
                  <CardDescription className="text-base leading-7">
                    Provider sales should be unambiguous about scope. We say this in writing on every page.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 text-sm">
                    {providerTrustStatements.map((stmt) => (
                      <li key={stmt} className="flex items-start gap-2">
                        <HeartPulse data-icon="inline-start" />
                        <span>{stmt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section id="pilot" className="border-b border-border bg-[var(--rye-sage-strong)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem variant="scale-fade">
              <Card className="mx-auto max-w-3xl border border-primary/30 bg-background shadow-lift">
                <CardHeader className="text-center">
                  <Badge variant="outline" className="mx-auto w-fit bg-background">
                    Pilot intake
                  </Badge>
                  <CardTitle className="text-4xl leading-tight md:text-5xl">Apply for the Rye pilot.</CardTitle>
                  <CardDescription className="mx-auto max-w-2xl text-base leading-7">
                    We&rsquo;re onboarding a small number of cash-pay clinics this quarter. Pilots include white-glove
                    setup and a paid attribution audit, finished in 30 days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                  <Button asChild size="lg" className="h-13 rounded-full px-8 text-base">
                    <a href={pilotMailto}>
                      Apply for pilot <ArrowRight />
                    </a>
                  </Button>
                  <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <ClipboardList data-icon="inline-start" /> One condition, one state, one funnel
                    </span>
                    <span className="flex items-center gap-2">
                      <CreditCard data-icon="inline-start" /> Provider-owned processor path
                    </span>
                    <span className="flex items-center gap-2">
                      <Sparkles data-icon="inline-start" /> Your clinicians, your brand
                    </span>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <Reveal className="flex flex-col gap-3">
            <RevealItem>
              <Badge variant="outline" className="w-fit bg-background">
                FAQ
              </Badge>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Provider questions, in writing.
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-base leading-7 text-muted-foreground">
                We try to pre-answer the questions clinic operators ask before a call. Anything missing? Tell us in your pilot application.
              </p>
            </RevealItem>
          </Reveal>
          <Reveal stagger={0} delay={0.15}>
            <RevealItem>
              <Card className="shadow-none">
                <CardContent>
                  <Accordion type="single" collapsible defaultValue={providerFaqs[0]?.q}>
                    {providerFaqs.map((faq) => (
                      <AccordionItem key={faq.q} value={faq.q}>
                        <AccordionTrigger>{faq.q}</AccordionTrigger>
                        <AccordionContent className="leading-6 text-muted-foreground">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <footer className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-10 text-xs leading-6 text-muted-foreground sm:px-6 lg:px-8">
          {footerDisclaimers.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </footer>
    </main>
  )
}
