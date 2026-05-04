"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, Check, CreditCard, ShieldCheck } from "lucide-react"
import { AnimatePresence, m } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Reveal, RevealItem } from "@/components/rye/reveal"
import { treatmentPlans } from "@/lib/rye/data"
import { EASE_OUT_EXPO, SPRING_TACTILE } from "@/lib/rye/motion"
import { cn } from "@/lib/utils"

export function CheckoutFlow() {
  const [selectedPlan, setSelectedPlan] = useState("Tirzepatide care")
  const selected = treatmentPlans.find((plan) => plan.name === selectedPlan) ?? treatmentPlans[1]

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.68fr_0.32fr] lg:px-8">
      <Card className="shadow-soft">
        <CardHeader className="max-w-2xl">
          <CardTitle className="text-4xl leading-tight">Choose your treatment-review plan</CardTitle>
          <CardDescription className="text-base leading-7">
            Your clinician will review your intake before any prescription decision. If treatment is not
            appropriate, the provider workflow can route cancellation or refund handling based on policy.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Reveal className="mt-7 grid gap-4 md:grid-cols-3" delay={0.1}>
            {treatmentPlans.map((plan) => {
              const isSelected = selectedPlan === plan.name
              return (
                <RevealItem key={plan.name}>
                  <m.button
                    onClick={() => setSelectedPlan(plan.name)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_TACTILE}
                    className={cn(
                      "relative h-full w-full rounded-lg border bg-background p-5 text-left transition-colors",
                      isSelected ? "border-primary" : "border-border hover:border-primary/60"
                    )}
                  >
                    {isSelected ? (
                      <m.div
                        layoutId="plan-ring"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                        className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-primary/40"
                      />
                    ) : null}
                    <div className="relative flex items-center justify-between gap-3">
                      <div className="text-sm font-medium text-muted-foreground">{plan.name}</div>
                      {isSelected ? <Check data-icon="inline-end" className="text-primary" /> : null}
                    </div>
                    <div className="relative mt-3 text-3xl font-semibold tabular">{plan.price}</div>
                    <div className="relative mt-1 text-sm text-muted-foreground">{plan.cadence}</div>
                    <p className="relative mt-4 text-sm leading-6 text-muted-foreground">{plan.description}</p>
                  </m.button>
                </RevealItem>
              )
            })}
          </Reveal>

          <Reveal stagger={0} delay={0.2}>
            <RevealItem>
              <div className="mt-7 rounded-xl border border-border bg-[var(--rye-sage)] p-5 transition-shadow duration-300 hover:shadow-soft">
                <div className="font-medium">What providers can test later</div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {["First month promo", "CTA copy", "Trust proof", "Refund framing"].map((item, idx) => (
                    <m.div
                      key={item}
                      initial={{ opacity: 0, x: -6 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-10% 0px" }}
                      transition={{ duration: 0.4, ease: EASE_OUT_EXPO, delay: idx * 0.06 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Check data-icon="inline-start" />
                      {item}
                    </m.div>
                  ))}
                </div>
              </div>
            </RevealItem>
          </Reveal>
        </CardContent>
      </Card>

      <Card className="h-fit shadow-soft" data-hoverable="true">
        <CardContent>
          <div className="text-sm text-muted-foreground">Selected plan</div>
          <AnimatePresence mode="wait">
            <m.div
              key={selected.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
            >
              <div className="mt-2 text-2xl font-semibold">{selected.name}</div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-semibold tabular">{selected.price}</span>
                <span className="pb-1 text-sm text-muted-foreground">{selected.cadence}</span>
              </div>
            </m.div>
          </AnimatePresence>
          <Reveal className="mt-5 grid gap-3 border-t border-border pt-5 text-sm" delay={0.05} stagger={0.06}>
            {[
              ["Clinical review", "Included"],
              ["Supplies if prescribed", "Included"],
              ["Care support", "Included"],
            ].map(([label, value]) => (
              <RevealItem key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <span className="flex items-center gap-1.5 text-primary">
                  <Check className="size-4" /> {value}
                </span>
              </RevealItem>
            ))}
          </Reveal>
          <div className="mt-5 rounded-lg border border-border p-4 transition-colors duration-300 hover:border-primary/30 hover:bg-[var(--rye-sage)]/40">
            <div className="flex items-center gap-2 font-medium">
              <CreditCard data-icon="inline-start" />
              Mock payment
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Providers can use Rye payments after approval or connect their own processor.
            </p>
          </div>
          <m.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} transition={SPRING_TACTILE} className="mt-5">
            <Button asChild className="h-12 w-full rounded-full">
              <Link href="/book">
                Pay and book consult
                <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
          </m.div>
          <div className="mt-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground">
            <ShieldCheck data-icon="inline-start" />
            Payment does not guarantee a prescription. A licensed clinician makes all medical decisions.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
