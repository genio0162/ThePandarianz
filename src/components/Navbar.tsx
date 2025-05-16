// File: src/components/Navbar.tsx
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useTheme } from 'next-themes'

const Navbar = () => {
  //const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { connected } = useWallet()
  const { setVisible } = useWalletModal()

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Desktop Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black h-20">
        <div className="max-w-full mx-auto px-4 flex items-center justify-between h-full">
          {/* Left side: Logo and name */}
          <div className="flex items-center ml-0 md:ml-[160px]"> {/* Offset for sidebar */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="The Pandarianz" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <span className="ml-3 text-xl font-bold text-white">the pandarianz</span>
            </Link>
          </div>

          {/* Right side: Theme toggle and wallet button */}
          <div className="flex items-center space-x-4">
            
            
            {/* Desktop wallet button */}
            <div className="hidden md:block">
              <WalletMultiButton className="wallet-adapter-custom-button !bg-white !text-black !rounded-full !py-2 !px-6 !text-sm !font-bold" />
            </div>
            
            {/* Mobile wallet button */}
            <div className="md:hidden">
              <button
                onClick={() => setVisible(true)}
                className="custom-mobile-wallet-btn bg-white text-black rounded-full px-4 py-2 text-sm font-bold"
              >
                {connected ? 'Wallet' : 'Select Wallet'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Top Bar - For small screens only */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black h-16 flex items-center px-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="The Pandarianz" 
            width={32} 
            height={32} 
            className="rounded-full"
          />
          <span className="ml-3 text-lg font-bold text-white">the pandarianz</span>
        </Link>
        <div className="ml-auto flex items-center space-x-2">

          <button
            onClick={() => setVisible(true)}
            className="custom-mobile-wallet-btn bg-white text-black rounded-full px-3 py-1.5 text-xs font-bold"
          >
            Select Wallet
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar