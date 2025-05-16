// File: src/components/FeaturedSection.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredItems = [
  {
    id: 1,
    title: '$DOOD',
    description: 'Pre-registered users got their tokens. If you missed out, the claim window is now open!',
    buttonText: 'Claim Now',
    image: '/logo.png',
    bgColor: 'from-gray-900 to-gray-800'
  },
  {
    id: 2,
    title: 'Doodles²',
    description: 'Draw Me Closer',
    buttonText: 'Watch Now',
    image: '/logo.png',
    bgColor: 'from-purple-600 to-purple-500'
  },
  {
    id: 3,
    title: 'BILLBOARD DOUBLEWIDE',
    description: 'An epic wild story from your friend doodles!',
    buttonText: 'Watch Now',
    image: '/logo.png',
    bgColor: 'from-pink-500 to-pink-400'
  },
  {
    id: 4,
    title: 'Doodles²',
    description: "Can't Hold Me",
    buttonText: 'Watch Now',
    image: '/logo.png',
    bgColor: 'from-yellow-500 to-yellow-400'
  }
]

const FeaturedSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredItems.map((item, index) => (
        <motion.div
          key={item.id}
          className={`rounded-3xl overflow-hidden bg-gradient-to-b ${item.bgColor} text-white`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="p-6 pt-10 flex flex-col h-full">
            <div className="relative h-32 w-32 mx-auto mb-4">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-200 mb-4 text-sm flex-grow">{item.description}</p>
            <button className="w-full py-3 bg-white text-black font-bold rounded-full transition-all duration-300 hover:bg-opacity-90">
              {item.buttonText}
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default FeaturedSection