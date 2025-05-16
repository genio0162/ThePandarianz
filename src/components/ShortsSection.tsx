// File: src/components/ShortsSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const shortsItems = [
  { id: 1, image: '/logo.png', videoId: 'video1' },
  { id: 2, image: '/logo.png', videoId: 'video2' },
  { id: 3, image: '/logo.png', videoId: 'video3' },
  { id: 4, image: '/logo.png', videoId: 'video4' },
  { id: 5, image: '/logo.png', videoId: 'video5' },
  { id: 6, image: '/logo.png', videoId: 'video6' },
  { id: 7, image: '/logo.png', videoId: 'video7' },
  { id: 8, image: '/logo.png', videoId: 'video8' },
  { id: 9, image: '/logo.png', videoId: 'video9' },
]

const ShortsSection = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-4">
      {shortsItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={item.image}
            alt={`Short ${item.id}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              className="w-10 h-10 text-white opacity-80" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M8 5V19L19 12L8 5Z" 
                fill="currentColor" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ShortsSection