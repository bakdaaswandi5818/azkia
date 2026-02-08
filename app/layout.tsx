import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Azkia - Used Home Appliances',
  description: 'Quality used home appliances including roof tiles, sand, bricks, foundation stones, and more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
