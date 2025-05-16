// File: src/components/HeroSection.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const slides = [
  {
    id: 1,
    title: "Exclusive Collection",
    subtitle: "Limited edition NFTs with unique traits and benefits",
    buttonText: "View Collection",
    buttonLink: "/collection",
    image: "/banner.png"
  },
  {
    id: 2,
    title: "$CANE Token",
    subtitle: "The native token of the pandarianz ecosystem",
    buttonText: "Learn More",
    buttonLink: "/token",
    image: "/banner.png"
  },
  {
    id: 3,
    title: "The Pandarianz",
    subtitle: "Join our community of panda enthusiasts",
    buttonText: "Explore",
    buttonLink: "/about",
    image: "/banner.png"
  }
]

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, nextSlide])

  return (
    <div className="mx-4 mt-4 mb-8 relative rounded-3xl overflow-hidden w-auto h-[500px]"> 
      {slides.map((slide, index) => (
        <motion.div
          key={slide.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="relative h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-8 md:px-12"> 
              <motion.div 
                className="max-w-xl"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <div className="flex items-center mb-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C12 5.5 12 8.5 12 12M12 12C12 15.5 12 18.5 12 22M12 12C8.5 12 5.5 12 2 12M12 12C15.5 12 18.5 12 22 12" 
                      stroke="#79AA50" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <div className="ml-2 h-px flex-grow bg-gradient-to-r from-[#79AA50] to-transparent"></div>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-white mb-8">
                  {slide.subtitle}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block px-8 py-4 bg-white text-black text-lg font-bold rounded-full hover:bg-opacity-90 transition-all"
                >
                  {slide.buttonText}
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
      
      {/* Navigation Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-white w-3 h-3' : 'bg-white/50'} transition-all`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection