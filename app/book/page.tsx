import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookingFlow } from "@/components/rye/booking-flow"
import { RyeLogo } from "@/components/rye/logo"

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost">
            <Link href="/checkout">
              <ArrowLeft data-icon="inline-start" />
              Checkout
            </Link>
          </Button>
          <RyeLogo />
          <div className="w-[94px]" />
        </div>
      </header>
      <BookingFlow />
    </main>
  )
}
