"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { ArrowRight, Check, LockKeyhole } from "lucide-react"
import { AnimatePresence, m } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Counter } from "@/components/rye/counter"
import { Reveal, RevealItem } from "@/components/rye/reveal"
import { chatSteps } from "@/lib/rye/data"
import { EASE_OUT_EXPO, SPRING_TACTILE } from "@/lib/rye/motion"

type Phase = "options" | "typing"

export function IntakeChat() {
  const [state, setState] = useState<{ stepIndex: number; phase: Phase }>({
    stepIndex: 0,
    phase: "options",
  })
  const [answers, setAnswers] = useState<string[]>([])

  const { stepIndex, phase } = state
  const visibleSteps = useMemo(() => chatSteps.slice(0, stepIndex + 1), [stepIndex])
  const isComplete = stepIndex >= chatSteps.length
  const activeStep = chatSteps[stepIndex]
  const isTyping = phase === "typing"

  useEffect(() => {
    if (phase !== "typing") return
    const id = setTimeout(() => setState((s) => ({ ...s, phase: "options" })), 700)
    return () => clearTimeout(id)
  }, [phase, stepIndex])

  function choose(answer: string) {
    setAnswers((current) => [...current, answer])
    setState((current) => {
      const next = Math.min(current.stepIndex + 1, chatSteps.length)
      return { stepIndex: next, phase: next >= chatSteps.length ? "options" : "typing" }
    })
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.72fr_0.28fr] lg:px-8">
      <Card className="overflow-hidden py-0 shadow-soft">
        <CardHeader className="bg-[var(--rye-sage)] py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle>Rye intake assistant</CardTitle>
              <CardDescription>Mocked AI chat for prototype review</CardDescription>
            </div>
            <div className="rounded-full bg-background px-3 py-1 text-sm font-medium tabular">
              {Math.min(stepIndex + 1, chatSteps.length)} / {chatSteps.length}
            </div>
          </div>
        </CardHeader>

        <div className="flex min-h-[620px] flex-col gap-5 bg-[var(--rye-cream)] p-4 sm:p-6">
          {visibleSteps.map((step, index) => {
            const isLatestPrompt = index === visibleSteps.length - 1
            const showPrompt = !isLatestPrompt || !isTyping || isComplete
            return (
              <div key={step.prompt} className="flex flex-col gap-3">
                <AnimatePresence mode="wait" initial={false}>
                  {showPrompt ? (
                    <m.div
                      key="prompt"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.32, ease: EASE_OUT_EXPO }}
                      className="max-w-[82%] rounded-[24px] rounded-bl-md bg-background px-5 py-4 text-sm leading-6 shadow-soft"
                    >
                      {step.prompt}
                    </m.div>
                  ) : (
                    <TypingBubble key="typing" />
                  )}
                </AnimatePresence>
                {answers[index] ? (
                  <m.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, ease: EASE_OUT_EXPO, delay: 0.05 }}
                    className="ml-auto max-w-[78%] rounded-[24px] rounded-br-md bg-primary px-5 py-3 text-sm font-medium leading-6 text-primary-foreground"
                  >
                    {answers[index]}
                  </m.div>
                ) : null}
              </div>
            )
          })}

          <AnimatePresence mode="wait">
            {!isComplete && activeStep && !isTyping ? (
              <m.div
                key={`options-${stepIndex}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.32, ease: EASE_OUT_EXPO, delay: 0.08 }}
                className="mt-auto rounded-xl border border-border bg-background p-3"
              >
                <div className="grid gap-2 sm:grid-cols-2">
                  {activeStep.options.map((option) => (
                    <m.button
                      key={option}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      transition={SPRING_TACTILE}
                      className="rounded-lg border border-border bg-background px-4 py-3 text-left text-sm font-medium transition-colors hover:border-primary hover:bg-[var(--rye-sage)]"
                      onClick={() => choose(option)}
                    >
                      {option}
                    </m.button>
                  ))}
                </div>
              </m.div>
            ) : null}
          </AnimatePresence>

          {isComplete ? (
            <m.div
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ ...SPRING_TACTILE, delay: 0.05 }}
              className="mt-auto rounded-xl border border-primary bg-background p-5 shadow-glow-primary"
            >
              <div className="flex items-center gap-2 font-medium text-primary">
                <m.span
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ ...SPRING_TACTILE, delay: 0.15 }}
                  className="inline-flex"
                >
                  <Check data-icon="inline-start" />
                </m.span>
                Intake ready for clinician review
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Based on this happy-path demo, the next step is to create the account record and start
                the treatment-review subscription.
              </p>
              <m.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }} transition={SPRING_TACTILE} className="mt-5 inline-flex">
                <Button asChild className="h-12 rounded-full px-6">
                  <Link href="/checkout">
                    Continue to plan
                    <ArrowRight data-icon="inline-end" />
                  </Link>
                </Button>
              </m.div>
            </m.div>
          ) : null}
        </div>
      </Card>

      <Reveal className="flex flex-col gap-4" delay={0.2}>
        <RevealItem>
          <Card className="shadow-none" data-hoverable="true">
            <CardContent>
              <div className="text-sm text-muted-foreground">Estimated BMI</div>
              <div className="mt-2 text-4xl font-semibold tabular">
                <Counter to={33.1} format="decimal-1" />
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Rye can surface reassurance after key answers while keeping clinical decisions with the provider.
              </p>
            </CardContent>
          </Card>
        </RevealItem>
        <RevealItem>
          <Card className="shadow-none" data-hoverable="true">
            <CardContent>
              <div className="flex items-center gap-2 font-medium">
                <LockKeyhole data-icon="inline-start" />
                Privacy posture
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Prototype events are modeled as first-party funnel events. Launch implementation should avoid
                sending PHI-bearing details to ad platforms.
              </p>
            </CardContent>
          </Card>
        </RevealItem>
        <RevealItem>
          <Card className="bg-[var(--rye-sage)] shadow-none" data-hoverable="true">
            <CardContent>
              <div className="font-medium">Social proof moment</div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Thousands of patients use online GLP-1 care paths with clinician review and follow-up support.
              </p>
            </CardContent>
          </Card>
        </RevealItem>
      </Reveal>
    </div>
  )
}

function TypingBubble() {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: EASE_OUT_EXPO }}
      className="flex max-w-[82%] items-center gap-1.5 rounded-[24px] rounded-bl-md bg-background px-5 py-4 shadow-soft"
      aria-label="Assistant is typing"
    >
      {[0, 1, 2].map((i) => (
        <m.span
          key={i}
          className="block size-1.5 rounded-full bg-muted-foreground/60"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{
            duration: 1.0,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.15,
          }}
        />
      ))}
    </m.div>
  )
}
