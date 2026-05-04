# AGENTS.md

## Project

This repo is the Rye prototype app for Telegen.

Telegen thesis:

> AI revenue infrastructure for regulated cash-pay care.

Rye is the first provider-sales prototype for this thesis. It is for licensed cash-pay providers, med spas with clinician oversight, and telehealth operators that want Henry Meds / MEDVi-style growth workflows without building ad funnels, landing pages, intake, booking, payment handoff, attribution, and compliance review tooling from scratch.

The strategic wedge is:

> The patient-acquisition spine for licensed cash-pay clinics: compliant funnels, AI-assisted intake setup, state-aware booking, claims review, and PHI-safe revenue attribution.

Investor-facing shorthand:

> Agentic AI telehealth infrastructure for licensed cash-pay providers.

Use the investor shorthand carefully. It is category narrative, not permission to imply AI doctors, autonomous care, or self-serve clinical automation.

Patient-facing prototype:
- Consumer landing page for oral Tirzepatide / GLP-1 weight management care.
- Mocked AI intake chat.
- Treatment-review subscription/paywall.
- Calendar booking.
- Thank-you/support flow.

Provider-facing prototype:
- Revenue-first dashboard.
- Funnel and campaign drop-off analytics.
- Paywall experiments.
- React Flow-style intake builder mock.
- Compliance and ad-builder roadmap surfaces.

## Reference Research

Read these before making strategy, copy, compliance, or page-architecture changes:

- `../Research/00-executive-summary.md`
- `../Research/01-market-and-competitors.md`
- `../Research/02-regulatory-and-compliance.md`
- `../Research/03-payments-and-mor.md`
- `../Research/04-mvp-recommendation.md`
- `../Research/06-rye-prototype-plan.md`
- `../Research/07-rye-image-prompts.md`

## Product Positioning

Primary positioning:

> AI revenue infrastructure for regulated cash-pay care.

Product positioning:

> Rye helps licensed cash-pay providers launch compliant patient funnels, AI-assisted intake, booking, claims review, and revenue attribution in days.

Provider-facing shorthand:

> Medvi-style patient funnels for your own clinic, with offer testing, compliant intake, booking, payment options, and revenue attribution.

Dashboard promise:

> See which ads, landing pages, quiz steps, offers, and booking flows turn cash-pay demand into booked consults and paid treatment starts.

Do not position Rye as:
- a doctor or medical practice;
- a pharmacy;
- a prescriber;
- a research-chemical seller;
- a guaranteed-prescription storefront;
- a turnkey medical network;
- an autonomous clinical agent;
- a true merchant of record unless payment/legal work has been completed.

## Tech Stack

- Next.js App Router.
- Bun as the package manager.
- shadcn/ui v4 with the `radix-nova` style from preset `b2BVUGjbM`.
- Tailwind CSS v4.
- Light mode only.
- Mocked AI chat first. Keep code structured so Vercel AI SDK can be added later.

Commands:

```bash
bun install
bun run dev
bun run typecheck
bun run lint
bun run build
```

Use Bun commands, not npm or pnpm, unless the user explicitly asks otherwise.

## Design System Rules

Use shadcn/ui primitives for visible UI units whenever possible:

- `Button`
- `Card`
- `Badge`
- `Table`
- `Progress`
- `Accordion`
- `Separator`

Compose Rye-specific components from shadcn primitives instead of creating ad hoc card/table/badge/progress markup.

Custom Tailwind is fine for:
- page layout;
- responsive grids;
- hero composition;
- chat bubbles;
- patient intake option controls;
- brand-specific spacing and color rhythm.

Visual direction:
- Premium consumer telehealth, closer to Henry Meds / MEDVi / Hims than generic SaaS.
- Direct, price-forward, consumer-readable.
- True white, pale sage, Rye green, warm stone neutrals.
- Rounded pill CTAs.
- Calm clinical friendliness, not luxury spa.
- Avoid oversized SaaS hero typography that makes the page feel like an investor deck.

Primary patient CTA copy:

`Do I Qualify?`

Do not use arrows inside the primary patient CTA unless the user asks for it.

Keep `Provider demo` in the navbar, but the homepage must sell to patients first.

## Consumer Landing Page Strategy

The homepage should answer the consumer buying questions fast:

1. What is this treatment path?
2. What does it cost?
3. Do I need insurance?
4. Is a clinician involved?
5. Is a prescription guaranteed?
6. What happens after I start?

Use ethical marketing psychology:
- Free evaluation lowers activation energy.
- Price anchoring makes the subscription concrete.
- Clinician review builds authority and trust.
- Social proof makes the path feel normal and safe.
- FAQ and disclaimers reduce regret aversion.
- Three-step process reduces choice overload.

Do not over-index on provider/platform language on the patient page. Terms like attribution, campaign optimization, Superwall, revenue lift, and PHI-safe analytics belong in `/dashboard` or provider-facing sections.

Do not put "Agentic AI telehealth infrastructure" in the patient-facing hero. That phrase is for `/providers`, sales collateral, and investor framing.

## Patient Flow Requirements

Routes currently used:

- `/` patient landing page.
- `/intake` mocked AI intake chat.
- `/checkout` treatment subscription/paywall.
- `/book` calendar booking.
- `/thanks` post-booking support chat.
- `/dashboard` provider revenue overview.

Mocked intake should feel like iMessage plus structured controls.

Required intake topics:
- state;
- sex/gender;
- birthday;
- height and weight;
- goal weight or primary goal;
- medical history;
- current medications;
- allergies;
- pregnancy/breastfeeding status where relevant;
- contraindication screening;
- blood pressure/resting heart rate range if known.

Keep the prototype happy-path unless the user asks for disqualification logic.

## Provider Dashboard Requirements

The dashboard should sell revenue lift first.

Keep these concepts visible:
- attributed revenue;
- paid treatment-review starts;
- booking rate;
- estimated ROAS;
- funnel drop-off by stage;
- experiment winners;
- campaign performance;
- intake builder;
- ad creative builder roadmap teaser;
- patient pipeline;
- compliance review.

Measure lift as bookings and paid treatment-review starts, not prescriptions.

The dashboard should make the thesis concrete: Rye improves the regulated growth loop from ad click to intake completion to paid treatment-review start to booked consult, while keeping clinical decisions with licensed providers.

## Compliance Guardrails

This project is health-adjacent and prescription-adjacent. Be conservative.

Always preserve these ideas in copy and flows:
- No guaranteed prescription.
- A licensed clinician makes all medical decisions.
- Telehealth should be state-aware.
- Compounded medications are not FDA-approved.
- Rye is infrastructure, not the provider/pharmacy/prescriber.
- Rye is not the medical network or pharmacy backend.
- Avoid implying FDA approval for compounded GLP-1s.
- Avoid selling research chemicals.
- Avoid product claims that promise weight loss, safety, no side effects, or guaranteed outcomes.
- Avoid direct checkout for medication before clinical review in real MVP framing.
- Avoid sending PHI-bearing or treatment-specific events to ad platforms.
- Avoid making compounded GLP-1 economics the whole thesis. The durable category is regulated cash-pay care.

Safer patient copy examples:
- "Start with a free online evaluation."
- "If clinically appropriate."
- "A licensed provider reviews your health history."
- "Treatment is not guaranteed."
- "Compounded medications are not FDA-approved."

Avoid:
- "Get prescribed today."
- "Guaranteed Tirzepatide."
- "FDA-approved compounded GLP-1."
- "No side effects."
- "Lose X pounds guaranteed."
- "Research peptides for human use."

## Payments Guardrails

For MVP strategy, keep Rye out of patient funds unless processor/legal approval exists.

Prototype can show:
- Rye payments as a future/approved path;
- provider-owned processor path;
- editable subscription prices.

Do not claim:
- true merchant-of-record support;
- guaranteed Stripe/Adyen approval;
- unrestricted prescription-medication processing.

## Image Generation Rules

Use GPT Image / image generation for brand imagery where appropriate. Save project-used assets into:

`public/images/rye/`

Also update:

`../Research/07-rye-image-prompts.md`

Preferred image direction:
- bright DTC healthcare lifestyle photography;
- patient using phone for telehealth;
- clinician review imagery;
- tasteful care kit still life;
- true white and pale sage;
- Rye green accents;
- realistic, premium, approachable.

Avoid in generated images:
- needles;
- syringes;
- injection pens;
- loose pills;
- readable prescription labels;
- FDA-approved badges;
- before/after bodies;
- scales and measuring tape;
- exaggerated weight-loss body imagery;
- third-party logos;
- garbled text.

Important: do not leave project-referenced assets only in the generated-images cache. Copy final assets into `public/images/rye/`.

## Copywriting Rules

Patient-facing tone:
- direct;
- reassuring;
- medical but friendly;
- clear about cost and next steps;
- transparent about clinician review.

Provider-facing tone:
- revenue optimization;
- experimentation;
- attribution;
- privacy-safe analytics;
- compliance-aware growth.
- concrete pilot-first language: attribution audit, one funnel, one provider, one state.

Do not copy competitor text verbatim. Use competitor pages for structure and category expectations, then rewrite for Rye.

## Development Practices

- Preserve light mode only.
- Use shadcn v4 component APIs and project aliases.
- Keep new components small and composable.
- Keep generated demo data in `lib/rye/data.ts` when practical.
- Run `bun run typecheck`, `bun run lint`, and `bun run build` after meaningful UI or routing changes.
- If the dev server is already running, prefer checking routes with `curl -sS -I http://127.0.0.1:3000/...`.

## Clarifying Questions

Ask clarifying questions when ambiguity could cause expensive rework, especially around:
- whether a change is patient-facing or provider-facing;
- whether a page should follow Henry Meds, MEDVi, Hims, or Rye's own style;
- whether generated imagery should include medication objects;
- whether a feature is prototype-only or MVP-bound;
- whether legal/payment claims should be shown publicly.
