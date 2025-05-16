// File: src/components/NewPacksSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const packItems = [
  {
    id: 1,
    title: "Collector's Pack",
    description: "Get 1 of 3 McDonald's-inspired NFTs of your limited wearable!",
    image: '/logo.png',
    bgColor: 'from-indigo-500 to-purple-600'
  },
  {
    id: 2,
    title: "McDonald's Essentials",
    description: "Snag more essentials with a chance to win a McDonald's pull!",
    image: '/logo.png',
    bgColor: 'from-pink-500 to-red-500'
  },
  {
    id: 3,
    title: "Haunted Home",
    description: "Join the spooky party, get a chance to pull the rare Haul of Horrors art print.",
    image: '/logo.png',
    bgColor: 'from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: "OG Skelly",
    description: "The OG Skelly Vinyl & the OG Skellies are waiting to be revealed!",
    image: '/logo.png',
    bgColor: 'from-yellow-500 to-orange-500'
  }
]

const NewPacksSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {packItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`relative rounded-3xl overflow-hidden h-80 bg-gradient-to-b ${item.bgColor}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <Image
              src={item.image}
              alt={item.title}
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
            <p className="text-gray-200 text-sm mb-6">{item.description}</p>
            <button className="w-fit py-2 px-6 bg-white text-black rounded-full text-sm font-bold hover:bg-opacity-90 transition-all">
              Get Pack
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default NewPacksSection