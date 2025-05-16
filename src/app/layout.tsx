// File: src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Pandarianz | NFT Collection',
  description: 'Exclusive NFT collection on Solana blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Providers>
          <Navbar />
          <Sidebar />
          {/* Main content with padding for navbar and sidebar */}
          <main className="flex-grow md:ml-[160px] pt-20 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}