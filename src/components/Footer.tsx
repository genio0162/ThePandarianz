// File: src/components/Footer.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  RiTwitterXFill, 
  RiDiscordFill, 
  RiInstagramLine, 
  RiYoutubeFill, 
  RiTelegramFill 
} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 md:pl-[200px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Image 
                src="/logo.png" 
                alt="The Pandarianz" 
                width={50} 
                height={50} 
                className="rounded-full"
              />
              <span className="ml-4 text-2xl font-bold">The Pandarianz</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Exclusive NFT collection on the Solana blockchain. Join our community of panda enthusiasts and explore the unique world of The Pandarianz.
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <RiTwitterXFill size={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <RiDiscordFill size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <RiInstagramLine size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <RiYoutubeFill size={24} />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <RiTelegramFill size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'Collection', 'About', 'Roadmap', 'Token'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Legal</h3>
            <ul className="space-y-4">
              {['Terms of Service', 'Privacy Policy', 'Cookies'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} The Pandarianz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer