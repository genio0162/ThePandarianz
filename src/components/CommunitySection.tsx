// File: src/components/CommunitySection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const communityItems = [
  { id: 1, image: '/logo.png', creator: '@JPancits' },
  { id: 2, image: '/logo.png', creator: '@SushiCreativ' },
  { id: 3, image: '/logo.png', creator: '@RobottiAndrea' },
  { id: 4, image: '/logo.png', creator: '@jamesreek' },
  { id: 5, image: '/logo.png', creator: '@artdood' },
  { id: 6, image: '/logo.png', creator: '@mikidithis' },
  { id: 7, image: '/logo.png', creator: '@JPancits' },
  { id: 8, image: '/logo.png', creator: '@RobottiAndrea' },
  { id: 9, image: '/logo.png', creator: '@NRD_design' },
]

const CommunitySection = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-4">
      {communityItems.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative aspect-square rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={item.image}
            alt={`Community content by ${item.creator}`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.4 15.99 6 17.26 7.97 17.29C6.47 18.48 4.59 19.14 2.56 19.14C2.22 19.14 1.88 19.12 1.54 19.08C3.44 20.31 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
              </svg>
              <span className="ml-1 text-xs text-white">{item.creator}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default CommunitySection