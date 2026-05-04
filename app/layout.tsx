import "@fontsource/instrument-serif/latin-400.css"
import "./globals.css"
import { GeistSans } from "geist/font/sans"

import { MotionRoot } from "@/components/telegen/motion-root"

export const metadata = {
  title: "Telegen | Revenue infrastructure for regulated cash-pay care",
  description:
    "A provider-facing SaaS demo for Telegen, the regulated growth layer for cash-pay care.",
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
      className={`${GeistSans.variable} light font-sans antialiased`}
    >
      <body>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  )
}
