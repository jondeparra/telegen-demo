export const treatmentPlans = [
  {
    name: "Starter review",
    price: "$299",
    cadence: "first month promo",
    description: "Clinical review, treatment plan, supplies, and follow-up support if prescribed.",
    highlighted: false,
  },
  {
    name: "Tirzepatide care",
    price: "$399",
    cadence: "per month",
    description: "Weekly injectable GLP-1 path with clinician review, check-ins, and refill workflow.",
    highlighted: true,
  },
  {
    name: "Advanced dose",
    price: "$499",
    cadence: "per month",
    description: "Higher-dose path when clinically appropriate, with additional support touchpoints.",
    highlighted: false,
  },
]

export const funnelStages = [
  { label: "Ad click", value: 12840, rate: "100%" },
  { label: "Landing view", value: 11990, rate: "93%" },
  { label: "Quiz start", value: 7820, rate: "65%" },
  { label: "Quiz complete", value: 5140, rate: "43%" },
  { label: "Paid review", value: 1688, rate: "14%" },
  { label: "Booked consult", value: 1240, rate: "10%" },
]

export const campaignRows = [
  {
    name: "NV Tirzepatide Spring",
    source: "Meta",
    revenue: "$87.4k",
    cvr: "13.8%",
    lift: "+21%",
    status: "Winning",
  },
  {
    name: "CA Med Spa Lookalike",
    source: "Meta",
    revenue: "$61.9k",
    cvr: "10.6%",
    lift: "+9%",
    status: "Testing",
  },
  {
    name: "Utah Search Retarget",
    source: "Google",
    revenue: "$24.2k",
    cvr: "8.3%",
    lift: "+4%",
    status: "Learning",
  },
]

export const experiments = [
  {
    name: "Paywall price framing",
    variant: "$399/mo vs first-month promo",
    result: "+18% paid starts",
  },
  {
    name: "Quiz proof moment",
    variant: "Social proof after BMI step",
    result: "+11% quiz completion",
  },
  {
    name: "Booking CTA",
    variant: "Book clinician review",
    result: "+7% consult bookings",
  },
]

export const complianceItems = [
  "State license match captured before booking",
  "No guaranteed prescription language",
  "Compounded GLP-1 disclaimer required",
  "PHI-safe event names for ad platforms",
  "Provider approval before publishing",
]

export const patientPipeline = [
  { name: "Maya R.", state: "CA", status: "Booked consult", value: "$399" },
  { name: "Jordan P.", state: "NV", status: "Paid review", value: "$399" },
  { name: "Elena S.", state: "CA", status: "Completed intake", value: "$0" },
  { name: "Chris D.", state: "UT", status: "Follow-up needed", value: "$499" },
]

export const chatSteps = [
  {
    prompt:
      "Welcome to Rye. I can help collect the basics for a clinician to review whether a GLP-1 treatment path may be appropriate. What state are you in?",
    options: ["California", "Nevada", "Utah"],
    response: "California",
  },
  {
    prompt: "Great, we have clinicians licensed for California in this demo. What is your biological sex?",
    options: ["Female", "Male", "Intersex"],
    response: "Female",
  },
  {
    prompt: "What is your birthday?",
    options: ["Jan 12, 1988", "Apr 8, 1994", "Aug 19, 1979"],
    response: "Apr 8, 1994",
  },
  {
    prompt: "What is your height?",
    options: ["5 ft 3 in", "5 ft 6 in", "5 ft 10 in"],
    response: "5 ft 6 in",
  },
  {
    prompt: "What is your current weight?",
    options: ["178 lbs", "205 lbs", "232 lbs"],
    response: "205 lbs",
  },
  {
    prompt: "What is your primary goal?",
    options: ["Lose weight", "Improve metabolic health", "Maintain results"],
    response: "Lose weight",
  },
  {
    prompt: "Any history of pancreatitis, medullary thyroid cancer, or MEN2?",
    options: ["No", "Not sure", "Yes"],
    response: "No",
  },
  {
    prompt: "Are you pregnant, breastfeeding, or planning pregnancy soon?",
    options: ["No", "Yes", "Not applicable"],
    response: "No",
  },
  {
    prompt: "Do you know your recent blood pressure range?",
    options: ["Under 120/80", "120/80 to 139/89", "140/90 or higher", "Not sure"],
    response: "120/80 to 139/89",
  },
]

export const bookingSlots = [
  "Today, 4:30 PM",
  "Tomorrow, 10:00 AM",
  "Tomorrow, 2:15 PM",
  "Friday, 9:30 AM",
]

export const providerPillars = [
  {
    key: "acquire",
    name: "Acquire",
    eyebrow: "Patient acquisition",
    blurb:
      "Compliant ad creative, state-aware landing pages, and an AI-assisted intake that lifts qualified consult bookings.",
    bullets: [
      "Henry-style landing templates per condition",
      "State gating before any treatment language",
      "Provider-approved ad copy and claim guardrails",
    ],
    thumbnailLabel: "Campaigns and landings",
  },
  {
    key: "convert",
    name: "Convert",
    eyebrow: "Intake and booking",
    blurb:
      "An AI-assisted patient intake that captures structured history, then hands off to your licensed clinician for review and scheduling.",
    bullets: [
      "iMessage-style intake with structured controls",
      "Clinician-of-record review before any plan offer",
      "Booking calendar wired to your provider availability",
    ],
    thumbnailLabel: "Intake and consult",
  },
  {
    key: "attribute",
    name: "Attribute",
    eyebrow: "Revenue attribution",
    blurb:
      "PHI-safe analytics that show which campaigns, landing pages, intake steps, and offers turn cash-pay demand into booked consults and paid treatment-review starts.",
    bullets: [
      "Funnel drop-off by stage and state",
      "Paywall and offer experiments with revenue lift",
      "Campaign-level ROAS without sending PHI to ad platforms",
    ],
    thumbnailLabel: "Revenue dashboard",
  },
]

export const providerDifferentiators = [
  {
    vs: "vs in-house engineering",
    weakness: [
      "Months to ship a compliant funnel and intake",
      "No team that has shipped DTC telehealth before",
      "Compliance review built ad hoc, per page",
    ],
    ryeAffirm: "Rye ships your first compliant funnel in days, not quarters.",
  },
  {
    vs: "vs clinical-ops AI agents",
    weakness: [
      "Replace front-office staff and clinical workflows",
      "Touch scheduling, EMR, and patient comms inside the clinic",
      "Risk overlapping with the licensed practice of medicine",
    ],
    ryeAffirm: "Rye stays at the acquisition and attribution layer. Your clinicians and ops team are untouched.",
  },
  {
    vs: "vs generic funnel SaaS",
    weakness: [
      "Built for SaaS demos and ecommerce, not regulated care",
      "No state-aware routing or clinician-of-record handoff",
      "Pixel-fires PHI to ad platforms by default",
    ],
    ryeAffirm: "Rye is opinionated for cash-pay telehealth: state-aware, PHI-safe, and provider-approved.",
  },
]

export const providerTrustStatements = [
  "Licensed clinicians make all medical decisions",
  "No guaranteed prescription",
  "Compounded medications are not FDA-approved",
  "Rye is infrastructure — not provider, pharmacy, or prescriber",
]

export const providerFaqs = [
  {
    q: "Are you a provider, pharmacy, or prescriber?",
    a: "No. Rye is infrastructure. A licensed clinician of record at your clinic reviews intake and makes every medical decision. Rye does not prescribe, dispense, or hold patient funds for prescription medication.",
  },
  {
    q: "How does Rye stay compliant across states?",
    a: "Every funnel captures state before it shows treatment language, routes to a clinician licensed in that state, and pairs each ad and landing variant with a provider-approval and takedown workflow. Compounded medication disclaimers are required by default.",
  },
  {
    q: "What does a pilot include?",
    a: "A 30-day paid attribution audit plus one Henry-style funnel stood up for one condition in one state. White-glove setup, your branding, your clinicians. We onboard a small number of clinics each quarter.",
  },
  {
    q: "Do we keep our brand and clinicians?",
    a: "Yes. Rye runs under your clinic’s brand and your provider of record. We are the acquisition spine; you remain the practice.",
  },
  {
    q: "How is this different from hiring an agency or building in-house?",
    a: "Agencies optimize ad spend; they don’t build state-aware intake, attribution, or compliance review. In-house engineering takes months and rarely has DTC telehealth pattern memory. Rye ships the whole funnel in days, opinionated for cash-pay care.",
  },
  {
    q: "What data do you collect, and how is PHI handled?",
    a: "Ad-platform events use PHI-safe names; treatment-specific signals stay inside Rye and your provider’s record. We do not send PHI-bearing or treatment-specific events to Meta, Google, TikTok, or any ad network. PHI handling is reviewed before each new campaign.",
  },
]
