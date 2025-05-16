"use client"
// File: src/components/PageHeader.tsx
import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import Link from 'next/link'

interface PageHeaderProps {
  pageName?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ pageName }) => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        {/* This is just a placeholder, you won't actually need this logo here */}
        {pageName && (
          <h1 className="text-xl font-bold text-white ml-2">{pageName}</h1>
        )}
      </div>
      <WalletMultiButton className="wallet-adapter-custom-button !bg-white !text-black !rounded-full !py-2 !px-6 !text-sm !font-bold" />
    </div>
  )
}

export default PageHeader