import Link from "next/link"
import {
  ArrowLeft,
  BadgeCheck,
  BarChart3,
  Calendar,
  Check,
  CircleDollarSign,
  FlaskConical,
  GitBranch,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { MetricCard } from "@/components/rye/metric-card"
import { Counter } from "@/components/rye/counter"
import { Reveal, RevealItem } from "@/components/rye/reveal"
import { RyeLogo } from "@/components/rye/logo"
import {
  campaignRows,
  complianceItems,
  experiments,
  funnelStages,
  patientPipeline,
} from "@/lib/rye/data"
import { cn } from "@/lib/utils"

const navItems = [
  ["Revenue", BarChart3],
  ["Campaigns", Megaphone],
  ["Experiments", GitBranch],
  ["Storefront", FlaskConical],
  ["Patients", Users],
  ["Compliance", ShieldCheck],
] as const

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--rye-cream)]/40 text-foreground">
      <div className="grid min-h-screen lg:grid-cols-[260px_1fr]">
        <aside className="hidden border-r border-border bg-background p-5 lg:block">
          <RyeLogo />
          <nav className="mt-8 grid gap-1">
            {navItems.map(([label, Icon], idx) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className={cn(
                  "group/nav relative flex items-center gap-3 overflow-hidden rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200",
                  "hover:bg-[var(--rye-sage)] hover:text-foreground",
                  idx === 0 && "bg-[var(--rye-sage)]/60 text-foreground"
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute left-0 top-1/2 h-6 w-0.5 -translate-y-1/2 origin-center scale-y-0 rounded-r-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    "group-hover/nav:scale-y-100",
                    idx === 0 && "scale-y-100"
                  )}
                />
                <Icon className="transition-transform duration-200 group-hover/nav:scale-110" />
                {label}
              </a>
            ))}
          </nav>
          <Card size="sm" className="mt-8 bg-[var(--rye-sage)] shadow-none" data-hoverable="true">
            <CardHeader>
              <CardTitle>Launch wedge</CardTitle>
              <CardDescription className="leading-6">
                CA and NV providers first, national coverage shown for recruiting.
              </CardDescription>
            </CardHeader>
          </Card>
        </aside>

        <section>
          <header className="sticky top-0 z-10 border-b border-border bg-background/90 px-4 py-4 backdrop-blur sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm text-muted-foreground">Rye provider dashboard</div>
                <h1 className="text-2xl font-semibold">Cash-pay revenue optimization</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/">
                    <ArrowLeft data-icon="inline-start" />
                    Patient demo
                  </Link>
                </Button>
                <Button className="rounded-full">
                  Generate variant
                  <Sparkles data-icon="inline-end" />
                </Button>
              </div>
            </div>
          </header>

          <div className="grid gap-6 p-4 sm:p-6 lg:p-8">
            <Reveal id="revenue" className="grid gap-4 md:grid-cols-2 xl:grid-cols-4" stagger={0.07}>
              <RevealItem>
                <MetricCard
                  label="Attributed revenue"
                  numeric={{ to: 173500, format: "currency-k" }}
                  detail="+18.4% from experiments"
                />
              </RevealItem>
              <RevealItem>
                <MetricCard
                  label="Paid starts"
                  numeric={{ to: 1688, format: "comma" }}
                  detail="+21% vs baseline"
                />
              </RevealItem>
              <RevealItem>
                <MetricCard
                  label="Booking rate"
                  numeric={{ to: 73.4, format: "percent" }}
                  detail="paid to consult"
                />
              </RevealItem>
              <RevealItem>
                <MetricCard
                  label="Estimated ROAS"
                  numeric={{ to: 4.8, format: "multiplier" }}
                  detail="first-party model"
                />
              </RevealItem>
            </Reveal>

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <Reveal stagger={0} delay={0.05}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl">Funnel performance</CardTitle>
                          <CardDescription>Drop-off by patient acquisition stage.</CardDescription>
                        </div>
                        <Badge variant="secondary">Tirzepatide</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="mt-6 grid gap-3" stagger={0.08} delay={0.1}>
                        {funnelStages.map((stage, index) => (
                          <RevealItem
                            key={stage.label}
                            className="grid gap-2 md:grid-cols-[170px_1fr_80px_56px] md:items-center"
                          >
                            <div className="text-sm font-medium">{stage.label}</div>
                            <Progress value={Math.max(12, 100 - index * 15)} className="h-3" />
                            <div className="text-right text-sm tabular">
                              <Counter to={stage.value} format="comma" />
                            </div>
                            <div className="text-right text-sm tabular text-muted-foreground">{stage.rate}</div>
                          </RevealItem>
                        ))}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>

              <Reveal stagger={0} delay={0.15}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <CardTitle className="text-xl">Experiment winners</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="grid gap-3" stagger={0.08} delay={0.05}>
                        {experiments.map((experiment) => (
                          <RevealItem key={experiment.name}>
                            <Card
                              size="sm"
                              className="shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                            >
                              <CardContent>
                                <Badge variant="secondary" className="gap-1">
                                  <BadgeCheck data-icon="inline-start" />
                                  {experiment.result}
                                </Badge>
                                <div className="mt-2 font-medium">{experiment.name}</div>
                                <div className="mt-1 text-sm text-muted-foreground">{experiment.variant}</div>
                              </CardContent>
                            </Card>
                          </RevealItem>
                        ))}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>
            </section>

            <Reveal id="campaigns" stagger={0} delay={0.05}>
              <RevealItem>
                <Card className="bg-background shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-xl">Campaign performance</CardTitle>
                    <CardDescription>
                      Revenue attribution stays first-party and avoids treatment-specific ad platform events.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table className="min-w-[720px]">
                      <TableHeader>
                        <TableRow>
                          <TableHead>Campaign</TableHead>
                          <TableHead className="text-right">Revenue</TableHead>
                          <TableHead className="text-right">CVR</TableHead>
                          <TableHead className="text-right">Lift</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {campaignRows.map((campaign) => (
                          <TableRow key={campaign.name}>
                            <TableCell>
                              <div className="font-medium">{campaign.name}</div>
                              <div className="text-muted-foreground">{campaign.source}</div>
                            </TableCell>
                            <TableCell className="text-right tabular">{campaign.revenue}</TableCell>
                            <TableCell className="text-right tabular">{campaign.cvr}</TableCell>
                            <TableCell className="text-right tabular font-medium text-primary">
                              {campaign.lift}
                            </TableCell>
                            <TableCell>
                              <Badge variant={campaign.status === "Winning" ? "default" : "outline"}>
                                {campaign.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </RevealItem>
            </Reveal>

            <section id="experiments" className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
              <Reveal stagger={0} delay={0.05}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <CardTitle className="text-xl">Intake builder</CardTitle>
                      <CardDescription>
                        React Flow-style protocol builder mock for provider-approved intake logic.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="grid gap-4" stagger={0.07} delay={0.1}>
                        {["Landing page", "State check", "Medical history", "Paywall", "Calendar booking"].map(
                          (node, index) => (
                            <RevealItem key={node}>
                              <Card
                                size="sm"
                                className="relative bg-[var(--rye-sage)] shadow-none transition-shadow duration-300 hover:shadow-soft"
                              >
                                <CardContent>
                                  <div className="text-sm text-muted-foreground tabular">Step {index + 1}</div>
                                  <div className="font-medium">{node}</div>
                                  {index < 4 ? (
                                    <div className="absolute -bottom-4 left-8 h-4 border-l border-dashed border-primary" />
                                  ) : null}
                                </CardContent>
                              </Card>
                            </RevealItem>
                          )
                        )}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>

              <Reveal id="ads" stagger={0} delay={0.15}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <CardTitle className="text-xl">Ad creative builder</CardTitle>
                      <CardDescription>
                        Roadmap teaser: generate compliant hooks, scripts, and creative variants from provider-approved offers.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="grid gap-4 md:grid-cols-2" stagger={0.07} delay={0.05}>
                        {["Hook angles", "UGC storyboard", "Meta draft", "Compliance lint"].map((item) => (
                          <RevealItem key={item}>
                            <Card
                              size="sm"
                              className="shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                            >
                              <CardContent>
                                <div className="flex items-center gap-2 font-medium">
                                  <Sparkles data-icon="inline-start" />
                                  {item}
                                </div>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                  Provider approval required before campaign launch.
                                </p>
                              </CardContent>
                            </Card>
                          </RevealItem>
                        ))}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
              <Reveal id="patients" stagger={0} delay={0.05}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <CardTitle className="text-xl">Patient pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="grid gap-3" stagger={0.06} delay={0.05}>
                        {patientPipeline.map((patient) => (
                          <RevealItem key={patient.name}>
                            <Card
                              size="sm"
                              className="shadow-none transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                            >
                              <CardContent className="grid grid-cols-[1fr_auto] gap-3">
                                <div>
                                  <div className="font-medium">{patient.name}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {patient.state} · {patient.status}
                                  </div>
                                </div>
                                <div className="font-medium tabular">{patient.value}</div>
                              </CardContent>
                            </Card>
                          </RevealItem>
                        ))}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>

              <Reveal id="compliance" stagger={0} delay={0.15}>
                <RevealItem>
                  <Card className="bg-background shadow-soft" data-hoverable="true">
                    <CardHeader>
                      <CardTitle className="text-xl">Compliance review</CardTitle>
                      <CardDescription>
                        Guardrails become a revenue feature because providers can scale without losing policy control.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Reveal className="grid gap-3" stagger={0.05} delay={0.05}>
                        {complianceItems.map((item) => (
                          <RevealItem key={item}>
                            <Card size="sm" className="shadow-none">
                              <CardContent className="flex items-start gap-3 text-sm">
                                <Check data-icon="inline-start" />
                                <span>{item}</span>
                              </CardContent>
                            </Card>
                          </RevealItem>
                        ))}
                      </Reveal>
                    </CardContent>
                  </Card>
                </RevealItem>
              </Reveal>
            </section>

            <Reveal className="grid gap-4 md:grid-cols-3" stagger={0.07}>
              <RevealItem>
                <MetricCard
                  label="Payments"
                  value="2 paths"
                  detail="Rye processor or provider-owned processor"
                  className="bg-[var(--rye-sage)]"
                />
              </RevealItem>
              <RevealItem>
                <MetricCard label="Calendar" value="Google" detail="connection mock for scheduling" />
              </RevealItem>
              <RevealItem>
                <MetricCard
                  label="Clinical control"
                  value="Provider"
                  detail="protocols and prescribing decisions"
                  className="bg-[var(--rye-sage)]"
                />
              </RevealItem>
            </Reveal>

            <Reveal stagger={0} delay={0.05}>
              <RevealItem>
                <section className="rounded-xl border border-border bg-[var(--rye-green-dark)] p-6 text-primary-foreground shadow-lift">
                  <Reveal
                    className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
                    stagger={0.1}
                    delay={0.1}
                  >
                    <RevealItem>
                      <div className="flex items-center gap-2 text-sm">
                        <CircleDollarSign data-icon="inline-start" />
                        Sales prototype story
                      </div>
                      <h2 className="mt-2 text-2xl font-semibold">Increase revenue from cash-pay storefronts.</h2>
                    </RevealItem>
                    <RevealItem>
                      <Button asChild variant="secondary" className="rounded-full">
                        <Link href="/intake">
                          Replay patient funnel
                          <Calendar data-icon="inline-end" />
                        </Link>
                      </Button>
                    </RevealItem>
                  </Reveal>
                </section>
              </RevealItem>
            </Reveal>
          </div>
        </section>
      </div>
    </main>
  )
}
