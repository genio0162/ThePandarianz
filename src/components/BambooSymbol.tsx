// File: src/components/BambooSymbol.tsx
import React from 'react'

interface BambooSymbolProps {
  width?: number
  height?: number
  color?: string
  className?: string
}

const BambooSymbol: React.FC<BambooSymbolProps> = ({ 
  width = 24, 
  height = 24, 
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12 2C12 5.5 12 8.5 12 12M12 12C12 15.5 12 18.5 12 22M12 12C8.5 12 5.5 12 2 12M12 12C15.5 12 18.5 12 22 12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M14 4C14 5.5 14 6.5 14 8M14 8C14 9.5 14 10.5 14 12M14 8C12.5 8 11.5 8 10 8M14 8C15.5 8 16.5 8 18 8" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M10 16C10 17.5 10 18.5 10 20M10 16C10 14.5 10 13.5 10 12M10 16C8.5 16 7.5 16 6 16M10 16C11.5 16 12.5 16 14 16" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  )
}

export default BambooSymbol