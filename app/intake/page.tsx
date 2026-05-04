import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { IntakeChat } from "@/components/rye/intake-chat"
import { RyeLogo } from "@/components/rye/logo"

export default function IntakePage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/">
              <ArrowLeft data-icon="inline-start" />
              Back
            </Link>
          </Button>
          <RyeLogo />
          <div className="w-[72px]" />
        </div>
      </header>
      <IntakeChat />
    </main>
  )
}
