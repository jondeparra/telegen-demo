"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, CalendarCheck, Loader2, MapPin } from "lucide-react"
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
import { bookingSlots } from "@/lib/rye/data"
import { EASE_OUT_EXPO, SPRING_TACTILE } from "@/lib/rye/motion"
import { cn } from "@/lib/utils"

const states = ["CA", "NV", "UT", "AZ", "TX", "FL", "NY", "WA", "CO", "IL", "GA", "NC"]
const licensedStates = new Set(["CA", "NV", "UT"])

export function BookingFlow() {
  const router = useRouter()
  const [slot, setSlot] = useState(bookingSlots[1])
  const [submitting, setSubmitting] = useState(false)

  function confirm() {
    if (submitting) return
    setSubmitting(true)
    setTimeout(() => router.push("/thanks"), 1100)
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.66fr_0.34fr] lg:px-8">
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="text-4xl leading-tight">Book your clinician review</CardTitle>
          <CardDescription className="max-w-2xl text-base leading-7">
            Rye matches the patient state to provider licensing before showing available consult slots.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Reveal stagger={0} delay={0.05}>
            <RevealItem>
              <div className="mt-7 rounded-xl border border-border bg-[var(--rye-sage)] p-5">
                <div className="flex items-center gap-2 font-medium">
                  <MapPin data-icon="inline-start" />
                  State coverage
                </div>
                <Reveal className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-12" stagger={0.03} delay={0.05}>
                  {states.map((state) => {
                    const licensed = licensedStates.has(state)
                    return (
                      <RevealItem key={state}>
                        <m.div
                          whileHover={licensed ? { scale: 1.06, y: -1 } : undefined}
                          transition={SPRING_TACTILE}
                          className={cn(
                            "flex h-10 items-center justify-center rounded-lg border text-sm font-medium tabular transition-colors",
                            licensed
                              ? "border-primary bg-background text-primary shadow-soft"
                              : "border-border bg-background text-muted-foreground"
                          )}
                        >
                          {state}
                        </m.div>
                      </RevealItem>
                    )
                  })}
                </Reveal>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  CA and NV are the launch wedge. The national map is shown as the provider recruiting vision.
                </p>
              </div>
            </RevealItem>
          </Reveal>

          <Reveal className="mt-7 grid gap-3 sm:grid-cols-2" delay={0.15}>
            {bookingSlots.map((bookingSlot) => {
              const isSelected = slot === bookingSlot
              return (
                <RevealItem key={bookingSlot}>
                  <m.button
                    onClick={() => setSlot(bookingSlot)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={SPRING_TACTILE}
                    className={cn(
                      "relative w-full rounded-lg border p-4 text-left transition-colors",
                      isSelected ? "border-primary bg-[var(--rye-sage)]" : "border-border hover:border-primary/60"
                    )}
                  >
                    {isSelected ? (
                      <m.div
                        layoutId="slot-ring"
                        transition={{ type: "spring", stiffness: 360, damping: 30 }}
                        className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-primary/40"
                      />
                    ) : null}
                    <div className="relative font-medium">{bookingSlot}</div>
                    <div className="relative mt-1 text-sm text-muted-foreground">Dr. Avery Cole, CA licensed</div>
                  </m.button>
                </RevealItem>
              )
            })}
          </Reveal>
        </CardContent>
      </Card>

      <Card className="h-fit shadow-soft" data-hoverable="true">
        <CardContent>
          <div className="flex items-center gap-2 font-medium">
            <CalendarCheck data-icon="inline-start" />
            Selected appointment
          </div>
          <AnimatePresence mode="wait">
            <m.div
              key={slot}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
              className="mt-4 rounded-lg border border-border bg-[var(--rye-sage)] p-4"
            >
              <div className="text-sm text-muted-foreground">Clinician review</div>
              <div className="mt-1 text-xl font-semibold">{slot}</div>
              <div className="mt-2 text-sm text-muted-foreground">Video consult, 20 minutes</div>
            </m.div>
          </AnimatePresence>
          <div className="mt-5 grid gap-3 text-sm text-muted-foreground">
            <p>Telehealth consent and medical history are attached to the visit record.</p>
            <p>The clinician decides whether treatment is appropriate after review.</p>
          </div>
          <m.div whileHover={{ y: -1 }} whileTap={{ scale: 0.99 }} transition={SPRING_TACTILE} className="mt-5">
            <Button
              onClick={confirm}
              disabled={submitting}
              className="h-12 w-full rounded-full disabled:opacity-90"
            >
              <AnimatePresence mode="wait">
                {submitting ? (
                  <m.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="size-4 animate-spin" />
                    Confirming...
                  </m.span>
                ) : (
                  <m.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center gap-2"
                  >
                    Confirm appointment
                    <ArrowRight data-icon="inline-end" />
                  </m.span>
                )}
              </AnimatePresence>
            </Button>
          </m.div>
        </CardContent>
      </Card>
    </div>
  )
}
