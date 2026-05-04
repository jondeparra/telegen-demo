# Rye landing-page rework — TODO

> Goal: position Rye as **"Agentic AI telehealth infrastructure for licensed cash-pay providers"** on a new `/providers` B2B page, while keeping `/` patient-first per `AGENTS.md`. Aimed at YC-readable clarity.
> Author of this document: planning pass on 2026-05-04. Source-of-truth research lives at `../Research/`. Strategy contract lives at `AGENTS.md` — do not modify.

---

## 1. Pressure-test memo (YC office-hours frame)

Six forcing questions, applied to Rye as it stands. Stage = pre-product / prototype, no paid users.

- **Q1 — Demand reality.** No paid pilots, no LOIs. Research's own gate ("talk to 5–10 target providers before building") is unmet. The prototype is ahead of demand evidence. Don't let the `/providers` page imply otherwise.
- **Q2 — Status quo.** Cash-pay clinics today stitch Webflow + Calendly + Stripe + bespoke intake (duct-tape), build in-house (expensive), or run on referral (leaks revenue). Real pain — but no one calls the workaround "broken." The page must dramatize this, not assume it.
- **Q3 — Desperate specificity.** Buyer category is clear (cash-pay GLP-1 / hormone / longevity operators, CA/NV/UT first). Buyer *human* is not. Before `/providers` ships, name 3 specific clinic operators we'd email about a pilot. Otherwise the page is theater.
- **Q4 — Narrowest wedge.** What's payable this week is **not** "the platform." It's *one* outcome: a paid attribution audit + a single Henry-style funnel stood up for one named clinic in 30 days. The `Apply for pilot` CTA must reflect this; do not promise platform self-serve.
- **Q5 — Observation & surprise.** No real users on the prototype yet. Defer until pilot.
- **Q6 — Future-fit.** Tailwind: FDA March-2026 warning letters to 30 telehealth marketers, GLP-1 enforcement tightening, agentic-AI healthcare funded but crowded. Rye becomes more essential as compliance + attribution pressure rises — *only if it stays infrastructure*. Provider-of-record, pharmacy, prescriber are off-limits.

**Verdict.** The wedge is sharper than the headline. Lead `/providers` with the specific pilot offer ("paid attribution audit + one funnel for one clinic in 30 days"), and use *Agentic AI telehealth infrastructure* as the why-now narrative *behind* that wedge — not as a self-serve promise.

---

## 2. Code-truth findings (Karpathy pass over the prototype)

| # | Finding | File | Action |
|---|---|---|---|
| 1 | `app/layout.tsx` hardcodes `className="light"` while `app/globals.css:93–125` defines a full `.dark` palette that is unreachable. Dead config. | `app/layout.tsx:19`, `app/globals.css:93` | **Stretch:** delete the `.dark` block. Light-only per `AGENTS.md`. |
| 2 | `components/rye/product-visual.tsx` and `components/rye/section-heading.tsx` appear underused. | `components/rye/*` | Reuse on `/providers`, or delete. Don't ship the dead variants. |
| 3 | `package.json` has no `ai` / `@ai-sdk/*` / agent runtime. The locked headline ("Agentic AI…") is positioning ahead of code. | `package.json` | Acceptable for a YC prototype — but the page must never overclaim live capability. See copy traps in §8. |
| 4 | `/thanks` AI support chat is hardcoded (no real backend). | `app/thanks/page.tsx` | Note in copy that the assistant is a demo. No fix needed now. |
| 5 | Compliance-critical line on `/checkout` is on-message: *"Payment does not guarantee a prescription. A licensed clinician makes all medical decisions."* | `components/rye/checkout-flow.tsx` | Keep verbatim. Mirror the same language pattern on `/providers`. |
| 6 | Hero on `/` is on-message ("Oral Tirzepatide tablets, reviewed online"). | `app/page.tsx:135` | Do **not** put "Agentic AI telehealth infrastructure" anywhere on `/`. |
| 7 | `app/page.tsx` ends with FAQ at `:336` and a tiny disclaimer footer at `:382`. | `app/page.tsx` | Insert the new "For providers" band **between** these two — above the disclaimer, below the FAQ. |
| 8 | gstack install ran `clone` only — `setup` was blocked from auto-execution. So the office-hours run inlined into §1 was authored from the skill's framework, not the binary. | n/a | If we want richer pressure-testing, run `~/.claude/skills/gstack/setup -q` manually with explicit consent. |

---

## 3. Locked positioning

- `/providers` hero (h1, exact): **"Agentic AI telehealth infrastructure for licensed cash-pay providers."**
- `/providers` sub: **"Launch compliant patient funnels, AI-assisted intake, booking, and revenue attribution — in days."**
- `/providers` primary CTA: **"Apply for pilot"** (mailto / Tally — no inline platform self-serve).
- `/providers` secondary CTA: **"See the dashboard"** → `/dashboard`.
- `/` keeps current patient-first hero ("Oral Tirzepatide tablets, reviewed online"). **Never** put the Agentic AI phrase on `/`.

---

## 4. `/providers` page outline (PR 1 builds the **bold** sections)

1. **Site nav** — reuse `components/rye/site-nav.tsx`. Add `variant="providers"` so the right-side CTA reads `Apply for pilot` instead of `Do I Qualify?`. No new file.
2. **Hero** — locked headline + sub. Two CTAs (above). Right-side image: reuse `/public/images/rye/clinician-review.png`.
3. Who this is for — 4 inline `Badge`s in a `Card`: `Peptide` / `GLP-1` / `Hormone` / `Longevity`. (PR 2)
4. **Three-pillar product story — Acquire / Convert / Attribute** — 3 × shadcn `Card`. Pulls new `providerPillars` from `lib/rye/data.ts` (§6).
5. **Live patient-flow strip** — 5 deep-link cards: `/`, `/intake`, `/checkout`, `/book`, `/thanks`. Frame as "What Rye builds for your clinic." Each card uses 2–3 lines from existing `chatSteps` / `treatmentPlans` / `bookingSlots` as a static preview.
6. **Dashboard preview band** — 3 `metric-card` (Attributed revenue, Booked consults, Cost per booked consult) + compressed `Table` of `campaignRows` + `Progress` ladder of `funnelStages`. CTA → `/dashboard`. No new component.
7. How it's different — 3-col `Card` grid: vs in-house engineering / vs clinical-ops agents (Cenote/Saga lane — do not name in copy) / vs generic funnel SaaS. Pulls new `providerDifferentiators`. (PR 2)
8. **Compliance & trust** — left list rendered from existing `complianceItems`; right inline `Card` with 4 short trust statements ("Licensed clinicians make all medical decisions" / "No guaranteed prescription" / "Compounded medications are not FDA-approved" / "Rye is infrastructure — not provider, pharmacy, or prescriber").
9. **Pilot CTA band (`#pilot`)** — full-bleed sage. Headline: "Apply for the Rye pilot." Sub: "Onboarding a small number of cash-pay clinics this quarter. Pilots include white-glove setup and a paid attribution audit." One button → mailto/Tally.
10. **FAQ** — `Accordion` from new `providerFaqs` (§6).
11. Decomposed footer disclaimers (Henry pattern). (PR 2)

---

## 5. Homepage `/` "For providers" band (PR 1)

- **Insertion point:** `app/page.tsx`, between the FAQ section ending at `:380` and the disclaimer footer at `:382`.
- **Tone:** soft. Do **not** put "Agentic AI telehealth infrastructure" on `/`. B2B language stays on `/providers`.
- **Copy:**
  - Eyebrow `Badge`: `For providers`
  - Headline (h2): `Are you the clinic behind a flow like this?`
  - Sub: `Rye is the infrastructure. See what we build for licensed cash-pay providers.`
  - Single ghost/outline `Button` → `/providers`, label `For providers →`
- **Visual:** match the existing section padding (`py-16`), use `bg-[var(--rye-cream)]` to differentiate from the FAQ section.

---

## 6. `lib/rye/data.ts` additions

Add four exports. Tight schemas. **No fake testimonials** until a real pilot ships.

```ts
// 3 entries
providerPillars: { key: 'acquire' | 'convert' | 'attribute', name, eyebrow, blurb, bullets: [string, string, string], thumbnailLabel }[]

// 3 entries  (PR 2)
providerDifferentiators: { vs: string, weakness: [string, string, string], ryeAffirm: string }[]

// 4 entries  (PR 2)
providerTrustStatements: string[]

// 6 entries
providerFaqs: { q: string, a: string }[]
```

Suggested `providerFaqs` questions:
1. Are you a provider, pharmacy, or prescriber? *(answer: no — infrastructure only)*
2. How does Rye stay compliant across states?
3. What does a pilot include?
4. Do we keep our brand and clinicians?
5. How is this different from hiring an agency or building in-house?
6. What data do you collect, and how is PHI handled?

---

## 7. Components — what to build, what NOT to build

**Build:**
- `app/providers/page.tsx` — the page itself.
- `components/rye/site-nav.tsx` — add a `variant?: "patient" | "providers"` prop. Default stays `"patient"`.
- *Maybe* `components/rye/flow-step-card.tsx` — only if used 5× verbatim in §4.5.

**Do NOT build (Karpathy: no abstractions for single-use code):**
- No `Hero`, `FAQSection`, `CTABand`, `PillarCard`, `TrustList`, `ComparisonGrid` components. Compose Tailwind + shadcn primitives inline.
- No icon-library wrapper. Use one `lucide-react` import per file, inline.
- No animation primitives. Light-mode static.
- No new theme variants. Reuse `--rye-green`, `--rye-sage`, `--rye-cream`, `--rye-ink`, `--rye-gold`.

---

## 8. Copy traps (zero hits required)

Run `rg -i 'phrase'` across `app/providers/page.tsx` before merging — should return zero matches.

- `Get patients prescribed faster` / `Increase prescriptions` / `Guaranteed Tirzepatide` — implies guaranteed Rx.
- `AI clinician` / `AI doctor` / `autonomous care` / `agents that practice medicine` — collides with Hippocratic AI; reads as practicing medicine.
- `Operate your clinic on autopilot` / `agents that run your front office` — Cenote / Saga lane; overlaps regulated activity.
- `HIPAA compliant` as a marketing badge — say specifics (`PHI-safe event names`, `state-aware routing`, `provider approval before publish`). HIPAA is a posture, overclaim is exposure.
- `FDA-approved compounded GLP-1` / `safe, no side effects` / `lose X lbs guaranteed` — research-flagged copy traps.
- Generic SaaS tells: `all-in-one platform`, `unlock growth`, `supercharge your funnel`, `enterprise-grade`, `revolutionary`.
- Anything implying Rye is the merchant of record, pharmacy, or prescribing entity.

---

## 9. PR plan

### PR 1 — smallest viable rework (one PR, ~1 day)
- [ ] Create `app/providers/page.tsx` with sections **2, 4, 5, 6, 8, 9, 10** from §4.
- [ ] Add `providerPillars` (3) + `providerFaqs` (6) to `lib/rye/data.ts`.
- [ ] Add `variant="providers"` prop to `components/rye/site-nav.tsx`.
- [ ] Insert "For providers" band into `app/page.tsx` per §5.
- [ ] Run §10 verification.

### PR 2 — stretch
- [ ] Add §4 sections **3 (Who this is for), 7 (How it's different), 11 (Decomposed footer)**.
- [ ] Add `providerDifferentiators` (3) + `providerTrustStatements` (4) to `data.ts`.
- [ ] Replace pilot mailto with a real Tally form.
- [ ] Delete the unreachable `.dark` block in `app/globals.css`.
- [ ] Delete or genuinely use `components/rye/product-visual.tsx`, `section-heading.tsx`.

### Out of scope for this rework (named so we don't drift)
- Real AI SDK integration on `/intake` or `/thanks`.
- Real Tally / Cal / Linear pilot form backend.
- Dashboard data wiring beyond the existing demo data.
- Stripe / payments work.
- Any change to `/`, `/intake`, `/checkout`, `/book`, `/thanks`, `/dashboard` other than the homepage band.

---

## 10. Verification (run before each merge)

```bash
bun run typecheck
bun run lint
bun run build
bun run dev   # in another terminal
curl -sS -I http://127.0.0.1:3000/providers  # expect 200
```

Manual walk:
1. `/` loads, hero unchanged, scroll to bottom — "For providers" band sits above the disclaimer.
2. Click `For providers →` → `/providers` loads.
3. `/providers` hero reads "Agentic AI telehealth infrastructure for licensed cash-pay providers."
4. Click each of the 5 flow-strip cards → confirm `/`, `/intake`, `/checkout`, `/book`, `/thanks` load with no console errors.
5. Click "Open the live dashboard" → `/dashboard` loads.
6. Click "Apply for pilot" → mailto opens (or Tally URL).
7. Light-mode only — no dark-mode flicker. Inspect `<html>` → still has `class="light"`.
8. Run `rg -i -f scripts/copy-traps.txt app/providers/page.tsx` (or grep each phrase from §8) → zero matches.
9. Verify all `<Image>` `src` paths exist under `public/images/rye/`.

---

## 11. YC framing notes (for the eventual application)

- **Category:** "Agentic AI telehealth infrastructure" is the surface; the wedge is "patient-acquisition + compliance + revenue attribution for licensed cash-pay providers." Both must appear in any application — the surface alone collides with Cenote (YC), Saga AI (W26), Hippocratic AI, Bonsai Health (acquired by ModMed Apr 2026).
- **Why now:** FDA enforcement (March 2026), GLP-1 cash-pay growth, YC W26 healthcare-AI thesis.
- **Founder edge:** Henry Meds operating experience (call out in application).
- **One-liner:** "We build the patient-acquisition spine for licensed cash-pay clinics — compliant funnels, AI-assisted intake, booking, and revenue attribution, in days, without an engineering team."
- **Ask in application:** Pilot-first, not platform-first. 3 named clinic prospects > 1 generic landing page.
