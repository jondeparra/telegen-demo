import Image from "next/image"
import Link from "next/link"
import {
  CalendarCheck,
  Check,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Star,
  Truck,
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
import { Reveal, RevealItem } from "@/components/rye/reveal"
import { SiteNav } from "@/components/rye/site-nav"

const includedItems = [
  {
    title: "Free online evaluation",
    description: "Answer health questions from home in a few minutes.",
    icon: ClipboardList,
  },
  {
    title: "Licensed provider review",
    description: "A clinician reviews your intake and discusses options.",
    icon: HeartPulse,
  },
  {
    title: "Treatment if prescribed",
    description: "Your provider determines whether medication is appropriate.",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing care support",
    description: "Get help with refills, billing, and next steps.",
    icon: MessageCircle,
  },
]

const howItWorks = [
  {
    title: "Complete your evaluation",
    description:
      "Tell us about your goals, medical history, medications, allergies, and state so a provider has the right context.",
  },
  {
    title: "Meet a licensed provider",
    description:
      "If the basic criteria fit, book a telehealth review with a clinician licensed for your state.",
  },
  {
    title: "Start care if appropriate",
    description:
      "If prescribed, your treatment path, support, and refill workflow are managed through the Rye experience.",
  },
]

const reasons = [
  "No insurance required",
  "Transparent monthly pricing",
  "Online visit scheduling",
  "Clinician-led decisions",
  "Support after checkout",
  "Provider-approved protocols",
]

const reviews = [
  {
    quote:
      "I wanted a private, simple way to understand my options before committing to an appointment. Rye made the next step feel clear.",
    name: "Maya R.",
  },
  {
    quote:
      "The pricing was easy to understand and the visit flow made it obvious that a clinician was making the decision.",
    name: "Jordan P.",
  },
  {
    quote:
      "The intake felt more like texting than filling out a medical form. I knew what was happening at each step.",
    name: "Elena S.",
  },
]

const faqs = [
  {
    question: "Is Tirzepatide guaranteed?",
    answer:
      "No. Rye helps collect information and schedule a provider review. A licensed clinician decides whether any treatment is appropriate.",
  },
  {
    question: "What does the monthly plan include?",
    answer:
      "The prototype plan includes provider review, care support, and the treatment path if prescribed. Pricing and inclusions are editable by the provider.",
  },
  {
    question: "Do I need insurance?",
    answer:
      "This demo is built around self-pay care. Insurance is not required for the prototype flow.",
  },
  {
    question: "Are compounded medications FDA-approved?",
    answer:
      "No. Compounded medications are not FDA-approved. They require clinician judgment, appropriate pharmacy review, and patient-specific prescribing where legally permitted.",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="bg-[var(--rye-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-12">
          <Reveal className="flex flex-col gap-6">
            <RevealItem>
              <Badge variant="outline" className="h-8 w-fit bg-background px-3 text-sm">
                Free online evaluation
              </Badge>
            </RevealItem>
            <RevealItem className="flex flex-col gap-4">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[1] tracking-normal text-[var(--rye-ink)] sm:text-6xl lg:text-[72px]">
                Oral Tirzepatide tablets, reviewed online
              </h1>
              <p className="max-w-xl text-xl leading-8 text-muted-foreground">
                Start with a simple evaluation. If appropriate, a licensed provider can review your
                health history and discuss a self-pay weight management plan.
              </p>
            </RevealItem>
            <RevealItem className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13 rounded-full px-8 text-base">
                <Link href="/intake">Do I Qualify?</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-13 rounded-full bg-background px-8 text-base">
                <Link href="#included">What&apos;s included</Link>
              </Button>
            </RevealItem>
            <RevealItem className="grid max-w-xl grid-cols-3 gap-3">
              {[
                ["Plans from", "$349/mo"],
                ["Evaluation", "$0"],
                ["Visit", "Online"],
              ].map(([label, value]) => (
                <div key={label} className="border-t border-border pt-4">
                  <div className="text-sm text-muted-foreground">{label}</div>
                  <div className="mt-1 text-2xl font-semibold tabular">{value}</div>
                </div>
              ))}
            </RevealItem>
            <RevealItem>
              <p className="max-w-xl text-xs leading-5 text-muted-foreground">
                Prescription treatment is not guaranteed. Compounded medications are not FDA-approved.
              </p>
            </RevealItem>
          </Reveal>

          <Reveal stagger={0} delay={0.18}>
            <RevealItem variant="scale-fade">
              <Card className="overflow-hidden py-0 shadow-sm">
                <Image
                  src="/images/rye/henry-style-hero.png"
                  alt="Patient using a phone for an online clinician visit"
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

      <section id="included" className="border-y border-border bg-background">
        <Reveal className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {includedItems.map((item) => (
            <RevealItem key={item.title}>
              <Card size="sm" className="h-full shadow-none" data-hoverable="true">
                <CardContent className="flex items-start gap-3">
                  <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--rye-sage)] text-primary">
                    <item.icon />
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem variant="scale-fade">
              <Card className="overflow-hidden py-0 shadow-sm">
                <Image
                  src="/images/rye/care-kit.png"
                  alt="Rye care kit and support materials"
                  width={1536}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover"
                />
              </Card>
            </RevealItem>
          </Reveal>
          <Reveal className="flex flex-col gap-6">
            <RevealItem>
              <Badge variant="secondary" className="w-fit">Monthly plan</Badge>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Treatment support in one clear subscription
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-muted-foreground">
                Rye is designed to make the cash-pay path feel straightforward: evaluation, provider
                review, payment, booking, and support in one guided flow.
              </p>
            </RevealItem>
            <RevealItem>
              <Card
                className="max-w-xl border border-primary/30 bg-[var(--rye-cream)] shadow-soft"
                data-hoverable="true"
              >
                <CardHeader>
                  <CardTitle className="flex items-end gap-2 text-5xl">
                    <span className="tabular">$349</span>
                    <span className="pb-1 text-base font-normal text-muted-foreground">per month</span>
                  </CardTitle>
                  <CardDescription className="text-base leading-7">
                    Seed pricing for the prototype. Providers can edit pricing, pharmacy route, and plan inclusions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 text-sm">
                    {reasons.slice(0, 4).map((reason) => (
                      <div key={reason} className="flex items-center gap-2">
                        <Check data-icon="inline-start" />
                        {reason}
                      </div>
                    ))}
                  </div>
                  <Button asChild className="mt-6 h-12 w-full rounded-full">
                    <Link href="/intake">Do I Qualify?</Link>
                  </Button>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--rye-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <Reveal>
            <RevealItem>
              <Badge variant="outline" className="mb-5 bg-background">How it works</Badge>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">A simple path from intake to provider review</h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                The page intentionally moves one step at a time. Fewer choices, clear pricing, and visible
                clinician review reduce anxiety before checkout.
              </p>
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-3" delay={0.18}>
            {howItWorks.map((step, index) => (
              <RevealItem key={step.title}>
                <Card className="h-full bg-background shadow-none" data-hoverable="true">
                  <CardHeader>
                    <div className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-semibold tabular text-primary-foreground">
                      {index + 1}
                    </div>
                    <CardTitle className="mt-2 text-xl">{step.title}</CardTitle>
                    <CardDescription className="leading-6">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-8">
          <Reveal className="flex flex-col gap-6">
            <RevealItem>
              <Badge variant="secondary" className="w-fit">Provider-reviewed care</Badge>
            </RevealItem>
            <RevealItem>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Your evaluation is reviewed by a licensed clinician
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="text-lg leading-8 text-muted-foreground">
                Rye keeps the clinical decision with the provider. The intake helps organize the information
                a clinician needs before discussing whether treatment may be appropriate.
              </p>
            </RevealItem>
            <RevealItem className="grid gap-3 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-center gap-2 text-sm font-medium">
                  <Check data-icon="inline-start" />
                  {reason}
                </div>
              ))}
            </RevealItem>
          </Reveal>
          <Reveal stagger={0} delay={0.1}>
            <RevealItem variant="scale-fade">
              <Card className="overflow-hidden py-0 shadow-sm">
                <Image
                  src="/images/rye/clinician-review.png"
                  alt="Clinician reviewing an online intake on a tablet"
                  width={1536}
                  height={1024}
                  className="aspect-[4/3] w-full object-cover"
                />
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--rye-cream)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <Reveal>
            <RevealItem>
              <Badge variant="outline" className="mb-5 bg-background">Patient perspective</Badge>
              <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                Built for people comparing online weight loss options
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                Consumer pages need to answer the buying questions fast: price, legitimacy, convenience,
                treatment path, and what happens if the provider says no.
              </p>
            </RevealItem>
          </Reveal>
          <Reveal className="grid gap-4 md:grid-cols-3" delay={0.16}>
            {reviews.map((review) => (
              <RevealItem key={review.name}>
                <Card className="h-full bg-background shadow-none" data-hoverable="true">
                  <CardContent>
                    <div className="flex gap-1 text-[var(--rye-gold)]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="fill-current" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">&ldquo;{review.quote}&rdquo;</p>
                    <div className="mt-4 font-medium">{review.name}</div>
                    <div className="text-sm text-muted-foreground">Prototype patient</div>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <Reveal stagger={0} delay={0.05}>
            <RevealItem>
              <Card className="bg-[var(--rye-cream)] shadow-none">
                <CardHeader>
                  <CardTitle className="text-3xl">What is oral Tirzepatide?</CardTitle>
                  <CardDescription className="text-base leading-7">
                    Tirzepatide is commonly discussed in weight management because it targets incretin pathways
                    involved in appetite and metabolic signaling. This demo is not medical advice; a provider
                    must determine whether any treatment is appropriate.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <ShieldCheck data-icon="inline-start" />
                      Provider decision required
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck data-icon="inline-start" />
                      Fulfillment shown only if prescribed
                    </div>
                    <div className="flex items-center gap-2">
                      <CalendarCheck data-icon="inline-start" />
                      Follow-up workflow after checkout
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
          <Reveal stagger={0} delay={0.15}>
            <RevealItem>
              <Card className="shadow-none">
                <CardHeader>
                  <CardTitle className="text-3xl">Questions before you start</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible defaultValue={faqs[0].question}>
                    {faqs.map((faq) => (
                      <AccordionItem key={faq.question} value={faq.question}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent className="leading-6 text-muted-foreground">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </RevealItem>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-[var(--rye-cream)]">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <RevealItem className="flex max-w-2xl flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">For providers</Badge>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
              Are you the clinic behind a flow like this?
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              Rye is the infrastructure. See what we build for licensed cash-pay providers.
            </p>
          </RevealItem>
          <RevealItem>
            <Button asChild variant="outline" size="lg" className="h-12 self-start rounded-full bg-background px-6 lg:self-auto">
              <Link href="/providers">For providers</Link>
            </Button>
          </RevealItem>
        </Reveal>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-10 text-xs leading-6 text-muted-foreground sm:px-6 lg:px-8">
          This prototype is for product validation and provider sales. It does not provide medical advice,
          guarantee eligibility, guarantee prescription approval, or represent that Rye is a medical practice,
          pharmacy, or merchant of record for prescription medication. Compounded medications are not
          FDA-approved and should be evaluated by licensed clinicians and qualified pharmacies.
        </div>
      </section>
    </main>
  )
}
