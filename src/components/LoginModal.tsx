'use client'

import { useState } from 'react'
import Image from 'next/image'
import { RiCloseLine } from 'react-icons/ri'
import { motion, AnimatePresence } from 'framer-motion'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState('')
//   const { connected } = useWallet()

//   const isConnected = connected;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email sign-in logic here
    console.log('Sign in with email:', email)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md p-6 bg-white dark:bg-gray-900 rounded-xl shadow-xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <RiCloseLine size={24} />
            </button>
            
            <h2 className="text-2xl font-bold mb-6 text-center">Log in or sign up</h2>
            
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
              >
                Continue
              </button>
            </form>
            
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white dark:bg-gray-900 text-gray-500">OR</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => console.log('Continue with Google')}
              >
                <Image src="/google-icon.png" alt="Google" width={20} height={20} />
                <span>Continue with Google</span>
              </button>
              
              <div className="w-full py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-md flex items-center justify-center">
                <WalletMultiButton className="!bg-transparent !w-full !h-auto !p-0 !rounded-none !shadow-none" />
              </div>
            </div>
            
            <p className="mt-6 text-xs text-center text-gray-500">
              By logging in, you agree to our{' '}
              <a href="/terms-of-service" className="text-blue-500 hover:underline">
                Terms of Service
              </a>{' '}
              &{' '}
              <a href="/privacy-policy" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
            
            <div className="mt-4 text-center text-xs text-gray-500">
              Powered by{' '}
              <span className="font-medium">dynamic</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default LoginModal