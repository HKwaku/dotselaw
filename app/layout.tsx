import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dotse@Law - Full Service Law Firm | Ghana',
  description: 'Full service law firm offering services in Private Equity, Corporate & Commercial Law, Immigration Advisory, Family Law, Criminal & Civil Litigation in Ghana.',
  keywords: 'law firm, Ghana, corporate law, commercial law, litigation, immigration, private equity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="smooth-scroll">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
