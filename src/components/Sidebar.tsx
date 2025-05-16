// File: src/components/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiHome5Line, RiStore2Line, RiTvLine, RiMoreLine } from 'react-icons/ri'

const Sidebar = () => {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path ? 'bg-gray-900' : ''
  }

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-full w-[160px] bg-black flex-col z-40 pt-20"> {/* Added pt-20 to account for navbar */}
        <nav className="flex-1 flex flex-col pt-6">
          <Link href="/" className={`flex items-center py-3 px-6 text-white hover:bg-gray-900 transition-colors ${isActive('/')}`}>
            <RiHome5Line size={24} />
            <span className="ml-4 text-sm">home</span>
          </Link>
          <Link href="/collection" className={`flex items-center py-3 px-6 text-white hover:bg-gray-900 transition-colors ${isActive('/collection')}`}>
            <RiStore2Line size={24} />
            <span className="ml-4 text-sm">collection</span>
          </Link>
          <Link href="/token" className={`flex items-center py-3 px-6 text-white hover:bg-gray-900 transition-colors ${isActive('/token')}`}>
            <span className="flex items-center justify-center w-6 h-6 text-xl font-bold">$</span>
            <span className="ml-4 text-sm">$cane</span>
          </Link>
          <Link href="/roadmap" className={`flex items-center py-3 px-6 text-white hover:bg-gray-900 transition-colors ${isActive('/roadmap')}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8H17V6C17 5.44772 16.5523 5 16 5H8C7.44772 5 7 5.44772 7 6V8H6C4.89543 8 4 8.89543 4 10V15C4 16.1046 4.89543 17 6 17H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V17H18C19.1046 17 20 16.1046 20 15V10C20 8.89543 19.1046 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="ml-4 text-sm">roadmap</span>
          </Link>
          <Link href="/more" className={`flex items-center py-3 px-6 text-white hover:bg-gray-900 transition-colors ${isActive('/more')}`}>
            <RiMoreLine size={24} />
            <span className="ml-4 text-sm">more</span>
          </Link>
        </nav>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800">
        <div className="grid grid-cols-5 h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-white">
            <RiHome5Line size={20} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link href="/collection" className="flex flex-col items-center justify-center text-white">
            <RiStore2Line size={20} />
            <span className="text-xs mt-1">Collection</span>
          </Link>
          <Link href="/token" className="flex flex-col items-center justify-center text-white">
            <span className="text-lg font-bold">$</span>
            <span className="text-xs mt-1">$CANE</span>
          </Link>
          <Link href="/roadmap" className="flex flex-col items-center justify-center text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8H17V6C17 5.44772 16.5523 5 16 5H8C7.44772 5 7 5.44772 7 6V8H6C4.89543 8 4 8.89543 4 10V15C4 16.1046 4.89543 17 6 17H7V19C7 19.5523 7.44772 20 8 20H16C16.5523 20 17 19.5523 17 19V17H18C19.1046 17 20 16.1046 20 15V10C20 8.89543 19.1046 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs mt-1">Roadmap</span>
          </Link>
          <Link href="/more" className="flex flex-col items-center justify-center text-white">
            <RiMoreLine size={20} />
            <span className="text-xs mt-1">More</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Sidebar