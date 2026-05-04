import Link from "next/link"
import { ArrowRight, CircleHelp, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RyeLogo } from "@/components/rye/logo"
import { Reveal, RevealItem } from "@/components/rye/reveal"

const nextSteps = ["Review intake summary", "Join your video consult", "Clinician decides next steps"]

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <RyeLogo />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/dashboard">Provider demo</Link>
          </Button>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.58fr_0.42fr] lg:px-8">
        <Card className="shadow-soft">
          <CardContent className="p-6 sm:p-8">
            <Reveal>
              <RevealItem variant="scale-fade">
                <div className="flex size-12 items-center justify-center rounded-full bg-[var(--rye-sage)] text-primary shadow-glow-primary">
                  <MessageCircle />
                </div>
              </RevealItem>
              <RevealItem>
                <h1 className="mt-6 text-4xl font-semibold leading-tight">Your clinician review is booked</h1>
              </RevealItem>
              <RevealItem>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  The provider will review your intake before your appointment. You will receive visit details,
                  consent documents, and next steps by email and SMS.
                </p>
              </RevealItem>
            </Reveal>
            <Reveal className="mt-7 grid gap-3" delay={0.18} stagger={0.08}>
              {nextSteps.map((step) => (
                <RevealItem key={step}>
                  <div className="relative overflow-hidden rounded-lg border border-border p-4 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-soft">
                    <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 bg-primary" />
                    <span className="ml-2">{step}</span>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
            <Reveal stagger={0} delay={0.4}>
              <RevealItem>
                <Button asChild className="mt-7 h-12 rounded-full px-6">
                  <Link href="/">
                    Back to Rye
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </RevealItem>
            </Reveal>
          </CardContent>
        </Card>

        <Card className="bg-[var(--rye-cream)] shadow-soft">
          <CardContent>
            <div className="flex items-center gap-2 font-medium">
              <CircleHelp data-icon="inline-start" />
              AI support
            </div>
            <Reveal className="mt-5 flex min-h-[440px] flex-col gap-4" delay={0.18} stagger={0.1}>
              <RevealItem>
                <div className="max-w-[86%] rounded-[24px] rounded-bl-md bg-background px-5 py-4 text-sm leading-6 shadow-soft">
                  I can help with process questions while you wait for the clinician review. I cannot provide
                  medical advice or tell you whether a prescription will be issued.
                </div>
              </RevealItem>
              <RevealItem>
                <div className="ml-auto max-w-[78%] rounded-[24px] rounded-br-md bg-primary px-5 py-3 text-sm font-medium leading-6 text-primary-foreground">
                  What happens next?
                </div>
              </RevealItem>
              <RevealItem>
                <div className="max-w-[86%] rounded-[24px] rounded-bl-md bg-background px-5 py-4 text-sm leading-6 shadow-soft">
                  Your provider reviews your intake, confirms your state match, and discusses whether a GLP-1
                  treatment path may be appropriate during the visit.
                </div>
              </RevealItem>
              <RevealItem className="mt-auto">
                <div className="rounded-xl border border-border bg-background p-3">
                  <div className="rounded-lg border border-border px-4 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:border-primary/30 hover:bg-[var(--rye-sage)]/40">
                    Ask about appointment, billing, or next steps...
                  </div>
                </div>
              </RevealItem>
            </Reveal>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
