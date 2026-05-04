import "./globals.css"
import { MotionRoot } from "@/components/rye/motion-root"

export const metadata = {
  title: "Rye | Cash-pay telehealth revenue optimization",
  description:
    "A provider-sales prototype for Rye, a revenue optimization platform for cash-pay telehealth funnels.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="light font-sans antialiased"
    >
      <body>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  )
}
