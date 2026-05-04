import { DashboardCommandCenter } from "@/components/telegen/dashboard-command-center"

export default function DashboardPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-65"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.055) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />
      <div className="pointer-events-none absolute left-[-18%] top-10 h-72 w-[58rem] rotate-[-14deg] bg-[linear-gradient(90deg,rgba(34,211,238,0.2),rgba(190,242,100,0.18),transparent)] blur-3xl" />
      <div className="pointer-events-none absolute right-[-18%] top-96 h-72 w-[58rem] rotate-[14deg] bg-[linear-gradient(90deg,transparent,rgba(251,113,133,0.18),rgba(139,92,246,0.17))] blur-3xl" />
      <div className="relative z-10">
        <DashboardCommandCenter />
      </div>
    </main>
  )
}
