'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const newsPacks = [
  {
    id: 1,
    title: "Collector's Pack",
    description: "Get 1 of 3 McDonald's-inspired NFTs of your limited wearable!",
    image: '/logo.png',
    gradient: 'bg-gradient-to-r from-indigo-500 to-purple-500'
  },
  {
    id: 2,
    title: "McDonald's Essentials",
    description: "Snag more essentials with a chance to win a McDonald's pull!",
    image: '/logo.png',
    gradient: 'bg-gradient-to-r from-pink-500 to-red-500'
  },
  {
    id: 3,
    title: "Haunted Home",
    description: "Join the spooky party, get a chance to pull the rare Haul of Horrors art print.",
    image: '/logo.png',
    gradient: 'bg-gradient-to-r from-green-500 to-teal-500'
  },
  {
    id: 4,
    title: "OG Skelly",
    description: "The OG Skelly Vinyl & the OG Skellies are waiting to be revealed!",
    image: '/logo.png',
    gradient: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  }
]

const NewsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">New Packs</h2>
          <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold">
            Get Packs
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsPacks.map((pack, index) => (
            <motion.div
              key={pack.id}
              className={`relative h-80 rounded-3xl overflow-hidden shadow-lg ${pack.gradient}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={pack.image}
                  alt={pack.title}
                  width={150}
                  height={150}
                  className="object-contain animate-float"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">{pack.title}</h3>
                <p className="text-gray-200 text-sm mb-6">{pack.description}</p>
                <button className="py-2 px-6 bg-white text-black rounded-full text-sm font-bold hover:bg-opacity-90 transition-all w-fit">
                  Get Pack
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsSection