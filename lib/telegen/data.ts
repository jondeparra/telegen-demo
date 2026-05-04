export const navItems = [
  { label: "Platform", href: "/#platform" },
  { label: "Command Center", href: "/dashboard" },
  { label: "Compliance", href: "/#compliance" },
  { label: "Integrations", href: "/#integrations" },
  { label: "Pilot", href: "/#pilot" },
]

export const growthLoop = [
  "Ad click",
  "Landing page",
  "Intake",
  "State routing",
  "Paid review start",
  "Booking",
  "Provider review",
  "Attribution",
]

export const productPillars = [
  {
    title: "Provider-approved funnels",
    detail:
      "Launch cash-pay patient journeys with approval states, version history, consent blocks, and offer controls built into the workflow.",
    stat: "6 days",
    label: "pilot launch target",
  },
  {
    title: "AI-assisted intake setup",
    detail:
      "Draft intake steps, branching logic, and disqualification paths while keeping protocol approval with licensed clinicians.",
    stat: "42%",
    label: "quiz drop-off located",
  },
  {
    title: "State-aware booking",
    detail:
      "Capture location early, match to eligible clinicians, and keep an audit trail for license coverage before consult scheduling.",
    stat: "3",
    label: "launch states ready",
  },
  {
    title: "PHI-safe attribution",
    detail:
      "Measure campaigns by booked consults and paid treatment-review starts without sending treatment-specific signals to ad platforms.",
    stat: "0",
    label: "PHI pixels required",
  },
]

export const failureModes = [
  "Generic funnel builders leak health intent into ad tooling.",
  "CRMs do not understand provider licensure or state gates.",
  "Agencies ship copy faster than compliance can approve it.",
  "EHRs are not designed for ad-to-booking experimentation.",
]

export const compliancePillars = [
  {
    title: "Claims review before publish",
    detail: "Ads, landing pages, SMS, email, and scripts move through a risk queue before launch.",
  },
  {
    title: "Clinician control",
    detail: "A licensed clinician makes all medical decisions. Telegen does not decide eligibility, treatment, dosing, or prescriptions.",
  },
  {
    title: "Provider-owned funds",
    detail: "Telegen stays out of patient funds unless processor and legal approval exist.",
  },
  {
    title: "Audit trails",
    detail: "State match, approval status, copy version, consent, and attribution events remain reviewable.",
  },
]

export const integrations = [
  "Scheduling",
  "CRM and webhooks",
  "EHR intake export",
  "Revenue imports",
  "Email and SMS",
  "Approved pharmacy handoff",
]

export const dashboardNav = [
  "Overview",
  "AI Intake Builder",
  "Paywalls",
  "Attribution",
  "Compliance",
  "Patients",
]

export const metrics = [
  { label: "Attributed revenue", value: "$184.2k", delta: "+18.4%" },
  { label: "Booked consults", value: "312", delta: "+27" },
  { label: "Paid review starts", value: "486", delta: "+21.9%" },
  { label: "Booking rate", value: "38.6%", delta: "+4.2 pts" },
  { label: "Estimated ROAS", value: "3.8x", delta: "+0.6x" },
]

export const funnelStages = [
  { label: "Landing", value: 100, count: "12,480" },
  { label: "Intake start", value: 71, count: "8,861" },
  { label: "State match", value: 62, count: "7,738" },
  { label: "Paid review", value: 39, count: "4,868" },
  { label: "Booked", value: 31, count: "3,870" },
]

export const campaigns = [
  { name: "CA longevity audit", source: "Meta", state: "CA", starts: 172, booked: 69, roas: "4.2x" },
  { name: "NV weight-care demand", source: "Search", state: "NV", starts: 118, booked: 41, roas: "3.5x" },
  { name: "UT hormone consult", source: "Creator", state: "UT", starts: 96, booked: 29, roas: "2.9x" },
]

export const experiments = [
  {
    name: "Treatment-review framing",
    winner: "Clinician review first",
    lift: "+14.8%",
    detail: "Won on paid treatment-review starts without increasing refund questions.",
  },
  {
    name: "State gate position",
    winner: "Before medical history",
    lift: "+8.1%",
    detail: "Reduced unsupported-state intake completion and support tickets.",
  },
]

export const stateCoverage = [
  { state: "CA", status: "Ready", clinicians: 4, next: "Launch copy approved" },
  { state: "NV", status: "Ready", clinicians: 2, next: "Booking calendar connected" },
  { state: "UT", status: "Review", clinicians: 1, next: "License renewal check" },
  { state: "AZ", status: "Waitlist", clinicians: 0, next: "Unsupported-state fallback" },
]

export const complianceQueue = [
  { item: "Hero claim", risk: "Medium", status: "Needs fair-balance review" },
  { item: "Creator script", risk: "High", status: "Before-after language flagged" },
  { item: "Paywall FAQ", risk: "Low", status: "Approved with edits" },
  { item: "SKU attestation", risk: "Medium", status: "Pharmacy documentation pending" },
]

export const patientPipeline = [
  { stage: "Started intake", count: 8861 },
  { stage: "Completed intake", count: 6534 },
  { stage: "Paid review start", count: 4868 },
  { stage: "Booked consult", count: 3870 },
  { stage: "Clinician reviewed", count: 2142 },
]

export const intakeNodes = [
  { title: "State capture", meta: "Required first", status: "Approved", x: 8, y: 36 },
  { title: "Health profile", meta: "History, meds, allergies", status: "Review", x: 35, y: 18 },
  { title: "Contraindications", meta: "Provider protocol", status: "Approved", x: 35, y: 57 },
  { title: "Unsupported state", meta: "Waitlist fallback", status: "Draft", x: 65, y: 18 },
  { title: "Book consult", meta: "Licensed match only", status: "Approved", x: 67, y: 57 },
]

export const intakeFields = [
  "Patient state",
  "Sex and birthday",
  "Height and weight",
  "Medical history",
  "Current medications",
  "Allergies",
  "Pregnancy status where relevant",
  "Blood pressure if known",
]

export const paywallVariants = [
  { name: "Review-first", price: "$249", metric: "+14.8%", status: "Winner" },
  { name: "Transparent monthly", price: "$299", metric: "+6.3%", status: "Running" },
  { name: "Concierge support", price: "$349", metric: "-2.1%", status: "Paused" },
]

export const bookingSlots = [
  { clinician: "Dr. M. Chen", states: "CA, NV", window: "Tue 10:30 AM", status: "Available" },
  { clinician: "NP A. Rivera", states: "CA", window: "Wed 2:00 PM", status: "Available" },
  { clinician: "PA J. Hall", states: "UT", window: "Pending renewal", status: "Review" },
]

export const confirmationSteps = [
  "Payment starts a treatment-review workflow; it does not guarantee a prescription.",
  "A licensed clinician makes all medical decisions.",
  "Telegen is infrastructure, not the provider, pharmacy, prescriber, medical network, or merchant of record.",
]
