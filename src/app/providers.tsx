'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import { WalletContextProvider } from '@/context/WalletContextProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </ThemeProvider>
    </NextUIProvider>
  )
}