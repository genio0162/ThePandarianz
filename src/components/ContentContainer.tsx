// File: src/components/ContentContainer.tsx
import React from 'react'

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      {children}
    </div>
  )
}

export default ContentContainer